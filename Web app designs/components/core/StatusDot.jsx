export function StatusDot({ status = "off", label, className = "" }) {
  const dot = <span className={`bd-dot bd-dot-${status}`} />;
  if (!label) return <span className={className}>{dot}</span>;
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      {dot}
      <span style={{ fontSize: "var(--fs-xs)", color: "var(--text-muted)" }}>{label}</span>
    </span>
  );
}
