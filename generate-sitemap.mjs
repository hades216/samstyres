import fs from "fs";
import { ALL_LOCATION_SLUGS } from "./src/lib/location-pages.js";
import { ALL_SERVICE_SLUGS } from "./src/lib/services-data.js";
import { ALL_GUIDE_SLUGS } from "./src/lib/guides-data.js";

const BASE_URL = "https://www.samsmobiletyres.co.uk";
const lastmod = new Date().toISOString().slice(0, 10);

const entries = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/coverage-areas", priority: "0.8", changefreq: "monthly" },
  { path: "/guides", priority: "0.7", changefreq: "weekly" },
  { path: "/reviews", priority: "0.8", changefreq: "weekly" },
  { path: "/about", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/faqs", priority: "0.7", changefreq: "monthly" },
  { path: "/puncture-repair-guide", priority: "0.8", changefreq: "monthly" },
  ...ALL_SERVICE_SLUGS.map((s) => ({ path: `/${s}`, priority: "0.9", changefreq: "monthly" })),
  ...ALL_LOCATION_SLUGS.map((l) => ({ path: `/${l}`, priority: "0.9", changefreq: "monthly" })),
  ...ALL_GUIDE_SLUGS.map((g) => ({ path: `/${g}`, priority: "0.7", changefreq: "monthly" })),
];

const urls = entries
  .map(
    (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync("dist/sitemap.xml", xml, "utf8");
fs.writeFileSync("public/sitemap.xml", xml, "utf8");
console.log(`Generated sitemap.xml with ${entries.length} URLs`);
