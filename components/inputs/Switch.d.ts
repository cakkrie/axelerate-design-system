import * as React from 'react';
/** On/off toggle; violet track when on. For settings that apply immediately. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'type'> {
  label?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
