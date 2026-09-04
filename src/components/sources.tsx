const CITES = [
  {
    authors: "NOAA Coral Reef Watch",
    year: "2024",
    title: "Daily 5km Satellite Coral Bleaching Heat Stress Degree Heating Week Product (Version 3.1)",
    href: "https://coralreefwatch.noaa.gov/product/5km/index_5km_dhw.php",
    note: "DHW 0–20 °C-Wochen, fünf Alert-Stufen bei 4 / 8 / 12 / 16 / 20.",
  },
  {
    authors: "Hughes, T.P., et al.",
    year: "2017",
    title: "Global warming and recurrent mass bleaching of corals",
    journal: "Nature",
    doi: "10.1038/nature21707",
    note: "Drittes globales Ereignis. Great Barrier Reef 2016: 91 % der einzelnen Riffe.",
  },
  {
    authors: "Hughes, T.P., et al.",
    year: "2018",
    title: "Spatial and temporal patterns of mass bleaching of corals in the Anthropocene",
    journal: "Science",
    doi: "10.1126/science.aan8048",
    note: "100 Standorte, 1980–2016. Median-Return-Intervall 6 Jahre.",
  },
  {
    authors: "NOAA / ICRI",
    year: "2024",
    title: "NOAA Confirms 4th Global Coral Bleaching Event",
    href: "https://www.noaa.gov/news-release/noaa-confirms-4th-global-coral-bleaching-event",
    note: "21 % → 37 % → 68 % → 83,7 % der weltweiten Rifffläche.",
  },
  {
    authors: "Guillermic, M., et al.",
    year: "2021",
    title:
      "Thermal stress reduces pocilloporid coral resilience to ocean acidification by impairing control over calcifying fluid chemistry",
    journal: "Science Advances",
    doi: "10.1126/sciadv.aba9958",
    note: "28 °C: Säure-Ausgleich möglich. 31 °C: Kalkbildung bricht zusammen.",
  },
  {
    authors: "Walker, N.S., Nestor, V., Golbuu, Y., Palumbi, S.R.",
    year: "2023",
    title:
      "Coral bleaching resistance variation is linked to differential mortality and skeletal growth during recovery",
    journal: "Evolutionary Applications",
    doi: "10.1111/eva.13500",
    note: "Acropora hyacinthus, Palau. Resistenz variiert und kostet Wachstum.",
  },
  {
    authors: "GCRMN & ICRI",
    year: "2026",
    title: "Status of Coral Reefs of the World: 2025",
    doi: "10.59387/LFPR6347",
    note: "21,1 Mio. Beobachtungen. Recovery-Fenster 5–6 Jahre. Cover 30,2 % → 27,3 %.",
  },
];

export function Sources() {
  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">Quellen</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
        Schwellen und Ereignisse 1:1 aus coral-reef-utac (P114). Die Oberfläche ist
        Deutsch; Zahlen und Zitationen bleiben in ihren Einheiten.
      </p>
      <ul className="mt-5 space-y-4 text-sm">
        {CITES.map((c) => (
          <li key={`${c.authors}-${c.year}`} className="border-t border-ring pt-4">
            <p className="text-fg">
              {c.authors} ({c.year}). <span className="italic">{c.title}.</span>
              {c.journal ? ` ${c.journal}.` : null}
            </p>
            <p className="mt-1 text-muted">{c.note}</p>
            {c.doi ? (
              <a
                className="mt-1 inline-block font-mono text-xs text-accent underline-offset-4 hover:underline"
                href={`https://doi.org/${c.doi}`}
                target="_blank"
                rel="noreferrer"
              >
                doi:{c.doi}
              </a>
            ) : (
              <a
                className="mt-1 inline-block font-mono text-xs text-accent underline-offset-4 hover:underline"
                href={c.href}
                target="_blank"
                rel="noreferrer"
              >
                Quelle
              </a>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs leading-relaxed text-subtle">
        Keine UTAC/CREP/AFET-Verknüpfung. Die Korallenriff-Forschung steht für sich.
        Owner: GenesisAeon / Johann Römer. MIT.
      </p>
    </section>
  );
}
