import type { ReactNode } from "react";

export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  /** Which edge it slides in from. Default `right`. */
  side?: "left" | "right";
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * Drawer — glass panel that slides in from a screen edge (mobile nav, filter
 * panel, side detail). Same glass material as Modal, full viewport height.
 *
 * @dsCard group="Components"
 */
export function Drawer(props: DrawerProps): JSX.Element | null;
