import type { ReactNode } from "react";

export interface ToastProps {
  children: ReactNode;
  variant?: "success" | "error" | "info";
  /** Override the leading glyph. */
  icon?: ReactNode;
  className?: string;
}

/**
 * Toast — transient notification pill; tinted glass with a slide-in from the
 * right. Success/error/info variants match the semantic palette.
 *
 * @dsCard group="Components"
 */
export function Toast(props: ToastProps): JSX.Element;
