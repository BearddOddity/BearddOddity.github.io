import type { ReactNode } from "react";

export interface SidebarProps {
  /** Wordmark/logo shown above the nav rows; hidden automatically when collapsed. */
  logo?: ReactNode;
  /**
   * NavItem rows (or any content). Pass a render function `(collapsed) => ReactNode`
   * if children need to branch on collapsed state themselves; otherwise plain
   * elements are auto-cloned with a `collapsed` prop (matches NavItem's API).
   */
  children?: ReactNode | ((collapsed: boolean) => ReactNode);
  /** Pinned content above the collapse toggle (e.g. an engine status dot). */
  footer?: ReactNode;
  /** Controlled collapsed state. Omit to let Sidebar manage it internally. */
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Show the built-in collapse toggle. Default true. */
  collapsible?: boolean;
  className?: string;
  style?: object;
}

/**
 * Sidebar — the 240px app nav rail (collapsible to a 68px icon rail) used
 * across StreamerSuite, StatusForge and PanelForge. A glass shell that
 * composes NavItem rows; owns the collapse toggle and width transition so
 * every consumer doesn't hand-roll the same 240px/68px rail.
 *
 * @dsCard group="Components"
 */
export function Sidebar(props: SidebarProps): JSX.Element;
