import type { ReactNode } from "react";

export interface NavItemProps {
  /** Glyph/emoji or node shown in the leading icon tile. */
  icon?: ReactNode;
  label: string;
  active?: boolean;
  /** Optional trailing count/badge. */
  badge?: ReactNode;
  /** Icon-only collapsed sidebar mode. */
  collapsed?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * NavItem — sidebar navigation row. Active state gets the accent-tinted fill,
 * glow and scaled icon tile. Supports an icon-only collapsed mode.
 *
 * @dsCard group="Components"
 */
export function NavItem(props: NavItemProps): JSX.Element;
