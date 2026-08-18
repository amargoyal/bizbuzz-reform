import Image from "next/image";
import { ArrowCTA, Button } from "@/components/ds/Button";
import { Card, Chip, Eyebrow, Stat } from "@/components/ds/Card";
import { Testimonial } from "@/components/ds/MediaCard";
import { CountUp, DrawArrow, DrawUnderline, Marquee, Parallax, Reveal, ScrollRail } from "@/components/ds/motion";
import ProgramPanels, { type ProgramPanel } from "@/components/home/ProgramPanels";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { LINKS } from "@/lib/site";

const SCHOOLS = [
  "Naperville North",
  "Naperville Central",
  "Madison",
  "Scullen",
  "Kennedy",
  "Crone",
  "Springbrook",
  "Lincoln",
  "Beebe",
  "Gregory",
  "Jefferson",
  "Granger",
  "Still",
  "Neuqua Valley",
  "Waubonsie Valley",
  "Avery Coonley",
  "Twin Groves",
  "Margaret Mead",
  "Bednarcik",
  "Homer",
  "Summit Hill",
  "Heritage Grove",
  "Lake Zurich North",
  "Calvary",
  "Cass",
].map((name) => ({
  name,
  src: `/schools/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`,
}));

const PROGRAMS: ProgramPanel[] = [
  {
    index: "01 / 04",
    title: "Summer Camp",
    blurb:
      "Six sessions across six weeks. Ideation, finance, marketing, prototyping, speaking, and a mock pitch.",
    chips: ["Always free", "Grades 3–8", "6 sessions", "KidPreneur + VentureLab"],
    linkLabel: "Explore the camp",
    href: "/camps",
    bg: "/camp_imgs/landing/center.jpg",
    bgAlt: "Students collaborating at a BizBuzz camp session",
    inset: "/camp_imgs/2026/session3kp/session3kpb.jpg",
    insetAlt: "Marketing and prototyping session",
  },
  {
    index: "02 / 04",
    title: "Fish Tank",
    blurb:
      "Our pitch competition. Two divisions, real judges, and prizes for the businesses students actually built.",
    chips: ["Free to enter", "2 divisions", "Shark Tank alum judging", "$750 in prizes"],
    linkLabel: "See Fish Tank",
    href: "/fish-tank",
    bg: "/fish_tank/2025/images/hero-stage.jpg",
    bgAlt: "The Fish Tank stage at Benedictine University",
    inset: "/fish_tank/2025/images/gallery-trophy.jpg",
    insetAlt: "Fish Tank winners with their trophy",
  },
  {
    index: "03 / 04",
    title: "Workshops",
    blurb:
      "Condensed curriculum brought to elementary schools, business fairs and community centers. We travel to you.",
    chips: ["7 series", "17 sessions", "560 students", "We come to your school"],
    linkLabel: "Book a workshop",
    href: "/workshops",
    bg: "/image_gallery/Sessions.jpg",
    bgAlt: "A BizBuzz workshop in progress",
    inset: "/image_gallery/Group.jpg",
    insetAlt: "Workshop students with their instructors",
  },
  {
    index: "04 / 04",
    title: "1:1 Mentorship",
    blurb: "Office hours for business incubation, feedback on your idea, and pitch practice before Fish Tank.",
    chips: ["Online or in person", "1 hour a week", "Naperville libraries"],
    linkLabel: "Request a session",
    href: "/office-hours",
    bg: "/program_cards/mentorship.jpg",
    bgAlt: "A one-to-one mentorship session",
    inset: "/camp_imgs/2026/session5vl/session5vlc.jpg",
    insetAlt: "A student practising a pitch with an instructor",
  },
];

const SEASONS = [
  {
    year: "2024",
    title: "The first summer",
    blurb:
      "Six weeks, seven guest speakers, and an inaugural Fish Tank at College of DuPage where 100+ kidpreneurs competed for $750.",
    image: "/hero_imgs/2.jpg",
    alt: "The first BizBuzz camp cohort in 2024",
    chips: ["110 students", "6 sessions", "$750 in prizes"],
  },
  {
    year: "2025",
    title: "Bigger stage",
    blurb:
      "Seven sessions, 120 students, and Fish Tank at Benedictine University with a Shark Tank alum and the Mayor of Naperville judging.",
    image: "/fish_tank/2025/images/gallery-stage.jpg",
    alt: "Fish Tank 2025 at Benedictine University",
    chips: ["120 students", "7 sessions", "10 judges"],
  },
  {
    year: "2026",
    title: "Two tracks",
    blurb:
      "KidPreneur and VentureLab ran in parallel. Same six weeks, two levels, two separate Fish Tank divisions.",
    image: "/camp_imgs/2026/session4vl/session4vla.jpg",
    alt: "VentureLab students in a 2026 session",
    chips: ["KidPreneur", "VentureLab", "2 divisions"],
  },
  {
    year: "2027",
    title: "Registration open",
    blurb: "Next summer's camp is open now. Free, in Naperville, grades 3–8, and seats are limited.",
    image: "/camp_imgs/landing/center.jpg",
    alt: "Students collaborating at a BizBuzz session",
    chips: ["Register free", "Grades 3–8", "Limited seats"],
  },
];

