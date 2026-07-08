export function Chip({ children, selected = false, icon, removable = false, onRemove, disabled = false, onClick, className = "" }) {
  const interactive = !!onClick;
  const Tag = interactive ? "button" : "span";
  return (
    <Tag
      className={`bd-chip ${selected ? "bd-chip-selected" : ""} ${className}`.trim()}
      onClick={disabled ? undefined : onClick}
      disabled={interactive ? disabled : undefined}
      aria-pressed={interactive ? selected : undefined}
    >
      {icon != null && <span className="bd-chip-icon">{icon}</span>}
      <span>{children}</span>
      {removable && (
        <span
          className="bd-chip-remove"
          role="button"
          aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove && onRemove(); }}
        >
          ×
        </span>
      )}
    </Tag>
  );
}
