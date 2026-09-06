import Image from "next/image";
import { ArrowCTA, Button } from "@/components/ds/Button";
import { Card, Eyebrow } from "@/components/ds/Card";
import { MediaCard, Testimonial } from "@/components/ds/MediaCard";
import { Parallax } from "@/components/ds/motion";
import FishTankYears, { type FishTankYear } from "@/components/fish-tank/FishTankYears";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";

const YEARS: FishTankYear[] = [
  {
    year: "2026",
    venue: "2026 season",
    headline: "The year the tank split in two",
    summary:
      "Fish Tank 2026 ran two separate tracks so every young entrepreneur competed against peers at their level. A beginner-friendly KidPreneur division and a rigorous VentureLab division, both on the same stage.",
    stats: [
      { value: "100", label: "competitors" },
      { value: "2", label: "divisions" },
      { value: "Free", label: "to enter" },
      { value: "3–9", label: "grades" },
    ],
    image: "/fish_tank/2025/images/hero-celebration.jpg",
    alt: "Fish Tank competitors celebrating",
    chips: ["KidPreneur", "VentureLab"],
  },
  {
    year: "2025",
    venue: "Benedictine University",
    headline: "70 competitors at Benedictine University",
    summary:
      "Our second annual pitch competition, hosted at Benedictine University, where 70 young entrepreneurs competed for funding, mentorship and resources to launch their businesses. Students pitched to business owners, investors and community leaders.",
    stats: [
      { value: "70", label: "competitors" },
      { value: "11", label: "judges" },
      { value: "5", label: "placed" },
    ],
    image: "/fish_tank/2025/images/gallery-stage.jpg",
    alt: "The Fish Tank 2025 stage at Benedictine University",
    chips: ["Benedictine University", "70 competitors"],
  },
  {
    year: "2024",
    venue: "College of DuPage",
    headline: "The inaugural Fish Tank",
    summary:
      "Our first pitch competition, at College of DuPage, where 100+ young entrepreneurs competed for $750 in prizes, mentorship, and resources to launch their businesses. Garrett Hauk took the inaugural championship.",
    stats: [
      { value: "100+", label: "competitors" },
      { value: "11", label: "judges" },
      { value: "$750", label: "in prizes" },
    ],
    image: "/fish_tank/overall.jpg",
    alt: "The inaugural Fish Tank at College of DuPage",
    chips: ["College of DuPage", "$750 in prizes"],
  },
];

const HERO_MOSAIC = [
  {
    src: "/fish_tank/2025/images/gallery-pitching.jpg",
    alt: "A student mid-pitch at Fish Tank",
    depth: 0.3,
    offset: "0px",
  },
  {
    src: "/fish_tank/2025/images/hero-judges.jpg",
    alt: "The Fish Tank judging panel",
    depth: 0.85,
    offset: "clamp(20px, 3vw, 56px)",
  },
  {
    src: "/fish_tank/2025/images/gallery-trophy.jpg",
    alt: "Winners holding the Fish Tank trophy",
    depth: 0.2,
    offset: "0px",
  },
];

const GALLERY = [
  { src: "/fish_tank/2025/images/gallery-stage.jpg", alt: "On stage" },
  { src: "/fish_tank/2025/images/gallery-audience.jpg", alt: "The audience" },
  { src: "/fish_tank/2025/images/gallery-awards.jpg", alt: "Awards" },
  { src: "/fish_tank/2025/images/gallery-mentors.jpg", alt: "Mentors" },
  { src: "/fish_tank/2025/images/gallery-pitching.jpg", alt: "Pitching" },
  { src: "/fish_tank/2025/images/gallery-trophy.jpg", alt: "The trophy" },
];

