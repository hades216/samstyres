import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const locations = readFileSync(new URL("../src/lib/location-pages.ts", import.meta.url), "utf8");
const guides = readFileSync(new URL("../src/lib/guides-data.ts", import.meta.url), "utf8");
const sitemap = readFileSync(new URL("../src/routes/sitemap[.]xml.ts", import.meta.url), "utf8");
const vercel = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));

const slugs = [...locations.matchAll(/slug: "(mobile-tyre-fitting-[^"]+)"/g)].map((m) => m[1]);
const titles = [...locations.matchAll(/title: "([^"]+)"/g)].map((m) => m[1]);
const descriptions = [...locations.matchAll(/description:\s*"([^"]+)"/g)].map((m) => m[1]);

assert.ok(slugs.length > 0, "expected at least one location slug");
assert.equal(new Set(slugs).size, slugs.length, "location slugs must be unique");
assert.equal(new Set(titles).size, titles.length, "location titles must be unique");
assert.equal(new Set(descriptions).size, descriptions.length, "location descriptions must be unique");
assert.match(sitemap, /ALL_LOCATION_SLUGS/);

const guideSlugs = [...guides.matchAll(/^\s*slug: "([a-z0-9-]+)",/gm)].map((m) => m[1]);
assert.ok(guideSlugs.length > 0, "expected at least one guide slug");
assert.equal(new Set(guideSlugs).size, guideSlugs.length, "guide slugs must be unique");
assert.match(sitemap, /ALL_GUIDE_SLUGS/);

assert.equal(vercel.redirects.filter((redirect) => redirect.permanent).length, 4);

console.log("SEO route checks passed");
