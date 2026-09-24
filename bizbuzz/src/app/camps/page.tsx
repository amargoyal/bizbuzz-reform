import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, GoLink, TextLink } from "@/components/ui/Button";
import { Facts } from "@/components/ui/Facts";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Status } from "@/components/ui/Status";
import { CAMP_YEARS, CURRICULUM, allSpeakers } from "@/data/camps";
import { CONTACT_EMAIL, CURRENT, LINKS } from "@/lib/site";
import { YearHashRedirect } from "@/components/site/YearHashRedirect";
import "./camps.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Summer Camp",
  description:
    "BizBuzz summer camp: a free multi-week entrepreneurship camp for students in grades 3 to 8 in Naperville, Illinois. Summer 2027 registration is open.",
  path: "/camps",
});

const PAST_SUMMARY: Record<number, string> = {
  2026: "KidPreneur and VentureLab ran side by side, six sessions each, and finished in two Fish Tank divisions.",
  2025: "Free seven-week camp with 5 guest speakers, including Shark Tank alum Lindsey Fleischhauer and Mayor Scott Wehrli. 120 students learned ideation, marketing, finance, and pitching.",
  2024: "Free six-week camp with 6 sessions, 7 guest speakers, and hands-on business challenges. 110 students learned ideation, marketing, finance, and pitching.",
};

