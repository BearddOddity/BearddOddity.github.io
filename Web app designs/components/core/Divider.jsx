export function Divider({ vertical = false, className = "", style = {} }) {
  return <div className={`${vertical ? "bd-divider-v" : "bd-divider"} ${className}`.trim()} style={style} />;
}
