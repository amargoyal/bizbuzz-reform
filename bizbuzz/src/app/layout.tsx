import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { BASE_PATH, CONTACT_EMAIL, LINKS, SITE_URL } from "@/lib/site";
import { OG_IMAGE } from "@/lib/metadata";
import "./globals.css";

// Big Shoulders: the City of Chicago's municipal typeface, for headings and numbers.
// Its optical-size axis keeps small headings sturdy and large ones tight.
const shoulders = localFont({
  src: "./fonts/big-shoulders-latin-variable.woff2",
  weight: "100 900",
  variable: "--font-shoulders",
  display: "swap",
  fallback: ["Arial Narrow", "sans-serif"],
  adjustFontFallback: "Arial",
});

// Figtree: body copy and interface text.
const figtree = localFont({
  src: "./fonts/figtree-latin-variable.woff2",
  weight: "300 900",
  variable: "--font-figtree",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
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
    locale: "en_US",
    url: SITE_URL,
    title: "BizBuzz NFP | Youth Entrepreneurship Camps & Fish Tank",
    description:
      "Free entrepreneurship camps, workshops, and pitch competitions for elementary and middle school students across Chicagoland.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizBuzz NFP | Youth Entrepreneurship Camps & Fish Tank",
    description:
      "Free entrepreneurship camps, workshops, and pitch competitions for students across Chicagoland.",
    images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico`, sizes: "any" },
      { url: `${BASE_PATH}/logo.png`, type: "image/png" },
    ],
    shortcut: `${BASE_PATH}/logo.png`,
    apple: `${BASE_PATH}/logo.png`,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// Organization details for search engines.
const organization = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "BizBuzz NFP",
  alternateName: "BizBuzz",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: CONTACT_EMAIL,
  foundingDate: "2024-04",
  slogan: "Build Biz. Bring Buzz.",
  description:
    "A student-run nonprofit in Naperville, Illinois teaching entrepreneurship to elementary and middle school students through free summer camps, workshops, and the Fish Tank pitch competition.",
  address: { "@type": "PostalAddress", addressLocality: "Naperville", addressRegion: "IL", addressCountry: "US" },
  areaServed: "Naperville and Chicagoland, Illinois",
  sameAs: [LINKS.instagram, LINKS.linkedin],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${shoulders.variable} ${figtree.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
        />
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
