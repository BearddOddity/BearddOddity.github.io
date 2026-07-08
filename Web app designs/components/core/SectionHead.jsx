export function SectionHead({ icon, title, desc, right, className = "" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }} className={className}>
      <div className="bd-section-head">
        {icon != null && <span className="bd-section-icon">{icon}</span>}
        <div style={{ minWidth: 0 }}>
          <div className="bd-section-title">{title}</div>
          {desc && <div className="bd-section-desc">{desc}</div>}
        </div>
      </div>
      {right}
    </div>
  );
}
