import { prisma } from "@/lib/prisma";
import { StudyModule } from "@/components/study-module";

export default async function StudyPage() {
  const domains = await prisma.domain.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      topics: {
        include: {
          progress: true,
        },
        orderBy: {
          id: "asc",
        },
      },
    },
  });

  return (
    <main>
      <StudyModule domains={domains} />
    </main>
  );
}
