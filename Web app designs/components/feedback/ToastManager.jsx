let _bdToastId = 0;
const _bdToastListeners = new Set();
let _bdToastState = [];

function _bdEmit() {
  for (const fn of _bdToastListeners) fn(_bdToastState);
}

/** Imperative API — call from anywhere: bdToast.push("Overlay connected", "success") */
export const bdToast = {
  push(message, variant = "info", duration = 3200) {
    const id = ++_bdToastId;
    _bdToastState = [..._bdToastState, { id, message, variant }];
    _bdEmit();
    if (duration) {
      setTimeout(() => {
        _bdToastState = _bdToastState.filter((t) => t.id !== id);
        _bdEmit();
      }, duration);
    }
    return id;
  },
  dismiss(id) {
    _bdToastState = _bdToastState.filter((t) => t.id !== id);
    _bdEmit();
  },
};

/** Mount once near the root. Renders whatever bdToast.push() queues, stacked bottom-right. */
export function ToastManager({ className = "" }) {
  const [toasts, setToasts] = React.useState(_bdToastState);
  React.useEffect(() => {
    _bdToastListeners.add(setToasts);
    return () => _bdToastListeners.delete(setToasts);
  }, []);
  return (
    <div className={`bd-toast-stack ${className}`.trim()}>
      {toasts.map((t) => (
        <div key={t.id} className={`bd-toast bd-toast-${t.variant}`} onClick={() => bdToast.dismiss(t.id)} style={{ cursor: "pointer" }}>
          {t.message}
        </div>
      ))}
    </div>
  );
}
