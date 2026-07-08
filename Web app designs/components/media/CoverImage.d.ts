import type { ReactNode } from "react";

export interface CoverImageProps {
  /** Image URL. When empty, renders the gradient fallback with the alt text. */
  src?: string;
  alt?: string;
  /** Title plate rendered over a bottom gradient scrim. */
  title?: string;
  /** Optional top-left badge (genre, platform). */
  badge?: ReactNode;
  /** Fixed width in px (2:3 poster ratio). Default 160. */
  width?: number;
  /** Slow "breathe" zoom loop on the artwork. */
  breathe?: boolean;
  /** Corner radius in px. Default 16. */
  rounded?: number;
  className?: string;
}

/**
 * CoverImage — 2:3 poster/cover tile used for game covers (StatusForge) and
 * comic covers (PanelForge). Gradient fallback when no src; optional title
 * scrim, corner badge and breathing animation.
 *
 * @dsCard group="Components"
 */
export function CoverImage(props: CoverImageProps): JSX.Element;
