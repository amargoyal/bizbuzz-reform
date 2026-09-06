"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { linkTag } from "./link";

type Variant = "primary" | "secondary" | "solid" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const BASE: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-4)",
  fontFamily: "var(--font-text)",
  fontWeight: "var(--weight-semibold)" as CSSProperties["fontWeight"],
  letterSpacing: "-0.005em",
  borderRadius: "var(--radius-sm)",
  border: "1.5px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "normal",
  transition: "var(--transition-control)",
  transformOrigin: "center",
};

const SIZES: Record<Size, CSSProperties> = {
  sm: { height: "var(--control-h-sm)", padding: "0 18px", fontSize: "var(--size-caption)" },
  md: { height: "var(--control-h)", padding: "0 var(--control-pad-x)", fontSize: "var(--size-body-sm)" },
  lg: { height: "var(--control-h-lg)", padding: "0 var(--control-pad-x-lg)", fontSize: "var(--size-body)" },
};

const VARIANTS: Record<Variant, { rest: CSSProperties; hover: CSSProperties }> = {
  primary: {
    rest: {
      background: "var(--surface-accent)",
      color: "var(--text-on-accent)",
      borderColor: "var(--surface-accent)",
    },
    hover: { background: "var(--buzz-400)", borderColor: "var(--buzz-400)" },
  },
  secondary: {
    rest: { background: "transparent", color: "var(--text-display)", borderColor: "var(--border-ink)" },
    hover: { background: "var(--surface-brand-soft)", borderColor: "var(--border-ink)", color: "var(--ink-900)" },
  },
  solid: {
    rest: { background: "var(--ink-900)", color: "var(--neutral-0)", borderColor: "var(--ink-900)" },
    hover: { background: "var(--ink-700)", borderColor: "var(--ink-700)" },
  },
  ghost: {
    rest: { background: "transparent", color: "var(--text-display)", borderColor: "transparent" },
    hover: { background: "var(--surface-sunken)" },
  },
  danger: {
    rest: { background: "var(--ember-600)", color: "var(--neutral-0)", borderColor: "var(--ember-600)" },
    hover: { background: "var(--ember-500)", borderColor: "var(--ember-500)" },
  },
};

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  disabled?: boolean;
  block?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/** Action button with an 8px corner radius. */
export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  onClick,
  disabled = false,
  block = false,
  className = "",
  style,
  children,
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const v = VARIANTS[variant] ?? VARIANTS.primary;
  const Tag = linkTag(href);

  return (
    <Tag
      href={href as string}
      target={target}
      rel={rel}
      onClick={onClick}
      className={className}
      aria-disabled={disabled || undefined}
      disabled={Tag === "button" ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPress(false);
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        ...BASE,
        ...SIZES[size],
        ...v.rest,
        ...(hover && !disabled ? v.hover : null),
        width: block ? "100%" : undefined,
        opacity: disabled ? 0.4 : 1,
        pointerEvents: disabled ? "none" : undefined,
        transform: press && !disabled ? "scale(var(--press-scale))" : undefined,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

type CtaTone = "outline" | "accent" | "inverse";

const CTA_TONES: Record<CtaTone, { fg: string; line: string; fill: string; hoverFill: string }> = {
  outline: {
    fg: "var(--text-link)",
    line: "var(--text-link)",
    fill: "transparent",
    hoverFill: "var(--surface-link-hover)",
  },
  accent: {
    fg: "var(--text-on-accent)",
    line: "var(--surface-accent)",
    fill: "var(--surface-accent)",
    hoverFill: "var(--buzz-400)",
  },
  inverse: {
    fg: "var(--neutral-0)",
    line: "rgba(255, 255, 255,.5)",
    fill: "transparent",
    hoverFill: "rgba(255, 255, 255,.12)",
  },
};

export type ArrowCTAProps = {
  children?: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  size?: Size;
  tone?: CtaTone;
  className?: string;
  style?: CSSProperties;
};

/**
 * One control, one hit target. The directional arrow sits inside its border.
 */
export function ArrowCTA({
  children,
  href,
  target,
  rel,
  onClick,
  size = "md",
  tone = "outline",
  className = "",
  style,
}: ArrowCTAProps) {
  const [hover, setHover] = useState(false);
  const dims = { sm: 40, md: 52, lg: 62 }[size] ?? 52;
  const t = CTA_TONES[tone] ?? CTA_TONES.outline;
  const Tag = linkTag(href);

  return (
    <Tag
      href={href as string}
      target={target}
      rel={rel}
      onClick={onClick}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...BASE,
        minHeight: dims,
        maxWidth: "100%",
        padding: "var(--space-3) var(--control-pad-x)",
        borderColor: t.line,
        background: hover ? t.hoverFill : t.fill,
        color: t.fg,
        fontSize: size === "sm" ? "var(--size-caption)" : "var(--size-body-sm)",
        ...style,
      }}
    >
      {children}
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Tag>
  );
}
