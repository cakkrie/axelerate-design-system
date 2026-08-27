Toggle for instant-apply settings (checkbox = forms, switch = settings).

```jsx
<Switch label="Open to intros" defaultChecked />
<Switch label="Weekly digest" onChange={e => save(e.target.checked)} />
```

**Two sizes.** `md` (default) is the 46×25 track; `size="sm"` is 36×20, for a settings list where a column of full-size switches reads as a column of buttons rather than a list of facts. The thumb keeps its overhang at both sizes, so the drawn proportions survive the reduction.

**The label is 44px tall at both sizes**, while the drawn control is 25px (20 at sm). The target is the label, not the ink — the switch stays under the thumb of anyone who aims near it without the track growing to meet the rule.

When the row already names the toggle, omit `label` and pass `aria-label` instead. Passing both prints the name twice.
