# Axelerate Design System Repo — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the exported Claude Design skill bundle at `~/Downloads/Axelerate Design System1.zip` into a private GitHub repo that stays a working Claude skill, becomes an installable React component library, and publishes a browsable specimen gallery.

**Architecture:** The bundle's file layout is frozen — every specimen resolves `../styles.css`, `../../_ds_bundle.js`, and `../../assets/…` relative to its own location, so moving or editing any bundle file breaks the specimens and `SKILL.md` at once. All work is therefore additive: a barrel, a manifest, two zero-dependency Node scripts, a generated gallery that iframes the untouched specimens, and CI.

**Tech Stack:** Node 20 (ESM, no dependencies), React 18 as a peer dep, oxlint via the bundle's own `_adherence.oxlintrc.json`, GitHub Actions, GitHub Pages.

**Spec:** `.superpowers/specs/2026-08-25-axelerate-design-system-repo-design.md`

## Global Constraints

- **Repo root:** `/Users/carriewang/axelerate-design-system` (git already initialised, branch `main`, one commit `227103b` containing the spec).
- **Frozen layout:** never move, rename, or edit any file that came out of the zip. This includes `readme.md`, `SKILL.md`, `styles.css`, `tokens/`, `components/`, `guidelines/`, `assets/`, `ui_kits/`, `thumbnail.html`, `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`, `.thumbnail`, `github.md`, `uploads/`.
- **Component count is 22**, not the 23 claimed by `readme.md`. Names and paths come from `_ds_manifest.json`, in manifest order.
- **Verified inventory:** 22 components in 8 groups · 33 `@dsCard` specimens (24 `guidelines/`, 8 `components/*/*.card.html`, 1 `ui_kits/website/index.html`) · 159 CSS custom properties in `tokens/` · 38 icons · 4 doodles.
- **Specimen groups and counts:** Brand 7, Colors 5, Components 8, Effects 5, Type 5, Spacing 2, Website 1.
- **Gallery group order:** Colors, Type, Spacing, Effects, Brand, Components, Website.
- **Scripts take zero npm dependencies** — Node built-ins only.
- **Repo stays private.** `uploads/` is committed and contains third-party imagery; the repo must not be made public without removing it.
- **No LICENSE file.** Third-party notices go in `README.md` only.
- **Node 20** in all CI jobs.

---

### Task 1: Import the bundle verbatim

**Files:**
- Create: everything from the zip, at repo root
- Create: `.gitignore`

**Interfaces:**
- Consumes: nothing
- Produces: the frozen file tree every later task reads — `_ds_manifest.json` (22 `{name, sourcePath}` entries), `tokens/*.css`, `components/<group>/<Name>.{jsx,d.ts,prompt.md}`, `guidelines/*.html`, `components/*/*.card.html`, `ui_kits/website/index.html`, `assets/{icons,doodles}/*.svg`

- [ ] **Step 1: Extract the zip into the repo**

```bash
cd /Users/carriewang/axelerate-design-system
unzip -q -o "/Users/carriewang/Downloads/Axelerate Design System1.zip" -d .
```

- [ ] **Step 2: Prove the extraction is byte-identical to the archive**

Extract a second copy to a scratch directory and diff the trees. Any output means the extraction is not verbatim — stop and investigate.

```bash
REF=$(mktemp -d)
unzip -q "/Users/carriewang/Downloads/Axelerate Design System1.zip" -d "$REF"
diff -r "$REF" /Users/carriewang/axelerate-design-system \
  --exclude=.git --exclude=.superpowers
echo "exit=$?"
```

Expected: no differences printed, `exit=0`.

- [ ] **Step 3: Confirm the inventory matches the spec**

```bash
cd /Users/carriewang/axelerate-design-system
echo "manifest: $(python3 -c "import json;print(len(json.load(open('_ds_manifest.json'))['components']))")"
echo "jsx:      $(ls components/*/*.jsx | wc -l | tr -d ' ')"
echo "cards:    $(grep -l '@dsCard' guidelines/*.html components/*/*.card.html ui_kits/*/index.html | wc -l | tr -d ' ')"
echo "icons:    $(ls assets/icons/*.svg | wc -l | tr -d ' ')"
echo "doodles:  $(ls assets/doodles/*.svg | wc -l | tr -d ' ')"
```

Expected exactly: `manifest: 22`, `jsx: 22`, `cards: 33`, `icons: 38`, `doodles: 4`.

- [ ] **Step 4: Write `.gitignore`**

```
node_modules/
.DS_Store
*.log
.env
.env.*
```

- [ ] **Step 5: Commit the import on its own**

Keeping the verbatim import as a standalone commit means `git log` separates what came out of the zip from what was authored here.

