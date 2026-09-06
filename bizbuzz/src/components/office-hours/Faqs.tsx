"use client";

import { useState } from "react";

export type Faq = { q: string; a: string };

/** Accordion list. One open at a time, first one open on arrival. */
export default function Faqs({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} style={{ borderTop: "1px solid var(--border-hairline)" }}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                gap: "var(--space-7)",
                alignItems: "baseline",
                justifyContent: "space-between",
                textAlign: "left",
                paddingBlock: "var(--space-7)",
                background: "none",
                border: 0,
                cursor: "pointer",
                font: "inherit",
                color: "inherit",
              }}
            >
              <span className="bb-display-4" style={{ maxWidth: "40ch" }}>
                {f.q}
              </span>
              <span className="bb-meta" style={{ flex: "0 0 auto" }}>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p
                className="bb-body"
                style={{ color: "var(--text-muted)", paddingBottom: "var(--space-8)", maxWidth: "62ch" }}
              >
                {f.a}
              </p>
            )}
          </div>
        );
      })}
      <div style={{ borderTop: "1px solid var(--border-hairline)" }} />
    </div>
  );
}
