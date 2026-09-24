import type { Metadata } from "next";
import Image from "next/image";
import { Button, GoLink } from "@/components/ui/Button";
import { Disclosure, More } from "@/components/ui/Disclosure";
import { Facts } from "@/components/ui/Facts";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { FUNDING_SUMMARY, IMPACT, IMPACT_STATS, PROGRAM_PARTICIPATION, SCHOOL_DIRECTORY } from "@/data/impact";
import { PRESS } from "@/data/press";
import { PEOPLE } from "@/data/team";
import { initials } from "@/lib/format";
import { LINKS } from "@/lib/site";
import "./about.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "BizBuzz NFP is a 100% student-run 501(c)(3) nonprofit in Naperville, Illinois, founded in April 2024. Read our mission, see our impact, meet the student team, and find our news coverage.",
  path: "/about",
});

type Member = { name: string; role?: string; description: string; image?: string; customPosition?: string };

const founders = PEOPLE.coFounders2026.filter((p) => p.role === "Co-Founder") as Member[];
const leadership2026 = [
  ...PEOPLE.coFounders2026.filter((p) => p.role !== "Co-Founder"),
  ...PEOPLE.leadershipTeam2026,
] as Member[];

// The 2025 list predates some portraits; reuse a person's current photo when
// the 2025 entry has none.
const photoByName = new Map(
  [...leadership2026, ...(PEOPLE.leadershipTeam as Member[])]
    .filter((p) => p.image)
    .map((p) => [p.name, { image: p.image, customPosition: p.customPosition }]),
);
const leadership2025 = (PEOPLE.leadershipTeam as Member[]).map((p) =>
  p.image ? p : { ...p, ...photoByName.get(p.name) },
);

/** Participation rows grouped by the year that starts each label. */
const participationByYear = ["2026", "2025", "2024"].map((year) => ({
  year,
  rows: PROGRAM_PARTICIPATION.filter((r) => r.label.startsWith(year)).map((r) => ({
    label: r.label.replace(`${year} `, ""),
    total: String(r.total),
  })),
}));

const SECTIONS = [
  { href: "#mission", label: "Mission" },
  { href: "#impact", label: "Impact" },
  { href: "#schools", label: "Schools" },
  { href: "#team", label: "Team" },
  { href: "#press", label: "In the news" },
];

function Portrait({ person, sizes }: { person: Member; sizes: string }) {
  return (
    <div className="person__photo">
      {person.image ? (
        <Image
          src={person.image}
          alt=""
          fill
          sizes={sizes}
          style={{ objectPosition: person.customPosition ?? "center 20%" }}
        />
      ) : (
        <span className="person__initials" aria-hidden="true">
          {initials(person.name)}
        </span>
      )}
    </div>
  );
}