```bash
cd /Users/carriewang/axelerate-design-system
git add -A
git commit -m "Import Axelerate Design System bundle verbatim

166 files from 'Axelerate Design System1.zip' (2026-08-25 export),
extracted unmodified. Verified byte-identical against a second
extraction. 22 components, 33 specimen cards, 159 tokens, 38 icons.

These files are frozen: every specimen resolves styles, the component
bundle, and assets by relative path, so moving or editing any of them
breaks both the specimens and SKILL.md.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Integrity validation script

**Files:**
- Create: `scripts/validate.mjs`

**Interfaces:**
- Consumes: the frozen tree from Task 1
- Produces: `node scripts/validate.mjs` — exits 0 and prints a one-line inventory summary when clean, exits 1 and lists failures otherwise. Task 3 extends it with checks 2 and 6; Task 6 runs it in CI.

- [ ] **Step 1: Write `scripts/validate.mjs`**

```js
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
const DEF = /--([A-Za-z0-9-]+)\s*:/g;
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
```

- [ ] **Step 2: Run it against the pristine bundle**

```bash
cd /Users/carriewang/axelerate-design-system && node scripts/validate.mjs
```

Expected: `components 22 · cards 33 · tokens 159 · icons 38 · doodles 4` then `All checks passed.`, exit 0.

If it reports failures, each is one of two things and both need a decision, not a suppression:
- **A real defect in the bundle** (a specimen referencing an icon that was never shipped, a `var(--token)` that does not exist). Record it in `README.md` under a "Known bundle defects" heading in Task 5 and leave the check failing until then; do not weaken the check.
- **A gap in this script** (e.g. a token legitimately defined in `_ds_bundle.js` rather than `tokens/`). Widen the definition source, do not add a name to an allowlist.

- [ ] **Step 3: Prove each check actually fires**

A check that never fails is worthless. Break one thing at a time in a throwaway copy and confirm the matching check catches it.

```bash
cd /Users/carriewang/axelerate-design-system
T=$(mktemp -d) && cp -R . "$T/ds" && cd "$T/ds"

mv components/actions/Button.d.ts /tmp/b.d.ts
node scripts/validate.mjs; echo "manifest check exit=$?"   # expect 1

mv /tmp/b.d.ts components/actions/Button.d.ts
sed -i '' 's/viewport="700x150"/viewport="wide"/' guidelines/colors-core.html
node scripts/validate.mjs; echo "cards check exit=$?"      # expect 1

git checkout guidelines/colors-core.html
sed -i '' 's#assets/icons/search.svg#assets/icons/nope.svg#' components/actions/actions.card.html
node scripts/validate.mjs; echo "assets check exit=$?"     # expect 1

git checkout components/actions/actions.card.html
sed -i '' 's/var(--violet-600)/var(--violet-9999)/' guidelines/colors-core.html
node scripts/validate.mjs; echo "tokens check exit=$?"     # expect 1

cd /Users/carriewang/axelerate-design-system && rm -rf "$T"
```

Expected: all four print `exit=1` with a message naming the right file. The repo itself is untouched — all edits happened in `$T`.

- [ ] **Step 4: Confirm the real repo is still clean**

```bash
cd /Users/carriewang/axelerate-design-system && git status --short && node scripts/validate.mjs
```

Expected: only `scripts/validate.mjs` untracked; validation passes.

- [ ] **Step 5: Commit**

```bash
git add scripts/validate.mjs
git commit -m "Add zero-dependency integrity validation

Checks manifest completeness, @dsCard headers, asset-reference
resolution, and token resolution across components, guidelines,
ui_kits, and tokens. Each check verified to fire against a
deliberately broken copy.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Barrel and package manifest

**Files:**
- Create: `index.js`
- Create: `index.d.ts`
- Create: `package.json`
- Modify: `scripts/validate.mjs` (add checks 2 and 6)

**Interfaces:**
- Consumes: `_ds_manifest.json` component names and `sourcePath`s from Task 1; `scripts/validate.mjs` from Task 2
- Produces: `import { Button, Card, … } from 'axelerate-design-system'` — all 22 names; `import 'axelerate-design-system/styles.css'`; subpath access to `./tokens/*`, `./components/*`, `./assets/*`

- [ ] **Step 1: Add checks 2 and 6 to `scripts/validate.mjs`**

Insert directly after the `// ---- 1. manifest completeness` block, before `// ---- 3.`:

```js
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
```

- [ ] **Step 2: Run it and watch the new checks fail**

```bash
cd /Users/carriewang/axelerate-design-system && node scripts/validate.mjs; echo "exit=$?"
```

Expected: FAIL, exit 1, with an `ENOENT` on `index.js` — the file does not exist yet. This is the failing test for Steps 3–5.

- [ ] **Step 3: Write `index.js`**

22 named re-exports in manifest order. Paths keep the `.jsx` extension because that is what the files are called and what ESM resolution needs.

