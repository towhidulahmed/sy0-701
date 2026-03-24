import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "SecPlus_SY0-701_35_ExamSets.txt");
const examBankPath = path.join(root, "src/lib/exam-bank.ts");
const syllabusPath = path.join(root, "src/lib/static-syllabus.ts");

const raw = fs.readFileSync(sourcePath, "utf8");
const lines = raw.split(/\r?\n/);

const sets = [];
const topicsByDomain = new Map();

let currentSetNumber = 0;
let index = 0;

const parseDomainLine = (line) => {
  const match = line.match(/^(?:Domain:\s+)?(.+?)\s+\(([^)]+)\)$/);
  if (!match) {
    throw new Error(`Invalid domain line: ${line}`);
  }
  return { domainName: match[1].trim(), domainKey: match[2].trim() };
};

const slugFromStudyPath = (studyPath) => {
  const parts = studyPath.split("#");
  return parts[1] || "topic";
};

while (index < lines.length) {
  const line = lines[index].trim();
  const setMatch = line.match(/^EXAM SET\s+(\d{2})\s+OF\s+35$/);

  if (setMatch) {
    currentSetNumber = Number(setMatch[1]);
    sets[currentSetNumber - 1] = { setNumber: currentSetNumber, questions: [] };
    index += 1;
    continue;
  }

  const questionMatch = line.match(/^Question\s+(\d+)$/);
  if (!questionMatch || currentSetNumber === 0) {
    index += 1;
    continue;
  }

  const read = (prefix) => {
    index += 1;
    const valueLine = lines[index] ?? "";
    if (!valueLine.startsWith(prefix)) {
      throw new Error(`Expected '${prefix}' at line ${index + 1}, got: ${valueLine}`);
    }
    return valueLine.slice(prefix.length).trim();
  };

  const idText = read("ID: ");
  const { domainName, domainKey } = parseDomainLine(read("Domain: "));
  const topicTitle = read("Topic: ");
  const type = read("Type: ");
  const difficulty = read("Difficulty: ");
  const prompt = read("Prompt: ");
  const scenario = read("Scenario: ");

  index += 1;
  if ((lines[index] ?? "").trim() !== "Options:") {
    throw new Error(`Expected 'Options:' at line ${index + 1}`);
  }

  const options = [];
  while (index + 1 < lines.length) {
    const next = lines[index + 1] ?? "";
    const optionMatch = next.match(/^\s+\d+\.\s+(.*)$/);
    if (!optionMatch) {
      break;
    }
    options.push(optionMatch[1].trim());
    index += 1;
  }

  const correctLine = read("Correct: ");
  const explanation = read("Explanation: ");
  const studyPath = read("Study Path: ");

  while (index + 1 < lines.length) {
    const nextTrimmed = (lines[index + 1] ?? "").trim();
    if (!nextTrimmed || /^[-=]{10,}$/.test(nextTrimmed)) {
      index += 1;
      continue;
    }
    break;
  }

  const correctAnswers = type === "multiple-choice-multiple"
    ? correctLine.split(" | ").map((entry) => entry.trim()).filter(Boolean)
    : [correctLine];

  const qidNumericMatch = idText.match(/Q(\d{4})$/);
  const numericId = qidNumericMatch ? Number(qidNumericMatch[1]) : sets[currentSetNumber - 1].questions.length + 1;

  const question = {
    id: numericId,
    qid: idText,
    prompt,
    type,
    difficulty,
    options,
    explanation,
    correctAnswers,
    scenario,
    domainKey,
    domainName,
    topicTitle,
    studyPath,
  };

  sets[currentSetNumber - 1].questions.push(question);

  const topicSlug = slugFromStudyPath(studyPath);
  const domainTopics = topicsByDomain.get(domainKey) ?? { domainName, topics: new Map() };

  if (!domainTopics.topics.has(topicSlug)) {
    domainTopics.topics.set(topicSlug, {
      slug: topicSlug,
      title: topicTitle,
      prompts: [prompt],
      scenarios: [scenario],
    });
  } else {
    const topic = domainTopics.topics.get(topicSlug);
    if (topic.prompts.length < 3 && !topic.prompts.includes(prompt)) {
      topic.prompts.push(prompt);
    }
    if (topic.scenarios.length < 2 && !topic.scenarios.includes(scenario)) {
      topic.scenarios.push(scenario);
    }
  }

  topicsByDomain.set(domainKey, domainTopics);

  index += 1;
}

