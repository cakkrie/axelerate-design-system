import React from 'react';
const css=`
.ax-tag{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 12px;border:none;border-radius:var(--radius-hand-sm);background:var(--tg-bg,var(--ink-900));font-family:var(--font-body);font-size:13px;font-weight:var(--weight-semibold);color:var(--tg-fg,#fff);white-space:nowrap;box-shadow:2px 2px 0 rgba(23,16,41,.10)}
.ax-tag--selected{background:var(--brand-primary);color:#fff}
.ax-tag__x{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;margin-right:-4px;border:none;border-radius:50%;background:transparent;color:currentColor;opacity:.6;font-size:13px;line-height:1;cursor:pointer;padding:0}
.ax-tag__x:hover{opacity:1}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-tag')){const s=document.createElement('style');s.id='ax-css-tag';s.textContent=css;document.head.appendChild(s);}
const SOLID={coral:['var(--accent-coral)','#fff'],orange:['var(--accent-orange)','var(--ink-900)'],pink:['var(--accent-pink)','#fff'],blush:['var(--accent-blush)','var(--ink-900)'],lavender:['var(--accent-lavender)','var(--ink-900)'],yellow:['var(--accent-yellow)','var(--ink-900)'],ink:['var(--ink-900)','#fff']};
const SOFT={coral:['var(--accent-coral-soft)','#A8371E'],orange:['var(--accent-orange-soft)','#8F4C00'],pink:['var(--accent-pink-soft)','#A31257'],blush:['var(--accent-blush-soft)','#9C3765'],lavender:['var(--accent-lavender-soft)','var(--violet-800)'],yellow:['var(--accent-yellow-soft)','#8A6300'],ink:['var(--surface-quiet)','var(--gray-700)']};
export function Tag({tone='ink',soft=false,selected=false,onRemove,className='',style,children,...rest}){
  const t=(soft||onRemove?SOFT:SOLID)[tone]||SOLID.ink;
  return <span className={('ax-tag'+(selected?' ax-tag--selected':'')+' '+className).trim()}
    style={{'--tg-bg':t[0],'--tg-fg':t[1],...style}} {...rest}>
    {children}
    {onRemove&&<button type="button" className="ax-tag__x" aria-label="Remove" onClick={onRemove}>×</button>}
  </span>;
}
