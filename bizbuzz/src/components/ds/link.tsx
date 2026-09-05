import Link from "next/link";
import type { AnchorHTMLAttributes, ElementType } from "react";

/**
 * Internal routes get client-side navigation; hashes, mailto: and external
 * URLs stay plain anchors. Every DS control that can take an href uses this
 * so pages never have to think about which kind of link they are passing.
 */
export function isInternalRoute(href?: string): boolean {
  return typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
}

/** Native year links fire hashchange, including when already on the same page.
 * The optional prefix also keeps them working in the GitHub Pages preview. */
export function InternalLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  if (href.includes("#")) {
    return <a {...props} href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${href}`} />;
  }
  return <Link {...props} href={href} />;
}

export function linkTag(href?: string, fallback: ElementType = "button"): ElementType {
  if (!href) return fallback;
  return isInternalRoute(href) ? InternalLink : "a";
}
