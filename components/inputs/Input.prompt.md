Text field with built-in label/hint/error rows — use for all single-line entry.

```jsx
<Input label="Work email" placeholder="you@company.com" hint="We reply within the week." />
<Input label="Name" error="We need this one." />
```

Native input props pass through (`type`, `value`, `onChange`, `placeholder`…). Error replaces hint.
