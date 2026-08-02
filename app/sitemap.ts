import type { MetadataRoute } from "next";
import { serviceHref, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    ...services.map((s) => ({ path: serviceHref(s.slug), priority: 0.85 })),
    { path: "/realisations", priority: 0.8 },
    { path: "/a-propos", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}
