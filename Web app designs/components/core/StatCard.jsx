export function StatCard({ label, value, delta, className = "" }) {
  const deltaUp = typeof delta === "string" && delta.trim().startsWith("+");
  const deltaDown = typeof delta === "string" && delta.trim().startsWith("-");
  return (
    <div className={`bd-card bd-stat-card ${className}`.trim()}>
      <div className="bd-stat-label">{label}</div>
      <div className="bd-stat-value">{value}</div>
      {delta != null && (
        <div className={`bd-stat-delta ${deltaUp ? "bd-stat-delta-up" : deltaDown ? "bd-stat-delta-down" : ""}`.trim()}>{delta}</div>
      )}
    </div>
  );
}
