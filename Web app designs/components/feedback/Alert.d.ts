import type { ReactNode } from "react";

export interface AlertProps {
  variant?: "info" | "success" | "warn" | "error";
  title?: ReactNode;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

/**
 * Alert — full-width, persistent banner (page/section notices, form errors).
 * Distinct from `Toast`, which is a transient slide-in notification.
 *
 * @dsCard group="Components"
 */
export function Alert(props: AlertProps): JSX.Element;
