/* @ds-bundle: {"format":4,"namespace":"BearddOddityDesignSystem_726917","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"PricingCard","sourcePath":"components/core/PricingCard.jsx"},{"name":"SectionHead","sourcePath":"components/core/SectionHead.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"StatusDot","sourcePath":"components/core/StatusDot.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/disclosure/Tabs.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastManager","sourcePath":"components/feedback/ToastManager.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FieldSection","sourcePath":"components/forms/FieldSection.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"RangeSlider","sourcePath":"components/forms/RangeSlider.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Container","sourcePath":"components/layout/Container.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"Header","sourcePath":"components/layout/Header.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"CoverImage","sourcePath":"components/media/CoverImage.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"},{"name":"Toolbar","sourcePath":"components/navigation/Toolbar.jsx"},{"name":"Drawer","sourcePath":"components/overlay/Drawer.jsx"},{"name":"Menu","sourcePath":"components/overlay/Menu.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"f16a8f11896d","components/core/Badge.jsx":"3f6ec7932908","components/core/Button.jsx":"20e9e60a60d4","components/core/Card.jsx":"d3d6457f3c9d","components/core/Chip.jsx":"42125c3118a8","components/core/Divider.jsx":"37e28705a7d3","components/core/PricingCard.jsx":"39f9b6b2731c","components/core/SectionHead.jsx":"ffde6dc841a4","components/core/StatCard.jsx":"c7257ab15b66","components/core/StatusDot.jsx":"339e1753f351","components/data/Table.jsx":"9fdd14d4d7f7","components/disclosure/Accordion.jsx":"3603dcf5234d","components/disclosure/Tabs.jsx":"9b327ba0a5f3","components/feedback/Alert.jsx":"b3fe473babb8","components/feedback/EmptyState.jsx":"ee829ac2cb9c","components/feedback/ProgressBar.jsx":"138898f42d00","components/feedback/Skeleton.jsx":"e5f6e3ff84e5","components/feedback/Toast.jsx":"18963c2f10ca","components/feedback/ToastManager.jsx":"1f7bc9af5c47","components/forms/Checkbox.jsx":"23af13cbdb18","components/forms/FieldSection.jsx":"0c12d8fd1136","components/forms/Input.jsx":"c41c1a48076f","components/forms/RadioGroup.jsx":"2aa72a4ff542","components/forms/RangeSlider.jsx":"d2e6ca073eb7","components/forms/Select.jsx":"d2c85892e95e","components/forms/Switch.jsx":"d6fc6ab1fe1b","components/layout/Container.jsx":"9e12bb1be68c","components/layout/Footer.jsx":"9d053ad42c84","components/layout/Header.jsx":"30723b442bbb","components/layout/Hero.jsx":"f7b9ec55d4ac","components/media/CoverImage.jsx":"33ea8da8c049","components/navigation/Breadcrumbs.jsx":"52754b1dd172","components/navigation/NavItem.jsx":"77d90fe2afb0","components/navigation/Pagination.jsx":"a37c1beef614","components/navigation/Sidebar.jsx":"38b626c23569","components/navigation/Toolbar.jsx":"154f47801c30","components/overlay/Drawer.jsx":"c88ee5da5ece","components/overlay/Menu.jsx":"7b6d16da5e4c","components/overlay/Modal.jsx":"49c26875ed75","components/overlay/Tooltip.jsx":"8de69838776a","github-pages/assets/nav.js":"d4563451f1e9"},"inlinedExternals":[],"unexposedExports":[{"name":"bdToast","sourcePath":"components/feedback/ToastManager.jsx"}]} */

