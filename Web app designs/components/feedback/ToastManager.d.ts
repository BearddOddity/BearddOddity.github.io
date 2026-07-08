export interface BdToastApi {
  /** Queue a toast. Returns its id. duration=0 keeps it until dismissed. */
  push(message: string, variant?: "success" | "error" | "info", duration?: number): number;
  dismiss(id: number): void;
}

export const bdToast: BdToastApi;

export interface ToastManagerProps {
  className?: string;
}

/**
 * ToastManager — mount once (e.g. at the app root). Anything anywhere can
 * then call `bdToast.push("Overlay connected", "success")` to queue a
 * transient toast; it stacks bottom-right and auto-dismisses. This is the
 * stacking/lifecycle layer around the visual `Toast` piece.
 *
 * @dsCard group="Components"
 */
export function ToastManager(props: ToastManagerProps): JSX.Element;
