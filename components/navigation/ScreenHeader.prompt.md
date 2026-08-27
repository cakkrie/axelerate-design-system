Header for a screen you arrive at from somewhere else. Back control, the place you came from, the title in `--font-title`, and one aside in the margin voice.

```jsx
<ScreenHeader
  back={{ as: Link, to: '/me', label: 'Back to me' }}
  kicker="Me"
  title="My wallet"
  note="cash out any time"
  lede="Payouts land within two business days."
  action={<Button size="sm">Withdraw</Button>}
/>
```

`back` spreads onto whatever you pass as `as`, so it works with a plain anchor (`{href:'/me'}`) or any router link — the system does not depend on one. The chevron is a bordered square rotated 45°, drawn in `currentColor`, so no icon is needed.

**The title is an h1.** One per screen; do not nest this inside another screen that already has one.

**The note is the margin voice** — one short phrase, tilted −2°, never a sentence, and never anything the screen cannot be read without. If it carries information, it is a `lede`, not a note.

**On a coloured band**, every colour is an override with the default as its fallback, so nothing needs to reach into `.ax-*`:

```css
.hero--violet {
  --sh-ink: var(--gray-0);      /* chevron + title */
  --sh-muted: rgba(255,255,255,.7);
  --sh-note: var(--butter-300);
}
```

Set them on any ancestor. `--sh-lede` covers the standfirst, and `--sh-gap` (default 16px) opens up the space between the back row and the title, which a band usually wants more of than a white page does. Check the contrast you land on: the title is large text, but the kicker is 10px and needs the full 4.5:1.