export default function CampsPage() {
  const speakers = allSpeakers();
  const [kp, vl] = CURRICULUM;

  return (
    <>
      <YearHashRedirect base="/camps" years={CAMP_YEARS.map((y) => y.year)} />
      <PageHero
        status={<Status>Summer {CURRENT.campYear} registration open</Status>}
        title="Summer camp"
        lead={
          <>
            <p>
              Develop a business idea, learn how to budget and market it, and practice your pitch with help
              from high school instructors and guest speakers.
            </p>
            <p className="muted">Free for students in grades 3 to 8 in Naperville. No business experience needed.</p>
          </>
        }
        actions={
          <>
            <Button href={LINKS.campRegistration}>Register for {CURRENT.campYear}</Button>
            <GoLink href="#schedule">What happens at camp</GoLink>
            <p className="registration-note">Dates and locations for summer {CURRENT.campYear} have not been announced yet.</p>
          </>
        }
        media={
          <Photo
            src="/camp_imgs/2026/session1kp/session1kpa.JPG"
            alt="Two KidPreneur campers laughing while they work on a worksheet"
            caption="KidPreneur Session 1, 95th Street Library, June 5, 2026."
            ratio="4 / 3"
            sizes="(max-width: 900px) 100vw, 40vw"
            position="50% 40%"
            priority
          />
        }
        facts={
          <Facts
            items={[
              { label: "Season", value: `Summer ${CURRENT.campYear}` },
              { label: "Grades", value: "3 to 8" },
              { label: "Cost", value: "Free" },
              { label: "Seats", value: "Limited" },
              { label: "Past locations", value: "95th Street and Nichols libraries, Naperville" },
            ]}
          />
        }
      />

      {/* --------------------------------------------------- Before you register */}
      <section className="section" id="before-you-register" aria-labelledby="glance-title">
        <div className="container glance">
          <div className="glance__head">
            <h2 id="glance-title">Before you register</h2>
            <p>The questions parents ask us first. There are more answers in the FAQ.</p>
            <GoLink href="/office-hours#faqs">Read the FAQ</GoLink>
            <Photo
              className="glance__photo"
              src="/hero_imgs/11.jpg"
              alt="Campers raising their hands to answer a question"
              caption="Hands up during a BizBuzz camp session."
              ratio="4 / 3"
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </div>
          <div className="glance__list">
            <Facts
              stacked
              items={[
                { label: "Who can join", value: "Students in grades 3 to 8. Brand new or already entrepreneurial, camp is designed for every experience level." },
                { label: "Cost", value: "Free. Our mission is to make entrepreneurship accessible to every student, thanks to the support of our community partners." },
                {
                  label: "Dates and locations",
                  value: `The ${CURRENT.campYear} dates and locations have not been announced yet. From 2024 to 2026, camp met once a week at the 95th Street and Nichols libraries in Naperville. You always get location details ahead of time.`,
                },
                {
                  label: "Tracks",
                  value: (
                    <>
                      The {CURRENT.campYear} camp keeps the two tracks that started in 2026: KidPreneur for grades 3 to 6
                      and first-time founders, and VentureLab for grades 6 to 8 and students ready to go further.{" "}
                      <TextLink href={LINKS.email}>Ask us which fits your child</TextLink>.
                    </>
                  ),
                },
                { label: "What to bring", value: "A folder, pencils, a water bottle, and, if you have one, a laptop or tablet for building and researching ideas." },
                { label: "Staying updated", value: "We email families after each session with highlights, reminders, and important links." },
                {
                  label: "Registration",
                  value: `Register with our Google Form. Seats are limited, so secure your place in the ${CURRENT.campYear} camp before they fill up.`,
                },
              ]}
            />
            <div className="actions mt-7">
              <Button href={LINKS.campRegistration}>Register for {CURRENT.campYear}</Button>
              <GoLink href={`mailto:${CONTACT_EMAIL}`}>Email {CONTACT_EMAIL}</GoLink>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Schedule */}
      <section className="section section--paper" id="schedule" aria-labelledby="schedule-title">
        <div className="container">
          <div className="sh">
            <h2 id="schedule-title">What a summer looks like</h2>
            <p>
              This is the 2026 schedule, one session a week for six weeks. Each session builds on the one before it and
              ends with a pitch. The {CURRENT.campYear} schedule will be posted here once it is set.
            </p>
          </div>
          <div className="table-wrap">
            <table className="table schedule-table">
              <caption className="visually-hidden">2026 camp schedule by week and track</caption>
              <thead>
                <tr>
                  <th scope="col">Week</th>
                  <th scope="col">KidPreneur</th>
                  <th scope="col">VentureLab</th>
                </tr>
              </thead>
              <tbody>
                {kp.sessions.map((s, i) => (
                  <tr key={s.n}>
                    <th scope="row" className="schedule-table__week num">{s.n}</th>
                    <td>
                      <Link href={`/camps/2026#kp-session${s.n}`}>{s.title}</Link>
                    </td>
                    <td>
                      <Link href={`/camps/2026#vl-session${vl.sessions[i].n}`}>{vl.sessions[i].title}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6">
            <GoLink href="/camps/2026">Read every 2026 session</GoLink>
          </p>
          <div className="camp-moments">
            <Photo
              src="/hero_imgs/13.jpg"
              alt="Two BizBuzz instructors laughing while campers work on an activity"
              caption="Instructors running a hands-on activity."
              ratio="16 / 9"
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <Photo
              src="/hero_imgs/15.jpg"
              alt="A visiting speaker in a light blue suit calling on a camper"
              caption="A visiting speaker calling on a camper."
              ratio="16 / 9"
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Speakers */}
      <section className="section" id="speakers" aria-labelledby="speakers-title">
        <div className="container">
          <div className="sh">
            <h2 id="speakers-title">Guest speakers since 2024</h2>
            <p>
              Founders, a Shark Tank alum, city leaders, and the Mayor of Naperville have all spoken to our campers.
            </p>
          </div>
          <ul className="speaker-grid">
            {speakers.map(({ speaker, visits }) => (
              <li key={speaker.name} className="speaker-tile">
                <div className="speaker-tile__photo">
                  {speaker.image && <Image src={speaker.image} alt={speaker.name} fill sizes="(max-width: 600px) 100vw, 260px" />}
                </div>
                <p className="speaker-tile__name">{speaker.name}</p>
                <p className="speaker-tile__role">{speaker.role}</p>
                <ul className="speaker-tile__visits">
                  {visits.map((v) => (
                    <li key={v.year + v.session + (v.track ?? "")}>
                      <strong>{v.year}</strong>
                      {v.track ? ` ${v.track}` : ""} · {v.session}
                      {v.topic ? `: “${v.topic}”` : ""}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ Past camps */}
      <section className="section section--paper" id="past" aria-labelledby="past-title">
        <div className="container">
          <div className="sh">
            <h2 id="past-title">Past camps</h2>
            <p>Every session, speaker, and photo from each summer.</p>
          </div>
          <ul className="past">
            {CAMP_YEARS.map((cy) => (
              <li key={cy.year}>
                <p className="past__year num" aria-hidden="true">
                  {cy.year}
                </p>
                <Photo src={cy.heroPhoto.src} alt={cy.heroPhoto.alt} ratio="3 / 2" sizes="(max-width: 900px) 100vw, 30vw" position={cy.heroPhoto.position} />
                <h3>
                  <Link href={`/camps/${cy.year}`}>Summer camp {cy.year}</Link>
                </h3>
                <p>{PAST_SUMMARY[cy.year]}</p>
                <ul className="past__stats">
                  {cy.stats.map((s) => (
                    <li key={s.label}>
                      {s.value} {s.label}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="section" aria-labelledby="join-title">
        <div className="container cta-band">
          <h2 id="join-title">Join the {CURRENT.campYear} summer camp</h2>
          <div>
            <p className="lead">
              Registration is open now. Grades 3 to 8, in Naperville, no business experience needed. After camp comes
              Fish Tank, our pitch competition.
            </p>
            <div className="actions">
              <Button href={LINKS.campRegistration}>Register for {CURRENT.campYear}</Button>
              <GoLink href="/fish-tank">How Fish Tank works</GoLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