```js
// Barrel for the Axelerate Design System.
// Order and paths mirror _ds_manifest.json — scripts/validate.mjs enforces the match.
export { Button } from './components/actions/Button.jsx';
export { IconButton } from './components/actions/IconButton.jsx';
export { MarkerBar } from './components/data/MarkerBar.jsx';
export { StatBlock } from './components/data/StatBlock.jsx';
export { TallyCount } from './components/data/TallyCount.jsx';
export { Badge } from './components/display/Badge.jsx';
export { Card } from './components/display/Card.jsx';
export { Tag } from './components/display/Tag.jsx';
export { Dialog } from './components/feedback/Dialog.jsx';
export { Toast } from './components/feedback/Toast.jsx';
export { Tooltip } from './components/feedback/Tooltip.jsx';
export { Illustration } from './components/illustration/Illustration.jsx';
export { Checkbox } from './components/inputs/Checkbox.jsx';
export { Input } from './components/inputs/Input.jsx';
export { Radio } from './components/inputs/Radio.jsx';
export { Select } from './components/inputs/Select.jsx';
export { Switch } from './components/inputs/Switch.jsx';
export { Tabs } from './components/navigation/Tabs.jsx';
export { Bubble } from './components/paper/Bubble.jsx';
export { FileCard } from './components/paper/FileCard.jsx';
export { Sticker } from './components/paper/Sticker.jsx';
export { StickyNote } from './components/paper/StickyNote.jsx';
```

- [ ] **Step 4: Write `index.d.ts`**

`export *` rather than named re-exports, because each `.d.ts` also exports its `<Name>Props` interface and some export extra types (`Tabs.d.ts` exports `TabItem`). Paths drop the extension so TypeScript resolves `./components/actions/Button` → `Button.d.ts`.

```ts
// Type barrel. `export *` carries each component's Props interface and any
// extra exported types (e.g. TabItem from Tabs) alongside the component.
export * from './components/actions/Button';
export * from './components/actions/IconButton';
export * from './components/data/MarkerBar';
export * from './components/data/StatBlock';
export * from './components/data/TallyCount';
export * from './components/display/Badge';
export * from './components/display/Card';
export * from './components/display/Tag';
export * from './components/feedback/Dialog';
export * from './components/feedback/Toast';
export * from './components/feedback/Tooltip';
export * from './components/illustration/Illustration';
export * from './components/inputs/Checkbox';
export * from './components/inputs/Input';
export * from './components/inputs/Radio';
export * from './components/inputs/Select';
export * from './components/inputs/Switch';
export * from './components/navigation/Tabs';
export * from './components/paper/Bubble';
export * from './components/paper/FileCard';
export * from './components/paper/Sticker';
export * from './components/paper/StickyNote';
```

- [ ] **Step 5: Write `package.json`**

`sideEffects` is load-bearing: every component injects its own `<style>` tag at import time, so a bundler that tree-shakes the module drops all of that component's CSS from a production build.

```json
{
  "name": "axelerate-design-system",
  "version": "0.1.0",
  "private": true,
  "description": "Axelerate brand design system — tokens, 22 React components, hand-drawn icons, and specimen cards.",
  "type": "module",
  "types": "./index.d.ts",
  "exports": {
    ".": { "types": "./index.d.ts", "default": "./index.js" },
    "./styles.css": "./styles.css",
    "./tokens/*": "./tokens/*",
    "./components/*": "./components/*",
    "./assets/*": "./assets/*"
  },
  "sideEffects": ["*.css", "./components/**/*.jsx"],
  "peerDependencies": { "react": ">=18" },
  "scripts": {
    "validate": "node scripts/validate.mjs",
    "docs": "node scripts/build-docs.mjs",
    "lint": "oxlint --config _adherence.oxlintrc.json ."
  },
  "engines": { "node": ">=20" }
}
```

- [ ] **Step 6: Run validation to verify it passes**

```bash
cd /Users/carriewang/axelerate-design-system && node scripts/validate.mjs; echo "exit=$?"
```

Expected: `All checks passed.`, `exit=0`.

- [ ] **Step 7: Verify the barrel actually resolves at runtime**

Static agreement is not the same as loading. Confirm Node can resolve every specifier in the barrel.

```bash
cd /Users/carriewang/axelerate-design-system
node --input-type=module -e "
import { readFileSync } from 'node:fs';
const specs = [...readFileSync('index.js','utf8').matchAll(/from '([^']+)'/g)].map(m=>m[1]);
let bad = 0;
for (const s of specs) {
  try { await import.meta.resolve(s, import.meta.url + '/../index.js'); }
  catch (e) { console.error('unresolvable:', s); bad++; }
}
console.log(specs.length + ' specifiers, ' + bad + ' unresolvable');
process.exit(bad ? 1 : 0);
"
```

Expected: `22 specifiers, 0 unresolvable`, exit 0.

- [ ] **Step 8: Prove the barrel check fires**

```bash
cd /Users/carriewang/axelerate-design-system
T=$(mktemp -d) && cp -R . "$T/ds" && cd "$T/ds"
sed -i '' "s#export { Tag } from './components/display/Tag.jsx';##" index.js
node scripts/validate.mjs; echo "barrel check exit=$?"   # expect 1, naming Tag
cd /Users/carriewang/axelerate-design-system && rm -rf "$T"
```

Expected: `exit=1` with `barrel: index.js does not export Tag`.

- [ ] **Step 9: Commit**

