**Skeleton** — shimmering loading placeholder. Stack a few to mock a card/row while data loads.

```jsx
<div style={{display:"flex", gap:12}}>
  <Skeleton circle width={40} height={40} />
  <div style={{flex:1}}>
    <Skeleton height={14} width="60%" />
    <div style={{height:8}} />
    <Skeleton height={12} width="90%" />
  </div>
</div>
```
