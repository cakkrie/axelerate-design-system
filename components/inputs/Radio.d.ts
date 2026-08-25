import * as React from 'react';
/** Radio button with inline label; violet ring-dot when selected. */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'type'> {
  label?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
