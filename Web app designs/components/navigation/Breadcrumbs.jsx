export function Breadcrumbs({ items = [], onNavigate, className = "" }) {
  return (
    <div className={`bd-breadcrumbs ${className}`.trim()}>
      {items.map((item, i) => (
        <React.Fragment key={item.label}>
          {i > 0 && <span className="bd-crumb-sep">/</span>}
          {i === items.length - 1 ? (
            <span className="bd-crumb-current">{item.label}</span>
          ) : (
            <span className="bd-crumb" onClick={() => onNavigate && onNavigate(item)}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
