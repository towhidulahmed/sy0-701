import { STATIC_SYLLABUS } from "./static-syllabus";
import type { LinuxDomain } from "./linux-study-data";

/**
 * Generate flashcards from Security+ syllabus data.
 * Each topic produces flashcards from keyTerms, tips, and examples.
 */
function generateFlashcards(topic: (typeof STATIC_SYLLABUS)[number]["topics"][number]): { front: string; back: string }[] {
  const cards: { front: string; back: string }[] = [];

  // Key terms as flashcards, ask "What is X?"
  for (const term of topic.keyTerms) {
    cards.push({
      front: `What is ${term}?`,
      back: extractDefinition(topic.content, term),
    });
  }

  // Tips as flashcards
  for (const tip of topic.tips) {
    const parts = tip.split(".");
    if (parts.length >= 2) {
      cards.push({
        front: parts[0].trim() + "?",
        back: tip,
      });
    }
  }

  return cards;
}

/** Extract a relevant sentence/paragraph about a term from content */
function extractDefinition(content: string, term: string): string {
  const lines = content.split("\n");
  const termLower = term.toLowerCase();

  // Look for lines mentioning the term
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.toLowerCase().includes(termLower) && line.trim().length > 20) {
      // Get this line and possibly the next for context
      let result = line.replace(/^[#\-*]+\s*/, "").trim();
      if (result.length < 60 && i + 1 < lines.length) {
        const next = lines[i + 1].replace(/^[#\-*]+\s*/, "").trim();
        if (next.length > 0) result += " " + next;
      }
      return result.slice(0, 300);
    }
  }

  return `A key concept in ${term}, review the study guide for details.`;
}

/**
 * Convert STATIC_SYLLABUS into LinuxDomain-compatible structure for FlashcardRunner
 */
export const SECPLUS_FLASHCARD_DOMAINS: LinuxDomain[] = STATIC_SYLLABUS.map((domain) => ({
  key: domain.key,
  name: domain.name,
  level: "intermediate" as const,
  topics: domain.topics.map((topic) => ({
    slug: topic.slug,
    title: topic.title,
    content: topic.content,
    commands: [],
    tips: topic.tips,
    flashcards: generateFlashcards(topic),
  })),
}));

export const SECPLUS_TOTAL_FLASHCARDS = SECPLUS_FLASHCARD_DOMAINS.reduce(
  (sum, d) => sum + d.topics.reduce((s, t) => s + t.flashcards.length, 0),
  0
);
