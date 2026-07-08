export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * Checkbox — square glass check control. Purple fill + white check when
 * checked.
 *
 * @dsCard group="Components"
 */
export function Checkbox(props: CheckboxProps): JSX.Element;
