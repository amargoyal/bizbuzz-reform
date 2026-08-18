import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Emitted once at build time so the static export can include it.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/camps", priority: 0.9, changeFrequency: "weekly" },
    { path: "/fish-tank", priority: 0.9, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/office-hours", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sponsors", priority: 0.8, changeFrequency: "monthly" },
    { path: "/workshops", priority: 0.8, changeFrequency: "monthly" },
    { path: "/seasons", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
