import type { ReactNode, CSSProperties } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Container — centers content and caps line length (1180px) with 32px side
 * gutters. Wrap page sections in it; Header/Footer manage their own full-bleed
 * background and put a Container inside.
 *
 * @dsCard group="Components"
 */
export function Container(props: ContainerProps): JSX.Element;
