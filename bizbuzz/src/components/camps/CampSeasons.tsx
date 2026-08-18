"use client";

import { useEffect, useState } from "react";
import { Card, Chip } from "@/components/ds/Card";
import { Tabs } from "@/components/ds/NavBar";
import { Reveal } from "@/components/ds/motion";

export type CampSeason = {
  year: string;
  tag: string;
  headline: string;
  summary: string;
  curriculumNote: string;
  stats: { value: string; label: string }[];
  tracks: { grades: string; title: string; blurb: string }[];
  sessions: { n: string; title: string; date: string; venue: string; blurb: string }[];
};

/**
 * Year switcher for the camp archive. `#2024`…`#2027` deep-links straight to a
 * season, which is what the nav dropdown and the footer both point at.
 */
export default function CampSeasons({ seasons, initialYear }: { seasons: CampSeason[]; initialYear: string }) {
  const [year, setYear] = useState(initialYear);

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#", "");
      if (seasons.some((s) => s.year === h)) setYear(h);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [seasons]);

  const current = seasons.find((s) => s.year === year) ?? seasons[0];

  return (
    <>
      <section style={{ paddingBlock: "var(--section-y) 0" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-10)",
          }}
        >
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
              <p className="bb-eyebrow">Pick a season</p>
              <h2 className="bb-display-2" style={{ maxWidth: "18ch" }}>
                Every camp we have run
              </h2>
            </div>
          </Reveal>

          <Tabs
            items={seasons.map((s) => ({ value: s.year, label: s.year }))}
            value={current.year}
            onChange={(v) => {
              setYear(v);
              history.replaceState(null, "", `#${v}`);
            }}
          />

          <div
            className="bb-row-12"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              gap: "var(--grid-gap)",
              alignItems: "start",
            }}
          >
            <div style={{ gridColumn: "span 5" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
                <div>
                  <Chip tone="accent">{current.tag}</Chip>
                </div>
                <h3 className="bb-display-3">{current.headline}</h3>
                <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                  {current.summary}
                </p>
              </div>
            </div>
            <div
              style={{
                gridColumn: "7 / span 6",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "var(--space-8)",
              }}
            >
              {current.stats.map((st) => (
                <div key={st.label} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  <p className="bb-display-3" style={{ fontVariantNumeric: "lining-nums tabular-nums" }}>
                    {st.value}
                  </p>
                  <p className="bb-caption">{st.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {current.tracks.length > 0 && (
        <section style={{ paddingBlock: "var(--section-y-tight) 0" }}>
          <div style={{ maxWidth: "var(--container)", margin: "0 auto", paddingInline: "var(--gutter)" }}>
            <Reveal>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "var(--grid-gap)",
                  alignItems: "stretch",
                }}
              >
                {current.tracks.map((t) => (
                  <Card key={t.title} pad="var(--space-9)">
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
                      <p className="bb-mono">{t.grades}</p>
                      <h4 className="bb-display-4">{t.title}</h4>
                      <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                        {t.blurb}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section style={{ paddingBlock: "var(--section-y)" }}>
        <div
          style={{
            maxWidth: "var(--container)",
            margin: "0 auto",
            paddingInline: "var(--gutter)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-10)",
          }}
        >
          <Reveal>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-8)",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <h3 className="bb-display-2" style={{ maxWidth: "16ch" }}>
                The curriculum
              </h3>
              <p className="bb-body" style={{ maxWidth: "34ch", color: "var(--text-muted)" }}>
                {current.curriculumNote}
              </p>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {current.sessions.map((s) => (
              <Reveal key={s.n}>
                <div
                  className="bb-rowlist"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "84px minmax(0, 1fr) minmax(0, 1.1fr)",
                    gap: "var(--space-8)",
                    alignItems: "start",
                    paddingBlock: "var(--space-9)",
                    borderTop: "1px solid var(--border-hairline)",
                  }}
                >
                  <p
                    className="bb-display-3"
                    style={{ color: "var(--buzz-600)", fontVariantNumeric: "lining-nums tabular-nums" }}
                  >
                    {s.n}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    <h4 className="bb-display-4">{s.title}</h4>
                    <p className="bb-mono">{s.date}</p>
                    <p className="bb-mono">{s.venue}</p>
                  </div>
                  <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                    {s.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--border-hairline)" }} />
          </div>
        </div>
      </section>
    </>
  );
}
