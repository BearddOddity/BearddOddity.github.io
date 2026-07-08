export function Toast({ children, variant = "info", icon, className = "" }) {
  const defaultIcon = { success: "✓", error: "✕", info: "ⓘ" }[variant];
  return (
    <div className={`bd-toast bd-toast-${variant} ${className}`.trim()} style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontWeight: 700 }}>{icon ?? defaultIcon}</span>
      <span>{children}</span>
    </div>
  );
}
