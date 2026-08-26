import React from 'react';
const css=`
.ax-iconbtn{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:var(--radius-pill);background:transparent;color:var(--gray-600);cursor:pointer;flex:none;transition:transform var(--dur-fast) var(--ease-launch),background var(--dur-fast),color var(--dur-fast),box-shadow var(--dur-med) var(--ease-launch)}
.ax-iconbtn:active:not(:disabled){transform:scale(.94)}
.ax-iconbtn:disabled{opacity:.45;cursor:not-allowed}
.ax-iconbtn--sm{width:28px;height:28px}.ax-iconbtn--sm svg,.ax-iconbtn--sm .ax-icon{width:15px;height:15px}
.ax-iconbtn--md{width:36px;height:36px}.ax-iconbtn--md svg,.ax-iconbtn--md .ax-icon{width:18px;height:18px}
.ax-iconbtn--lg{width:44px;height:44px}.ax-iconbtn--lg svg,.ax-iconbtn--lg .ax-icon{width:22px;height:22px}
.ax-iconbtn--ghost:hover:not(:disabled){background:var(--surface-quiet);color:var(--text-primary)}
.ax-iconbtn--secondary{background:var(--surface-card);box-shadow:var(--sticker-cut),0 0 0 4px var(--gray-300),var(--shadow-paper)}
.ax-iconbtn--secondary:hover:not(:disabled){color:var(--text-brand);box-shadow:var(--sticker-cut),0 0 0 4px var(--violet-400),var(--shadow-paper-lg)}
.ax-iconbtn--primary{background:var(--brand-primary);color:var(--text-on-brand);box-shadow:var(--sticker-cut),var(--shadow-paper)}
.ax-iconbtn--primary:hover:not(:disabled){background:var(--brand-primary-strong);box-shadow:var(--sticker-cut),var(--shadow-paper-lg)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-iconbutton')){const s=document.createElement('style');s.id='ax-css-iconbutton';s.textContent=css;document.head.appendChild(s);}
export function IconButton({label,variant='ghost',size='md',disabled=false,className='',children,...rest}){
  const cls=['ax-iconbtn','ax-iconbtn--'+variant,'ax-iconbtn--'+size,className].filter(Boolean).join(' ');
  return <button className={cls} aria-label={label} title={label} disabled={disabled} {...rest}>{children}</button>;
}
