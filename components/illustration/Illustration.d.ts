import * as React from 'react';
/**
 * Illustration frame in the brand's three tiers — ink line art sitting on a tilted violet blob.
 * Pass `src` for a real illustration file, `glyph` to promote a doodle icon to mini-illustration size,
 * or neither to render a labelled dashed placeholder while the artwork is being commissioned.
 */
export interface IllustrationProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `mini` 96px single object · `spot` 220px small scene · `hero` 520px wide scene. */
  tier?: 'mini' | 'spot' | 'hero';
  /** URL of the illustration file (SVG/PNG with transparent ground). */
  src?: string;
  /** Doodle-icon name from `assets/icons/` (e.g. "coffee-cup-2") for the mini tier. */
  glyph?: string;
  /** Where the doodle icons live relative to the page. Default `assets/icons`. */
  glyphBase?: string;
  /** Accent shape behind the art, or `false` for none. */
  blob?: 'violet' | 'lavender' | 'pink' | 'blush' | 'coral' | 'orange' | 'yellow' | 'paper' | false;
  /** Blob rotation in degrees (default −6). */
  tilt?: number;
  /** Alt text for the art. */
  alt?: string;
  /** Placeholder caption — say what the scene should show. */
  label?: string;
  /** Override the tier's pixel size. */
  size?: number;
}
export declare function Illustration(props: IllustrationProps): JSX.Element;
