import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { isExternal } from "@/lib/site";

type Variant = "primary" | "dark" | "outline" | "light";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "small";
  block?: boolean;
  /** Arrow for moving forward, external for leaving the site. Detected when omitted. */
  icon?: "arrow" | "external" | "mail" | "none";
  className?: string;
};

/** Every button on the site is a link to somewhere. */
export function Button({ href, children, variant = "primary", size, block, icon, className }: Props) {
  const external = isExternal(href);
  const mail = href.startsWith("mailto:");
  const glyph = icon ?? (external ? "external" : mail ? "mail" : "arrow");
  const classes = ["btn", `btn--${variant}`, size ? `btn--${size}` : "", block ? "btn--block" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      <span>{children}</span>
      {glyph !== "none" && <Icon name={glyph} />}
      {external && <span className="visually-hidden"> (opens in a new tab)</span>}
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  if (mail || href.startsWith("#")) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}

/** A text link with a yellow underline and an arrow. */
export function GoLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const external = isExternal(href);
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const inner = (
    <>
      <span>{children}</span>
      <Icon name={external ? "external" : "arrow"} />
      {external && <span className="visually-hidden"> (opens in a new tab)</span>}
    </>
  );
  if (external || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a className={["go", className].filter(Boolean).join(" ")} href={href} {...props}>
        {inner}
      </a>
    );
  }
  return (
    <Link className={["go", className].filter(Boolean).join(" ")} href={href}>
      {inner}
    </Link>
  );
}

/** Inline link that opens in a new tab when it leaves the site. */
export function TextLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  if (isExternal(href)) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }
  if (href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
