export function Modal({ open, onClose, title, children, footer, className = "" }) {
  if (!open) return null;
  return (
    <div className="bd-modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose && onClose(); }}>
      <div className={`bd-modal ${className}`.trim()} role="dialog" aria-modal="true">
        {title != null && (
          <div className="bd-modal-header">
            <h3>{title}</h3>
            <button className="bd-modal-close" aria-label="Close" onClick={onClose}>✕</button>
          </div>
        )}
        <div className="bd-modal-body">{children}</div>
        {footer && <div className="bd-modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
