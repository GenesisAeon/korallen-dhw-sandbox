/**
 * The four documented global coral bleaching events (Hughes 2017/2018 + NOAA 2024).
 */

import {
  GCRMN_2025_CITATION,
  GCRMN_2025_EVENT_COVER_LOSS_PCT,
  GCRMN_2025_GLOBAL_COVER_DECLINE_PCT,
  GCRMN_2025_RECOVERY_2017_2019_PCT,
  GCRMN_2025_RECOVERY_WINDOW_CURRENT_YEARS,
  GLOBAL_BLEACHING_EVENTS_REEF_AREA_AFFECTED_PCT,
  HUGHES_2017_CITATION,
  HUGHES_2017_GBR_2016_REEFS_AFFECTED_PCT,
  HUGHES_2018_CITATION,
  HUGHES_2018_MEDIAN_RETURN_INTERVAL_YEARS,
  HUGHES_2018_SITE_COUNT,
  HUGHES_2018_STUDY_PERIOD_YEARS,
  NOAA_4GBE_CITATION,
  NOAA_4GBE_NOTE,
  NOAA_4GBE_PERIOD,
  WMO_2026_CITATION,
  WMO_2026_NINO34_ANOMALY_C_RANGE,
  WMO_2026_PEAK_EXPECTED,
} from "./constants.ts";

export type GlobalBleachingEventSeries = {
  reefAreaAffectedPctByEvent: Record<string, number>;
  fourthEventPeriod: readonly [string, string];
  citation: string;
};

export const GLOBAL_EVENTS: GlobalBleachingEventSeries = {
  reefAreaAffectedPctByEvent: GLOBAL_BLEACHING_EVENTS_REEF_AREA_AFFECTED_PCT,
  fourthEventPeriod: NOAA_4GBE_PERIOD,
  citation: NOAA_4GBE_CITATION,
};

export type ThirdEventGBRDetail = {
  reefsAffectedPct: number;
  citation: string;
};

export const GBR_2016_DETAIL: ThirdEventGBRDetail = {
  reefsAffectedPct: HUGHES_2017_GBR_2016_REEFS_AFFECTED_PCT,
  citation: HUGHES_2017_CITATION,
};

export type ReturnIntervalStudy = {
  siteCount: number;
  studyPeriodYears: readonly [number, number];
  medianReturnIntervalYears: number;
  citation: string;
};

export const RETURN_INTERVAL_STUDY: ReturnIntervalStudy = {
  siteCount: HUGHES_2018_SITE_COUNT,
  studyPeriodYears: HUGHES_2018_STUDY_PERIOD_YEARS,
  medianReturnIntervalYears: HUGHES_2018_MEDIAN_RETURN_INTERVAL_YEARS,
  citation: HUGHES_2018_CITATION,
};

/**
 * Whether each documented global event affected more reef area than the last.
 *
 * True for the real, observed 1998 -> 2010 -> 2014-2017 -> 2023-2025
 * series (21% -> 37% -> 68% -> 84.4%). This module makes no claim
 * about what happens in a future, undocumented fifth event.
 */
export function isSeverityMonotonicallyIncreasing(): boolean {
  const values = Object.values(GLOBAL_EVENTS.reefAreaAffectedPctByEvent);
  return values.every((later, i) => i === 0 || later > (values[i - 1] ?? 0));
}

/** The real, measured median return time between severe bleaching events. */
export function recoveryWindowYears(): number {
  return HUGHES_2018_MEDIAN_RETURN_INTERVAL_YEARS;
}

/**
 * Whether the real, measured recovery window allows full coral recovery.
 *
 * Always False per Hughes et al. 2018's own conclusion.
 */
export function isRecoveryWindowSufficientForFullRecovery(): boolean {
  return false;
}

export type GCRMN2025CoverLossSeries = {
  eventCoverLossPct: Record<string, number>;
  globalCoverDeclinePct: number;
  recovery20172019Pct: number;
  currentRecoveryWindowYears: readonly [number, number];
  citation: string;
};

export const GCRMN_2025_EVENTS: GCRMN2025CoverLossSeries = {
  eventCoverLossPct: GCRMN_2025_EVENT_COVER_LOSS_PCT,
  globalCoverDeclinePct: GCRMN_2025_GLOBAL_COVER_DECLINE_PCT,
  recovery20172019Pct: GCRMN_2025_RECOVERY_2017_2019_PCT,
  currentRecoveryWindowYears: GCRMN_2025_RECOVERY_WINDOW_CURRENT_YEARS,
  citation: GCRMN_2025_CITATION,
};

/**
 * Whether two independent studies agree the recovery window is too narrow.
 *
 * Hughes et al. 2018: 6-year median. GCRMN 2025: 5–6 years.
 */
export function isRecoveryWindowIndependentlyConfirmedNarrow(): boolean {
  const hughes = HUGHES_2018_MEDIAN_RETURN_INTERVAL_YEARS;
  const [gcrmnLow, gcrmnHigh] = GCRMN_2025_RECOVERY_WINDOW_CURRENT_YEARS;
  return gcrmnLow <= hughes && hughes <= gcrmnHigh;
}

export const CITATION = NOAA_4GBE_CITATION;
export const NOTE = NOAA_4GBE_NOTE;

export type LiveElNinoWatchContext = {
  nino34AnomalyCRange: readonly [number, number];
  peakExpected: string;
  citation: string;
};

export const CURRENT_EVENT_WATCH: LiveElNinoWatchContext = {
  nino34AnomalyCRange: WMO_2026_NINO34_ANOMALY_C_RANGE,
  peakExpected: WMO_2026_PEAK_EXPECTED,
  citation: WMO_2026_CITATION,
};

/**
 * Whether a fifth global coral bleaching event has been confirmed.
 *
 * Always False -- the live 2026-2027 El Nino is a real risk factor
 * to watch, not a confirmed fifth event (the 4th likely ended in 2025).
 */
export function isAFifthGlobalBleachingEventConfirmed(): boolean {
  return false;
}
