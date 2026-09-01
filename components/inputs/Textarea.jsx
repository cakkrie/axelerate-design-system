import React from 'react';
const css=`
.ax-textarea{display:block;width:100%;min-height:96px;padding:10px 12px;border:none;border-bottom:2px solid var(--pencil-line);border-radius:var(--radius-hand-sm) var(--radius-hand-sm) 3px 3px;background:var(--surface-quiet);font-family:inherit;font-size:14.5px;line-height:1.5;color:var(--text-primary);box-sizing:border-box;resize:vertical;transition:border-color var(--dur-fast),box-shadow var(--dur-fast),background var(--dur-fast)}
.ax-textarea::placeholder{color:var(--gray-400)}
.ax-textarea:hover:not(:disabled):not(:focus){border-bottom-color:var(--pencil-line-strong)}
.ax-textarea:focus{outline:none;background:var(--gray-0);border-bottom-color:var(--brand-primary);box-shadow:inset 0 -9px 0 var(--butter-200)}
.ax-textarea:disabled{color:var(--gray-400);border-bottom-style:dashed;cursor:not-allowed;background:var(--surface-quiet)}
.ax-textarea--error{border-bottom-color:var(--red-500)}
.ax-textarea--error:focus{border-bottom-color:var(--red-500);box-shadow:inset 0 -9px 0 var(--red-100)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-textarea')){const s=document.createElement('style');s.id='ax-css-textarea';s.textContent=css;document.head.appendChild(s);}

// Input's longer sibling: same field chrome, same label/hint/error contract,
// several lines instead of one. It exists because consumers were hand-rolling
// a textarea from tokens to get a rejection reason or a note, which is drift by
// another name.
//
// box-sizing is set explicitly: height and min-height apply to the CONTENT box,
// so without it this control renders taller than the number it was given —
// the single most repeated layout bug in the consuming app.
export function Textarea({label,hint,error,rows=3,disabled=false,className='',style,...rest}){
  const msgId=React.useId();
  const msg=error||hint;
  // The message is a SIBLING of the <label>, never a child. Nested, its text
  // becomes part of the field's accessible name, and aria-describedby does not
  // undo that — the name is still built from the label's contents.
  return <div className={('ax-field '+className).trim()} style={style}>
    <label className="ax-field__lab">
      {label&&<span className="ax-field__label">{label}</span>}
      <textarea className={'ax-textarea'+(error?' ax-textarea--error':'')} rows={rows} disabled={disabled}
        aria-invalid={error?true:undefined} aria-describedby={msg?msgId:undefined} {...rest}/>
    </label>
    {msg&&<span id={msgId} className={'ax-field__msg'+(error?' ax-field__msg--error':'')}>{msg}</span>}
  </div>;
}
