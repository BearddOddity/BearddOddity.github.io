export function ProgressBar({ value = 0, max = 100, className = "" }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={`bd-progress-track ${className}`.trim()}>
      <div className="bd-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
