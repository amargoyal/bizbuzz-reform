import Image from "next/image";
import { ArrowCTA } from "@/components/ds/Button";

export type ProgramPanel = {
  title: string;
  audience: string;
  blurb: string;
  chips: string[];
  linkLabel: string;
  href: string;
  bg: string;
  bgAlt: string;
};

export default function ProgramPanels({ programs }: { programs: ProgramPanel[] }) {
  return (
    <section id="programs" className="bb-program-overview bb-container" aria-labelledby="program-heading">
      <div className="bb-program-heading">
        <h2 id="program-heading" className="bb-display-2">Find your program</h2>
        <p className="bb-body">Every program is free. Choose a place to start, or bring an idea you already have.</p>
      </div>
      <div className="bb-program-options">
        {programs.map((program) => (
          <article key={program.title} className="bb-program-option">
            <div className="bb-program-photo">
              <Image src={program.bg} alt={program.bgAlt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 35vw, 22vw" />
            </div>
            <div className="bb-program-copy">
              <p className="bb-caption">{program.audience}</p>
              <h3 className="bb-display-3">{program.title}</h3>
              <p className="bb-body-sm">{program.blurb}</p>
              <ul className="bb-program-meta">
                {program.chips.map((fact) => <li key={fact}>{fact}</li>)}
              </ul>
              <ArrowCTA href={program.href}>{program.linkLabel}</ArrowCTA>
            </div>
          </article>
        ))}
      </div>
      <div className="bb-program-help">
        <p className="bb-body-sm">For parents: explore session locations, weekly updates and how to prepare.</p>
        <ArrowCTA href="/office-hours#faqs">Read the parent FAQs</ArrowCTA>
      </div>
    </section>
  );
}
