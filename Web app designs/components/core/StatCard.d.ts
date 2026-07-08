import type { ReactNode } from "react";

export interface StatCardProps {
  label: string;
  value: ReactNode;
  /** Trend string, e.g. "+12%" or "-3 today" — colors green/red by leading sign. */
  delta?: string;
  className?: string;
}

/**
 * StatCard — glass metric tile: uppercase mono label, large display value,
 * optional colored delta line. Use in stat-grid rows on dashboards.
 *
 * @dsCard group="Components"
 */
export function StatCard(props: StatCardProps): JSX.Element;
