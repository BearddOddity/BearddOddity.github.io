**Drawer** — edge-anchored glass panel. Use for mobile nav, filters, side detail views.

```jsx
<Drawer open={open} onClose={() => setOpen(false)} title="Filters">
  <FieldSection title="Platform" icon="🎮" defaultOpen>…</FieldSection>
</Drawer>
```

`side="left"` for nav-style drawers, default `right` for filters/detail. Scrolls internally if content overflows.
