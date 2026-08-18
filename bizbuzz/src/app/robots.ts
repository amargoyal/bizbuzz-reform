import type { MetadataRoute } from "next";

// Emitted once at build time so the static export can include it.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.bizbuzz.it/sitemap.xml",
  };
}
