import type { MetadataRoute } from "next";

import { ADVISORY_AREAS } from "@/content/advisory";
import { INSIGHTS } from "@/content/insights";
import { HTML_LANG, LOCALES, absoluteUrl } from "@/lib/i18n";

/**
 * One entry per locale-neutral route, listing every locale as an alternate.
 * `priority` encodes the editorial hierarchy: the advisory core outranks the
 * supporting lines, and legal pages sit last.
 */
const ROUTES: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/advisory", priority: 0.9, changeFrequency: "monthly" },
  ...ADVISORY_AREAS.map((area) => ({
    path: `/advisory/${area.slug}`,
    priority: area.tier === "core" ? 0.9 : 0.7,
    changeFrequency: "monthly" as const,
  })),
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/approach", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ecosystem", priority: 0.8, changeFrequency: "monthly" },
  { path: "/market", priority: 0.7, changeFrequency: "monthly" },
  { path: "/investors", priority: 0.7, changeFrequency: "monthly" },
  { path: "/companies", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.6, changeFrequency: "monthly" },
  ...INSIGHTS.map((insight) => ({
    path: `/insights/${insight.slug}`,
    priority: 0.5,
    changeFrequency: "yearly" as const,
  })),
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/compliance", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: absoluteUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [HTML_LANG[l], absoluteUrl(l, route.path)]),
        ),
      },
    })),
  );
}
