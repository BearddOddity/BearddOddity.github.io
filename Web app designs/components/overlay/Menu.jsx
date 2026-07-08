export function Menu({ trigger, items = [], align = "start", className = "", menuStyle }) {
  const [open, setOpen] = React.useState(false);
  const [focusedIndex, setFocusedIndex] = React.useState(-1);
  const wrapRef = React.useRef(null);

  React.useEffect(() => {
    const onDocMouseDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  const selectable = items.map((it, i) => ({ ...it, i })).filter((it) => !it.divider && !it.disabled);

  const commit = (item) => {
    if (!item || item.disabled || item.divider) return;
    if (item.onClick) item.onClick();
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (!open) {
      if (["Enter", " ", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        setOpen(true);
        setFocusedIndex(selectable[0] ? selectable[0].i : -1);
      }
      return;
    }
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "ArrowDown": {
        e.preventDefault();
        const next = selectable.find((it) => it.i > focusedIndex);
        setFocusedIndex(next ? next.i : (selectable[0] ? selectable[0].i : -1));
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const prevItems = selectable.filter((it) => it.i < focusedIndex);
        const prev = prevItems[prevItems.length - 1];
        setFocusedIndex(prev ? prev.i : (selectable[selectable.length - 1] ? selectable[selectable.length - 1].i : -1));
        break;
      }
      case "Enter":
      case " ":
        e.preventDefault();
        commit(items[focusedIndex]);
        break;
      default:
        break;
    }
  };

  return (
    <div className={`bd-menu-wrap ${className}`.trim()} ref={wrapRef} onKeyDown={onKeyDown}>
      <span onClick={() => setOpen((o) => !o)}>{trigger}</span>
      <ul
        className={`glass-menu bd-menu-list bd-menu-${align} ${open ? "open" : ""}`}
        role="menu"
        style={menuStyle}
      >
        {items.map((it, i) =>
          it.divider ? (
            <li key={i} className="bd-menu-divider" role="separator" />
          ) : (
            <li
              key={i}
              role="menuitem"
              aria-disabled={it.disabled}
              className={`glass-option bd-menu-item ${i === focusedIndex ? "focused" : ""} ${it.danger ? "bd-menu-item-danger" : ""}`}
              style={it.disabled ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
              onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); commit(it); }}
              onMouseEnter={() => !it.disabled && setFocusedIndex(i)}
            >
              {it.icon != null && <span className="bd-menu-item-icon">{it.icon}</span>}
              <span style={{ flex: 1 }}>{it.label}</span>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
