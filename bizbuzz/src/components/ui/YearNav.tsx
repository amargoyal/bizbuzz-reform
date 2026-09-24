import Link from "next/link";

type Entry = { label: string; href: string; note?: string };

/** Links between the pages of one program's seasons. */
export function YearNav({ entries, current, label }: { entries: Entry[]; current: string; label: string }) {
  return (
    <nav aria-label={label}>
      <ul className="yearnav">
        {entries.map((e) => (
          <li key={e.href}>
            <Link href={e.href} aria-current={e.href === current ? "page" : undefined}>
              {e.label}
              {e.note && <span className="yearnav__label">{e.note}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Previous and next season at the bottom of a season page. */
export function PrevNext({
  prev,
  next,
}: {
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
}) {
  if (!prev && !next) return null;
  return (
    <nav className="prevnext" aria-label="More seasons">
      {prev ? (
        <Link href={prev.href} className="prevnext__link prevnext__link--prev">
          <span className="prevnext__dir">Earlier</span>
          <span className="prevnext__label">{prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className="prevnext__link prevnext__link--next">
          <span className="prevnext__dir">Later</span>
          <span className="prevnext__label">{next.label}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
