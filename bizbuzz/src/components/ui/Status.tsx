import type { ReactNode } from "react";

/** Plain registration and season information. */
export function Status({ children }: { children: ReactNode }) {
  return <span className="status">{children}</span>;
}
