import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  CURRENT_EVENT_WATCH,
  DHW_SYSTEM,
  GBR_2016_DETAIL,
  GCRMN_2025_CITATION,
  GCRMN_2025_EVENTS,
  GLOBAL_EVENTS,
  HEAT_BREAKS_ACIDIFICATION_COPING,
  PACKAGE_ID,
  PALAU_ACROPORA_EVIDENCE,
  RETURN_INTERVAL_STUDY,
  VERSION,
  alertLevelForDhw,
  canCoralsCompensateForAcidificationAtOptimalTemperature,
  canCoralsCompensateForAcidificationUnderHeatStress,
  consequenceForAlertLevel,
  doesHeatResistanceComeWithoutACost,
  isAFifthGlobalBleachingEventConfirmed,
  isAlertScaleUnchangedSinceThe1990s,
  isBleachingResponseUniformAcrossGenotypes,
  isRecoveryWindowIndependentlyConfirmedNarrow,
  isRecoveryWindowSufficientForFullRecovery,
  isSeverityMonotonicallyIncreasing,
  recoveryWindowYears,
  resilienceDependsOnResistanceAlone,
} from "./index.ts";

describe("package identity", () => {
  it("keeps the coral-reef-utac version and package id", () => {
    assert.equal(VERSION, "1.2.0");
    assert.equal(PACKAGE_ID, 114);
  });
});

describe("bleaching_threshold_system", () => {
  it("keeps NOAA DHW scale bounds", () => {
    assert.equal(DHW_SYSTEM.scaleMinCWeeks, 0.0);
    assert.equal(DHW_SYSTEM.scaleMaxCWeeks, 20.0);
    assert.equal(DHW_SYSTEM.accumulationWindowWeeks, 12);
    assert.ok(DHW_SYSTEM.citation);
  });

  it("maps DHW to NOAA alert levels at the official thresholds", () => {
    assert.equal(alertLevelForDhw(0.0), 0);
    assert.equal(alertLevelForDhw(3.9), 0);
    assert.equal(alertLevelForDhw(4.0), 1);
    assert.equal(alertLevelForDhw(7.9), 1);
    assert.equal(alertLevelForDhw(8.0), 2);
    assert.equal(alertLevelForDhw(12.0), 3);
    assert.equal(alertLevelForDhw(16.0), 4);
    assert.equal(alertLevelForDhw(20.0), 5);
    assert.equal(alertLevelForDhw(25.0), 5);
  });

  it("rejects negative DHW", () => {
    assert.throws(() => alertLevelForDhw(-1.0), /DHW cannot be negative/);
  });

  it("returns NOAA consequence text", () => {
    assert.equal(
      consequenceForAlertLevel(0),
      "No significant bleaching-level heat stress",
    );
    assert.match(consequenceForAlertLevel(5).toLowerCase(), /mortality/);
  });

  it("records that the 1990s two-level scale did not survive 2023", () => {
    assert.equal(isAlertScaleUnchangedSinceThe1990s(), false);
  });
});

describe("historical_escalation", () => {
  it("keeps the four global events 1:1", () => {
    const values = Object.values(GLOBAL_EVENTS.reefAreaAffectedPctByEvent);
    assert.deepEqual(values, [21.0, 37.0, 68.0, 84.4]);
    assert.deepEqual(GLOBAL_EVENTS.fourthEventPeriod, ["2023-01", "2025-09"]);
    assert.ok(GLOBAL_EVENTS.citation);
  });

  it("is monotonically increasing across documented events", () => {
    assert.equal(isSeverityMonotonicallyIncreasing(), true);
  });

  it("keeps Hughes 2017 GBR 2016 detail", () => {
    assert.equal(GBR_2016_DETAIL.reefsAffectedPct, 91.0);
    assert.ok(GBR_2016_DETAIL.citation);
  });

  it("keeps Hughes 2018 return-interval study", () => {
    assert.equal(RETURN_INTERVAL_STUDY.siteCount, 100);
    assert.deepEqual(RETURN_INTERVAL_STUDY.studyPeriodYears, [1980, 2016]);
    assert.equal(RETURN_INTERVAL_STUDY.medianReturnIntervalYears, 6.0);
    assert.ok(RETURN_INTERVAL_STUDY.citation);
  });

  it("returns a 6-year recovery window that is not sufficient", () => {
    assert.equal(recoveryWindowYears(), 6.0);
    assert.equal(isRecoveryWindowSufficientForFullRecovery(), false);
  });
});

