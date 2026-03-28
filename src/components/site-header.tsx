"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  // Hide header entirely during active mock exams (but show on result pages)
  const isExamActive = /^\/security-plus\/mock-tests\/\d+\/?$/.test(pathname);
  if (isExamActive) return null;

  const isHome = pathname === "/";

  return (
    <header className={`${isHome ? "hidden sm:flex" : "flex"} sticky top-0 z-30 mb-4 items-center justify-between border-b border-zinc-800/80 bg-zinc-950/95 px-4 py-3 backdrop-blur-sm sm:static sm:mb-8 sm:rounded-xl sm:border sm:border-zinc-800 sm:bg-zinc-900/70 sm:px-5 sm:py-4`}>
      <Link href="/" className="flex items-center gap-2.5">
        <span className="text-lg font-bold tracking-tight sm:text-xl">Stuick</span>
      </Link>
      {!isHome && (
        <nav>
          <Link
            href="/"
            aria-label="Home"
            className="flex items-center gap-1.5 rounded-lg border border-zinc-700/60 bg-zinc-800/60 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all hover:border-zinc-600 hover:bg-zinc-700/80 hover:text-zinc-200 active:scale-95"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
          </Link>
        </nav>
      )}
    </header>
  );
}
