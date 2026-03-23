import Link from "next/link";
import { getResultById } from "@/lib/result-store";

export default async function ResultPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; resultId: string }>;
  searchParams: Promise<{ auto?: string }>;
}) {
  const { id, resultId } = await params;
  const query = await searchParams;
  const testId = Number(id);
  const result = await getResultById(resultId);

  if (!result) {
    return <p className="text-zinc-400">Result not found.</p>;
  }

  return (
    <main className="space-y-6">
      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
        <h2 className="text-xl font-semibold sm:text-2xl">Mock Test {testId} Result</h2>
        {query.auto === "1" ? <p className="mt-1 text-sm text-amber-300">Auto-submitted because time expired.</p> : null}
        <p className="mt-4 text-3xl font-bold sm:text-4xl">{result.score900}/900</p>
        <p className={`mt-2 text-base font-semibold sm:text-lg ${result.pass ? "text-emerald-400" : "text-rose-400"}`}>
          {result.pass ? "PASS" : "FAIL"} (Passing score: 750)
        </p>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
        <h3 className="font-semibold">Domain Breakdown</h3>
        <div className="mt-3 space-y-2">
          {result.domainScores.map((score) => (
            <div key={`${score.domainName}-${score.domainId}`} className="rounded-md bg-zinc-800 p-3 text-sm">
              <p className="font-medium">{score.domainName}</p>
              <p className="text-zinc-400">
                {score.correct}/{score.total} correct ({score.pct.toFixed(1)}%)
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
        <h3 className="font-semibold">Wrong Answers with Explanations</h3>
        {result.wrongAnswers.length === 0 ? (
          <p className="mt-2 text-sm text-emerald-400">Excellent run — no incorrect answers.</p>
        ) : (
          <div className="mt-3 space-y-3">
            {result.wrongAnswers.map((wrong) => (
              <article key={`${wrong.questionId}-${wrong.topicId}`} className="rounded-md border border-zinc-700 p-3 text-sm">
                <p className="font-medium leading-6">{wrong.questionQid}: {wrong.questionPrompt}</p>
                <p className="mt-1 break-words text-zinc-300">Your answer: {wrong.selectedAnswer}</p>
                <p className="break-words text-emerald-300">Correct answer: {wrong.correctAnswer}</p>
                <p className="mt-1 leading-6 text-zinc-400">{wrong.explanation}</p>
                <Link href={wrong.recommendedTopic} className="mt-2 inline-block text-cyan-400 hover:text-cyan-300">
                  Review Study Section
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      <div className="grid gap-2 sm:flex sm:gap-3">
        <Link href={`/mock-tests/${testId}`} className="rounded-md bg-zinc-800 px-3 py-2.5 text-center text-sm hover:bg-zinc-700">
          Retake This Test
        </Link>
        <Link href="/dashboard" className="rounded-md bg-cyan-700 px-3 py-2.5 text-center text-sm font-semibold hover:bg-cyan-600">
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
