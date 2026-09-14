"use client";

import { Children, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

/* ------------------------------------------------------------------ CountUp */

/** Stable formatted evidence. Legacy timing props remain accepted for compatibility. */
export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = ",",
  className = "",
  style,
}: {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const fixed = to.toFixed(decimals);
  const [int, dec] = fixed.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span className={className} style={{ fontVariantNumeric: "lining-nums tabular-nums", ...style }}>
      {prefix}
      {grouped}
      {dec ? "." + dec : ""}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------- Marquee */

/**
 * Infinite horizontal ticker. BizBuzz uses it for the wall of partner school
 * logos. Content is duplicated once so the loop is seamless.
 */
export function Marquee({
  speed,
  reverse = false,
  gap = "var(--space-11)",
  pauseOnHover = true,
  fade = true,
  className = "",
  style,
  children,
}: {
  speed?: number;
  reverse?: boolean;
  gap?: string;
  pauseOnHover?: boolean;
  fade?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const [paused, setPaused] = useState(false);
  const track: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap,
    paddingInlineEnd: gap,
    flex: "0 0 auto",
    animation: `bb-marquee ${speed ? speed + "s" : "var(--dur-marquee)"} linear infinite`,
    animationDirection: reverse ? "reverse" : "normal",
    animationPlayState: paused ? "paused" : "running",
    willChange: "transform",
  };
  const mask = fade ? "linear-gradient(to right,transparent,#000 8%,#000 92%,transparent)" : undefined;

  return (
    <div
      className={className}
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
      style={{
        overflow: "hidden",
        display: "flex",
        width: "100%",
        maskImage: mask,
        WebkitMaskImage: mask,
        ...style,
      }}
    >
      <div style={{ display: "flex", flex: "0 0 auto", width: "max-content" }}>
        <div style={track}>{children}</div>
        <div style={track} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- ScrollRail/Parallax */

/** A native scroll rail with explicit controls, usable with touch or keyboard. */
export function ScrollRail({
  gap = "var(--grid-gap)",
  padInline = "var(--gutter)",
  align = "center",
  className = "",
  style,
  children,
}: {
  gap?: string;
  padInline?: string;
  align?: CSSProperties["alignItems"];
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const rail = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ start: true, end: false });
  function sync() {
    const el = rail.current;
    if (el) setPosition({ start: el.scrollLeft < 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    sync();
    return () => observer.disconnect();
  }, []);
  function move(direction: number) {
    const el = rail.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const distance = (card?.offsetWidth ?? el.clientWidth) + parseFloat(getComputedStyle(el).columnGap || "0");
    el.scrollBy({ left: direction * distance, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return (
    <div className={className} style={style}>
      <div className="bb-rail-controls bb-container">
        <button type="button" aria-label="Previous season" disabled={position.start} onClick={() => move(-1)}>← Previous</button>
        <button type="button" aria-label="Next season" disabled={position.end} onClick={() => move(1)}>Next →</button>
      </div>
      <div ref={rail} className="bb-season-rail" tabIndex={0} role="region" aria-label="Seasons, scroll horizontally" onScroll={sync}
        style={{ display: "flex", gap, alignItems: align, overflowX: "auto", paddingInline: padInline }}>
        {Children.map(children, (child) => <div style={{ flex: "0 0 auto", scrollSnapAlign: "start" }}>{child}</div>)}
      </div>
    </div>
  );
}

/**
 * Vertical parallax for a media block: drifts against the page as it passes.
 * Depth is a multiplier on --parallax-depth (0 = locked, 1 = full drift).
 */
export function Parallax({
  depth = 1,
  className = "",
  style,
  children,
}: {
  depth?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const mq = window.matchMedia("(max-width: 900px), (prefers-reduced-motion: reduce)");
    const onScroll = () => {
      if (mq.matches) {
        cancelAnimationFrame(raf);
        setY(0);
        return;
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        setY(-p * depth * 64);
      });
    };
    onScroll();
    mq.addEventListener("change", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      mq.removeEventListener("change", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [depth]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform", transform: `translate3d(0,${y}px,0)`, ...style }}
    >
      {children}
    </div>
  );
}
