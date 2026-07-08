**Chip** — small pill for filters and tags. Ghost by default; `selected` swaps to the accent-tinted fill. Optional `removable` trailing ×.

```jsx
<Chip selected onClick={() => setGenre(null)}>All</Chip>
<Chip icon="🎮" onClick={() => setGenre("RPG")}>RPG</Chip>
<Chip removable onRemove={() => removeTag(t)}>{t}</Chip>
```

Use for facets/filters/tags a user can toggle or clear — not for fixed status labels (use `Badge` for those).
