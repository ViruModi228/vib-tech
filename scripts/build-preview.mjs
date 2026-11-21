// Builds a portable static preview into ./preview: flat .html pages with relative asset paths,
// so the site can be opened from any folder or sub-path (e.g. an artifact or a shared drive).
// Cross-platform (Windows, macOS, Linux). Usage: npm run preview:build
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'out');
const preview = path.join(root, 'preview');

execSync('npx next build', { stdio: 'inherit', env: { ...process.env, NEXT_PUBLIC_PREVIEW: '1' } });

fs.rmSync(preview, { recursive: true, force: true });
fs.renameSync(out, preview);
// Some static hosts reserve names starting with "_": move _next -> assets
fs.renameSync(path.join(preview, '_next'), path.join(preview, 'assets'));

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
  d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]);

for (const file of walk(preview)) {
  if (file.endsWith('.txt')) { fs.rmSync(file); continue; }
  if (!/\.(html|js|css)$/.test(file)) continue;
  let s = fs.readFileSync(file, 'utf8');
  const before = s;
  if (file.endsWith('.css')) s = s.replaceAll('/__rel__/_next/static/media/', '../media/');
  s = s.replaceAll('/__rel__/_next/', './assets/').replaceAll('/__rel__', '.');
  // Favicons from app/icon.png etc. are emitted as root-absolute links
  if (file.endsWith('.html')) s = s.replace(/href="\/((?:favicon\.ico|icon\.png|apple-icon\.png)[^"]*)"/g, 'href="./$1"');
  if (file.endsWith('.js')) s = s.replaceAll('�', '\\ufffd');
  if (s !== before) fs.writeFileSync(file, s);
}
console.log('\nPreview ready in ./preview — open preview/index.html via any static server.');
