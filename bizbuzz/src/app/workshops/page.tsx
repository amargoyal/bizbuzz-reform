import { WORKSHOP_PARTICIPATION, WORKSHOP_STUDENTS } from "@/data/impact";
import workshopArchive from "@/data/workshops.json";
import ArchiveGallery from "@/components/archive/ArchiveGallery";
import Image from "next/image";
import { ArrowCTA, Button } from "@/components/ds/Button";
import { Card, Eyebrow, Stat } from "@/components/ds/Card";
import { CountUp, Parallax, Reveal } from "@/components/ds/motion";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { LINKS } from "@/lib/site";

const MODULES = [
  {
    length: "45–60 min",
    title: "Find the problem",
    blurb: "The Bug-Me List: students collect everyday annoyances, then pick one worth solving.",
  },
  {
    length: "45–60 min",
    title: "Price it",
    blurb: "Cost, price and profit taught through games rather than worksheets.",
  },
  {
    length: "60–90 min",
    title: "Prototype it",
    blurb: "Sketches, mockups and cardboard. Students build a rough first version and test it on each other.",
  },
  {
    length: "30–45 min",
    title: "Pitch it",
    blurb: "Structure, delivery and nerve. Everyone presents, everyone gets feedback.",
  },
];

const WORKSHOPS = [
  { id: "naperville2026", title: "2026 Naperville Children's Business Fair", date: "2026", location: "Naperville, IL", description: "100+ students participated in the 2026 Naperville Children's Business Fair.", sessions: [], images: [] },
  ...workshopArchive,
];

const IMAGERY = [
  { src: "/image_gallery/Sessions.jpg", alt: "A BizBuzz workshop session in progress", depth: 0.3, offset: "0px" },
  {
    src: "/image_gallery/Group.jpg",
    alt: "Workshop students with their instructors",
    depth: 0.8,
    offset: "clamp(16px, 3vw, 44px)",
  },
  { src: "/image_gallery/4.jpg", alt: "Students presenting at a business fair", depth: 0.15, offset: "0px" },
];

export default function WorkshopsPage() {
  return (
    <>
      <SiteHeader cta="Book a workshop" ctaHref={LINKS.workshopEmail} />

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
              <Eyebrow dot>Workshops</Eyebrow>
              <h1 className="bb-display-1" style={{ maxWidth: "17ch" }}>
                We bring the camp to your school
              </h1>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                A condensed version of our curriculum, run in elementary schools, at business fairs and in community
                centers. Free, and we travel to you.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-7)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button href={LINKS.workshopEmail} size="lg">
                  Request a workshop
                </Button>
                <ArrowCTA href="#history">See where we have been</ArrowCTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------- Proof */}
      <section style={{ paddingBlock: "var(--section-y-tight) var(--section-y)" }}>
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
            <Stat value={<CountUp to={WORKSHOP_STUDENTS} suffix="+" />} label="workshop and fair participation" note="since May 2024" />
          </Reveal>
          <Reveal delay={80}>
            <Stat value={<CountUp to={WORKSHOP_PARTICIPATION.length} />} label="workshop and fair programs" />
          </Reveal>
          <Reveal delay={160}>
            <Stat value={<CountUp to={3} />} label="seasons of programming" />
          </Reveal>
          <Reveal delay={240}>
            <Stat value={<CountUp to={0} prefix="$" />} label="charged to any school" note="always free" />
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------- What we cover */}
      <section style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y)" }}>
        <div
          className="bb-row-12"
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gap: "var(--grid-gap)",
            alignItems: "start",
          }}
        >
          <div style={{ gridColumn: "span 5" }}>
            <Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
                <Eyebrow>What a workshop covers</Eyebrow>
                <h2 className="bb-display-2" style={{ maxWidth: "14ch" }}>
                  Design, prototype, and pitch
                </h2>
                <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                  One session or a series. We shape it around your schedule, your grade levels and the time you
                  have.
                </p>
                <div style={{ paddingTop: "var(--space-3)" }}>
                  <ArrowCTA href={LINKS.workshopEmail}>Talk to us about dates</ArrowCTA>
                </div>
              </div>
            </Reveal>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <Reveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "var(--grid-gap)",
                  alignItems: "stretch",
                }}
              >
                {MODULES.map((m) => (
                  <Card key={m.title} pad="var(--space-8)">
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                      <p className="bb-mono">{m.length}</p>
                      <h3 className="bb-display-4">{m.title}</h3>
                      <p className="bb-body-sm" style={{ color: "var(--text-muted)" }}>
                        {m.blurb}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- History */}
      <section id="history" style={{ paddingBlock: "var(--section-y)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-10)",
          }}
        >
          <Reveal>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-8)",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
                <Eyebrow dot>Every workshop so far</Eyebrow>
                <h2 className="bb-display-2" style={{ maxWidth: "16ch" }}>
                  Eight places, in order
                </h2>
              </div>
              <p className="bb-body" style={{ maxWidth: "32ch", color: "var(--text-muted)" }}>
                Newest first, going back to the first talk in May 2024.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {WORKSHOPS.map((w) => (
              <Reveal key={w.title}>
                <div
                  className="bb-rowlist"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr) auto",
                    gap: "var(--space-8)",
                    alignItems: "baseline",
                    paddingBlock: "var(--space-8)",
                    borderTop: "1px solid var(--border-hairline)",
                  }}
                >
                  <div>
                    <h3 className="bb-display-4">{w.title}</h3>
                    <details className="bb-details">
                      <summary>Program details</summary>
                      <p className="bb-body">{w.description}</p>
                      <ul>{w.sessions.map((session) => <li key={session}>{session}</li>)}</ul>
                      <ArchiveGallery images={w.images} title={w.title} />
                    </details>
                  </div>
                  <p className="bb-mono">{w.date}</p>
                  <p className="bb-caption">{w.location}</p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--border-hairline)" }} />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Imagery */}
      <section style={{ paddingBlock: "0 var(--section-y)" }}>
        <div
          className="bb-mosaic-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(8px, 1vw, 16px)",
            paddingInline: "clamp(8px, 1vw, 16px)",
          }}
        >
          {IMAGERY.map((m) => (
            <Parallax key={m.src} depth={m.depth}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  aspectRatio: "4 / 3",
                  marginTop: m.offset,
                }}
              >
                <Image src={m.src} alt={m.alt} fill sizes="(max-width: 720px) 50vw, 33vw" style={{ objectFit: "cover" }} />
              </div>
            </Parallax>
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
              <Eyebrow dot>Teachers and principals</Eyebrow>
              <h2 className="bb-display-2" style={{ maxWidth: "22ch" }}>
                Bring BizBuzz to your school
              </h2>
              <p className="bb-lead" style={{ maxWidth: "50ch" }}>
                Tell us your grade levels, how long you have, and roughly when. We will build the session around it.
                No cost, no catch.
              </p>
              <Button href={LINKS.workshopEmail} size="lg">
                Email bizbuzznfp@gmail.com
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
