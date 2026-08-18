import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Free BizBuzz entrepreneurship workshops delivered at elementary schools, business fairs and community centers across Chicagoland — 7 series, 17 sessions, 560+ students reached.",
  alternates: { canonical: "/workshops" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
