Tab bar for switching views. The default `folder` variant draws literal folder tabs — quiet grey resting, brand purple when active, with a matching purple rule under the row.

```jsx
<Tabs value={tab} onChange={setTab} items={[
  {id:'all',label:'All'},
  {id:'digital',label:'Digital'},
  {id:'physical',label:'Physical'}]}/>
```

**Navigation stays core** — purple, white, ink. The accent palette belongs to paper objects (cards, folders, bubbles, stickers), never to nav chrome. The one exception is a bottom tab bar with a small fixed set of destinations, where a per-destination tint is learnable; see the navigation rule in the readme. Use `variant="underline"` inside dense UI and `variant="pill"` for small segmented switches.
