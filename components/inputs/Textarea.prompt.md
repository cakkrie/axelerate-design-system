Multi-line text field with the same label/hint/error rows as Input — use for anything longer than a line: a reason, a note, a brief.

```jsx
<Textarea label="Reason" rows={3} placeholder="e.g. Missing brand tag, or the link is private" />
<Textarea label="Notes" hint="Only the crew lead sees this." />
<Textarea label="Reason" error="Say why, and it goes to them as written." />
```

Native textarea props pass through (`value`, `onChange`, `placeholder`, `maxLength`…). Error replaces hint. `rows` defaults to 3; the control is resizable vertically only.
