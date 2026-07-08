import type { ReactNode } from "react";

export interface ToolbarProps {
  children: ReactNode;
  className?: string;
}

/**
 * Toolbar — horizontal glass bar for search + action rows. Accent focus-ring
 * glow when anything inside is focused.
 *
 * @dsCard group="Components"
 */
export function Toolbar(props: ToolbarProps): JSX.Element;