```bash
cd /Users/carriewang/axelerate-design-system
git add index.js index.d.ts package.json scripts/validate.mjs
git commit -m "Add component barrel, type barrel, and package manifest

index.js re-exports all 22 components in manifest order; index.d.ts
uses export * so each component's Props interface and extra types
travel with it. package.json declares an exports map and marks the
package sideEffectful — components inject their own style tags on
import, so tree-shaking would strip their CSS.

The shipped _adherence.oxlintrc.json already told consumers to import
from index.js; this makes that rule true.

Validation gains barrel-agreement and exports-resolution checks.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: Generated specimen gallery

**Files:**
- Create: `scripts/build-docs.mjs`
- Create: `docs/index.html` (generated — never hand-edit)
- Create: `index.html` (redirect to `docs/`)

**Interfaces:**
- Consumes: `@dsCard` headers in the 33 specimen files from Task 1
- Produces: `node scripts/build-docs.mjs` — deterministic, idempotent; writes `docs/index.html`. Task 6 asserts the committed file matches a fresh build.

- [ ] **Step 1: Write `scripts/build-docs.mjs`**

```js
#!/usr/bin/env node
/**
 * Regenerates docs/index.html from the @dsCard headers on every specimen.
 * The gallery is a shell around the specimens, never a copy of them — it
 * iframes each file in place, so it cannot drift from source.
 * Zero dependencies. Deterministic: same input -> byte-identical output.
 */
import { readFileSync, readdirSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const GROUP_ORDER = ['Colors', 'Type', 'Spacing', 'Effects', 'Brand', 'Components', 'Website'];

function walk(dir, keep, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, keep, out);
    else if (keep(p)) out.push(p);
  }
  return out;
}

const esc = (s = '') => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = (s, k) => (s.match(new RegExp(k + '="([^"]*)"')) || [])[1];

const files = [
  ...walk(join(ROOT, 'guidelines'), (p) => p.endsWith('.html')),
  ...walk(join(ROOT, 'components'), (p) => p.endsWith('.card.html')),
  ...walk(join(ROOT, 'ui_kits'), (p) => p.endsWith('index.html')),
];

const cards = [];
for (const p of files) {
  const m = readFileSync(p, 'utf8').slice(0, 800).match(/<!--\s*@dsCard\s+([\s\S]*?)-->/);
  if (!m) continue;
  const [w, h] = (attr(m[1], 'viewport') || '700x200').split('x').map(Number);
  cards.push({
    group: attr(m[1], 'group') || 'Other',
    name: attr(m[1], 'name') || relative(ROOT, p),
    subtitle: attr(m[1], 'subtitle') || '',
    src: '../' + relative(ROOT, p).split('\\').join('/'),
    w, h,
  });
}

const groups = [...new Set(cards.map((c) => c.group))].sort(
  (a, b) => (GROUP_ORDER.indexOf(a) + 1 || 99) - (GROUP_ORDER.indexOf(b) + 1 || 99) || a.localeCompare(b)
);

const section = (g) => {
  const items = cards.filter((c) => c.group === g).sort((a, b) => a.name.localeCompare(b.name));
  return `<section id="${esc(g.toLowerCase())}">
  <h2>${esc(g)}<span class="count">${items.length}</span></h2>
${items.map((c) => `  <article class="card">
    <header><h3>${esc(c.name)}</h3>${c.subtitle ? `<p>${esc(c.subtitle)}</p>` : ''}<span class="vp">${c.w}\u00d7${c.h}</span></header>
    <div class="frame" style="--vw:${c.w};--vh:${c.h}"><iframe src="${esc(c.src)}" width="${c.w}" height="${c.h}" loading="lazy" title="${esc(c.name)}"></iframe></div>
  </article>`).join('\n')}
</section>`;
};

