import type { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  /** Semantic color. */
  variant?: "ghost" | "purple" | "green" | "red" | "amber" | "cyan";
  /** Show a leading status dot. */
  dot?: boolean;
  className?: string;
}

/**
 * Badge — small pill label for status/metadata (uppercase-friendly, wide
 * tracking). Six semantic tints matched to the brand palette.
 *
 * @dsCard group="Components"
 */
export function Badge(props: BadgeProps): JSX.Element;
