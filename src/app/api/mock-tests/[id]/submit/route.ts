import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildExamFromPool, calculateScore } from "@/lib/exam";
import { DOMAIN_KEYS, EXAM_DURATION_SECONDS, MAX_MOCK_TESTS } from "@/lib/constants";
import { createResult } from "@/lib/result-store";

type SubmitPayload = {
  startedAt: string;
  endedAt?: string;
  answers: Record<number, string[]>;
};

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const testNumber = Number(id);

  if (!Number.isInteger(testNumber) || testNumber < 1 || testNumber > MAX_MOCK_TESTS) {
    return NextResponse.json({ error: "Invalid mock test number" }, { status: 400 });
  }

  const payload = (await request.json()) as SubmitPayload;
  const startedAt = new Date(payload.startedAt);
  const endedAt = payload.endedAt ? new Date(payload.endedAt) : new Date();

  if (Number.isNaN(startedAt.getTime())) {
    return NextResponse.json({ error: "Invalid start time" }, { status: 400 });
  }

  const elapsedSeconds = Math.min(
    EXAM_DURATION_SECONDS,
    Math.max(0, Math.floor((endedAt.getTime() - startedAt.getTime()) / 1000)),
  );

  const allQuestions = await prisma.question.findMany({
    include: {
      domain: true,
      topic: true,
    },
  });

  const examQuestions = buildExamFromPool(testNumber, allQuestions);

  const totals = DOMAIN_KEYS.reduce<Record<string, { correct: number; total: number; domainId: number }>>((acc, key) => {
    const sample = examQuestions.find((question) => question.domain.key === key);
    if (sample) {
      acc[key] = { correct: 0, total: 0, domainId: sample.domainId };
    }
    return acc;
  }, {});

  let correct = 0;
  const wrongAnswers: Array<{
    questionId: number;
    questionQid: string;
    questionPrompt: string;
    selectedAnswer: string;
    correctAnswer: string;
    explanation: string;
    recommendedTopic: string;
    topicId: number;
    domainName: string;
  }> = [];

  for (const question of examQuestions) {
    const selected = [...(payload.answers?.[question.id] || [])].sort();
    const actual = [...(JSON.parse(question.answer) as string[])].sort();
    const key = question.domain.key;
    totals[key].total += 1;

    const matched = selected.length === actual.length && selected.every((entry, index) => entry === actual[index]);

    if (matched) {
      correct += 1;
      totals[key].correct += 1;
    } else {
      wrongAnswers.push({
        questionId: question.id,
        questionQid: question.qid,
        questionPrompt: question.prompt,
        selectedAnswer: selected.join(" | ") || "No answer",
        correctAnswer: actual.join(" | "),
        explanation: question.explanation,
        recommendedTopic: question.topic.studyPath,
        topicId: question.topicId,
        domainName: question.domain.name,
      });
    }
  }

  const { score, pass } = calculateScore(correct);
  const resultId = await createResult({
    mockTestNumber: testNumber,
    startedAt: startedAt.toISOString(),
    completedAt: endedAt.toISOString(),
    score900: score,
    pass,
    elapsedSeconds,
    domainScores: Object.values(totals).map((item) => {
      const matchingQuestion = examQuestions.find((entry) => entry.domainId === item.domainId);
      return {
        domainId: item.domainId,
        domainKey: matchingQuestion?.domain.key || "unknown-domain",
        domainName: matchingQuestion?.domain.name || "Unknown Domain",
        correct: item.correct,
        total: item.total,
        pct: item.total ? (item.correct / item.total) * 100 : 0,
      };
    }),
    wrongAnswers,
  });

  return NextResponse.json({
    resultId,
    score,
    pass,
  });
}
