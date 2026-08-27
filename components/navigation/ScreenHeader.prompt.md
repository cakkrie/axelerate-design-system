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
