export function Toolbar({ children, className = "" }) {
  return <div className={`bd-toolbar ${className}`.trim()}>{children}</div>;
}
