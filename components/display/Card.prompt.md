The general-purpose paper card — flat offset shadow, wobbly corners — no keyline. For a folder with a tab use `FileCard`; for an aside use `StickyNote`.

```jsx
<Card tint="violet" tilt={-2} scribble="01" padding="lg">
  <h3>Curated rooms</h3>
  <p>Eight seats, one topic.</p>
</Card>
```

Cards want to be **colourful and slightly crooked**: fill 2–4 in a row with different tints and alternate `tilt` (−3…+3) instead of gridding white boxes. In a fan, give earlier cards a higher `zIndex` so their `scribble` numbers stay on top. Body text on a tint must be full white (or ink on butter/lilac) — the 86% wash is only safe on sky and coral. `punch` adds binder holes, `scribble` a handwritten number, `variant="sketch"` marks an empty slot. Old names (`default`/`elevated`/`outline`/`inverse`) still map to sheet/tall/sketch/ink.
