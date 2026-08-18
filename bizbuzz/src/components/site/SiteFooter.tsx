import { Footer } from "@/components/ds/NavBar";
import { FOOTER_COLUMNS, FOOTER_TAGLINE, SOCIAL } from "@/lib/site";

/**
 * Rendered on the server so the copyright year comes from the build/request
 * rather than the client, which would otherwise flip after hydration.
 */
export default function SiteFooter() {
  return (
    <Footer
      brand="BizBuzz"
      tagline={FOOTER_TAGLINE}
      columns={FOOTER_COLUMNS}
      social={SOCIAL}
      legal={`501(c)(3) Non-Profit Organization. © ${new Date().getFullYear()} BizBuzz NFP. Naperville, Illinois.`}
    />
  );
}
