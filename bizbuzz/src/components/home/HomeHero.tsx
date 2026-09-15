import Image from "next/image";
import { ArrowCTA, Button } from "@/components/ds/Button";
import { LINKS } from "@/lib/site";

export default function HomeHero() {
  return (
    <section className="bb-home-hero bb-container">
      <div className="bb-home-intro">
        <h1 className="bb-display-1">Build your first <span className="bb-brand-text">business.</span></h1>
        <p className="bb-lead">Free entrepreneurship programs for grades 3–8 in Naperville, Illinois. Learn from student instructors, develop an idea, and put it into practice.</p>
        <div className="bb-home-actions">
          <Button size="lg" href={LINKS.campRegistration} target="_blank" rel="noopener noreferrer">Register for 2027 camp</Button>
          <ArrowCTA href="#programs">Find your program</ArrowCTA>
        </div>
        <p className="bb-caption">Student-run nonprofit · No business experience needed</p>
      </div>
      <figure className="bb-home-photo">
        <div>
          <Image src="/camp_imgs/landing/center.jpg" alt="Students raising their hands during a BizBuzz camp activity" fill priority sizes="(max-width: 800px) 100vw, 55vw" />
        </div>
        <figcaption>Ideas take shape together at BizBuzz camp.</figcaption>
      </figure>
    </section>
  );
}
