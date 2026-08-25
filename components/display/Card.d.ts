import * as React from 'react';
/** Paper card: flat offset shadow, wobbly corners. Fill it with a tint, tilt it, punch it, scribble a number on it. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `sheet` white paper (default) · `quiet` warm near-white · `tint` full-colour (set `tint`) · `ink` dark panel · `sketch` dashed empty slot · `tall` sheet with a deeper shadow. */
  variant?: 'sheet' | 'quiet' | 'tint' | 'ink' | 'sketch' | 'tall' | 'default' | 'elevated' | 'outline' | 'inverse' | 'paper';
  /** none · sm 16px · md 24px (default) · lg 32px. */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Fills the whole card with a playful tint; text colour flips automatically. */
  tint?: 'violet' | 'pink' | 'coral' | 'orange' | 'yellow' | 'lime' | 'teal' | 'cyan' | 'navy' | 'lilac' | 'paper';
  /** Rotation in degrees — ±1…4 for a fanned stack. */
  tilt?: number;
  /** Two punched binder holes along the top edge. */
  punch?: boolean;
  /** Number/word stamped in the display face, top-right corner. */
  scribble?: React.ReactNode;
  /** Hover lift + tilt + pointer. */
  interactive?: boolean;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
