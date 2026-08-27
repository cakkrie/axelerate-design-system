import React from 'react';
const css=`
.ax-field{display:flex;flex-direction:column;gap:5px;font-family:var(--font-body);min-width:0}
.ax-field__label{font-family:var(--font-label);font-size:10.5px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--gray-600)}
.ax-field__msg{font-family:var(--font-hand);font-size:16px;color:var(--gray-600);line-height:1.15}
.ax-field__msg--error{color:var(--danger-fg)}
.ax-input{height:44px;padding:0 12px;border:none;border-bottom:2px solid var(--pencil-line);border-radius:var(--radius-hand-sm) var(--radius-hand-sm) 3px 3px;background:var(--surface-quiet);font-family:inherit;font-size:14.5px;color:var(--text-primary);transition:border-color var(--dur-fast),box-shadow var(--dur-fast),background var(--dur-fast)}
.ax-input::placeholder{color:var(--gray-400)}
.ax-input:hover:not(:disabled):not(:focus){border-bottom-color:var(--pencil-line-strong)}
.ax-input:focus{outline:none;background:var(--gray-0);border-bottom-color:var(--brand-primary);box-shadow:inset 0 -9px 0 var(--butter-200)}
.ax-input:disabled{color:var(--gray-400);border-bottom-style:dashed;cursor:not-allowed;background:var(--surface-quiet)}
.ax-input--error{border-bottom-color:var(--red-500)}
.ax-input--error:focus{border-bottom-color:var(--red-500);box-shadow:inset 0 -9px 0 var(--red-100)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-input')){const s=document.createElement('style');s.id='ax-css-input';s.textContent=css;document.head.appendChild(s);}
export function Input({label,hint,error,disabled=false,className='',style,...rest}){
  // The hint and the error are the field's *description*, not part of its
  // name. Nested inside the <label> they were, so a screen reader announced
  // "School email any .edu address works" as the label. aria-describedby keeps
  // the name clean and still reads the message after it.
  const msgId=React.useId();
  const msg=error||hint;
  return <label className={('ax-field '+className).trim()} style={style}>
    {label&&<span className="ax-field__label">{label}</span>}
    <input className={'ax-input'+(error?' ax-input--error':'')} disabled={disabled}
      aria-invalid={error?true:undefined} aria-describedby={msg?msgId:undefined} {...rest}/>
    {msg&&<span id={msgId} className={'ax-field__msg'+(error?' ax-field__msg--error':'')}>{msg}</span>}
  </label>;
}
