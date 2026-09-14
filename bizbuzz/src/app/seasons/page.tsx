import ArchiveGallery from "@/components/archive/ArchiveGallery";
import PageSections from "@/components/site/PageSections";
import { IMPACT } from "@/data/impact";
import data2024 from "@/data/2024.json";
import data2025 from "@/data/2025.json";
import data2026 from "@/data/2026.json";
import { ArrowCTA, Button } from "@/components/ds/Button";
import { Chip, Stat } from "@/components/ds/Card";
import { MediaCard } from "@/components/ds/MediaCard";
import { CountUp, Parallax } from "@/components/ds/motion";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { LINKS } from "@/lib/site";

const SEASONS = [
  {
    year: "2027",
    status: "Registration open",
    chipTone: "accent" as const,
    title: "The one you can still join",
    blurb:
      "Next summer's camp keeps the two-track structure and is open for registration now. Dates, venues and speakers are announced through the spring.",
    stats: [
      { value: "Free", label: "cost" },
      { value: "3–8", label: "grades" },
      { value: "2", label: "tracks" },
    ],
    campHref: "/camps#2027",
    campLabel: "2027 camp",
    tankHref: null,
    image: "/camp_imgs/landing/center.jpg",
    alt: "Students collaborating at a BizBuzz session",
    chips: ["Register free", "Limited seats"],
  },
  {
    year: "2026",
    status: "Season complete",
    chipTone: "hairline" as const,
    title: "The year camp split into two tracks",
    blurb: data2026.summary,
    stats: [
      { value: String(data2026.kpis.students), label: "students" },
      { value: String(data2026.kpis.sessions), label: "sessions" },
      { value: String(data2026.kpis.programsRun), label: "programs" },
      { value: String(data2026.kpis.officeHours), label: "office hours" },
    ],
    archive: data2026,
    campHref: "/camps#2026",
    campLabel: "2026 camp",
    tankHref: "/fish-tank#2026",
    image: "/camp_imgs/2026/session4vl/session4vla.jpg",
    alt: "VentureLab students in a 2026 session",
    chips: ["KidPreneur", "VentureLab"],
  },
  {
    year: "2025",
    status: "Season complete",
    chipTone: "hairline" as const,
    title: "Bigger stage at Benedictine University",
    blurb: data2025.summary,
    stats: [
      { value: String(data2025.kpis.students), label: "students" },
      { value: String(data2025.kpis.sessions), label: "sessions" },
      { value: String(data2025.kpis.programsRun), label: "programs" },
      { value: String(data2025.kpis.officeHours), label: "office hours" },
    ],
    archive: data2025,
    campHref: "/camps#2025",
    campLabel: "2025 camp",
    tankHref: "/fish-tank#2025",
    image: "/fish_tank/2025/images/gallery-stage.jpg",
    alt: "Fish Tank 2025 at Benedictine University",
    chips: ["Benedictine University", "120 students"],
  },
  {
    year: "2024",
    status: "Where it started",
    chipTone: "hairline" as const,
    title: "The first summer, six weeks after founding",
    blurb: data2024.summary,
    stats: [
      { value: String(data2024.kpis.students), label: "students" },
      { value: String(data2024.kpis.sessions), label: "sessions" },
      { value: String(data2024.kpis.programsRun), label: "programs" },
      { value: String(data2024.kpis.officeHours), label: "office hours" },
    ],
    archive: data2024,
    campHref: "/camps#2024",
    campLabel: "2024 camp",
    tankHref: "/fish-tank#2024",
    image: "/hero_imgs/2.jpg",
    alt: "The first BizBuzz camp cohort in 2024",
    chips: ["College of DuPage", "110 students"],
  },
];

