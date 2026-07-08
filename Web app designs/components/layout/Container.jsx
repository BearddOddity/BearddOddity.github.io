export function Container({ children, className = "", style }) {
  return <div className={`bd-container ${className}`.trim()} style={style}>{children}</div>;
}
