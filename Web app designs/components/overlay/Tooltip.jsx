export function Tooltip({ label, children, className = "" }) {
  return (
    <span className={`bd-tooltip-wrap ${className}`.trim()}>
      {children}
      <span className="bd-tooltip" role="tooltip">{label}</span>
    </span>
  );
}
