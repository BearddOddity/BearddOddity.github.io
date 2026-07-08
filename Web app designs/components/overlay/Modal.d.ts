import type { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: ReactNode;
  children: ReactNode;
  /** Footer slot — typically right-aligned Button(s). */
  footer?: ReactNode;
  className?: string;
}

/**
 * Modal — centered glass dialog over a blurred scrim. Click the scrim or the
 * ✕ to close (wire `onClose`). Render conditionally on `open`.
 *
 * @dsCard group="Components"
 */
export function Modal(props: ModalProps): JSX.Element | null;