describe("combined_stressor_interaction", () => {
  it("keeps Guillermic 2021 temperatures", () => {
    assert.equal(HEAT_BREAKS_ACIDIFICATION_COPING.optimalTempC, 28.0);
    assert.equal(HEAT_BREAKS_ACIDIFICATION_COPING.stressTempC, 31.0);
    assert.ok(HEAT_BREAKS_ACIDIFICATION_COPING.citation);
  });

  it("compensation works at 28C and fails at 31C", () => {
    assert.equal(canCoralsCompensateForAcidificationAtOptimalTemperature(), true);
    assert.equal(canCoralsCompensateForAcidificationUnderHeatStress(), false);
  });
});

describe("genotype_resilience_nuance", () => {
  it("keeps Walker 2023 Palau Acropora evidence", () => {
    assert.equal(PALAU_ACROPORA_EVIDENCE.species, "Acropora hyacinthus");
    assert.equal(PALAU_ACROPORA_EVIDENCE.location, "Palau");
    assert.ok(PALAU_ACROPORA_EVIDENCE.citation);
  });

  it("rejects uniform response, free resistance, and resistance-alone", () => {
    assert.equal(isBleachingResponseUniformAcrossGenotypes(), false);
    assert.equal(doesHeatResistanceComeWithoutACost(), false);
    assert.equal(resilienceDependsOnResistanceAlone(), false);
  });
});

describe("GCRMN 2025", () => {
  it("keeps cover-loss series and 5–6 year window", () => {
    assert.deepEqual(GCRMN_2025_EVENTS.eventCoverLossPct, {
      "1998_1999": 6.5,
      "2010_2011": 9.9,
      "2016_2017": 6.6,
      "2023_2024": 8.9,
    });
    assert.equal(GCRMN_2025_EVENTS.globalCoverDeclinePct, 9.5);
    assert.equal(GCRMN_2025_EVENTS.recovery20172019Pct, 6.0);
    assert.deepEqual(GCRMN_2025_EVENTS.currentRecoveryWindowYears, [5.0, 6.0]);
    assert.equal(GCRMN_2025_EVENTS.citation, GCRMN_2025_CITATION);
  });

  it("confirms Hughes 6.0 sits inside the GCRMN 5–6 year window", () => {
    assert.equal(isRecoveryWindowIndependentlyConfirmedNarrow(), true);
  });
});

describe("honesty: all can be true at once", () => {
  it("escalation, narrow window, non-uniform genotypes, heat kills acid coping", () => {
    assert.equal(isSeverityMonotonicallyIncreasing(), true);
    assert.equal(isRecoveryWindowSufficientForFullRecovery(), false);
    assert.equal(isBleachingResponseUniformAcrossGenotypes(), false);
    assert.equal(canCoralsCompensateForAcidificationUnderHeatStress(), false);
  });
});

describe("current event watch", () => {
  it("watches the 2026 El Nino without claiming a fifth event", () => {
    assert.deepEqual(CURRENT_EVENT_WATCH.nino34AnomalyCRange, [2.2, 2.6]);
    assert.equal(CURRENT_EVENT_WATCH.peakExpected, "end of 2026");
    assert.match(CURRENT_EVENT_WATCH.citation, /wmo.int/);
    assert.equal(isAFifthGlobalBleachingEventConfirmed(), false);
  });
});
