"use client";

import { useEffect, useState } from "react";
import { Chip } from "@/components/ds/Card";
import { MediaCard } from "@/components/ds/MediaCard";
import { Tabs } from "@/components/ds/NavBar";
import { Reveal } from "@/components/ds/motion";

export type FishTankYear = {
  year: string;
  venue: string;
  headline: string;
  summary: string;
  stats: { value: string; label: string }[];
  image: string;
  alt: string;
  chips: string[];
};

/** Year switcher for the Fish Tank archive. `#2024`…`#2026` deep-link into it. */
export default function FishTankYears({ years, initialYear }: { years: FishTankYear[]; initialYear: string }) {
  const [year, setYear] = useState(initialYear);

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#", "");
      if (years.some((y) => y.year === h)) setYear(h);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [years]);

  const current = years.find((y) => y.year === year) ?? years[0];

  return (
    <section style={{ paddingBlock: "0 var(--section-y)" }}>
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
            <p className="bb-eyebrow">Every year so far</p>
            <h2 className="bb-display-2" style={{ maxWidth: "16ch" }}>
              Three years of pitches
            </h2>
          </div>
        </Reveal>

        <Tabs
          items={years.map((y) => ({ value: y.year, label: y.year }))}
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
          <div style={{ gridColumn: "span 6" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
              <div>
                <Chip tone="accent">{current.venue}</Chip>
              </div>
              <h3 className="bb-display-3">{current.headline}</h3>
              <p className="bb-body" style={{ color: "var(--text-muted)" }}>
                {current.summary}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                  gap: "var(--space-8)",
                  paddingTop: "var(--space-4)",
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
          <div style={{ gridColumn: "8 / span 5" }}>
            <MediaCard ratio="4 / 3" scrim src={current.image} alt={current.alt} chips={current.chips} />
          </div>
        </div>
      </div>
    </section>
  );
}
