import * as React from 'react';
/** Die-cut sticker — a label or icon with a white keyline, slapped onto cards, photos, and headlines. Upright by default; set `tilt` when you want it askew. */
export interface StickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Sticker colour (`ink` = black sticker with butter content). */
  tone?: 'ink' | 'violet' | 'coral' | 'orange' | 'pink' | 'blush' | 'lavender' | 'yellow';
  /** Circular icon sticker instead of a pill label. */
  round?: boolean;
  /** Diameter in px when `round` (default 44). */
  size?: number;
  /** Rotation in degrees (default 0 — upright). */
  tilt?: number;
  children?: React.ReactNode;
}
export declare function Sticker(props: StickerProps): JSX.Element;
