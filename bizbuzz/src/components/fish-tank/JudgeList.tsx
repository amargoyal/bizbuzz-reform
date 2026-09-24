import Image from "next/image";
import { More } from "@/components/ui/Disclosure";
import type { Judge } from "@/data/fishTank";
import { initials } from "@/lib/format";

/** A panel of judges with photos, titles, and bios. */
export function JudgeList({ judges }: { judges: Judge[] }) {
  return (
    <ul className="people">
      {judges.map((j) => (
        <li className="person" key={j.name}>
          <div className="person__photo">
            {j.image ? (
              <Image src={j.image} alt="" fill sizes="88px" />
            ) : (
              <span className="person__initials" aria-hidden="true">
                {initials(j.name)}
              </span>
            )}
          </div>
          <div>
            <p className="person__name">{j.name}</p>
            <p className="person__role">{j.title.replace(/ @ /g, ", ").replace(/ · /g, ", ")}</p>
            {j.bio && (
              <More summary="Read bio">
                <p>{j.bio}</p>
              </More>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
