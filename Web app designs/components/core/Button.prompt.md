**Button** — the brand's action control; glass `primary` by default, purple-gradient `cta` for the hero/confirm action.

```jsx
<Button variant="cta" onClick={connect}>Connect account</Button>
<Button variant="primary">Cancel</Button>
<Button variant="danger" size="sm">Remove</Button>
```

Variants: `primary` (elevated glass), `cta` (purple gradient), `success` (green tint), `danger` (red gradient), `ghost` (transparent). Sizes: `sm`, `md` (default). All lift on hover; `disabled` dims to 40%.
