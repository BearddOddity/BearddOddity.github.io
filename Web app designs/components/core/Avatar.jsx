export function Avatar({ src, name = "", size = 36, className = "" }) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map((s) => s[0]?.toUpperCase()).join("");
  const style = { width: size, height: size, fontSize: Math.round(size * 0.4) };
  return (
    <span className={`bd-avatar ${className}`.trim()} style={style} title={name}>
      {src ? <img src={src} alt={name} width={size} height={size} style={{ objectFit: "cover" }} /> : initials}
    </span>
  );
}
export function AvatarGroup({ children, className = "" }) {
  return <div className={`bd-avatar-group ${className}`.trim()}>{children}</div>;
}
