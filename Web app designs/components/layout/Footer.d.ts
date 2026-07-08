import type { ReactNode } from "react";

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface FooterProps {
  columns?: FooterColumn[];
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
  className?: string;
}

/**
 * Footer — multi-column site footer with a hairline-divided bottom bar
 * (copyright / legal links).
 *
 * @dsCard group="Components"
 */
export function Footer(props: FooterProps): JSX.Element;
