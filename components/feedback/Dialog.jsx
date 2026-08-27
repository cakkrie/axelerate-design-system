import React from 'react';
const css=`
.ax-dialog-overlay{position:fixed;inset:0;background:var(--overlay);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;z-index:100;animation:axFade var(--dur-med) var(--ease-launch)}
.ax-dialog{position:relative;background:var(--surface-card);border-radius:var(--radius-hand-lg);box-shadow:var(--shadow-paper-lg);display:flex;flex-direction:column;max-height:calc(100% - 48px);animation:axPop var(--dur-med) var(--ease-launch)}
.ax-dialog__tape{position:absolute;left:50%;top:-11px;width:104px;height:22px;transform:translateX(-50%) rotate(-1.5deg);background:rgba(246,222,124,.72);box-shadow:inset 0 0 0 1px rgba(23,16,41,.07)}
.ax-dialog__head{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:26px 24px 0}
.ax-dialog__title{margin:0;font-family:var(--font-display);font-size:20px;font-weight:var(--weight-bold);letter-spacing:var(--tracking-tight);color:var(--text-primary)}
.ax-dialog__x{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border:none;border-radius:50%;background:transparent;color:var(--gray-500);cursor:pointer;flex:none;transition:background var(--dur-fast),color var(--dur-fast)}
.ax-dialog__x:hover{background:var(--surface-quiet);color:var(--text-primary)}
.ax-dialog__body{padding:14px 24px 20px;overflow:auto;font-size:14px;line-height:var(--leading-normal);color:var(--text-secondary)}
.ax-dialog__foot{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 20px;background:var(--surface-quiet);border-radius:var(--radius-hand-lg);border-top-left-radius:0;border-top-right-radius:0}
@keyframes axPop{from{transform:scale(.95) translateY(8px);opacity:0}}
@keyframes axFade{from{opacity:0}}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-dialog')){const s=document.createElement('style');s.id='ax-css-dialog';s.textContent=css;document.head.appendChild(s);}
export const Dialog=React.forwardRef(function Dialog({open=false,onClose,title,footer,width=440,tape=true,initialFocus,children,...rest},ref){
  const inner=React.useRef(null);
  const returnTo=React.useRef(null);
  React.useImperativeHandle(ref,()=>inner.current,[]);

  React.useEffect(()=>{
    if(!open)return undefined;
    // Remember what had focus so it can be handed back, and move focus in.
    // A modal nobody's focus ever enters is a modal a keyboard user is still
    // outside of, tabbing through the page it is covering.
    returnTo.current=document.activeElement;
    const node=inner.current;
    const target=(initialFocus&&initialFocus.current)||node;
    target&&target.focus();

    const onKey=(e)=>{
      if(e.key==='Escape'){onClose&&onClose();return;}
      if(e.key!=='Tab'||!node)return;
      // Tab cycles inside the dialog. Without this it walks straight out into
      // the content behind the overlay, which is not reachable by mouse.
      const items=[...node.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')]
        .filter((n)=>n.offsetWidth||n.offsetHeight||n.getClientRects().length);
      if(!items.length){e.preventDefault();node.focus();return;}
      const first=items[0],last=items[items.length-1];
      if(!e.shiftKey&&(document.activeElement===last||document.activeElement===node)){e.preventDefault();first.focus();}
      else if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    };
    document.addEventListener('keydown',onKey);
    return ()=>{
      document.removeEventListener('keydown',onKey);
      // Focus goes back where it came from, synchronously: a rAF here makes
      // the assertion flaky under jsdom and the frame buys nothing.
      const back=returnTo.current;
      back&&back.isConnected&&back.focus();
    };
  },[open,onClose,initialFocus]);

  if(!open)return null;
  return <div className="ax-dialog-overlay" onMouseDown={e=>{if(e.target===e.currentTarget&&onClose)onClose();}}>
    <div className="ax-dialog" role="dialog" aria-modal="true" tabIndex={-1} ref={inner} style={{width,maxWidth:'calc(100% - 32px)'}} {...rest}>
      {tape&&<span className="ax-dialog__tape" aria-hidden="true"></span>}
      <div className="ax-dialog__head">
        <h2 className="ax-dialog__title">{title}</h2>
        <button type="button" className="ax-dialog__x" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div className="ax-dialog__body">{children}</div>
      {footer&&<div className="ax-dialog__foot">{footer}</div>}
    </div>
  </div>;
});
