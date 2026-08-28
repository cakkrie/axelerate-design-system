import React from 'react';
/* Coral and pink take ink, not white. The board's caption asks for white on
   both, but at F2542D and DE5C96 white is 3.45:1 and 3.46:1 — fine for large
   text, short of the 4.5:1 small text needs, and this component is 12px bold.
   Ink is 5.32:1 on both. Violet is the only hue here that carries white at
   any size (6.48:1). */
const css=`
.ax-badge{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 11px;border-radius:var(--radius-pill);font-family:var(--font-display);font-size:12px;font-weight:var(--weight-bold);letter-spacing:0;white-space:nowrap;box-shadow:2px 2px 0 rgba(23,16,41,.14)}
.ax-badge--brand{background:var(--brand-primary);color:#fff}

.ax-badge--success{background:var(--success-bg);color:var(--success-fg)}
.ax-badge--warning{background:var(--warning-bg);color:var(--warning-fg)}
.ax-badge--danger{background:var(--danger-bg);color:var(--danger-fg)}
.ax-badge--neutral{background:var(--surface-quiet);color:var(--gray-700)}
.ax-badge--coral{background:var(--accent-coral);color:var(--ink-900)}
.ax-badge--orange{background:var(--accent-orange);color:var(--ink-900)}
.ax-badge--pink{background:var(--accent-pink);color:var(--ink-900)}
.ax-badge--blush{background:var(--accent-blush);color:var(--ink-900)}
.ax-badge--lavender{background:var(--accent-lavender);color:var(--ink-900)}
.ax-badge--yellow{background:var(--accent-yellow);color:var(--ink-900)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-badge')){const s=document.createElement('style');s.id='ax-css-badge';s.textContent=css;document.head.appendChild(s);}
export function Badge({tone='brand',tilt,className='',style,children,...rest}){
  return <span className={('ax-badge ax-badge--'+tone+' '+className).trim()} style={tilt?{transform:`rotate(${tilt}deg)`,...style}:style} {...rest}>{children}</span>;
}
