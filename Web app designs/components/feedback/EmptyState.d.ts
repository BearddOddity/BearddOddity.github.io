import type { ReactNode } from "react";

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  /** Action slot — typically a Button. */
  action?: ReactNode;
  className?: string;
}

/**
 * EmptyState — centered icon + message + optional action for empty
 * lists/tables/search results. Keep the gentle brand tone (e.g. "No channels
 * yet. Click + Add to connect.").
 *
 * @dsCard group="Components"
 */
export function EmptyState(props: EmptyStateProps): JSX.Element;
