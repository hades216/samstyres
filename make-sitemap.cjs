const fs = require('fs');

const services = [
  'emergency-mobile-tyre-fitting',
  'mobile-tyre-replacement',
  'mobile-puncture-repair',
  'roadside-tyre-assistance',
  'locking-wheel-nut-removal',
  'car-recovery',
  'jump-start-service',
  'fleet-mobile-tyre-services',
  'van-tyre-replacement',
  'same-day-tyre-fitting',
  'premium-tyre-brands',
  'winter-tyres',
  'summer-tyres',
  'all-season-tyres',
  'tpms-sensor-replacement',
  'tyre-pressure-check',
  'emergency-blowout-assistance',
  'locking-wheel-key-recovery',
  'home-tyre-fitting',
  'workplace-tyre-fitting',
  'mobile-tyre-fitting-luxury-cars'
];

const locations = [
  'mobile-tyre-fitting-enfield',
  'mobile-tyre-fitting-waltham-cross',
  'mobile-tyre-fitting-cheshunt',
  'mobile-tyre-fitting-edmonton',
  'mobile-tyre-fitting-chingford',
  'mobile-tyre-fitting-waltham-abbey',
  'mobile-tyre-fitting-st-albans',
  'mobile-tyre-fitting-watford',
  'mobile-tyre-fitting-harlow',
  'mobile-tyre-fitting-bishops-stortford',
  'mobile-tyre-fitting-stansted',
  'mobile-tyre-fitting-epping',
  'mobile-tyre-fitting-ware',
  'mobile-tyre-fitting-stevenage',
  'mobile-tyre-fitting-ilford',
  'mobile-tyre-fitting-north-london',
  'mobile-tyre-fitting-essex',
  'mobile-tyre-fitting-hertfordshire',
  'mobile-tyre-fitting-m25-corridor'
];

const guides = [
  'm25-tyre-blowout-what-to-do',
  'emergency-tyre-fitting-a10-enfield',
  'can-a-run-flat-tyre-be-repaired',
  'mobile-tyre-fitting-cost-enfield',
  'lost-locking-wheel-nut-key',
  'puncture-repair-or-tyre-replacement',
  'how-long-does-mobile-tyre-fitting-take',
  'emergency-van-tyre-replacement-north-london',
  'how-to-read-a-tyre-sidewall',
  'tpms-warning-light-meaning',
  'uk-tyre-law',
  'wheel-balancing-explained',
  'car-battery-life'
];

const BASE_URL = 'https://www.samsmobiletyres.co.uk';
const lastmod = new Date().toISOString().slice(0, 10);

const entries = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/coverage-areas', priority: '0.8', changefreq: 'monthly' },
  { path: '/guides', priority: '0.7', changefreq: 'weekly' },
  { path: '/reviews', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/faqs', priority: '0.7', changefreq: 'monthly' },
  { path: '/puncture-repair-guide', priority: '0.8', changefreq: 'monthly' },
  ...services.map(s => ({ path: '/' + s, priority: '0.9', changefreq: 'monthly' })),
  ...locations.map(l => ({ path: '/' + l, priority: '0.9', changefreq: 'monthly' })),
  ...guides.map(g => ({ path: '/' + g, priority: '0.7', changefreq: 'monthly' }))
];

const urls = entries.map(e => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync('dist/sitemap.xml', xml, 'utf8');
fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log('SUCCESS: Written sitemap.xml with ' + entries.length + ' URLs');
