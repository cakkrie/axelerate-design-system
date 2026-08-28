import * as React from 'react';
/** Category chip — solid accent fill by default. The soft treatment is reserved for removable/editable chips. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Fill colour (default `ink`). */
  tone?: 'ink' | 'coral' | 'orange' | 'pink' | 'blush' | 'lavender' | 'yellow';
  /** Light treatment — only for removable or editable chips (implied when `onRemove` is set). */
  soft?: boolean;
  /** Brand-purple selected state, for filter rows. */
  selected?: boolean;
  /** Shows an × and calls this on click — renders the soft treatment. */
  onRemove?: () => void;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
