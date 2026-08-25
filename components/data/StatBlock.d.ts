import * as React from 'react';
/** Headline figure with a label and an optional handwritten aside — wrap a TallyCount or MarkerBar as children to show the proportion. */
export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The number as you want it read — "2,400", "12 min", "94%". */
  figure?: React.ReactNode;
  /** Uppercase label under the figure. */
  label?: string;
  /** Handwritten aside in Lacquer, e.g. "and climbing". */
  note?: string;
  /** Light type for ink panels. */
  inverse?: boolean;
  /** A TallyCount or MarkerBar rendered between figure and label. */
  children?: React.ReactNode;
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;
