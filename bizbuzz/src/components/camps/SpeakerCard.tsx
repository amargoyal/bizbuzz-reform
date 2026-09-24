import Image from "next/image";
import { More } from "@/components/ui/Disclosure";
import type { Speaker } from "@/data/camps";
import { initials } from "@/lib/format";

/** A guest speaker at one session: photo, name, role, talk title, and bio. */
export function SpeakerCard({ speaker, label }: { speaker: Speaker; label: string }) {
  return (
    <div className="speaker">
      <div className="speaker__photo">
        {speaker.image ? (
          <Image src={speaker.image} alt="" fill sizes="96px" />
        ) : (
          <span className="person__initials" aria-hidden="true">
            {initials(speaker.name)}
          </span>
        )}
      </div>
      <div className="speaker__text">
        <p className="speaker__label">{label}</p>
        <p className="speaker__name">{speaker.name}</p>
        <p className="speaker__role">{speaker.role}</p>
        {speaker.topic && <p className="speaker__topic">&ldquo;{speaker.topic}&rdquo;</p>}
        {speaker.bio && (
          <More summary="About the talk">
            <p>{speaker.bio}</p>
          </More>
        )}
      </div>
    </div>
  );
}
