import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildExamFromPool, toQuestionPayload } from "@/lib/exam";
import { EXAM_DURATION_SECONDS, MAX_MOCK_TESTS } from "@/lib/constants";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const testNumber = Number(id);

  if (!Number.isInteger(testNumber) || testNumber < 1 || testNumber > MAX_MOCK_TESTS) {
    return NextResponse.json({ error: "Invalid mock test number" }, { status: 400 });
  }

  const allQuestions = await prisma.question.findMany({
    include: {
      domain: true,
      topic: {
        select: {
          studyPath: true,
        },
      },
    },
  });

  const examQuestions = buildExamFromPool(testNumber, allQuestions).map(toQuestionPayload);

  return NextResponse.json({
    testNumber,
    durationSeconds: EXAM_DURATION_SECONDS,
    questions: examQuestions,
  });
}
