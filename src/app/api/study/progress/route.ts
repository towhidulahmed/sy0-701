import { NextRequest, NextResponse } from "next/server";
import { listStudyProgress, upsertStudyProgress } from "@/lib/progress-store";

export async function GET() {
  const progress = await listStudyProgress();
  return NextResponse.json(progress);
}

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as { topicId: number; studied: boolean };

  if (!payload.topicId || typeof payload.studied !== "boolean") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const progress = await upsertStudyProgress(payload.topicId, payload.studied);

  return NextResponse.json(progress);
}
