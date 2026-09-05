import { IMPACT, FUNDING_SUMMARY, SUPPORTERS } from "@/data/impact";
import Image from "next/image";
import { ArrowCTA, Button } from "@/components/ds/Button";
import { Card, Chip, Eyebrow, Stat } from "@/components/ds/Card";
import { CountUp, Reveal } from "@/components/ds/motion";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";

const GOLD = [
  { name: "Hiren Patel", logo: "/sponsors/hirenpatel.png", meta: "$2,000 · 2026" },
  { name: "Right Choice Dental Care", logo: "/sponsors/rightchoicedentalcare.png", meta: "$1,500 · 2025" },
  {
    name: "Teen Philanthropy Initiative",
    logo: "/sponsors/teenphilanthropyinstitute.png",
    meta: "$1,000 · 2025 and 2026",
  },
  { name: "Kabat American", logo: "/sponsors/kabatamerican.jpg", meta: "$1,000 · 2024 and 2025" },
  { name: "Costco", logo: "/sponsors/costco.png", meta: "$1,000 · 2024" },
  { name: "Midwest Badminton", logo: "/sponsors/midwestbadminton.png", meta: "$1,000 · 2024" },
  { name: "AT&T", logo: "/sponsors/att.png", meta: "$1,000 · 2025" },
];

const SILVER = [
  { name: "Conference Planning Resources", logo: "/sponsors/conferenceplanningresources.jpg", meta: "$250 · 2024" },
];

const BRONZE = [
  { name: "Nara Rosie", logo: "/sponsors/nararosie.png", meta: "$200 · 2026" },
  { name: "SteamDream Team", logo: "/sponsors/steamdreamteam.png", meta: "$150 · 2024" },
  { name: "Elite Tutoring Place", logo: "/sponsors/elitetutoringplace.jpg", meta: "$100 · 2024 and 2026" },
  { name: "Office Furniture Solutions", logo: "/sponsors/officefurnituresolutions.png", meta: "$100 · 2026" },
  { name: "Samantha Zylstra & Associates", logo: "/sponsors/samanthazylstra.jpeg", meta: "$100 · 2024" },
  { name: "Best Brains", logo: "/sponsors/bestbrains.png", meta: "$100 · 2024" },
  { name: "Center for Future Innovators", logo: "/sponsors/centerforfutureinnovators.jpg", meta: "$100 · 2024" },
  { name: "Naper Nuts & Sweets", logo: "/sponsors/napernutsandsweets.png", meta: "$100 · 2024" },
];

const TIERS = [
  { label: "Gold", range: "$1,000 and above", sponsors: GOLD },
  { label: "Silver", range: "$250 – $999", sponsors: SILVER },
  { label: "Bronze", range: "Up to $250", sponsors: BRONZE },
];

const TIER_CARDS = [
  {
    label: "Bronze",
    range: "Up to $250",
    tone: "card" as const,
    chipTone: "hairline" as const,
    cta: "Sponsor materials",
    href: `mailto:${CONTACT_EMAIL}?subject=Bronze%20sponsorship`,
    perks: [
      "Covers folders, prototyping supplies and snacks for a full session.",
      "Named on the sponsors page.",
      "Photos from the session you funded.",
    ],
  },
  {
    label: "Silver",
    range: "$250 – $999",
    tone: "card" as const,
    chipTone: "hairline" as const,
    cta: "Sponsor a workshop",
    href: `mailto:${CONTACT_EMAIL}?subject=Silver%20sponsorship`,
    perks: [
      "Funds a full workshop series at one school.",
      "Logo on the sponsors page and in session slide decks.",
      "Named in our post-session parent emails.",
      "Invitation to Fish Tank as a guest.",
    ],
  },
  {
    label: "Gold",
    range: "$1,000 and above",
    tone: "accent" as const,
    chipTone: "solid" as const,
    cta: "Sponsor a camp session",
    href: `mailto:${CONTACT_EMAIL}?subject=Gold%20sponsorship`,
    perks: [
      "Covers venue, materials and prizes for an entire camp session.",
      "Top billing on the sponsors page and at the event.",
      "Logo on Fish Tank stage signage and the programme.",
      "Invitation to judge or present an award at Fish Tank.",
      "A written impact summary at the end of the season.",
    ],
  },
];

const BREAKDOWN = [
  { what: "Folders, pencils and prototyping materials, one session", cost: "$100" },
  { what: "A full workshop series at one elementary school", cost: "$250" },
  { what: "Venue, materials and prizes for one camp session", cost: "$1,000" },
  { what: "Fish Tank prize pool, matching our first year", cost: "$750" },
];

