import type { ReactNode } from "react";

export type Fact = { label: string; value: ReactNode };

/** A definition list of short facts: who, when, where, cost. */
export function Facts({ items, stacked, className }: { items: Fact[]; stacked?: boolean; className?: string }) {
  return (
    <dl className={["facts", stacked ? "facts--stack" : "", className ?? ""].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
