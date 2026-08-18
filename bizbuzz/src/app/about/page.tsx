import Image from "next/image";
import { ArrowCTA, Button } from "@/components/ds/Button";
import { Chip, Eyebrow } from "@/components/ds/Card";
import { Parallax, Reveal } from "@/components/ds/motion";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { LINKS } from "@/lib/site";

const LEADERSHIP = [
  { name: "Allen Xu", role: "Co-Founder", image: "/team/Allen.png" },
  { name: "Aarav Khullar", role: "Co-Founder", image: "/team/Aarav.png" },
  { name: "Taksh Taware", role: "President", image: "/team/Taksh.png" },
  { name: "Lakhi Thotakura", role: "Chief Operating Officer", image: "/team/Lakhi.jpeg" },
  { name: "Elena Kang Chou", role: "Chief Marketing Officer", image: "/team/Elena_clean.png" },
  { name: "Abby May", role: "Chief Financial Officer", image: "/team/Abby.jpeg" },
  { name: "Amar Goyal", role: "Chief Technology Officer", image: "/team/Amar_clean.png" },
  { name: "Elizabeth Gao", role: "Executive Director", image: "/team/Elizabeth.jpeg" },
];

const INSTRUCTORS = [
  "Onkar Lidder",
  "Abhinav Byju",
  "Anay Apte",
  "Ankita Senapati",
  "Ansh Shah",
  "Ben Gula",
  "Hadley Benson",
  "Wes Karubas",
  "Yuju Cho",
  "Zahra Moosani",
  "Rehaan John",
];

const YOUTH = ["Vivaan Khullar", "Evan Xu", "Mishi Patel", "Ethan Nie", "Jazzy Soodan"];

const PRESS = [
  {
    outlet: "NCTV17",
    meta: "NCTV17 Spotlight · 2025",
    headline: "BizBuzz Turns Imagination into Innovation",
    blurb:
      "BizBuzz joined Jane Wernette on NCTV17's Spotlight show to talk about the 2025 summer camp and the second annual Fish Tank at Benedictine University. More students, more mentors, and guest speakers including Shark Tank alum Lindsey Fleischhauer and Mayor Scott Wehrli.",
    href: "https://www.nctv17.org/spotlight/bizbuzz-turns-imagination-into-innovation/",
    image: "/news/nctv-spotlight-2025.jpg",
  },
  {
    outlet: "NCTV17",
    meta: "NCTV17 News · 2024",
    headline: "Naperville North Juniors Hold Youth Entrepreneurship Camp for Students",
    blurb:
      "At Camp Session 5 and again during Fish Tank, Jesus Cortez and the NCTV17 team joined us to interview students and capture the first summer's creativity and entrepreneurial spirit.",
    href: "https://www.nctv17.org/news/naperville-north-juniors-hold-youth-entrepreneurship-camp-for-students/",
    image: "/news/nctv-students-2024.jpg",
  },
  {
    outlet: "We Love Naperville",
    meta: "We Love Naperville · 2024",
    headline: "Inaugural BizBuzz Camp for Kid Entrepreneurs",
    blurb:
      "Shortly after the first-ever Fish Tank, We Love Naperville covered the success of our inaugural Chicagoland summer camp and the kidpreneurs who competed, including champion Garrett Hauk.",
    href: "https://welovenaperville.co/article/inaugural-bizbuzz-camp-for-kid-entrepreneurs",
    image: "/news/welovenaperville-2024.jpg",
  },
  {
    outlet: "Teen Philanthropy Initiative",
    meta: "KidsMatter TPI · 2025",
    headline: "2025 Teen Philanthropy Initiative grant winner",
    blurb:
      "Following an intensive review process and a one-hour interview, BizBuzz was awarded a $1,000 grant. It was the largest amount of funding given to any organization in Naperville in the 2024 to 2025 cycle.",
    href: "https://www.teenphilanthropyinitiative.org/",
    image: "/news/tpi-2025-b.jpg",
  },
  {
    outlet: "Daily Herald",
    meta: "Daily Herald · 2024",
    headline: "Daily Herald interview at Madison Junior High",
    blurb:
      "During the Madison Junior High mxINCedu mentorship program we were interviewed about the importance of youth entrepreneurship, especially in Naperville, where over 90% of K-8 students have no access to business education in school.",
    href: "https://www.dailyherald.com/",
    image: "/about/daily.jpg",
  },
];

