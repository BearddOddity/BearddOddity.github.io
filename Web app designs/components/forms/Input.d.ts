export interface InputProps {
  /** Optional uppercase micro-label rendered above the field. */
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  /** Error message — shows red border + message below the field. */
  error?: string;
  /** Helper text below the field (hidden when `error` is set). */
  help?: string;
  className?: string;
}

/**
 * Input — glass text field (black-alpha fill, hairline border, purple focus
 * ring). Pair with the optional uppercase micro-label.
 *
 * @dsCard group="Components"
 */
export function Input(props: InputProps): JSX.Element;
