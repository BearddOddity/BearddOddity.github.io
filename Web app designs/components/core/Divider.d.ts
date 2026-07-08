import type { CSSProperties } from "react";

export interface DividerProps {
  /** Vertical 1px rule that stretches to its flex parent. */
  vertical?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * Divider — hairline rule (white 6% alpha). Horizontal by default; `vertical`
 * for inline separators.
 *
 * @dsCard group="Components"
 */
export function Divider(props: DividerProps): JSX.Element;
