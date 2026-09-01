import * as React from 'react';
/** Multi-line text field with optional label, hint, and error. Input's longer sibling. */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'style'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the control. */
  hint?: string;
  /** Error message; replaces hint and turns the border red. */
  error?: string;
  /** Visible rows before scrolling. Defaults to 3. */
  rows?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
