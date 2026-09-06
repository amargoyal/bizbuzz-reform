"use client";

import { useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

type CardTone = "card" | "canvas" | "sunken" | "accent" | "ink";

const CARD_TONES: Record<CardTone, CSSProperties> = {
  card: { background: "var(--surface-card)", border: "1px solid var(--border-hairline)" },
  canvas: { background: "transparent", border: "1px solid var(--border-hairline)" },
  sunken: { background: "var(--surface-sunken)", border: "1px solid transparent" },
  accent: { background: "var(--surface-sunken)", border: "1px solid transparent" },
  ink: { background: "var(--ink-900)", border: "1px solid var(--ink-800)", color: "var(--neutral-0)" },
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
  solid: { background: "var(--ink-900)", color: "var(--neutral-0)", border: "1px solid var(--ink-900)" },
  glass: {
    background: "var(--surface-glass-inverse)",
    color: "var(--neutral-0)",
    border: "1px solid rgba(255, 255, 255,.22)",
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
  sm: { minHeight: 26, padding: "4px 10px", fontSize: "var(--size-caption)" },
  md: { minHeight: 34, padding: "0 16px", fontSize: "var(--size-caption)" },
  lg: { minHeight: 42, padding: "0 20px", fontSize: "var(--size-body-sm)" },
};

/** Compact status label; ordinary facts use .bb-meta instead. */
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
        borderRadius: "var(--radius-sm)",
        fontFamily: "var(--font-text)",
        fontWeight: "var(--weight-medium)" as CSSProperties["fontWeight"],
        whiteSpace: "normal",
        ...(CHIP_TONES[tone] ?? CHIP_TONES.hairline),
        ...(CHIP_SIZES[size] ?? CHIP_SIZES.md),
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/** Supporting context such as a date or audience; omit redundant labels. */
export function Eyebrow({
  as: Tag = "p",
  className = "",
  style,
  children,
}: {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <Tag
      className={`bb-eyebrow ${className}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-3)", ...style }}
    >
      {children}
    </Tag>
  );
}

/** A single proof point: readable numeric figure over a sans caption. */
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
      className={`bb-proof-stat ${className}`}
      style={{
        containerType: "inline-size",
        width: "100%",
        minWidth: 0,
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
