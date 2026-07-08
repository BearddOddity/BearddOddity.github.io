**Hero** — the top-of-page marketing block: kicker, headline, description, actions, accent glow.

```jsx
<Hero
  kicker="Design system · v1"
  title="Ship streaming tools that feel like gear."
  description="Dense, glassy, near-black UI with a single neon-purple accent."
  actions={<>
    <Button variant="cta">Start free</Button>
    <Button variant="ghost">View docs</Button>
  </>}
/>
```

Title uses `--font-heading` (Montserrat) at `--fs-3xl`; keep it under ~8 words for the max-width wrap.
