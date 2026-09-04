/**
 * Heat stress breaks corals' ocean-acidification coping mechanism
 * (Guillermic et al. 2021).
 */

import {
  THERMAL_ACIDIFICATION_CITATION,
  THERMAL_ACIDIFICATION_NOTE,
  THERMAL_ACIDIFICATION_OPTIMAL_TEMP_C,
  THERMAL_ACIDIFICATION_STRESS_TEMP_C,
} from "./constants.ts";

export type ThermalAcidificationInteraction = {
  optimalTempC: number;
  stressTempC: number;
  citation: string;
};

export const HEAT_BREAKS_ACIDIFICATION_COPING: ThermalAcidificationInteraction = {
  optimalTempC: THERMAL_ACIDIFICATION_OPTIMAL_TEMP_C,
  stressTempC: THERMAL_ACIDIFICATION_STRESS_TEMP_C,
  citation: THERMAL_ACIDIFICATION_CITATION,
};

/**
 * Whether corals can actively cope with ocean acidification under
 * normal temperatures. True -- at 28C.
 */
export function canCoralsCompensateForAcidificationAtOptimalTemperature(): boolean {
  return true;
}

/**
 * Whether that same compensation mechanism still works once heat stress
 * is added. Always False per Guillermic et al. (2021): at 31C.
 */
export function canCoralsCompensateForAcidificationUnderHeatStress(): boolean {
  return false;
}

export const CITATION = THERMAL_ACIDIFICATION_CITATION;
export const NOTE = THERMAL_ACIDIFICATION_NOTE;
