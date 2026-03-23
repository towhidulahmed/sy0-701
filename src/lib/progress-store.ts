import { prisma } from "@/lib/prisma";
import { getFirestoreDbOrNull } from "@/lib/firebase-admin";

export async function getStudyProgressMap() {
  const db = getFirestoreDbOrNull();

  if (db) {
    try {
      const snapshot = await db.collection("studyProgress").get();
      const map = new Map<number, boolean>();
      snapshot.docs.forEach((doc) => {
        const payload = doc.data();
        if (typeof payload.topicId === "number") {
          map.set(payload.topicId, Boolean(payload.studied));
        }
      });
      return map;
    } catch {
      // fallback to Prisma
    }
  }

  const progress = await prisma.studyProgress.findMany();
  return new Map(progress.map((item) => [item.topicId, item.studied]));
}

export async function listStudyProgress() {
  const map = await getStudyProgressMap();
  return Array.from(map.entries()).map(([topicId, studied]) => ({
    topicId,
    studied,
  }));
}

export async function upsertStudyProgress(topicId: number, studied: boolean) {
  const db = getFirestoreDbOrNull();

  if (db) {
    try {
      const ref = db.collection("studyProgress").doc(String(topicId));
      await ref.set(
        {
          topicId,
          studied,
          updatedAt: new Date().toISOString(),
        },
        { merge: true },
      );

      return {
        topicId,
        studied,
      };
    } catch {
      // fallback to Prisma
    }
  }

  const progress = await prisma.studyProgress.upsert({
    where: {
      topicId,
    },
    update: {
      studied,
    },
    create: {
      topicId,
      studied,
    },
  });

  return {
    topicId: progress.topicId,
    studied: progress.studied,
  };
}
