import type { ReactNode } from "react";

export interface FieldSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

/**
 * FieldSection — collapsible settings/metadata group. Closed = recessed glass;
 * open = elevated with a divider above the body. Header is an uppercase title
 * with an icon tile and a rotating chevron.
 *
 * @dsCard group="Components"
 */
export function FieldSection(props: FieldSectionProps): JSX.Element;
