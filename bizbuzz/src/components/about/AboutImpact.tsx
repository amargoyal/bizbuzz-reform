import { IMPACT_STATS, PROGRAM_PARTICIPATION, SCHOOL_DIRECTORY } from "@/data/impact";
import { Stat } from "@/components/ds/Card";

const highlights = new Set(["Students Taught", "Schools Engaged", "Student Staff"]);

export default function AboutImpact() {
  return (
    <section id="impact" className="bb-about-section bb-container" aria-labelledby="impact-heading">
      <div className="bb-about-section-heading">
        <h2 id="impact-heading" className="bb-display-2">Our impact since 2024</h2>
        <p className="bb-body">Free camps, competitions and workshops across Chicagoland.</p>
      </div>
      <div className="bb-about-highlights">
        {IMPACT_STATS.filter((stat) => highlights.has(stat.label)).map((stat) => <Stat key={stat.label} value={stat.value} label={stat.label} note={stat.description} />)}
      </div>
      <div className="bb-about-records">
        <details className="bb-details">
          <summary>Funding, mentoring and program totals</summary>
          <dl className="bb-about-figures">
            {IMPACT_STATS.filter((stat) => !highlights.has(stat.label)).map((stat) => (
              <div key={stat.label}><dt>{stat.label}<span>{stat.description}</span></dt><dd>{stat.value}</dd></div>
            ))}
          </dl>
        </details>
        <details className="bb-details">
          <summary>Participation by program</summary>
          <dl className="bb-data-list">{PROGRAM_PARTICIPATION.map((program) => <div key={program.label}><dt>{program.label}</dt><dd>{program.total} students</dd></div>)}</dl>
        </details>
        <details className="bb-details">
          <summary>Schools and districts we serve</summary>
          <div className="bb-about-school-list">
            {SCHOOL_DIRECTORY.map((group) => <section key={group.title}><h3 className="bb-display-4">{group.title}</h3><ul className="bb-directory">{group.items.map((name) => <li key={name}>{name}</li>)}</ul></section>)}
          </div>
        </details>
      </div>
    </section>
  );
}
