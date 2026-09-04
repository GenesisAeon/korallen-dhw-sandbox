import { useMemo, useState } from "react";
import { DhwSlider } from "@/components/dhw-slider";
import { AlertPanel } from "@/components/alert-panel";
import { EscalationChart } from "@/components/escalation-chart";
import { RecoveryPanel } from "@/components/recovery-panel";
import { StressorToggle } from "@/components/stressor-toggle";
import { GenotypeToggle } from "@/components/genotype-toggle";
import { DisclaimerBox } from "@/components/disclaimer-box";
import { Sources } from "@/components/sources";
import { alertLevelForDhw, isBleachingResponseUniformAcrossGenotypes } from "@/lib/dhw";
import { ALERT_CONSEQUENCE_DE } from "@/lib/dhw/display";

const DEFAULT_DHW = 8;

export function Sandbox() {
  const [dhw, setDhw] = useState(DEFAULT_DHW);
  const [heatAcid, setHeatAcid] = useState(false);
  const [askUniform, setAskUniform] = useState(true);

  const level = useMemo(() => alertLevelForDhw(dhw), [dhw]);
  const uniformView = askUniform ? isBleachingResponseUniformAcrossGenotypes() : true;

  return (
    <div className="min-h-dvh overflow-x-hidden bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12">
        <header className="max-w-3xl">
          <p className="text-2xs font-medium uppercase tracking-[0.18em] text-subtle">
            Korallen-DHW-Sandbox · NOAA Coral Reef Watch
          </p>
          <h1 className="mt-3 font-heading text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Fünf Alarmstufen.
            <span className="italic text-accent"> Vier Ereignisse.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Degree Heating Weeks, 0–20 °C-Wochen. Die betroffene Rifffläche stieg
            von 21 % auf 83,7 %. Das Recovery-Fenster schrumpfte auf sechs Jahre.
          </p>
        </header>

        <div className="mt-8 space-y-4">
          <DhwSlider dhw={dhw} level={level} onChange={setDhw} />

          <div className="rounded-lg bg-elevated px-4 py-3 sm:px-5">
            <p className="text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
              Alarm {level} bei {dhw.toLocaleString("de-DE", { maximumFractionDigits: 1 })}{" "}
              °C-Wochen
            </p>
            <p className="mt-1 text-sm leading-relaxed text-fg sm:text-base">
              {ALERT_CONSEQUENCE_DE[level]}
            </p>
          </div>

          <AlertPanel dhw={dhw} level={level} uniform={uniformView} />

          <EscalationChart />
          <RecoveryPanel />

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <StressorToggle on={heatAcid} onChange={setHeatAcid} />
            <GenotypeToggle on={askUniform} onChange={setAskUniform} />
          </div>

          <DisclaimerBox />
          <Sources />
        </div>
      </div>
    </div>
  );
}
