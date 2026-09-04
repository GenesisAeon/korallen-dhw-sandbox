import { Switch } from "@/components/ui/switch";
import { formatDe } from "@/lib/utils";
import {
  HEAT_BREAKS_ACIDIFICATION_COPING,
  THERMAL_ACIDIFICATION_DOI,
  canCoralsCompensateForAcidificationAtOptimalTemperature,
  canCoralsCompensateForAcidificationUnderHeatStress,
} from "@/lib/dhw";

type Props = {
  on: boolean;
  onChange: (value: boolean) => void;
};

export function StressorToggle({ on, onChange }: Props) {
  const ok = canCoralsCompensateForAcidificationAtOptimalTemperature();
  const heatKills = !canCoralsCompensateForAcidificationUnderHeatStress();
  const { optimalTempC, stressTempC } = HEAT_BREAKS_ACIDIFICATION_COPING;

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <div className="flex min-h-11 items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl tracking-tight">Hitze + Versauerung</h2>
          <p className="mt-1 text-sm text-muted">
            Guillermic 2021: nicht additiv. Hitze schaltet den Säure-Ausgleich ab.
          </p>
        </div>
        <Switch
          checked={on}
          onCheckedChange={onChange}
          aria-label="Hitze und Versauerung gemeinsam betrachten"
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-elevated p-4">
          <p className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
            {formatDe(optimalTempC, 0)} °C
          </p>
          <p className="mt-2 font-heading text-xl leading-tight">
            {ok ? "Ausgleich möglich" : "Ausgleich unmöglich"}
          </p>
          <p className="mt-2 text-sm text-muted">
            Bei normaler Temperatur heben die getesteten Arten pH und Aragonit-Sättigung
            in der Kalkflüssigkeit aktiv an.
          </p>
        </div>
        <div
          className={`rounded-lg p-4 transition-opacity duration-200 ease-out ${
            on ? "bg-elevated opacity-100" : "bg-elevated opacity-45"
          }`}
        >
          <p className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
            {formatDe(stressTempC, 0)} °C
          </p>
          <p className="mt-2 font-heading text-xl leading-tight">
            {heatKills ? "Ausgleich tot" : "Ausgleich bleibt"}
          </p>
          <p className="mt-2 text-sm text-muted">
            Unter Hitzestress keine positive Kalkbildung mehr — bei keinem getesteten
            pH. Hitze killt die Säure-Kompensation.
          </p>
        </div>
      </div>

      {on ? (
        <p className="mt-4 text-sm leading-relaxed text-fg">
          Zwei Stressoren gleichzeitig sind nicht die Summe. Der Mechanismus, mit dem
          Korallen Versauerung allein überleben, fällt bei {formatDe(stressTempC, 0)} °C
          aus.
        </p>
      ) : (
        <p className="mt-4 text-sm text-muted">
          Schalter an: den kombinierten Stressor sehen — Guillermic et al.,{" "}
          <em>Science Advances</em>.
        </p>
      )}
      <a
        className="mt-2 inline-block font-mono text-xs text-accent underline-offset-4 hover:underline"
        href={`https://doi.org/${THERMAL_ACIDIFICATION_DOI}`}
        target="_blank"
        rel="noreferrer"
      >
        doi:{THERMAL_ACIDIFICATION_DOI}
      </a>
    </section>
  );
}