export default function AboutPage() {
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
              <Eyebrow dot>About us</Eyebrow>
              <h1 className="bb-display-1" style={{ maxWidth: "18ch" }}>
                Two juniors, one gap, and a very full summer
              </h1>
              <p className="bb-lead" style={{ maxWidth: "54ch", color: "var(--text-muted)" }}>
                BizBuzz was founded in April 2024 by two Naperville North High School juniors. Everything we run is
                free, and it is run by students.
              </p>
            </div>
          </Reveal>
        </div>
        <div style={{ padding: "clamp(40px, 6vw, 80px) clamp(8px, 1vw, 16px) 0" }}>
          <Parallax depth={0.35}>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "21 / 9",
              }}
            >
              <Image
                src="/about/background.jpg"
                alt="The BizBuzz team and students together"
                fill
                sizes="100vw"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </Parallax>
        </div>
      </section>

      {/* ----------------------------------------------------------- Story */}
      <section style={{ paddingBlock: "var(--section-y)" }}>
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
              <div
                className="bb-sticky-none"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-7)",
                  position: "sticky",
                  top: 108,
                }}
              >
                <Eyebrow>Our mission</Eyebrow>
                <h2 className="bb-display-2" style={{ maxWidth: "13ch" }}>
                  90% of schools taught none of this
                </h2>
              </div>
            </Reveal>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <Reveal delay={120}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
                <p className="bb-lead">
                  In a city where 90% of K-8 schools offer no business education, we set out in April 2024 to change
                  that.
                </p>
                <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                  BizBuzz NFP is a 501(c)(3) nonprofit in Naperville, Illinois. Every student deserves access to
                  entrepreneurial education that helps them find their ideas, and the confidence to share them. We
                  offer a completely free platform designed by students, for students.
                </p>
                <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                  Two summers later that has meant 230 camp students, 560 more reached through workshops, three Fish
                  Tank competitions, and students from 26 schools across Naperville and greater Chicagoland.
                </p>
                <p className="bb-body" style={{ fontWeight: "var(--weight-semibold)", color: "var(--text-display)" }}>
                  Let&apos;s turn imagination into innovation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Leadership */}
      <section id="team" style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y)" }}>
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
              <Eyebrow dot>The team</Eyebrow>
              <h2 className="bb-display-2" style={{ maxWidth: "20ch" }}>
                Everyone here is still in school
              </h2>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                That is the point. Students who just learned this are the best people to teach it to students a few
                years behind them.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "var(--grid-gap)",
            }}
          >
            {LEADERSHIP.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      aspectRatio: "4 / 5",
                      background: "var(--cream-300)",
                    }}
                  >
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(max-width: 900px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                    <p className="bb-display-4">{m.name}</p>
                    <p className="bb-caption">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Instructors */}
      <section style={{ background: "var(--surface-sunken)", paddingBlock: "0 var(--section-y)" }}>
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
          <div style={{ gridColumn: "span 4" }}>
            <Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                <Eyebrow>Instructors</Eyebrow>
                <h3 className="bb-display-3" style={{ maxWidth: "16ch" }}>
                  The people in the room every week
                </h3>
              </div>
            </Reveal>
          </div>
          <div style={{ gridColumn: "6 / span 7" }}>
            <Reveal delay={120}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>
                {INSTRUCTORS.map((name) => (
                  <Chip key={name}>{name}</Chip>
                ))}
              </div>
            </Reveal>
            <div style={{ height: "var(--space-10)" }} />
            <Reveal delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                <p className="bb-eyebrow">Youth leadership team</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>
                  {YOUTH.map((name) => (
                    <Chip key={name}>{name}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Press */}
      <section id="press" style={{ paddingBlock: "var(--section-y)" }}>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
              <Eyebrow dot>Press</Eyebrow>
              <h2 className="bb-display-2" style={{ maxWidth: "18ch" }}>
                What has been written about us
              </h2>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                Coverage from NCTV17 has connected BizBuzz with parents looking for opportunities for their
                students, and sponsors looking to support youth entrepreneurship.
              </p>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {PRESS.map((n) => (
              <Reveal key={n.headline}>
                <div
                  className="bb-rowlist"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "200px minmax(0, 1fr) auto",
                    gap: "var(--space-9)",
                    alignItems: "start",
                    paddingBlock: "var(--space-9)",
                    borderTop: "1px solid var(--border-hairline)",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      aspectRatio: "4 / 3",
                      background: "var(--cream-200)",
                    }}
                  >
                    <Image src={n.image} alt={n.outlet} fill sizes="200px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                    <p className="bb-mono">{n.meta}</p>
                    <h3 className="bb-display-4" style={{ maxWidth: "30ch" }}>
                      {n.headline}
                    </h3>
                    <p className="bb-body-sm" style={{ color: "var(--text-muted)", maxWidth: "62ch" }}>
                      {n.blurb}
                    </p>
                  </div>
                  <ArrowCTA href={n.href} target="_blank" rel="noopener noreferrer">
                    Read it
                  </ArrowCTA>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--border-hairline)" }} />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Grant */}
      <section className="bb-on-ink" style={{ background: "var(--surface-inverse)", paddingBlock: "var(--section-y)" }}>
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
              <Eyebrow dot>2025 grant winner</Eyebrow>
              <p className="bb-stat">$1,000</p>
              <h2 className="bb-display-3" style={{ maxWidth: "26ch" }}>
                The largest amount of funding given to any organization in Naperville
              </h2>
              <p className="bb-body" style={{ maxWidth: "56ch", color: "var(--text-muted)" }}>
                The Teen Philanthropy Initiative, a program of Naperville nonprofit KidsMatter, trains high school
                students in fundraising, budgeting and grant-making. Each cohort awards $10,000 across youth-serving
                nonprofits in greater Chicago. After an intensive review and a one-hour interview, BizBuzz won the
                largest single award in the 2024 to 2025 cycle. They funded us again in 2026.
              </p>
            </div>
          </Reveal>
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
              <h2 className="bb-display-2" style={{ maxWidth: "20ch" }}>
                Want to help, or join?
              </h2>
              <p className="bb-lead" style={{ maxWidth: "48ch" }}>
                We take on new instructors and youth leaders every season, and we always need sponsors to keep the
                programs free.
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
                <Button href={LINKS.joinEmail} size="lg">
                  Get in touch
                </Button>
                <ArrowCTA href="/sponsors">Sponsorship tiers</ArrowCTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
