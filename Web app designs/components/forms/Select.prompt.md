**Select** — custom glass combobox (trigger + open dropdown panel both glassy, not a styled native `<select>`). Each option row blends as its own soft glass chip; full keyboard nav.

```jsx
<Select label="Platform" value={p} onChange={setP}
  options={["Twitch", "Kick", "YouTube"]} />
```
Options accept plain strings or `{value,label}` objects. Reads the system's `--glass-*` tokens, so it reshapes with the rest of the glass surfaces.
