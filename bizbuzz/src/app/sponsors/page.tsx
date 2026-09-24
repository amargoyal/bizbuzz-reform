import type { Metadata } from "next";
import Image from "next/image";
import { Button, GoLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { FUNDING_SUMMARY, IMPACT, SUPPORTERS } from "@/data/impact";
import sponsors from "@/data/sponsors.json";
import { initials, money } from "@/lib/format";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";
import "./sponsors.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Our Sponsors",
  description:
    "The businesses and individuals funding free youth entrepreneurship programs at BizBuzz NFP. See every sponsor since 2024 and learn how to join them.",
  path: "/sponsors",
});

type Sponsor = (typeof sponsors)[number] & { date?: string };
type TierKey = "gold" | "silver" | "bronze";

const TIERS: { key: TierKey; label: string; range: string; min: number; perks: string[] }[] = [
  {
    key: "bronze",
    label: "Bronze",
    range: "Under $250",
    min: 0,
    perks: ["Distribution of your promotional materials at our events", "A feature on the BizBuzz website"],
  },
  {
    key: "silver",
    label: "Silver",
    range: "$250 to $999",
    min: 250,
    perks: ["Everything in Bronze", "A speaking opportunity at Fish Tank", "An invitation to our picnic"],
  },
  {
    key: "gold",
    label: "Gold",
    range: "$1,000 and above",
    min: 1000,
    perks: [
      "Everything in Silver",
      "A booth at the Fish Tank competition",
      "T-shirt recognition on the following year's BizBuzz shirt",
    ],
  },
];

/** Logos that show a brand other than the sponsor's own name. */
const LOGO_ALT: Record<string, string> = {
  "/sponsors/hirenpatel.png": "Dunkin' logo",
};

function tierOf(amount: number): TierKey {
  if (amount >= 1000) return "gold";
  if (amount >= 250) return "silver";
  return "bronze";
}

const byTier = (key: TierKey) =>
  (sponsors as Sponsor[])
    .filter((s) => tierOf(s.amount) === key)
    .sort((a, b) => b.amount - a.amount || b.year.localeCompare(a.year));

const tierEmail = (label: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Sponsorship Inquiry (${label})`)}`;

function SponsorItem({ s }: { s: Sponsor }) {
  return (
    <li className="sponsor">
      <div className="sponsor__logo">
        {s.logo ? (
          <Image src={s.logo} alt={LOGO_ALT[s.logo] ?? `${s.name} logo`} fill sizes="80px" />
        ) : (
          <span aria-hidden="true">{initials(s.name)}</span>
        )}
      </div>
      <div className="sponsor__body">
        <h4>{s.name}</h4>
        <p className="sponsor__meta">
          <span className="num sponsor__amount">{money(s.amount)}</span>
          <span>{s.date ?? s.year}</span>
        </p>
        <p className="sponsor__desc">{s.description}</p>
      </div>
    </li>
  );
}

export default function SponsorsPage() {
  const total = FUNDING_SUMMARY[0];
  const rest = FUNDING_SUMMARY.slice(1);
  const descending = [...TIERS].reverse();

  return (
    <>
      <PageHero
        title="Keep every program free"
        lead={
          <p>
            Your support pays for camp materials, competitions, and student programs. Together, our sponsors
            make it possible for every family to take part for free.
          </p>
        }
        actions={
          <>
            <Button href={LINKS.sponsorEmail} icon="mail">
              Become a sponsor
            </Button>
            <GoLink href="#perks">Sponsorship options</GoLink>
          </>
        }
        media={
          <dl className="raised" aria-label="Community support since 2024">
            <div className="raised__total">
              <dt>
                {total.label}
                <span className="muted"> from {IMPACT.partners} organizations since 2024</span>
              </dt>
              <dd className="num">{total.value}</dd>
            </div>
            {rest.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd className="num">{f.value}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* --------------------------------------------------------------- Perks */}
      <section className="section" id="perks" aria-labelledby="perks-title">
        <span id="tiers" className="anchor" aria-hidden="true" />
        <div className="container">
          <div className="sh">
            <h2 id="perks-title">Sponsorship tiers</h2>
            <p>Support the programs that help students build and pitch their first business. We recognize each contribution through the benefits below.</p>
          </div>
          <ol className="tiers">
            {TIERS.map((t) => {
              const count = byTier(t.key).length;
              return (
                <li key={t.key} className="tier">
                  <h3>{t.label}</h3>
                  <p className="tier__range num">{t.range}</p>
                  <ul className="tier__perks">
                    {t.perks.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <p className="tier__count">
                    <a href={`#${t.key}`}>
                      {count} {t.label} {count === 1 ? "contribution" : "contributions"} so far
                    </a>
                  </p>
                  <Button href={tierEmail(t.label)} variant={t.key === "gold" ? "primary" : "outline"} icon="mail" block>
                    Become a {t.label} sponsor
                  </Button>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------ Sponsors */}
      <section className="section section--paper" id="sponsors" aria-labelledby="sponsors-title">
        <div className="container">
          <div className="sh">
            <h2 id="sponsors-title">Every sponsor since 2024</h2>
            <p>
              {sponsors.length} contributions from local businesses, national companies, nonprofits, and individuals, listed
              by tier and then by amount.
            </p>
          </div>
          {descending.map((t) => {
            const list = byTier(t.key);
            if (!list.length) return null;
            return (
              <section key={t.key} id={t.key} className={`tier-list tier-list--${t.key}`} aria-labelledby={`${t.key}-title`}>
                <header className="tier-list__head">
                  <h3 id={`${t.key}-title`}>{t.label}</h3>
                  <p>
                    {t.range} · {list.length} {list.length === 1 ? "contribution" : "contributions"}
                  </p>
                </header>
                <ul className="sponsor-list">
                  {list.map((s) => (
                    <SponsorItem key={`${s.name}-${s.year}`} s={s} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>

      {/* ---------------------------------------------------------- Supporters */}
      <section className="section" id="supporters" aria-labelledby="supporters-title">
        <div className="container">
          <div className="sh">
            <h2 id="supporters-title">{SUPPORTERS.length} partners and supporters</h2>
            <p>
              Financial contributions and in-kind resources from these organizations and people empower BizBuzz to stay
              student-led and cost-free.
            </p>
          </div>
          <ul className="supporters">
            {[...SUPPORTERS].sort((a, b) => a.localeCompare(b)).map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------------------- CTA */}
      <section className="section section--navy" aria-labelledby="join-title">
        <div className="container cta-band">
          <h2 id="join-title">Join them.</h2>
          <div>
            <p className="lead">
              Your sponsorship directly funds entrepreneurship education for elementary and middle school students across
              Chicagoland. Reach out to learn about partnership opportunities.
            </p>
            <div className="actions">
              <Button href={LINKS.sponsorEmail} icon="mail">
                Become a sponsor
              </Button>
              <GoLink href="/about#impact">See our impact</GoLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
