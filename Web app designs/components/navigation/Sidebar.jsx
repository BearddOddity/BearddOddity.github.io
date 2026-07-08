export function Sidebar({ logo, children, footer, collapsed: collapsedProp, defaultCollapsed = false, onCollapsedChange, collapsible = true, className = "", style }) {
  const [internalCollapsed, setInternalCollapsed] = React.useState(defaultCollapsed);
  const collapsed = collapsedProp != null ? collapsedProp : internalCollapsed;

  const toggle = () => {
    const next = !collapsed;
    if (onCollapsedChange) onCollapsedChange(next);
    if (collapsedProp == null) setInternalCollapsed(next);
  };

  const content = typeof children === "function"
    ? children(collapsed)
    : React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { collapsed }) : child
      );

  return (
    <aside className={`bd-sidebar ${collapsed ? "bd-sidebar-collapsed" : ""} ${className}`.trim()} style={style}>
      {logo != null && !collapsed && <div className="bd-sidebar-logo">{logo}</div>}
      <nav className="bd-sidebar-nav">{content}</nav>
      <div className="bd-sidebar-foot">
        {footer}
        {collapsible && (
          <button className="bd-sidebar-collapse" onClick={toggle} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d={collapsed ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </aside>
  );
}
