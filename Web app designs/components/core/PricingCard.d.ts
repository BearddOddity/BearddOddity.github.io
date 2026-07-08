import type { ReactNode } from "react";

export interface PricingCardProps {
  name: string;
  price: ReactNode;
  period?: string;
  features?: string[];
  /** Action slot — typically a Button. */
  action?: ReactNode;
  /** Purple-tinted border + glow for the recommended tier. */
  highlight?: boolean;
  className?: string;
}

/**
 * PricingCard — plan tile with a checklist and CTA slot. Set `highlight` on
 * the recommended tier.
 *
 * @dsCard group="Components"
 */
export function PricingCard(props: PricingCardProps): JSX.Element;
