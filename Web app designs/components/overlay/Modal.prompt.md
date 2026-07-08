**Modal** — centered glass dialog. Scrim dims + blurs the page; the panel pops in.

```jsx
const [open, setOpen] = useState(false);
<Modal open={open} onClose={() => setOpen(false)} title="Remove channel"
  footer={<>
    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="danger" onClick={confirm}>Remove</Button>
  </>}>
  This disconnects the channel and deletes its saved overlays.
</Modal>
```

Always control visibility via `open` (unmount when closed, don't just hide) so entrance animation replays each time.
