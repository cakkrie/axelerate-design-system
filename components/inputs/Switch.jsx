import React from 'react';
const css=`
/* The control's ink is 25px tall (20 at sm); the label carries the 44px
   target around it, so the switch stays under the thumb of anyone who aims
   near it without the drawn part growing to meet the rule. */
.ax-switch{display:inline-flex;align-items:center;gap:11px;min-height:44px;font-family:var(--font-body);font-size:14.5px;font-weight:var(--weight-medium);color:var(--text-primary);cursor:pointer;position:relative}
.ax-switch--disabled{opacity:.45;cursor:not-allowed}
.ax-switch__input{position:absolute;opacity:0;width:0;height:0}
.ax-switch__track{width:46px;height:25px;border-radius:15px 17px 14px 18px/17px 14px 18px 15px;background:var(--surface-card);box-shadow:inset 0 0 0 2px var(--pencil-line);position:relative;flex:none;transition:background var(--dur-med) var(--ease-launch),box-shadow var(--dur-med)}
.ax-switch__thumb{position:absolute;top:-4px;left:-3px;width:29px;height:29px;border-radius:54% 46% 50% 50%/50% 52% 48% 50%;background:var(--ink-900);box-shadow:0 0 0 2.5px var(--gray-0),2px 3px 0 rgba(23,16,41,.2);transition:transform var(--dur-med) var(--ease-launch),background var(--dur-fast)}
/* sm: for a settings list, where a row of full-size switches reads as a row
   of buttons rather than a list of facts. The thumb keeps its overhang, so
   the hand-drawn proportions survive the reduction. */
.ax-switch--sm{gap:9px;font-size:13.5px}
.ax-switch--sm .ax-switch__track{width:36px;height:20px;border-radius:12px 14px 11px 15px/14px 11px 15px 12px}
.ax-switch--sm .ax-switch__thumb{top:-3px;left:-2px;width:23px;height:23px;box-shadow:0 0 0 2px var(--gray-0),2px 2px 0 rgba(23,16,41,.2)}
.ax-switch:hover:not(.ax-switch--disabled) .ax-switch__track{box-shadow:inset 0 0 0 2px var(--ink-900)}
.ax-switch__input:checked~.ax-switch__track{background:var(--brand-primary-soft);box-shadow:inset 0 0 0 2px var(--brand-primary)}
.ax-switch__input:checked~.ax-switch__track .ax-switch__thumb{transform:translateX(23px) rotate(14deg);background:var(--brand-primary)}
.ax-switch--sm .ax-switch__input:checked~.ax-switch__track .ax-switch__thumb{transform:translateX(17px) rotate(14deg)}
.ax-switch__input:focus-visible~.ax-switch__track{outline:2px solid var(--violet-500);outline-offset:3px}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-switch')){const s=document.createElement('style');s.id='ax-css-switch';s.textContent=css;document.head.appendChild(s);}
export function Switch({label,size='md',disabled=false,className='',style,...rest}){
  return <label className={('ax-switch'+(size==='sm'?' ax-switch--sm':'')+(disabled?' ax-switch--disabled':'')+' '+className).trim()} style={style}>
    <input type="checkbox" role="switch" className="ax-switch__input" disabled={disabled} {...rest}/>
    <span className="ax-switch__track" aria-hidden="true"><span className="ax-switch__thumb"></span></span>
    {label&&<span>{label}</span>}
  </label>;
}