export default function SponsorsPage() {
  return (
    <>
      <SiteHeader cta="Become a sponsor" ctaHref={LINKS.sponsorEmail} />

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
              <Eyebrow dot>Sponsors</Eyebrow>
              <h1 className="bb-display-1" style={{ maxWidth: "17ch" }}>
                Free is paid for by somebody
              </h1>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                Sixteen Naperville businesses, families and foundations have funded three seasons of camps,
                workshops and Fish Tank. No student has ever paid a cent.
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
                <Button href={LINKS.sponsorEmail} size="lg">
                  Sponsor a session
                </Button>
                <ArrowCTA href="#tiers">See the tiers</ArrowCTA>
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
            <Stat value={<CountUp to={IMPACT.partners} />} label="community partners and supporters" />
          </Reveal>
          <Reveal delay={80}>
            <Stat
              value={<CountUp to={100} prefix="$" />}
              label="covers materials for one session"
              note="the bronze tier"
            />
          </Reveal>
          <Reveal delay={160}>
            <Stat
              value={<CountUp to={1000} prefix="$" />}
              label="funds a whole camp session"
              note="venue, materials, prizes"
            />
          </Reveal>
          <Reveal delay={240}>
            <Stat
              value={<CountUp to={IMPACT.students} suffix="+" />}
              label="students funded so far"
              note="camps, competitions and workshops"
            />
          </Reveal>
        </div>
      </section>

      <section className="bb-content-section" style={{ paddingTop: 0 }}>
        <div className="bb-content-stack">
          <h2 className="bb-display-2">Community support</h2>
          <div className="bb-data-grid">
            {FUNDING_SUMMARY.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} note={"helper" in stat ? stat.helper : undefined} />
            ))}
          </div>
          <details className="bb-details">
            <summary>All 51 community partners and supporters</summary>
            <ul className="bb-directory">
              {SUPPORTERS.map((name) => <li key={name}>{name}</li>)}
            </ul>
          </details>
        </div>
      </section>

      {/* ---------------------------------------------------- Sponsor wall */}
      <section style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y)" }}>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
              <Eyebrow dot>Thank you</Eyebrow>
              <h2 className="bb-display-2" style={{ maxWidth: "16ch" }}>
                Who paid for this
              </h2>
            </div>
          </Reveal>

          {TIERS.map((t) => (
            <div key={t.label} style={{ display: "flex", flexDirection: "column", gap: "var(--space-9)" }}>
              <Reveal>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "var(--space-7)",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    borderBottom: "1px solid var(--border-hairline)",
                    paddingBottom: "var(--space-6)",
                  }}
                >
                  <h3 className="bb-display-3">{t.label}</h3>
                  <p className="bb-mono">{t.range}</p>
                </div>
              </Reveal>
              <Reveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "var(--grid-gap)",
                    alignItems: "stretch",
                  }}
                >
                  {t.sponsors.map((s) => (
                    <Card key={s.name} pad="var(--space-8)">
                      <div
                        style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", height: "100%" }}
                      >
                        <div style={{ height: 56, display: "flex", alignItems: "center" }}>
                          <Image
                            src={s.logo}
                            alt={s.name}
                            width={160}
                            height={56}
                            style={{ maxHeight: 56, maxWidth: 160, width: "auto", height: "auto", objectFit: "contain" }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "var(--space-3)",
                            marginTop: "auto",
                          }}
                        >
                          <p className="bb-display-4">{s.name}</p>
                          <p className="bb-mono">{s.meta}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- Tiers */}
      <section id="tiers" style={{ paddingBlock: "var(--section-y)" }}>
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
              <Eyebrow dot>Sponsorship tiers</Eyebrow>
              <h2 className="bb-display-2" style={{ maxWidth: "20ch" }}>
                What your money actually buys
              </h2>
              <p className="bb-lead" style={{ maxWidth: "50ch", color: "var(--text-muted)" }}>
                Every dollar goes to venues, materials and prizes. Nobody here takes a salary.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "var(--grid-gap)",
                alignItems: "stretch",
              }}
            >
              {TIER_CARDS.map((c) => (
                <Card key={c.label} pad="var(--space-10)" tone={c.tone}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)", height: "100%" }}>
                    <div>
                      <Chip tone={c.chipTone}>{c.label}</Chip>
                    </div>
                    <p className="bb-display-3">{c.range}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                      {c.perks.map((perk) => (
                        <p
                          key={perk}
                          className="bb-body-sm"
                          style={{
                            color: "var(--text-muted)",
                            borderTop: "1px solid var(--border-hairline)",
                            paddingTop: "var(--space-5)",
                          }}
                        >
                          {perk}
                        </p>
                      ))}
                    </div>
                    <div style={{ marginTop: "auto", paddingTop: "var(--space-7)" }}>
                      <ArrowCTA href={c.href}>{c.cta}</ArrowCTA>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------- Ask */}
      <section className="bb-on-ink" style={{ background: "var(--surface-inverse)", paddingBlock: "var(--section-y)" }}>
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
                <Eyebrow dot>The ask</Eyebrow>
                <h2 className="bb-display-2" style={{ maxWidth: "16ch" }}>
                  Fund one session. See exactly where it went.
                </h2>
                <p className="bb-lead">
                  Tell us what you can give and we will tell you which session it pays for, send photos from the
                  day, and put your name on it.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-7)", alignItems: "center" }}>
                  <Button href={LINKS.sponsorEmail} size="lg">
                    Email us about sponsoring
                  </Button>
                  <ArrowCTA tone="inverse" href="/about">
                    Read about BizBuzz
                  </ArrowCTA>
                </div>
              </div>
            </Reveal>
          </div>
          <div style={{ gridColumn: "8 / span 5" }}>
            <Reveal delay={140}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {BREAKDOWN.map((b) => (
                  <div
                    key={b.what}
                    style={{
                      display: "flex",
                      gap: "var(--space-7)",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      paddingBlock: "var(--space-7)",
                      borderTop: "1px solid var(--border-hairline)",
                    }}
                  >
                    <p className="bb-body">{b.what}</p>
                    <p className="bb-display-4" style={{ flex: "0 0 auto" }}>
                      {b.cost}
                    </p>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid var(--border-hairline)" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
