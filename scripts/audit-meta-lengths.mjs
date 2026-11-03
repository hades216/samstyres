import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

function checkHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  const results = [];
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      results.push(...checkHtmlFiles(full));
    } else if (f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
      const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                        content.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
      const title = titleMatch ? titleMatch[1] : '';
      const desc = descMatch ? descMatch[1] : '';
      results.push({
        file: path.relative(distDir, full),
        titleLen: title.length,
        title,
        descLen: desc.length,
        desc
      });
    }
  }
  return results;
}

if (fs.existsSync(distDir)) {
  const res = checkHtmlFiles(distDir);
  console.log(`Total HTML pages in dist: ${res.length}`);
  const titleViolations = res.filter(r => r.titleLen < 50 || r.titleLen > 60);
  const descViolations = res.filter(r => r.descLen < 120 || r.descLen > 160);
  console.log(`Title breaches (<50 or >60): ${titleViolations.length}`);
  titleViolations.forEach(v => console.log(` TITLE [${v.titleLen}]: ${v.file} => "${v.title}"`));
  console.log(`\nDesc breaches (<120 or >160): ${descViolations.length}`);
  descViolations.forEach(v => console.log(` DESC [${v.descLen}]: ${v.file} => "${v.desc}"`));
} else {
  console.log('Dist dir not found');
}
