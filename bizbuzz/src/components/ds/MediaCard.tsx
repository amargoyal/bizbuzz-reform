"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

/**
 * Photo block with an optional caption bar and floating chips.
 * The workhorse of BizBuzz marketing pages — camp photos, Fish Tank stage shots.
 */
export function MediaCard({
  src,
  alt = "",
  ratio = "4 / 3",
  radius = "var(--radius-lg)",
  sizes = "(max-width: 900px) 100vw, 45vw",
  title,
  meta,
  chips = [],
  scrim = false,
  float = false,
  priority = false,
  className = "",
  style,
}: {
  src: string;
  alt?: string;
  ratio?: string;
  radius?: string;
  sizes?: string;
  title?: ReactNode;
  meta?: ReactNode;
  chips?: string[];
  scrim?: boolean;
  float?: boolean;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <figure
      className={className}
      style={{ margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-6)", ...style }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: ratio,
          borderRadius: radius,
          overflow: "hidden",
          background: "var(--surface-sunken)",
          boxShadow: float ? "var(--shadow-lg)" : undefined,
        }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
        {scrim && (
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "var(--scrim-bottom)" }} />
        )}
        {chips.length > 0 && (
          <div
            style={{
              position: "absolute",
              left: "var(--space-6)",
              bottom: "var(--space-6)",
              right: "var(--space-6)",
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-3)",
            }}
          >
            {chips.map((c) => (
              <span
                key={c}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: 34,
                  padding: "0 16px",
                  borderRadius: "var(--radius-pill)",
                  background: "var(--surface-glass-inverse)",
                  border: "1px solid rgba(251,245,233,.22)",
                  backdropFilter: "blur(var(--blur-glass))",
                  WebkitBackdropFilter: "blur(var(--blur-glass))",
                  color: "var(--cream-100)",
                  fontFamily: "var(--font-text)",
                  fontWeight: 500,
                  fontSize: "var(--size-caption)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
      {(title || meta) && (
        <figcaption style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          {title && <span className="bb-display-4">{title}</span>}
          {meta && <span className="bb-caption">{meta}</span>}
        </figcaption>
      )}
    </figure>
  );
}

/** Pull-quote card: oversized mark, serif quote, attribution, optional portrait. */
export function Testimonial({
  quote,
  name,
  detail,
  imageSrc,
  imageAlt = "",
  tag,
  className = "",
  style,
}: {
  quote: ReactNode;
  name: ReactNode;
  detail?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  tag?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`bb-collapse-2 ${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: imageSrc ? "minmax(0,1.5fr) minmax(0,1fr)" : "1fr",
        gap: "var(--space-9)",
        alignItems: "stretch",
        background: "var(--surface-card)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-10)",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-8)",
          justifyContent: "space-between",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 84,
            lineHeight: 0.6,
            color: "var(--buzz-500)",
            letterSpacing: "-0.04em",
          }}
        >
          &ldquo;
        </span>
        <blockquote className="bb-quote" style={{ margin: 0 }}>
          {quote}
        </blockquote>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontFamily: "var(--font-text)",
              fontWeight: "var(--weight-bold)" as CSSProperties["fontWeight"],
              fontSize: "var(--size-body)",
              color: "var(--text-display)",
            }}
          >
            {name}
          </span>
          {detail && <span className="bb-caption">{detail}</span>}
        </div>
      </div>
      {imageSrc && (
        <div
          style={{
            position: "relative",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "var(--surface-sunken)",
            minHeight: 240,
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 35vw"
            style={{ objectFit: "cover" }}
          />
          {tag && (
            <span
              style={{
                position: "absolute",
                top: "var(--space-5)",
                right: "var(--space-5)",
                display: "inline-flex",
                alignItems: "center",
                height: 32,
                padding: "0 15px",
                borderRadius: "var(--radius-pill)",
                background: "var(--surface-glass-inverse)",
                border: "1px solid rgba(251,245,233,.22)",
                backdropFilter: "blur(var(--blur-glass))",
                WebkitBackdropFilter: "blur(var(--blur-glass))",
                color: "var(--cream-100)",
                fontFamily: "var(--font-text)",
                fontWeight: 500,
                fontSize: "var(--size-caption)",
              }}
            >
              {tag}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
