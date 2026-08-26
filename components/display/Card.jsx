import React from 'react';
const css=`
.ax-card{position:relative;font-family:var(--font-body);border-radius:var(--radius-hand);transition:transform var(--dur-med) var(--ease-launch),box-shadow var(--dur-med) var(--ease-launch)}
.ax-card--sheet{background:var(--surface-card);box-shadow:var(--shadow-paper)}
.ax-card--quiet{background:var(--surface-quiet);box-shadow:var(--shadow-paper)}
.ax-card--tint{background:var(--cd-tint);color:var(--cd-fg);box-shadow:var(--shadow-paper)}
.ax-card--ink{background:var(--surface-inverse);color:var(--text-inverse);box-shadow:var(--shadow-paper)}
.ax-card--sketch{background:transparent;border:2px dashed var(--pencil-line);box-shadow:none}
.ax-card--tall{box-shadow:var(--shadow-paper-lg)}
.ax-card--interactive{cursor:pointer}
.ax-card--interactive:hover{background-image:linear-gradient(color-mix(in srgb,var(--ink-900) 5%,transparent),color-mix(in srgb,var(--ink-900) 5%,transparent));box-shadow:var(--shadow-paper-lg)}
.ax-card--ink.ax-card--interactive:hover{background-image:linear-gradient(rgba(255,255,255,.08),rgba(255,255,255,.08))}
.ax-card--pad-none{padding:0}.ax-card--pad-sm{padding:16px}.ax-card--pad-md{padding:24px}.ax-card--pad-lg{padding:32px}
.ax-card__punch{position:absolute;top:11px;left:18px;display:flex;gap:14px}
.ax-card__punch span{width:13px;height:13px;border-radius:50%;background:var(--surface-quiet);box-shadow:inset 0 0 0 1.5px rgba(23,16,41,.22),inset 2px 2px 0 rgba(23,16,41,.10)}
.ax-card--punched.ax-card--pad-sm{padding-top:34px}.ax-card--punched.ax-card--pad-md{padding-top:42px}.ax-card--punched.ax-card--pad-lg{padding-top:50px}
.ax-card__num{position:absolute;top:-6px;right:16px;z-index:2;font-family:var(--font-display);font-size:24px;font-weight:var(--weight-extrabold);letter-spacing:-.03em;line-height:1;color:var(--cd-num,var(--violet-700));transform:rotate(-5deg)}
.ax-card__rule{border:0;border-top:2px solid currentColor;opacity:.28;margin:12px 0}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-card')){const s=document.createElement('style');s.id='ax-css-card';s.textContent=css;document.head.appendChild(s);}
const ACC={violet:['var(--brand-primary)','#fff'],pink:['var(--accent-pink)','#fff'],coral:['var(--accent-coral)','#fff'],orange:['var(--accent-orange)','var(--ink-900)'],yellow:['var(--accent-yellow)','var(--ink-900)'],lime:['var(--accent-lime)','var(--ink-900)'],teal:['var(--accent-teal)','var(--ink-900)'],cyan:['var(--accent-cyan)','var(--ink-900)'],navy:['var(--accent-navy)','#fff'],lilac:['var(--tint-lilac)','var(--ink-900)'],paper:['var(--gray-50)','var(--ink-900)'],ink:['var(--ink-900)','#fff']};
const TINT=ACC;
const ALIAS={default:'sheet',elevated:'tall',outline:'sketch',inverse:'ink',paper:'quiet'};
export function Card({variant='sheet',padding='md',tint,tilt=0,punch=false,scribble,interactive=false,className='',style,children,...rest}){
  const v=ALIAS[variant]||variant;
  const t=tint&&TINT[tint];
  const cls=['ax-card','ax-card--'+(t&&v!=='ink'&&v!=='sketch'?'tint':v),v==='tall'?'ax-card--tall':'','ax-card--pad-'+padding,punch?'ax-card--punched':'',interactive?'ax-card--interactive':'',className].filter(Boolean).join(' ');
  return <div className={cls} style={{...(t?{'--cd-tint':t[0],'--cd-fg':t[1]}:null),...(tilt?{transform:`rotate(${tilt}deg)`}:null),...style}} {...rest}>
    {punch&&<span className="ax-card__punch" aria-hidden="true"><span></span><span></span></span>}
    {scribble&&<span className="ax-card__num" style={t?{'--cd-num':t[1]}:undefined}>{scribble}</span>}
    {children}
  </div>;
}
