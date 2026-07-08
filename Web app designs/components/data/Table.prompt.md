**Table** — data table for lists (channels, overlays, logs).

```jsx
<Table
  columns={[
    { key: "name", label: "Channel" },
    { key: "status", label: "Status", render: (r) => <StatusDot status={r.status === "live" ? "on" : "off"} label={r.status} /> },
  ]}
  rows={[{ id: 1, name: "beardds", status: "live" }]}
/>
```

Column heads are uppercase mono per the brand's "machine text" convention; use a `render` fn to place Badge/StatusDot/Avatar in a cell rather than raw strings.
