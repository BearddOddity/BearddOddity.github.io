**ToastManager** — mount once; call `bdToast.push(...)` from anywhere to queue a stacking, auto-dismissing toast.

```jsx
// once, near the app root:
<ToastManager />

// anywhere else:
bdToast.push("Overlay connected", "success");
bdToast.push("Auth expired", "error", 5000);
```

This is the lifecycle/stacking layer; the plain `Toast` component is just the static visual pill for demos/specimens.
