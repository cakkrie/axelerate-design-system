Tab bar for switching views. The default `folder` variant draws literal folder tabs — quiet grey resting, brand purple when active, with a matching purple rule under the row.

```jsx
<Tabs value={tab} onChange={setTab} items={[
  {id:'founders',label:'For founders'},
  {id:'operators',label:'For operators'},
  {id:'backers',label:'For backers'}]}/>
```

**Navigation stays core** — purple, white, ink. The accent palette belongs to paper objects (cards, folders, bubbles, stickers), never to nav chrome. Use `variant="underline"` inside dense UI and `variant="pill"` for small segmented switches.
