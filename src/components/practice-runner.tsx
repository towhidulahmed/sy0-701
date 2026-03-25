"use client";

import { useState } from "react";
import Link from "next/link";
import type { QuestionPayload } from "@/lib/exam";

type Props = {
  topicTitle: string;
  topicSlug: string;
  domainName: string;
  questions: QuestionPayload[];
};

export function PracticeRunner({ topicTitle, topicSlug, domainName, questions }: Props) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  if (questions.length === 0) {
    return (
      <div className="px-3 pt-4 sm:px-0">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
          <p className="text-zinc-400">No questions available for this topic yet.</p>
          <Link href="/practice" className="mt-4 inline-block text-sm text-cyan-400 underline">
            ← Back to topics
          </Link>
        </div>
      </div>
    );
  }

  const question = questions[currentIdx];
  const isCorrect = selectedAnswer === question.correctAnswers[0];
  const isFinished = score.total === questions.length && answered;

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelectedAnswer(option);
    setAnswered(true);
    const correct = option === question.correctAnswers[0];
    setScore((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore({ correct: 0, total: 0 });
  };

  const getOptionClass = (option: string) => {
    if (!answered) {
      return "border-zinc-700 bg-zinc-800/60 active:bg-zinc-700";
    }
    const isThisCorrect = option === question.correctAnswers[0];
    const isThisSelected = option === selectedAnswer;

    if (isThisCorrect) {
      return "border-emerald-500 bg-emerald-950/40 text-emerald-200";
    }
    if (isThisSelected && !isThisCorrect) {
      return "border-red-500 bg-red-950/40 text-red-200";
    }
    return "border-zinc-700/40 bg-zinc-800/30 text-zinc-500";
  };

  const getOptionIcon = (option: string) => {
    if (!answered) return null;
    const isThisCorrect = option === question.correctAnswers[0];
    const isThisSelected = option === selectedAnswer;

    if (isThisCorrect) {
      return (
        <svg className="h-5 w-5 flex-shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      );
    }
    if (isThisSelected && !isThisCorrect) {
      return (
        <svg className="h-5 w-5 flex-shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="px-3 pt-4 sm:px-0">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <Link href="/practice" className="flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-200">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Topics
        </Link>
        <span className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-400">
          {currentIdx + 1} / {questions.length}
        </span>
      </div>

      {/* Topic info */}
      <div className="mb-4 rounded-2xl border border-zinc-800 bg-gradient-to-br from-cyan-950/20 to-zinc-900 p-4 sm:rounded-xl">
        <p className="text-xs font-medium text-cyan-400/70">{domainName}</p>
        <h2 className="mt-0.5 text-lg font-bold tracking-tight">{topicTitle}</h2>
        <div className="mt-2 flex gap-3 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500/60" />
            {score.correct} correct
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full bg-red-500/60" />
            {score.total - score.correct} wrong
          </span>
        </div>
      </div>

      {/* Finished state */}
      {isFinished && currentIdx === questions.length - 1 ? (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:rounded-xl">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
              <span className="text-2xl font-bold text-cyan-400">
                {Math.round((score.correct / score.total) * 100)}%
              </span>
            </div>
            <h3 className="text-lg font-bold">Practice Complete!</h3>
            <p className="mt-1 text-sm text-zinc-400">
              {score.correct} of {score.total} correct
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <button
                onClick={handleRestart}
                className="rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-500 active:bg-cyan-700"
              >
                Try Again
              </button>
              <Link
                href="/practice"
                className="rounded-xl bg-zinc-800 px-5 py-2.5 text-center text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-700 active:bg-zinc-700"
              >
                Back to Topics
              </Link>
            </div>
          </div>
        </div>
      ) : (
        /* Question card */
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 sm:rounded-xl sm:p-5">
          {/* Difficulty badge */}
          <div className="mb-3 flex items-center gap-2">
            <span className={`rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
              question.difficulty === "easy"
                ? "bg-emerald-950/50 text-emerald-400"
                : question.difficulty === "medium"
                ? "bg-amber-950/50 text-amber-400"
                : "bg-red-950/50 text-red-400"
            }`}>
              {question.difficulty}
            </span>
            <span className="text-[10px] text-zinc-600">{question.qid}</span>
          </div>

          {/* Scenario */}
          {question.scenario && (
            <div className="mb-3 rounded-lg border border-zinc-700/50 bg-zinc-800/50 p-3 text-sm leading-relaxed text-zinc-300">
              {question.scenario}
            </div>
          )}

          {/* Prompt */}
          <p className="mb-4 text-[15px] font-medium leading-relaxed">{question.prompt}</p>

          {/* Options */}
          <div className="space-y-2">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(option)}
                disabled={answered}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm leading-relaxed transition-all ${getOptionClass(option)} ${
                  !answered ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                  answered && option === question.correctAnswers[0]
                    ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                    : answered && option === selectedAnswer
                    ? "border-red-500 bg-red-500/20 text-red-400"
                    : "border-zinc-600 text-zinc-400"
                }`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{option}</span>
                {getOptionIcon(option)}
              </button>
            ))}
          </div>

          {/* Explanation (shown after answering) */}
          {answered && (
            <div className={`mt-4 rounded-xl border p-4 ${
              isCorrect
                ? "border-emerald-700/40 bg-emerald-950/20"
                : "border-red-700/40 bg-red-950/20"
            }`}>
              <div className="flex items-center gap-2 text-sm font-semibold">
                {isCorrect ? (
                  <>
                    <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-emerald-400">Correct!</span>
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-red-400">Incorrect</span>
                  </>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{question.explanation}</p>
            </div>
          )}

          {/* Next button */}
          {answered && currentIdx < questions.length - 1 && (
            <button
              onClick={handleNext}
              className="mt-4 w-full rounded-xl bg-cyan-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-500 active:bg-cyan-700"
            >
              Next Question →
            </button>
          )}
        </div>
      )}

      {/* Progress bar */}
      <div className="mt-4 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-1.5 rounded-full bg-cyan-500/60 transition-all duration-300"
          style={{ width: `${((currentIdx + (answered ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
