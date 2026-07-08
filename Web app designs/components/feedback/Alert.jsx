export function Alert({ variant = "info", title, children, onClose, className = "" }) {
  const icon = { info: "ℹ️", success: "✓", warn: "⚠️", error: "✕" }[variant];
  return (
    <div className={`bd-alert bd-alert-${variant} ${className}`.trim()} role="alert">
      <span className="bd-alert-icon">{icon}</span>
      <div className="bd-alert-body">
        {title && <div className="bd-alert-title">{title}</div>}
        <div>{children}</div>
      </div>
      {onClose && <button className="bd-alert-close" aria-label="Dismiss" onClick={onClose}>✕</button>}
    </div>
  );
}
