import { formatDe } from "@/lib/utils";
import {
  GCRMN_2025_BASELINE_COVER_PCT,
  GCRMN_2025_CURRENT_COVER_PCT,
  GCRMN_2025_DOI,
  GCRMN_2025_EVENTS,
  GCRMN_2025_GLOBAL_COVER_DECLINE_PCT,
  GCRMN_2025_GONZALEZ_RIVERO_QUOTE,
  GCRMN_2025_RECOVERY_2017_2019_PCT,
  HUGHES_2018_DOI,
  HUGHES_2018_MEDIAN_RETURN_INTERVAL_YEARS,
  HUGHES_2018_SITE_COUNT,
  HUGHES_2018_STUDY_PERIOD_YEARS,
  isRecoveryWindowIndependentlyConfirmedNarrow,
  isRecoveryWindowSufficientForFullRecovery,
  recoveryWindowYears,
} from "@/lib/dhw";
import { GCRMN_EVENT_LABELS_DE } from "@/lib/dhw/display";

export function RecoveryPanel() {
  const hughes = recoveryWindowYears();
  const [low, high] = GCRMN_2025_EVENTS.currentRecoveryWindowYears;
  const confirmed = isRecoveryWindowIndependentlyConfirmedNarrow();
  const enough = isRecoveryWindowSufficientForFullRecovery();

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">Recovery-Fenster</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Zwei unabhängige Datensätze, verschiedene Metriken, dasselbe Ergebnis:
        die Pause zwischen schweren Ereignissen reicht nicht mehr.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <article className="rounded-lg bg-elevated p-4">
          <p className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
            Hughes 2018
          </p>
          <p className="mt-2 font-mono text-3xl tabular-nums leading-none">
            {formatDe(hughes, 0)}
            <span className="ml-2 text-sm text-muted">Jahre</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            Median-Return-Intervall, {HUGHES_2018_SITE_COUNT} Standorte,{" "}
            {HUGHES_2018_STUDY_PERIOD_YEARS[0]}–{HUGHES_2018_STUDY_PERIOD_YEARS[1]}.
          </p>
          <a
            className="mt-2 inline-block font-mono text-xs text-accent underline-offset-4 hover:underline"
            href={`https://doi.org/${HUGHES_2018_DOI}`}
            target="_blank"
            rel="noreferrer"
          >
            doi:{HUGHES_2018_DOI}
          </a>
        </article>

        <article className="rounded-lg bg-elevated p-4">
          <p className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
            GCRMN & ICRI 2025
          </p>
          <p className="mt-2 font-mono text-3xl tabular-nums leading-none">
            {formatDe(low, 0)}–{formatDe(high, 0)}
            <span className="ml-2 text-sm text-muted">Jahre</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            Aktuelles Fenster. Bedeckung {formatDe(GCRMN_2025_BASELINE_COVER_PCT, 1)} %{" "}
            → {formatDe(GCRMN_2025_CURRENT_COVER_PCT, 1)} % (−
            {formatDe(GCRMN_2025_GLOBAL_COVER_DECLINE_PCT, 1)} % relativ).
          </p>
          <a
            className="mt-2 inline-block font-mono text-xs text-accent underline-offset-4 hover:underline"
            href={`https://doi.org/${GCRMN_2025_DOI}`}
            target="_blank"
            rel="noreferrer"
          >
            doi:{GCRMN_2025_DOI}
          </a>
        </article>
      </div>

      <div className="mt-4 rounded-md bg-elevated px-4 py-3">
        <p className="text-sm leading-relaxed text-fg">
          {confirmed
            ? "Unabhängige Bestätigung: Hughes’ 6-Jahres-Median liegt im GCRMN-Fenster von 5–6 Jahren."
            : "Die Fenster überlappen nicht."}{" "}
          {enough
            ? "Ausreichend für volle Erholung."
            : "Zu kurz für volle Erholung vieler Gemeinschaften."}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          {GCRMN_2025_GONZALEZ_RIVERO_QUOTE}
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {Object.entries(GCRMN_2025_EVENTS.eventCoverLossPct).map(([key, pct]) => (
          <li key={key} className="rounded-sm bg-elevated px-3 py-2">
            <p className="text-2xs uppercase tracking-[0.12em] text-subtle">
              {GCRMN_EVENT_LABELS_DE[key] ?? key}
            </p>
            <p className="mt-1 font-mono text-sm tabular-nums">
              −{formatDe(pct, 1)} % Cover
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-subtle">
        2017–2019: reale Erholung +{formatDe(GCRMN_2025_RECOVERY_2017_2019_PCT, 0)} %
        Cover — möglich, wenn Zeit bleibt. Andere Metrik als NOAA-Rifffläche.
      </p>
    </section>
  );
}
