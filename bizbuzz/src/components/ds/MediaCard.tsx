"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

/**
 * Photo block with optional captions and supporting facts.
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
          <ul className="bb-facts bb-photo-facts">
            {chips.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
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

/** Readable quote, attribution, and optional portrait. */
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
                borderRadius: "var(--radius-sm)",
                background: "var(--surface-photo-caption)",
                border: "1px solid rgba(255, 255, 255,.22)",
                color: "var(--neutral-0)",
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
