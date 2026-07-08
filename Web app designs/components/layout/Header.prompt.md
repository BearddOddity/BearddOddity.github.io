**Header** — sticky top nav for marketing/web-app pages. Blurred glass bar over the canvas, Montserrat wordmark, nav links, action slot.

```jsx
<Header
  logo="beardd//oddity"
  links={["Product", "Docs", "Pricing"]}
  actions={<Button variant="cta" size="sm">Get started</Button>}
/>
```

Sticky (`position: sticky; top: 0`) — put it as the first child of the page. Pair with `Container` for content below.
