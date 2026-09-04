import {
  CURRENT_EVENT_WATCH,
  isAFifthGlobalBleachingEventConfirmed,
} from "@/lib/dhw";
import { formatDe } from "@/lib/utils";

const KLIMA = "https://klimakatalog.vercel.app/p/coral-reef-utac";
const SOURCE = "https://github.com/GenesisAeon/coral-reef-utac";

export function DisclaimerBox() {
  const fifth = isAFifthGlobalBleachingEventConfirmed();
  const [lo, hi] = CURRENT_EVENT_WATCH.nino34AnomalyCRange;

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">Disclaimer</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Keine UTAC-, CREP- oder AFET-Brücke. Keine erfundene Γ, kein G_tipping.
        NOAA DHW ist selbst ein offizielles Schwellen-System. Die Zahlen stammen
        1:1 aus{" "}
        <a
          className="text-accent underline-offset-4 hover:underline"
          href={SOURCE}
          target="_blank"
          rel="noreferrer"
        >
          coral-reef-utac
        </a>{" "}
        (P114). Diese Sandbox ist keine Prognose und kein Modell.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Ein DHW-Alarm bedeutet nicht einheitliche Bleiche oder Sterblichkeit.
        Walker 2023 misst Genotyp-Variation mit Fitness-Kosten. Guillermic 2021:
        Hitze killt die Säure-Kompensation. GCRMN 2025 bestätigt das
        Recovery-Fenster unabhängig (Cover-Verlust, nicht Rifffläche).
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Fünftes globales Ereignis bestätigt: {fifth ? "True" : "False"}. El Niño
        2026 ist ein Risiko (Niño-3.4 {formatDe(lo, 1)}–{formatDe(hi, 1)} °C),
        kein dokumentiertes fünftes Event.
      </p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a
          className="text-accent underline-offset-4 hover:underline"
          href={KLIMA}
          target="_blank"
          rel="noreferrer"
        >
          Klimakatalog · coral-reef-utac
        </a>
        <a
          className="text-accent underline-offset-4 hover:underline"
          href={SOURCE}
          target="_blank"
          rel="noreferrer"
        >
          Quellpaket auf GitHub
        </a>
      </div>
    </section>
  );
}
