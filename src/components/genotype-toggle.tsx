import { Switch } from "@/components/ui/switch";
import {
  PALAU_ACROPORA_EVIDENCE,
  WALKER_2023_DOI,
  doesHeatResistanceComeWithoutACost,
  isBleachingResponseUniformAcrossGenotypes,
  resilienceDependsOnResistanceAlone,
} from "@/lib/dhw";
import { WALKER_NOTE_DE } from "@/lib/dhw/display";

type Props = {
  on: boolean;
  onChange: (value: boolean) => void;
};

export function GenotypeToggle({ on, onChange }: Props) {
  const uniform = isBleachingResponseUniformAcrossGenotypes();
  const free = doesHeatResistanceComeWithoutACost();
  const resistanceAlone = resilienceDependsOnResistanceAlone();

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <div className="flex min-h-11 items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl tracking-tight">uniforme Reaktion?</h2>
          <p className="mt-1 text-sm text-muted">
            Walker 2023 — der Honesty-Check. Eine DHW-Schwelle heißt nicht einheitliche
            Sterblichkeit.
          </p>
        </div>
        <Switch
          checked={on}
          onCheckedChange={onChange}
          aria-label="Frage: uniforme Reaktion?"
        />
      </div>

      <div className="mt-5 rounded-lg bg-elevated p-4">
        <p className="text-2xs font-medium tracking-[0.04em] break-all text-subtle">
          uniforme Reaktion — False
        </p>
        <p className="mt-2 font-heading text-4xl leading-none tracking-tight">
          {uniform ? "True" : "False"}
        </p>
        <p className="mt-2 text-sm text-muted">
          {PALAU_ACROPORA_EVIDENCE.species}, {PALAU_ACROPORA_EVIDENCE.location}.
          Resistenz ohne Preis: {free ? "True" : "False"}. Nur Hitzeresistenz:{" "}
          {resistanceAlone ? "True" : "False"}.
        </p>
      </div>

      {on ? (
        <p className="mt-4 text-sm leading-relaxed text-fg">{WALKER_NOTE_DE}</p>
      ) : (
        <p className="mt-4 text-sm text-muted">
          Schalter an: den vollen Walker-Text und die Fitness-Tradeoffs sehen.
        </p>
      )}
      <a
        className="mt-2 inline-block font-mono text-xs text-accent underline-offset-4 hover:underline"
        href={`https://doi.org/${WALKER_2023_DOI}`}
        target="_blank"
        rel="noreferrer"
      >
        doi:{WALKER_2023_DOI}
      </a>
    </section>
  );
}
