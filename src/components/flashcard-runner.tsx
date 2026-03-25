"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import type { LinuxDomain } from "@/lib/linux-study-data";

type Flashcard = { front: string; back: string; topic: string };

export function FlashcardRunner({ domains }: { domains: LinuxDomain[] }) {
  const searchParams = useSearchParams();
  const topicFilter = searchParams.get("topic");

  const allCards: Flashcard[] = useMemo(() => {
    const cards: Flashcard[] = [];
    for (const domain of domains) {
      for (const topic of domain.topics) {
        if (topicFilter && topic.slug !== topicFilter) continue;
        for (const fc of topic.flashcards) {
          cards.push({ ...fc, topic: topic.title });
        }
      }
    }
    return cards;
  }, [domains, topicFilter]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [unknown, setUnknown] = useState(0);

  const currentTopicTitle = topicFilter
    ? domains.flatMap((d) => d.topics).find((t) => t.slug === topicFilter)?.title ?? "All Topics"
    : "All Topics";

  if (allCards.length === 0) {
    return (
      <div className="px-3 pt-4 sm:px-0">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
          <p className="text-zinc-400">No flashcards available for this topic.</p>
          <Link href="/linux/flashcards" className="mt-4 inline-block text-sm text-emerald-400 underline">
            ← All flashcards
          </Link>
        </div>
      </div>
    );
  }

  const card = allCards[currentIdx];
  const isFinished = known + unknown === allCards.length;

  const handleMark = (isKnown: boolean) => {
    if (isKnown) setKnown((k) => k + 1);
    else setUnknown((u) => u + 1);
    setFlipped(false);
    if (currentIdx < allCards.length - 1) {
      setCurrentIdx((i) => i + 1);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setFlipped(false);
    setKnown(0);
    setUnknown(0);
  };

  if (isFinished) {
    return (
      <div className="px-3 pt-4 sm:px-0">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950/50">
            <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-zinc-100">Session Complete!</h3>
          <p className="mt-2 text-sm text-zinc-400">
            {known} of {allCards.length} marked as known
          </p>
          <div className="mt-2 flex justify-center gap-4 text-sm">
            <span className="text-emerald-400">✓ {known} known</span>
            <span className="text-amber-400">✗ {unknown} review</span>
          </div>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <button
              onClick={handleRestart}
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              Study Again
            </button>
            <Link
              href="/linux/flashcards"
              className="rounded-xl bg-zinc-800 px-5 py-2.5 text-center text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-700"
            >
              All Topics
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 pt-4 sm:px-0">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <Link href="/linux/flashcards" className="flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-200">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Topics
        </Link>
        <span className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-400">
          {currentIdx + 1} / {allCards.length}
        </span>
      </div>

      {/* Topic label */}
      <p className="mb-3 text-xs font-medium text-emerald-500">{currentTopicTitle} — {card.topic}</p>

      {/* Flashcard */}
      <button
        onClick={() => setFlipped(!flipped)}
        className="w-full rounded-2xl border border-zinc-700/60 bg-zinc-900 p-6 text-left transition-all active:scale-[0.99] sm:p-8 min-h-[200px] flex flex-col justify-center"
      >
        {!flipped ? (
          <>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-3">Question</p>
            <p className="text-base font-medium leading-7 text-zinc-100 sm:text-lg">{card.front}</p>
            <p className="mt-4 text-xs text-zinc-600">Tap to reveal answer</p>
          </>
        ) : (
          <>
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-500 mb-3">Answer</p>
            <p className="text-base leading-7 text-zinc-200 sm:text-lg">{card.back}</p>
          </>
        )}
      </button>

      {/* Actions — show after flipping */}
      {flipped && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            onClick={() => handleMark(false)}
            className="rounded-xl border border-amber-800/40 bg-amber-950/20 py-3 text-sm font-semibold text-amber-400 transition-colors active:bg-amber-900/30"
          >
            ✗ Still Learning
          </button>
          <button
            onClick={() => handleMark(true)}
            className="rounded-xl border border-emerald-800/40 bg-emerald-950/20 py-3 text-sm font-semibold text-emerald-400 transition-colors active:bg-emerald-900/30"
          >
            ✓ Got It
          </button>
        </div>
      )}

      {/* Progress bar */}
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-emerald-600 transition-all"
          style={{ width: `${((known + unknown) / allCards.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
