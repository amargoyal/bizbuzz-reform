import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Sixteen Naperville businesses, families and foundations have funded three seasons of free BizBuzz camps, workshops and Fish Tank. See the sponsor wall, the tiers, and exactly what each dollar buys.",
  alternates: { canonical: "/sponsors" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
