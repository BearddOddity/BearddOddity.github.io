export interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  className?: string;
}

/**
 * Pagination — numbered page control with prev/next and collapsing ellipses
 * for long ranges.
 *
 * @dsCard group="Components"
 */
export function Pagination(props: PaginationProps): JSX.Element;
