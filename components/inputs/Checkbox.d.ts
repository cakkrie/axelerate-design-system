import * as React from 'react';
/** Checkbox with inline label; violet fill + white check when checked. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'type'> {
  label?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
