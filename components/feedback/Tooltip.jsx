import React from 'react';
const css=`
.ax-tip{position:relative;display:inline-flex}
.ax-tip__bubble{position:absolute;left:50%;bottom:calc(100% + 10px);transform:translateX(-50%) translateY(3px);background:var(--ink-900);color:var(--text-inverse);font-family:var(--font-body);font-size:12px;font-weight:var(--weight-medium);padding:7px 11px;border-radius:11px 13px 10px 14px/13px 11px 14px 10px;white-space:nowrap;opacity:0;pointer-events:none;z-index:60;transition:opacity var(--dur-fast) var(--ease-launch),transform var(--dur-fast) var(--ease-launch)}
.ax-tip__bubble::after{content:'';position:absolute;left:50%;margin-left:-7px;bottom:-7px;width:14px;height:9px;background:var(--ink-900);clip-path:polygon(0 0,100% 0,32% 100%)}
.ax-tip[data-side="bottom"] .ax-tip__bubble::after{bottom:auto;top:-7px;clip-path:polygon(32% 0,100% 100%,0 100%)}
.ax-tip[data-side="bottom"] .ax-tip__bubble{bottom:auto;top:calc(100% + 10px);transform:translateX(-50%) translateY(-3px)}
.ax-tip:hover .ax-tip__bubble,.ax-tip:focus-within .ax-tip__bubble,.ax-tip[data-open] .ax-tip__bubble{opacity:1;transform:translateX(-50%) translateY(0)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-tooltip')){const s=document.createElement('style');s.id='ax-css-tooltip';s.textContent=css;document.head.appendChild(s);}
export function Tooltip({label,side='top',open,className='',children,...rest}){
  return <span className={('ax-tip '+className).trim()} data-side={side} data-open={open||undefined} {...rest}>
    {children}
    <span className="ax-tip__bubble" role="tooltip">{label}</span>
  </span>;
}
