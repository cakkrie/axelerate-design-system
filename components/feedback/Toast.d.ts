import * as React from 'react';
/** Transient notification card; render fixed bottom-right, one at a time. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Dot color. `brand` default. */
  tone?: 'brand' | 'yellow' | 'success' | 'warning' | 'danger' | 'neutral';
  title: React.ReactNode;
  description?: React.ReactNode;
  /** When set, renders a × dismiss button. */
  onDismiss?: () => void;
}
export declare function Toast(props: ToastProps): JSX.Element;