export default function SeasonsPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
      {/* ------------------------------------------------------------ Hero */}
      <section style={{ paddingBlock: "clamp(56px, 7vw, 96px) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)" }}>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-8)",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h1 className="bb-display-1" style={{ maxWidth: "16ch" }}>
                Past seasons. Next summer.
              </h1>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                Explore our completed programs since April 2024 and plans for summer 2027.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PageSections links={[{ href: "#comparison", label: "Compare seasons" }, { href: "#2027", label: "2027" }, { href: "#2026", label: "2026" }, { href: "#2025", label: "2025" }, { href: "#2024", label: "2024" }]} />

      {/* ------------------------------------------------------ Cumulative */}
      <section style={{ paddingBlock: "var(--section-y) var(--section-y-tight)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
            gap: "var(--space-9) var(--space-8)",
          }}
        >
          <div>
            <Stat value={<CountUp to={IMPACT.students} suffix="+" />} label="students taught" note="across all programs since 2024" />
          </div>
          <div>
            <Stat value={<CountUp to={IMPACT.officeHours} />} label="mentoring hours" />
          </div>
          <div>
            <Stat value={<CountUp to={IMPACT.sessions} />} label="camp and workshop sessions" />
          </div>
          <div>
            <Stat value={<CountUp to={IMPACT.schools} />} label="schools represented" />
          </div>
        </div>
      </section>

      <section id="comparison" className="bb-section-tight bb-container">
        <h2 className="bb-display-3">Completed seasons at a glance</h2>
        <div className="bb-table-scroll" tabIndex={0} role="region" aria-label="Season comparison">
          <table className="bb-table">
            <caption>Reported season figures. Cumulative totals are tracked separately.</caption>
            <thead><tr><th scope="col">Season</th><th scope="col">Students</th><th scope="col">Sessions</th><th scope="col">Programs</th><th scope="col">Mentoring hours</th></tr></thead>
            <tbody>{[data2026, data2025, data2024].map((season) => (
              <tr key={season.year}><th scope="row"><a href={`#${season.year}`}>{season.year}</a></th><td>{season.kpis.students}</td><td>{season.kpis.sessions}</td><td>{season.kpis.programsRun}</td><td>{season.kpis.officeHours}</td></tr>
            ))}</tbody>
          </table>
        </div>
      </section>

      {/* ----------------------------------------------------- Season list */}
      <section style={{ paddingBlock: "var(--section-y-tight) var(--section-y)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-13)",
          }}
        >
          {SEASONS.map((s) => (
            <div key={s.year}>
              <div
                id={s.year}
                className="bb-row-12"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
                  gap: "var(--grid-gap)",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    gridColumn: "span 6",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-7)",
                  }}
                >
                  <p className="bb-stat" style={{ color: "var(--text-display)" }}>
                    {s.year}
                  </p>
                  <div>
                    <Chip tone={s.chipTone}>{s.status}</Chip>
                  </div>
                  <h2 className="bb-display-3" style={{ maxWidth: "20ch" }}>
                    {s.title}
                  </h2>
                  <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                    {s.blurb}
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 110px), 1fr))",
                      gap: "var(--space-8)",
                      paddingTop: "var(--space-4)",
                    }}
                  >
                    {s.stats.map((st) => (
                      <div key={st.label} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                        <p className="bb-display-4" style={{ fontVariantNumeric: "lining-nums tabular-nums" }}>
                          {st.value}
                        </p>
                        <p className="bb-caption">{st.label}</p>
                      </div>
                    ))}
                  </div>
                  {s.archive && (
                    <details className="bb-details">
                      <summary>{s.year} program details and timeline</summary>
                      <div className="bb-content-stack" style={{ padding: 0 }}>
                        {s.archive.programs.map((program) => (
                          <article key={program.id}>
                            <h3 className="bb-display-4">{program.title}</h3>
                            <p className="bb-caption">{program.dateISO} · {program.venue} · {program.attendance} students</p>
                            <p className="bb-body">{program.description}</p>
                            {program.images.length > 0 && <ArchiveGallery images={program.images} title={`${s.year} ${program.title}`} />}
                          </article>
                        ))}
                        {s.archive.stories.map((story) => (
                          <article key={story.id}>
                            <h3 className="bb-display-4">{story.headline}</h3>
                            <p className="bb-caption">{story.name}</p>
                            <p className="bb-body">{story.body}</p>
                          </article>
                        ))}
                        {s.archive.partners.length > 0 && (
                          <div><h3 className="bb-display-4">Season partners</h3><ul>{s.archive.partners.map((partner) => <li key={partner.name}>{partner.name}</li>)}</ul></div>
                        )}
                        <h3 className="bb-display-4">Season timeline</h3>
                        <ol>
                          {s.archive.timeline.map((event) => (
                            <li key={event.id} style={{ marginBottom: "var(--space-5)" }}>
                              <p><time dateTime={event.dateISO}>{event.dateISO}</time> · {event.label}</p>
                              <p className="bb-body">{event.detail}</p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </details>
                  )}
                  {s.archive && s.archive.gallery.length > 0 && (
                    <details className="bb-details">
                      <summary>{s.year} photo highlights</summary>
                      <ArchiveGallery images={s.archive.gallery} title={`${s.year} season`} />
                    </details>
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "var(--space-7)",
                      alignItems: "center",
                      paddingTop: "var(--space-5)",
                    }}
                  >
                    <ArrowCTA href={s.campHref}>{s.campLabel}</ArrowCTA>
                    {s.tankHref && <ArrowCTA href={s.tankHref}>Fish Tank</ArrowCTA>}
                  </div>
                </div>
                <div style={{ gridColumn: "8 / span 5" }}>
                  <Parallax depth={0.4}>
                    <MediaCard ratio="4 / 5" scrim src={s.image} alt={s.alt} chips={s.chips} />
                  </Parallax>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- CTA */}
      <section
        className="bb-on-neutral"
        style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y)" }}
      >
        <div
          style={{
            maxWidth: "var(--container-narrow)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "center" }}>
              <h2 className="bb-display-2" style={{ maxWidth: "20ch" }}>
                2027 is the one you can still join
              </h2>
              <Button href={LINKS.campRegistration} size="lg" target="_blank" rel="noopener noreferrer">
                Register for 2027 camp
              </Button>
            </div>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </>
  );
}
