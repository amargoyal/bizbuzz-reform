import Image from "next/image";
import type { CSSProperties } from "react";
import { PEOPLE } from "@/data/team";

type Member = { name: string; role: string; image: string; description: string; customPosition?: string; customImageStyle?: CSSProperties };
const currentTeam = [...PEOPLE.coFounders2026, ...PEOPLE.leadershipTeam2026];
const founders = currentTeam.filter((person) => person.role === "Co-Founder");
const leadership = currentTeam.filter((person) => person.role !== "Co-Founder");

function MemberList({ members }: { members: Member[] }) {
  return (
    <div className="bb-about-members">
      {members.map((person) => (
        <article key={person.name} className="bb-about-member">
          <div className="bb-about-member-intro">
            <div className="bb-about-portrait"><Image src={person.image} alt={person.name} fill sizes="112px" style={{ objectFit: "cover", objectPosition: person.customPosition ?? "center", ...person.customImageStyle }} /></div>
            <div><h4 className="bb-display-4">{person.name}</h4><p className="bb-caption">{person.role}</p></div>
          </div>
          <details className="bb-details"><summary>About {person.name}</summary><p className="bb-body-sm">{person.description}</p></details>
        </article>
      ))}
    </div>
  );
}

export default function AboutTeam() {
  return (
    <section id="team" className="bb-about-team" aria-labelledby="team-heading">
      <div className="bb-container">
        <div className="bb-about-section-heading">
          <h2 id="team-heading" className="bb-display-2">Meet the student team</h2>
          <p className="bb-body">The people organizing our programs, teaching sessions and helping students develop their ideas.</p>
        </div>
        <div className="bb-about-team-group">
          <h3 className="bb-display-3">2026 leadership</h3>
          <MemberList members={leadership} />
        </div>
        <div className="bb-about-team-group">
          <h3 className="bb-display-3">Our co-founders</h3>
          <MemberList members={founders} />
        </div>
        <div className="bb-about-rosters">
          <section aria-labelledby="instructors-heading">
            <h3 id="instructors-heading" className="bb-display-3">Instructors</h3>
            {PEOPLE.instructors.map((person) => <details key={person.name} className="bb-details"><summary>{person.name}</summary><p className="bb-body-sm">{person.description}</p></details>)}
          </section>
          <section aria-labelledby="youth-heading">
            <h3 id="youth-heading" className="bb-display-3">Youth leadership</h3>
            {PEOPLE.youthLeadership.map((person) => <details key={person.name} className="bb-details"><summary>{person.name}</summary><p className="bb-body-sm">{person.description}</p></details>)}
          </section>
        </div>
        <details className="bb-details bb-about-team-archive">
          <summary>2025 leadership archive</summary>
          <div className="bb-about-archive-list">
            {[...PEOPLE.coFounders, ...PEOPLE.leadershipTeam].map((person) => <article key={person.name}><h3 className="bb-display-4">{person.name}</h3><p className="bb-caption">{person.role}</p><p className="bb-body-sm">{person.description}</p></article>)}
          </div>
        </details>
      </div>
    </section>
  );
}
