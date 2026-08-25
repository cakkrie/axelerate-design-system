Modal dialog — focused tasks and confirmations; one per view.

```jsx
<Dialog open={open} onClose={() => setOpen(false)} title="Request an invite"
  footer={<><Button variant="ghost" onClick={close}>Not yet</Button><Button onClick={send}>Send it</Button></>}>
  <Input label="Work email" placeholder="you@company.com" />
</Dialog>
```

Overlay click and × both call `onClose`. Keep titles short and playful ("Request an invite", not "Invitation Request Form").
