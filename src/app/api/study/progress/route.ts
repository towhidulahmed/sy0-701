import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const progress = await prisma.studyProgress.findMany();
  return NextResponse.json(progress);
}

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as { topicId: number; studied: boolean };

  if (!payload.topicId || typeof payload.studied !== "boolean") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const progress = await prisma.studyProgress.upsert({
    where: {
      topicId: payload.topicId,
    },
    update: {
      studied: payload.studied,
    },
    create: {
      topicId: payload.topicId,
      studied: payload.studied,
    },
  });

  return NextResponse.json(progress);
}
