**Menu** — glass dropdown action list anchored to a trigger. For row/kebab actions, not value pickers (use `Select` for those).

```jsx
<Menu
  trigger={<button className="bd-btn bd-btn-ghost bd-btn-sm">⋯</button>}
  items={[
    { label: "Rename", icon: "✏️", onClick: rename },
    { label: "Duplicate", icon: "📋", onClick: duplicate },
    { divider: true },
    { label: "Delete", icon: "🗑️", danger: true, onClick: remove },
  ]}
/>
```

`align="end"` hangs the panel from the trigger's right edge (for menus near the right edge of the viewport).
