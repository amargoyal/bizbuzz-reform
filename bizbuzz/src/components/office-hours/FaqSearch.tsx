"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { FAQ_TOPICS, type Faq } from "@/data/faqs";
import { CONTACT_EMAIL } from "@/lib/site";

/** Searchable FAQ, grouped by topic. Every answer is a native disclosure. */
export default function FaqSearch({ faqs }: { faqs: Faq[] }) {
  const id = useId();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const matches = (f: Faq) => !q || `${f.q} ${f.a.join(" ")} ${f.topic}`.toLowerCase().includes(q);
  const visible = faqs.filter(matches);

  return (
    <div className="faq">
      <div className="faq__search">
        <label htmlFor={id}>Search the questions</label>
        <div className="faq__field">
          <Icon name="search" />
          <input
            id={id}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try cost, grades, Fish Tank, or virtual"
            autoComplete="off"
          />
        </div>
        <p className="faq__count" role="status">
          {q ? `${visible.length} matching ${visible.length === 1 ? "question" : "questions"}` : `${faqs.length} questions`}
        </p>
      </div>

      {FAQ_TOPICS.map((topic) => {
        const items = visible.filter((f) => f.topic === topic);
        if (!items.length) return null;
        return (
          <div className="faq__group" key={topic}>
            <h3 className="faq__topic">{topic}</h3>
            {items.map((f) => (
              <details className="disclosure" key={f.id} id={`faq-${f.id}`} open={Boolean(q) || undefined}>
                <summary>{f.q}</summary>
                <div className="disclosure__body">
                  {f.a.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        );
      })}

      {visible.length === 0 && (
        <p className="faq__empty">
          No answers match &ldquo;{query}&rdquo;.{" "}
          <button type="button" className="faq__reset" onClick={() => setQuery("")}>
            Show all questions
          </button>{" "}
          or email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
    </div>
  );
}
