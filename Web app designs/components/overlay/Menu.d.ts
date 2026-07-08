import type { ReactNode } from "react";

export interface MenuItem {
  label?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
  /** Render a hairline separator instead of a row (ignores other fields). */
  divider?: boolean;
}

export interface MenuProps {
  /** The clickable element that opens the menu (e.g. a "⋯" icon button). */
  trigger: ReactNode;
  items: MenuItem[];
  /** Which edge the panel hangs from under the trigger. Default "start". */
  align?: "start" | "end";
  className?: string;
  menuStyle?: object;
}

/**
 * Menu — glass dropdown action list anchored to a trigger (kebab buttons,
 * row actions, right-click-style menus). Shares the same dark-glass panel
 * material as Select's option list, but for actions rather than a value
 * picker. Full keyboard support (Enter/Space/Arrows/Escape) and
 * click-outside-to-close.
 *
 * @dsCard group="Components"
 */
export function Menu(props: MenuProps): JSX.Element;
