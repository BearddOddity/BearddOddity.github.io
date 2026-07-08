export function Badge({ children, variant = "ghost", dot = false, className = "" }) {
  return (
    <span className={`bd-badge bd-badge-${variant} ${className}`.trim()}>
      {dot && <span className={`bd-dot bd-dot-on`} style={{ width: 6, height: 6 }} />}
      {children}
    </span>
  );
}
