import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href: string };

/** Standard top of an inner page: optional parent link, title, lead, actions, media, facts. */
export function PageHero({
  title,
  lead,
  parent,
  actions,
  media,
  facts,
  status,
  id,
  narrow,
}: {
  title: ReactNode;
  lead?: ReactNode;
  parent?: Crumb;
  actions?: ReactNode;
  media?: ReactNode;
  facts?: ReactNode;
  status?: ReactNode;
  id?: string;
  narrow?: boolean;
}) {
  return (
    <section className={["page-hero", media ? "page-hero--media" : "", narrow ? "page-hero--narrow" : ""].filter(Boolean).join(" ")} aria-labelledby={id ?? "page-title"}>
      <div className="container page-hero__grid">
        <div className="page-hero__text">
          {parent && (
            <p className="page-hero__parent">
              <Link href={parent.href}>{parent.label}</Link>
            </p>
          )}
          {status && <div className="page-hero__status">{status}</div>}
          <h1 id={id ?? "page-title"}>{title}</h1>
          {lead && <div className="page-hero__lead lead">{lead}</div>}
          {actions && <div className="actions page-hero__actions">{actions}</div>}
        </div>
        {media && <div className="page-hero__media">{media}</div>}
      </div>
      {facts && <div className="container page-hero__facts">{facts}</div>}
    </section>
  );
}
