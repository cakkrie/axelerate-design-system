import * as React from 'react';
export interface TabItem {
  id: string;
  label: React.ReactNode;
}
/** Tab bar in core colours only — brand purple active, quiet grey resting. `folder` (default) draws real folder tabs; `underline` and `pill` stay quieter. */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tabs, or plain strings used as both id and label. */
  items?: (TabItem | string)[];
  /** Active tab id. */
  value?: string;
  /** Called with the clicked tab id. */
  onChange?: (id: string) => void;
  /** `folder` default · `underline` · `pill`. */
  variant?: 'folder' | 'underline' | 'pill';
}
export declare function Tabs(props: TabsProps): JSX.Element;
