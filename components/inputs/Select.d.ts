import * as React from 'react';
/** Styled native select with chevron; same field chrome as Input. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className' | 'style'> {
  label?: string;
  hint?: string;
  /** Options as strings or {value,label}; alternatively pass <option> children. */
  options?: Array<string | { value: string; label: string }>;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
