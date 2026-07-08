import type { ReactNode } from "react";

export interface TooltipProps {
  label: ReactNode;
  /** The element that triggers the tooltip on hover. */
  children: ReactNode;
  className?: string;
}

/**
 * Tooltip — small dark bubble that appears above its child on hover. Pure
 * CSS (no portal/positioning lib) — fine for icon buttons and short labels.
 *
 * @dsCard group="Components"
 */
export function Tooltip(props: TooltipProps): JSX.Element;