(() => {

const __ds_ns = (window.BearddOddityDesignSystem_726917 = window.BearddOddityDesignSystem_726917 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  src,
  name = "",
  size = 36,
  className = ""
}) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map(s => s[0]?.toUpperCase()).join("");
  const style = {
    width: size,
    height: size,
    fontSize: Math.round(size * 0.4)
  };
  return /*#__PURE__*/React.createElement("span", {
    className: `bd-avatar ${className}`.trim(),
    style: style,
    title: name
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    width: size,
    height: size,
    style: {
      objectFit: "cover"
    }
  }) : initials);
}
function AvatarGroup({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-avatar-group ${className}`.trim()
  }, children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = "ghost",
  dot = false,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `bd-badge bd-badge-${variant} ${className}`.trim()
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: `bd-dot bd-dot-on`,
    style: {
      width: 6,
      height: 6
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...rest
}) {
  const cls = ["bd-btn", `bd-btn-${variant}`, size === "sm" ? "bd-btn-sm" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled,
    onClick: onClick
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  className = "",
  padding = 20,
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `bd-card ${className}`.trim(),
    style: {
      padding
    },
    onClick: onClick
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function Chip({
  children,
  selected = false,
  icon,
  removable = false,
  onRemove,
  disabled = false,
  onClick,
  className = ""
}) {
  const interactive = !!onClick;
  const Tag = interactive ? "button" : "span";
  return /*#__PURE__*/React.createElement(Tag, {
    className: `bd-chip ${selected ? "bd-chip-selected" : ""} ${className}`.trim(),
    onClick: disabled ? undefined : onClick,
    disabled: interactive ? disabled : undefined,
    "aria-pressed": interactive ? selected : undefined
  }, icon != null && /*#__PURE__*/React.createElement("span", {
    className: "bd-chip-icon"
  }, icon), /*#__PURE__*/React.createElement("span", null, children), removable && /*#__PURE__*/React.createElement("span", {
    className: "bd-chip-remove",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  vertical = false,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `${vertical ? "bd-divider-v" : "bd-divider"} ${className}`.trim(),
    style: style
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/PricingCard.jsx
try { (() => {
function PricingCard({
  name,
  price,
  period = "/mo",
  features = [],
  action,
  highlight = false,
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-card bd-pricing-card ${highlight ? "bd-pricing-highlight" : ""} ${className}`.trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-pricing-name"
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "bd-pricing-amount"
  }, price, /*#__PURE__*/React.createElement("span", null, period)), /*#__PURE__*/React.createElement("ul", {
    className: "bd-pricing-list"
  }, features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f
  }, f))), action, children);
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHead.jsx
try { (() => {
function SectionHead({
  icon,
  title,
  desc,
  right,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    },
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-section-head"
  }, icon != null && /*#__PURE__*/React.createElement("span", {
    className: "bd-section-icon"
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-section-title"
  }, title), desc && /*#__PURE__*/React.createElement("div", {
    className: "bd-section-desc"
  }, desc))), right);
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  delta,
  className = ""
}) {
  const deltaUp = typeof delta === "string" && delta.trim().startsWith("+");
  const deltaDown = typeof delta === "string" && delta.trim().startsWith("-");
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-card bd-stat-card ${className}`.trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-stat-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "bd-stat-value"
  }, value), delta != null && /*#__PURE__*/React.createElement("div", {
    className: `bd-stat-delta ${deltaUp ? "bd-stat-delta-up" : deltaDown ? "bd-stat-delta-down" : ""}`.trim()
  }, delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusDot.jsx
try { (() => {
function StatusDot({
  status = "off",
  label,
  className = ""
}) {
  const dot = /*#__PURE__*/React.createElement("span", {
    className: `bd-dot bd-dot-${status}`
  });
  if (!label) return /*#__PURE__*/React.createElement("span", {
    className: className
  }, dot);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, dot, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = [],
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-table-wrap ${className}`.trim()
  }, /*#__PURE__*/React.createElement("table", {
    className: "bd-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.id ?? i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key
  }, c.render ? c.render(row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen,
  className = ""
}) {
  const [open, setOpen] = React.useState(defaultOpen ?? items[0]?.title);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, items.map(item => {
    const isOpen = open === item.title;
    return /*#__PURE__*/React.createElement("div", {
      className: "bd-accordion-item",
      "data-open": isOpen,
      key: item.title
    }, /*#__PURE__*/React.createElement("button", {
      className: "bd-accordion-trigger",
      onClick: () => setOpen(isOpen ? null : item.title)
    }, /*#__PURE__*/React.createElement("span", null, item.title), /*#__PURE__*/React.createElement("svg", {
      className: "bd-accordion-chevron",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9l6 6 6-6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "bd-accordion-panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-accordion-panel-inner"
    }, item.content)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-tabs-list ${className}`.trim(),
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    "aria-selected": t.value === value,
    className: `bd-tab ${t.value === value ? "bd-tab-active" : ""}`.trim(),
    onClick: () => onChange && onChange(t.value)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  variant = "info",
  title,
  children,
  onClose,
  className = ""
}) {
  const icon = {
    info: "ℹ️",
    success: "✓",
    warn: "⚠️",
    error: "✕"
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-alert bd-alert-${variant} ${className}`.trim(),
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd-alert-icon"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "bd-alert-body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "bd-alert-title"
  }, title), /*#__PURE__*/React.createElement("div", null, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "bd-alert-close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, "\u2715"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = "📭",
  title,
  description,
  action,
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-empty ${className}`.trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-empty-icon"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "bd-empty-title"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "bd-empty-desc"
  }, description), action, children);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100,
  className = ""
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-progress-track ${className}`.trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-progress-fill",
    style: {
      width: `${pct}%`
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  width = "100%",
  height = 16,
  radius,
  circle = false,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-skeleton ${className}`.trim(),
    style: {
      width,
      height,
      borderRadius: circle ? "50%" : radius
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  variant = "info",
  icon,
  className = ""
}) {
  const defaultIcon = {
    success: "✓",
    error: "✕",
    info: "ⓘ"
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-toast bd-toast-${variant} ${className}`.trim(),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, icon ?? defaultIcon), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ToastManager.jsx
try { (() => {
let _bdToastId = 0;
const _bdToastListeners = new Set();
let _bdToastState = [];
function _bdEmit() {
  for (const fn of _bdToastListeners) fn(_bdToastState);
}

/** Imperative API — call from anywhere: bdToast.push("Overlay connected", "success") */
const bdToast = {
  push(message, variant = "info", duration = 3200) {
    const id = ++_bdToastId;
    _bdToastState = [..._bdToastState, {
      id,
      message,
      variant
    }];
    _bdEmit();
    if (duration) {
      setTimeout(() => {
        _bdToastState = _bdToastState.filter(t => t.id !== id);
        _bdEmit();
      }, duration);
    }
    return id;
  },
  dismiss(id) {
    _bdToastState = _bdToastState.filter(t => t.id !== id);
    _bdEmit();
  }
};

/** Mount once near the root. Renders whatever bdToast.push() queues, stacked bottom-right. */
function ToastManager({
  className = ""
}) {
  const [toasts, setToasts] = React.useState(_bdToastState);
  React.useEffect(() => {
    _bdToastListeners.add(setToasts);
    return () => _bdToastListeners.delete(setToasts);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-toast-stack ${className}`.trim()
  }, toasts.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: `bd-toast bd-toast-${t.variant}`,
    onClick: () => bdToast.dismiss(t.id),
    style: {
      cursor: "pointer"
    }
  }, t.message)));
}
Object.assign(__ds_scope, { bdToast, ToastManager });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ToastManager.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `bd-check-row ${className}`.trim(),
    style: {
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd-checkbox",
    "data-checked": checked ? "true" : "false",
    role: "checkbox",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onKeyDown: e => {
      if (!disabled && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        onChange && onChange(!checked);
      }
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label != null && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FieldSection.jsx
try { (() => {
const {
  useState
} = React;
function FieldSection({
  title,
  icon,
  children,
  defaultOpen = false
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid",
      borderColor: open ? "var(--bd-panel-border-strong, var(--line-strong))" : "var(--bd-panel-border, var(--line-1))",
      background: open ? "var(--bd-panel-bg-strong, rgba(0,0,0,0.45))" : "var(--bd-panel-bg, rgba(0,0,0,0.2))",
      backdropFilter: "var(--glass-blur, none)",
      WebkitBackdropFilter: "var(--glass-blur, none)",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      transition: "all 0.3s ease",
      boxShadow: open ? "var(--shadow-2)" : "none"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--bd-panel-pad, 16px)",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      minWidth: 0
    }
  }, icon != null && /*#__PURE__*/React.createElement("span", {
    className: "bd-section-icon",
    style: {
      width: 32,
      height: 32
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--bd-field-fs, var(--fs-xs))",
      fontWeight: 600,
      color: "var(--text-strong)",
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }
  }, title)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(255,255,255,0.03)",
      color: "var(--text-faint)",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform 0.3s ease"
    }
  }, "\u25BE")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--bd-panel-pad, 20px)",
      borderTop: "1px solid var(--line-1)"
    }
  }, children));
}
Object.assign(__ds_scope, { FieldSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FieldSection.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  error,
  help,
  className = "",
  ...rest
}) {
  const input = /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    className: `bd-input ${error ? "bd-field-error" : ""} ${className}`.trim(),
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    "aria-invalid": !!error,
    onChange: onChange ? e => onChange(e.target.value) : undefined
  }, rest));
  const msg = error ? /*#__PURE__*/React.createElement("div", {
    className: "bd-field-error-msg"
  }, error) : help ? /*#__PURE__*/React.createElement("div", {
    className: "bd-field-help"
  }, help) : null;
  if (!label) return /*#__PURE__*/React.createElement(React.Fragment, null, input, msg);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd-label",
    style: {
      display: "block",
      marginBottom: 6
    }
  }, label), input, msg);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  value,
  onChange,
  options = [],
  name,
  disabled = false,
  className = ""
}) {
  const groupName = name || React.useId?.() || "bd-radio-group";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "radiogroup"
  }, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const checked = opt.value === value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      className: "bd-check-row",
      style: {
        marginBottom: 8,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "bd-radio",
      "data-checked": checked ? "true" : "false",
      role: "radio",
      "aria-checked": checked,
      tabIndex: disabled ? -1 : 0,
      onClick: () => !disabled && onChange && onChange(opt.value)
    }, /*#__PURE__*/React.createElement("span", {
      className: "bd-radio-dot"
    })), /*#__PURE__*/React.createElement("span", null, opt.label));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/RangeSlider.jsx
try { (() => {
function RangeSlider({
  label,
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  showValue = true,
  className = ""
}) {
  const input = /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: `bd-range ${className}`.trim(),
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: onChange ? e => onChange(Number(e.target.value)) : undefined
  });
  if (!label && !showValue) return input;
  return /*#__PURE__*/React.createElement("div", null, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "bd-label"
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-xs)",
      color: "var(--bd-accent-text)",
      fontWeight: 600
    }
  }, value)), input);
}
Object.assign(__ds_scope, { RangeSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RangeSlider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false,
  error,
  help,
  className = "",
  style,
  menuStyle
}) {
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const [open, setOpen] = React.useState(false);
  const [focusedIndex, setFocusedIndex] = React.useState(-1);
  const wrapRef = React.useRef(null);
  React.useEffect(() => {
    const onDocMouseDown = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);
  const selected = opts.find(o => o.value === value);
  const selectedIdx = opts.findIndex(o => o.value === value);
  const commit = idx => {
    const o = opts[idx];
    if (o && onChange) onChange(o.value);
    setOpen(false);
  };
  const onKeyDown = e => {
    if (disabled) return;
    if (!open) {
      if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        setOpen(true);
        setFocusedIndex(selectedIdx >= 0 ? selectedIdx : 0);
      }
      return;
    }
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex(i => Math.min(opts.length - 1, i < 0 ? 0 : i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex(i => Math.max(0, i < 0 ? 0 : i - 1));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedIndex >= 0) commit(focusedIndex);
        break;
      default:
        break;
    }
  };
  const trigger = /*#__PURE__*/React.createElement("div", {
    className: `glass-select ${error ? "bd-field-error" : ""} ${className}`.trim(),
    style: {
      ...style,
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer"
    },
    role: "combobox",
    "aria-expanded": open,
    "aria-haspopup": "listbox",
    "aria-disabled": disabled,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && setOpen(o => !o),
    onKeyDown: onKeyDown
  }, /*#__PURE__*/React.createElement("span", {
    className: selected ? "" : "glass-select-placeholder"
  }, selected ? selected.label : "Select…"), /*#__PURE__*/React.createElement("svg", {
    className: "glass-select-chevron",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "rgba(255,255,255,0.7)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  const menu = /*#__PURE__*/React.createElement("ul", {
    className: open ? "glass-menu open" : "glass-menu",
    role: "listbox",
    style: menuStyle
  }, opts.map((o, i) => /*#__PURE__*/React.createElement("li", {
    key: o.value,
    role: "option",
    "aria-selected": o.value === value,
    className: `glass-option${i === focusedIndex ? " focused" : ""}${o.value === value ? " selected" : ""}`,
    onMouseDown: e => {
      e.preventDefault();
      e.stopPropagation();
      commit(i);
    },
    onMouseEnter: () => setFocusedIndex(i)
  }, /*#__PURE__*/React.createElement("span", null, o.label), o.value === value && /*#__PURE__*/React.createElement("span", {
    className: "glass-option-check"
  }, "\u2713"))));
  const wrapped = /*#__PURE__*/React.createElement("div", {
    className: "glass-select-wrapper",
    ref: wrapRef
  }, trigger, menu);
  const msg = error ? /*#__PURE__*/React.createElement("div", {
    className: "bd-field-error-msg"
  }, error) : help ? /*#__PURE__*/React.createElement("div", {
    className: "bd-field-help"
  }, help) : null;
  if (!label) return /*#__PURE__*/React.createElement(React.Fragment, null, wrapped, msg);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd-label",
    style: {
      display: "block",
      marginBottom: 6
    }
  }, label), wrapped, msg);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled = false,
  className = ""
}) {
  const control = /*#__PURE__*/React.createElement("span", {
    className: "bd-switch",
    "data-checked": checked ? "true" : "false",
    role: "switch",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onKeyDown: e => {
      if (!disabled && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        onChange && onChange(!checked);
      }
    },
    style: {
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "bd-switch-thumb"
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    className: `bd-check-row ${className}`.trim(),
    style: {
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), control);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Container.jsx
try { (() => {
function Container({
  children,
  className = "",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-container ${className}`.trim(),
    style: style
  }, children);
}
Object.assign(__ds_scope, { Container });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Container.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
function Footer({
  columns = [],
  bottomLeft,
  bottomRight,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: `bd-footer ${className}`.trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-footer-grid"
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    className: "bd-footer-col",
    key: col.title
  }, /*#__PURE__*/React.createElement("h4", null, col.title), (col.links || []).map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "bd-footer-link"
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "bd-footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, bottomLeft), /*#__PURE__*/React.createElement("span", null, bottomRight))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/Header.jsx
try { (() => {
function Header({
  logo = "beardd//oddity",
  links = [],
  actions,
  className = ""
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: `bd-header ${className}`.trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-container bd-header-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-logo"
  }, logo), /*#__PURE__*/React.createElement("nav", {
    className: "bd-header-links"
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "bd-header-link"
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "bd-header-actions"
  }, actions, /*#__PURE__*/React.createElement("button", {
    className: "bd-header-burger",
    "aria-label": "Menu",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none"
  }, open ? /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))))), open && /*#__PURE__*/React.createElement("div", {
    className: "bd-header-mobile-panel"
  }, links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    className: "bd-header-link",
    onClick: () => setOpen(false)
  }, l))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Header.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
function Hero({
  kicker,
  title,
  description,
  actions,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: `bd-hero ${className}`.trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "bd-hero-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bd-container"
  }, kicker && /*#__PURE__*/React.createElement("div", {
    className: "bd-hero-kicker"
  }, kicker), /*#__PURE__*/React.createElement("h1", null, title), description && /*#__PURE__*/React.createElement("p", null, description), actions && /*#__PURE__*/React.createElement("div", {
    className: "bd-hero-actions"
  }, actions)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/media/CoverImage.jsx
try { (() => {
function CoverImage({
  src,
  alt = "",
  title,
  badge,
  width = 160,
  breathe = false,
  rounded = 16,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: "relative",
      width,
      aspectRatio: "2 / 3",
      borderRadius: rounded,
      overflow: "hidden",
      background: "rgba(0,0,0,0.25)",
      border: "1px solid var(--line-1)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      animation: breathe ? "bd-cover-breathe 8s ease-in-out infinite" : undefined
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 12,
      textAlign: "center",
      background: "linear-gradient(135deg, #1a1a2e, #16213e)",
      color: "var(--text-muted)",
      fontSize: "var(--fs-xs)",
      fontWeight: 600,
      lineHeight: 1.25
    }
  }, alt || title), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      left: 6
    },
    className: "bd-badge bd-badge-ghost"
  }, badge), title != null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      height: "50%",
      background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      padding: "6px 8px",
      fontSize: "var(--fs-xs)",
      fontWeight: 600,
      color: "#fff",
      lineHeight: 1.2
    }
  }, title)));
}
Object.assign(__ds_scope, { CoverImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/CoverImage.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  onNavigate,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-breadcrumbs ${className}`.trim()
  }, items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: item.label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    className: "bd-crumb-sep"
  }, "/"), i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "bd-crumb-current"
  }, item.label) : /*#__PURE__*/React.createElement("span", {
    className: "bd-crumb",
    onClick: () => onNavigate && onNavigate(item)
  }, item.label))));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function NavItem({
  icon,
  label,
  active = false,
  badge,
  collapsed = false,
  onClick,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `bd-nav ${active ? "bd-nav-active" : ""} ${className}`.trim(),
    onClick: onClick,
    style: collapsed ? {
      justifyContent: "center",
      padding: "10px 0",
      gap: 0
    } : undefined,
    title: collapsed ? label : undefined
  }, icon != null && /*#__PURE__*/React.createElement("span", {
    className: "bd-nav-icon"
  }, icon), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }
  }, label), !collapsed && badge != null && /*#__PURE__*/React.createElement("span", {
    className: "bd-badge bd-badge-ghost"
  }, badge));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  className = ""
}) {
  const pages = [];
  const push = p => pages.push(p);
  push(1);
  if (page > 3) push("…");
  for (let p = Math.max(2, page - 1); p <= Math.min(pageCount - 1, page + 1); p++) push(p);
  if (page < pageCount - 2) push("…");
  if (pageCount > 1) push(pageCount);
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-pagination ${className}`.trim()
  }, /*#__PURE__*/React.createElement("button", {
    className: "bd-page-btn",
    disabled: page <= 1,
    onClick: () => onChange && onChange(page - 1),
    "aria-label": "Previous page"
  }, "\u2039"), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    className: "bd-page-ellipsis",
    key: `e${i}`
  }, "\xB7\xB7\xB7") : /*#__PURE__*/React.createElement("button", {
    key: p,
    className: `bd-page-btn ${p === page ? "bd-page-btn-active" : ""}`.trim(),
    onClick: () => onChange && onChange(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    className: "bd-page-btn",
    disabled: page >= pageCount,
    onClick: () => onChange && onChange(page + 1),
    "aria-label": "Next page"
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
function Sidebar({
  logo,
  children,
  footer,
  collapsed: collapsedProp,
  defaultCollapsed = false,
  onCollapsedChange,
  collapsible = true,
  className = "",
  style
}) {
  const [internalCollapsed, setInternalCollapsed] = React.useState(defaultCollapsed);
  const collapsed = collapsedProp != null ? collapsedProp : internalCollapsed;
  const toggle = () => {
    const next = !collapsed;
    if (onCollapsedChange) onCollapsedChange(next);
    if (collapsedProp == null) setInternalCollapsed(next);
  };
  const content = typeof children === "function" ? children(collapsed) : React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, {
    collapsed
  }) : child);
  return /*#__PURE__*/React.createElement("aside", {
    className: `bd-sidebar ${collapsed ? "bd-sidebar-collapsed" : ""} ${className}`.trim(),
    style: style
  }, logo != null && !collapsed && /*#__PURE__*/React.createElement("div", {
    className: "bd-sidebar-logo"
  }, logo), /*#__PURE__*/React.createElement("nav", {
    className: "bd-sidebar-nav"
  }, content), /*#__PURE__*/React.createElement("div", {
    className: "bd-sidebar-foot"
  }, footer, collapsible && /*#__PURE__*/React.createElement("button", {
    className: "bd-sidebar-collapse",
    onClick: toggle,
    "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: collapsed ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Toolbar.jsx
try { (() => {
function Toolbar({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-toolbar ${className}`.trim()
  }, children);
}
Object.assign(__ds_scope, { Toolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Toolbar.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Drawer.jsx
try { (() => {
function Drawer({
  open,
  onClose,
  side = "right",
  title,
  children,
  className = ""
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "bd-drawer-backdrop",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `bd-drawer ${side === "left" ? "bd-drawer-left" : ""} ${className}`.trim(),
    role: "dialog",
    "aria-modal": "true"
  }, title != null && /*#__PURE__*/React.createElement("div", {
    className: "bd-drawer-header"
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("button", {
    className: "bd-modal-close",
    "aria-label": "Close",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "bd-drawer-body"
  }, children)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Menu.jsx
try { (() => {
function Menu({
  trigger,
  items = [],
  align = "start",
  className = "",
  menuStyle
}) {
  const [open, setOpen] = React.useState(false);
  const [focusedIndex, setFocusedIndex] = React.useState(-1);
  const wrapRef = React.useRef(null);
  React.useEffect(() => {
    const onDocMouseDown = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);
  const selectable = items.map((it, i) => ({
    ...it,
    i
  })).filter(it => !it.divider && !it.disabled);
  const commit = item => {
    if (!item || item.disabled || item.divider) return;
    if (item.onClick) item.onClick();
    setOpen(false);
  };
  const onKeyDown = e => {
    if (!open) {
      if (["Enter", " ", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        setOpen(true);
        setFocusedIndex(selectable[0] ? selectable[0].i : -1);
      }
      return;
    }
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "ArrowDown":
        {
          e.preventDefault();
          const next = selectable.find(it => it.i > focusedIndex);
          setFocusedIndex(next ? next.i : selectable[0] ? selectable[0].i : -1);
          break;
        }
      case "ArrowUp":
        {
          e.preventDefault();
          const prevItems = selectable.filter(it => it.i < focusedIndex);
          const prev = prevItems[prevItems.length - 1];
          setFocusedIndex(prev ? prev.i : selectable[selectable.length - 1] ? selectable[selectable.length - 1].i : -1);
          break;
        }
      case "Enter":
      case " ":
        e.preventDefault();
        commit(items[focusedIndex]);
        break;
      default:
        break;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `bd-menu-wrap ${className}`.trim(),
    ref: wrapRef,
    onKeyDown: onKeyDown
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o)
  }, trigger), /*#__PURE__*/React.createElement("ul", {
    className: `glass-menu bd-menu-list bd-menu-${align} ${open ? "open" : ""}`,
    role: "menu",
    style: menuStyle
  }, items.map((it, i) => it.divider ? /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "bd-menu-divider",
    role: "separator"
  }) : /*#__PURE__*/React.createElement("li", {
    key: i,
    role: "menuitem",
    "aria-disabled": it.disabled,
    className: `glass-option bd-menu-item ${i === focusedIndex ? "focused" : ""} ${it.danger ? "bd-menu-item-danger" : ""}`,
    style: it.disabled ? {
      opacity: 0.4,
      cursor: "not-allowed"
    } : undefined,
    onMouseDown: e => {
      e.preventDefault();
      e.stopPropagation();
      commit(it);
    },
    onMouseEnter: () => !it.disabled && setFocusedIndex(i)
  }, it.icon != null && /*#__PURE__*/React.createElement("span", {
    className: "bd-menu-item-icon"
  }, it.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label)))));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  className = ""
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "bd-modal-backdrop",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `bd-modal ${className}`.trim(),
    role: "dialog",
    "aria-modal": "true"
  }, title != null && /*#__PURE__*/React.createElement("div", {
    className: "bd-modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("button", {
    className: "bd-modal-close",
    "aria-label": "Close",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "bd-modal-body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "bd-modal-footer"
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `bd-tooltip-wrap ${className}`.trim()
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "bd-tooltip",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// github-pages/assets/nav.js
try { (() => {
// Mobile nav toggle for The Oddity Forge site — shared across pages.
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".bd-header-burger");
  const panel = document.querySelector(".bd-header-mobile-panel");
  if (!burger || !panel) return;
  burger.addEventListener("click", () => {
    const open = panel.style.display === "flex";
    panel.style.display = open ? "none" : "flex";
    burger.setAttribute("aria-expanded", String(!open));
  });
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "github-pages/assets/nav.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastManager = __ds_scope.ToastManager;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FieldSection = __ds_scope.FieldSection;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.RangeSlider = __ds_scope.RangeSlider;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Container = __ds_scope.Container;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.CoverImage = __ds_scope.CoverImage;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Toolbar = __ds_scope.Toolbar;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
