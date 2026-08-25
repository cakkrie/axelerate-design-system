import * as React from 'react';
/** Hand-scratched tally marks — the playful way to show a small count (seats, rooms, wins). */
export interface TallyCountProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** How many marks to draw; every fifth becomes the diagonal slash. Keep under ~30. */
  count?: number;
  /** Mark colour. */
  color?: 'ink' | 'violet' | 'pink' | 'coral' | 'orange' | 'yellow' | 'lime' | 'teal' | 'cyan' | 'navy';
  /** Mark height in px (default 34). */
  height?: number;
  /** Screen-reader label; falls back to "<count> marks". */
  label?: string;
}
export declare function TallyCount(props: TallyCountProps): JSX.Element;
