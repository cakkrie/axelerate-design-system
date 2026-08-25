Proportions drawn by hand — a row of slanted pencil strokes (or wobbly dots) filled up to the value. Use instead of any bar chart or progress bar.

```jsx
<MarkerBar label="Seats claimed" figure="62 / 100" value={62} color="violet" note="almost gone" />
<MarkerBar shape="dot" value={41} color="sky" ticks={18} />
```

`ticks` is the drawing resolution (18–26 reads best), not the data. Stack 3–5 rows with the same `ticks` for a comparison. `inverse` on ink or violet panels.
