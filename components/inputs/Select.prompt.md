Native select styled to match Input, with a chevron affordance.

```jsx
<Select label="Room" options={['Founders', 'Operators', 'Backers']} />
<Select label="Stage" options={[{value:'seed',label:'Seed'},{value:'a',label:'Series A'}]} />
```

Prefer `options`; `<option>` children also work. Depends on Input's field styles (same directory).