const html = `<!DOCTYPE html>
<!-- GENERATED by scripts/build-docs.mjs — do not edit by hand. -->
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>axelerate \u00b7 design system</title>
<link rel="stylesheet" href="../styles.css">
<style>
body{margin:0;background:var(--surface-page)}
.wrap{max-width:1160px;margin:0 auto;padding:0 24px}
header.top{padding:64px 0 40px}
.wm{font-family:var(--font-display);font-weight:800;font-size:var(--text-5xl);letter-spacing:-.04em;color:var(--violet-600);line-height:1;display:block}
.lede{font-size:18px;color:var(--text-secondary);max-width:52ch;margin:14px 0 0}
.note{font-family:var(--font-hand);font-size:19px;color:var(--gray-600);transform:rotate(-1.5deg);display:inline-block;margin-top:22px}
nav{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.85);backdrop-filter:blur(10px);border-bottom:1px solid var(--gray-100);padding:12px 0}
nav .wrap{display:flex;gap:8px;flex-wrap:wrap}
nav a{font-family:var(--font-label);font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;text-decoration:none;color:var(--text-primary);background:var(--gray-0);padding:7px 13px;border-radius:999px;box-shadow:var(--sticker-cut),var(--shadow-paper);transition:transform var(--dur-fast) var(--ease-launch)}
nav a:hover{transform:translate(-1px,-2px) rotate(-1deg);color:var(--text-brand)}
section{padding:52px 0 8px;border-top:1px solid var(--gray-100)}
h2{font-family:var(--font-display);font-size:var(--text-3xl);font-weight:800;letter-spacing:-.03em;margin:0 0 26px;display:flex;align-items:baseline;gap:12px}
.count{font-family:var(--font-label);font-size:11px;font-weight:500;letter-spacing:.07em;color:var(--gray-500);font-feature-settings:'tnum'}
.card{margin:0 0 34px}
.card header{margin:0 0 10px;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.card h3{font-family:var(--font-display);font-size:17px;font-weight:700;letter-spacing:-.01em;margin:0}
.card header p{margin:0;font-size:14px;color:var(--text-secondary);flex:1 1 260px}
.vp{font-family:var(--font-label);font-size:10px;font-weight:500;letter-spacing:.06em;color:var(--gray-500);font-feature-settings:'tnum'}
.frame{width:100%;overflow:hidden;background:var(--surface-card);border-radius:var(--radius-hand-sm);box-shadow:var(--shadow-paper)}
.frame iframe{border:0;display:block;transform-origin:0 0}
footer{padding:56px 0 72px;border-top:1px solid var(--gray-100);margin-top:40px;color:var(--gray-600);font-size:14px}
</style></head>
<body class="ax-grid-paper">
<div class="wrap"><header class="top">
  <span class="wm">axelerate</span>
  <p class="lede">Tokens, components, and brand foundations \u2014 every card below is the live specimen file, rendered in place.</p>
  <span class="note">generated from the specimens \u2014 never hand-edited</span>
</header></div>
<nav><div class="wrap">${groups.map((g) => `<a href="#${esc(g.toLowerCase())}">${esc(g)}</a>`).join('')}</div></nav>
<div class="wrap">
${groups.map(section).join('\n')}
<footer>${cards.length} specimens \u00b7 regenerate with <code>npm run docs</code></footer>
</div>
<script>
function fit(){
  for (const f of document.querySelectorAll('.frame')) {
    const vw = +f.style.getPropertyValue('--vw'), vh = +f.style.getPropertyValue('--vh');
    const s = Math.min(1, f.clientWidth / vw);
    f.querySelector('iframe').style.transform = 'scale(' + s + ')';
    f.style.height = Math.round(vh * s) + 'px';
  }
}
addEventListener('resize', fit); addEventListener('load', fit); fit();
</script>
</body></html>
`;

mkdirSync(join(ROOT, 'docs'), { recursive: true });
writeFileSync(join(ROOT, 'docs', 'index.html'), html);
console.log(`docs/index.html \u2014 ${cards.length} cards across ${groups.length} groups: ${groups.join(', ')}`);
```

- [ ] **Step 2: Run it and check the card census**

```bash
cd /Users/carriewang/axelerate-design-system && node scripts/build-docs.mjs
```

Expected exactly: `docs/index.html — 33 cards across 7 groups: Colors, Type, Spacing, Effects, Brand, Components, Website`

Any other card count means a specimen's header failed to parse — fix the parser, not the specimen.

- [ ] **Step 3: Verify per-group counts against the spec**

```bash
cd /Users/carriewang/axelerate-design-system
grep -o '<h2>[A-Za-z]*<span class="count">[0-9]*' docs/index.html | sed 's/<h2>//;s|<span class="count">| |'
```

Expected: `Colors 5`, `Type 5`, `Spacing 2`, `Effects 5`, `Brand 7`, `Components 8`, `Website 1` — 33 total.

- [ ] **Step 4: Verify every iframe target exists**

```bash
cd /Users/carriewang/axelerate-design-system/docs
grep -o 'src="\.\./[^"]*"' index.html | sed 's/src="//;s/"//' | while read -r p; do
  [ -f "$p" ] || echo "MISSING: $p"
done; echo "checked $(grep -c 'iframe src' index.html) iframes"
```

Expected: no `MISSING` lines, `checked 33 iframes`.

- [ ] **Step 5: Verify the build is idempotent**

```bash
cd /Users/carriewang/axelerate-design-system
cp docs/index.html /tmp/docs-a.html
node scripts/build-docs.mjs
diff /tmp/docs-a.html docs/index.html && echo "IDEMPOTENT"
```

Expected: `IDEMPOTENT`. If the files differ, something non-deterministic leaked in (unsorted directory reads, a timestamp) — remove it; Task 6's CI freshness check depends on this.

- [ ] **Step 6: Write the root redirect `index.html`**

```html
<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=./docs/">
<title>axelerate · design system</title>
</head><body><a href="./docs/">Design system gallery</a></body></html>
```

- [ ] **Step 7: Look at the gallery**

```bash
open /Users/carriewang/axelerate-design-system/docs/index.html
```

Confirm by eye: the grid-paper backdrop renders, the sticky nav has 7 sticker pills, specimens render inside their frames (they pull React and Babel from unpkg, so this needs a network connection), and the 1280-wide website card is scaled down to fit the column rather than clipped.

- [ ] **Step 8: Run full validation and commit**

```bash
cd /Users/carriewang/axelerate-design-system
node scripts/validate.mjs
git add scripts/build-docs.mjs docs/index.html index.html
git commit -m "Add generated specimen gallery

