Notification card — confirmations and nudges. Position it yourself (fixed, bottom-right, 24px inset).

```jsx
<Toast tone="success" title="You're in." description="We move fast — see you inside." onDismiss={hide} />
<Toast tone="danger" title="That didn't send." description="Give it another go?" />
```

Tone drives the dot only; copy stays light even for errors.
