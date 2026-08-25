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

// ---- 2. barrel agreement -------------------------------------------------
const manifestNames = manifest.components.map((c) => c.name);
const barrel = readFileSync(join(ROOT, 'index.js'), 'utf8');
const barrelPairs = [...barrel.matchAll(/export\s*\{\s*([A-Za-z0-9_]+)\s*\}\s*from\s*'([^']+)'/g)]
  .map((m) => ({ name: m[1], path: m[2].replace(/^\.\//, '') }));
const barrelNames = barrelPairs.map((p) => p.name);
for (const n of manifestNames) {
  if (!barrelNames.includes(n)) fail('barrel', `index.js does not export ${n}`);
}
for (const n of barrelNames) {
  if (!manifestNames.includes(n)) fail('barrel', `index.js exports ${n}, which is not in the manifest`);
}
for (const { name, path } of barrelPairs) {
  const expected = manifest.components.find((c) => c.name === name)?.sourcePath;
  if (expected && path !== expected) {
    fail('barrel', `index.js exports ${name} from ${path}, manifest says ${expected}`);
  }
}
const types = readFileSync(join(ROOT, 'index.d.ts'), 'utf8');
const typePaths = [...types.matchAll(/export\s*\*\s*from\s*'([^']+)'/g)].map((m) => m[1].replace(/^\.\//, ''));
for (const c of manifest.components) {
  const want = c.sourcePath.replace(/\.jsx$/, '');
  if (!typePaths.includes(want)) fail('barrel', `index.d.ts does not re-export ${want}`);
}
if (typePaths.length !== manifestNames.length) {
  fail('barrel', `index.d.ts has ${typePaths.length} re-exports, expected ${manifestNames.length}`);
}

// ---- 6. package exports resolve -----------------------------------------
const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
for (const [key, val] of Object.entries(pkg.exports ?? {})) {
  for (const t of typeof val === 'string' ? [val] : Object.values(val)) {
    if (t.includes('*')) {
      const dir = join(ROOT, t.split('*')[0]);
      if (!existsSync(dir)) fail('exports', `"${key}" → ${t} points at missing directory ${rel(dir)}`);
    } else if (!existsSync(join(ROOT, t))) {
      fail('exports', `"${key}" → ${t} does not exist`);
    }
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
// Blind spot: some components/*/*.card.html specimens build icon paths
// from a template literal, e.g. url('../../assets/icons/${n}.svg') with
// `n` supplied separately (e.g. <Di n="search"/>). A static regex can't
// resolve the interpolated `${n}`, so those references are invisible to
// this check and go unverified. A JSX-aware resolver is out of scope.
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
// Captures the token name and, if present, the comma that opens a
// var(--x, fallback) fallback argument. A var() with a fallback can never
// break at runtime — CSS falls back to the second argument whenever the
// property is unset — so it's out of scope for this check regardless of
// whether the property is ever defined anywhere. The fallback expression
// itself may nest further parens/commas (e.g. var(--a, var(--b, 1px)));
// we only need to detect that a fallback is present, not parse it.
const USE = /var\(\s*--([A-Za-z0-9-]+)\s*(,)?/g;

// Custom properties that are deliberately left undefined by the design
// system because they are call-site *parameters*, not tokens — the value
// is meant to be supplied by whatever consumes the utility, not shipped
// as a default. `icon`: readme.md documents the pattern — tint with the
// `.ax-icon` utility (`background:currentColor` + `mask:url(icon)`) —
// consumers set `--icon` inline; nothing in the bundle itself needs to.
const UTILITY_PARAMS = new Set(['icon']);

// Comments can contain a token name in *prose* — a doc snippet like
// `{"--fake-widget": "1px solid red"}` illustrating the style-object
// idiom — which the quoted-key branch of DEF would otherwise read as a
// real local definition, masking a genuinely broken var(--fake-widget)
// use next to it. Strip comments before collecting local definitions so
// only live code can satisfy a use. Strips /* ... */ (CSS and JS/JSX
// block comments) and <!-- ... --> (HTML); deliberately does NOT strip
// `//` line comments — `//` isn't a comment in CSS, and stripping it
// would also eat the `//` in every `https://` URL in the bundle.
// Residual gap: a quoted key inside an actual string literal (not a
// comment) is still indistinguishable from a real definition — closing
// that would need a JS parser, which this script deliberately doesn't
// have (zero dependencies). Applied only to the local-definition scan
// below; a var() use inside a comment is harmless either way, so the use
// scan still runs against the raw source.
const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/<!--[\s\S]*?-->/g, '');

const globalTokens = new Set();
for (const p of walk(join(ROOT, 'tokens'), (f) => f.endsWith('.css'))) {
  for (const m of readFileSync(p, 'utf8').matchAll(DEF)) globalTokens.add(m[1]);
}
for (const p of scanned) {
  const src = readFileSync(p, 'utf8');
  const local = new Set([...stripComments(src).matchAll(DEF)].map((m) => m[1]));
  for (const m of src.matchAll(USE)) {
    const [, name, hasFallback] = m;
    if (hasFallback) continue;
    if (!globalTokens.has(name) && !local.has(name) && !UTILITY_PARAMS.has(name)) {
      fail('tokens', `${rel(p)} uses --${name}, not defined in tokens/ nor in the file itself`);
    }
  }
}

// ---- report --------------------------------------------------------------
// The same check can report the identical file+token combination more than
// once (e.g. --icon appears in both `mask` and `-webkit-mask` on one line);
// dedupe by message so each real problem is reported exactly once.
const uniqueFailures = [...new Set(failures)];
console.log(
  `components ${manifest.components.length} · cards ${cardFiles.length} · ` +
  `tokens ${globalTokens.size} · ` +
  `icons ${walk(join(ROOT, 'assets/icons'), (p) => p.endsWith('.svg')).length} · ` +
  `doodles ${walk(join(ROOT, 'assets/doodles'), (p) => p.endsWith('.svg')).length}`
);
if (uniqueFailures.length) {
  console.error(`\n${uniqueFailures.length} failure(s):`);
  for (const f of uniqueFailures) console.error('  ' + f);
  process.exit(1);
}
console.log('All checks passed.');
