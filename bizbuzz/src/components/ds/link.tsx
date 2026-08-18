import Link from "next/link";
import type { ElementType } from "react";

/**
 * Internal routes get client-side navigation; hashes, mailto: and external
 * URLs stay plain anchors. Every DS control that can take an href uses this
 * so pages never have to think about which kind of link they are passing.
 */
export function isInternalRoute(href?: string): boolean {
  return typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
}

export function linkTag(href?: string, fallback: ElementType = "button"): ElementType {
  if (!href) return fallback;
  return isInternalRoute(href) ? Link : "a";
}
