import * as React from 'react';
export interface ScreenHeaderBack {
  /** Element or component for the back control. Defaults to `a`. */
  as?: React.ElementType;
  /** Accessible name — the control is a chevron with no text. */
  label?: string;
  [prop: string]: unknown;
}
/** Header for a screen you arrive at from somewhere else: back control, the place you came from, the title, and one handwritten aside. */
export interface ScreenHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The screen title. Renders as the page's h1 in `--font-title`. */
  title: React.ReactNode;
  /** Where you came from, in caps. Usually the parent screen's name. */
  kicker?: React.ReactNode;
  /** One short handwritten phrase beside the title. Never a sentence. */
  note?: React.ReactNode;
  /** A line of standfirst under the title. */
  lede?: React.ReactNode;
  /** A control pinned to the end of the top row. */
  action?: React.ReactNode;
  /** Back control. `{href}` renders an anchor; pass your router's link as `as`. */
  back?: ScreenHeaderBack;
}
export declare function ScreenHeader(props: ScreenHeaderProps): JSX.Element;
