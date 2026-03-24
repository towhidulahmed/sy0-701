import fs from "node:fs";
import path from "node:path";

import { getQuestionPool, type QuestionPayload } from "../src/lib/exam";

const renderQuestion = (question: QuestionPayload, index: number) => {
  const lines: string[] = [];
  lines.push(`Question ${index + 1}`);
  lines.push(`ID: ${question.qid}`);
  lines.push(`Domain: ${question.domainName} (${question.domainKey})`);
  lines.push(`Topic ID: ${question.topicId}`);
  lines.push(`Type: ${question.type}`);
  lines.push(`Difficulty: ${question.difficulty}`);
  lines.push(`Prompt: ${question.prompt}`);
  if (question.scenario) {
    lines.push(`Scenario: ${question.scenario}`);
  }
  lines.push("Options:");
  question.options.forEach((option, optionIndex) => {
    lines.push(`  ${optionIndex + 1}. ${option}`);
  });
  lines.push(`Correct: ${question.correctAnswers.join(" | ")}`);
  lines.push(`Explanation: ${question.explanation}`);
  lines.push(`Study Path: ${question.studyPath}`);
  lines.push("-".repeat(80));
  return lines.join("\n");
};

const questions = getQuestionPool();
const content = [
  "Security+ SY0-701 Generated Question Pool",
  `Total Questions: ${questions.length}`,
  "=".repeat(80),
  ...questions.map((question, index) => renderQuestion(question, index)),
].join("\n\n");

const outputPath = path.resolve(process.cwd(), "all-questions.txt");
fs.writeFileSync(outputPath, content, "utf8");

console.log(`Exported ${questions.length} questions to ${outputPath}`);