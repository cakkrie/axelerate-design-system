import * as React from 'react';
/** On/off toggle; violet track when on. For settings that apply immediately. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'type'> {
  /** Text beside the track. Omit it and give the input an `aria-label` when the row already names the toggle. */
  label?: string;
  /** `md` default · `sm` for a dense settings list. The touch target is 44px either way. */
  size?: 'md' | 'sm';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
