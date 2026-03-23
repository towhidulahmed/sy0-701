# Security+ SY0-701 Prep Platform

Full-stack Next.js + Prisma web app for CompTIA Security+ exam preparation.

## Features

- 35 mock tests (`/mock-tests/1` to `/mock-tests/35`), each with 90 questions
- 90-minute timed exam with auto-submit
- Question types: single-answer MCQ, multi-answer MCQ, and performance-based scenarios
- Pass/fail scoring at `750/900`
- Domain-level score breakdown for all 5 official SY0-701 domains
- Wrong-answer remediation with explanation and direct study-section links
- Full study module with domain topics, anchor deep-links, and progress tracker
- Dashboard with performance history, weak domain indicators, recommendations, and trend chart
- Responsive dark UI

## Stack

- Next.js 16 (App Router) + TypeScript
- Prisma + SQLite
- Tailwind CSS
- Recharts

## Run locally

```bash
npm install
npx prisma migrate dev --name init
npm run prisma:seed
npm run dev
```

Then open `http://localhost:3000`.

## Upload to GitHub

```bash
git init
git add .
git commit -m "Initial Security+ SY0-701 platform"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Hosting note (important)

- GitHub Pages cannot host this project as-is because this app needs a Node.js server + API routes + Prisma database.
- GitHub Pages only supports static sites.

## Host from GitHub (recommended)

Use Render with GitHub auto-deploy (already configured via `render.yaml` + `Dockerfile`):

1. Push this repo to GitHub.
2. Create a Render account and choose **New > Blueprint**.
3. Select this GitHub repo.
4. Render will detect `render.yaml` and create the web service.
5. After deploy completes, open your Render URL (e.g. `https://security-exam.onrender.com`).

This gives you a live, publicly accessible website and redeploys automatically from GitHub pushes.

## Important paths

- Exam API: `src/app/api/mock-tests/[id]/route.ts`
- Exam submission/scoring: `src/app/api/mock-tests/[id]/submit/route.ts`
- Study progress API: `src/app/api/study/progress/route.ts`
- Mock test UI: `src/components/exam-runner.tsx`
- Study UI: `src/components/study-module.tsx`
- Dashboard UI: `src/components/dashboard-view.tsx`
