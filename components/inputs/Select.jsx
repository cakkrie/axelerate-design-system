import React from 'react';
const css=`
.ax-selectwrap{position:relative;display:flex}
.ax-select{appearance:none;-webkit-appearance:none;width:100%;height:44px;padding:0 36px 0 12px;border:none;border-bottom:2px solid var(--pencil-line);border-radius:var(--radius-hand-sm) var(--radius-hand-sm) 3px 3px;background:var(--surface-quiet);font-family:var(--font-body);font-size:14.5px;color:var(--text-primary);cursor:pointer;transition:border-color var(--dur-fast),box-shadow var(--dur-fast),background var(--dur-fast)}
.ax-select:hover:not(:disabled):not(:focus){border-bottom-color:var(--pencil-line-strong)}
.ax-select:focus{outline:none;background:var(--gray-0);border-bottom-color:var(--brand-primary);box-shadow:inset 0 -9px 0 var(--butter-200)}
.ax-select:disabled{color:var(--gray-400);border-bottom-style:dashed;cursor:not-allowed}
.ax-selectwrap i{position:absolute;right:12px;top:50%;transform:translateY(-50%) rotate(-4deg);width:17px;height:17px;background:var(--gray-600);pointer-events:none;-webkit-mask:var(--chevron) center/contain no-repeat;mask:var(--chevron) center/contain no-repeat}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-select')){const s=document.createElement('style');s.id='ax-css-select';s.textContent=css;document.head.appendChild(s);}
const CHEV="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4.5 8.2c2.4 2.1 5 4.4 7.7 6.9 2.4-2.6 4.9-5 7.4-7.2'/%3E%3C/svg%3E\")";
export function Select({label,hint,disabled=false,options,className='',style,children,...rest}){
  // Same as Input: the hint is a description, not part of the field's name.
  const msgId=React.useId();
  return <label className={('ax-field '+className).trim()} style={style}>
    {label&&<span className="ax-field__label">{label}</span>}
    <span className="ax-selectwrap">
      <select className="ax-select" disabled={disabled} aria-describedby={hint?msgId:undefined} {...rest}>
        {options?options.map(o=>typeof o==='string'?<option key={o} value={o}>{o}</option>:<option key={o.value} value={o.value}>{o.label}</option>):children}
      </select>
      <i aria-hidden="true" style={{'--chevron':CHEV}}></i>
    </span>
    {hint&&<span id={msgId} className="ax-field__msg">{hint}</span>}
  </label>;
}
