import { DHW_ALERT_LEVEL_THRESHOLDS_C_WEEKS } from "./constants.ts";
import { GLOBAL_EVENTS } from "./escalation.ts";

export const ALERT_CONSEQUENCE_DE: Record<number, string> = {
  0: "Kein signifikanter bleicherelevanter Hitzestress",
  1: "Bleicherisiko: riffweite Bleiche bei hitzeempfindlichen Korallen wahrscheinlich",
  2: "Schwere, weit verbreitete Bleiche und Sterblichkeit hitzeempfindlicher Korallen wahrscheinlich",
  3: "Sterblichkeitsrisiko für mehrere Arten",
  4: "Risiko schwerer Multi-Arten-Sterblichkeit (>50 % der Korallen)",
  5: "Risiko nahezu vollständiger Sterblichkeit (>80 % der Korallen)",
};

export const ALERT_LABEL_DE: Record<number, string> = {
  0: "Kein Alarm",
  1: "Alarm 1",
  2: "Alarm 2",
  3: "Alarm 3",
  4: "Alarm 4",
  5: "Alarm 5",
};

export const EVENT_LABELS_DE: Record<string, string> = {
  "1998_1st_event": "1998",
  "2010_2nd_event": "2010",
  "2014_2017_3rd_event": "2014–2017",
  "2023_2025_4th_event": "2023–2025",
};

export const EVENT_TITLES_DE: Record<string, string> = {
  "1998_1st_event": "1. globales Ereignis",
  "2010_2nd_event": "2. globales Ereignis",
  "2014_2017_3rd_event": "3. globales Ereignis",
  "2023_2025_4th_event": "4. globales Ereignis",
};

export const GCRMN_EVENT_LABELS_DE: Record<string, string> = {
  "1998_1999": "1998–99",
  "2010_2011": "2010–11",
  "2016_2017": "2016–17",
  "2023_2024": "2023–24",
};

export const DHW_PRESETS = [
  { dhw: 0, label: "0" },
  { dhw: 4, label: "4" },
  { dhw: 8, label: "8" },
  { dhw: 12, label: "12" },
  { dhw: 16, label: "16" },
  { dhw: 20, label: "20" },
] as const;

export const WALKER_NOTE_DE =
  "Feld- und Labordaten zu Acropora hyacinthus in Palau: einzelne Genotypen unterscheiden sich stark in der Hitzeresistenz, und höhere Resistenz ist mit einem echten Fitness-Preis verbunden (langsameres Wachstum in der Erholung). Resistente Genotypen dominieren Populationen gerade deshalb nicht, weil Resistenz kostet. Gesamt-Resilienz ist das Produkt aus Resistenz UND Erholungsfähigkeit — nicht Hitzetoleranz allein. Eine überschrittene DHW-Schwelle bedeutet also nicht einheitliche Bleiche oder Sterblichkeit.";

export function alertBandStops(): { level: number; from: number; to: number }[] {
  const thresholds = [0, ...Object.values(DHW_ALERT_LEVEL_THRESHOLDS_C_WEEKS)];
  const bands = [];
  for (let i = 0; i < thresholds.length - 1; i++) {
    bands.push({
      level: i,
      from: thresholds[i] ?? 0,
      to: thresholds[i + 1] ?? 20,
    });
  }
  return bands;
}

export function eventSeries() {
  return Object.entries(GLOBAL_EVENTS.reefAreaAffectedPctByEvent).map(
    ([key, pct]) => ({
      key,
      label: EVENT_LABELS_DE[key] ?? key,
      title: EVENT_TITLES_DE[key] ?? key,
      pct,
    }),
  );
}
