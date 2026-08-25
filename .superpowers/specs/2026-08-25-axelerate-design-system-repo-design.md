# Axelerate Design System — GitHub repo design

**Date:** 2026-08-25
**Status:** Approved
**Source:** `~/Downloads/Axelerate Design System1.zip` (166 files, 3.6 MB)

> Spec location note: the Superpowers default is `docs/superpowers/specs/`. In this
> repo `docs/` is the published GitHub Pages gallery, so specs live in
> `.superpowers/specs/` to keep them out of the site. Delete this directory freely.

## Purpose

Turn an exported Claude Design skill bundle into a version-controlled GitHub repo
that is three things at once, without any of them fighting the others:

1. **A live Claude skill** — `SKILL.md` + `readme.md` keep working when the repo is
   handed to an agent, so the brand rules stay usable for generating new work.
2. **An installable component library** — consumable from a product codebase.
3. **A browsable reference** — the 33 specimen cards viewable as one page.

## Constraint that shapes everything

Every file in the bundle resolves paths relative to its own location:
`guidelines/*.html` links `../styles.css`; `components/*/*.card.html` links
`../../styles.css` and `../../_ds_bundle.js`; `ui_kits/website/index.html` links
`../../assets/…`. Specimens render React 18 UMD + Babel standalone from unpkg and
read components off the global `window.AxelerateDesignSystem_edbc1f` exposed by
`_ds_bundle.js`.

**Therefore: the bundle layout is frozen.** No file from the zip is moved, renamed,
or edited. Every change is additive. This is what keeps goals 1–3 compatible — a
restructure into `src/` would break the specimens and the skill at once.

## Inventory

| Thing | Count | Where |
| --- | --- | --- |
| React components (`.jsx` + `.d.ts` + `.prompt.md`) | 22 | `components/` in 8 groups |
| CSS custom properties | 159 | `tokens/` (6 files behind `styles.css`) |
| Specimen cards (`@dsCard`) | 33 | `guidelines/` 24, `components/` 8, `ui_kits/` 1 |
| Doodle icons (SVG) | 38 | `assets/icons/` |
| Marker doodles (SVG) | 4 | `assets/doodles/` |

Specimen groups: Brand 7, Colors 5, Components 8, Effects 5, Type 5, Spacing 2, Website 1.

Component groups: actions (2), inputs (5), display (3), data (3), paper (4),
illustration (1), navigation (1), feedback (3).

## What gets added

```
axelerate-design-system/
├── index.js                    # barrel: re-exports all 22 components
├── index.d.ts                  # barrel: re-exports their types
├── package.json                # exports map, React peer dep, private
├── README.md                   # what this is, install, third-party notices
├── .gitignore
├── index.html                  # meta-refresh → docs/
├── docs/index.html             # GENERATED gallery (do not hand-edit)
├── scripts/
│   ├── build-docs.mjs          # regenerates docs/index.html from @dsCard headers
│   └── validate.mjs            # integrity checks
├── .github/workflows/
│   ├── ci.yml                  # validate + oxlint + docs-freshness
│   └── pages.yml               # deploy repo root to Pages
└── .superpowers/specs/         # this document
```

## Component 1 — the barrel

`_adherence.oxlintrc.json` already ships a `no-restricted-imports` rule telling
consumers to *"Import design-system components from 'index.js', not component
internals"* — but the bundle has no `index.js`. The barrel makes that rule true.

- `index.js` — one `export { X } from './components/<group>/X.jsx'` per component.
- `index.d.ts` — mirrors it with `export type` / `export { }` from the `.d.ts` siblings.
- Export names and their source paths are **read from `_ds_manifest.json`**, which is
  the authoritative list. Order follows the manifest.

## Component 2 — package.json

```jsonc
{
  "name": "axelerate-design-system",
  "version": "0.1.0",
  "private": true,          // no registry publish; installable via git URL
  "type": "module",
  "types": "./index.d.ts",
  "exports": {
    ".":              { "types": "./index.d.ts", "default": "./index.js" },
    "./styles.css":   "./styles.css",
    "./tokens/*":     "./tokens/*",
    "./components/*": "./components/*",
    "./assets/*":     "./assets/*"
  },
  "peerDependencies": { "react": ">=18" },
  "sideEffects": ["*.css", "./components/**/*.jsx"]
}
```

`sideEffects` matters: each component injects its own `<style>` tag on import, so
bundlers must not tree-shake the module away. Components are shipped as `.jsx`
source — consumers need a JSX-capable bundler (Vite, Next, Parcel). This is stated
in the README rather than solved with a build step, because a build step would
produce `dist/` artifacts the specimens and skill bundle do not use.

## Component 3 — the docs gallery

`scripts/build-docs.mjs`:

