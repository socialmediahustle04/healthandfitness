import type { MetadataRoute } from "next";
import { bestPages, categoryHubs, guides, pillarGuide } from "@/content/library";
import { site } from "@/lib/design-tokens";

const staticRoutes = [
  "",
  "/about",
  "/advertising-disclosure",
  "/best",
  "/categories",
  "/contact",
  "/editorial-policy",
  "/guides",
  "/how-we-review",
  "/medical-disclaimer",
  "/privacy-policy",
  "/terms",
  "/weight-loss-after-40"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes,
    ...guides.map((guide) => `/guides/${guide.slug}`),
    ...categoryHubs.map((category) => `/categories/${category.slug}`),
    ...bestPages.map((page) => `/best/${page.slug}`)
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" || route === `/${pillarGuide.slug}` ? 1 : 0.7
  }));
}
