import type { ReactNode } from "react";

export interface TableColumn {
  key: string;
  label: string;
  render?: (row: any) => ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  rows: Record<string, any>[];
  className?: string;
}

/**
 * Table — glass-bordered data table. Mono uppercase column heads, hairline
 * row dividers, subtle hover highlight. `render` on a column lets you drop
 * in a Badge/StatusDot/Avatar per cell.
 *
 * @dsCard group="Components"
 */
export function Table(props: TableProps): JSX.Element;
