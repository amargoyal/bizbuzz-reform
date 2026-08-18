import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fish Tank",
  description:
    "Fish Tank is the BizBuzz pitch competition for grades 3–9: two divisions, real judges including a Shark Tank alum and the Mayor of Naperville, and free to enter whether or not you attended camp.",
  alternates: { canonical: "/fish-tank" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
