export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * Switch — pill toggle. Purple-tinted track + white thumb slide when on.
 *
 * @dsCard group="Components"
 */
export function Switch(props: SwitchProps): JSX.Element;
