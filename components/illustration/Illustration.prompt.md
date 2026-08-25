Illustration frame for the brand's three tiers — hand-drawn ink line art on a tilted accent blob. Use it to explain abstract ideas, warm up onboarding, and soften errors.

```jsx
<Illustration tier="mini" glyph="coffee-cup-2" blob="lilac" alt="A room of eight" />
<Illustration tier="spot" src="assets/illustrations/intro-request.svg" blob="butter" alt="Passing a note" />
<Illustration tier="hero" label="Eight people around one table, seen from above" />
```

- **mini (96px)** — one object beside a paragraph, list row, or empty state. A doodle icon promoted to illustration size via `glyph` counts.
- **spot (220px)** — a small scene for a feature block, onboarding step, or error state.
- **hero (520px)** — one per page, top of a landing or onboarding flow.

With no `src`/`glyph` it renders a dashed placeholder captioned with what the scene should show — ship those rather than inventing artwork.
