import * as React from 'react';
/** The row at the top of a top-level screen: wordmark left, controls right. Controls are yours — this system owns neither your icon set nor your router. */
export interface AppBarProps extends React.HTMLAttributes<HTMLElement> {
  /** A string renders in the wordmark treatment; pass a node to render your own. */
  wordmark?: React.ReactNode;
  /** Element or component for the row. Defaults to `header`; use `div` when the screen already has one. */
  as?: React.ElementType;
  /** Trailing controls. Put `ax-appbar__action` on a button, `ax-appbar__avatar` on a profile link. */
  children?: React.ReactNode;
}
export declare function AppBar(props: AppBarProps): JSX.Element;
