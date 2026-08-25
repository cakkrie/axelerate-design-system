# Axelerate Design System

**Axelerate** is an invite-only business network: founders, operators, and backers in curated rooms, moving faster together. Brand pillars from the brief: (1) *exclusive connection* — cool, involving, credible business practice; (2) *acceleration for everyone* — 无限可能 (infinite possibility), 加速 (accelerate), 所有人都可以 (everyone can get in the room), 增加附加值 (every member adds value); (3) a **purple** identity. The tension to hold: exclusive doors, inclusive spirit — invite language that never turns snobby.

## Sources
Text brief only (company description + brand notes, purple logo), plus a reference screenshot the user attached (`uploads/Screenshot 2026-08-19 at 11.55.37 PM.png` — a collage/doodle-heavy brand-book direction that informed the hand-drawn layer). **No codebase, Figma, logo files, fonts, decks, or imagery were provided.** Everything here is authored from scratch against the brief; swap in real sources when they exist.

## Illustration
Three tiers, all **ink line art on a single tilted accent blob** (`Illustration`):
- **mini · 96px** — one object next to a paragraph, list row, or empty state. A doodle icon promoted to this size counts, so the mini tier works today.
- **spot · 220px** — a small scene for a feature block, onboarding step, or a softened error.
- **hero · 520px** — one per page, at the top of a landing page or onboarding flow.

Rules: hand-drawn ink outlines (2–3px, round caps), flat fills, **one** accent blob per illustration (lilac/butter/coral soft, tilted −5…−9°), no gradients, no 3D, no stock-vector people. Scenes are ordinary desk moments — hands, paper, cups, laptops, notes — metaphors for the abstract thing being explained. Where the art doesn't exist yet, ship the component's **dashed placeholder captioned with the scene description** rather than inventing artwork.

**Status:** only the mini tier has real assets (the doodle-icon set). Spot and hero art needs to be commissioned or licensed — see Caveats.

## Content fundamentals
Voice: **playful confidence**. Short sentences. Verbs first. Warm, quick, a little cheeky — never corporate, never smug.
- **Sentence case everywhere**, including headlines and buttons. No Title Case, no ALL CAPS except mono data labels.
- **We/you.** The product speaks as "we" and talks to "you". Never "the user", never passive voice.
- **Verb-first labels:** "Request invite", "Make the intro", "Grab a seat" — not "Submit", "Invitation Request".
- **Numerals, always:** "8 seats", "12 min median reply".
- **Speed is the metaphor** (fast lane, inside track, pick up speed) — used lightly, once per view.
- **Exclusive but warm:** invite/member/inside language, zero gatekeep-y sneering.
- **Errors stay light:** "That didn't send. Give it another go?" — helpful first, playful second, never blame.
- **Banned:** synergy, leverage, ecosystem, unlock, empower, "successfully".
- **Emoji:** none in UI chrome or headings; at most one in a celebratory toast, and only when it earns its place.
- Examples: hero "The inside track for people who build." · success "You're in. We move fast — see you inside." · stat "0 PITCH DECKS AT DINNER".

