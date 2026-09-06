import { ArrowCTA, Button } from "@/components/ds/Button";
import { Card, Eyebrow } from "@/components/ds/Card";
import { MediaCard } from "@/components/ds/MediaCard";
import { Parallax } from "@/components/ds/motion";
import CalBooking from "@/components/office-hours/CalBooking";
import Faqs, { type Faq } from "@/components/office-hours/Faqs";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { LINKS } from "@/lib/site";

const FAQS: Faq[] = [
  {
    q: "What is BizBuzz?",
    a: "A hands-on, completely free entrepreneurship program for students in grades 3–8. We help students turn their ideas into real business concepts through interactive sessions, mentorship, and creative challenges.",
  },
  {
    q: "What is Fish Tank?",
    a: "Our final pitch competition. Think Shark Tank, for students. Participants present their business ideas to judges, build confidence, and showcase everything they have learned.",
  },
  {
    q: "Does my child need business experience?",
    a: "Not at all. Whether your child is brand new or already entrepreneurial, BizBuzz is designed for all experience levels.",
  },
  {
    q: "What should my child bring?",
    a: "Just the essentials: a folder, pencils, a water bottle, and optionally a laptop or tablet for building and researching their ideas.",
  },
  {
    q: "Is it really free?",
    a: "Yes. 100% free. Our mission is to make entrepreneurship accessible to every student, thanks to the support of our community partners.",
  },
  {
    q: "Do we have to attend camp to compete in Fish Tank?",
    a: "No. Fish Tank is open to all eligible students, and students are encouraged to work with friends who are not part of BizBuzz this year.",
  },
  {
    q: "What are the divisions for Fish Tank?",
    a: "Students enrolled in VentureLab, or between 6th and 9th grade, compete in the VentureLab division. Students enrolled in KidPreneur, or between 3rd and 6th grade, compete in the KidPreneur division.",
  },
  {
    q: "What are office hours?",
    a: "Personalized 1-on-1 sessions where students get feedback, ask questions, and improve their ideas. Spots are limited and first come, first served.",
  },
  {
    q: "Is there a virtual option?",
    a: "Yes. If your child cannot attend in person they can participate via Google Meet. Coordinate with our team and we will make it work.",
  },
  {
    q: "Where are sessions held?",
    a: "At local libraries including 95th Street Library and Nichols Library. You always receive location details ahead of time.",
  },
  {
    q: "How will I stay updated?",
    a: "We send email updates after each session with key highlights, reminders and important links.",
  },
  {
    q: "Still have questions?",
    a: "Reach out any time at bizbuzznfp@gmail.com. We would love to support you and your child.",
  },
];

const POLICIES = [
  {
    n: "01",
    title: "Send your questions 24 hours ahead",
    points: [
      "Email bizbuzznfp@gmail.com at least 24 hours before your session.",
      "Include at least 3 specific, detailed questions.",
      "Add any ideas, updates or materials you want feedback on.",
    ],
  },
  {
    n: "02",
    title: "Send a reminder 12 hours ahead",
    points: [
      "Confirm your slot by email at least 12 hours before it starts.",
      "Missing the reminder may mean your slot is cancelled.",
    ],
  },
  {
    n: "03",
    title: "Know the format",
    points: [
      "Weekdays are online, over Google Meet.",
      "Weekends are in person at a Naperville library.",
      "Links and locations arrive when you sign up.",
    ],
  },
  {
    n: "04",
    title: "Fish Tank entrants attend weekly",
    points: [
      "Every Fish Tank participant attends at least 1 hour of office hours per week leading up to the competition.",
      "This is mandatory. It is how we make sure you are ready.",
    ],
  },
];

