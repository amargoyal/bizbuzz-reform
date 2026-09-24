import Image from "next/image";
import { Button, GoLink } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Status } from "@/components/ui/Status";
import fishTank from "@/data/fish-tank.json";
import { IMPACT } from "@/data/impact";
import { PRESS } from "@/data/press";
import { money } from "@/lib/format";
import { CURRENT, LINKS } from "@/lib/site";
import "./home.css";

const PROGRAMS = [
  { id: "camp", name: "Summer camp", audience: "Grades 3–8", description: "Develop a business idea, learn how to budget and market it, and practice your pitch.", label: "Explore camp", href: "/camps" },
  { id: "fish-tank", name: "Fish Tank", audience: "Grades 3–9", description: "Present your business to a panel of judges in our annual pitch competition. You can enter without attending camp.", label: "Explore Fish Tank", href: "/fish-tank" },
  { id: "workshops", name: "Workshops", audience: "Schools & community groups", description: "Bring hands-on business lessons to your school, business fair, or learning center.", label: "Explore workshops", href: "/workshops" },
  { id: "office-hours", name: "Office hours", audience: "Students with an idea", description: "Work through a business question, catch up on a lesson, or get feedback from a mentor.", label: "Find a mentoring session", href: "/office-hours" },
];

const HIGHLIGHTS = [
  { value: `${IMPACT.students.toLocaleString("en-US")}+`, label: "students taught" },
  { value: String(IMPACT.schools), label: "schools represented" },
  { value: String(IMPACT.officeHours), label: "hours of mentoring" },
];

const SPONSOR_LOGOS = [
  { name: "Hiren Patel", logo: "/sponsors/hirenpatel.png" },
  { name: "Right Choice Dental Care", logo: "/sponsors/rightchoicedentalcare.png" },
  { name: "AT&T", logo: "/sponsors/att.png" },
  { name: "Kabat American", logo: "/sponsors/kabatamerican.jpg" },
  { name: "Midwest Badminton", logo: "/sponsors/midwestbadminton.png" },
  { name: "Teen Philanthropy Initiative", logo: "/sponsors/teenphilanthropyinstitute.png" },
];

export default function HomePage() {
  const champion = fishTank["2025"].winners[0];
  const press = PRESS.filter((p) => p.link).slice(0, 3);

  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="container home-hero__grid">
          <div className="home-hero__intro">
            <h1 id="home-title">Build your first business.</h1>
            <p className="lead">Free entrepreneurship programs for students in Naperville, taught by high school students.</p>
            <div className="home-hero__registration">
              <Button href={LINKS.campRegistration}>Register for {CURRENT.campYear} camp</Button>
              <p>Grades 3–8 · Dates and venue to be announced</p>
            </div>
            <GoLink href="#programs">Find your program</GoLink>
          </div>
          <Photo
            className="home-hero__photo"
            src="/camp_imgs/landing/center.jpg"
            alt="Campers raising their hands to answer a question at a 2024 camp session"
            caption="Ideas start here. Summer camp, 2024."
            ratio="5 / 4"
            sizes="(max-width: 800px) 100vw, 55vw"
            priority
          />
        </div>
        <div className="container home-hero__note">
          <Status tone="open">Summer {CURRENT.campYear} registration open</Status>
          <p>Free for every family. Student-run since April 2024.</p>
        </div>
      </section>

      <section className="section" id="programs" aria-labelledby="programs-title">
        <div className="container">
          <div className="sh">
            <h2 id="programs-title">A place for your idea</h2>
            <p>Start at camp, enter a competition, or work with a mentor. Every program is free. No business experience needed.</p>
          </div>
          <ul className="programs">
            {PROGRAMS.map((program) => (
              <li className="program" key={program.id} id={`program-${program.id}`}>
                <div className="program__heading">
                  <h3>{program.name}</h3>
                  <p>{program.audience}</p>
                </div>
                <p className="program__description">{program.description}</p>
                <GoLink href={program.href}>{program.label}</GoLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="winners-title">
        <div className="container home-story">
          <Photo
            src={champion.image}
            alt={`${champion.team} holding the first-place trophy and check for ${champion.project}`}
            caption="First place at Fish Tank 2025, Benedictine University."
            ratio="5 / 4"
            sizes="(max-width: 800px) 100vw, 45vw"
            position="50% 32%"
          />
          <div className="home-story__text">
            <p className="home-story__credit">{champion.team} · Fish Tank 2025 winner</p>
            <h2 id="winners-title">{champion.project}</h2>
            <p className="lead">An investing education app with AI coaching, experience points, and titles to earn as you learn.</p>
            <p>One of the businesses presented by 70+ students at Fish Tank 2025. Twelve finalists pitched to a panel of judges, and the top five shared $750 in prizes.</p>
            <div className="actions">
              <Button href="/fish-tank/2025">Meet the 2025 winners</Button>
              <GoLink href="/fish-tank">How Fish Tank works</GoLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="team-title">
        <div className="container home-team">
          <div className="home-team__intro">
            <h2 id="team-title">For students.<br />By students.</h2>
            <p className="lead">Allen Xu and Aarav Khullar started BizBuzz in April 2024 as Naperville North High School students.</p>
            <p>Today, our high school team designs the programs, teaches the sessions, and mentors the next group of young entrepreneurs.</p>
            <div className="actions">
              <GoLink href="/about#team">Meet the team</GoLink>
              <GoLink href="/about">Our story</GoLink>
            </div>
          </div>
          <Photo
            src="/about/background.jpg"
            alt="The BizBuzz student team dressed up for an event"
            caption="The students behind BizBuzz."
            ratio="3 / 2"
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="home-impact">
            <dl>
              {HIGHLIGHTS.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd className="num">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="home-impact__source">
              <p>From BizBuzz records, across our programs since 2024.</p>
              <GoLink href="/about#impact">Our impact</GoLink>
              <GoLink href="/seasons">Explore past seasons</GoLink>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Press */}
      <section className="section section--paper" aria-labelledby="press-title">
        <div className="container home-press">
          <div className="home-press__intro">
            <h2 id="press-title">In the news</h2>
            <p>Coverage from NCTV17, We Love Naperville, and the Daily Herald, plus a 2025 grant from the KidsMatter Teen Philanthropy Initiative.</p>
            <GoLink href="/about#press">All coverage</GoLink>
          </div>
          <ul className="clippings">
            {press.map((item) => (
              <li key={item.id}>
                <a href={item.link!.href} target="_blank" rel="noopener noreferrer" className="clipping">
                  <span className="clipping__meta">
                    {item.outlet} · {item.date}
                  </span>
                  <span className="clipping__title">{item.title}</span>
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------- Support */}
      <section className="section home-support" aria-labelledby="support-title">
        <div className="container home-support__grid">
          <div>
            <h2 id="support-title">Help keep every program free</h2>
            <p className="lead mt-6">
              Local businesses and organizations have contributed {money(IMPACT.funding)}+ so far. Every contribution
              goes directly toward camps, competitions, and programs for students.
            </p>
            <div className="actions mt-7">
              <Button href="/sponsors" variant="dark">
                Become a sponsor
              </Button>
              <GoLink href={LINKS.sponsorEmail}>Get in touch</GoLink>
            </div>
          </div>
          <ul className="home-support__logos" aria-label="Some of our sponsors">
            {SPONSOR_LOGOS.map((s) => (
              <li key={s.name}>
                <span className="home-support__logo">
                  <Image src={s.logo} alt="" fill sizes="180px" />
                </span>
                <span className="home-support__name">{s.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
