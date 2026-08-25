import * as React from 'react';
/** Modal paper sheet, taped to the screen over a blurred ink overlay; pops in with the launch ease. */
export interface DialogProps {
  /** Render/visibility flag. */
  open: boolean;
  /** Called on ×, or overlay click. */
  onClose?: () => void;
  title?: React.ReactNode;
  /** Action row, right-aligned (usually Buttons). */
  footer?: React.ReactNode;
  /** Panel width in px. Default 440. */
  width?: number | string;
  /** Butter tape strip across the top edge (default true). */
  tape?: boolean;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
