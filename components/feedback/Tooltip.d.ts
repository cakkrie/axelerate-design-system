import * as React from 'react';
/** Ink bubble on hover/focus. Wraps its trigger inline. */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text — a few words, sentence case, no period. */
  label: React.ReactNode;
  side?: 'top' | 'bottom';
  /** Force visible (for specimens/tests). */
  open?: boolean;
  /** The trigger element. */
  children?: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
