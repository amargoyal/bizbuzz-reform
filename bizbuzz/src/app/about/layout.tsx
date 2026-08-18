import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BizBuzz NFP was founded in April 2024 by two Naperville North juniors after finding 90% of the city's K-8 schools offer no business education. Meet the student team, read the press, and see the grant that funds us.",
  alternates: { canonical: "/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
