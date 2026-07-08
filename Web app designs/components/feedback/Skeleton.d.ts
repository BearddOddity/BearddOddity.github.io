export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: number;
  /** Renders a circle (for avatar placeholders). */
  circle?: boolean;
  className?: string;
}

/**
 * Skeleton — shimmering placeholder block for async content. Compose several
 * to mock a card/row shape while data loads.
 *
 * @dsCard group="Components"
 */
export function Skeleton(props: SkeletonProps): JSX.Element;
