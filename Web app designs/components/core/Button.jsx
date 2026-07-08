export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...rest
}) {
  const cls = [
    "bd-btn",
    `bd-btn-${variant}`,
    size === "sm" ? "bd-btn-sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
