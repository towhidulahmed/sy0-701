"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type DomainSummary = {
  domain: string;
  avgPct: number;
};

type TrendPoint = {
  label: string;
  score: number;
};

export function DashboardView({
  totalAttempts,
  passRate,
  domains,
  recommendations,
  trend,
}: {
  totalAttempts: number;
  passRate: number;
  domains: DomainSummary[];
  recommendations: Array<{ domain: string; studyPath: string }>;
  trend: TrendPoint[];
}) {
  return (
    <div className="space-y-5">
      <section className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <p className="text-sm text-zinc-400">Total Attempts</p>
          <p className="mt-2 text-3xl font-bold">{totalAttempts}</p>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <p className="text-sm text-zinc-400">Pass Rate</p>
          <p className="mt-2 text-3xl font-bold">{passRate.toFixed(1)}%</p>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
        <h2 className="font-semibold">Improvement Over Time</h2>
        <div className="mt-4 h-56 w-full sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="label" stroke="#a1a1aa" fontSize={11} />
              <YAxis stroke="#a1a1aa" domain={[0, 900]} fontSize={11} width={34} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#06b6d4" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <h3 className="font-semibold">Weak Domain Indicators</h3>
          <div className="mt-3 space-y-2 text-sm">
            {domains.map((item) => (
              <div key={item.domain} className="rounded-md bg-zinc-800 p-3">
                <p>{item.domain}</p>
                <p className={item.avgPct < 70 ? "text-rose-300" : "text-emerald-300"}>{item.avgPct.toFixed(1)}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:p-5">
          <h3 className="font-semibold">Recommended Study Sections</h3>
          <div className="mt-3 space-y-2 text-sm">
            {recommendations.length === 0 ? (
              <p className="text-zinc-400">No recommendations yet. Take a mock test first.</p>
            ) : (
              recommendations.map((entry) => (
                <a key={`${entry.domain}-${entry.studyPath}`} href={entry.studyPath} className="block rounded-md bg-zinc-800 p-3 hover:bg-zinc-700">
                  {entry.domain}
                </a>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
