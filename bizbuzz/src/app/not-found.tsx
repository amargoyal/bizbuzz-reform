import { ArrowCTA, Button } from "@/components/ds/Button";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="bb-container bb-section bb-stack">
        <p className="bb-caption">Page not found</p>
        <h1 className="bb-display-1">Let’s get you to the right place.</h1>
        <p className="bb-lead" style={{ maxWidth: "55ch" }}>This address may have changed. Camp and Fish Tank pages now group every year in one place.</p>
        <div className="bb-filter-row">
          <Button href="/">Go to the homepage</Button>
          <ArrowCTA href="/camps">Explore camps</ArrowCTA>
          <ArrowCTA href="/fish-tank">Find Fish Tank</ArrowCTA>
          <ArrowCTA href="/seasons">Browse past seasons</ArrowCTA>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
