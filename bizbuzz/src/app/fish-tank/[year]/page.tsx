import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button, GoLink, TextLink } from "@/components/ui/Button";
import { Facts } from "@/components/ui/Facts";
import { Gallery } from "@/components/ui/Gallery";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { PrevNext, YearNav } from "@/components/ui/YearNav";
import { Scoreboard } from "@/components/ui/Scoreboard";
import { JudgeList } from "@/components/fish-tank/JudgeList";
import { FISH_TANK_HERO, FISH_TANK_YEARS, getFishTankYear } from "@/data/fishTank";
import { money, placeShort } from "@/lib/format";
import { CURRENT } from "@/lib/site";
import "../fish-tank.css";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ year: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return FISH_TANK_YEARS.map((y) => ({ year: String(y.year) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { year } = await params;
  const ft = getFishTankYear(Number(year));
  if (!ft) return {};
  const where = ft.meta.venue ? ` at ${ft.meta.venue}` : "";
  const hero = FISH_TANK_HERO[ft.year];
  return pageMetadata({
    title: ft.meta.title,
    description:
      ft.year === 2026 && ft.meta.note
        ? `${ft.meta.note} Students pitch real businesses to real judges.`
        : `${ft.meta.title}${where}, ${ft.meta.dates}: winners, judges, prizes, and photos from the BizBuzz youth pitch competition.`,
    path: `/fish-tank/${ft.year}`,
    image: hero ? { url: hero.src, alt: hero.alt } : undefined,
  });
}

export default async function FishTankYearPage({ params }: Params) {
  const { year } = await params;
  const ft = getFishTankYear(Number(year));
  if (!ft) notFound();
  const { meta } = ft;
  const hero = FISH_TANK_HERO[ft.year];

  const ordered = [...FISH_TANK_YEARS].sort((a, b) => a.year - b.year);
  const i = ordered.findIndex((y) => y.year === ft.year);
  const prev = ordered[i - 1];
  const next = ordered[i + 1];

  const venue = meta.venue ? (
    <>
      {meta.venueUrl ? <TextLink href={meta.venueUrl}>{meta.venue}</TextLink> : meta.venue}
      {meta.city ? `, ${meta.city}` : ""}
    </>
  ) : null;

  const [first, ...rest] = ft.winners;
  const captions = ft.captions ?? {};
  const gallery = ft.gallery.map((src, n) => ({
    src,
    alt: captions[src] ?? `${meta.title}, photo ${n + 1}`,
    caption: captions[src] ? `${captions[src]}. ${meta.title}.` : meta.title,
  }));

  return (
    <>
      <PageHero
        parent={{ label: "Fish Tank", href: "/fish-tank" }}
        title={meta.title}
        lead={
          <>
            <p>{meta.summary}</p>
            {meta.note && <p className="muted">{meta.note}</p>}
          </>
        }
        actions={
          <>
            <Button href={`/camps/${ft.year}`} variant="dark">
              Summer camp {ft.year}
            </Button>
            {ft.winners.length > 0 && <GoLink href="#winners">Winners</GoLink>}
          </>
        }
        media={
          hero && (
            <Photo src={hero.src} alt={hero.alt} caption={hero.caption} ratio="4 / 3" sizes="(max-width: 900px) 100vw, 40vw" position={hero.position} priority />
          )
        }
        facts={
          <>
            <Facts
              items={[
                { label: "When", value: meta.dates },
                ...(venue ? [{ label: "Where", value: venue }] : []),
                { label: "Who", value: meta.eligibility },
              ]}
            />
            <Scoreboard items={meta.stats} label={`${meta.title} in numbers`} />
          </>
        }
      />

      <div className="container ft-yearnav">
        <YearNav
          label="Fish Tank seasons"
          current={`/fish-tank/${ft.year}`}
          entries={ordered.map((y) => ({ label: String(y.year), href: `/fish-tank/${y.year}` }))}
        />
      </div>

      {/* ------------------------------------------------------------- Format */}
      {(meta.steps || meta.tracks) && (
        <section className="section" aria-labelledby="format-title">
          <div className="container">
            <div className="sh">
              <h2 id="format-title">{meta.tracks ? "Two divisions" : "How it worked"}</h2>
              <p>
                {meta.tracks
                  ? `${meta.title} featured two separate tracks so every young entrepreneur competed against peers at their level.`
                  : (meta.formatIntro ?? `${meta.edition}, ${meta.dates}.`)}
              </p>
            </div>
            {meta.steps && (
              <ol className="steps">
                {meta.steps.map((s, n) => (
                  <li key={s.title} className="step">
                    <p className="step__n num" aria-hidden="true">
                      {n + 1}
                    </p>
                    <div>
                      <h3>{s.title}</h3>
                      {s.date && <p className="step__date">{s.date}</p>}
                      {s.body && <p>{s.body}</p>}
                      {s.points && (
                        <ul className="step__points">
                          {s.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            )}
            {meta.tracks && (
              <ul className="divisions">
                {meta.tracks.map((t) => (
                  <li key={t.title}>
                    <h3>{t.title}</h3>
                    <p className="divisions__for">{t.for}</p>
                    <p>{t.body}</p>
                    <p className="divisions__when">Held summer {ft.year}</p>
                  </li>
                ))}
              </ul>
            )}
            {meta.highlights && (
              <ul className="highlights">
                {meta.highlights.map((h) => (
                  <li key={h.title}>
                    <h3>{h.title}</h3>
                    <p>{h.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------ Winners */}
      {first && (
        <section className="section section--navy" id="winners" aria-labelledby="winners-title">
          <div className="container">
            <div className="sh">
              <h2 id="winners-title">{ft.year} winners</h2>
              <p>
                Celebrating the innovations that rose to the surface with bold ideas, polished presentations, and the
                potential to make waves far beyond our tank.
              </p>
            </div>
            <article className="ft-first">
              <Photo src={first.image} alt={`${first.team} with the ${first.project} first-place check`} ratio="4 / 3" sizes="(max-width: 900px) 100vw, 50vw" position="50% 30%" />
              <div className="ft-first__text">
                <p className="ft-place">
                  <span className="num">1st</span> place{first.prize ? ` · ${money(first.prize)}` : ""}
                </p>
                <h3>{first.project}</h3>
                <p className="ft-team">{first.team}</p>
                <p className="ft-desc">{first.description}</p>
              </div>
            </article>
            <ol className="ft-rest">
              {rest.map((w) => (
                <li key={w.project}>
                  <div className="ft-rest__photo">
                    <Image src={w.image} alt={`${w.team}, ${w.project}`} fill sizes="(max-width: 700px) 100vw, 25vw" style={{ objectPosition: "50% 30%" }} />
                  </div>
                  <p className="ft-place">
                    <span className="num">{placeShort(w.placement)}</span> place{w.prize ? ` · ${money(w.prize)}` : ""}
                  </p>
                  <h3>{w.project}</h3>
                  <p className="ft-team">{w.team}</p>
                  <p className="ft-desc">{w.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- Judges */}
      {ft.judges.length > 0 && (
        <section className="section" id="judges" aria-labelledby="judges-title">
          <div className="container">
            <div className="sh">
              <h2 id="judges-title">The judges</h2>
              <p>
                {ft.judges.reduce((n, g) => n + g.judges.length, 0)} judges across a preliminary round and a final round.
              </p>
            </div>
            {ft.judges.map((g) => (
              <div className="judge-group" key={g.title}>
                <h3 className="judge-group__title">{g.title}</h3>
                {g.intro && <p className="judge-group__intro">{g.intro}</p>}
                <JudgeList judges={g.judges} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------ Gallery */}
      {gallery.length > 0 && (
        <section className="section section--paper" id="photos" aria-labelledby="photos-title">
          <div className="container">
            <div className="sh">
              <h2 id="photos-title">Photos</h2>
              <p>{gallery.length} photos from {meta.title}. Select any photo to see it full size.</p>
            </div>
            <Gallery images={gallery} label={`${meta.title} photos`} thumb={220} />
          </div>
        </section>
      )}

      <section className="section section--tight" aria-label="More Fish Tank seasons">
        <div className="container">
          <PrevNext
            prev={prev ? { label: prev.meta.title, href: `/fish-tank/${prev.year}` } : undefined}
            next={next ? { label: next.meta.title, href: `/fish-tank/${next.year}` } : { label: `Fish Tank ${CURRENT.fishTankYear}`, href: "/fish-tank" }}
          />
        </div>
      </section>
    </>
  );
}
