import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL, CURRENT, FOOTER_COLUMNS, FOOTER_NOTE, LINKS, TAGLINE, isExternal } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <p className="footer-tagline" aria-label="Build Biz. Bring Buzz.">
            <span className="sky">Build Biz.</span>
            <br />
            <span className="bulb">Bring Buzz.</span>
          </p>
          <div className="footer-lede">
            <p>{TAGLINE}</p>
            <p>{FOOTER_NOTE} Every program is free, and BizBuzz is 100% student-run.</p>
            <div className="actions">
              <Button href={LINKS.campRegistration} variant="primary">
                Register for the {CURRENT.campYear} camp
              </Button>
            </div>
          </div>
        </div>

        <nav className="footer-cols" aria-label="Footer">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {isExternal(link.href) ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                        <span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    ) : link.href.startsWith("mailto:") ? (
                      <a href={link.href}>{link.label}</a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer-legal">
          <p>
            501(c)(3) Non-Profit Organization. © {year} BizBuzz NFP. All rights reserved. Naperville, Illinois.
          </p>
          <p>
            Questions? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
