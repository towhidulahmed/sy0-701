import { Suspense } from "react";
import { NMAP_STUDY } from "@/lib/nmap-study-data";
import { FlashcardRunner } from "@/components/flashcard-runner";

export const dynamic = "force-static";

export default function NmapFlashcardStudyPage() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="px-3 pt-4 sm:px-0">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
              <p className="text-zinc-400">Loading flashcards...</p>
            </div>
          </div>
        }
      >
        <FlashcardRunner domains={NMAP_STUDY} />
      </Suspense>
    </main>
  );
}
