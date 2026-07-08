export function RadioGroup({ value, onChange, options = [], name, disabled = false, className = "" }) {
  const groupName = name || React.useId?.() || "bd-radio-group";
  return (
    <div className={className} role="radiogroup">
      {options.map((o) => {
        const opt = typeof o === "string" ? { value: o, label: o } : o;
        const checked = opt.value === value;
        return (
          <label key={opt.value} className="bd-check-row" style={{ marginBottom: 8, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer" }}>
            <span
              className="bd-radio"
              data-checked={checked ? "true" : "false"}
              role="radio"
              aria-checked={checked}
              tabIndex={disabled ? -1 : 0}
              onClick={() => !disabled && onChange && onChange(opt.value)}
            >
              <span className="bd-radio-dot" />
            </span>
            <span>{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}
