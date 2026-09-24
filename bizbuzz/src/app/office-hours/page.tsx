import type { Metadata } from "next";
import { Button, GoLink } from "@/components/ui/Button";
import { Facts } from "@/components/ui/Facts";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import CalBooking from "@/components/office-hours/CalBooking";
import FaqSearch from "@/components/office-hours/FaqSearch";
import { FAQS } from "@/data/faqs";
import { CONTACT_EMAIL, LINKS } from "@/lib/site";
import "./office-hours.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Office Hours & FAQs",
  description:
    "Book free 1-on-1 BizBuzz office hours online or at a Naperville library, and find answers to frequently asked questions about our free entrepreneurship program and Fish Tank competition.",
  path: "/office-hours",
});

const mail = (
  <a href={`mailto:${CONTACT_EMAIL}`} className="nowrap">
    {CONTACT_EMAIL}
  </a>
);

const POLICIES = [
  {
    title: "Send your questions 24 hours ahead",
    body: (
      <>
        <p>
          All students must email {mail} at least <strong>24 hours</strong> before their scheduled session with:
        </p>
        <ul>
          <li>At least 3 specific and detailed questions</li>
          <li>Any ideas, updates, or materials they want feedback on</li>
        </ul>
        <p className="muted">This keeps sessions productive and tailored to your progress.</p>
      </>
    ),
  },
  {
    title: "Send a reminder 12 hours ahead",
    body: (
      <>
        <p>
          Students must send a confirmation or reminder email to {mail} at least <strong>12 hours</strong> before their
          scheduled office hours.
        </p>
        <p className="muted">Missing the reminder may mean your slot is cancelled.</p>
      </>
    ),
  },
  {
    title: "Know the format",
    body: (
      <>
        <ul>
          <li>
            <strong>Weekdays:</strong> online, on Google Meet
          </li>
          <li>
            <strong>Weekends:</strong> in-person sessions available
          </li>
        </ul>
        <p className="muted">The Meet link or library location is sent by email once the team confirms your booking.</p>
      </>
    ),
  },
  {
    title: "Fish Tank entrants come every week",
    body: (
      <>
        <p>
          All Fish Tank participants are required to attend at least <strong>1 hour</strong> of office hours per week
          leading up to the competition.
        </p>
        <p className="muted">This is mandatory, so every team makes steady progress and is ready to pitch.</p>
      </>
    ),
  },
];

export default function OfficeHoursPage() {
  return (
    <>
      <PageHero
        title="Office hours"
        lead={
          <>
            <p>
              One-on-one time with a mentor to ask questions and get feedback on your business idea.
            </p>
            <p className="muted">
              Work on your budget, prepare a pitch, or catch up on a camp or workshop lesson. Every session is free.
            </p>
          </>
        }
        actions={
          <>
            <Button href="#book">Book a session</Button>
            <GoLink href="#faqs">Read the FAQs</GoLink>
          </>
        }
        media={
          <Photo
            src="/camp_imgs/2026/session5vl/session5vlc.jpg"
            alt="A BizBuzz instructor working one-on-one with a VentureLab student"
            caption="One-on-one help during a 2026 VentureLab session at Nichols Library."
            ratio="4 / 3"
            sizes="(max-width: 900px) 100vw, 40vw"
            position="50% 35%"
            priority
          />
        }
        facts={
          <Facts
            items={[
              { label: "Weekdays", value: "Online, on Google Meet" },
              { label: "Weekends", value: "In person at a Naperville library" },
              { label: "Spots", value: "Limited, first come, first served" },
              { label: "Cost", value: "Free" },
            ]}
          />
        }
      />

      {/* ----------------------------------------------------------- Policies */}
      <section className="section" id="policies" aria-labelledby="policies-title">
        <span id="office-hours-policy" className="anchor" aria-hidden="true" />
        <div className="container">
          <div className="sh">
            <h2 id="policies-title">Before you book</h2>
            <p>
              To make sure all students get the most out of office hours and come prepared, please follow these guidelines.
              If they are not followed, we reserve the right to cancel your request.
            </p>
          </div>
          <ol className="policies">
            {POLICIES.map((p, i) => (
              <li key={p.title}>
                <p className="policies__n num" aria-hidden="true">
                  {i + 1}
                </p>
                <h3>{p.title}</h3>
                <div className="policies__body">{p.body}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------------- Booking */}
      <section className="section section--paper" id="book" aria-labelledby="book-title">
        <span id="book-a-session" className="anchor" aria-hidden="true" />
        <div className="container">
          <div className="sh">
            <h2 id="book-title">Book a session</h2>
            <p>
              Pick online or in person, then choose a time that works for your family. The team confirms each booking by
              email with the Google Meet link or the library location.
            </p>
          </div>
          <CalBooking />
        </div>
      </section>

      {/* ---------------------------------------------------------------- FAQs */}
      <section className="section" id="faqs" aria-labelledby="faqs-title">
        <div className="container faq-layout">
          <div className="faq-layout__head">
            <h2 id="faqs-title">Frequently asked questions</h2>
            <p>Everything you need to know about BizBuzz, camp, Fish Tank, and office hours.</p>
            <GoLink href={LINKS.email}>Email the team</GoLink>
          </div>
          <div className="faq-layout__list">
            <FaqSearch faqs={FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