build-docs.mjs parses the @dsCard header on all 33 specimens and emits
docs/index.html, which iframes each file in place at its declared
viewport. The gallery wraps the specimens rather than copying them, so
it cannot drift from source; the build is deterministic and CI checks
the committed output is fresh.

Root index.html redirects to docs/ so the bare Pages URL lands
somewhere useful.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: README

**Files:**
- Create: `README.md`

**Interfaces:**
- Consumes: verified counts from Tasks 1–4; any bundle defects recorded during Task 2 Step 2
- Produces: the repo's front door — install instructions, the 22-vs-23 correction, third-party notices, the `uploads/` warning

- [ ] **Step 1: Write `README.md`**

````markdown
# Axelerate Design System

Brand design system for **Axelerate** — an invite-only business network. Tokens,
22 React components, hand-drawn icons, and 33 live specimen cards.

Exported from Claude Design on 2026-08-25 and imported here verbatim.

## What this repo is

Three things at once:

1. **A Claude skill.** `SKILL.md` + `readme.md` carry the full brand rules. Hand an
   agent this repo and it can design in-brand.
2. **A component library.** 22 React components, importable from `index.js`.
3. **A specimen gallery.** `docs/index.html` renders every specimen in place.

## Layout is frozen

Every specimen resolves `../styles.css`, `../../_ds_bundle.js`, and `../../assets/…`
by relative path. **Moving, renaming, or editing any file that came out of the export
breaks the specimens and `SKILL.md` at once.** Everything added here is additive:
`index.js`, `index.d.ts`, `package.json`, `README.md`, `index.html`, `docs/`,
`scripts/`, `.github/`.

## Use it

```bash
npm install github:<owner>/axelerate-design-system
```

```jsx
import 'axelerate-design-system/styles.css';
import { Button, Card, StickyNote } from 'axelerate-design-system';

<Card tint="lilac" tilt={-2} punch>
  <Button variant="yellow">Request invite</Button>
</Card>
```

Components ship as **`.jsx` source**, so your bundler must handle JSX — Vite, Next,
and Parcel all do out of the box. There is deliberately no build step: a `dist/`
would be a fourth copy of the components that the specimens and the skill bundle
never read.

Each component injects its own `<style>` tag on import. `package.json` marks the
package `sideEffects`-ful so bundlers don't tree-shake that CSS away.

## Browse it

```bash
open docs/index.html      # or: npm run docs && open docs/index.html
```

Specimens load React 18 and Babel from unpkg at runtime, so the gallery needs a
network connection.

## Develop

| Command | What it does |
| --- | --- |
| `npm run validate` | Integrity checks — manifest, barrel, exports, `@dsCard` headers, asset refs, token resolution |
| `npm run docs` | Regenerates `docs/index.html`. **Never hand-edit that file.** |
| `npm run lint` | Brand-adherence lint via the bundle's own `_adherence.oxlintrc.json` |

CI runs all three on every push to `main`.

## What's in here

| | |
| --- | --- |
| `styles.css` | Single entry point; imports all of `tokens/` |
| `tokens/` | 159 CSS custom properties — fonts, colors, typography, spacing, effects, base |
| `components/` | 22 components in 8 groups, each `.jsx` + `.d.ts` + `.prompt.md` |
| `assets/icons/` | 38 hand-drawn doodle icons |
| `assets/doodles/` | 4 marker-stroke doodles |
| `guidelines/` | 24 specimen cards — Colors, Type, Spacing, Effects, Brand |
| `ui_kits/website/` | Demonstrative invite-only marketing landing page |
| `readme.md` | The brand spec — voice, color, type, motion, component rules |
| `SKILL.md` | Claude skill entry point |

Components: **actions** Button, IconButton · **inputs** Input, Select, Checkbox,
Radio, Switch · **display** Card, Badge, Tag · **data** TallyCount, MarkerBar,
StatBlock · **paper** FileCard, Bubble, StickyNote, Sticker · **illustration**
Illustration · **navigation** Tabs · **feedback** Dialog, Toast, Tooltip.

## Corrections to the export

- **`readme.md` says "23 primitives in `components/`". The real number is 22.**
  Confirmed against `_ds_manifest.json` (22 entries) and the 22 `.jsx` / 22 `.d.ts` /
  22 `.prompt.md` files; the per-group list in that same paragraph also sums to 22.
  `readme.md` is a frozen export file, so the correction lives here.

## Before making this repo public

`uploads/` holds source reference imagery, including a **third-party Squarespace page
design** and personal screenshots. It is committed because this repo is private.
**Remove `uploads/` before changing visibility.** GitHub Pages also does not serve
private repos on the free plan, which is why `.github/workflows/pages.yml` is
manual-dispatch only.

