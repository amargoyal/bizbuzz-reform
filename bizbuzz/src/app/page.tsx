import { IMPACT, WORKSHOP_STUDENTS } from "@/data/impact";
import Image from "next/image";
import { ArrowCTA, Button } from "@/components/ds/Button";
import { Eyebrow, Stat } from "@/components/ds/Card";
import { CountUp, Marquee, ScrollRail } from "@/components/ds/motion";
import HomeHero from "@/components/home/HomeHero";
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
    title: "Summer Camp",
    audience: "New to business · Grades 3–8",
    blurb:
      "Six sessions across six weeks. Ideation, finance, marketing, prototyping, speaking, and a mock pitch.",
    chips: ["6 sessions", "KidPreneur + VentureLab"],
    linkLabel: "Explore the camp",
    href: "/camps",
    bg: "/camp_imgs/2026/session3kp/session3kpb.jpg",
    bgAlt: "Students working on a marketing and prototyping activity",
  },
  {
    title: "Fish Tank",
    audience: "Ready to pitch · Two divisions",
    blurb:
      "Our pitch competition. Two divisions, real judges, and prizes for the businesses students actually built.",
    chips: ["Business leaders judging", "Prizes for student businesses"],
    linkLabel: "See Fish Tank",
    href: "/fish-tank",
    bg: "/fish_tank/2025/images/hero-stage.jpg",
    bgAlt: "The Fish Tank stage at Benedictine University",
  },
  {
    title: "Workshops",
    audience: "For schools and business fairs",
    blurb:
      "Condensed curriculum brought to elementary schools, business fairs and community centers. We travel to you.",
    chips: ["School talks and business fairs", `${WORKSHOP_STUDENTS}+ students`, "We come to your school"],
    linkLabel: "Book a workshop",
    href: "/workshops",
    bg: "/image_gallery/Sessions.jpg",
    bgAlt: "A BizBuzz workshop in progress",
  },
  {
    title: "1:1 Mentorship",
    audience: "For feedback on an idea",
    blurb: "Office hours for business incubation, feedback on your idea, and pitch practice before Fish Tank.",
    chips: ["Online or in person", "Naperville libraries"],
    linkLabel: "Request a session",
    href: "/office-hours",
    bg: "/camp_imgs/2026/session5vl/session5vlc.jpg",
    bgAlt: "Students working with a BizBuzz instructor",
  },
];

const SEASONS = [
  {
    year: "2024",
    title: "The first summer",
    blurb:
      "Six weeks, seven guest speakers, and an inaugural Fish Tank at College of DuPage where 80 students competed for $750.",
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

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
      <HomeHero />
      <ProgramPanels programs={PROGRAMS} />

      {/* ----------------------------------------------------------- Proof */}
      <section style={{ paddingBlock: "var(--section-y)" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
              gap: "var(--space-9) var(--space-8)",
            }}
          >
            <div>
              <Stat
                value={<CountUp to={IMPACT.students} suffix="+" />}
                label="students taught"
                note="across camps, competitions and workshops"
              />
            </div>
            <div>
              <Stat value={<CountUp to={IMPACT.schools} />} label="schools across Chicagoland" />
            </div>
            <div>
              <Stat
                value={<CountUp to={IMPACT.funding} prefix="$" suffix="+" />}
                label="raised by our community"
                note="51 community partners"
              />
            </div>
            <div>
              <Stat
                value={<CountUp to={IMPACT.sessions} />}
                label="camp and workshop sessions"
                note="always free"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Mission */}
      <section className="bb-on-ink bb-brand-mission">
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
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
                <h2 className="bb-display-2" style={{ maxWidth: "14ch" }}>
                  <span className="bb-brand-text">Build Biz.</span>{" "}<span className="bb-brand-yellow">Bring Buzz.</span>
                </h2>
              </div>
            </div>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div>
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
                  Let&apos;s turn <span className="bb-brand-text">imagination</span> into <span className="bb-brand-yellow">innovation</span>.
                </p>
                <div style={{ paddingTop: "var(--space-3)" }}>
                  <ArrowCTA href="/about">Read our story</ArrowCTA>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Seasons rail */}
      <section style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y-tight) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)" }}>
          <div>
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
                <h2 className="bb-display-2" style={{ maxWidth: "16ch" }}>
                  From our first camp to next summer
                </h2>
                <Eyebrow>2024 to 2027</Eyebrow>
              </div>
              <p className="bb-body" style={{ maxWidth: "38ch", color: "var(--text-muted)" }}>
                Explore each season, from our first camp to what comes next.
              </p>
            </div>
          </div>
        </div>

        <ScrollRail gap="var(--space-9)" padInline="var(--gutter)" align="stretch">
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
                paddingBlock: "var(--space-7) var(--space-10)",
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
                <ul className="bb-facts bb-photo-facts">
                  {s.chips.map((fact) => <li key={fact}>{fact}</li>)}
                </ul>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", flex: "0 0 auto" }}>
                <p className="bb-meta">{s.year}</p>
                <h3 className="bb-display-3">{s.title}</h3>
                <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                  {s.blurb}
                </p>
                <ArrowCTA href={s.year === "2027" ? "/camps#2027" : `/seasons#${s.year}`}>
                  {s.year === "2027" ? "Explore 2027 camp" : `View ${s.year} season`}
                </ArrowCTA>
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
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", alignItems: "center" }}>
              <h2 className="bb-display-3" style={{ maxWidth: "26ch" }}>
                {IMPACT.schools} schools across Naperville and greater Chicagoland
              </h2>
            </div>
          </div>
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

      <section className="bb-home-press bb-container" aria-labelledby="press-heading">
        <div className="bb-program-heading">
          <h2 id="press-heading" className="bb-display-2">BizBuzz in the news</h2>
          <ArrowCTA href="/about#press">All coverage</ArrowCTA>
        </div>
        <div className="bb-news-layout">
          <article className="bb-news-feature">
            <a href={PRESS[0].href} target="_blank" rel="noopener noreferrer">
              <div className="bb-news-photo">
                <Image src={PRESS[0].image} alt="BizBuzz founders on the NCTV17 Spotlight set" fill sizes="(max-width: 800px) 100vw, 55vw" />
              </div>
              <p className="bb-caption">{PRESS[0].meta}</p>
              <h3 className="bb-display-3">{PRESS[0].headline}</h3>
            </a>
            <blockquote>
              <p className="bb-body">“What started as a small idea has now grown into one of the largest youth entrepreneurship programs in Chicagoland.”</p>
              <footer className="bb-caption">NCTV17 Spotlight · Naperville Community Television, 2025</footer>
            </blockquote>
          </article>
          <div className="bb-news-stories">
            {PRESS.slice(1).map((story) => (
              <a key={story.href} href={story.href} target="_blank" rel="noopener noreferrer" className="bb-news-story">
                <div className="bb-news-thumb"><Image src={story.image} alt={story.outlet} fill sizes="120px" /></div>
                <div>
                  <p className="bb-caption">{story.meta}</p>
                  <h3 className="bb-display-3">{story.headline}</h3>
                  <span className="bb-news-action">Read story</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- Sponsor CTA */}
      <section
        className="bb-on-blue"
        style={{ paddingBlock: "var(--section-y)" }}
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
                Help keep BizBuzz free
              </h2>
              <Eyebrow>Sponsors</Eyebrow>
              <p className="bb-lead" style={{ maxWidth: "52ch" }}>
                Every program stays free because Naperville businesses and families pay for it. Our community has funded
                every season since 2024.
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
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </>
  );
}
