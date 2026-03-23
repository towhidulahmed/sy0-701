-- CreateTable
CREATE TABLE "Domain" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "weightPct" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "studyPath" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "keyTerms" TEXT NOT NULL,
    "examples" TEXT NOT NULL,
    "tips" TEXT NOT NULL,
    "domainId" INTEGER NOT NULL,
    CONSTRAINT "Topic_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "qid" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "options" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "scenario" TEXT,
    "domainId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,
    CONSTRAINT "Question_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TestResult" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mockTestNumber" INTEGER NOT NULL,
    "startedAt" DATETIME NOT NULL,
    "completedAt" DATETIME NOT NULL,
    "score900" INTEGER NOT NULL,
    "pass" BOOLEAN NOT NULL,
    "elapsedSeconds" INTEGER NOT NULL,
    "answers" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DomainScore" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "domainId" INTEGER NOT NULL,
    "testResultId" INTEGER NOT NULL,
    "correct" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "pct" REAL NOT NULL,
    CONSTRAINT "DomainScore_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DomainScore_testResultId_fkey" FOREIGN KEY ("testResultId") REFERENCES "TestResult" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WrongAnswer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "testResultId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "selectedAnswer" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "recommendedTopic" TEXT NOT NULL,
    "topicId" INTEGER NOT NULL,
    CONSTRAINT "WrongAnswer_testResultId_fkey" FOREIGN KEY ("testResultId") REFERENCES "TestResult" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WrongAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WrongAnswer_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StudyProgress" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "topicId" INTEGER NOT NULL,
    "studied" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "StudyProgress_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Domain_key_key" ON "Domain"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_slug_key" ON "Topic"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Question_qid_key" ON "Question"("qid");

-- CreateIndex
CREATE UNIQUE INDEX "StudyProgress_topicId_key" ON "StudyProgress"("topicId");
