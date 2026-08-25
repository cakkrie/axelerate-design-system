import React from 'react';
const TICK="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.5 13.4c2.3 1.7 4 3.5 5.6 6C12.4 12 16.4 6.2 21.5 2.3'/%3E%3C/svg%3E\")";
const css=`
.ax-choice{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:14.5px;font-weight:var(--weight-medium);color:var(--text-primary);cursor:pointer}
.ax-choice--disabled{opacity:.45;cursor:not-allowed}
.ax-checkwrap{position:relative;display:inline-flex;flex:none;width:21px;height:21px}
.ax-check{appearance:none;-webkit-appearance:none;width:21px;height:21px;margin:0;border:2px solid var(--pencil-line);border-radius:7px 8px 6px 9px/8px 6px 9px 7px;background:var(--surface-card);cursor:inherit;transition:background var(--dur-fast) var(--ease-launch),border-color var(--dur-fast),transform var(--dur-fast) var(--ease-launch)}
.ax-check:hover:not(:disabled):not(:checked){border-color:var(--ink-900)}
.ax-check:active:not(:disabled){transform:scale(.92)}
.ax-check:checked{background:var(--brand-primary-soft);border-color:var(--brand-primary)}
.ax-checkwrap i{position:absolute;left:-6px;top:-9px;width:33px;height:33px;background:var(--brand-primary);opacity:0;transform:rotate(-7deg) scale(.75);transform-origin:42% 62%;pointer-events:none;-webkit-mask:var(--tick) center/contain no-repeat;mask:var(--tick) center/contain no-repeat;transition:opacity var(--dur-fast) var(--ease-launch),transform var(--dur-med) var(--ease-launch)}
.ax-check:checked~i{opacity:1;transform:rotate(-7deg) scale(1)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-checkbox')){const s=document.createElement('style');s.id='ax-css-checkbox';s.textContent=css;document.head.appendChild(s);}
export function Checkbox({label,disabled=false,className='',style,...rest}){
  return <label className={('ax-choice'+(disabled?' ax-choice--disabled':'')+' '+className).trim()} style={style}>
    <span className="ax-checkwrap">
      <input type="checkbox" className="ax-check" disabled={disabled} {...rest}/>
      <i aria-hidden="true" style={{'--tick':TICK}}></i>
    </span>
    {label&&<span>{label}</span>}
  </label>;
}
