export function Card({ children, className = "", padding = 20, onClick, ...rest }) {
  return (
    <div
      className={`bd-card ${className}`.trim()}
      style={{ padding }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
}
