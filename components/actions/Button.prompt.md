Pill action button — the default interactive element; verb-first labels ("Request invite", never "Submit").

```jsx
<Button>Request invite</Button>
<Button variant="butter" size="lg">Get in the room</Button>
<Button variant="secondary">See how it works</Button>
<Button variant="ghost" size="sm">Skip for now</Button>
```

Variants: `primary` (violet, everyday default), `butter` (lime — the ONE hero CTA on a view), `secondary` (outlined), `ghost` (text). Sizes `sm|md|lg`. `fullWidth` for forms. Hand-sketched corner shape (`--radius-btn`), Bricolage labels; only secondary carries a soft gray outline. Hover lifts with a marker shadow + ~1° tilt; press squishes to 97%.
