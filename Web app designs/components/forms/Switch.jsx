export function Switch({ checked, onChange, label, disabled = false, className = "" }) {
  const control = (
    <span
      className="bd-switch"
      data-checked={checked ? "true" : "false"}
      role="switch"
      aria-checked={checked}
      tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && onChange && onChange(!checked)}
      onKeyDown={(e) => { if (!disabled && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); onChange && onChange(!checked); } }}
      style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <span className="bd-switch-thumb" />
    </span>
  );
  if (!label) return control;
  return (
    <label className={`bd-check-row ${className}`.trim()} style={{ justifyContent: "space-between" }}>
      <span>{label}</span>
      {control}
    </label>
  );
}
