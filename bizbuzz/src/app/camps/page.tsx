import Image from "next/image";
import { ArrowCTA, Button } from "@/components/ds/Button";
import { Eyebrow } from "@/components/ds/Card";
import { MediaCard } from "@/components/ds/MediaCard";
import { Parallax, Reveal } from "@/components/ds/motion";
import CampSeasons, { type CampSeason } from "@/components/camps/CampSeasons";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";

const SEASONS: CampSeason[] = [
  {
    year: "2027",
    tag: "Registration open",
    headline: "Next summer, and you can book a seat today",
    summary:
      "The 2027 camp keeps the two-track structure: KidPreneur for the youngest founders and VentureLab for students ready to build something real. Dates, venues and the guest speaker lineup are announced through the spring.",
    curriculumNote:
      "The 2027 schedule follows the six-session arc below. Sessions are confirmed as venues are booked.",
    stats: [
      { value: "Free", label: "cost to families" },
      { value: "3–8", label: "grades welcome" },
      { value: "2", label: "tracks running" },
    ],
    tracks: [
      {
        grades: "Grades 3–6",
        title: "KidPreneur",
        blurb:
          "First-time founders. Networking games, a Bug-Me List, BizBucks, and a friendly mock pitch to finish.",
      },
      {
        grades: "Grades 6–9",
        title: "VentureLab",
        blurb:
          "Students who want the harder version. Market research, prototyping, project management and Demo Day practice.",
      },
    ],
    sessions: [
      {
        n: "01",
        title: "Ideation",
        date: "Week 1",
        venue: "Naperville, IL",
        blurb:
          "Meet your instructors, find problems worth solving with a Bug-Me List, and turn everyday annoyances into business ideas.",
      },
      {
        n: "02",
        title: "Finance",
        date: "Week 2",
        venue: "Nichols Library",
        blurb:
          "Cost, price and profit through a Startup Auction, Business Disaster scenarios and the $100 Challenge.",
      },
      {
        n: "03",
        title: "Marketing and prototyping",
        date: "Week 3",
        venue: "Naperville, IL",
        blurb: "Build a brand, then build a rough first version of the thing and put it in front of someone.",
      },
      {
        n: "04",
        title: "Business models",
        date: "Week 4",
        venue: "Naperville, IL",
        blurb: "Target audience, pricing, operations. How the idea makes money.",
      },
      {
        n: "05",
        title: "Speaking skills",
        date: "Week 5",
        venue: "95th Street Library",
        blurb: "Structure a pitch, steady your voice, and tell the story so an adult in the back row gets it.",
      },
      {
        n: "06",
        title: "Mock pitch",
        date: "Week 6",
        venue: "Naperville, IL",
        blurb: "A full run-through in Fish Tank conditions, with feedback from instructors and peers.",
      },
    ],
  },
  {
    year: "2026",
    tag: "Season complete",
    headline: "The year camp split into two tracks",
    summary:
      "2026 ran KidPreneur and VentureLab side by side, six sessions each. Same six weeks, two levels, two separate Fish Tank divisions at the end. Isha Elandassery led the finance workshop and Mayor Scott Wehrli returned for speaking skills.",
    curriculumNote:
      "KidPreneur sessions shown. VentureLab followed the same weeks with feasibility, prototyping and Demo Day practice.",
    stats: [
      { value: "2", label: "tracks" },
      { value: "6", label: "sessions per track" },
      { value: "2", label: "Fish Tank divisions" },
    ],
    tracks: [
      {
        grades: "Grades 3–6",
        title: "KidPreneur",
        blurb:
          "Networking Bingo, the Bug-Me List, BizBucks as a spending lesson, and a Fish Tank-style mock pitch in week six.",
      },
      {
        grades: "Grades 6–9",
        title: "VentureLab",
        blurb:
          "A Startup Ideation Lab, feasibility and market research, prototyping, project management, and Demo Day practice.",
      },
    ],
    sessions: [
      {
        n: "01",
        title: "Ideation",
        date: "June 5, 2026",
        venue: "Naperville, IL",
        blurb:
          "Kidpreneurs met their high school instructors over Networking Bingo, then built a Bug-Me List and turned everyday problems into business ideas. BizBucks started here.",
      },
      {
        n: "02",
        title: "Finance",
        date: "June 12, 2026",
        venue: "Nichols Library",
        blurb:
          "A Price is Right icebreaker taught cost, price and profit. Then a Startup Auction, Shark Tank deal decisions, Business Disaster scenarios and the $100 Challenge.",
      },
      {
        n: "03",
        title: "Marketing and prototyping",
        date: "June 19, 2026",
        venue: "Naperville, IL",
        blurb:
          "How businesses attract customers and build a brand. Students created their own brand identity and designed the first simple prototypes of their ideas.",
      },
      {
        n: "04",
        title: "Problem solving and business models",
        date: "June 26, 2026",
        venue: "Naperville, IL",
        blurb:
          "Breaking an idea into target audience, pricing and operations, and seeing how a business generates revenue.",
      },
      {
        n: "05",
        title: "Presentational and speaking skills",
        date: "July 3, 2026",
        venue: "Naperville, IL",
        blurb:
          "Structuring a compelling pitch, then practising tone, body language and storytelling until it lands.",
      },
      {
        n: "06",
        title: "Mock pitch",
        date: "July 10, 2026",
        venue: "Naperville, IL",
        blurb:
          "Everything together in a Fish Tank-style setting, with feedback from instructors and peers before the real competition.",
      },
    ],
  },
  {
    year: "2025",
    tag: "Season complete",
    headline: "Seven weeks, 120 students, a Shark Tank alum",
    summary:
      "2025 expanded the camp to seven sessions and 120 students, with five guest speakers including Shark Tank alum Lindsey Fleischhauer and Mayor Scott Wehrli. Tracks covered social impact, product design and pitch development, finishing at Benedictine University.",
    curriculumNote: "Seven sessions across the summer, finishing with Fish Tank at Benedictine University.",
    stats: [
      { value: "120", label: "students" },
      { value: "7", label: "sessions" },
      { value: "5", label: "guest speakers" },
    ],
    tracks: [],
    sessions: [
      {
        n: "01",
        title: "Ideation",
        date: "Summer 2025",
        venue: "Naperville, IL",
        blurb: "Finding real problems and turning them into ideas worth building.",
      },
      {
        n: "02",
        title: "Finance",
        date: "Summer 2025",
        venue: "Naperville, IL",
        blurb: "Cost, price, profit, and what to do when the numbers do not work.",
      },
      {
        n: "03",
        title: "Marketing",
        date: "Summer 2025",
        venue: "Naperville, IL",
        blurb: "Brand, audience and message, with Kandice Henning as guest speaker.",
      },
      {
        n: "04",
        title: "Pitch development",
        date: "Summer 2025",
        venue: "Naperville, IL",
        blurb: "Shark Tank alum Lindsey Fleischhauer on what a good pitch sounds like.",
      },
      {
        n: "05",
        title: "Product design",
        date: "Summer 2025",
        venue: "Naperville, IL",
        blurb: "Prototyping and iterating on the thing itself.",
      },
      {
        n: "06",
        title: "Speaking skills",
        date: "Summer 2025",
        venue: "Naperville, IL",
        blurb: "Mayor Scott Wehrli on speaking to a room that is not obliged to listen.",
      },
      {
        n: "07",
        title: "Mock pitch",
        date: "Summer 2025",
        venue: "Naperville, IL",
        blurb: "Full dress rehearsal for the Benedictine University stage.",
      },
    ],
  },
  {
    year: "2024",
    tag: "Where it started",
    headline: "The first camp, six weeks after we founded",
    summary:
      "Our first summer. Six sessions, seven guest speakers, 110 students. They learned ideation, marketing, finance and pitching. High school students ran all of it, free, ending in the inaugural Fish Tank at College of DuPage.",
    curriculumNote: "Six sessions, seven guest speakers, and hands-on business challenges throughout.",
    stats: [
      { value: "110", label: "students" },
      { value: "6", label: "sessions" },
      { value: "7", label: "guest speakers" },
    ],
    tracks: [],
    sessions: [
      {
        n: "01",
        title: "Ideation",
        date: "Summer 2024",
        venue: "Naperville, IL",
        blurb:
          "The first BizBuzz session ever run. Finding problems, and finding the nerve to say an idea out loud.",
      },
      {
        n: "02",
        title: "Marketing",
        date: "Summer 2024",
        venue: "Naperville, IL",
        blurb: "Who is this for, and how would they ever hear about it.",
      },
      {
        n: "03",
        title: "Finance",
        date: "Summer 2024",
        venue: "Naperville, IL",
        blurb: "Pricing, costs and profit, taught with games rather than spreadsheets.",
      },
      {
        n: "04",
        title: "Business challenges",
        date: "Summer 2024",
        venue: "Naperville, IL",
        blurb: "Hands-on challenges with guest speakers working alongside the teams.",
      },
      {
        n: "05",
        title: "Pitching",
        date: "Summer 2024",
        venue: "Naperville, IL",
        blurb: "Building the pitch, then saying it again until it is short.",
      },
      {
        n: "06",
        title: "Mock pitch",
        date: "Summer 2024",
        venue: "Naperville, IL",
        blurb: "The rehearsal for the inaugural Fish Tank at College of DuPage.",
      },
    ],
  },
];

