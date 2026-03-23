import { Domain, Question } from "@prisma/client";
import { DOMAIN_COUNTS, DOMAIN_KEYS, EXAM_QUESTION_COUNT, MAX_SCORE, PASSING_SCORE } from "@/lib/constants";

export type QuestionPayload = {
  id: number;
  qid: string;
  prompt: string;
  type: string;
  difficulty: string;
  options: string[];
  explanation: string;
  scenario?: string | null;
  domainKey: string;
  domainName: string;
  topicId: number;
  studyPath: string;
};

const stringHash = (text: string) => {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
};

const seededShuffle = <T,>(input: T[], seed: number) => {
  const list = [...input];
  let state = seed;
  const rand = () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };

  for (let index = list.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(rand() * (index + 1));
    [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
  }

  return list;
};

export const buildExamFromPool = (
  testNumber: number,
  allQuestions: (Question & { domain: Domain; topic: { studyPath: string } })[],
) => {
  const byDomain = DOMAIN_KEYS.reduce<Record<string, (Question & { domain: Domain; topic: { studyPath: string } })[]>>((acc, key) => {
    acc[key] = allQuestions.filter((question) => question.domain.key === key);
    return acc;
  }, {});

  const selected: (Question & { domain: Domain; topic: { studyPath: string } })[] = [];

  DOMAIN_KEYS.forEach((key) => {
    const domainQuestions = seededShuffle(byDomain[key], stringHash(`${testNumber}-${key}`));
    const needed = DOMAIN_COUNTS[key];
    for (let index = 0; index < needed; index += 1) {
      selected.push(domainQuestions[index % domainQuestions.length]);
    }
  });

  return seededShuffle(selected.slice(0, EXAM_QUESTION_COUNT), stringHash(`exam-${testNumber}`));
};

export const toQuestionPayload = (
  question: Question & { domain: Domain; topic: { studyPath: string } },
): QuestionPayload => ({
  id: question.id,
  qid: question.qid,
  prompt: question.prompt,
  type: question.type,
  difficulty: question.difficulty,
  options: JSON.parse(question.options),
  explanation: question.explanation,
  scenario: question.scenario,
  domainKey: question.domain.key,
  domainName: question.domain.name,
  topicId: question.topicId,
  studyPath: question.topic.studyPath,
});

export const calculateScore = (correct: number) => {
  const score = Math.round((correct / EXAM_QUESTION_COUNT) * MAX_SCORE);
  return {
    score,
    pass: score >= PASSING_SCORE,
  };
};
