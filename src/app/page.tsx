import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-4 px-3 pt-4 sm:space-y-6 sm:px-0 sm:pt-0">
      {/* Hero */}
      <section className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 sm:rounded-xl sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">LearnLab</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">
          Your interactive learning platform. Choose a course below to get started with study guides, flashcards, practice questions, and mock exams.
        </p>
      </section>

      {/* Security+ Course Card */}
      <Link
        href="/security-plus"
        className="group block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all active:bg-zinc-800/80 sm:rounded-xl sm:p-6 sm:hover:border-cyan-800/50 sm:hover:bg-cyan-950/20"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-950/40 text-cyan-400">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold sm:text-xl">CompTIA Security+ SY0-701</h3>
              <span className="flex-shrink-0 text-lg text-cyan-500/40 transition-transform group-hover:translate-x-1">→</span>
            </div>
            <p className="mt-1.5 text-sm leading-6 text-zinc-400">
              Full exam prep with 410 questions, 35 mock exams, practice by topic, and a comprehensive study guide covering all 5 domains.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-md bg-cyan-950/40 px-2 py-0.5 text-[11px] font-medium text-cyan-400">410 Questions</span>
              <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-400">35 Mock Exams</span>
              <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-400">Study Guide</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Linux Course Card */}
      <Link
        href="/linux"
        className="group block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all active:bg-zinc-800/80 sm:rounded-xl sm:p-6 sm:hover:border-emerald-800/50 sm:hover:bg-emerald-950/20"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-950/40 text-emerald-400">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold sm:text-xl">Linux Administration</h3>
              <span className="flex-shrink-0 text-lg text-emerald-500/40 transition-transform group-hover:translate-x-1">→</span>
            </div>
            <p className="mt-1.5 text-sm leading-6 text-zinc-400">
              Master Linux from the command line up. Study guides, interactive flashcards, and practice exams for system administration.
            </p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-md bg-emerald-950/40 px-2 py-0.5 text-[11px] font-medium text-emerald-400">16 Topics</span>
              <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-400">Flashcards</span>
              <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-400">Practice Exams</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Platform info */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:rounded-xl sm:p-6">
        <h3 className="text-base font-semibold">How It Works</h3>
        <div className="mt-3 space-y-3 text-sm leading-6 text-zinc-400">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-300">1</span>
            <p><span className="font-medium text-zinc-200">Pick a course</span> — choose Security+ or Linux above to enter the learning path.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-300">2</span>
            <p><span className="font-medium text-zinc-200">Study the material</span> — read through study guides, use flashcards, and review key concepts.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-300">3</span>
            <p><span className="font-medium text-zinc-200">Test your knowledge</span> — take practice exams and get instant feedback on your progress.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