1. Globs `guidelines/*.html`, `components/*/*.card.html`, `ui_kits/*/index.html`.
2. Parses each file's leading `<!-- @dsCard group="…" viewport="WxH" name="…"
   subtitle="…" -->` header.
3. Emits `docs/index.html` — cards grouped by `group`, each an `<iframe>` pointed at
   `../<path>` sized to its declared viewport, scaled down to fit its column.

The gallery is a **shell around the specimens, never a copy of them**, so it cannot
drift from source. Regenerating is idempotent; CI fails if the committed file
differs from a fresh build.

Group order: Colors, Type, Spacing, Effects, Brand, Components, Website.

The page is itself built in the Axelerate system — grid-paper backdrop
(`.ax-grid-paper`), Bricolage 800 lowercase wordmark, Gabarito caps labels, Lacquer
margin notes, flat paper shadows, sticker-cut nav. It imports `../styles.css`; it
defines no colors of its own.

`index.html` at the repo root is a meta-refresh to `docs/` so the bare Pages URL lands
somewhere useful.

## Component 4 — validation

`scripts/validate.mjs` exits non-zero on any failure. Checks:

1. **Manifest completeness** — every entry in `_ds_manifest.json` has its `.jsx`,
   `.d.ts`, and `.prompt.md` on disk at the declared path.
2. **Barrel agreement** — `index.js` exports exactly the manifest's 22 names, no more,
   no fewer.
3. **Card headers** — every specimen file has a parseable `@dsCard` header with
   `group`, `viewport` (matching `\d+x\d+`), and `name`.
4. **Asset references** — every `assets/icons/…` and `assets/doodles/…` path appearing
   in any `.jsx`, `.html`, or `.css` resolves to a real file.
5. **Token resolution** — every `var(--token)` referenced in `components/`,
   `guidelines/`, `ui_kits/`, and `tokens/` is defined in `tokens/`. Ignores tokens
   defined inline in the same file and CSS-wide names.

Zero runtime dependencies — plain Node `fs` + regex. No test framework, because there
is no logic to unit-test; these are integrity assertions over a static asset tree.

`ci.yml` on push/PR to `main`: Node 20 → `node scripts/validate.mjs` →
`npx oxlint --config _adherence.oxlintrc.json` → `node scripts/build-docs.mjs &&
git diff --exit-code docs/` (docs freshness).

`oxlint` runs in warn-only mode as the shipped config declares (all rules are `"warn"`),
so adherence drift is visible in CI output without blocking a push.

## Component 5 — GitHub

- `brew install gh`; user runs `gh auth login` interactively.
- `gh repo create axelerate-design-system --private --source=. --remote=origin`.
- Commits: (1) spec, (2) bundle import verbatim, (3) additive tooling. Keeping the
  verbatim import as its own commit means `git log` shows exactly what was authored
  here versus what came out of the zip.
- `pages.yml` uploads the **repo root** as the artifact (relative paths from `docs/`
  reach `../guidelines/…`), on `workflow_dispatch` + push to `main`.

## Known limitations

- **Pages is dormant.** GitHub Pages does not serve private repos on the free plan.
  The workflow is committed and correct but will not publish until the repo is public
  or the account is on Pro/Team/Enterprise. `open docs/index.html` works locally now.
- **`uploads/` is committed** at the user's request. It contains a third-party
  Squarespace design jpeg and personal screenshots. **This repo must not be flipped
  public without removing that directory** — noted in the README.
- **No LICENSE file.** Licensing Axelerate brand IP is the user's decision. The README
  carries third-party notices instead: Doodle Icons by Khushmeen Sidhu (free for
  commercial use, no attribution required); fonts are Google-hosted stand-ins
  (Bricolage Grotesque, Instrument Sans, Gabarito, Lacquer), not licensed brand fonts.
- **Specimens require network.** They pull React/Babel from unpkg at runtime, so the
  gallery needs internet to render. Not changed — vendoring those would edit bundle
  files, which the frozen-layout constraint forbids.
- **The design system's own caveats carry over** unchanged (readme.md → Caveats): spot
  and hero illustrations do not exist, icons are a stand-in set, the website kit is
  demonstrative, there is no logo.

## Finding: the bundle's readme miscounts its own components

`readme.md` states *"23 primitives in `components/`"*. The real number is **22** —
confirmed four ways: `_ds_manifest.json` has 22 entries, and there are 22 `.jsx`,
22 `.d.ts`, and 22 `.prompt.md` files. The per-group list in that same readme
paragraph also sums to 22 (actions 2, inputs 5, display 3, data 3, paper 4,
illustration 1, navigation 1, feedback 3), so the "23" is a stray total, not a
missing component.

`readme.md` is a bundle file and the frozen-layout rule forbids editing it. The
correction is recorded here and in the repo README instead. Validation check #2
doesn't pin the literal number 22 — it asserts set equality between
`_ds_manifest.json` and the barrel (`index.js`/`index.d.ts`), which is strictly
better: if a 23rd component is ever added, the check still passes as long as the
manifest and barrel move together.