function PersonCard({ person, sizes, large }: { person: Member; sizes: string; large?: boolean }) {
  return (
    <li className={large ? "person person--large" : "person"}>
      <Portrait person={person} sizes={sizes} />
      <div>
        <h4 className="person__name">{person.name}</h4>
        {person.role && <p className="person__role">{person.role}</p>}
        <More
          summary={
            <>
              Read bio<span className="visually-hidden"> of {person.name}</span>
            </>
          }
        >
          <p>{person.description}</p>
        </More>
      </div>
    </li>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="For students, by students"
        lead={
          <>
            <p>
              BizBuzz NFP is a 100% student-run and student-led 501(c)(3) nonprofit in Naperville, Illinois. High school
              students design and teach free entrepreneurship programs for students in grades 3 to 8.
            </p>
            <p className="muted">
              Allen Xu and Aarav Khullar founded BizBuzz in April 2024 as Naperville North High School students, after
              discovering that 90% of K–8 schools in Naperville do not offer business classes.
            </p>
          </>
        }
        actions={
          <>
            <Button href="#team">Meet the team</Button>
            <GoLink href="#press">In the news</GoLink>
          </>
        }
        media={
          <Photo
            src="/about/background.jpg"
            alt="Seventeen members of the BizBuzz student team in business dress, standing together in a school atrium"
            caption="The BizBuzz student team."
            ratio="3 / 2"
            sizes="(max-width: 900px) 100vw, 40vw"
            priority
          />
        }
        facts={
          <>
            <Facts
              items={[
                { label: "Founded", value: "April 2024" },
                { label: "Based in", value: "Naperville, Illinois" },
                { label: "Status", value: "501(c)(3) nonprofit" },
                { label: "Run by", value: `${IMPACT.staff} high school student staff` },
              ]}
            />
            <nav className="toc" aria-label="On this page">
              <ul>
                {SECTIONS.map((s) => (
                  <li key={s.href}>
                    <a href={s.href}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        }
      />

      {/* ------------------------------------------------------------- Mission */}
      <section className="section" id="mission" aria-labelledby="mission-title">
        <div className="container mission">
          <div className="mission__head">
            <h2 id="mission-title">Our mission</h2>
          </div>
          <div className="mission__body">
            <p className="lead">
              BizBuzz is founded on the belief that every student deserves to have access to entrepreneurial education that
              brings their ideas, and their ingenuity, to life.
            </p>
            <p>
              Across the nation, especially in the city of Naperville, youth entrepreneurship programs are inaccessible and
              inadequate. Business education is rarely prioritized in elementary and middle schools, yet it equips students
              with much-needed critical thinking and problem-solving skills that last a lifetime. The next generation of
              innovators and leaders has the capability of sparking monumental change, but far too few of them have a
              platform to actually do so.
            </p>
            <p className="mission__turn">In April 2024, we set out to fix that.</p>
            <p>
              From free camps to professional pitch competitions to webinars to workshops, we organize programs that bring
              together business professionals, government leaders, student entrepreneurs, and families in Naperville and
              beyond.
            </p>
            <p>
              As a 100% student-run and student-led organization, we offer more than just a talented ensemble of high school
              instructors. We offer a program that has been tirelessly crafted to optimize student outcomes and promoted to
              create communal change, entirely for students, by students. And we&apos;re just getting started.
            </p>
            <div className="actions">
              <GoLink href="/#programs">Explore our programs</GoLink>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Impact */}
      <section className="section section--paper" id="impact" aria-labelledby="impact-title">
        <div className="container">
          <div className="sh">
            <h2 id="impact-title">Impact at a glance</h2>
            <p>
              BizBuzz connects students, schools, and sponsors to build a thriving youth entrepreneurship community across
              Chicagoland.
            </p>
          </div>

          <dl className="stats">
            {IMPACT_STATS.map((s) => (
              <div key={s.label}>
                <dt>
                  <span className="stats__label">{s.label}</span>
                  <span className="stats__note">{s.description}</span>
                </dt>
                <dd className="num">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="impact-detail">
            <div className="participation">
              <h3>Student participation</h3>
              <p className="muted">Breakdown of students who have joined BizBuzz programs.</p>
              <table className="table">
                <caption className="visually-hidden">Students in each BizBuzz program, by year</caption>
                <thead>
                  <tr>
                    <th scope="col">Program</th>
                    <th scope="col" className="num-cell">
                      Students
                    </th>
                  </tr>
                </thead>
                {participationByYear.map((g) => (
                  <tbody key={g.year}>
                    <tr className="participation__year">
                      <th scope="rowgroup" colSpan={2}>
                        {g.year}
                      </th>
                    </tr>
                    {g.rows.map((r) => (
                      <tr key={r.label}>
                        <td>{r.label}</td>
                        <td className="num-cell">{r.total}</td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>

            <div className="support">
              <h3>Community support</h3>
              <p className="muted">
                Financial contributions and in-kind resources empower BizBuzz to stay student-led and cost-free.
              </p>
              <dl className="support__figures">
                {FUNDING_SUMMARY.map((f) => (
                  <div key={f.label}>
                    <dt>
                      {f.label}
                      {f.helper && <span className="muted"> from {f.helper}</span>}
                    </dt>
                    <dd className="num">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <GoLink href="/sponsors#supporters">All {IMPACT.partners} partners and sponsors</GoLink>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Schools */}
      <section className="section" id="schools" aria-labelledby="schools-title">
        <div className="container">
          <div className="sh">
            <h2 id="schools-title">Schools we serve</h2>
            <p>
              Representation from elementary, middle, and high schools across {IMPACT.districts} districts in the region.
            </p>
          </div>
          <div className="directory">
            {SCHOOL_DIRECTORY.map((group) => {
              const [name, count] = group.title.replace(")", "").split(" (");
              const districts = name === "School Districts";
              return (
                <section
                  key={group.title}
                  className={districts ? "directory__group directory__group--districts" : "directory__group"}
                  aria-labelledby={`dir-${name.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <h3 id={`dir-${name.replace(/\s+/g, "-").toLowerCase()}`}>
                    <span className="num">{count}</span> {name.toLowerCase()}
                  </h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        {districts && /^\d/.test(item) ? `District ${item}` : item.replace(" (Priv)", " (private)")}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Team */}
      <section className="section section--paper" id="team" aria-labelledby="team-title">
        <div className="container">
          <div className="sh">
            <h2 id="team-title">The team</h2>
            <p>
              BizBuzz is powered by a dedicated team of student leaders, entrepreneurs, and educators committed to fostering
              the next generation of business innovators.
            </p>
          </div>

          <div className="team-group">
            <h3>Co-founders</h3>
            <ul className="founders">
              {founders.map((p) => (
                <li key={p.name} className="founder">
                  <Portrait person={p} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 40vw, 260px" />
                  <div className="founder__text">
                    <h4 className="person__name">{p.name}</h4>
                    <p className="person__role">{p.role}</p>
                    <p className="founder__bio">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="team-group">
            <h3>2026 leadership team</h3>
            <ul className="people people--leaders">
              {leadership2026.map((p) => (
                <PersonCard key={p.name} person={p} sizes="(max-width: 700px) 50vw, 220px" large />
              ))}
            </ul>
          </div>

          <div className="team-group rosters">
            <section aria-labelledby="instructors-title">
              <h3 id="instructors-title">Instructors</h3>
              <dl className="roster">
                {PEOPLE.instructors.map((p) => (
                  <div key={p.name}>
                    <dt>{p.name}</dt>
                    <dd>{p.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section aria-labelledby="youth-title">
              <h3 id="youth-title">Youth leadership team</h3>
              <dl className="roster">
                {PEOPLE.youthLeadership.map((p) => (
                  <div key={p.name}>
                    <dt>{p.name}</dt>
                    <dd>{p.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <Disclosure
            className="team-archive"
            id="team-2025"
            summary={<>2025 leadership team ({leadership2025.length} people)</>}
          >
            <ul className="people">
              {leadership2025.map((p) => (
                <PersonCard key={p.name} person={p} sizes="88px" />
              ))}
            </ul>
          </Disclosure>
        </div>
      </section>

      {/* --------------------------------------------------------------- Press */}
      <section className="section" id="press" aria-labelledby="press-title">
        <div className="container">
          <div className="sh">
            <h2 id="press-title">In the news</h2>
            <p>
              Our journey has been featured by local media, highlighting our commitment to fostering entrepreneurship in
              students throughout Naperville and beyond.
            </p>
          </div>
          <ol className="stories">
            {PRESS.map((item) => (
              <li key={item.id} id={item.id} className="story">
                <div className="story__media">
                  {item.video ? (
                    <VideoEmbed id={item.video.youtubeId} title={item.title} poster={item.video.poster} />
                  ) : item.image ? (
                    <div className={item.image.fit === "contain" ? "story__img story__img--contain" : "story__img"}>
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 900px) 100vw, 480px"
                        style={{ objectPosition: item.image.position }}
                      />
                    </div>
                  ) : null}
                </div>
                <div className="story__text">
                  <p className="story__meta">
                    {item.outlet} · {item.date}
                  </p>
                  <h3>{item.title}</h3>
                  {item.summary.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {item.link && (
                    <p>
                      <a className="story__link" href={item.link.href} target="_blank" rel="noopener noreferrer">
                        {item.link.label}
                        <Icon name="external" />
                        <span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------------- Join */}
      <section className="section section--navy" aria-labelledby="join-title">
        <div className="container cta-band">
          <h2 id="join-title">Want to help, or join?</h2>
          <div>
            <p className="lead">
              We take on new instructors and youth leaders every season, and we always need sponsors to keep the programs
              free.
            </p>
            <div className="actions">
              <Button href={LINKS.joinEmail} icon="mail">
                Get in touch
              </Button>
              <GoLink href="/sponsors">Become a sponsor</GoLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
