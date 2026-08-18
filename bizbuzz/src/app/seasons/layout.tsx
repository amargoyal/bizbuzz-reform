import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasons",
  description:
    "Every BizBuzz season since April 2024 — camp cohorts, Fish Tank competitions, workshops and the numbers as they actually landed, from the first summer through to 2027 registration.",
  alternates: { canonical: "/seasons" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
