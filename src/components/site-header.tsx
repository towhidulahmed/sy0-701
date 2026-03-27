"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  // Hide header during active mock exams (but show on result pages)
  const isExamActive = /^\/security-plus\/mock-tests\/\d+\/?$/.test(pathname);
  if (isExamActive) return null;

  return (
    <header className="mb-8 hidden items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 py-4 sm:flex">
      <Link href="/" className="flex items-center gap-3">
        <h1 className="text-xl font-bold tracking-tight">Stuick</h1>
        <span className="hidden text-sm text-zinc-500 lg:inline">Why Study Long When You Can Study Quick</span>
      </Link>
      <nav className="flex gap-2 text-sm">
        <Link
          className="rounded-lg bg-zinc-800 px-4 py-2.5 font-medium transition-colors hover:bg-zinc-700"
          href="/"
        >
          Home
        </Link>
      </nav>
    </header>
  );
}
