/**
 * NOAA Coral Reef Watch's real, operational Degree Heating Week (DHW) system.
 *
 * Core module -- documents the actual, official heat-stress threshold
 * system used to issue coral bleaching alerts worldwide, not an invented
 * UTAC/CREP mapping onto it.
 */

import {
  DHW_ACCUMULATION_WINDOW_WEEKS,
  DHW_ALERT_LEVEL_CONSEQUENCE,
  DHW_ALERT_LEVEL_THRESHOLDS_C_WEEKS,
  DHW_ALERT_LEVELS_3_TO_5_ADDED_NOTE,
  DHW_ALERT_LEVELS_3_TO_5_ADDED_YEAR,
  DHW_SCALE_MAX_C_WEEKS,
  DHW_SCALE_MIN_C_WEEKS,
  NOAA_CRW_DHW_CITATION,
} from "./constants.ts";

export type DegreeHeatingWeekSystem = {
  scaleMinCWeeks: number;
  scaleMaxCWeeks: number;
  accumulationWindowWeeks: number;
  citation: string;
};

export const DHW_SYSTEM: DegreeHeatingWeekSystem = {
  scaleMinCWeeks: DHW_SCALE_MIN_C_WEEKS,
  scaleMaxCWeeks: DHW_SCALE_MAX_C_WEEKS,
  accumulationWindowWeeks: DHW_ACCUMULATION_WINDOW_WEEKS,
  citation: NOAA_CRW_DHW_CITATION,
};

/** Return NOAA's official alert level (0-5) for a given accumulated DHW value. */
export function alertLevelForDhw(dhwCWeeks: number): number {
  if (dhwCWeeks < 0.0) {
    throw new Error("DHW cannot be negative");
  }
  let level = 0;
  const entries = Object.entries(DHW_ALERT_LEVEL_THRESHOLDS_C_WEEKS)
    .map(([lvl, threshold]) => [Number(lvl), threshold] as const)
    .sort((a, b) => a[0] - b[0]);
  for (const [lvl, threshold] of entries) {
    if (dhwCWeeks >= threshold) {
      level = lvl;
    }
  }
  return level;
}

/** Return NOAA's documented real-world consequence text for an alert level. */
export function consequenceForAlertLevel(level: number): string {
  if (level === 0) {
    return "No significant bleaching-level heat stress";
  }
  const text = DHW_ALERT_LEVEL_CONSEQUENCE[level];
  if (!text) {
    throw new Error(`Unknown alert level: ${level}`);
  }
  return text;
}

/**
 * Whether NOAA's alert scale has stayed fixed since its original design.
 *
 * Always False. The scale was expanded from 2 to 5 levels in
 * December 2023 because observed heat stress in 2023 exceeded what
 * the original scale was designed to describe.
 */
export function isAlertScaleUnchangedSinceThe1990s(): boolean {
  return DHW_ALERT_LEVELS_3_TO_5_ADDED_YEAR <= 1999;
}

export const CITATION = NOAA_CRW_DHW_CITATION;
export const NOTE = DHW_ALERT_LEVELS_3_TO_5_ADDED_NOTE;
