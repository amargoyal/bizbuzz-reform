import { WORKSHOP_STUDENTS } from "@/data/impact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    `Free BizBuzz entrepreneurship workshops delivered at elementary schools, business fairs and community centers across Chicagoland — ${WORKSHOP_STUDENTS}+ workshop and fair participation since 2024.`,
  alternates: { canonical: "/workshops" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
