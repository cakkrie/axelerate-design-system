import React from 'react';
const css=`
.ax-radiowrap{position:relative;display:inline-flex;flex:none;width:21px;height:21px}
.ax-radio{appearance:none;-webkit-appearance:none;width:21px;height:21px;margin:0;border:2px solid var(--pencil-line);border-radius:50%;background:var(--surface-card);cursor:inherit;transition:border-color var(--dur-fast),transform var(--dur-fast) var(--ease-launch)}
.ax-radio:hover:not(:disabled):not(:checked){border-color:var(--ink-900)}
.ax-radio:active:not(:disabled){transform:scale(.92)}
.ax-radio:checked{border-color:var(--brand-primary)}
.ax-radiowrap i{position:absolute;left:5.5px;top:5.5px;width:10px;height:10px;border-radius:50%;background:var(--brand-primary);transform:scale(.3);opacity:0;pointer-events:none;transition:opacity var(--dur-fast),transform var(--dur-med) var(--ease-launch)}
.ax-radio:checked~i{opacity:1;transform:scale(1)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-radio')){const s=document.createElement('style');s.id='ax-css-radio';s.textContent=css;document.head.appendChild(s);}
export function Radio({label,disabled=false,className='',style,...rest}){
  return <label className={('ax-choice'+(disabled?' ax-choice--disabled':'')+' '+className).trim()} style={style}>
    <span className="ax-radiowrap">
      <input type="radio" className="ax-radio" disabled={disabled} {...rest}/>
      <i aria-hidden="true"></i>
    </span>
    {label&&<span>{label}</span>}
  </label>;
}
