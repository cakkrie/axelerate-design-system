import * as React from 'react';
/** Proportion drawn as a row of hand-hatched strokes (or wobbly dots) — each mark tilted and jittered, filled up to the value. */
export interface MarkerBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Filled amount. */
  value?: number;
  /** Denominator (default 100). */
  total?: number;
  /** How many marks the row is drawn with (default 22) — the resolution, not the data. */
  ticks?: number;
  /** `hatch` slanted strokes (default) · `dot` wobbly hand-drawn dots. */
  shape?: 'hatch' | 'dot';
  /** Mark colour. */
  color?: 'ink' | 'violet' | 'pink' | 'coral' | 'orange' | 'yellow' | 'lime' | 'teal' | 'cyan' | 'navy' | 'lilac';
  /** Row label on the left. */
  label?: string;
  /** Right-aligned figure, e.g. "68%" or "38 / 50". */
  figure?: React.ReactNode;
  /** Handwritten aside after the marks (Lacquer). */
  note?: string;
  /** Stroke height in px (default 26); dots use half this. */
  height?: number;
  /** Light marks + light type for ink/violet panels. */
  inverse?: boolean;
}
export declare function MarkerBar(props: MarkerBarProps): JSX.Element;
