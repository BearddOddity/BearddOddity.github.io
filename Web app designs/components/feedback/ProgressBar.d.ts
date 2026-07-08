export interface ProgressBarProps {
  value?: number;
  /** Denominator for value. Default 100. */
  max?: number;
  className?: string;
}

/**
 * ProgressBar — slim track with a purple-gradient fill (eases on width change).
 * Used for reading progress, uploads, scan progress.
 *
 * @dsCard group="Components"
 */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
