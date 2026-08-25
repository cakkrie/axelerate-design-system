import React from 'react';
const css=`
.ax-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;border-radius:var(--radius-btn);font-family:var(--font-display);font-weight:var(--weight-bold);letter-spacing:0;cursor:pointer;white-space:nowrap;text-decoration:none;transition:transform var(--dur-fast) var(--ease-launch),box-shadow var(--dur-med) var(--ease-launch),background var(--dur-fast) var(--ease-launch),color var(--dur-fast)}
.ax-btn:active:not(:disabled){transform:scale(.97)}
.ax-btn:disabled{opacity:.45;cursor:not-allowed}
.ax-btn--sm{height:32px;padding:0 14px;font-size:13.5px}
.ax-btn--md{height:40px;padding:0 18px;font-size:14.5px}
.ax-btn--lg{height:48px;padding:0 24px;font-size:16.5px}
.ax-btn--primary{background:var(--brand-primary);color:var(--text-on-brand);box-shadow:var(--sticker-cut),var(--shadow-paper)}
.ax-btn--primary:hover:not(:disabled){background:var(--brand-primary-strong);transform:translate(-1px,-2px) rotate(-1deg);box-shadow:var(--sticker-cut),var(--shadow-paper-lg)}
.ax-btn--yellow{background:var(--brand-accent);color:var(--text-on-accent);box-shadow:var(--sticker-cut),var(--shadow-paper)}
.ax-btn--yellow:hover:not(:disabled){background:var(--brand-accent-strong);transform:translate(-1px,-2px) rotate(-1.5deg);box-shadow:var(--sticker-cut),var(--shadow-paper-lg)}
.ax-btn--secondary{background:var(--surface-card);color:var(--text-primary);box-shadow:var(--sticker-cut),0 0 0 4px var(--gray-300),var(--shadow-paper)}
.ax-btn--secondary:hover:not(:disabled){color:var(--text-brand);transform:translate(-1px,-2px) rotate(-.8deg);box-shadow:var(--sticker-cut),0 0 0 4px var(--violet-400),var(--shadow-paper-lg)}
.ax-btn--ghost{background:transparent;color:var(--text-brand);padding-bottom:2px}
.ax-btn--ghost:hover:not(:disabled){background:var(--scribble-butter) no-repeat left 92%/100% 7px}
.ax-btn--full{width:100%}
.ax-btn svg,.ax-btn .ax-icon{width:1.1em;height:1.1em;flex:none}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-button')){const s=document.createElement('style');s.id='ax-css-button';s.textContent=css;document.head.appendChild(s);}
export function Button({variant='primary',size='md',fullWidth=false,disabled=false,className='',children,...rest}){
  const cls=['ax-btn','ax-btn--'+variant,'ax-btn--'+size,fullWidth?'ax-btn--full':'',className].filter(Boolean).join(' ');
  return <button className={cls} disabled={disabled} {...rest}>{children}</button>;
}
