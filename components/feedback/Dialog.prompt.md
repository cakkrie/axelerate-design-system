Modal dialog — focused tasks and confirmations; one per view.

```jsx
<Dialog open={open} onClose={() => setOpen(false)} title="Request an invite"
  footer={<><Button variant="ghost" onClick={close}>Not yet</Button><Button onClick={send}>Send it</Button></>}>
  <Input label="Work email" placeholder="you@company.com" />
</Dialog>
```

Overlay click and × both call `onClose`. Keep titles short and playful ("Request an invite", not "Invitation Request Form").

**Focus is the component's job, not yours.** On open it remembers what had focus, moves focus into the dialog, and keeps Tab cycling inside it; on close it hands focus back. Escape closes. None of that needs wiring from the caller — an earlier version did none of it, and every consumer's keyboard users were tabbing through the page behind the overlay.

Pass `initialFocus` (a ref) when something specific inside should take focus instead of the dialog itself — a text field on an edit dialog, say. The forwarded `ref` gives you the dialog element if you need it for anything else.
