import type { ReactNode } from "react";

export interface AvatarProps {
  /** Image URL. Falls back to initials from `name` when omitted. */
  src?: string;
  name?: string;
  /** Diameter in px. Default 36. */
  size?: number;
  className?: string;
}

export interface AvatarGroupProps {
  children: ReactNode;
  className?: string;
}

/**
 * Avatar — circular user image or initials fallback, accent-tinted.
 * AvatarGroup overlaps a row of Avatars with a canvas-colored ring.
 *
 * @dsCard group="Components"
 */
export function Avatar(props: AvatarProps): JSX.Element;
export function AvatarGroup(props: AvatarGroupProps): JSX.Element;