export default function OfficeHoursPage() {
  return (
    <>
      <SiteHeader />

      {/* ------------------------------------------------------------ Hero */}
      <section style={{ paddingBlock: "clamp(56px, 7vw, 96px) 0" }}>
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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-8)",
                  alignItems: "flex-start",
                }}
              >
                <h1 className="bb-display-1" style={{ maxWidth: "14ch" }}>
                  One hour, one idea, <span className="bb-brand-text">one of us</span>
                </h1>
                <Eyebrow>Office hours</Eyebrow>
                <p className="bb-lead" style={{ maxWidth: "44ch", color: "var(--text-muted)" }}>
                  Personalized 1-on-1 sessions where you get feedback, ask questions, and make your idea better.
                  Weekdays online over Google Meet, weekends in person at a local library.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-7)", alignItems: "center" }}>
                  <Button href="#book" size="lg">
                    Book a session
                  </Button>
                  <ArrowCTA href="#faqs">Read the FAQs</ArrowCTA>
                </div>
              </div>
            </div>
          </div>
          <div style={{ gridColumn: "8 / span 5" }}>
            <Parallax depth={0.5}>
              <MediaCard
                src="/program_cards/mentorship.jpg"
                alt="A one-to-one mentorship session"
                ratio="4 / 5"
                float
                scrim
                priority
                chips={["Free", "1-on-1", "Online or in person"]}
              />
            </Parallax>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Booking */}
      <section id="book" style={{ paddingBlock: "var(--section-y)" }}>
        <div
          style={{
            maxWidth: "var(--container-narrow)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-10)",
            alignItems: "center",
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
              <h2 className="bb-display-2" style={{ maxWidth: "18ch" }}>
                Pick a time that works
              </h2>
              <p className="bb-lead" style={{ maxWidth: "50ch", color: "var(--text-muted)" }}>
                Choose online or in person, pick a slot, and you get a confirmation email with the Meet link or the
                library location right away. Spots are limited and first come, first served.
              </p>
            </div>
          </div>

          <CalBooking />
        </div>
      </section>

      {/* ---------------------------------------------------------- Policy */}
      <section style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y)" }}>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
              <h2 className="bb-display-2" style={{ maxWidth: "16ch" }}>
                Come prepared
              </h2>
              <p className="bb-lead" style={{ maxWidth: "52ch", color: "var(--text-muted)" }}>
                Office hours are short and there is a waiting list. These four rules are how we keep every session
                useful. If they are not followed we reserve the right to cancel your slot.
              </p>
            </div>
          </div>

          <div>
            <div
              className="bb-collapse-2"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "var(--grid-gap)",
                alignItems: "stretch",
              }}
            >
              {POLICIES.map((p) => (
                <Card key={p.n} pad="var(--space-9)">
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                    <p className="bb-display-3" style={{ color: "var(--text-display)" }}>
                      {p.n}
                    </p>
                    <h3 className="bb-display-4">{p.title}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                      {p.points.map((pt) => (
                        <p key={pt} className="bb-body-sm" style={{ color: "var(--text-muted)" }}>
                          {pt}
                        </p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ FAQs */}
      <section id="faqs" style={{ paddingBlock: "var(--section-y)" }}>
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
            <div>
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
                <h2 className="bb-display-2" style={{ maxWidth: "12ch" }}>
                  Frequently asked
                </h2>
                <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                  Everything about BizBuzz, Fish Tank and office hours. Still stuck? Email us.
                </p>
                <div>
                  <ArrowCTA href={LINKS.email}>Email the team</ArrowCTA>
                </div>
              </div>
            </div>
          </div>
          <div style={{ gridColumn: "6 / span 7" }}>
            <Faqs faqs={FAQS} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- Locations */}
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
          <div style={{ gridColumn: "span 5" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
                <h2 className="bb-display-2" style={{ maxWidth: "14ch" }}>
                  At the library, or on a Meet link
                </h2>
              </div>
            </div>
          </div>
          <div style={{ gridColumn: "7 / span 6" }}>
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
                <p className="bb-lead">
                  In-person sessions run at 95th Street Library and Nichols Library in Naperville. You always get
                  the exact location ahead of time by email.
                </p>
                <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                  If your child cannot attend in person they can join over Google Meet. Coordinate with the team and
                  we will make it work. After every session we send an email with highlights, reminders and links so
                  you are always in the loop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
