# Disclaimer

This repository is an interactive sandbox for NOAA Coral Reef Watch's
Degree Heating Week (DHW) system and the published series of global
bleaching events. It is **not** a forecast, a reef model, or a
UTAC/CREP/AFET coupling.

## No UTAC / CREP / AFET bridge, no invented Γ

Like its sibling package `coral-reef-utac` (P114), this sandbox
deliberately contains **no** UTAC, CREP, or AFET coupling and **no**
invented Γ / G_tipping value. NOAA DHW is already a real, official,
quantitative accumulated-stress threshold system. The coral-reef
literature stands on its own.

See the sibling [DISCLAIMER.md](https://github.com/GenesisAeon/coral-reef-utac/blob/master/DISCLAIMER.md)
for why an external session's proposed Γ_tipping values (0.48 / 0.62 / 0.45)
did not survive independent verification.

## What is measured vs. what is schematic

Copied from `coral-reef-utac` `constants.py` (independently verified there,
2026-08-24; GCRMN addition 2026-09-02):

| Quantity | Value | Source |
| --- | --- | --- |
| DHW scale | 0–20 °C-weeks, 12-week window | NOAA CRW v3.1 |
| Alert levels | 4 / 8 / 12 / 16 / 20 | NOAA CRW (levels 3–5 added Dec 2023) |
| Reef area affected | 21 % → 37 % → 68 % → 83.7 % | NOAA / ICRI, four global events |
| GBR 2016 reefs affected | 91 % | Hughes et al. 2017, *Nature* |
| Median return interval | 6 years (100 sites, 1980–2016) | Hughes et al. 2018, *Science* |
| Current recovery window | 5–6 years | GCRMN & ICRI 2025, DOI 10.59387/LFPR6347 |
| Global hard-coral cover | 30.2 % → 27.3 % (−9.5 % relative) | GCRMN 2025 |
| Heat vs acidification | 28 °C can compensate; 31 °C cannot | Guillermic et al. 2021 |
| Uniform genotype response | False (tradeoff: slower growth) | Walker et al. 2023 |

The colony field in the UI is a **schematic** of genotype variation, not a
spatial reef map. DHW is the NOAA operational metric, not a local time series.

## What we do not claim

- That a DHW threshold crossing means uniform bleaching or uniform mortality.
- That this sandbox produces a physically complete coral-climate model.
- Any UTAC / CREP / AFET implication, or any invented Γ / G_tipping.
- That a fifth global bleaching event is confirmed (the 4th ended April 2025;
  the 2026 El Niño is a risk factor to watch, not a confirmed fifth event).
