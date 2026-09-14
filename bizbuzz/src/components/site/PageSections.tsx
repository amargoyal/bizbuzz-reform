export default function PageSections({ links }: { links: { href: string; label: string }[] }) {
  return (
    <nav className="bb-page-sections bb-container" aria-label="On this page">
      <span className="bb-caption">On this page</span>
      {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
    </nav>
  );
}
