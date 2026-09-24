import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, GoLink } from "@/components/ui/Button";
import { Disclosure } from "@/components/ui/Disclosure";
import { Facts } from "@/components/ui/Facts";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Status } from "@/components/ui/Status";
import { PrizeChecks } from "@/components/fish-tank/PrizeChecks";
import { YearHashRedirect } from "@/components/site/YearHashRedirect";
import { FAQS } from "@/data/faqs";
import { FISH_TANK_HERO, FISH_TANK_YEARS } from "@/data/fishTank";
import { CURRENT, LINKS } from "@/lib/site";
import "./fish-tank.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Fish Tank",
  description:
    "Fish Tank is the BizBuzz pitch competition for 3rd to 9th grade students in the Chicagoland area. Students pitch a business to real judges and compete for prize money.",
  path: "/fish-tank",
});

const STEPS = [
  {
    title: "Register and form a team",
    body: "Compete on your own or with a small team, and register. Define your business concept, conduct market research, and develop both a marketing and financial plan.",
  },
  {
    title: "Prepare with a mentor",
    body: "Every Fish Tank participant attends at least 1 hour of office hours per week leading up to the competition. This is mandatory, so every team shows up ready.",
  },
  {
    title: "Preliminary round",
    body: "Present your business to a panel of high school business leaders, including DECA state officers and international finalists. Pitches run 5 minutes, followed by questions. The top 12 teams advance.",
  },
  {
    title: "Final round",
    body: "Pitch your polished idea to a panel of business owners, industry leaders, and government leaders. The top five teams win prize money to help launch their businesses.",
  },
  {
    title: "After Fish Tank",
    body: "Every participant keeps access to BizBuzz camp resources, detailed feedback from the judges, and contact information for our high school judging panel. Support does not stop after the pitch.",
  },
];

const FT_FAQ_IDS = ["what-is-fish-tank", "fish-tank-without-camp", "divisions", "fish-tank-sign-up", "free"];

