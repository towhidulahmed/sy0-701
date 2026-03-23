import { prisma } from "@/lib/prisma";
import { StudyModule } from "@/components/study-module";
import { getStudyProgressMap } from "@/lib/progress-store";

export default async function StudyPage() {
  const progressMap = await getStudyProgressMap();

  const domains = await prisma.domain.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      topics: {
        orderBy: {
          id: "asc",
        },
      },
    },
  });

  const payload = domains.map((domain) => ({
    ...domain,
    topics: domain.topics.map((topic) => ({
      ...topic,
      progress: {
        studied: progressMap.get(topic.id) ?? false,
      },
    })),
  }));

  return (
    <main>
      <StudyModule domains={payload} />
    </main>
  );
}
