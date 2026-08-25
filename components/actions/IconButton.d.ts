import * as React from 'react';
/** Round icon-only button; requires an accessible `label`. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name (rendered as aria-label + title). Required. */
  label: string;
  /** `ghost` (default) · `secondary` outlined · `primary` violet. */
  variant?: 'ghost' | 'secondary' | 'primary';
  /** sm 28px · md 36px (default) · lg 44px. */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** The icon (an SVG element, ~16–20px). */
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