export default function FishTankPage() {
  const faqs = FT_FAQ_IDS.map((id) => FAQS.find((f) => f.id === id)!).filter(Boolean);
  const y2025 = FISH_TANK_YEARS.find((y) => y.year === 2025)!;
  const y2024 = FISH_TANK_YEARS.find((y) => y.year === 2024)!;

  return (
    <>
      <YearHashRedirect base="/fish-tank" years={FISH_TANK_YEARS.map((y) => y.year)} />
      <PageHero
        status={<Status tone="soon">Fish Tank {CURRENT.fishTankYear}: dates to be announced</Status>}
        title="Fish Tank"
        lead={
          <>
            <p>
              A pitch competition for students in grades 3–9 across Chicagoland, inspired by Shark Tank.
              Bring your business idea, present it to the judges, and answer their questions.
            </p>
            <p className="muted">It is free to enter, and you do not have to attend camp to compete.</p>
          </>
        }
        actions={
          <>
            <Button href={LINKS.fishTankEmail} icon="mail">
              Get Fish Tank {CURRENT.fishTankYear} updates
            </Button>
            <GoLink href="#how-it-works">How it works</GoLink>
          </>
        }
        media={
          <Photo
            src="/fish_tank/2025/images/gallery-pitching.jpg"
            alt="A student demonstrating a block-tower product during a Fish Tank pitch"
            caption="A live demo during a Fish Tank 2025 pitch."
            ratio="4 / 3"
            sizes="(max-width: 900px) 100vw, 40vw"
            priority
          />
        }
        facts={
          <Facts
            items={[
              { label: "Who", value: "Grades 3 to 9" },
              { label: "Teams", value: "Solo or a small team" },
              { label: "Pitch", value: "5 minutes plus questions" },
              { label: "Prizes", value: "$750 for the top five" },
              { label: "Cost", value: "Free" },
            ]}
          />
        }
      />

      {/* ----------------------------------------------------------- How it works */}
      <section className="section" id="how-it-works" aria-labelledby="how-title">
        <div className="container">
          <div className="sh">
            <h2 id="how-title">How it works</h2>
            <p>
              Fish Tank runs in two rounds after camp. This is how the 2024 and 2025 competitions worked. The{" "}
              {CURRENT.fishTankYear} details will be posted here when they are set.
            </p>
          </div>
          <ol className="steps">
            {STEPS.map((s, n) => (
              <li key={s.title} className="step">
                <p className="step__n num" aria-hidden="true">
                  {n + 1}
                </p>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* -------------------------------------------------------------- Divisions */}
      <section className="section section--paper" id="divisions" aria-labelledby="divisions-title">
        <div className="container">
          <div className="sh">
            <h2 id="divisions-title">Two divisions</h2>
            <p>Since 2026, every student competes against peers at their own level.</p>
          </div>
          <ul className="divisions">
            <li>
              <h3>KidPreneur division</h3>
              <p className="divisions__for">KidPreneur students, or grades 3 to 6</p>
              <p>
                Built for our youngest entrepreneurs. Students pitch their business ideas in a supportive, beginner-friendly
                environment designed to build confidence and creativity.
              </p>
            </li>
            <li>
              <h3>VentureLab division</h3>
              <p className="divisions__for">VentureLab students, or grades 6 to 9</p>
              <p>
                For students who went through the full VentureLab experience. A more rigorous pitch format, deeper feedback
                from judges, and higher stakes as competitors go head to head.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------------------- Prizes */}
      <section className="section" id="prizes" aria-labelledby="prizes-title">
        <div className="container prizes">
          <div className="prizes__text">
            <h2 id="prizes-title">$750 in prize money</h2>
            <p className="lead">
              In 2024 and 2025 the top five teams split $750 to help launch their businesses, each presented on a giant
              check.
            </p>
            <p>
              Every participant gets detailed feedback from the high school judges, and finalists also get feedback from
              the professional panel. All participants gain access to year-round support and resources to keep building.
            </p>
          </div>
          <PrizeChecks years="2024 and 2025" />
        </div>
      </section>

      {/* ------------------------------------------------------------- Past years */}
      <section className="section section--navy" id="past" aria-labelledby="past-title">
        <div className="container">
          <div className="sh">
            <h2 id="past-title">Past competitions</h2>
            <p>Winners, judges, and photos from 2024 and 2025, and the two divisions of 2026.</p>
          </div>
          <ul className="ft-past">
            {FISH_TANK_YEARS.map((y) => {
              const winner = y.winners[0];
              const hero = FISH_TANK_HERO[y.year];
              return (
                <li key={y.year}>
                  <Link href={`/fish-tank/${y.year}`} className="ft-past__link">
                    <span className="ft-past__photo">
                      <Image src={winner?.image ?? hero.src} alt="" fill sizes="(max-width: 900px) 100vw, 30vw" style={{ objectPosition: "50% 30%" }} />
                    </span>
                    <span className="ft-past__year num">{y.year}</span>
                    <span className="ft-past__title">{y.meta.venue ? `${y.meta.venue.replace(" Goodwin Hall of Business", "")}` : y.meta.edition}</span>
                    <span className="ft-past__meta">
                      {y.meta.dates}
                      {winner ? ` · Winner: ${winner.project}` : ` · ${y.meta.stats.map((s) => `${s.value} ${s.label}`).join(", ")}`}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="ft-past__note">
            Winners so far: {y2024.winners[0].project} ({y2024.winners[0].team}, 2024) and {y2025.winners[0].project} (
            {y2025.winners[0].team}, 2025).
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------------- FAQ */}
      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="container faq-block">
          <div className="faq-block__head">
            <h2 id="faq-title">Questions about Fish Tank</h2>
            <GoLink href="/office-hours#faqs">All FAQs</GoLink>
          </div>
          <div className="faq-block__list">
            {faqs.map((f) => (
              <Disclosure key={f.id} summary={f.q} name="ft-faq">
                {f.a.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="ready-title">
        <div className="container cta-band">
          <h2 id="ready-title">Want to pitch in {CURRENT.fishTankYear}?</h2>
          <div>
            <p className="lead">
              Start at camp, or come with a business you are already building. Email us and we will tell you when Fish Tank
              registration opens.
            </p>
            <div className="actions">
              <Button href={LINKS.fishTankEmail} icon="mail">
                Email us about Fish Tank
              </Button>
              <GoLink href="/camps">Summer camp {CURRENT.campYear}</GoLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
