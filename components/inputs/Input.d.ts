import * as React from 'react';
/** Single-line text field with optional label, hint, and error. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'style'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the control. */
  hint?: string;
  /** Error message; replaces hint and turns the border red. */
  error?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