const PRESS = [
  {
    meta: "NCTV17 Spotlight · 2025",
    headline: "BizBuzz Turns Imagination into Innovation",
    href: "https://www.nctv17.org/spotlight/bizbuzz-turns-imagination-into-innovation/",
    image: "/news/nctv-spotlight-2025.jpg",
    outlet: "NCTV17",
  },
  {
    meta: "NCTV17 News · 2024",
    headline: "Naperville North Juniors Hold Youth Entrepreneurship Camp for Students",
    href: "https://www.nctv17.org/news/naperville-north-juniors-hold-youth-entrepreneurship-camp-for-students/",
    image: "/news/nctv-students-2024.jpg",
    outlet: "NCTV17",
  },
  {
    meta: "We Love Naperville · 2024",
    headline: "Inaugural BizBuzz Camp for Kid Entrepreneurs",
    href: "https://welovenaperville.co/article/inaugural-bizbuzz-camp-for-kid-entrepreneurs",
    image: "/news/welovenaperville-2024.jpg",
    outlet: "We Love Naperville",
  },
];

const HERO_MOSAIC = [
  { src: "/hero_imgs/9.jpg", alt: "Kidpreneurs at a BizBuzz camp session", depth: 0.35, offset: "0px" },
  {
    src: "/hero_imgs/2.jpg",
    alt: "Students working through a business challenge",
    depth: 0.85,
    offset: "clamp(16px, 3vw, 48px)",
  },
  {
    src: "/fish_tank/2025/images/hero-stage.jpg",
    alt: "A student pitching on the Fish Tank stage",
    depth: 0.15,
    offset: "0px",
  },
  {
    src: "/camp_imgs/2026/session3kp/session3kpb.jpg",
    alt: "Marketing and prototyping session",
    depth: 0.9,
    offset: "clamp(24px, 4vw, 64px)",
  },
  {
    src: "/fish_tank/2025/images/gallery-trophy.jpg",
    alt: "Fish Tank winners with their trophy",
    depth: 0.45,
    offset: "0px",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      {/* ------------------------------------------------------------ Hero */}
      <section style={{ paddingBlock: "clamp(56px, 7vw, 104px) 0" }}>
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
              <Eyebrow dot>Naperville, Illinois</Eyebrow>
              <h1 className="bb-display-1" style={{ maxWidth: "19ch" }}>
                Every student deserves to find their{" "}
                <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
                  own idea
                  <span
                    style={{ position: "absolute", left: 0, right: 0, bottom: "-0.16em", pointerEvents: "none" }}
                  >
                    <DrawUnderline delay={620} />
                  </span>
                </span>
              </h1>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                BizBuzz is a student-run nonprofit teaching entrepreneurship to grades 3–8. Free camps, free
                workshops, and a pitch competition called Fish Tank. Built by students, for students.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-7)",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "var(--space-3)",
                }}
              >
                <Button size="lg" href={LINKS.campRegistration} target="_blank" rel="noopener noreferrer">
                  Register for 2027 camp
                </Button>
                <ArrowCTA href="/seasons">See the 2026 season</ArrowCTA>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          className="bb-mosaic-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "clamp(8px, 1vw, 16px)",
            alignItems: "start",
            padding: "clamp(40px, 6vw, 88px) clamp(8px, 1vw, 16px) 0",
          }}
        >
          {HERO_MOSAIC.map((m, i) => (
            <Parallax key={m.src} depth={m.depth}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  aspectRatio: "3 / 4",
                  marginTop: m.offset,
                }}
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 720px) 50vw, 20vw"
                  priority={i < 3}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Parallax>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- Proof */}
      <section style={{ paddingBlock: "var(--section-y)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "var(--space-9) var(--space-8)",
            }}
          >
            <Reveal>
              <Stat
                value={<CountUp to={560} suffix="+" />}
                label="students reached through workshops"
                note="7 series, 17 sessions"
              />
            </Reveal>
            <Reveal delay={80}>
              <Stat value={<CountUp to={26} />} label="partner schools across Chicagoland" />
            </Reveal>
            <Reveal delay={160}>
              <Stat
                value={<CountUp to={90} suffix="%" />}
                label="of Naperville K-8 schools teach no business"
                note="the reason we started"
              />
            </Reveal>
            <Reveal delay={240}>
              <Stat
                value={<CountUp to={0} prefix="$" />}
                label="cost to every family, every program"
                note="always free"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Mission */}
      <section style={{ paddingBlock: "0 var(--section-y)" }}>
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
                <Eyebrow>Why we exist</Eyebrow>
                <h2 className="bb-display-2" style={{ maxWidth: "14ch" }}>
                  Build Biz. Bring Buzz.
                </h2>
              </div>
            </Reveal>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <Reveal delay={120}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
                <p className="bb-lead">
                  Two Naperville North juniors founded BizBuzz in April 2024 after finding that 90% of K-8 schools
                  in the city offer no business education at all.
                </p>
                <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                  We built it on the belief that every student deserves access to entrepreneurial education that
                  helps them find their ideas, and the confidence to share them. Every program is free. Students
                  design it. Students run it.
                </p>
                <p className="bb-body" style={{ fontWeight: "var(--weight-semibold)", color: "var(--text-display)" }}>
                  Let&apos;s turn imagination into innovation.
                </p>
                <div style={{ paddingTop: "var(--space-3)" }}>
                  <ArrowCTA href="/about">Read our story</ArrowCTA>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Two paths */}
      <section style={{ paddingBlock: "0 var(--section-y)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)" }}>
          <Reveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "var(--grid-gap)",
                alignItems: "stretch",
              }}
            >
              <Card pad="var(--space-10)">
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", height: "100%" }}>
                  <div>
                    <Chip tone="accent">For students</Chip>
                  </div>
                  <h3 className="bb-display-3">You have an idea. We&apos;ll help you build it.</h3>
                  <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                    Six sessions, real guest speakers, and a business you actually pitch on stage by the end of the
                    summer.
                  </p>
                  <div style={{ marginTop: "auto", paddingTop: "var(--space-7)" }}>
                    <ArrowCTA href="/camps">Explore the camp</ArrowCTA>
                  </div>
                </div>
              </Card>
              <Card pad="var(--space-10)">
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", height: "100%" }}>
                  <div>
                    <Chip>For parents and schools</Chip>
                  </div>
                  <h3 className="bb-display-3">Free, local, and run to a real schedule.</h3>
                  <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                    Sessions at 95th Street and Nichols Library, weekly email updates, and 1:1 office hours online
                    or in person.
                  </p>
                  <div style={{ marginTop: "auto", paddingTop: "var(--space-7)" }}>
                    <ArrowCTA href="/office-hours">Office hours and FAQs</ArrowCTA>
                  </div>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      <div style={{ display: "flex", justifyContent: "center", paddingBottom: "var(--space-9)" }}>
        <DrawArrow shape="curve" size={180} color="var(--buzz-600)" />
      </div>

      {/* -------------------------------------------------------- Programs */}
      <section id="programs" style={{ paddingBlock: "0 var(--section-y)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-12)",
          }}
        >
          <Reveal>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-7)",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Eyebrow dot>Four programs</Eyebrow>
              <h2 className="bb-display-2" style={{ maxWidth: "20ch" }}>
                Ideate, prototype, and pitch
              </h2>
              <p className="bb-lead" style={{ maxWidth: "54ch", color: "var(--text-muted)" }}>
                Every program is free. Start anywhere. Most students start at camp and finish on the Fish Tank
                stage.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--section-y)" }}>
        <ProgramPanels programs={PROGRAMS} />
      </section>

      {/* ---------------------------------------------------- Seasons rail */}
      <section style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y-tight) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)" }}>
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
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                <Eyebrow>2024 to 2027</Eyebrow>
                <h2 className="bb-display-2" style={{ maxWidth: "16ch" }}>
                  Four seasons, one idea
                </h2>
              </div>
              <p className="bb-body" style={{ maxWidth: "38ch", color: "var(--text-muted)" }}>
                Keep scrolling. The seasons move sideways.
              </p>
            </div>
          </Reveal>
        </div>

        <ScrollRail height="190vh" gap="var(--space-9)" padInline="var(--gutter)" align="stretch">
          {SEASONS.map((s) => (
            <div
              key={s.year}
              style={{
                width: "min(80vw, 500px)",
                flex: "0 0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-6)",
                justifyContent: "center",
                paddingBlock: "clamp(92px, 13vh, 124px) clamp(28px, 5vh, 56px)",
              }}
            >
              <div
                style={{
                  flex: "1 1 auto",
                  minHeight: 280,
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image src={s.image} alt={s.alt} fill sizes="500px" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }} />
                <div
                  style={{
                    position: "absolute",
                    left: 20,
                    right: 20,
                    bottom: 20,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "var(--space-4)",
                  }}
                >
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="bb-caption"
                      style={{
                        background: "var(--surface-glass-inverse)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        border: "1px solid rgba(251,245,233,.28)",
                        color: "var(--cream-100)",
                        padding: "7px 14px",
                        borderRadius: "var(--radius-pill)",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", flex: "0 0 auto" }}>
                <p className="bb-mono">{s.year}</p>
                <h3 className="bb-display-3">{s.title}</h3>
                <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                  {s.blurb}
                </p>
              </div>
            </div>
          ))}
        </ScrollRail>
      </section>

      {/* --------------------------------------------------------- Schools */}
      <section style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y-tight) var(--section-y)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto var(--space-11)",
            paddingInline: "var(--gutter)",
            textAlign: "center",
          }}
        >
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", alignItems: "center" }}>
              <Eyebrow dot>Where our students come from</Eyebrow>
              <h2 className="bb-display-3" style={{ maxWidth: "26ch" }}>
                26 schools across Naperville and greater Chicagoland
              </h2>
            </div>
          </Reveal>
        </div>

        <Marquee speed={46} gap="var(--space-10)">
          {SCHOOLS.slice(0, 13).map((s) => (
            <div key={s.name} style={{ position: "relative", width: 160, height: 84, flex: "0 0 auto" }}>
              <Image src={s.src} alt={s.name} fill sizes="160px" style={{ objectFit: "contain", opacity: 0.85 }} />
            </div>
          ))}
        </Marquee>
        <div style={{ height: "var(--space-8)" }} />
        <Marquee speed={52} reverse gap="var(--space-10)">
          {SCHOOLS.slice(13).map((s) => (
            <div key={s.name} style={{ position: "relative", width: 160, height: 84, flex: "0 0 auto" }}>
              <Image src={s.src} alt={s.name} fill sizes="160px" style={{ objectFit: "contain", opacity: 0.85 }} />
            </div>
          ))}
        </Marquee>
      </section>

      {/* ----------------------------------------------------------- Quote */}
      <section style={{ paddingBlock: "var(--section-y)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)" }}>
          <Reveal>
            <Testimonial
              quote="What started as a small idea has now grown into one of the largest youth entrepreneurship programs in Chicagoland."
              name="NCTV17 Spotlight"
              detail="Naperville Community Television, 2025"
              tag="Press"
              imageSrc="/news/nctv-spotlight-2025.jpg"
              imageAlt="BizBuzz founders on the NCTV17 Spotlight set"
            />
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------- Press */}
      <section style={{ paddingBlock: "0 var(--section-y)" }}>
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
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                <Eyebrow>In the news</Eyebrow>
                <h2 className="bb-display-2" style={{ maxWidth: "18ch" }}>
                  Naperville has been watching
                </h2>
              </div>
              <ArrowCTA href="/about#press">All coverage</ArrowCTA>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--grid-gap)",
            }}
          >
            {PRESS.map((n) => (
              <a
                key={n.headline}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textDecoration: "none" }}
              >
                <Card interactive pad="var(--space-7)">
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        aspectRatio: "16 / 10",
                      }}
                    >
                      <Image
                        src={n.image}
                        alt={n.outlet}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <p className="bb-mono">{n.meta}</p>
                    <h3 className="bb-display-4">{n.headline}</h3>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Sponsor CTA */}
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
              <Eyebrow dot>Sponsors</Eyebrow>
              <h2 className="bb-display-2" style={{ maxWidth: "22ch" }}>
                $100 covers materials for a whole session
              </h2>
              <p className="bb-lead" style={{ maxWidth: "52ch" }}>
                Every program stays free because Naperville businesses and families pay for it. 16 sponsors funded
                the last three seasons.
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
                <Button href="/sponsors" size="lg">
                  See sponsorship tiers
                </Button>
                <ArrowCTA href={LINKS.email}>Email the team</ArrowCTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
