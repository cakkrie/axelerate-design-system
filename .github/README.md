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
`index.js`, `index.d.ts`, `package.json`, `.github/README.md`, `index.html`, `docs/`,
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
