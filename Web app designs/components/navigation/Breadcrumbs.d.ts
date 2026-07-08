export interface Crumb {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: Crumb[];
  onNavigate?: (item: Crumb) => void;
  className?: string;
}

/**
 * Breadcrumbs — path trail. Last item renders as current (non-clickable,
 * brighter); others are clickable and dim.
 *
 * @dsCard group="Components"
 */
export function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
