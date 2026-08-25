import * as React from 'react';
/** Speech bubble with a hand-drawn wobble and a positionable tail — quotes, testimonials, chat moments, asides. */
export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fill colour. */
  tone?: 'paper' | 'ink' | 'violet' | 'pink' | 'coral' | 'orange' | 'yellow' | 'lime' | 'teal' | 'cyan' | 'navy' | 'lilac';
  /** Tail corner — a bubble always has a tail. */
  tail?: 'bl' | 'br' | 'tl' | 'tr';
  /** Optional attribution line under the quote (uppercase label type). */
  who?: string;
  /** Rotation in degrees — keep within ±3. */
  tilt?: number;
  children?: React.ReactNode;
}
export declare function Bubble(props: BubbleProps): JSX.Element;