export default function FishTankPage() {
  return (
    <>
      <SiteHeader cta="Enter Fish Tank" ctaHref={LINKS.fishTankEntry} />

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
                <span className="bb-brand-text">Pitch it</span> to a room of real judges
              </h1>
              <Eyebrow>Fish Tank</Eyebrow>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                Our flagship competition. Two divisions, a stage, and a panel of founders, investors and community
                leaders. You do not have to attend camp to compete.
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
                <Button href={LINKS.fishTankEntry} size="lg" target="_blank" rel="noopener noreferrer">
                  Enter Fish Tank
                </Button>
                <ArrowCTA href="/office-hours">Book pitch office hours</ArrowCTA>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bb-mosaic-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(8px, 1vw, 16px)",
            padding: "clamp(40px, 6vw, 80px) clamp(8px, 1vw, 16px) 0",
          }}
        >
          {HERO_MOSAIC.map((m, i) => (
            <Parallax key={m.src} depth={m.depth}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  aspectRatio: "4 / 5",
                  marginTop: m.offset,
                }}
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 720px) 50vw, 33vw"
                  priority={i < 2}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Parallax>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------- Divisions */}
      <section style={{ paddingBlock: "var(--section-y)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-11)",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
              <h2 className="bb-display-2" style={{ maxWidth: "18ch" }}>
                Two competitions. One stage.
              </h2>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                Every entrant competes against peers at their own level, so a fourth grader is never pitching
                against a ninth grader.
              </p>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "var(--grid-gap)",
                alignItems: "stretch",
              }}
            >
              <Card pad="var(--space-10)">
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                  <p className="bb-meta">Grades 3–6 · KidPreneur camp students</p>
                  <h3 className="bb-display-3">KidPreneur division</h3>
                  <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                    Built for our youngest entrepreneurs. Students pitch their business ideas in a supportive,
                    beginner-friendly format designed to build confidence and creativity rather than nerves.
                  </p>
                </div>
              </Card>
              <Card pad="var(--space-10)">
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                  <p className="bb-meta">Grades 6–9 · VentureLab students</p>
                  <h3 className="bb-display-3">VentureLab division</h3>
                  <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                    For students who have been through the full VentureLab experience. A more rigorous pitch format,
                    deeper feedback from judges, and higher stakes as competitors go head to head.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <FishTankYears years={YEARS} initialYear="2026" />

      {/* --------------------------------------------------------- Gallery */}
      <section style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y)" }}>
        <div
          style={{ maxWidth: "var(--container)", margin: "0 auto var(--space-11)", paddingInline: "var(--gutter)" }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", alignItems: "center" }}>
              <h3 className="bb-display-2" style={{ maxWidth: "20ch", textAlign: "center" }}>
                A real stage, a real audience
              </h3>
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "var(--grid-gap)",
          }}
        >
          {GALLERY.map((g) => (
            <div key={g.alt}>
              <MediaCard ratio="1 / 1" src={g.src} alt={g.alt} meta={g.alt} sizes="(max-width: 900px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- Quote */}
      <section style={{ paddingBlock: "var(--section-y)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)" }}>
          <div>
            <Testimonial
              quote="This year, we came back bigger than ever, with more students, more mentors, and an incredible lineup of guest speakers."
              name="BizBuzz on NCTV17 Spotlight"
              detail="On the second annual Fish Tank at Benedictine University"
              tag="Fish Tank 2025"
              imageSrc="/fish_tank/2025/images/gallery-group.jpg"
              imageAlt="The Fish Tank 2025 group photo"
            />
          </div>
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
              <h2 className="bb-display-2" style={{ maxWidth: "22ch" }}>
                You do not need to attend camp to compete
              </h2>
              <p className="bb-lead" style={{ maxWidth: "50ch" }}>
                Fish Tank is open to all eligible students. Bring friends who are not in the program. Teams are
                encouraged. Every entrant attends at least one hour of office hours a week beforehand.
              </p>
              <Button href={LINKS.fishTankEntry} size="lg" target="_blank" rel="noopener noreferrer">
                Enroll for Fish Tank
              </Button>
              <p className="bb-caption">Questions? {CONTACT_EMAIL}</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
