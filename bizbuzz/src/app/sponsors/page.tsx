import PageSections from "@/components/site/PageSections";
import { IMPACT, FUNDING_SUMMARY, SUPPORTERS } from "@/data/impact";
import SponsorDirectory from "@/components/sponsors/SponsorDirectory";
import { ArrowCTA, Button } from "@/components/ds/Button";
import { Card, Eyebrow, Stat } from "@/components/ds/Card";
import { CountUp } from "@/components/ds/motion";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";

const TIER_CARDS = [
  {
    label: "Bronze",
    range: "Under $250",
    tone: "card" as const,
    cta: "Sponsor materials",
    href: `mailto:${CONTACT_EMAIL}?subject=Bronze%20sponsorship`,
    perks: [
      "Distribution of your promotional materials at our events.",
      "A feature on the BizBuzz website.",
    ],
  },
  {
    label: "Silver",
    range: "$250 – $999",
    tone: "card" as const,
    cta: "Sponsor a workshop",
    href: `mailto:${CONTACT_EMAIL}?subject=Silver%20sponsorship`,
    perks: [
      "Everything in Bronze.",
      "A speaking opportunity at Fish Tank.",
      "An invitation to our picnic.",
    ],
  },
  {
    label: "Gold",
    range: "$1,000 and above",
    tone: "accent" as const,
    cta: "Sponsor a camp session",
    href: `mailto:${CONTACT_EMAIL}?subject=Gold%20sponsorship`,
    perks: [
      "Everything in Silver.",
      "A booth at the Fish Tank competition.",
      "Recognition on the following year's BizBuzz shirt.",
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

      <main id="main-content" tabIndex={-1}>
      {/* ------------------------------------------------------------ Hero */}
      <section id="support" style={{ paddingBlock: "clamp(56px, 7vw, 96px) 0" }}>
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
              <h1 className="bb-display-1" style={{ maxWidth: "17ch" }}>
                Help keep every program free
              </h1>
              <Eyebrow>Sponsors</Eyebrow>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                Local businesses, families and foundations have funded three seasons of camps,
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
          </div>
        </div>
      </section>
      <PageSections links={[{ href: "#support", label: "Community support" }, { href: "#sponsors", label: "Sponsor directory" }, { href: "#tiers", label: "Sponsorship options" }]} />

      {/* ----------------------------------------------------------- Proof */}
      <section style={{ paddingBlock: "var(--section-y-tight) var(--section-y)" }}>
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
            <Stat value={<CountUp to={IMPACT.partners} />} label="community partners and supporters" />
          </div>
          <div>
            <Stat
              value={<CountUp to={100} prefix="$" />}
              label="covers materials for one session"
              note="the bronze tier"
            />
          </div>
          <div>
            <Stat
              value={<CountUp to={1000} prefix="$" />}
              label="funds a whole camp session"
              note="venue, materials, prizes"
            />
          </div>
          <div>
            <Stat
              value={<CountUp to={IMPACT.students} suffix="+" />}
              label="students funded so far"
              note="camps, competitions and workshops"
            />
          </div>
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
      <section id="sponsors" style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y)" }}>
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
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
              <h2 className="bb-display-2" style={{ maxWidth: "16ch" }}>
                Meet our sponsors
              </h2>
            </div>
          </div>

          <SponsorDirectory />
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
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-7)",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h2 className="bb-display-2" style={{ maxWidth: "20ch" }}>
                What your money actually buys
              </h2>
              <p className="bb-lead" style={{ maxWidth: "50ch", color: "var(--text-muted)" }}>
                Every dollar goes to venues, materials and prizes. Nobody here takes a salary.
              </p>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                gap: "var(--grid-gap)",
                alignItems: "stretch",
              }}
            >
              {TIER_CARDS.map((c) => (
                <Card key={c.label} pad="var(--space-10)" tone={c.tone}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)", height: "100%" }}>
                    <div>
                      <span className="bb-meta">{c.label}</span>
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
          </div>
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
            <div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "flex-start" }}
              >
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
            </div>
          </div>
          <div style={{ gridColumn: "8 / span 5" }}>
            <div>
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
            </div>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </>
  );
}
