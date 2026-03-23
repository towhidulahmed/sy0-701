import { DashboardView } from "@/components/dashboard-view";
import { listResults } from "@/lib/result-store";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const [results, topics] = await Promise.all([
    listResults(),
    prisma.topic.findMany({
      include: {
        domain: true,
      },
    }),
  ]);

  const totalAttempts = results.length;
  const passRate = totalAttempts ? (results.filter((result) => result.pass).length / totalAttempts) * 100 : 0;

  const domainTotals = new Map<string, { sum: number; count: number }>();
  results.forEach((result) => {
    result.domainScores.forEach((score) => {
      const current = domainTotals.get(score.domainName) || { sum: 0, count: 0 };
      current.sum += score.pct;
      current.count += 1;
      domainTotals.set(score.domainName, current);
    });
  });

  const domains = Array.from(domainTotals.entries())
    .map(([domain, value]) => ({
      domain,
      avgPct: value.count ? value.sum / value.count : 0,
    }))
    .sort((left, right) => left.avgPct - right.avgPct);

  const weakDomains = domains.filter((domain) => domain.avgPct < 70).slice(0, 3);
  const domainTopicMap = new Map(
    topics.map((topic) => [topic.domain.name, `/study#${topic.slug}`]),
  );

  const recommendations = weakDomains.map((domain) => {
    const wrong = results.flatMap((result) => result.wrongAnswers).find((entry) => entry.domainName === domain.domain);

    return {
      domain: domain.domain,
      studyPath: wrong?.recommendedTopic || domainTopicMap.get(domain.domain) || "/study",
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
