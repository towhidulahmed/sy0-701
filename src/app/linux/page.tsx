import Link from "next/link";
import { LINUX_STUDY } from "@/lib/linux-study-data";

export default function LinuxHome() {
  const totalTopics = LINUX_STUDY.reduce((sum, d) => sum + d.topics.length, 0);
  const totalFlashcards = LINUX_STUDY.reduce(
    (sum, d) => sum + d.topics.reduce((s, t) => s + t.flashcards.length, 0),
    0
  );

  return (
    <main className="space-y-4 px-3 pt-4 sm:space-y-6 sm:px-0 sm:pt-0">
      {/* Hero */}
      <section className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-emerald-950/30 to-zinc-900 p-5 sm:rounded-xl sm:p-6">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Linux Administration</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          Master Linux from the command line up. Comprehensive study guides, interactive flashcards, and practice exams for system administration.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <div className="rounded-lg bg-zinc-800/60 px-3 py-2.5 text-center">
            <p className="text-lg font-bold text-zinc-200">{totalTopics}</p>
            <p className="text-[10px] text-zinc-500">Topics</p>
          </div>
          <div className="rounded-lg bg-zinc-800/60 px-3 py-2.5 text-center">
            <p className="text-lg font-bold text-zinc-200">{totalFlashcards}</p>
            <p className="text-[10px] text-zinc-500">Flashcards</p>
          </div>
          <div className="rounded-lg bg-zinc-800/60 px-3 py-2.5 text-center">
            <p className="text-lg font-bold text-zinc-200">{LINUX_STUDY.length}</p>
            <p className="text-[10px] text-zinc-500">Domains</p>
          </div>
        </div>
      </section>

      {/* Study Guide CTA */}
      <Link
        href="/linux/study"
        className="group block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-colors active:bg-zinc-800/80 sm:rounded-xl sm:p-6 sm:hover:bg-zinc-800/60"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold sm:text-lg">Study Guide</h3>
            <p className="mt-1.5 text-sm leading-6 text-zinc-400">
              In-depth guides covering all Linux admin topics — commands, examples, and tips.
            </p>
          </div>
          <span className="flex-shrink-0 text-lg text-emerald-500/60 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </Link>

      {/* Flashcards CTA */}
      <Link
        href="/linux/flashcards"
        className="group block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-colors active:bg-zinc-800/80 sm:rounded-xl sm:p-6 sm:hover:bg-zinc-800/60"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold sm:text-lg">Flashcards</h3>
            <p className="mt-1.5 text-sm leading-6 text-zinc-400">
              {totalFlashcards} interactive flashcards — flip to reveal answers and test your recall.
            </p>
          </div>
          <span className="flex-shrink-0 text-lg text-emerald-500/60 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </Link>

      {/* Practice CTA */}
      <Link
        href="/linux/practice"
        className="group block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-colors active:bg-zinc-800/80 sm:rounded-xl sm:p-6 sm:hover:bg-zinc-800/60"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold sm:text-lg">Practice Exams</h3>
            <p className="mt-1.5 text-sm leading-6 text-zinc-400">
              Multiple-choice questions to test your Linux knowledge with instant feedback.
            </p>
          </div>
          <span className="flex-shrink-0 text-lg text-emerald-500/60 transition-transform group-hover:translate-x-1">→</span>
        </div>
      </Link>

      {/* Topics overview */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:rounded-xl sm:p-6">
        <h3 className="text-base font-semibold">Topics Covered</h3>
        <div className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
          {(["beginner", "intermediate", "advanced"] as const).map((level) => {
            const levelDomains = LINUX_STUDY.filter((d) => d.level === level);
            if (levelDomains.length === 0) return null;
            const labelColor = level === "beginner" ? "text-emerald-400 bg-emerald-950/50" : level === "intermediate" ? "text-amber-400 bg-amber-950/50" : "text-rose-400 bg-rose-950/50";
            return (
              <div key={level}>
                <span className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${labelColor}`}>
                  {level}
                </span>
                {levelDomains.map((domain) => (
                  <div key={domain.key} className="mb-1.5 flex justify-between rounded-lg bg-zinc-800/50 px-3 py-2">
                    <span>{domain.name}</span>
                    <span className="font-semibold text-zinc-300">
                      {domain.topics.length} {domain.topics.length === 1 ? "topic" : "topics"}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
