import type { ReactNode } from "react";

export interface ChipProps {
  children: ReactNode;
  /** Toggled/on state — accent-tinted fill instead of the ghost outline. */
  selected?: boolean;
  /** Leading glyph (emoji or small inline SVG). */
  icon?: ReactNode;
  /** Show a trailing × to remove/clear the chip. */
  removable?: boolean;
  onRemove?: () => void;
  disabled?: boolean;
  /** Pass to make the chip an interactive toggle (renders a <button>); omit for a static tag. */
  onClick?: () => void;
  className?: string;
}

/**
 * Chip — small pill for filters, tags and removable selections. Ghost outline
 * by default; `selected` swaps to the accent-tinted fill used across filter
 * rows (genre pickers, active-facet chips). Distinct from Badge, which is for
 * fixed status/metadata rather than toggleable or removable filters.
 *
 * @dsCard group="Components"
 */
export function Chip(props: ChipProps): JSX.Element;
