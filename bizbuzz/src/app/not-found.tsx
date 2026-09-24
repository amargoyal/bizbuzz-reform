import type { Metadata } from "next";
import Link from "next/link";
import { Button, GoLink } from "@/components/ui/Button";
import { CURRENT, LINKS } from "@/lib/site";
import "./not-found.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const PLACES = [
  { href: "/camps", label: "Summer camp", note: `${CURRENT.campYear} registration is open` },
  { href: "/fish-tank", label: "Fish Tank", note: "The pitch competition" },
  { href: "/workshops", label: "Workshops", note: "For schools and business fairs" },
  { href: "/office-hours", label: "Office hours & FAQs", note: "Free 1-on-1 help and answers" },
  { href: "/about", label: "About us", note: "Our mission, team, and news" },
  { href: "/sponsors", label: "Sponsors", note: "Who funds BizBuzz" },
  { href: "/seasons", label: "Seasons", note: "Every season since 2024" },
];

export default function NotFound() {
  return (
    <section className="section not-found" aria-labelledby="nf-title">
      <div className="container not-found__grid">
        <div className="not-found__text">
          <p className="not-found__code num" aria-hidden="true">
            404
          </p>
          <h1 id="nf-title">We couldn&apos;t find that page</h1>
          <p className="lead">
            The link may be old, or the page may have moved when we rebuilt the site. These are the places most people are
            looking for.
          </p>
          <div className="actions">
            <Button href="/">Go to the homepage</Button>
            <GoLink href={LINKS.email}>Email us</GoLink>
          </div>
        </div>
        <nav aria-label="Main pages" className="not-found__links">
          <ul className="ruled">
            {PLACES.map((p) => (
              <li key={p.href}>
                <Link href={p.href}>
                  <span className="not-found__label">{p.label}</span>
                  <span className="not-found__note">{p.note}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
