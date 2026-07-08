export interface TabItem {
  value: string;
  label: string;
}

export interface TabsProps {
  tabs: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

/**
 * Tabs — segmented control for switching panels. Renders the tab strip only;
 * pair with your own conditional panel render (`value === "x" && <Panel/>`).
 *
 * @dsCard group="Components"
 */
export function Tabs(props: TabsProps): JSX.Element;