if (sets.length !== 35 || sets.some((set) => !set || set.questions.length !== 90)) {
  throw new Error("Parsed exam bank does not contain exactly 35 sets with 90 questions each.");
}

const examBankOutput = `import type { QuestionPayload } from "@/lib/exam";

export type ExamSet = {
  setNumber: number;
  questions: QuestionPayload[];
};

export const EXAM_SETS: ExamSet[] = ${JSON.stringify(
  sets.map((set) => ({
    setNumber: set.setNumber,
    questions: set.questions.map((question) => ({
      id: question.id,
      qid: question.qid,
      prompt: question.prompt,
      type: question.type,
      difficulty: question.difficulty,
      options: question.options,
      explanation: question.explanation,
      correctAnswers: question.correctAnswers,
      scenario: question.scenario,
      domainKey: question.domainKey,
      domainName: question.domainName,
      topicId: 0,
      studyPath: question.studyPath,
    })),
  })),
  null,
  2,
)};
`;

const domainOrder = [
  ["general-security-concepts", "General Security Concepts", 12],
  ["threats-vulnerabilities-mitigations", "Threats, Vulnerabilities & Mitigations", 22],
  ["security-architecture", "Security Architecture", 18],
  ["security-operations", "Security Operations", 28],
  ["security-program-management-oversight", "Security Program Management & Oversight", 20],
];

let topicIdCounter = 1;

const makeTopicContent = (title, domainName, prompts) => {
  const bullets = prompts.slice(0, 3).map((prompt) => `- ${prompt}`);
  return `## ${title}\n${title} is covered in ${domainName}. Review this topic using the exam-style scenarios and decision patterns below.\n\nObjective coverage:\n${bullets.join("\\n")}`;
};

const extractKeyTerms = (title, prompts) => {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 3);

  const promptWords = prompts
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 4);

  const unique = [...new Set([...base, ...promptWords])].slice(0, 6);
  return unique.length ? unique : ["security", "control", "risk", "incident"];
};

const syllabus = domainOrder.map(([domainKey, domainName, weightPct], domainIndex) => {
  const domainData = topicsByDomain.get(domainKey) ?? { topics: new Map() };
  const topics = Array.from(domainData.topics.values()).sort((a, b) => a.title.localeCompare(b.title));

  return {
    id: domainIndex + 1,
    key: domainKey,
    name: domainName,
    weightPct,
    topics: topics.map((topic) => ({
      id: topicIdCounter++,
      slug: topic.slug,
      title: topic.title,
      studyPath: `/study#${topic.slug}`,
      content: makeTopicContent(topic.title, domainName, topic.prompts),
      keyTerms: extractKeyTerms(topic.title, topic.prompts),
      examples: topic.scenarios.slice(0, 2),
      tips: [
        "Focus on BEST/MOST wording and eliminate options that introduce unmanaged risk.",
        "Match the control to the scenario context before selecting the answer.",
      ],
    })),
  };
});

const syllabusOutput = `export type StaticTopic = {
  id: number;
  slug: string;
  title: string;
  studyPath: string;
  content: string;
  keyTerms: string[];
  examples: string[];
  tips: string[];
};

export type StaticDomain = {
  id: number;
  key: string;
  name: string;
  weightPct: number;
  topics: StaticTopic[];
};

export const STATIC_SYLLABUS: StaticDomain[] = ${JSON.stringify(syllabus, null, 2)};
`;

fs.writeFileSync(examBankPath, examBankOutput, "utf8");
fs.writeFileSync(syllabusPath, syllabusOutput, "utf8");

console.log(`Generated ${examBankPath}`);
console.log(`Generated ${syllabusPath}`);
console.log(`Sets parsed: ${sets.length}`);
console.log(`Total questions: ${sets.reduce((acc, set) => acc + set.questions.length, 0)}`);
console.log(`Total syllabus topics: ${syllabus.reduce((acc, domain) => acc + domain.topics.length, 0)}`);
