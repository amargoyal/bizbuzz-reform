"use client";

import { useId, useState } from "react";

export type Faq = { q: string; a: string };

export default function Faqs({ faqs }: { faqs: Faq[] }) {
  const id = useId();
  const [query, setQuery] = useState("");
  const visible = faqs.filter((faq) => `${faq.q} ${faq.a}`.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <div className="bb-stack">
      <div className="bb-stack" style={{ gap: "var(--space-3)" }}>
        <label htmlFor={id}>Find an answer</label>
        <input id={id} className="bb-search-input" type="search" placeholder="Try cost, grades, or office hours" value={query} onChange={(event) => setQuery(event.target.value)} />
        <p className="bb-caption" role="status">{query ? `${visible.length} matching questions` : `${faqs.length} common questions`}</p>
      </div>
      <div>
        {visible.map((faq) => (
          <details key={faq.q} className="bb-details">
            <summary>{faq.q}</summary>
            <p className="bb-body" style={{ color: "var(--text-muted)" }}>{faq.a}</p>
          </details>
        ))}
        {visible.length === 0 && (
          <p>No answers match “{query}”. <button type="button" className="bb-text-button" onClick={() => setQuery("")}>Show all questions</button> or <a href="mailto:bizbuzznfp@gmail.com">email the team</a>.</p>
        )}
      </div>
    </div>
  );
}
