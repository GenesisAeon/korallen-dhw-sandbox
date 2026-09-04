import { formatDe } from "@/lib/utils";
import { ALERT_CONSEQUENCE_DE, ALERT_LABEL_DE } from "@/lib/dhw/display";
import { cn } from "@/lib/utils";

const LEVEL_TONE = [
  "text-living",
  "text-band-1",
  "text-band-2",
  "text-band-3",
  "text-band-4",
  "text-bleach",
] as const;

type Props = {
  dhw: number;
  level: number;
  uniform: boolean;
};

const COLONY_COUNT = 40;

function resistanceFor(i: number, uniform: boolean): number {
  if (uniform) return 1;
  const seed = ((i * 17 + 31) % 20) / 20;
  return 0.62 + seed * 0.76;
}

function bleachFor(dhw: number, resistance: number): number {
  const onset = 4 * resistance;
  return Math.min(1, Math.max(0, (dhw - onset) / 12));
}

export function AlertPanel({ dhw, level, uniform }: Props) {
  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
            NOAA-Alarmstufe
          </p>
          <p
            className={cn(
              "mt-1 font-heading text-5xl leading-none tracking-tight",
              LEVEL_TONE[level],
            )}
          >
            {level}
          </p>
          <p className="mt-2 text-sm font-medium text-fg">{ALERT_LABEL_DE[level]}</p>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          {ALERT_CONSEQUENCE_DE[level]}
        </p>
      </div>

      <div className="mt-5 grid grid-cols-10 gap-1.5 sm:gap-2">
        {Array.from({ length: COLONY_COUNT }, (_, i) => {
          const r = resistanceFor(i, uniform);
          const bleach = bleachFor(dhw, r);
          return (
            <span
              key={i}
              className="aspect-square rounded-full shadow-border transition-[background-color,opacity] duration-200 ease-out"
              style={{
                backgroundColor: `color-mix(in oklab, var(--color-bleach) ${Math.round(bleach * 100)}%, var(--color-living))`,
                opacity: 0.55 + 0.45 * (1 - bleach * 0.35),
              }}
              title={`Resistenz ${formatDe(r, 2)}`}
            />
          );
        })}
      </div>
      <p className="mt-3 text-xs text-subtle">
        {uniform
          ? "Didaktisch: einheitliche Reaktion — so sähe es aus, wenn alle Genotypen gleich bleichen. Tun sie nicht."
          : "Jede Scheibe ein Genotyp. Walker 2023: Resistenz variiert, und sie hat einen Preis."}
      </p>
    </section>
  );
}