const SPEAKERS = [
  {
    name: "Lindsey Fleischhauer",
    role: "Shark Tank alum",
    session: "2025 · Pitch development",
    image: "/camp_imgs/speakers/lindseyfleischhauer.jpg",
  },
  {
    name: "Scott Wehrli",
    role: "Mayor of Naperville",
    session: "2026 · Speaking skills",
    image: "/camp_imgs/speakers/scott_wehrli.png",
  },
  {
    name: "Isha Elandassery",
    role: "Guest speaker",
    session: "2026 · Finance",
    image: "/camp_imgs/speakers/isha_elandassery.jpg",
  },
  {
    name: "Kandice Henning",
    role: "Guest speaker",
    session: "2025 · Marketing",
    image: "/camp_imgs/speakers/kandice_henning.png",
  },
];

const GALLERY = [
  { src: "/camp_imgs/2026/session1kp/session1kpa.JPG", alt: "Networking Bingo at the first session", depth: 0.3, offset: "0px" },
  {
    src: "/camp_imgs/2026/session2kp/session2kpb.jpg",
    alt: "Finance workshop at Nichols Library",
    depth: 0.8,
    offset: "clamp(16px, 3vw, 44px)",
  },
  {
    src: "/camp_imgs/2026/session4vl/session4vla.jpg",
    alt: "VentureLab project management session",
    depth: 0.15,
    offset: "0px",
  },
  {
    src: "/camp_imgs/2025/session6/session6a.jpg",
    alt: "Mock pitch session",
    depth: 0.65,
    offset: "clamp(24px, 4vw, 60px)",
  },
];

