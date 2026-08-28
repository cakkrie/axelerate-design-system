import * as React from 'react';
/** Manila-folder card in a playful tint — a tab, a title, a rule, a bulleted list. Fan 3–5 with alternating tilts. */
export interface FileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Folder colour. Light tints (`blush`, `lavender`, `paper`) get ink text automatically. */
  tint?: 'violet' | 'coral' | 'orange' | 'pink' | 'blush' | 'lavender' | 'yellow' | 'paper';
  /** Small uppercase text on the folder tab. */
  tab?: string;
  /** Card heading in display type. */
  title?: string;
  /** Bulleted lines (✦ markers). */
  items?: string[];
  /** Rotation in degrees — keep within ±4. */
  tilt?: number;
  children?: React.ReactNode;
}
export declare function FileCard(props: FileCardProps): JSX.Element;