## Third-party notices

- **Doodle Icons** by Khushmeen Sidhu — the 38 SVGs in `assets/icons/`. Free for
  commercial use, no attribution required. Source: `github.com/svatsa159/react-doodle-icons`.
- **Fonts are Google-hosted stand-ins**, not licensed brand fonts: Bricolage
  Grotesque, Instrument Sans, Gabarito, Lacquer. `tokens/fonts.css` loads them from
  Google Fonts. Swap in real `@font-face` files when they exist.
- **`uploads/`** contains third-party material not authored here.

No LICENSE file — licensing of Axelerate brand IP is undecided.

## Known gaps

Carried over from the export's own caveats (`readme.md` → Caveats):

- Spot (220px) and hero (520px) illustrations **do not exist**. `Illustration` ships
  labelled dashed placeholders; only the mini tier has real assets.
- Icons are a stand-in set, not a bespoke Axelerate icon family.
- There is **no logo**. The wordmark is plain type: lowercase "axelerate",
  Bricolage 800, −0.04em.
- `ui_kits/website/` is demonstrative — no product source existed to recreate.
````

- [ ] **Step 2: Fill in the install placeholder**

`<owner>` in the install snippet is the only unknown until Task 7 creates the repo. Leave it for now; Task 7 Step 5 replaces it with the real owner.

- [ ] **Step 3: Add any bundle defects found in Task 2**

If Task 2 Step 2 surfaced real defects in the export (missing assets, undefined tokens), add them as bullets under **Corrections to the export** with the exact file and token or asset name. If Task 2 was clean, skip this step.

- [ ] **Step 4: Commit**

```bash
cd /Users/carriewang/axelerate-design-system
git add README.md
git commit -m "Add README

Covers install, the frozen-layout constraint, the .jsx/no-build
decision, and the sideEffects requirement. Records the correction that
the export's readme.md miscounts its own components as 23 when there
are 22, the uploads/ warning that must be honoured before this repo
goes public, and third-party notices for the doodle icon set and the
stand-in Google fonts.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: CI and Pages workflows

**Files:**
- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/pages.yml`

**Interfaces:**
- Consumes: `scripts/validate.mjs` (Task 2/3), `scripts/build-docs.mjs` (Task 4), `_adherence.oxlintrc.json` (Task 1)
- Produces: automated checks on every push to `main`; a manually-dispatched Pages deploy

- [ ] **Step 1: Write `.github/workflows/ci.yml`**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Integrity checks
        run: node scripts/validate.mjs

      - name: Docs are up to date
        run: |
          node scripts/build-docs.mjs
          git diff --exit-code docs/index.html \
            || { echo '::error::docs/index.html is stale — run `npm run docs` and commit'; exit 1; }

      - name: Brand adherence lint
        continue-on-error: true
        run: npx --yes oxlint@1 --config _adherence.oxlintrc.json .
```

`continue-on-error` on the lint step is deliberate: every rule in
`_adherence.oxlintrc.json` is declared `"warn"`, so adherence drift should be visible
in the CI log without blocking a push. The integrity and freshness checks do block.

- [ ] **Step 2: Write `.github/workflows/pages.yml`**

```yaml
name: Deploy gallery to Pages

# Manual dispatch only. GitHub Pages does not serve private repos on the free
# plan, so a push trigger would fail on every commit. Add:
#   push: { branches: [main] }
# once this repo is public or the account is on Pro/Team/Enterprise.
on:
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5

      # Upload the repo root, not docs/ — the gallery iframes ../guidelines/…,
      # ../components/…, and ../ui_kits/… so those paths must be inside the artifact.
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 3: Verify the YAML parses**

```bash
cd /Users/carriewang/axelerate-design-system
python3 -c "
import yaml,glob,sys
for f in sorted(glob.glob('.github/workflows/*.yml')):
    d = yaml.safe_load(open(f))
    print(f, '->', list(d['jobs'].keys()))
"
```

Expected: `ci.yml -> ['check']` and `pages.yml -> ['deploy']`, no traceback.

- [ ] **Step 4: Run locally exactly what CI will run**

```bash
cd /Users/carriewang/axelerate-design-system
node scripts/validate.mjs && \
node scripts/build-docs.mjs && \
git diff --exit-code docs/index.html && echo "DOCS FRESH" && \
npx --yes oxlint@1 --config _adherence.oxlintrc.json . ; echo "lint exit=$?"
```

Expected: validation passes, `DOCS FRESH`, and the lint step runs to completion. Lint
warnings are expected and acceptable — the bundle's own components use raw hex in
their injected CSS strings. Record the warning count in the commit message. A lint
*crash* (bad config, unparseable file) is not acceptable — fix it.

- [ ] **Step 5: Commit**

