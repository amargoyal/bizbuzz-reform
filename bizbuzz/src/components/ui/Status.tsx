import type { ReactNode } from "react";

export type StatusTone = "open" | "soon" | "done";

/** Registration and season status: open, coming soon, or complete. */
export function Status({ tone, children }: { tone: StatusTone; children: ReactNode }) {
  return <span className={`status status--${tone}`}>{children}</span>;
}
