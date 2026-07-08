export function Input({ label, value, onChange, placeholder, type = "text", disabled = false, error, help, className = "", ...rest }) {
  const input = (
    <input
      type={type}
      className={`bd-input ${error ? "bd-field-error" : ""} ${className}`.trim()}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      aria-invalid={!!error}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      {...rest}
    />
  );
  const msg = error ? <div className="bd-field-error-msg">{error}</div> : help ? <div className="bd-field-help">{help}</div> : null;
  if (!label) return <>{input}{msg}</>;
  return (
    <label style={{ display: "block" }}>
      <span className="bd-label" style={{ display: "block", marginBottom: 6 }}>{label}</span>
      {input}
      {msg}
    </label>
  );
}
