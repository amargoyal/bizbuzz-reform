import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, GoLink } from "@/components/ui/Button";
import { Disclosure } from "@/components/ui/Disclosure";
import { Gallery } from "@/components/ui/Gallery";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Scoreboard } from "@/components/ui/Scoreboard";
import data2024 from "@/data/2024.json";
import data2025 from "@/data/2025.json";
import data2026 from "@/data/2026.json";
import { IMPACT } from "@/data/impact";
import { formatISORange } from "@/lib/format";
import { CURRENT, LINKS } from "@/lib/site";
import "./seasons.css";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Seasons",
  description:
    "Every BizBuzz season since 2024: the camps, Fish Tank competitions, workshops, and business fairs, with dates, places, student numbers, stories, and photos.",
  path: "/seasons",
});

type Program = {
  id: string;
  kind: string;
  title: string;
  dateISO?: string | null;
  endISO?: string;
  when?: string;
  venue?: string;
  attendance: number | string;
  description: string;
  images: string[];
};
type Event = { id: string; dateISO: string; endISO?: string; label: string; detail: string };
type Story = { id: string; role: string; name: string; headline: string; body: string; image?: string };
type Partner = { name: string; logo: string | null; href?: string };
type Season = {
  year: number;
  summary: string;
  kpis: { students: number; sessions: number; programsRun: number; officeHours: number };
  programs: Program[];
  timeline: Event[];
  stories: Story[];
  partners: Partner[];
  gallery: string[];
};

const SEASONS = [data2026, data2025, data2024] as unknown as Season[];
const SEASON_STUDENTS = SEASONS.reduce((n, s) => n + s.kpis.students, 0);

const META: Record<number, { title: string; photo: { src: string; alt: string; caption: string; position?: string }; camp: string; fishTank: string }> = {
  2026: {
    title: "Two camps side by side",
    photo: {
      src: "/camp_imgs/2026/session2vl/session2vlb.jpg",
      alt: "KidPreneur and VentureLab campers together in a large library meeting room",
      caption: "The 2026 campers at Nichols Library, June 12, 2026.",
    },
    camp: "/camps/2026",
    fishTank: "/fish-tank/2026",
  },
  2025: {
    title: "A bigger stage at Benedictine University",
    photo: {
      src: "/fish_tank/2025/images/gallery-stage.jpg",
      alt: "Fish Tank 2025 trophies lined up in front of the event poster",
      caption: "The Fish Tank 2025 trophies at Benedictine University, August 2025.",
    },
    camp: "/camps/2025",
    fishTank: "/fish-tank/2025",
  },
  2024: {
    title: "Where it started",
    photo: {
      src: "/fish_tank/overall.jpg",
      alt: "The 2024 Fish Tank winners holding their prize checks at College of DuPage",
      caption: "The first Fish Tank winners, College of DuPage, July 25, 2024.",
    },
    camp: "/camps/2024",
    fishTank: "/fish-tank/2024",
  },
};

/** Short marks for partners without a logo file. */
const PARTNER_ABBR: Record<string, string> = {
  "College of DuPage": "COD",
  "Naperville Public Libraries": "NPL",
};

/** Files that repeat a photo already shown in the same season. */
const DUPLICATES = new Set(["/image_gallery/2.jpg"]);

function dateRange(start?: string | null, end?: string, fallback?: string) {
  return start ? formatISORange(start, end) : (fallback ?? "");
}

/** Plain descriptions for season photos, based on where each file lives. */
function describe(src: string, year: number) {
  if (src.startsWith("/fish_tank/2025/")) return "Fish Tank 2025 at Benedictine University";
  if (src.startsWith("/fish_tank/")) return "Fish Tank 2024 at College of DuPage";
  if (src.startsWith("/camp_imgs/landing/") || src.startsWith("/image_gallery/")) return "The 2024 summer camp";
  if (src.startsWith("/workshops/be/")) return "Brookdale Elementary workshops, fall 2024";
  if (src.startsWith("/workshops/dcbf/")) return "DuPage Children's Business Fair workshops, spring 2025";
  const session = src.match(/session(\d)(kp|vl)?/);
  if (session) {
    const track = session[2] === "kp" ? " KidPreneur" : session[2] === "vl" ? " VentureLab" : "";
    return `${year}${track} camp, Session ${session[1]}`;
  }
  return `The ${year} season`;
}

