import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const sitemapPath = path.resolve(rootDir, 'public/sitemap.xml');

// 1. Parse routes from sitemap.xml
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const locMatches = [...sitemapContent.matchAll(/<loc>https:\/\/www\.samsmobiletyres\.co\.uk([^<]*)<\/loc>/g)];
const routes = locMatches.map(m => m[1] === '' ? '/' : m[1]);
console.log(`Parsed ${routes.length} routes from sitemap.xml`);

// 2. Start server
const serverProcess = spawn('node', ['.output/server/index.mjs'], {
  cwd: rootDir,
  stdio: 'inherit'
});

// Wait 4 seconds for server to start
await new Promise(r => setTimeout(r, 4000));

async function fetchRoute(route) {
  const url = `http://localhost:3000${route}`;
  const filename = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}.html`;
  const outPath = path.resolve(distDir, filename);

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      fs.writeFileSync(outPath, text, 'utf8');
      console.log(`[OK] ${route} => ${filename} (${text.length} bytes)`);
      return;
    } catch (err) {
      console.warn(`[WARN] Attempt ${attempt} failed for ${route}: ${err.message}`);
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  throw new Error(`Failed to render ${route} after 3 attempts`);
}

try {
  for (const r of routes) {
    await fetchRoute(r);
  }
  console.log('All routes pre-rendered successfully!');
} finally {
  serverProcess.kill('SIGTERM');
  console.log('Server stopped');
}
