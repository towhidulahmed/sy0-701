import { FieldValue } from "firebase-admin/firestore";
import { prisma } from "@/lib/prisma";
import { getFirestoreDbOrNull } from "@/lib/firebase-admin";

export type DomainScoreRecord = {
  domainId: number;
  domainKey: string;
  domainName: string;
  correct: number;
  total: number;
  pct: number;
};

export type WrongAnswerRecord = {
  questionId: number;
  questionQid: string;
  questionPrompt: string;
  selectedAnswer: string;
  correctAnswer: string;
  explanation: string;
  recommendedTopic: string;
  topicId: number;
  domainName: string;
};

export type StoredResult = {
  id: string;
  mockTestNumber: number;
  startedAt: string;
  completedAt: string;
  score900: number;
  pass: boolean;
  elapsedSeconds: number;
  createdAt: string;
  domainScores: DomainScoreRecord[];
  wrongAnswers: WrongAnswerRecord[];
};

type CreateResultInput = Omit<StoredResult, "id" | "createdAt">;

export async function createResult(input: CreateResultInput) {
  const db = getFirestoreDbOrNull();

  if (db) {
    try {
      const ref = await db.collection("testResults").add({
        ...input,
        createdAt: FieldValue.serverTimestamp(),
      });
      return ref.id;
    } catch {
      // fallback to Prisma
    }
  }

  const created = await prisma.testResult.create({
    data: {
      mockTestNumber: input.mockTestNumber,
      startedAt: new Date(input.startedAt),
      completedAt: new Date(input.completedAt),
      score900: input.score900,
      pass: input.pass,
      elapsedSeconds: input.elapsedSeconds,
      answers: "{}",
      domainScores: {
        create: input.domainScores.map((item) => ({
          domainId: item.domainId,
          correct: item.correct,
          total: item.total,
          pct: item.pct,
        })),
      },
      wrongAnswers: {
        create: input.wrongAnswers.map((item) => ({
          questionId: item.questionId,
          selectedAnswer: item.selectedAnswer,
          correctAnswer: item.correctAnswer,
          explanation: item.explanation,
          recommendedTopic: item.recommendedTopic,
          topicId: item.topicId,
        })),
      },
    },
  });

  return String(created.id);
}

export async function getResultById(id: string): Promise<StoredResult | null> {
  const db = getFirestoreDbOrNull();

  if (db) {
    try {
      const doc = await db.collection("testResults").doc(id).get();
      if (!doc.exists) {
        return null;
      }

      const payload = doc.data();
      if (!payload) {
        return null;
      }

      return {
        id: doc.id,
        mockTestNumber: payload.mockTestNumber,
        startedAt: payload.startedAt,
        completedAt: payload.completedAt,
        score900: payload.score900,
        pass: payload.pass,
        elapsedSeconds: payload.elapsedSeconds,
        createdAt: payload.createdAt?.toDate?.()?.toISOString?.() || new Date().toISOString(),
        domainScores: payload.domainScores || [],
        wrongAnswers: payload.wrongAnswers || [],
      };
    } catch {
      // fallback to Prisma
    }
  }

  const numericId = Number(id);
  if (!Number.isInteger(numericId)) {
    return null;
  }

  const result = await prisma.testResult.findUnique({
    where: { id: numericId },
    include: {
      domainScores: {
        include: {
          domain: true,
        },
      },
      wrongAnswers: {
        include: {
          question: {
            include: {
              domain: true,
            },
          },
        },
      },
    },
  });

  if (!result) {
    return null;
  }

  return {
    id: String(result.id),
    mockTestNumber: result.mockTestNumber,
    startedAt: result.startedAt.toISOString(),
    completedAt: result.completedAt.toISOString(),
    score900: result.score900,
    pass: result.pass,
    elapsedSeconds: result.elapsedSeconds,
    createdAt: result.createdAt.toISOString(),
    domainScores: result.domainScores.map((item) => ({
      domainId: item.domainId,
      domainKey: item.domain.key,
      domainName: item.domain.name,
      correct: item.correct,
      total: item.total,
      pct: item.pct,
    })),
    wrongAnswers: result.wrongAnswers.map((item) => ({
      questionId: item.questionId,
      questionQid: item.question.qid,
      questionPrompt: item.question.prompt,
      selectedAnswer: item.selectedAnswer,
      correctAnswer: item.correctAnswer,
      explanation: item.explanation,
      recommendedTopic: item.recommendedTopic,
      topicId: item.topicId,
      domainName: item.question.domain.name,
    })),
  };
}

export async function listResults(): Promise<StoredResult[]> {
  const db = getFirestoreDbOrNull();

  if (db) {
    try {
      const snapshot = await db.collection("testResults").orderBy("createdAt", "asc").get();
      return snapshot.docs.map((doc) => {
        const payload = doc.data();
        return {
          id: doc.id,
          mockTestNumber: payload.mockTestNumber,
          startedAt: payload.startedAt,
          completedAt: payload.completedAt,
          score900: payload.score900,
          pass: payload.pass,
          elapsedSeconds: payload.elapsedSeconds,
          createdAt: payload.createdAt?.toDate?.()?.toISOString?.() || new Date().toISOString(),
          domainScores: payload.domainScores || [],
          wrongAnswers: payload.wrongAnswers || [],
        };
      });
    } catch {
      // fallback to Prisma
    }
  }

  const results = await prisma.testResult.findMany({
    orderBy: {
      createdAt: "asc",
    },
    include: {
      domainScores: {
        include: {
          domain: true,
        },
      },
      wrongAnswers: {
        include: {
          question: {
            include: {
              domain: true,
            },
          },
        },
      },
    },
  });

  return results.map((result) => ({
    id: String(result.id),
    mockTestNumber: result.mockTestNumber,
    startedAt: result.startedAt.toISOString(),
    completedAt: result.completedAt.toISOString(),
    score900: result.score900,
    pass: result.pass,
    elapsedSeconds: result.elapsedSeconds,
    createdAt: result.createdAt.toISOString(),
    domainScores: result.domainScores.map((item) => ({
      domainId: item.domainId,
      domainKey: item.domain.key,
      domainName: item.domain.name,
      correct: item.correct,
      total: item.total,
      pct: item.pct,
    })),
    wrongAnswers: result.wrongAnswers.map((item) => ({
      questionId: item.questionId,
      questionQid: item.question.qid,
      questionPrompt: item.question.prompt,
      selectedAnswer: item.selectedAnswer,
      correctAnswer: item.correctAnswer,
      explanation: item.explanation,
      recommendedTopic: item.recommendedTopic,
      topicId: item.topicId,
      domainName: item.question.domain.name,
    })),
  }));
}
