import type { ReactNode } from "react";

export interface HeaderProps {
  /** Wordmark text (no studio logo exists — set in type). */
  logo?: string;
  links?: string[];
  /** Right-aligned slot — typically Button(s). */
  actions?: ReactNode;
  className?: string;
}

/**
 * Header — sticky site nav. Blurred near-black bar, Montserrat wordmark,
 * center-right nav links, action slot on the right (e.g. a CTA Button).
 * Responsive: below 720px, links collapse behind a hamburger that drops a
 * full-width mobile panel.
 *
 * @dsCard group="Components"
 */
export function Header(props: HeaderProps): JSX.Element;
