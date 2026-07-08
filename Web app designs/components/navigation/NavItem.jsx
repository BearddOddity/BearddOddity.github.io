export function NavItem({ icon, label, active = false, badge, collapsed = false, onClick, className = "" }) {
  return (
    <button
      className={`bd-nav ${active ? "bd-nav-active" : ""} ${className}`.trim()}
      onClick={onClick}
      style={collapsed ? { justifyContent: "center", padding: "10px 0", gap: 0 } : undefined}
      title={collapsed ? label : undefined}
    >
      {icon != null && <span className="bd-nav-icon">{icon}</span>}
      {!collapsed && <span style={{ flex: 1, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{label}</span>}
      {!collapsed && badge != null && <span className="bd-badge bd-badge-ghost">{badge}</span>}
    </button>
  );
}
