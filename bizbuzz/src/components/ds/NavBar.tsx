"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Button } from "./Button";
import { isInternalRoute } from "./link";

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

function NavAnchor({
  href,
  style,
  onClick,
  children,
}: {
  href: string;
  style?: CSSProperties;
  onClick?: () => void;
  children: ReactNode;
}) {
  const Tag = isInternalRoute(href) ? Link : "a";
  return (
    <Tag href={href} style={style} onClick={onClick}>
      {children}
    </Tag>
  );
}

/**
 * Top bar. Sticky and cream by default; with `overlay` it renders fixed and
 * transparent so it sits directly on a full-bleed hero, swapping to a blurred
 * cream capsule once scrolled. The BizBuzz nav never draws a hard line.
 */
export function NavBar({
  brand,
  brandHref = "/",
  items = [],
  cta,
  ctaHref = "#",
  overlay = false,
  className = "",
  style,
}: {
  brand: ReactNode;
  brandHref?: string;
  items?: NavItem[];
  cta?: ReactNode;
  ctaHref?: string;
  overlay?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const [scrolled, setScrolled] = useState(!overlay);
  const [open, setOpen] = useState<string | null>(null);
  const [compact, setCompact] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  // Collapse the item list before it can overflow and clip the CTA.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1060px)");
    const sync = () => {
      setCompact(mq.matches);
      if (!mq.matches) setMenu(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const light = overlay && !scrolled;
  const fg = light ? "var(--cream-100)" : "var(--text-display)";

  return (
    <header
      className={className}
      style={{
        // In overlay mode the bar must sit ON the hero, not reserve a band above it.
        position: overlay ? "fixed" : "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        width: "100%",
        background: scrolled ? "var(--surface-glass)" : "transparent",
        backdropFilter: scrolled ? "blur(var(--blur-glass))" : "none",
        WebkitBackdropFilter: scrolled ? "blur(var(--blur-glass))" : "none",
        borderBottom: scrolled ? "1px solid var(--border-hairline)" : "1px solid transparent",
        transition:
          "background var(--dur-slow) var(--ease-out-soft), border-color var(--dur-slow) var(--ease-out-soft)",
        ...style,
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          height: 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-7)",
        }}
      >
        <Link
          href={brandHref}
          style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", color: fg, textDecoration: "none" }}
        >
          {brand}
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: compact ? "var(--space-5)" : "clamp(18px,2vw,32px)",
            minWidth: 0,
          }}
        >
          {!compact &&
            items.map((it) => (
              <div
                key={it.label}
                onMouseEnter={() => setOpen(it.children ? it.label : null)}
                onMouseLeave={() => setOpen(null)}
                style={{ position: "relative" }}
              >
                <NavAnchor
                  href={it.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: fg,
                    fontFamily: "var(--font-text)",
                    fontWeight: "var(--weight-semibold)" as CSSProperties["fontWeight"],
                    fontSize: "var(--size-body-sm)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {it.label}
                  {it.children && (
                    <span
                      aria-hidden="true"
                      style={{
                        display: "inline-block",
                        width: 13,
                        height: 13,
                        position: "relative",
                        transform: open === it.label ? "rotate(45deg)" : "none",
                        transition: "transform var(--dur-base) var(--ease-out-expo)",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          inset: "50% 0 auto",
                          height: 1.5,
                          background: "currentColor",
                          transform: "translateY(-50%)",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          inset: "0 50% auto",
                          width: 1.5,
                          height: "100%",
                          background: "currentColor",
                          transform: "translateX(-50%)",
                        }}
                      />
                    </span>
                  )}
                </NavAnchor>

                {it.children && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 14px)",
                      left: "50%",
                      transform: `translateX(-50%) translateY(${open === it.label ? "0" : "-6px"})`,
                      minWidth: 214,
                      padding: "var(--space-4)",
                      background: "var(--surface-card)",
                      border: "1px solid var(--border-hairline)",
                      borderRadius: "var(--radius-lg)",
                      boxShadow: "var(--shadow-lg)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      opacity: open === it.label ? 1 : 0,
                      pointerEvents: open === it.label ? "auto" : "none",
                      transition:
                        "opacity var(--dur-base) var(--ease-out-soft), transform var(--dur-base) var(--ease-out-expo)",
                    }}
                  >
                    {it.children.map((c) => (
                      <NavAnchor
                        key={c.label}
                        href={c.href}
                        style={{
                          padding: "10px 14px",
                          borderRadius: "var(--radius-sm)",
                          color: "var(--text-body)",
                          fontFamily: "var(--font-text)",
                          fontSize: "var(--size-body-sm)",
                          fontWeight: 500,
                          textDecoration: "none",
                        }}
                      >
                        {c.label}
                      </NavAnchor>
                    ))}
                  </div>
                )}
              </div>
            ))}

          {cta && (
            <Button
              href={ctaHref}
              variant="primary"
              size="sm"
              style={{ height: 46, padding: "0 26px", fontSize: "var(--size-body-sm)", flex: "0 0 auto" }}
            >
              {cta}
            </Button>
          )}

          {compact && items.length > 0 && (
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menu}
              onClick={() => setMenu((m) => !m)}
              style={{
                width: 46,
                height: 46,
                flex: "0 0 auto",
                borderRadius: "var(--radius-circle)",
                border: `1.5px solid ${light ? "rgba(251,245,233,.45)" : "var(--border-ink)"}`,
                background: "transparent",
                color: fg,
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
                transition: "var(--transition-control)",
              }}
            >
              <span aria-hidden="true" style={{ display: "grid", gap: 4, width: 18 }}>
                <span
                  style={{
                    height: 1.6,
                    background: "currentColor",
                    borderRadius: 2,
                    transform: menu ? "translateY(2.8px) rotate(45deg)" : "none",
                    transition: "transform var(--dur-base) var(--ease-out-expo)",
                  }}
                />
                <span
                  style={{
                    height: 1.6,
                    background: "currentColor",
                    borderRadius: 2,
                    transform: menu ? "translateY(-2.8px) rotate(-45deg)" : "none",
                    transition: "transform var(--dur-base) var(--ease-out-expo)",
                  }}
                />
              </span>
            </button>
          )}
        </nav>
      </div>

      {compact && (
        <div
          style={{
            overflow: "hidden",
            maxHeight: menu ? 520 : 0,
            transition: "max-height var(--dur-slow) var(--ease-out-expo)",
            background: "var(--surface-card)",
            borderBottom: menu ? "1px solid var(--border-hairline)" : "1px solid transparent",
          }}
        >
          <div
            style={{
              maxWidth: "var(--container)",
              margin: "0 auto",
              padding: "var(--space-6) var(--gutter) var(--space-8)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
            }}
          >
            {items.map((it) => (
              <NavAnchor
                key={it.label}
                href={it.href}
                onClick={() => setMenu(false)}
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border-hairline)",
                  color: "var(--text-display)",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.375rem",
                  letterSpacing: "-0.015em",
                  textDecoration: "none",
                }}
              >
                {it.label}
              </NavAnchor>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/** Underline tab set. Used for the year switcher on Camps and Fish Tank. */
export function Tabs<T extends string>({
  items = [],
  value,
  onChange,
  className = "",
  style,
}: {
  items: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      role="tablist"
      className={className}
      style={{
        display: "inline-flex",
        gap: "var(--space-8)",
        borderBottom: "1px solid var(--border-hairline)",
        maxWidth: "100%",
        overflowX: "auto",
        scrollbarWidth: "none",
        ...style,
      }}
    >
      {items.map((it) => {
        const on = it.value === value;
        return (
          <button
            key={it.value}
            role="tab"
            aria-selected={on}
            onClick={() => onChange(it.value)}
            style={{
              position: "relative",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 14px",
              fontFamily: "var(--font-text)",
              fontWeight: on ? "var(--weight-bold)" : "var(--weight-medium)",
              fontSize: "var(--size-body)",
              color: on ? "var(--text-display)" : "var(--text-muted)",
              transition: "var(--transition-control)",
              whiteSpace: "nowrap",
              flex: "0 0 auto",
            }}
          >
            {it.label}
            <span
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: -1,
                height: 2.5,
                background: "var(--surface-accent)",
                borderRadius: 2,
                transform: on ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform var(--dur-base) var(--ease-out-expo)",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}

/** Ink footer with an oversized wordmark and link columns. */
export function Footer({
  brand = "BizBuzz",
  tagline,
  columns = [],
  social = [],
  legal,
  className = "",
  style,
}: {
  brand?: string;
  tagline?: ReactNode;
  columns?: { title: string; links: { label: string; href: string }[] }[];
  social?: { label: string; href: string }[];
  legal?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <footer
      className={`bb-on-ink ${className}`}
      style={{ background: "var(--ink-900)", color: "var(--cream-100)", ...style }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--space-13) var(--gutter) var(--space-9)",
        }}
      >
        <div
          className="bb-collapse-2"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(240px,1.15fr) 3fr",
            gap: "var(--space-11)",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(3.5rem,7vw,6.5rem)",
                lineHeight: 0.86,
                letterSpacing: "-0.04em",
                color: "var(--cream-100)",
              }}
            >
              {brand}
            </div>
            {tagline && (
              <p
                style={{
                  marginTop: "var(--space-7)",
                  maxWidth: "30ch",
                  color: "rgba(251,245,233,.66)",
                  fontSize: "var(--size-body-sm)",
                  lineHeight: 1.6,
                }}
              >
                {tagline}
              </p>
            )}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: "var(--space-9)",
            }}
          >
            {columns.map((col) => (
              <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
                <span
                  style={{
                    fontFamily: "var(--font-text)",
                    fontWeight: 700,
                    fontSize: "var(--size-caption)",
                    letterSpacing: "var(--tracking-eyebrow)",
                    textTransform: "uppercase",
                    color: "rgba(251,245,233,.5)",
                  }}
                >
                  {col.title}
                </span>
                {col.links.map((l) => (
                  <NavAnchor
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      color: "var(--cream-100)",
                      textDecoration: "none",
                      lineHeight: 1.3,
                    }}
                  >
                    {l.label}
                  </NavAnchor>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "var(--space-12)",
            paddingTop: "var(--space-7)",
            borderTop: "1px solid rgba(251,245,233,.16)",
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-7)",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "var(--size-caption)", color: "rgba(251,245,233,.5)" }}>{legal}</span>
          <div style={{ display: "flex", gap: "var(--space-6)" }}>
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(251,245,233,.72)", fontSize: "var(--size-body-sm)" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
