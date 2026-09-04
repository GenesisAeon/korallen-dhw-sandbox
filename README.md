# korallen-dhw-sandbox

Interactive NOAA Degree Heating Week (DHW) bleaching sandbox. Sibling UI to
[`coral-reef-utac`](https://github.com/GenesisAeon/coral-reef-utac)
(P114), built from the same published constants. **Deliberately has no
UTAC/CREP/AFET bridge and no invented Γ value** — see
[DISCLAIMER.md](DISCLAIMER.md).

The interface is German. Numbers and citations stay in their original units.

For a plain-language German companion, see [WHITEPAPER.md](WHITEPAPER.md).

## What's real here

* **NOAA Coral Reef Watch — Degree Heating Week (DHW)** — operational metric
  used to issue global bleaching alerts: 0–20 °C-weeks accumulated over a
  12-week window, 5 alert levels (4 / 8 / 12 / 16 / 20 °C-weeks). The scale
  itself was expanded from 2 to 5 levels in December 2023 because 2023's heat
  stress exceeded what the original scale described.
* **Four global bleaching events** — reef area affected: **21 % (1998) → 37 %
  (2010) → 68 % (2014–2017) → 83,7 % (2023–2025)** (NOAA / ICRI). Great Barrier
  Reef 2016: 91 % of individual reefs (Hughes et al. 2017, *Nature*).
* **Hughes et al. (2018, *Science*)** — 100 sites, 1980–2016: median return
  interval between severe bleaching events has fallen to **6 years** — too
  short for many coral communities to fully recover.
* **GCRMN & ICRI *Status of Coral Reefs of the World: 2025*** (DOI
  [10.59387/LFPR6347](https://doi.org/10.59387/LFPR6347)) — independent,
  much larger confirmation: current recovery window **5–6 years**. Cover
  30.2 % → 27.3 % (−9.5 % relative). Complementary metric (cover loss, not
  heat-stress area).
* **Guillermic et al. (2021, *Science Advances*)** — heat kills
  acidification compensation: at 28 °C corals can still raise calcifying-fluid
  pH; at 31 °C neither tested species sustained positive calcification.
* **Walker et al. (2023, *Evolutionary Applications*)** — honesty check:
  bleaching response is **not** uniform across genotypes (*Acropora
  hyacinthus*, Palau), and heat resistance carries a growth tradeoff.

## What the controls do

1. **DHW slider 0–20** with NOAA alert bands at 4 / 8 / 12 / 16 / 20.
2. **Escalation chart** of the four documented global events.
3. **Recovery-window panel** — Hughes 6 years vs GCRMN 5–6 years.
4. **Toggle Heat + Acidification** — Guillermic 2021.
5. **Toggle „uniforme Reaktion?“** — always **False**, plus the Walker text.
6. Link to the Klimakatalog entry:
   [klimakatalog.vercel.app/p/coral-reef-utac](https://klimakatalog.vercel.app/p/coral-reef-utac).
7. Disclaimer box.

Thresholds and events are 1:1 from the Python package. Tests lock those
values.

## License

Code: MIT. Documentation/data notes: see [DISCLAIMER.md](DISCLAIMER.md).

## Citation

See [CITATION.cff](CITATION.cff).
