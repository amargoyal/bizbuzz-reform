import { Gallery } from "@/components/ui/Gallery";
import { SpeakerCard } from "./SpeakerCard";
import { sessionCaption, sessionNumber, type CampTrack } from "@/data/camps";
import { cleanDate } from "@/lib/format";

/** Every session of one camp track, in order, with speakers and photos. */
export function SessionList({ track, trackName, year }: { track: CampTrack; trackName: string | null; year: number }) {
  return (
    <ol className="sessions">
      {track.sessions.map((s) => {
        const n = sessionNumber(s.id);
        // Some sessions reuse photos from an earlier summer. Say so instead of
        // captioning them with this session's date and place.
        const photoYear = (src: string) => Number(src.match(/\/camp_imgs\/(\d{4})\//)?.[1] ?? year);
        const borrowedFrom = s.images.length > 0 && s.images.every((src) => photoYear(src) !== year) ? photoYear(s.images[0]) : null;
        const images = s.images.map((src, i) =>
          photoYear(src) !== year
            ? { src, alt: `A ${photoYear(src)} camp session, photo ${i + 1}`, caption: `From the ${photoYear(src)} camp.` }
            : {
                src,
                alt: `${trackName ? trackName + " " : ""}Session ${n}, photo ${i + 1}`,
                caption: sessionCaption(trackName, s),
              },
        );
        return (
          <li className="session" id={s.id} key={s.id}>
            <p className="session__num num" aria-hidden="true">
              {String(n).padStart(2, "0")}
            </p>
            <div className="session__main">
              <p className="session__meta">
                <span>Session {n}</span>
                <span>{cleanDate(s.date)}</span>
                <span>{s.location}</span>
              </p>
              <h3>
                <span className="visually-hidden">
                  {year} {trackName ? `${trackName} ` : ""}Session {n}:{" "}
                </span>
                {s.title}
              </h3>
              <p className="session__desc">{s.description}</p>
            </div>
            {(s.speaker || s.speaker2) && (
              <div className="session__speakers">
                {s.speaker && <SpeakerCard speaker={s.speaker} label="Featured speaker" />}
                {s.speaker2 && <SpeakerCard speaker={s.speaker2} label="Guest speaker" />}
              </div>
            )}
            {images.length > 0 && (
              <div className="session__photos">
                {borrowedFrom && <p className="session__photo-note">Photos from the {borrowedFrom} camp</p>}
                <Gallery
                  images={images}
                  label={`Session ${n} photos`}
                  thumb={150}
                  sizes="(max-width: 700px) 45vw, 220px"
                />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
