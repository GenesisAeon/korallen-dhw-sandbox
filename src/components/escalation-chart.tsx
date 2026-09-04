import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { formatDe } from "@/lib/utils";
import { GBR_2016_DETAIL, isSeverityMonotonicallyIncreasing } from "@/lib/dhw";
import { eventSeries } from "@/lib/dhw/display";

const FILLS = [
  "var(--color-band-1)",
  "var(--color-band-2)",
  "var(--color-band-3)",
  "var(--color-band-5)",
];

export function EscalationChart() {
  const data = eventSeries();
  const rising = isSeverityMonotonicallyIncreasing();

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-heading text-2xl tracking-tight">Vier globale Ereignisse</h2>
        <p className="text-sm text-muted">
          {rising ? "Monoton steigend" : "Nicht monoton"} · Rifffläche unter Bleichstress
        </p>
      </div>

      <div className="mt-4 h-52 w-full min-w-0 overflow-hidden sm:h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <XAxis
              dataKey="label"
              stroke="var(--color-subtle)"
              tick={{
                fill: "var(--color-muted)",
                fontSize: 11,
                fontFamily: "IBM Plex Mono, ui-monospace",
              }}
              axisLine={{ stroke: "var(--color-ring)" }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              width={36}
              stroke="var(--color-subtle)"
              tick={{
                fill: "var(--color-muted)",
                fontSize: 11,
                fontFamily: "IBM Plex Mono, ui-monospace",
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${formatDe(v, 0)}%`}
            />
            <Tooltip
              cursor={{ fill: "color-mix(in oklab, var(--color-fg) 6%, transparent)" }}
              contentStyle={{
                background: "var(--color-elevated)",
                border: "1px solid color-mix(in oklab, var(--color-fg) 12%, transparent)",
                borderRadius: 8,
                fontSize: 12,
                color: "var(--color-fg)",
              }}
              formatter={(value) => [`${formatDe(Number(value), 1)} %`, "Rifffläche"]}
              labelFormatter={(_, payload) => {
                const row = payload?.[0]?.payload as { title?: string } | undefined;
                return row?.title ?? "";
              }}
            />
            <Bar dataKey="pct" radius={[4, 4, 0, 0]} maxBarSize={56}>
              {data.map((row, i) => (
                <Cell key={row.key} fill={FILLS[i] ?? "var(--color-accent)"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <ol className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {data.map((row) => (
          <li key={row.key} className="min-w-0">
            <p className="text-2xs font-medium uppercase tracking-[0.12em] text-subtle">
              {row.title}
            </p>
            <p className="mt-1 font-mono text-xl tabular-nums leading-none">
              {formatDe(row.pct, 1)}%
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        NOAA / ICRI. Great Barrier Reef 2016: {formatDe(GBR_2016_DETAIL.reefsAffectedPct, 0)}{" "}
        % der einzelnen Riffe (Hughes 2017). Fläche unter Hitzestress, nicht
        einheitliche Sterblichkeit.
      </p>
    </section>
  );
}
