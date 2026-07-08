export function Skeleton({ width = "100%", height = 16, radius, circle = false, className = "" }) {
  return (
    <div
      className={`bd-skeleton ${className}`.trim()}
      style={{ width, height, borderRadius: circle ? "50%" : radius }}
    />
  );
}
