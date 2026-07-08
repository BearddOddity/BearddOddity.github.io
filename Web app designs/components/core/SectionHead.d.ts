import type { ReactNode } from "react";

export interface SectionHeadProps {
  /** Leading glyph/emoji or node shown in the icon tile. */
  icon?: ReactNode;
  title: string;
  /** Muted one-line description under the title. */
  desc?: string;
  /** Optional trailing content (buttons, badges) right-aligned. */
  right?: ReactNode;
  className?: string;
}

/**
 * SectionHead — the icon-tile + title + description row that heads every panel
 * and settings block across the apps.
 *
 * @dsCard group="Components"
 */
export function SectionHead(props: SectionHeadProps): JSX.Element;
