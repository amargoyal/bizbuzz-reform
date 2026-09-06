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

/**
 * Pinned section that converts vertical scroll into horizontal travel — the
 * "your scroll changes direction" moment. Falls back to a normal swipe rail
 * on touch/narrow viewports and under prefers-reduced-motion.
 */
export function ScrollRail({
  height = "300vh",
  gap = "var(--grid-gap)",
  padInline = "var(--gutter)",
  align = "center",
  className = "",
  style,
  children,
}: {
  height?: string;
  gap?: string;
  padInline?: string;
  align?: CSSProperties["alignItems"];
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  // Server render matches the fallback rail; the pinned version turns on after
  // mount so there is no hydration mismatch on the 100vh sticky wrapper.
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px), (prefers-reduced-motion: reduce), (hover: none)");
    const sync = () => setPinned(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!pinned) {
      setX(0);
      return;
    }
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = outer.current;
        const tr = trackRef.current;
        if (!el || !tr) return;
        const r = el.getBoundingClientRect();
        const travel = Math.max(0, tr.scrollWidth - window.innerWidth + 2 * 24);
        const total = r.height - window.innerHeight;
        const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
        setX(-p * travel);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pinned]);

  if (!pinned) {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          gap,
          alignItems: align,
          overflowX: "auto",
          paddingInline: padInline,
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          ...style,
        }}
      >
        {Children.map(children, (c) => (
          <div style={{ scrollSnapAlign: "center", flex: "0 0 auto" }}>{c}</div>
        ))}
      </div>
    );
  }

  return (
    <div ref={outer} className={className} style={{ height, position: "relative", ...style }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: align,
          overflow: "hidden",
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap,
            alignItems: align,
            paddingInline: padInline,
            flex: "0 0 auto",
            willChange: "transform",
            transform: `translate3d(${x}px,0,0)`,
          }}
        >
          {children}
        </div>
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
