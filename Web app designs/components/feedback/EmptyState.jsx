export function EmptyState({ icon = "📭", title, description, action, className = "", children }) {
  return (
    <div className={`bd-empty ${className}`.trim()}>
      <div className="bd-empty-icon">{icon}</div>
      <div className="bd-empty-title">{title}</div>
      {description && <div className="bd-empty-desc">{description}</div>}
      {action}
      {children}
    </div>
  );
}
