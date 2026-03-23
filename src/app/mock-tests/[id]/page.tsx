import { notFound } from "next/navigation";
import { ExamRunner } from "@/components/exam-runner";
import { MAX_MOCK_TESTS } from "@/lib/constants";

export default async function MockTestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const testId = Number(id);

  if (!Number.isInteger(testId) || testId < 1 || testId > MAX_MOCK_TESTS) {
    notFound();
  }

  return (
    <main>
      <ExamRunner testId={testId} />
    </main>
  );
}
