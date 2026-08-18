"use client";

import { useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

type CardTone = "card" | "canvas" | "sunken" | "accent" | "ink";

const CARD_TONES: Record<CardTone, CSSProperties> = {
  card: { background: "var(--surface-card)", border: "1px solid var(--border-hairline)" },
  canvas: { background: "transparent", border: "1px solid var(--border-hairline)" },
  sunken: { background: "var(--surface-sunken)", border: "1px solid transparent" },
  accent: { background: "var(--surface-accent-soft)", border: "1px solid transparent" },
  ink: { background: "var(--ink-900)", border: "1px solid var(--ink-800)", color: "var(--cream-100)" },
};

/** Hairline container. The default BizBuzz card — no shadow, big radius. */
export function Card({
  as: Tag = "div",
  pad = "var(--space-8)",
  radius = "var(--radius-xl)",
  tone = "card",
  interactive = false,
  className = "",
  style,
  children,
}: {
  as?: ElementType;
  pad?: string;
  radius?: string;
  tone?: CardTone;
  interactive?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Tag
      className={className}
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        ...(CARD_TONES[tone] ?? CARD_TONES.card),
        borderRadius: radius,
        padding: pad,
        transition: "var(--transition-control)",
        ...(interactive ? { cursor: "pointer" } : null),
        ...(interactive && hover
          ? {
              transform: "translateY(var(--hover-lift))",
              borderColor: "var(--border-hairline-strong)",
              boxShadow: "var(--shadow-md)",
            }
          : null),
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

type ChipTone = "hairline" | "solid" | "glass" | "accent" | "success" | "danger" | "info";
type ChipSize = "sm" | "md" | "lg";

const CHIP_TONES: Record<ChipTone, CSSProperties> = {
  hairline: {
    background: "transparent",
    color: "var(--text-body)",
    border: "1px solid var(--border-hairline-strong)",
  },
  solid: { background: "var(--ink-900)", color: "var(--cream-100)", border: "1px solid var(--ink-900)" },
  glass: {
    background: "var(--surface-glass-inverse)",
    color: "var(--cream-100)",
    border: "1px solid rgba(251,245,233,.22)",
    backdropFilter: "blur(var(--blur-glass))",
    WebkitBackdropFilter: "blur(var(--blur-glass))",
  },
  accent: { background: "var(--surface-accent-soft)", color: "var(--ink-900)", border: "1px solid transparent" },
  success: {
    background: "var(--status-success-bg)",
    color: "var(--status-success-fg)",
    border: "1px solid transparent",
  },
  danger: {
    background: "var(--status-danger-bg)",
    color: "var(--status-danger-fg)",
    border: "1px solid transparent",
  },
  info: { background: "var(--status-info-bg)", color: "var(--status-info-fg)", border: "1px solid transparent" },
};

const CHIP_SIZES: Record<ChipSize, CSSProperties> = {
  sm: { height: 26, padding: "0 10px", fontSize: "11px" },
  md: { height: 34, padding: "0 16px", fontSize: "var(--size-caption)" },
  lg: { height: 42, padding: "0 20px", fontSize: "var(--size-body-sm)" },
};

/** Small rounded label. Solid over photography, hairline on cream. */
export function Chip({
  tone = "hairline",
  size = "md",
  as: Tag = "span",
  className = "",
  style,
  children,
}: {
  tone?: ChipTone;
  size?: ChipSize;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <Tag
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-text)",
        fontWeight: "var(--weight-medium)" as CSSProperties["fontWeight"],
        whiteSpace: "nowrap",
        ...(CHIP_TONES[tone] ?? CHIP_TONES.hairline),
        ...(CHIP_SIZES[size] ?? CHIP_SIZES.md),
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/** Uppercase tracked-out label that sits above a heading. */
export function Eyebrow({
  as: Tag = "p",
  dot = false,
  className = "",
  style,
  children,
}: {
  as?: ElementType;
  dot?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <Tag
      className={`bb-eyebrow ${className}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", ...style }}
    >
      {dot && (
        <span
          aria-hidden="true"
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--surface-accent)",
            flex: "0 0 auto",
          }}
        />
      )}
      {children}
    </Tag>
  );
}

/** A single proof point: giant serif figure over a sans caption. */
export function Stat({
  value,
  label,
  note,
  align = "start",
  className = "",
  style,
}: {
  value: ReactNode;
  label: ReactNode;
  note?: ReactNode;
  align?: "start" | "center";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align === "center" ? "center" : "left",
        ...style,
      }}
    >
      <span className="bb-stat">{value}</span>
      <span
        style={{
          fontFamily: "var(--font-text)",
          fontWeight: "var(--weight-semibold)" as CSSProperties["fontWeight"],
          fontSize: "var(--size-body)",
          color: "var(--text-body)",
          maxWidth: "34ch",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
      {note && <span className="bb-caption">{note}</span>}
    </div>
  );
}
