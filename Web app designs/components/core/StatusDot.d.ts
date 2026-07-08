export interface StatusDotProps {
  /** on = green glow, warn = amber glow, off = grey. */
  status?: "on" | "off" | "warn";
  /** Optional trailing text label. */
  label?: string;
  className?: string;
}

/**
 * StatusDot — 8px connection/health indicator. Green (on) and amber (warn)
 * glow; grey when off. Optionally pairs with a muted label.
 *
 * @dsCard group="Components"
 */
export function StatusDot(props: StatusDotProps): JSX.Element;
