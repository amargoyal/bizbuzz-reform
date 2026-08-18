import type { Metadata } from "next";
import { Figtree, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { BASE_PATH, SITE_URL } from "@/lib/site";

/* Two voices: Newsreader (editorial serif) says what we believe, Figtree
   (geometric sans) says how it works. JetBrains Mono labels data. */
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BizBuzz NFP | Youth Entrepreneurship Camps & Fish Tank in Naperville",
    template: "%s | BizBuzz NFP",
  },
  description:
    "BizBuzz NFP is a student-run 501(c)(3) nonprofit in Naperville, Illinois teaching entrepreneurship to elementary and middle school students through free summer camps, workshops, and the Fish Tank pitch competition.",
  keywords: [
    "BizBuzz",
    "youth entrepreneurship",
    "kids business camp",
    "Naperville summer camp",
    "Fish Tank competition",
    "student nonprofit",
    "entrepreneurship education",
    "Chicagoland",
  ],
  openGraph: {
    type: "website",
    siteName: "BizBuzz NFP",
    url: SITE_URL,
    title: "BizBuzz NFP | Youth Entrepreneurship Camps & Fish Tank",
    description:
      "Free entrepreneurship camps, workshops, and pitch competitions for elementary and middle school students across Chicagoland.",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "BizBuzz NFP logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizBuzz NFP | Youth Entrepreneurship Camps & Fish Tank",
    description:
      "Free entrepreneurship camps, workshops, and pitch competitions for students across Chicagoland.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico`, sizes: "any" },
      { url: `${BASE_PATH}/logo.png`, type: "image/png" },
    ],
    shortcut: `${BASE_PATH}/logo.png`,
    apple: `${BASE_PATH}/logo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${figtree.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
