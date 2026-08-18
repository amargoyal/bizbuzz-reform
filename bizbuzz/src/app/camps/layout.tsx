import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summer Camp",
  description:
    "The free BizBuzz summer entrepreneurship camp for grades 3–8 in Naperville. Six sessions, guest speakers, and a business you pitch on stage — every season from 2024 to 2027.",
  alternates: { canonical: "/camps" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
