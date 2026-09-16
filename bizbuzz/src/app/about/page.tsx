import PageSections from "@/components/site/PageSections";
import AboutImpact from "@/components/about/AboutImpact";
import AboutTeam from "@/components/about/AboutTeam";
import Image from "next/image";
import { ArrowCTA, Button } from "@/components/ds/Button";
import AboutIntro from "@/components/about/AboutIntro";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { LINKS } from "@/lib/site";

const PRESS = [
  {
    outlet: "NCTV17",
    meta: "NCTV17 Spotlight · 2025",
    headline: "BizBuzz Turns Imagination into Innovation",
    blurb:
      "BizBuzz joined Jane Wernette on NCTV17's Spotlight show to talk about the 2025 summer camp and the second annual Fish Tank at Benedictine University. More students, more mentors, and guest speakers including Shark Tank alum Lindsey Fleischhauer and Mayor Scott Wehrli.",
    href: "https://www.nctv17.org/spotlight/bizbuzz-turns-imagination-into-innovation/",
    image: "/news/bizbuzz-spotlight-interview.jpg",
  },
  {
    outlet: "NCTV17",
    meta: "NCTV17 News · 2024",
    headline: "Naperville North Juniors Hold Youth Entrepreneurship Camp for Students",
    blurb:
      "At Camp Session 5 and again during Fish Tank, Jesus Cortez and the NCTV17 team joined us to interview students and capture the first summer's creativity and entrepreneurial spirit.",
    href: "https://www.nctv17.org/news/naperville-north-juniors-hold-youth-entrepreneurship-camp-for-students/",
    image: "/news/nctv-students-2024.jpg",
  },
  {
    outlet: "We Love Naperville",
    meta: "We Love Naperville · 2024",
    headline: "Inaugural BizBuzz Camp for Kid Entrepreneurs",
    blurb:
      "Shortly after the first-ever Fish Tank, We Love Naperville covered the success of our inaugural Chicagoland summer camp and the kidpreneurs who competed, including champion Garrett Hauk.",
    href: "https://welovenaperville.co/article/inaugural-bizbuzz-camp-for-kid-entrepreneurs",
    image: "/news/welovenaperville-2024.jpg",
  },
  {
    outlet: "Teen Philanthropy Initiative",
    meta: "KidsMatter TPI · 2025",
    headline: "2025 Teen Philanthropy Initiative grant winner",
    blurb:
      "Following an intensive review process and a one-hour interview, BizBuzz was awarded a $1,000 grant. It was the largest single award in the TPI 2024 to 2025 cycle.",
    href: "https://www.teenphilanthropyinitiative.org/",
    image: "/news/tpi-2025-b.jpg",
  },
  {
    outlet: "Daily Herald",
    meta: "Daily Herald · 2024",
    headline: "Daily Herald interview at Madison Junior High",
    blurb:
      "During the Madison Junior High mxINCedu mentorship program we were interviewed about the importance of youth entrepreneurship, especially in Naperville, where over 90% of K-8 students have no access to business education in school.",
    href: "https://www.dailyherald.com/",
    image: "/about/daily.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
      <AboutIntro />
      <PageSections links={[{ href: "#story", label: "Our story" }, { href: "#impact", label: "Our impact" }, { href: "#team", label: "Meet the team" }, { href: "#press", label: "News and recognition" }]} />

      <AboutImpact />

      <AboutTeam />

      <section id="press" className="bb-about-section bb-container" aria-labelledby="press-heading">
        <div className="bb-about-section-heading">
          <h2 id="press-heading" className="bb-display-2">News and recognition</h2>
          <p className="bb-body">Local coverage of our students, programs and community support.</p>
        </div>
        <div className="bb-about-press-list">
          {PRESS.map((story) => (
            <article className="bb-about-press-story" key={story.headline}>
              <div className="bb-about-press-photo"><Image src={story.image} alt={story.outlet} fill sizes="120px" style={{ objectFit: "cover" }} /></div>
              <div className="bb-about-press-copy">
                <p className="bb-caption">{story.meta}</p>
                <h3 className="bb-display-4">{story.headline}</h3>
                <details className="bb-details">
                  <summary>About this {story.outlet === "Teen Philanthropy Initiative" ? "award" : "coverage"}</summary>
                  <p className="bb-body-sm">{story.blurb}</p>
                  {story.outlet === "Teen Philanthropy Initiative" && <p className="bb-body-sm">The Teen Philanthropy Initiative, a program of Naperville nonprofit KidsMatter, trains high school students in fundraising, budgeting and grant-making. Each cohort awards $10,000 across youth-serving nonprofits in greater Chicago. TPI funded BizBuzz again in 2026.</p>}
                </details>
                <ArrowCTA href={story.href} target="_blank" rel="noopener noreferrer">{story.outlet === "Daily Herald" ? "Visit Daily Herald" : story.outlet === "Teen Philanthropy Initiative" ? "Visit TPI" : `Read ${story.outlet} coverage`}</ArrowCTA>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- CTA */}
      <section
        className="bb-on-neutral"
        style={{ background: "var(--surface-sunken)", paddingBlock: "var(--section-y)" }}
      >
        <div
          style={{
            maxWidth: "var(--container-narrow)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", alignItems: "center" }}>
              <h2 className="bb-display-2" style={{ maxWidth: "20ch" }}>
                Want to help, or join?
              </h2>
              <p className="bb-lead" style={{ maxWidth: "48ch" }}>
                We take on new instructors and youth leaders every season, and we always need sponsors to keep the
                programs free.
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
                <Button href={LINKS.joinEmail} size="lg">
                  Get in touch
                </Button>
                <ArrowCTA href="/sponsors">Sponsorship tiers</ArrowCTA>
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
