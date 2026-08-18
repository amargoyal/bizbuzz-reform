import Image from "next/image";
import { NavBar } from "@/components/ds/NavBar";
import { LINKS, NAV_ITEMS } from "@/lib/site";

/**
 * The one nav on every page. Only the CTA changes — each page leads with the
 * action it actually wants (register, enter Fish Tank, book a workshop…).
 */
export default function SiteHeader({
  cta = "Register free",
  ctaHref = LINKS.campRegistration,
}: {
  cta?: string;
  ctaHref?: string;
}) {
  return (
    <NavBar
      brand={
        <span style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            style={{ borderRadius: "var(--radius-circle)", display: "block", flex: "0 0 auto" }}
          />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: 28,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            BizBuzz
          </span>
        </span>
      }
      items={NAV_ITEMS}
      cta={cta}
      ctaHref={ctaHref}
    />
  );
}
