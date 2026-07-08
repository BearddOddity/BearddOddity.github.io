export function Tabs({ tabs = [], value, onChange, className = "" }) {
  return (
    <div className={`bd-tabs-list ${className}`.trim()} role="tablist">
      {tabs.map((t) => (
        <button
          key={t.value}
          role="tab"
          aria-selected={t.value === value}
          className={`bd-tab ${t.value === value ? "bd-tab-active" : ""}`.trim()}
          onClick={() => onChange && onChange(t.value)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
