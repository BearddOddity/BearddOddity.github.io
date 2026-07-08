export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  /** Array of strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  disabled?: boolean;
  /** Error message — shows red border + message below the field. */
  error?: string;
  /** Helper text below the field (hidden when `error` is set). */
  help?: string;
  className?: string;
  /** Inline style overrides for the trigger box. */
  style?: object;
  /** Inline style overrides for the open dropdown panel. */
  menuStyle?: object;
}

/**
 * Select — custom glass combobox (not a native <select>, so its open menu can
 * be styled): blurred glass trigger with brand chevron, rounded dark-glass
 * dropdown panel, each option its own soft glass row with hover/selected
 * blend and checkmark. Full keyboard support (Enter/Space/Arrows/Escape) and
 * click-outside-to-close. Reads the system's canonical --glass-* tokens, so
 * it reshapes along with every other glass surface.
 *
 * @dsCard group="Components"
 */
export function Select(props: SelectProps): JSX.Element;
