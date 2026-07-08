export interface RangeSliderProps {
  label?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  /** Show the current value (mono, purple) at the right. Default true. */
  showValue?: boolean;
  className?: string;
}

/**
 * RangeSlider — restyled range input with the purple glowing thumb. Optional
 * label + live mono value readout.
 *
 * @dsCard group="Components"
 */
export function RangeSlider(props: RangeSliderProps): JSX.Element;
