import * as React from 'react';
/** Sticky note — a scribbled aside pinned onto the layout, with an optional folded corner and tape strip. */
export interface StickyNoteProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Paper colour. */
  tint?: 'yellow' | 'lavender' | 'paper' | 'blush' | 'pink' | 'coral';
  /** Rotation in degrees (default 0 — upright); keep within ±4 when you do tilt. */
  tilt?: number;
  /** Adds a translucent tape strip at the top. */
  tape?: boolean;
  /** Folded bottom-right corner (default true). */
  fold?: boolean;
  /** Handwritten headline (Lacquer). */
  heading?: string;
  /** Small uppercase label above the heading. */
  label?: string;
  children?: React.ReactNode;
}
export declare function StickyNote(props: StickyNoteProps): JSX.Element;