function people(n: number | string) {
  return `${n} ${n === 1 ? "student" : "students"}`;
}

export default function SeasonsPage() {
  return (
    <>
      <PageHero
        title="Every season since 2024"
        lead={
          <p>
            Explore the growth and impact of BizBuzz across each season: what we ran, when and where, how many students
            took part, and the people and partners who made it happen.
          </p>
        }
        facts={
          <nav aria-label="Seasons" className="season-index">
            <ul>
              <li>
                <Link href="/camps" className="season-index__link season-index__link--next">
                  <span className="season-index__year num">{CURRENT.campYear}</span>
                  <span className="season-index__note">Summer camp · {CURRENT.campStatus}</span>
                </Link>
              </li>
              {SEASONS.map((s) => (
                <li key={s.year}>
                  <a href={`#${s.year}`} className="season-index__link">
                    <span className="season-index__year num">{s.year}</span>
                    <span className="season-index__note">{META[s.year].title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        }
      />

      {/* ----------------------------------------------------------- Compare */}
      <section className="section" id="compare" aria-labelledby="compare-title">
        <div className="container compare">
          <div className="compare__head">
            <h2 id="compare-title">Seasons at a glance</h2>
            <p className="muted">
              Sessions and hours of mentoring add up to the all-time totals ({IMPACT.sessions} sessions and{" "}
              {IMPACT.officeHours} hours). Students are counted separately each season, so the seasons add up to{" "}
              {SEASON_STUDENTS.toLocaleString()} while the all-time figure on our About page is{" "}
              {IMPACT.students.toLocaleString()}+.
            </p>
          </div>
          <div className="compare__table" role="region" aria-label="Season figures table" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Season</th>
                  <th scope="col" className="num-cell">Students</th>
                  <th scope="col" className="num-cell">Sessions</th>
                  <th scope="col" className="num-cell">Programs</th>
                  <th scope="col" className="num-cell">Hours of mentoring</th>
                </tr>
              </thead>
              <tbody>
                {SEASONS.map((s) => (
                  <tr key={s.year}>
                    <th scope="row">
                      <a href={`#${s.year}`}>{s.year}</a>
                    </th>
                    <td className="num-cell">{s.kpis.students}</td>
                    <td className="num-cell">{s.kpis.sessions}</td>
                    <td className="num-cell">{s.kpis.programsRun}</td>
                    <td className="num-cell">{s.kpis.officeHours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Seasons */}
      {SEASONS.map((s, index) => {
        const meta = META[s.year];
        const gallery = s.gallery.filter((src) => src !== meta.photo.src && !DUPLICATES.has(src));
        return (
          <section
            key={s.year}
            id={String(s.year)}
            className={index % 2 === 0 ? "section season-block section--paper" : "section season-block"}
            aria-labelledby={`season-${s.year}`}
          >
            <div className="container">
              <div className="season-block__top">
                <div className="season-block__intro">
                  <h2 id={`season-${s.year}`}>
                    <span className="season-block__year num">{s.year}</span>
                    <span className="season-block__title">{meta.title}</span>
                  </h2>
                  <p>{s.summary}</p>
                  <Scoreboard
                    label={`${s.year} in numbers`}
                    items={[
                      { value: String(s.kpis.students), label: "students" },
                      { value: String(s.kpis.sessions), label: "sessions" },
                      { value: String(s.kpis.programsRun), label: "programs" },
                      { value: String(s.kpis.officeHours), label: "hours of mentoring" },
                    ]}
                  />
                  <div className="actions">
                    <GoLink href={meta.camp}>The {s.year} camp</GoLink>
                    <GoLink href={meta.fishTank}>Fish Tank {s.year}</GoLink>
                  </div>
                </div>
                <Photo
                  className="season-block__photo"
                  src={meta.photo.src}
                  alt={meta.photo.alt}
                  caption={meta.photo.caption}
                  ratio="4 / 3"
                  sizes="(max-width: 900px) 100vw, 44vw"
                  position={meta.photo.position}
                />
              </div>

              <div className="season-block__detail">
                <div className="season-timeline">
                  <h3>Timeline</h3>
                  <ol>
                    {s.timeline.map((e) => (
                      <li key={e.id}>
                        <time dateTime={e.dateISO}>{dateRange(e.dateISO, e.endISO)}</time>
                        <p className="season-timeline__label">{e.label}</p>
                        <p className="season-timeline__detail">{e.detail}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="season-programs">
                  <h3>
                    {s.programs.length} {s.programs.length === 1 ? "program" : "programs"}
                  </h3>
                  <ul className="program-index">
                    {s.programs.map((p) => (
                      <li key={p.id}>
                        <span className="program-index__title">{p.title}</span>
                        <span className="program-index__meta">
                          {dateRange(p.dateISO, p.endISO, p.when)}
                          {p.venue ? ` · ${p.venue}` : ""} · {people(p.attendance)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Disclosure summary={<>Program details and photos for {s.year}</>} className="season-programs__more">
                    <ul className="program-list">
                      {s.programs.map((p) => (
                        <li key={p.id} id={p.id}>
                          <h4>{p.title}</h4>
                          <p className="program-list__meta">
                            {dateRange(p.dateISO, p.endISO, p.when)}
                            {p.venue ? ` · ${p.venue}` : ""} · {people(p.attendance)}
                          </p>
                          <p>{p.description}</p>
                          {p.images.length > 0 && (
                            <Gallery
                              images={p.images.map((src, i) => ({
                                src,
                                alt: `${p.title}, photo ${i + 1}`,
                                caption: `${p.title}, ${dateRange(p.dateISO, p.endISO, p.when)}.`,
                              }))}
                              label={`${p.title} photos`}
                              thumb={120}
                              sizes="(max-width: 700px) 33vw, 180px"
                              className="program-list__photos"
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  </Disclosure>
                </div>
              </div>

              {s.stories.length > 0 && (
                <div className="season-stories">
                  <h3>Stories from {s.year}</h3>
                  <ul>
                    {s.stories.map((story) => (
                      <li key={story.id} className="season-story">
                        {story.image && (
                          <div className="season-story__photo">
                            <Image src={story.image} alt="" fill sizes="(max-width: 700px) 30vw, 160px" />
                          </div>
                        )}
                        <div>
                          <p className="season-story__who">
                            {story.name} · {story.role === "mentor" ? "Mentor" : "Student"}
                          </p>
                          <h4>{story.headline}</h4>
                          <p>{story.body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {s.partners.length > 0 && (
                <div className="season-partners">
                  <h3>{s.year} partners</h3>
                  <ul>
                    {s.partners.map((partner) => {
                      const body = (
                        <>
                          <span className="season-partners__logo" aria-hidden="true">
                            {partner.logo ? (
                              <Image src={partner.logo} alt="" fill sizes="56px" />
                            ) : (
                              <span>{PARTNER_ABBR[partner.name] ?? partner.name.slice(0, 2)}</span>
                            )}
                          </span>
                          <span className="season-partners__name">{partner.name}</span>
                        </>
                      );
                      return (
                        <li key={partner.name}>
                          {partner.href ? (
                            <a href={partner.href} target="_blank" rel="noopener noreferrer">
                              {body}
                              <span className="visually-hidden"> (opens in a new tab)</span>
                            </a>
                          ) : (
                            <span className="season-partners__item">{body}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {gallery.length > 0 && (
                <div className="season-gallery">
                  <h3>Photos from {s.year}</h3>
                  <Gallery
                    images={gallery.map((src) => ({ src, alt: describe(src, s.year), caption: `${describe(src, s.year)}.` }))}
                    label={`${s.year} season photos`}
                    thumb={180}
                    sizes="(max-width: 700px) 50vw, 240px"
                  />
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* --------------------------------------------------------------- Next */}
      <section className="section section--navy" aria-labelledby="next-title">
        <div className="container cta-band">
          <h2 id="next-title">Summer {CURRENT.campYear} is next</h2>
          <div>
            <p className="lead">
              Registration for the {CURRENT.campYear} camp is open. It is free, for students in grades 3 to 8, and taught by
              high school students.
            </p>
            <div className="actions">
              <Button href={LINKS.campRegistration}>Register for the {CURRENT.campYear} camp</Button>
              <GoLink href="/camps">About the camp</GoLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
