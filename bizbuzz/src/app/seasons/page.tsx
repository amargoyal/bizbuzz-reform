import { ArrowCTA, Button } from "@/components/ds/Button";
import { Chip, Eyebrow, Stat } from "@/components/ds/Card";
import { MediaCard } from "@/components/ds/MediaCard";
import { CountUp, Parallax, Reveal } from "@/components/ds/motion";
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
    blurb:
      "KidPreneur and VentureLab ran in parallel across six sessions each, ending in two separate Fish Tank divisions. Mayor Scott Wehrli returned for speaking skills and Isha Elandassery led finance.",
    stats: [
      { value: "2", label: "tracks" },
      { value: "12", label: "sessions" },
      { value: "2", label: "divisions" },
    ],
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
    blurb:
      "Seven sessions and 120 students, with five guest speakers including Shark Tank alum Lindsey Fleischhauer and Mayor Scott Wehrli. Fish Tank moved to Benedictine University with 70 competitors and 10 judges.",
    stats: [
      { value: "120", label: "students" },
      { value: "7", label: "sessions" },
      { value: "70", label: "competitors" },
    ],
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
    blurb:
      "Six sessions, seven guest speakers, and 110 students learning ideation, marketing, finance and pitching. The inaugural Fish Tank at College of DuPage drew 100+ competitors and 11 judges for $750 in prizes.",
    stats: [
      { value: "110", label: "students" },
      { value: "6", label: "sessions" },
      { value: "$750", label: "in prizes" },
    ],
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

      {/* ------------------------------------------------------------ Hero */}
      <section style={{ paddingBlock: "clamp(56px, 7vw, 96px) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)" }}>
          <Reveal>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-8)",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Eyebrow dot>The archive</Eyebrow>
              <h1 className="bb-display-1" style={{ maxWidth: "16ch" }}>
                Three summers, one at a time
              </h1>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                Everything we have run since April 2024, with the numbers as they actually landed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ Cumulative */}
      <section style={{ paddingBlock: "var(--section-y) var(--section-y-tight)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "var(--space-9) var(--space-8)",
          }}
        >
          <Reveal>
            <Stat value={<CountUp to={230} />} label="camp students" note="2024 and 2025 cohorts" />
          </Reveal>
          <Reveal delay={80}>
            <Stat value={<CountUp to={560} suffix="+" />} label="reached through workshops" />
          </Reveal>
          <Reveal delay={160}>
            <Stat value={<CountUp to={3} />} label="Fish Tank competitions" />
          </Reveal>
          <Reveal delay={240}>
            <Stat value={<CountUp to={26} />} label="partner schools" />
          </Reveal>
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
            <Reveal key={s.year}>
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
                  <p className="bb-stat" style={{ color: "var(--buzz-500)" }}>
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
                      gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- CTA */}
      <section
        className="bb-on-buzz"
        style={{ background: "var(--surface-accent-soft)", paddingBlock: "var(--section-y)" }}
      >
        <div
          style={{
            maxWidth: "var(--container-narrow)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            textAlign: "center",
          }}
        >
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "center" }}>
              <Eyebrow dot>Next season</Eyebrow>
              <h2 className="bb-display-2" style={{ maxWidth: "20ch" }}>
                2027 is the one you can still join
              </h2>
              <Button href={LINKS.campRegistration} size="lg" target="_blank" rel="noopener noreferrer">
                Register for 2027 camp
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
