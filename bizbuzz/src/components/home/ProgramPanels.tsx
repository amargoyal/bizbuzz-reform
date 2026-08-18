"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowCTA } from "@/components/ds/Button";

export type ProgramPanel = {
  index: string;
  title: string;
  blurb: string;
  chips: string[];
  linkLabel: string;
  href: string;
  bg: string;
  bgAlt: string;
  inset: string;
  insetAlt: string;
};

/**
 * Four full-height program panels. Each panel's background scrolls normally
 * while its content layer is fixed to the viewport and revealed with a
 * clip-path window, so the copy appears pinned while the photo travels past.
 *
 * The clip is written synchronously inside the scroll handler rather than in
 * a rAF callback: a frame of lag between the browser's own scroll paint and
 * ours reads as jitter.
 */
export default function ProgramPanels({ programs }: { programs: ProgramPanel[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let pairs: { panel: HTMLElement; layer: HTMLElement }[] = [];
    const collect = () => {
      pairs = [...root.querySelectorAll<HTMLElement>("[data-panel]")]
        .map((panel) => ({ panel, layer: panel.querySelector<HTMLElement>("[data-panel-layer]") }))
        .filter((p): p is { panel: HTMLElement; layer: HTMLElement } => Boolean(p.layer));
    };

    const sync = () => {
      if (!pairs.length) collect();
      const vh = window.innerHeight;
      for (const { panel, layer } of pairs) {
        const r = panel.getBoundingClientRect();
        const top = Math.max(0, r.top);
        const bottom = Math.min(vh, r.bottom);
        layer.style.clipPath =
          bottom - top < 1 ? "inset(0 0 100% 0)" : `inset(${top}px 0 ${vh - bottom}px 0)`;
      }
    };

    collect();
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    const timers = [80, 300, 900].map((t) =>
      setTimeout(() => {
        collect();
        sync();
      }, t)
    );

    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      timers.forEach(clearTimeout);
    };
  }, [programs]);

  return (
    <div ref={rootRef}>
      {programs.map((p) => (
        <div key={p.title} data-panel="" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
          <Image src={p.bg} alt={p.bgAlt} fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "var(--scrim-left)" }} />
          <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }} />

          <div
            data-panel-layer=""
            className="bb-row-12"
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              top: 0,
              height: "100vh",
              zIndex: 2,
              clipPath: "inset(0 0 100% 0)",
              willChange: "clip-path",
              display: "grid",
              gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
              gap: "var(--grid-gap)",
              alignItems: "center",
              maxWidth: "var(--container)",
              margin: "0 auto",
              padding: "clamp(88px, 11vh, 120px) var(--gutter) clamp(40px, 6vh, 72px)",
            }}
          >
            <div
              style={{
                gridColumn: "span 6",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-7)",
                alignItems: "flex-start",
              }}
            >
              <p className="bb-mono" style={{ color: "rgba(251,245,233,.72)" }}>
                {p.index}
              </p>
              <h3
                style={{
                  font: "400 clamp(2.75rem, 5.4vw, 5rem)/0.98 var(--font-display)",
                  letterSpacing: "-0.028em",
                  color: "var(--cream-100)",
                  margin: 0,
                  maxWidth: "13ch",
                }}
              >
                {p.title}
              </h3>
              <p className="bb-lead" style={{ color: "rgba(251,245,233,.86)", maxWidth: "40ch" }}>
                {p.blurb}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-4)" }}>
                {p.chips.map((c) => (
                  <span
                    key={c}
                    className="bb-caption"
                    style={{
                      background: "var(--surface-glass-inverse)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      border: "1px solid rgba(251,245,233,.28)",
                      color: "var(--cream-100)",
                      padding: "9px 16px",
                      borderRadius: "var(--radius-pill)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div style={{ paddingTop: "var(--space-3)" }}>
                <ArrowCTA tone="inverse" href={p.href}>
                  {p.linkLabel}
                </ArrowCTA>
              </div>
            </div>

            <div className="bb-panel-inset" style={{ gridColumn: "7 / span 6", display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 560,
                  aspectRatio: "16 / 11",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <Image src={p.inset} alt={p.insetAlt} fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
