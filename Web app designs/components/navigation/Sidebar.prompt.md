**Sidebar** — the 240px/68px collapsible app nav rail. Composes `NavItem` rows (auto-clones `collapsed` onto them) and owns the collapse toggle.

```jsx
<Sidebar logo={<div className="bd-logo">Status<span style={{color:"var(--bd-accent)"}}>Forge</span></div>}
  footer={<StatusDot status="on" label="Engine Online" />}>
  <NavItem icon="📊" label="Status Room" active />
  <NavItem icon="📚" label="Library" />
  <NavItem icon="⚙️" label="Settings" />
</Sidebar>
```

Use for the persistent left nav in dashboard/app-shell layouts. For a render-prop when children need the collapsed flag directly: `{(collapsed) => (...)}`.
