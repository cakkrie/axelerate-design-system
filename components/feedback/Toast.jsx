import React from 'react';
const css=`
.ax-toast{position:relative;display:flex;align-items:flex-start;gap:12px;width:340px;max-width:100%;padding:15px 16px 15px 17px;background:var(--surface-quiet);border-radius:var(--radius-hand);box-shadow:var(--shadow-paper-lg);font-family:var(--font-body);box-sizing:border-box;clip-path:polygon(0 0,100% 0,100% 86%,88% 100%,0 100%)}
.ax-toast__dot{width:11px;height:11px;border-radius:50%;margin-top:4px;flex:none;box-shadow:0 0 0 2.5px var(--gray-0)}
.ax-toast__dot--brand{background:var(--brand-primary)}.ax-toast__dot--yellow{background:var(--butter-500)}.ax-toast__dot--success{background:var(--green-500)}.ax-toast__dot--warning{background:var(--amber-500)}.ax-toast__dot--danger{background:var(--red-500)}.ax-toast__dot--neutral{background:var(--gray-400)}
.ax-toast__title{margin:0;font-family:var(--font-display);font-size:14.5px;font-weight:var(--weight-bold);letter-spacing:-.01em;color:var(--text-primary)}
.ax-toast__desc{margin:3px 0 0;font-size:13px;line-height:1.45;color:var(--gray-700)}
.ax-toast__x{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;margin:-2px -4px 0 auto;border:none;border-radius:50%;background:transparent;color:var(--gray-600);font-size:14px;cursor:pointer;flex:none;padding:0}
.ax-toast__x:hover{background:rgba(23,16,41,.07);color:var(--text-primary)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-toast')){const s=document.createElement('style');s.id='ax-css-toast';s.textContent=css;document.head.appendChild(s);}
export function Toast({tone='brand',title,description,onDismiss,className='',...rest}){
  return <div className={('ax-toast '+className).trim()} role="status" {...rest}>
    <span className={'ax-toast__dot ax-toast__dot--'+tone}></span>
    <div style={{minWidth:0}}>
      <p className="ax-toast__title">{title}</p>
      {description&&<p className="ax-toast__desc">{description}</p>}
    </div>
    {onDismiss&&<button type="button" className="ax-toast__x" aria-label="Dismiss" onClick={onDismiss}>×</button>}
  </div>;
}
