import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resultId = Number(id);

  if (!Number.isInteger(resultId)) {
    return NextResponse.json({ error: "Invalid result id" }, { status: 400 });
  }

  const result = await prisma.testResult.findUnique({
    where: { id: resultId },
    include: {
      domainScores: {
        include: {
          domain: true,
        },
      },
      wrongAnswers: {
        include: {
          question: {
            select: {
              prompt: true,
              qid: true,
            },
          },
        },
      },
    },
  });

  if (!result) {
    return NextResponse.json({ error: "Result not found" }, { status: 404 });
  }

  return NextResponse.json(result);
}