## Visual foundations
- **Color — three categories.** **Core:** one brand purple `#6E2BEE` (never tinted variants of it in UI), white ground, ink `#171029` — nothing else is core. **Accents:** eight punchy single-hue colours for paper objects — pink `#E5237E`, coral `#FF6B4A`, orange `#FB8500`, yellow `#FFC93C`, lime `#9BD22B`, teal `#14B8B8`, cyan `#28C3EE`, navy `#1B2E63` (plus lilac `#C2A4FF` for soft violet moments). White text on pink, coral, navy, and violet only — ink on every other accent. 2–3 accents per view, never two neighbouring hues side by side; accents never become page backgrounds or button fills (violet and yellow own the CTAs). **Greys:** warm neutral ramp `#F8F7F4`→`#1D1B18`, no purple cast.
- **Type:** Bricolage Grotesque (display, 700–800, tracking −0.02…−0.035em) / Instrument Sans (body/UI) / **Gabarito** (`--font-label`: stats, stamps, caps labels at +0.07em, weight 500 for captions and 700 for big figures, `tabular-nums` on anything that counts) / Lacquer (margin annotations, 18–34px, ±2–3° tilt — never UI labels). Scale 12→80px (`--text-xs…6xl`). Body 14–16px at 1.55. No monospace anywhere — the technical voice comes from Space Grotesk's letterforms and tracking, not from fixed pitch.
- **Signature motifs (the hand-drawn desk):** the brand looks like a designer's desk — tinted **folders** fanned out, **speech bubbles**, **sticky notes**, **die-cut stickers**, and data **drawn by hand** (tally marks for counts, hatched stroke rows for shares, a marker circle around the one figure that matters). Plus: ONE emphasis doodle per view — butter scribble underline (`--scribble-butter`) or violet marker circle (`assets/doodles/circle-violet.svg`) around a phrase; subtle wobbly hand radii; flat offset paper shadows (nothing blurs); **sticker buttons** (hand-sketched corners via `--radius-btn`, display-font labels); ±1–4° tilts; Lacquer margin notes; grid-paper backdrops; lowercase extrabold wordmark; butter-on-ink pops.
- **Paper objects (the playful layer):** the brand's world is a desk. **Folders** (`FileCard`) fan 3–5 across a section, overlapping −14…−18px with alternating ±1–4° tilts, each a different tint, tab label in caps; **speech bubbles** (`Bubble`) carry quotes and asides with the tail pointing back at the speaker, alternating sides so a cluster reads as conversation; **sticky notes** (`StickyNote`) hold one aside per view — folded corner, optional tape, Caveat headline; **die-cut stickers** (`Sticker`) punctuate — 2–3 per view, always overlapping an edge, always with the 3px white keyline. Never stack all four in one section.
- **Data display:** hand-drawn, never plotted. **Tally marks** (`TallyCount`) for counts under ~30; **hatched stroke rows** (`MarkerBar` — 18–26 slanted pencil strokes, or `shape="dot"` wobbly dots, filled up to the value) for shares and comparisons; `StatBlock` for figure + label + a Lacquer aside; the marker circle on the ONE figure that matters. No pie charts, no gridlines, no solid progress bars, and no invented denominators — a figure with no honest proportion just stands as type.
- **Navigation stays core:** tabs, nav chrome, and segmented switches use purple / white / ink only — accents never colour navigation.
- **Surfaces:** white page and white cards; `--surface-quiet` (`#F8F7F4`, warm near-white) for folder tabs, toasts, wells, and section bands; violet full-bleed bands for big moments; ink for footers. No cream anywhere.
- **Spacing:** 4px base, t-shirt tokens (`--space-2xs…4xl`); card padding 24, stacked content 12, sibling controls 8, page sections 64+. Container 1160px.
- **Radii:** three corner styles only — **hand** (wobbly paper, with `-sm`/`-lg` scale: cards, folders, notes, inputs, dialogs), **sketch** (`--radius-btn`, buttons only), **pill** (badges, icon buttons, segmented switches). No 4/8px scale; corners are drawn, not measured.
- **Borders:** lines belong to the hand — doodles, tally marks, dashed sketch tracks, grid paper. Containers stay quiet: hairline gray-100 (or borderless) + flat paper shadow; inputs, selects, and secondary buttons 1.5px gray-300 (gray-400 on hover); checks/radios 1.5px gray-400; dashed gray-300 = the sketch variant; colour arrives as a tint strip or a folder tab, never as an outline.
- **Shadows:** flat offsets only — nothing in this system blurs. `--shadow-paper-inset` (2×2) on fields and chips, `--shadow-paper` (2×3) on cards, notes, and stickers, `--shadow-paper-lg` (4×6) on hovers, toasts, and dialogs; `--shadow-hand` (violet 3×4) for brand moments only. The 2.5px white die-cut keyline (`--sticker-cut`) belongs to buttons only — never to cards, badges, or tags.
- **Motion:** "launch" ease `cubic-bezier(.2,0,0,1)`, 120/200/320ms. Hover = −1…2px lift + ±1° tilt + glow or darken; press = scale(.97) squish; dialogs pop+fade. No bounces, no springs, nothing >320ms.
- **Hover states:** filled stickers lift 1–2px and tilt ~1° with a deeper flat shadow; outlined stickers swap their keyline to violet; ghost buttons get the butter scribble; cards lift + tilt. **Press:** squish to 97%.
- **Transparency/blur:** only two places — sticky nav (85% white + 10px blur) and dialog overlay (55% ink + 4px blur).
- **Cards:** paper, not panels. Flat offset shadow (no keyline, no gray hairline), wobbly corners. Colour is a whole-card `tint` (not an accent stripe); stacks are fanned with ±1–4° tilts and negative margins; details come from the desk — punched binder holes, a Lacquer number hanging off a corner, a dashed `sketch` slot for empty states. Never grid four white boxes at equal angles; that's the tech look this brand avoids.
- **Form controls:** fields are **ruled notebook lines**, not boxes — 42px tall, cream fill, wobbly top corners, a 2px pencil line under the text; focus turns the line violet and swipes a butter highlighter through the field. Hints and errors are handwritten in Lacquer. Checkboxes are pencil squares whose purple **hand tick overshoots the box** on all sides; radios are grey rings that gain a purple ring plus a centred purple dot; switches are wobbly pencil tracks with an oversized die-cut blob thumb that rotates as it slides (ink when off, purple when on). All three squish to 92% on press. Buttons, badges, and tags are **die-cut stickers** (2.5px white keyline + flat shadow, tilt on hover); ghost buttons get a butter scribble underline. Tabs are folder tabs; toasts are sticky notes; dialogs are taped sheets; tooltips are speech bubbles.
- **Focus:** 2px violet outline, offset 2; fields swap their line to violet-500 with a flat violet offset shadow. **Selection** is butter.
- **Layout:** centered 1160px container, 12-col mental model, generous whitespace; sticky top nav; toasts fixed bottom-right at 24px.

