import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { cn, formatDe } from "@/lib/utils";
import { DHW_SCALE_MAX_C_WEEKS, DHW_SCALE_MIN_C_WEEKS } from "@/lib/dhw";
import { DHW_PRESETS } from "@/lib/dhw/display";

const BAND_CLASS = [
  "bg-band-0",
  "bg-band-1",
  "bg-band-2",
  "bg-band-3",
  "bg-band-4",
] as const;

const RANGE_CLASS = [
  "bg-living",
  "bg-band-1",
  "bg-band-2",
  "bg-band-3",
  "bg-band-4",
  "bg-band-5",
] as const;

type Props = {
  dhw: number;
  level: number;
  onChange: (value: number) => void;
};

export function DhwSlider({ dhw, level, onChange }: Props) {
  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
            Degree Heating Weeks
          </p>
          <p className="mt-1 font-mono text-3xl tabular-nums leading-none">
            {formatDe(dhw, 1)}
            <span className="ml-2 text-sm text-muted">°C-Wochen</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {DHW_PRESETS.map((p) => (
            <Button
              key={p.dhw}
              type="button"
              variant="chip"
              size="sm"
              data-active={dhw === p.dhw}
              onClick={() => onChange(p.dhw)}
            >
              {p.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex h-3 overflow-hidden rounded-full">
        {BAND_CLASS.map((cls, i) => (
          <div key={cls} className={cn("h-full flex-1", cls)} title={`Alarm ${i}`} />
        ))}
      </div>

      <Slider
        className="mt-1"
        min={DHW_SCALE_MIN_C_WEEKS}
        max={DHW_SCALE_MAX_C_WEEKS}
        step={0.1}
        value={[dhw]}
        onValueChange={(v) => onChange(v[0] ?? dhw)}
        aria-label="Degree Heating Weeks"
        rangeClassName={RANGE_CLASS[level] ?? "bg-accent"}
      />

      <div className="flex justify-between gap-1 font-mono text-2xs tabular-nums text-subtle">
        <span>0</span>
        <span>4</span>
        <span className="hidden sm:inline">8</span>
        <span>12</span>
        <span className="hidden sm:inline">16</span>
        <span>20</span>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        NOAA Coral Reef Watch, akkumuliert über 12 Wochen. Die Skala wurde im
        Dezember 2023 von zwei auf fünf Stufen erweitert, weil 2023 das
        ursprüngliche Maß überschritt.
      </p>
    </section>
  );
}
