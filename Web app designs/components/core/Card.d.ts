import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  /** Inner padding in px. Default 20. */
  padding?: number;
  className?: string;
  onClick?: () => void;
}

/**
 * Card — the glassmorphism surface shell (blurred black-alpha fill, hairline
 * border, layered shadow, white top-inset highlight). Lifts border + shadow on
 * hover.
 *
 * @dsCard group="Components"
 */
export function Card(props: CardProps): JSX.Element;
