import type { ReactNode } from "react";

export interface HeroProps {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

/**
 * Hero — marketing page-top section. Uppercase mono kicker, Montserrat
 * display headline, muted description, action row, and a soft accent glow
 * bleeding from the top.
 *
 * @dsCard group="Components"
 */
export function Hero(props: HeroProps): JSX.Element;