```bash
cd /Users/carriewang/axelerate-design-system
git add .github
git commit -m "Add CI and Pages workflows

CI runs integrity checks, asserts docs/index.html is not stale, and
runs the bundle's own brand-adherence lint config. Lint is
non-blocking because every rule in _adherence.oxlintrc.json is declared
warn.

Pages deploy is manual-dispatch only: Pages does not serve private
repos on the free plan, so a push trigger would fail on every commit.
The artifact is the repo root because the gallery iframes paths above
docs/.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: Create the GitHub repo and push

**Files:**
- Modify: `README.md` (replace the `<owner>` placeholder)

**Interfaces:**
- Consumes: the complete local repo from Tasks 1–6
- Produces: a private GitHub repo with `origin` wired up and `main` pushed

- [ ] **Step 1: Confirm `gh` is authenticated**

`gh` 2.98.0 is already installed. Authentication is interactive and must be done by
the user — do not attempt it non-interactively.

```bash
gh auth status
```

If this reports "not logged in", stop and ask the user to run `gh auth login` in
their terminal (or type `! gh auth login` in this session), then re-run.

- [ ] **Step 2: Check the git identity that will author the push**

```bash
cd /Users/carriewang/axelerate-design-system
git config user.name; git config user.email; gh api user --jq .login
```

The global identity is `cakkrie <jinyue_wang@hotmail.com>`. If that does not match
the authenticated GitHub account, ask the user which identity they want before
pushing — do not silently rewrite their git config.

- [ ] **Step 3: Verify the working tree is clean and complete**

```bash
cd /Users/carriewang/axelerate-design-system
git status --short          # expect no output
git log --oneline           # expect 7 commits: spec, import, validate, barrel, docs, readme, ci
node scripts/validate.mjs   # expect All checks passed.
```

- [ ] **Step 4: Create the private repo and push**

```bash
cd /Users/carriewang/axelerate-design-system
gh repo create axelerate-design-system \
  --private \
  --source=. \
  --remote=origin \
  --description "Axelerate brand design system — tokens, 22 React components, hand-drawn icons, specimen gallery" \
  --push
```

- [ ] **Step 5: Replace the `<owner>` placeholder in the README**

```bash
cd /Users/carriewang/axelerate-design-system
OWNER=$(gh api user --jq .login)
sed -i '' "s|github:<owner>/axelerate-design-system|github:$OWNER/axelerate-design-system|" README.md
grep 'npm install github:' README.md
git add README.md
git commit -m "Point the README install line at the real repo

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
git push
```

- [ ] **Step 6: Verify the push landed and CI ran**

```bash
cd /Users/carriewang/axelerate-design-system
gh repo view --json name,visibility,url --jq '"\(.name) \(.visibility) \(.url)"'
git status -sb | head -1                       # expect: ## main...origin/main
echo "remote files: $(git ls-tree -r origin/main --name-only | wc -l | tr -d ' ')"
sleep 25 && gh run list --limit 3
```

Expected: `axelerate-design-system PRIVATE https://github.com/<owner>/axelerate-design-system`,
branch in sync, ~175 files tracked, and a CI run listed. If CI is red, read the log
with `gh run view --log-failed` and fix before reporting completion.

- [ ] **Step 7: Report honestly**

State the repo URL, the commit count, the CI result including the oxlint warning
count, and — explicitly — that **Pages is not deployed** because the repo is private
on a plan that does not serve private Pages. Do not describe the gallery as "live".

---

## Self-Review

**Spec coverage:**

| Spec section | Task |
| --- | --- |
| Frozen layout / verbatim import | Task 1 |
| Barrel `index.js` / `index.d.ts` | Task 3 |
| `package.json` exports + `sideEffects` | Task 3 |
| Docs gallery from `@dsCard` | Task 4 |
| Root `index.html` redirect | Task 4 |
| Validation checks 1, 3, 4, 5 | Task 2 |
| Validation checks 2, 6 | Task 3 |
| `ci.yml` (validate + lint + freshness) | Task 6 |
| `pages.yml` | Task 6 |
| README + third-party notices + 22-vs-23 | Task 5 |
| `gh` install, repo create, push | Task 7 |
| `uploads/` public-visibility warning | Task 5 |
| No LICENSE | Task 5 |

**Deviation from spec, flagged:** the spec said `pages.yml` triggers on
`workflow_dispatch` **+ push to main**. This plan makes it dispatch-only, because a
push trigger on a private free-plan repo fails on every single commit and turns CI
permanently red. The push trigger is documented in a comment in the workflow, ready
to uncomment when the repo goes public.

**Placeholder scan:** the only intentional placeholder is `<owner>` in the README
install line, created in Task 5 Step 1 and resolved in Task 7 Step 5. Task 2 Step 2
and Task 5 Step 3 are conditional branches with concrete instructions, not TBDs.

**Type consistency:** component names and paths come from `_ds_manifest.json` in all
three places they appear (`index.js`, `index.d.ts`, validate check 2), and check 2
enforces the match rather than trusting it. Card field names (`group`, `name`,
`subtitle`, `viewport`) are identical in `validate.mjs` and `build-docs.mjs`. The
counts 22 / 33 / 159 / 38 / 4 are asserted in Task 1 Step 3, printed by
`validate.mjs`, and re-checked in Task 4 Steps 2–3.
