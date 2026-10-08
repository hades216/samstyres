import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ALL_SERVICE_SLUGS } from "@/lib/services-data";
import { ALL_LOCATION_SLUGS } from "@/lib/location-pages";
import { ALL_GUIDE_SLUGS } from "@/lib/guides-data";

const BASE_URL = "https://www.samsmobiletyres.co.uk";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().slice(0, 10);
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          ...ALL_SERVICE_SLUGS.map((slug): SitemapEntry => ({
            path: `/${slug}`,
            changefreq: "monthly",
            priority: "0.9",
          })),
          ...ALL_LOCATION_SLUGS.map((slug): SitemapEntry => ({
            path: `/${slug}`,
            changefreq: "monthly",
            priority: "0.9",
          })),
          ...ALL_GUIDE_SLUGS.map((slug): SitemapEntry => ({
            path: `/${slug}`,
            changefreq: "monthly",
            priority: "0.7",
          })),
          { path: "/services", changefreq: "weekly", priority: "0.9" },
          { path: "/coverage-areas", changefreq: "monthly", priority: "0.8" },
          { path: "/guides", changefreq: "weekly", priority: "0.7" },
          { path: "/reviews", changefreq: "weekly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/faqs", changefreq: "monthly", priority: "0.7" },
          { path: "/puncture-repair-guide", changefreq: "monthly", priority: "0.8" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <lastmod>${lastmod}</lastmod>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
