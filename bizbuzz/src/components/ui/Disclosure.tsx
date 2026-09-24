import type { ReactNode } from "react";

/** A native details/summary pair: works without JavaScript and with find-in-page. */
export function Disclosure({
  summary,
  children,
  open,
  id,
  className,
  name,
}: {
  summary: ReactNode;
  children: ReactNode;
  open?: boolean;
  id?: string;
  className?: string;
  /** Group name: opening one closes the others in the same group. */
  name?: string;
}) {
  return (
    <details className={["disclosure", className].filter(Boolean).join(" ")} open={open} id={id} name={name}>
      <summary>{summary}</summary>
      <div className="disclosure__body">{children}</div>
    </details>
  );
}

/** Small "Read bio" style disclosure. */
export function More({ summary, children, className }: { summary: ReactNode; children: ReactNode; className?: string }) {
  return (
    <details className={["more", className].filter(Boolean).join(" ")}>
      <summary>{summary}</summary>
      <div>{children}</div>
    </details>
  );
}
