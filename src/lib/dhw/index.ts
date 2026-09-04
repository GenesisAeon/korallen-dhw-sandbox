export {
  PACKAGE_ID,
  NOAA_CRW_DHW_CITATION,
  DHW_SCALE_MIN_C_WEEKS,
  DHW_SCALE_MAX_C_WEEKS,
  DHW_ACCUMULATION_WINDOW_WEEKS,
  DHW_ALERT_LEVEL_THRESHOLDS_C_WEEKS,
  DHW_ALERT_LEVEL_CONSEQUENCE,
  DHW_ALERT_LEVELS_3_TO_5_ADDED_YEAR,
  DHW_ALERT_LEVELS_3_TO_5_ADDED_NOTE,
  HUGHES_2017_CITATION,
  HUGHES_2017_DOI,
  HUGHES_2017_GBR_2016_REEFS_AFFECTED_PCT,
  HUGHES_2017_NOTE,
  HUGHES_2018_CITATION,
  HUGHES_2018_DOI,
  HUGHES_2018_SITE_COUNT,
  HUGHES_2018_STUDY_PERIOD_YEARS,
  HUGHES_2018_MEDIAN_RETURN_INTERVAL_YEARS,
  HUGHES_2018_NOTE,
  NOAA_4GBE_CITATION,
  GLOBAL_BLEACHING_EVENTS_REEF_AREA_AFFECTED_PCT,
  NOAA_4GBE_PERIOD,
  NOAA_4GBE_NOTE,
  THERMAL_ACIDIFICATION_CITATION,
  THERMAL_ACIDIFICATION_DOI,
  THERMAL_ACIDIFICATION_OPTIMAL_TEMP_C,
  THERMAL_ACIDIFICATION_STRESS_TEMP_C,
  THERMAL_ACIDIFICATION_NOTE,
  WALKER_2023_CITATION,
  WALKER_2023_DOI,
  WALKER_2023_SPECIES,
  WALKER_2023_LOCATION,
  WALKER_2023_NOTE,
  GCRMN_2025_CITATION,
  GCRMN_2025_DOI,
  GCRMN_2025_RELEASE_DATE,
  GCRMN_2025_BASELINE_COVER_PCT,
  GCRMN_2025_CURRENT_COVER_PCT,
  GCRMN_2025_GLOBAL_COVER_DECLINE_PCT,
  GCRMN_2025_EVENT_COVER_LOSS_PCT,
  GCRMN_2025_RECOVERY_2017_2019_PCT,
  GCRMN_2025_RECOVERY_WINDOW_HISTORICAL_YEARS,
  GCRMN_2025_RECOVERY_WINDOW_CURRENT_YEARS,
  GCRMN_2025_GONZALEZ_RIVERO_QUOTE,
  GCRMN_2025_NOTE,
  WMO_2026_CITATION,
  WMO_2026_NINO34_ANOMALY_C_RANGE,
  WMO_2026_PEAK_EXPECTED,
} from "./constants.ts";

export {
  DHW_SYSTEM,
  alertLevelForDhw,
  consequenceForAlertLevel,
  isAlertScaleUnchangedSinceThe1990s,
} from "./threshold.ts";
export type { DegreeHeatingWeekSystem } from "./threshold.ts";

export {
  GLOBAL_EVENTS,
  GBR_2016_DETAIL,
  RETURN_INTERVAL_STUDY,
  GCRMN_2025_EVENTS,
  CURRENT_EVENT_WATCH,
  isSeverityMonotonicallyIncreasing,
  recoveryWindowYears,
  isRecoveryWindowSufficientForFullRecovery,
  isRecoveryWindowIndependentlyConfirmedNarrow,
  isAFifthGlobalBleachingEventConfirmed,
} from "./escalation.ts";
export type {
  GlobalBleachingEventSeries,
  ThirdEventGBRDetail,
  ReturnIntervalStudy,
  GCRMN2025CoverLossSeries,
  LiveElNinoWatchContext,
} from "./escalation.ts";

export {
  HEAT_BREAKS_ACIDIFICATION_COPING,
  canCoralsCompensateForAcidificationAtOptimalTemperature,
  canCoralsCompensateForAcidificationUnderHeatStress,
} from "./stressor.ts";
export type { ThermalAcidificationInteraction } from "./stressor.ts";

export {
  PALAU_ACROPORA_EVIDENCE,
  isBleachingResponseUniformAcrossGenotypes,
  doesHeatResistanceComeWithoutACost,
  resilienceDependsOnResistanceAlone,
} from "./genotype.ts";
export type { GenotypeResilienceEvidence } from "./genotype.ts";

export const VERSION = "1.2.0";
