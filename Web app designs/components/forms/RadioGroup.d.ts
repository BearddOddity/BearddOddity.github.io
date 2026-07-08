export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  options: (string | RadioOption)[];
  name?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * RadioGroup — stacked circular radio controls, purple dot when selected.
 *
 * @dsCard group="Components"
 */
export function RadioGroup(props: RadioGroupProps): JSX.Element;