## Iconography
- **Doodle Icons by Khushmeen Sidhu** — the icon voice. 38 curated hand-drawn icons copied into `assets/icons/` (free for commercial use, no attribution; source repo: github.com/svatsa159/react-doodle-icons). Fill-based SVGs; tint with the `.ax-icon` utility (`background:currentColor` + `mask:url(icon)`). Sizes 20–34px, ink-900 default, violet-600 for emphasis, butter on ink chips, ±3° tilt when decorative.
- **Micro-utility glyphs** (Select chevron, Dialog ×, Checkbox tick) stay minimal 2px geometric strokes at 12–16px — invisible chrome. Everything user-facing uses doodle icons; never mix the two voices in one spot.
- **Doodles** (`assets/doodles/`): circle-violet, underline-butter, arrow-violet, sparkle-butter — abstract marker strokes (4–5px round caps), violet/butter only, 1–2 per view.
- Color: ink-900 default; violet for emphasis. The set is line art, so icons sit **naked in the layout** — never inside a filled chip or on an accent fill, where thin strokes disappear.
- Vocabulary: zap = fast, arrow-right = go, coffee-cup = rooms, trend-up = value, crown = Circle tier. Unicode `»` welcome in text links; **no emoji as icons**.
- **No logo exists** — the provided sources contained no logo file. The wordmark is plain type: lowercase "axelerate", Bricolage 800, −0.04em, in violet on light or white on violet only (see `guidelines/brand-wordmark.html`). Never draw a mark.

## Components
23 primitives in `components/`, each `Name.jsx` + `Name.d.ts` + `Name.prompt.md`:
- **actions/** — Button, IconButton
- **inputs/** — Input, Select, Checkbox, Radio, Switch
- **display/** — Card, Badge, Tag
- **data/** — TallyCount, MarkerBar, StatBlock *(hand-drawn data)*
- **paper/** — FileCard, Bubble, StickyNote, Sticker *(the playful paper layer)*
- **illustration/** — Illustration *(mini / spot / hero frames)*
- **navigation/** — Tabs
- **feedback/** — Dialog, Toast, Tooltip

**Intentional additions:** the full set is an addition by necessity — no component source was provided, so this is the standard inventory sized to the brand (per from-scratch rules). Beyond it: **TallyCount / MarkerBar / StatBlock** (data drawn by hand — the brand shows numbers as tally marks and highlighter strokes, never as charts) and **FileCard / Bubble / StickyNote / Sticker** (the playful paper vocabulary — folders, speech bubbles, notes, die-cut stickers — which the brand's playfulness leans on and which would otherwise be hand-rolled per screen).

## UI kits
- `ui_kits/website/` — invite-only marketing landing (interactive: invite dialog → toast, tabs, pricing toggle). **Demonstrative** — no product source existed to recreate.

## Index
- `styles.css` — global entry (imports everything in `tokens/`)
- `tokens/` — fonts, colors, typography, spacing, effects, base
- `guidelines/` — 24 specimen cards (Colors, Type, Spacing, Effects, Brand)
- `assets/icons/` — 38 Doodle Icons (hand-drawn, tintable via mask)
- `assets/doodles/` — marker-stroke doodle SVGs (violet circle/arrow, butter underline/sparkle)
- `components/` — primitives + per-group `*.card.html` specimens
- `ui_kits/website/` — landing page kit
- `thumbnail.html` — homepage tile · `SKILL.md` — agent skill entry

## Caveats
- **Fonts are Google-hosted stand-ins** (Bricolage Grotesque, Instrument Sans, Gabarito, Lacquer) — no brand font files were provided. Attach licensed fonts and we'll ship real `@font-face` binaries.
- **Spot and hero illustrations do not exist yet.** The `Illustration` component ships labelled placeholders; the mini tier reuses the doodle icons. A hand-drawn line-art set (desk scenes: hands, paper, cups, laptops) needs commissioning or licensing — nothing was drawn or generated here.
- Icons are a substitution: Khushmeen Sidhu's Doodle Icons (free/no-attribution) stand in for a bespoke Axelerate icon set — swap in brand icons if they ever exist.
- Doodles are authored abstract strokes standing in for a real illustration set; the reference collage's figurative doodles and photos need real assets.
- No logo/asset files provided → wordmark is plain type.
- The website kit is illustrative, not a recreation.
