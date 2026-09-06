"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowCTA } from "@/components/ds/Button";

export type ProgramPanel = {
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
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px), (prefers-reduced-motion: reduce), (hover: none)");
    const sync = () => setPinned(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !pinned) return;

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
  }, [programs, pinned]);

  return (
    <div ref={rootRef}>
      {programs.map((p) => (
        <div key={p.title} data-panel="" style={{ position: "relative", minHeight: "100svh", height: pinned ? "100vh" : undefined, overflow: "hidden" }}>
          <Image src={p.bg} alt={p.bgAlt} fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div className="bb-panel-scrim" style={{ position: "absolute", inset: 0, background: "var(--scrim-left)" }} />
          <div style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }} />

          <div
            data-panel-layer=""
            className="bb-row-12"
            style={{
              position: pinned ? "fixed" : "relative",
              left: 0,
              right: 0,
              top: 0,
              height: pinned ? "100vh" : undefined,
              minHeight: "100svh",
              zIndex: 2,
              clipPath: pinned ? "inset(0 0 100% 0)" : "none",
              willChange: pinned ? "clip-path" : undefined,
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
              <h3
                className="bb-display-2"
                style={{
                  color: "var(--neutral-0)",
                  margin: 0,
                  maxWidth: "13ch",
                }}
              >
                {p.title}
              </h3>
              <p className="bb-lead" style={{ color: "rgba(255, 255, 255,.86)", maxWidth: "40ch" }}>
                {p.blurb}
              </p>
              <ul className="bb-facts" style={{ color: "var(--neutral-0)" }}>
                {p.chips.map((fact) => <li key={fact}>{fact}</li>)}
              </ul>
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
