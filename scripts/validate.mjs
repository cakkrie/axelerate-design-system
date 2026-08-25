#!/usr/bin/env node
/**
 * Integrity checks for the Axelerate Design System bundle.
 * Zero dependencies — Node built-ins only. Exits 1 on any failure.
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const fail = (check, msg) => failures.push(`${check}: ${msg}`);
const rel = (p) => relative(ROOT, p);

function walk(dir, keep, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, keep, out);
    else if (keep(p)) out.push(p);
  }
  return out;
}

const manifest = JSON.parse(readFileSync(join(ROOT, '_ds_manifest.json'), 'utf8'));

// ---- 1. manifest completeness -------------------------------------------
for (const c of manifest.components) {
  const jsx = join(ROOT, c.sourcePath);
  for (const [label, p] of [
    ['.jsx', jsx],
    ['.d.ts', jsx.replace(/\.jsx$/, '.d.ts')],
    ['.prompt.md', jsx.replace(/\.jsx$/, '.prompt.md')],
  ]) {
    if (!existsSync(p)) fail('manifest', `${c.name} is missing ${label} (${rel(p)})`);
  }
}
for (const p of walk(join(ROOT, 'components'), (f) => f.endsWith('.jsx'))) {
  if (!manifest.components.some((c) => join(ROOT, c.sourcePath) === p)) {
    fail('manifest', `${rel(p)} is on disk but not in _ds_manifest.json`);
  }
}

// ---- 3. specimen card headers -------------------------------------------
const cardFiles = [
  ...walk(join(ROOT, 'guidelines'), (p) => p.endsWith('.html')),
  ...walk(join(ROOT, 'components'), (p) => p.endsWith('.card.html')),
  ...walk(join(ROOT, 'ui_kits'), (p) => p.endsWith('index.html')),
];
const attr = (s, k) => (s.match(new RegExp(k + '="([^"]*)"')) || [])[1];
for (const p of cardFiles) {
  const m = readFileSync(p, 'utf8').slice(0, 800).match(/<!--\s*@dsCard\s+([\s\S]*?)-->/);
  if (!m) { fail('cards', `${rel(p)} has no @dsCard header`); continue; }
  const viewport = attr(m[1], 'viewport');
  if (!attr(m[1], 'group')) fail('cards', `${rel(p)} @dsCard has no group`);
  if (!attr(m[1], 'name')) fail('cards', `${rel(p)} @dsCard has no name`);
  if (!viewport || !/^\d+x\d+$/.test(viewport)) {
    fail('cards', `${rel(p)} @dsCard viewport is "${viewport}", expected WxH`);
  }
}

// ---- 4. asset references resolve ----------------------------------------
const scanned = [
  ...walk(join(ROOT, 'components'), (p) => /\.(jsx|html|css)$/.test(p)),
  ...walk(join(ROOT, 'guidelines'), (p) => /\.(html|css)$/.test(p)),
  ...walk(join(ROOT, 'ui_kits'), (p) => /\.(html|css|js)$/.test(p)),
  ...walk(join(ROOT, 'tokens'), (p) => p.endsWith('.css')),
];
for (const p of scanned) {
  for (const m of readFileSync(p, 'utf8').matchAll(/assets\/(icons|doodles)\/([A-Za-z0-9._-]+\.svg)/g)) {
    const target = join(ROOT, 'assets', m[1], m[2]);
    if (!existsSync(target)) fail('assets', `${rel(p)} references missing ${rel(target)}`);
  }
}

// ---- 5. token resolution -------------------------------------------------
// Matches plain CSS custom-property definitions (`--foo: value;`) and the
// React inline-style idiom `style={{'--foo': value}}`, where the property
// name is a quoted JS object key immediately followed by `:` — the quote
// sits where CSS would have only whitespace, so it's optional here.
const DEF = /--([A-Za-z0-9-]+)['"]?\s*:/g;
const USE = /var\(\s*--([A-Za-z0-9-]+)/g;
const globalTokens = new Set();
for (const p of walk(join(ROOT, 'tokens'), (f) => f.endsWith('.css'))) {
  for (const m of readFileSync(p, 'utf8').matchAll(DEF)) globalTokens.add(m[1]);
}
for (const p of scanned) {
  const src = readFileSync(p, 'utf8');
  const local = new Set([...src.matchAll(DEF)].map((m) => m[1]));
  for (const m of src.matchAll(USE)) {
    if (!globalTokens.has(m[1]) && !local.has(m[1])) {
      fail('tokens', `${rel(p)} uses --${m[1]}, not defined in tokens/ nor in the file itself`);
    }
  }
}

// ---- report --------------------------------------------------------------
console.log(
  `components ${manifest.components.length} · cards ${cardFiles.length} · ` +
  `tokens ${globalTokens.size} · ` +
  `icons ${walk(join(ROOT, 'assets/icons'), (p) => p.endsWith('.svg')).length} · ` +
  `doodles ${walk(join(ROOT, 'assets/doodles'), (p) => p.endsWith('.svg')).length}`
);
if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const f of failures) console.error('  ' + f);
  process.exit(1);
}
console.log('All checks passed.');
