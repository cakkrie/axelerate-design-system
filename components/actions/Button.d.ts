import * as React from 'react';
/**
 * Pill-shaped action button. Primary = violet; `volt` is the high-energy lime CTA (one per view, max).
 * @startingPoint section="Components" subtitle="Pill action button in 4 variants" viewport="700x260"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` violet (default) · `volt` lime hero CTA · `secondary` outlined · `ghost` text-only. */
  variant?: 'primary' | 'yellow' | 'secondary' | 'ghost';
  /** Control height: sm 32px · md 40px (default) · lg 48px. */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width. */
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
