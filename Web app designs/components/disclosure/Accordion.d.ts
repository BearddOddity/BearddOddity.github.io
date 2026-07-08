import type { ReactNode } from "react";

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Title of the item open by default. Defaults to the first item. */
  defaultOpen?: string;
  className?: string;
}

/**
 * Accordion — single-open collapsible list (FAQ, settings groups). Chevron
 * rotates and tints accent on open; panel height-animates.
 *
 * @dsCard group="Components"
 */
export function Accordion(props: AccordionProps): JSX.Element;
