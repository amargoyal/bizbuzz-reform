"use client";

import { Children, useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

/* ------------------------------------------------------------------ CountUp */

/**
 * A number that rolls up from zero when it scrolls into view. BizBuzz leads
 * with proof — 110 students, 560 reached, $750 in prizes — so stats animate.
 */
export function CountUp({
  to,
  from = 0,
  duration,
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
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const ms = duration || 1600;
    const run = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / ms);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(from + (to - from) * eased);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    if (typeof IntersectionObserver === "undefined") {
      setVal(to);
      return;
    }
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, from, duration]);

  const fixed = val.toFixed(decimals);
  const [int, dec] = fixed.split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "lining-nums tabular-nums", ...style }}>
      {prefix}
      {grouped}
      {dec ? "." + dec : ""}
      {suffix}
    </span>
  );
}

/* ----------------------------------------------------------------- DrawArrow */

/** Built-in connector paths, drawn on a 200×200 box. Original BizBuzz shapes —
 *  loose, single-stroke, hand-guided rather than geometric. */
const PATHS: Record<string, string> = {
  curve: "M100 8 C 100 60, 40 70, 40 110 S 100 150, 100 186",
  loop: "M96 6 C 96 52, 34 56, 34 86 S 96 108, 96 130 C 96 152, 60 158, 78 176",
  swoop: "M14 18 C 70 18, 96 60, 96 104 S 122 176, 186 176",
  hook: "M100 10 C 100 74, 100 96, 100 138",
  wander: "M100 6 C 130 42, 62 62, 96 98 C 130 134, 66 148, 100 188",
};
const HEADS: Record<string, string> = {
  curve: "M84 168 L100 188 L118 170",
  loop: "M62 164 L78 178 L92 160",
  swoop: "M168 160 L188 176 L168 192",
  hook: "M84 120 L100 140 L116 122",
  wander: "M84 170 L100 190 L118 172",
};

/**
 * A connector arrow that draws itself when it scrolls into view — the BizBuzz
 * signature transition between sections. Stroke-dash animation, never a fade.
 */
export function DrawArrow({
  shape = "curve",
  size = 200,
  strokeWidth = 2.25,
  color = "var(--buzz-600)",
  duration,
  delay = 0,
  once = true,
  flip = false,
  className = "",
  style,
}: {
  shape?: keyof typeof PATHS;
  size?: number;
  strokeWidth?: number;
  color?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
  flip?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [shown, setShown] = useState(false);
  const [len, setLen] = useState(600);
  const dPath = PATHS[shape] || PATHS.curve;
  const dHead = HEADS[shape] || HEADS.curve;

  useEffect(() => {
    if (pathRef.current?.getTotalLength) {
      setLen(Math.ceil(pathRef.current.getTotalLength()) + 4);
    }
  }, [dPath]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(e.target);
          } else if (!once) setShown(false);
        }),
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const dur = duration ? `${duration}ms` : "var(--dur-draw)";
  const stroke = {
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      style={{ overflow: "visible", transform: flip ? "scaleX(-1)" : undefined, ...style }}
    >
      <path
        ref={pathRef}
        d={dPath}
        {...stroke}
        style={{
          strokeDasharray: len,
          strokeDashoffset: shown ? 0 : len,
          transition: `stroke-dashoffset ${dur} var(--ease-out-soft) ${delay}ms`,
        }}
      />
      <path
        d={dHead}
        {...stroke}
        style={{
          strokeDasharray: 90,
          strokeDashoffset: shown ? 0 : 90,
          transition: `stroke-dashoffset var(--dur-slow) var(--ease-out-soft) ${
            delay + (duration || 1250) * 0.72
          }ms`,
        }}
      />
    </svg>
  );
}

/** A short underline that sweeps in beneath a word. Pairs with .bb-display-*. */
export function DrawUnderline({
  color = "var(--buzz-500)",
  strokeWidth = 4,
  duration,
  delay = 120,
  className = "",
  style,
}: {
  color?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver((e) => e[0].isIntersecting && (setShown(true), io.disconnect()), {
      threshold: 0.6,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 300 16"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      style={{ display: "block", width: "100%", height: 12, overflow: "visible", ...style }}
    >
      <path
        d="M3 11 C 62 3, 120 14, 178 6 S 262 3, 297 9"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={{
          strokeDasharray: 320,
          strokeDashoffset: shown ? 0 : 320,
          transition: `stroke-dashoffset ${
            duration ? duration + "ms" : "var(--dur-draw)"
          } var(--ease-out-soft) ${delay}ms`,
        }}
      />
    </svg>
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

/* -------------------------------------------------------------------- Reveal */

const ANIM: Record<string, string> = {
  up: "bb-reveal-up",
  fade: "bb-reveal-fade",
  scale: "bb-reveal-scale",
  left: "bb-reveal-left",
  right: "bb-reveal-right",
};

/**
 * Scroll-triggered reveal. Wraps any block and plays it in when it enters the
 * viewport. This is the workhorse of BizBuzz motion — almost every block on a
 * BizBuzz page is inside one.
 */
export function Reveal({
  as: Tag = "div",
  animation = "up",
  delay = 0,
  duration,
  threshold = 0.18,
  rootMargin = "0px 0px -12% 0px",
  once = true,
  blur = false,
  style,
  className = "",
  children,
}: {
  as?: ElementType;
  animation?: keyof typeof ANIM;
  delay?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  blur?: boolean;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(e.target);
          } else if (!once) setShown(false);
        });
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        animationName: shown ? ANIM[animation] || ANIM.up : "none",
        animationDuration: duration ? `${duration}ms` : "var(--dur-reveal)",
        animationTimingFunction: "var(--ease-out-expo)",
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
        opacity: shown ? undefined : 0,
        filter: blur && !shown ? "blur(var(--reveal-blur))" : undefined,
        transition: blur ? "filter var(--dur-reveal) var(--ease-out-expo)" : undefined,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </Tag>
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
    const onScroll = () => {
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
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
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
