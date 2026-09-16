import Image from "next/image";
import { ArrowCTA } from "@/components/ds/Button";

export default function AboutIntro() {
  return (
    <section id="story" className="bb-about-intro bb-container">
      <div className="bb-about-story">
        <h1 className="bb-display-1">Business education, <span className="bb-brand-text">led by students</span></h1>
        <p className="bb-lead">Allen Xu and Aarav Khullar founded BizBuzz in April 2024 as juniors at Naperville North High School.</p>
        <p className="bb-body">After finding that 90% of local K–8 schools offered no business education, they created a place for younger students to develop an idea and the confidence to share it.</p>
        <p className="bb-body">Today, BizBuzz NFP is a 501(c)(3) nonprofit serving Chicagoland through free camps, workshops and pitch competitions. Students design the programs, teach the sessions and mentor the next group of young entrepreneurs.</p>
        <ArrowCTA href="/#programs">Explore our programs</ArrowCTA>
      </div>
      <figure className="bb-about-team-photo">
        <div><Image src="/about/background.jpg" alt="The BizBuzz team and students together" fill priority sizes="(max-width: 900px) 100vw, 45vw" /></div>
        <figcaption>Our student team, together at a BizBuzz event.</figcaption>
      </figure>
    </section>
  );
}
