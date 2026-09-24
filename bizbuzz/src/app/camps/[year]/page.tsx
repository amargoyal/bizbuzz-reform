import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, GoLink } from "@/components/ui/Button";
import { Facts } from "@/components/ui/Facts";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { PrevNext, YearNav } from "@/components/ui/YearNav";
import { Scoreboard } from "@/components/ui/Scoreboard";
import { SessionList } from "@/components/camps/SessionList";
import { TrackTabs } from "@/components/camps/TrackTabs";
import { CAMP_YEARS, getCampYear } from "@/data/camps";
import { CURRENT, LINKS } from "@/lib/site";
import "../camps.css";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ year: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CAMP_YEARS.map((y) => ({ year: String(y.year) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { year } = await params;
  const cy = getCampYear(Number(year));
  if (!cy) return {};
  return pageMetadata({
    title: `Summer Camp ${cy.year}`,
    description: `The ${cy.year} BizBuzz summer entrepreneurship camp in Naperville: ${cy.dates}. Every session, guest speaker, and photo.`,
    path: `/camps/${cy.year}`,
    image: { url: cy.heroPhoto.src, alt: cy.heroPhoto.alt },
  });
}

export default async function CampYearPage({ params }: Params) {
  const { year } = await params;
  const cy = getCampYear(Number(year));
  if (!cy) notFound();

  const years = [...CAMP_YEARS].sort((a, b) => a.year - b.year);
  const i = years.findIndex((y) => y.year === cy.year);
  const prev = years[i - 1];
  const next = years[i + 1];
  const multiTrack = cy.tracks.length > 1;

  return (
    <>
      <PageHero
        parent={{ label: "Summer camp", href: "/camps" }}
        title={cy.title}
        lead={
          <>
            <p>{cy.intro}</p>
            <p className="muted">{cy.detail}</p>
          </>
        }
        actions={
          <>
            <Button href={`/fish-tank/${cy.year}`} variant="dark">
              Fish Tank {cy.year}
            </Button>
            <GoLink href="#sessions">Every session</GoLink>
          </>
        }
        media={
          <Photo
            src={cy.heroPhoto.src}
            alt={cy.heroPhoto.alt}
            caption={cy.heroPhoto.caption}
            ratio="4 / 3"
            sizes="(max-width: 900px) 100vw, 40vw"
            position={cy.heroPhoto.position}
            priority
          />
        }
        facts={
          <>
            <Facts
              items={[
                { label: "Dates", value: cy.dates },
                { label: "Where", value: cy.venues },
                { label: "Grades", value: cy.tracks.length > 1 ? "3 to 9, in two tracks" : "3 to 8" },
              ]}
            />
            <Scoreboard items={cy.stats} label={`${cy.title} in numbers`} />
          </>
        }
      />

      <div className="container camp-yearnav">
        <YearNav
          label="Camp seasons"
          current={`/camps/${cy.year}`}
          entries={[
            ...[...CAMP_YEARS].sort((a, b) => a.year - b.year).map((y) => ({ label: String(y.year), href: `/camps/${y.year}` })),
            { label: String(CURRENT.campYear), href: "/camps", note: "Open" },
          ]}
        />
      </div>

      <section className="section" id="sessions" aria-labelledby="sessions-title">
        <div className="container">
          <div className="sh">
            <h2 id="sessions-title">{multiTrack ? "Two tracks, side by side" : `${cy.tracks[0].data.sessions.length} sessions`}</h2>
            <p>
              {multiTrack
                ? "Pick a track to see its sessions. Both met every week at the same libraries and finished at Fish Tank."
                : "Each session built on the one before it. Open any photo to see it full size."}
            </p>
          </div>

          {multiTrack ? (
            <>
              <ul className="track-compare">
                {cy.tracks.map((t) => (
                  <li key={t.id}>
                    <p className="track-compare__name display">{t.name}</p>
                    {t.grades && <p className="track-compare__grades">{t.grades}</p>}
                    <p>{t.blurb}</p>
                  </li>
                ))}
              </ul>
              <TrackTabs
                label={`${cy.year} camp tracks`}
                tabs={cy.tracks.map((t) => ({
                  id: t.id,
                  label: t.name,
                  note: t.grades,
                  prefixes: [t.id === "kidpreneur" ? "kp-" : "vl-"],
                  content: <SessionList track={t.data} trackName={t.name} year={cy.year} />,
                }))}
              />
            </>
          ) : (
            <SessionList track={cy.tracks[0].data} trackName={null} year={cy.year} />
          )}
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="after-title">
        <div className="container cta-band">
          <h2 id="after-title">Then came Fish Tank {cy.year}</h2>
          <div>
            <p className="lead">
              Camp ends with Fish Tank, where students pitch the businesses they built to a panel of judges.
            </p>
            <div className="actions">
              <Button href={`/fish-tank/${cy.year}`} variant="dark">
                See Fish Tank {cy.year}
              </Button>
              <GoLink href={`/seasons#${cy.year}`}>The whole {cy.year} season</GoLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="More camp seasons">
        <div className="container">
          <PrevNext
            prev={prev ? { label: `Summer camp ${prev.year}`, href: `/camps/${prev.year}` } : undefined}
            next={next ? { label: `Summer camp ${next.year}`, href: `/camps/${next.year}` } : { label: `Summer camp ${CURRENT.campYear}`, href: "/camps" }}
          />
          <div className="camp-register">
            <p>
              <strong>Summer {CURRENT.campYear} registration is open.</strong> Free for grades 3 to 8 in Naperville.
            </p>
            <Button href={LINKS.campRegistration}>Register for {CURRENT.campYear}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
