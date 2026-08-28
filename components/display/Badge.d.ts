import * as React from 'react';
/** Sticker-style status pill — flat shadow, display type. `butter` is the hype tone ("New", "Most loved"). */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'brand' | 'success' | 'warning' | 'danger' | 'neutral' | 'coral' | 'orange' | 'pink' | 'blush' | 'lavender' | 'yellow';
  /** Rotation in degrees — a slapped-on sticker sits at −3…−8. */
  tilt?: number;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
