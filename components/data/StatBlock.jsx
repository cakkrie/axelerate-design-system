import React from 'react';
const css=`
.ax-stat{display:flex;flex-direction:column;gap:8px;min-width:0}
.ax-stat__n{font-family:var(--font-display);font-weight:var(--weight-extrabold);font-size:38px;letter-spacing:var(--tracking-tighter);line-height:1;color:var(--text-primary)}
.ax-stat__l{font-family:var(--font-label);font-size:11px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--gray-600)}
.ax-stat__note{font-family:var(--font-hand);font-size:15px;color:var(--gray-600)}
.ax-stat--inverse .ax-stat__n{color:var(--text-inverse)}
.ax-stat--inverse .ax-stat__l,.ax-stat--inverse .ax-stat__note{color:rgba(255,255,255,.72)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-stat')){const s=document.createElement('style');s.id='ax-css-stat';s.textContent=css;document.head.appendChild(s);}
export function StatBlock({figure,label,note,inverse=false,className='',style,children,...rest}){
  return <div className={('ax-stat'+(inverse?' ax-stat--inverse':'')+' '+className).trim()}
    style={style} {...rest}>
    <span className="ax-stat__n">{figure}</span>
    {children}
    {label&&<span className="ax-stat__l">{label}</span>}
    {note&&<span className="ax-stat__note">{note}</span>}
  </div>;
}
