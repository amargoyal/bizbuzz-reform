import type { Metadata } from "next";
import { Button, GoLink } from "@/components/ui/Button";
import { Facts } from "@/components/ui/Facts";
import { Gallery } from "@/components/ui/Gallery";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Scoreboard } from "@/components/ui/Scoreboard";
import workshops from "@/data/workshops.json";
import { cleanDate } from "@/lib/format";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";
import "./workshops.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Workshops",
  description:
    "Hands-on business workshops for elementary and middle school students, covering idea generation, marketing, budgeting, and pitching. Free for schools, business fairs, and learning centers.",
  path: "/workshops",
});

type Workshop = (typeof workshops)[number];

const FORMATS = [
  {
    title: "School talks",
    text: "A single visit that shows students how creative ideas can turn into real businesses, even as kids.",
    examples: ["scott", "crone"],
  },
  {
    title: "Workshop series",
    text: "Two to four sessions on business basics that can end in a pitch night for parents and guest judges.",
    examples: ["brookdale", "bestbrains"],
  },
  {
    title: "Business fair prep",
    text: "Workshops that get students ready to sell their products at a children's business fair, covering ideation, marketing, and finance.",
    examples: ["naperville", "dupage"],
  },
  {
    title: "Mentorship programs",
    text: "A semester-long program that adds new worksheets, slides, and activities to a school's existing curriculum.",
    examples: ["madison"],
  },
  {
    title: "Judging and fair support",
    text: "BizBuzz staff judge and support young entrepreneurs at local business fairs.",
    examples: ["naperville2025"],
  },
];

function sessionParts(s: string) {
  const [name, date] = s.split(" | ");
  return { name, date: date ? cleanDate(date) : "" };
}

export default function WorkshopsPage() {
  const byId = Object.fromEntries(workshops.map((w) => [w.id, w])) as Record<string, Workshop>;
  const sessionCount = workshops.reduce((n, w) => n + w.sessions.length, 0);

  return (
    <>
      <PageHero
        title="Workshops"
        lead={
          <>
            <p>
              Hands-on business lessons at your school or community event, with online workshops available too.
              Students develop ideas and learn the basics of marketing and finance.
            </p>
            <p className="muted">Free for elementary and middle schools, business fairs, and learning centers.</p>
          </>
        }
        actions={
          <>
            <Button href={LINKS.workshopEmail} icon="mail">
              Request a workshop
            </Button>
            <GoLink href="#history">Past workshops</GoLink>
          </>
        }
        media={
          <Photo
            src="/workshops/be/3.png"
            alt="Elementary students presenting during a Mini Fish Tank activity in their school library"
            caption="A Mini Fish Tank activity at Brookdale Elementary, fall 2024."
            ratio="4 / 3"
            sizes="(max-width: 900px) 100vw, 40vw"
            priority
          />
        }
        facts={
          <>
            <Facts
              items={[
                { label: "For", value: "Elementary and middle school students" },
                { label: "Topics", value: "Idea generation, marketing, budgeting, and pitching" },
                { label: "Where", value: "Schools, business fairs, learning centers, and online" },
                { label: "Cost", value: "Free" },
              ]}
            />
            <Scoreboard
              label="Workshops so far"
              items={[
                { value: String(workshops.length), label: "workshops" },
                { value: String(sessionCount), label: "total sessions" },
                { value: "710", label: "students taught" },
              ]}
            />
            <p className="small muted mt-4">
              Totals from May 2024 to August 2025. In 2026, BizBuzz also worked with 100+ young entrepreneurs at the
              Naperville Children&apos;s Business Fair.
            </p>
          </>
        }
      />

      {/* ------------------------------------------------------------ Formats */}
      <section className="section" id="formats" aria-labelledby="formats-title">
        <div className="container">
          <div className="sh">
            <h2 id="formats-title">What we can bring</h2>
            <p>
              Hosted at schools like Brookdale Elementary and Madison Junior High, fairs such as the Naperville and DuPage
              Children&apos;s Business Fairs, and learning centers like Best Brains.
            </p>
          </div>
          <ul className="formats">
            {FORMATS.map((f) => (
              <li key={f.title}>
                <h3>{f.title}</h3>
                <p className="formats__text">{f.text}</p>
                <div className="formats__examples">
                  <p>Past examples</p>
                  <ul>
                    {f.examples.map((id) => (
                      <li key={id}>
                        <a href={`#${id}`}>{byId[id].title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ Request */}
      <section className="section section--navy" id="request" aria-labelledby="request-title">
        <div className="container request">
          <div>
            <h2 id="request-title">Bring BizBuzz to your school</h2>
            <p className="lead mt-6">
              Email us and tell us a little about your group. We will reply to plan a format and dates that work for you.
            </p>
          </div>
          <div className="request__list">
            <p className="request__label">Helpful to include</p>
            <ul>
              <li>Your school or organization</li>
              <li>Grade levels and about how many students</li>
              <li>Dates or weeks that could work</li>
              <li>Whether you want a single talk, a series, or help before a business fair</li>
            </ul>
            <div className="actions">
              <Button href={LINKS.workshopEmail} icon="mail">
                Email {CONTACT_EMAIL}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ History */}
      <section className="section" id="history" aria-labelledby="history-title">
        <div className="container">
          <div className="sh">
            <h2 id="history-title">Every workshop since May 2024</h2>
            <p>
              {workshops.length} workshops and {sessionCount} sessions from May 2024 to August 2025, plus the 2026 Naperville
              Children&apos;s Business Fair. Newest first, with sessions and photos.
            </p>
          </div>
          <ol className="workshop-list">
            <li className="workshop" id="naperville2026">
              <div className="workshop__head">
                <p className="workshop__date">2026</p>
                <h3>2026 Naperville Children&apos;s Business Fair</h3>
                <p className="workshop__place">Naperville, IL</p>
              </div>
              <div className="workshop__body">
                <p>100+ students took part in the 2026 Naperville Children&apos;s Business Fair.</p>
              </div>
            </li>
            {workshops.map((w) => (
              <li className="workshop" id={w.id} key={w.id}>
                <div className="workshop__head">
                  <p className="workshop__date">{cleanDate(w.date).replace(" to ", " – ")}</p>
                  <h3>{w.title}</h3>
                  <p className="workshop__place">{w.location}</p>
                </div>
                <div className="workshop__body">
                  <p>{w.description}</p>
                  {w.sessions.length > 1 && (
                    <ol className="workshop__sessions">
                      {w.sessions.map((s) => {
                        const { name, date } = sessionParts(s);
                        return (
                          <li key={s}>
                            <span>{name}</span>
                            <span className="muted">{date}</span>
                          </li>
                        );
                      })}
                    </ol>
                  )}
                  {w.images.length > 0 && (
                    <Gallery
                      images={w.images.map((src, i) => ({
                        src,
                        alt: `${w.title}, photo ${i + 1}`,
                        caption: `${w.title}, ${cleanDate(w.date)}.`,
                      }))}
                      label={`${w.title} photos`}
                      limit={4}
                      thumb={140}
                      className="workshop__photos"
                      sizes="(max-width: 700px) 25vw, 200px"
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="cta-title">
        <div className="container cta-band">
          <h2 id="cta-title">Planning a business fair or a class unit?</h2>
          <div>
            <p className="lead">We can help students come up with an idea, price it, market it, and pitch it.</p>
            <div className="actions">
              <Button href={LINKS.workshopEmail} icon="mail">
                Request a workshop
              </Button>
              <GoLink href="/camps">Summer camp</GoLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
