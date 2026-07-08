export function Drawer({ open, onClose, side = "right", title, children, className = "" }) {
  if (!open) return null;
  return (
    <div className="bd-drawer-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose && onClose(); }}>
      <div className={`bd-drawer ${side === "left" ? "bd-drawer-left" : ""} ${className}`.trim()} role="dialog" aria-modal="true">
        {title != null && (
          <div className="bd-drawer-header">
            <h3>{title}</h3>
            <button className="bd-modal-close" aria-label="Close" onClick={onClose}>✕</button>
          </div>
        )}
        <div className="bd-drawer-body">{children}</div>
      </div>
    </div>
  );
}
