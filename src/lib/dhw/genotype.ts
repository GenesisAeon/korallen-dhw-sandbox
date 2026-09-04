/**
 * Honesty check: bleaching resistance varies by genotype, has fitness
 * costs (Walker et al. 2023).
 */

import {
  WALKER_2023_CITATION,
  WALKER_2023_LOCATION,
  WALKER_2023_NOTE,
  WALKER_2023_SPECIES,
} from "./constants.ts";

export type GenotypeResilienceEvidence = {
  species: string;
  location: string;
  citation: string;
};

export const PALAU_ACROPORA_EVIDENCE: GenotypeResilienceEvidence = {
  species: WALKER_2023_SPECIES,
  location: WALKER_2023_LOCATION,
  citation: WALKER_2023_CITATION,
};

/**
 * Whether all coral genotypes within a species bleach/survive identically.
 * Always False.
 */
export function isBleachingResponseUniformAcrossGenotypes(): boolean {
  return false;
}

/**
 * Whether high heat resistance is a free trait with no downside.
 * Always False.
 */
export function doesHeatResistanceComeWithoutACost(): boolean {
  return false;
}

/**
 * Whether heat tolerance alone determines overall coral resilience.
 * Always False per Walker et al. (2023).
 */
export function resilienceDependsOnResistanceAlone(): boolean {
  return false;
}

export const CITATION = WALKER_2023_CITATION;
export const NOTE = WALKER_2023_NOTE;
