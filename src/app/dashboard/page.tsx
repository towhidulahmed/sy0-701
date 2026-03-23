import { prisma } from "@/lib/prisma";
import { DashboardView } from "@/components/dashboard-view";

export default async function DashboardPage() {
  const results = await prisma.testResult.findMany({
    orderBy: {
      createdAt: "asc",
    },
    include: {
      domainScores: {
        include: {
          domain: true,
        },
      },
      wrongAnswers: {
        include: {
          topic: true,
        },
      },
    },
  });

  const totalAttempts = results.length;
  const passRate = totalAttempts ? (results.filter((result) => result.pass).length / totalAttempts) * 100 : 0;

  const domainTotals = new Map<string, { sum: number; count: number }>();
  results.forEach((result) => {
    result.domainScores.forEach((score) => {
      const current = domainTotals.get(score.domain.name) || { sum: 0, count: 0 };
      current.sum += score.pct;
      current.count += 1;
      domainTotals.set(score.domain.name, current);
    });
  });

  const domains = Array.from(domainTotals.entries())
    .map(([domain, value]) => ({
      domain,
      avgPct: value.count ? value.sum / value.count : 0,
    }))
    .sort((left, right) => left.avgPct - right.avgPct);

  const weakDomains = domains.filter((domain) => domain.avgPct < 70).slice(0, 3);

  const recommendations = weakDomains.map((domain) => {
    const wrong = results
      .flatMap((result) => result.wrongAnswers)
      .find((entry) => entry.topic.domainId === results.flatMap((r) => r.domainScores).find((score) => score.domain.name === domain.domain)?.domainId);

    return {
      domain: domain.domain,
      studyPath: wrong?.topic.studyPath || "/study",
    };
  });

  const trend = results.map((result, index) => ({
    label: `Attempt ${index + 1}`,
    score: result.score900,
  }));

  return (
    <main>
      <DashboardView
        totalAttempts={totalAttempts}
        passRate={passRate}
        domains={domains}
        recommendations={recommendations}
        trend={trend}
      />
    </main>
  );
}
