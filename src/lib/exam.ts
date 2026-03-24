import { EXAM_QUESTION_COUNT, MAX_SCORE, PASSING_SCORE } from "@/lib/constants";
import { EXAM_SETS } from "@/lib/exam-bank";
import { STATIC_SYLLABUS } from "@/lib/static-syllabus";

export type QuestionPayload = {
  id: number;
  qid: string;
  prompt: string;
  type: string;
  difficulty: string;
  options: string[];
  explanation: string;
  correctAnswers: string[];
  scenario?: string | null;
  domainKey: string;
  domainName: string;
  topicId: number;
  studyPath: string;
};

export type ExamAttempt = {
  id: string;
  testNumber: number;
  startedAt: string;
  completedAt: string;
  elapsedSeconds: number;
  score900: number;
  pass: boolean;
  domainScores: Array<{
    domainId: number;
    domainKey: string;
    domainName: string;
    correct: number;
    total: number;
    pct: number;
  }>;
  wrongAnswers: Array<{
    questionId: number;
    questionQid: string;
    questionPrompt: string;
    selectedAnswer: string;
    correctAnswer: string;
    explanation: string;
    recommendedTopic: string;
    topicId: number;
    domainName: string;
  }>;
};

const TOPIC_ID_BY_STUDY_PATH = STATIC_SYLLABUS.flatMap((domain) => domain.topics).reduce<Record<string, number>>((acc, topic) => {
  acc[topic.studyPath] = topic.id;
  return acc;
}, {});

const EXAM_SETS_WITH_TOPIC_IDS: Array<{ setNumber: number; questions: QuestionPayload[] }> = EXAM_SETS.map((set) => ({
  setNumber: set.setNumber,
  questions: set.questions.map((question) => ({
    ...question,
    topicId: TOPIC_ID_BY_STUDY_PATH[question.studyPath] ?? 0,
  })),
}));

export const getQuestionPool = () => EXAM_SETS_WITH_TOPIC_IDS.flatMap((set) => set.questions);

export const buildExamForTest = (testNumber: number) => {
  const normalizedTestNumber = Number.isFinite(testNumber)
    ? Math.min(Math.max(Math.floor(testNumber), 1), EXAM_SETS_WITH_TOPIC_IDS.length)
    : 1;

  const selectedSet = EXAM_SETS_WITH_TOPIC_IDS[normalizedTestNumber - 1] ?? EXAM_SETS_WITH_TOPIC_IDS[0];
  return selectedSet.questions.slice(0, EXAM_QUESTION_COUNT);
};

export const calculateScore = (correct: number) => {
  const score = Math.round((correct / EXAM_QUESTION_COUNT) * MAX_SCORE);
  return {
    score,
    pass: score >= PASSING_SCORE,
  };
};

export const evaluateExam = (
  testNumber: number,
  startedAt: string,
  endedAt: string,
  elapsedSeconds: number,
  questions: QuestionPayload[],
  answers: Record<number, string[]>,
): ExamAttempt => {
  const domainScoresSeed = STATIC_SYLLABUS.reduce<Record<string, { domainId: number; domainName: string; correct: number; total: number }>>((acc, domain) => {
    acc[domain.key] = { domainId: domain.id, domainName: domain.name, correct: 0, total: 0 };
    return acc;
  }, {});

  const wrongAnswers: ExamAttempt["wrongAnswers"] = [];
  let correctTotal = 0;

  questions.forEach((question) => {
    const selected = [...(answers[question.id] || [])].sort();
    const actual = [...question.correctAnswers].sort();
    const matched = selected.length === actual.length && selected.every((entry, index) => entry === actual[index]);

    if (!domainScoresSeed[question.domainKey]) {
      return;
    }

    domainScoresSeed[question.domainKey].total += 1;

    if (matched) {
      correctTotal += 1;
      domainScoresSeed[question.domainKey].correct += 1;
      return;
    }

    wrongAnswers.push({
      questionId: question.id,
      questionQid: question.qid,
      questionPrompt: question.prompt,
      selectedAnswer: selected.join(" | ") || "No answer",
      correctAnswer: actual.join(" | "),
      explanation: question.explanation,
      recommendedTopic: question.studyPath,
      topicId: question.topicId,
      domainName: question.domainName,
    });
  });

  const { score, pass } = calculateScore(correctTotal);

  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    testNumber,
    startedAt,
    completedAt: endedAt,
    elapsedSeconds,
    score900: score,
    pass,
    domainScores: Object.entries(domainScoresSeed).map(([domainKey, item]) => ({
      domainId: item.domainId,
      domainKey,
      domainName: item.domainName,
      correct: item.correct,
      total: item.total,
      pct: item.total ? (item.correct / item.total) * 100 : 0,
    })),
    wrongAnswers,
  };
};