export default function CampsPage() {
  return (
    <>
      <SiteHeader />

      {/* ------------------------------------------------------------ Hero */}
      <section style={{ paddingBlock: "clamp(56px, 7vw, 96px) 0" }}>
        <div
          className="bb-row-12"
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gap: "var(--grid-gap)",
            alignItems: "center",
          }}
        >
          <div style={{ gridColumn: "span 6" }}>
            <Reveal>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "flex-start" }}
              >
                <Eyebrow dot>Summer camp</Eyebrow>
                <h1 className="bb-display-1" style={{ maxWidth: "13ch" }}>
                  Six weeks. One business. Yours.
                </h1>
                <p className="bb-lead" style={{ maxWidth: "44ch", color: "var(--text-muted)" }}>
                  A free multi-week entrepreneurship camp for grades 3–8. You arrive with a hunch and leave with a
                  business you have pitched on a real stage.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-7)", alignItems: "center" }}>
                  <Button href={LINKS.campRegistration} size="lg" target="_blank" rel="noopener noreferrer">
                    Register for 2027
                  </Button>
                  <ArrowCTA href="/fish-tank">Then comes Fish Tank</ArrowCTA>
                </div>
              </div>
            </Reveal>
          </div>
          <div style={{ gridColumn: "8 / span 5" }}>
            <Parallax depth={0.5}>
              <MediaCard
                src="/camp_imgs/landing/center.jpg"
                alt="Students collaborating at a BizBuzz camp session"
                ratio="4 / 5"
                float
                scrim
                priority
                chips={["Free", "Grades 3–8", "Naperville, IL"]}
              />
            </Parallax>
          </div>
        </div>
      </section>

      <CampSeasons seasons={SEASONS} initialYear="2026" />

      {/* -------------------------------------------------------- Speakers */}
      <section style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y)" }}>
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
                flexDirection: "column",
                gap: "var(--space-7)",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Eyebrow dot>Guest speakers</Eyebrow>
              <h3 className="bb-display-2" style={{ maxWidth: "22ch" }}>
                People who have actually done it
              </h3>
              <p className="bb-lead" style={{ maxWidth: "50ch", color: "var(--text-muted)" }}>
                Founders, a Shark Tank alum, and the Mayor of Naperville have all sat in front of our students.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "var(--grid-gap)",
            }}
          >
            {SPEAKERS.map((k, i) => (
              <Reveal key={k.name} delay={i * 80}>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      aspectRatio: "1 / 1",
                      background: "var(--cream-300)",
                    }}
                  >
                    <Image
                      src={k.image}
                      alt={k.name}
                      fill
                      sizes="(max-width: 900px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                    <p className="bb-display-4">{k.name}</p>
                    <p className="bb-caption">{k.role}</p>
                    <p className="bb-mono">{k.session}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Gallery */}
      <section style={{ paddingBlock: "var(--section-y)" }}>
        <div
          style={{ maxWidth: "var(--container)", margin: "0 auto var(--space-11)", paddingInline: "var(--gutter)" }}
        >
          <Reveal>
            <h3 className="bb-display-2" style={{ maxWidth: "18ch" }}>
              What a session looks like
            </h3>
          </Reveal>
        </div>
        <div
          className="bb-mosaic-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(8px, 1vw, 16px)",
            paddingInline: "clamp(8px, 1vw, 16px)",
          }}
        >
          {GALLERY.map((g) => (
            <Parallax key={g.src} depth={g.depth}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  aspectRatio: "3 / 4",
                  marginTop: g.offset,
                }}
              >
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 720px) 50vw, 25vw" style={{ objectFit: "cover" }} />
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
              <Eyebrow dot>Summer 2027</Eyebrow>
              <h2 className="bb-display-2" style={{ maxWidth: "20ch" }}>
                Seats are limited and it is free
              </h2>
              <p className="bb-lead" style={{ maxWidth: "48ch" }}>
                Registration for the 2027 camp is open now. Grades 3–8, Naperville, no business experience needed.
              </p>
              <Button href={LINKS.campRegistration} size="lg" target="_blank" rel="noopener noreferrer">
                Guarantee your 2027 spot
              </Button>
              <p className="bb-caption">Questions? {CONTACT_EMAIL}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
