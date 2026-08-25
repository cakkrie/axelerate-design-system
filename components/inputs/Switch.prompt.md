Toggle for instant-apply settings (checkbox = forms, switch = settings).

```jsx
<Switch label="Open to intros" defaultChecked />
<Switch label="Weekly digest" onChange={e => save(e.target.checked)} />
```
