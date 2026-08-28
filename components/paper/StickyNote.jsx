import React from 'react';
const css=`
.ax-note{position:relative;display:flex;flex-direction:column;gap:6px;padding:18px 16px;background:var(--nt-bg);color:var(--ink-900);box-shadow:2px 3px 0 rgba(23,16,41,.10);font-family:var(--font-body);font-size:13.5px;line-height:1.45}
.ax-note--fold{clip-path:polygon(0 0,100% 0,100% 84%,84% 100%,0 100%)}
.ax-note__tape{position:absolute;left:50%;top:-9px;width:62px;height:18px;transform:translateX(-50%) rotate(-2deg);background:rgba(255,255,255,.55);box-shadow:inset 0 0 0 1px rgba(23,16,41,.06)}
.ax-note__h{font-family:var(--font-hand);font-size:22px;font-weight:600;line-height:1.1}
.ax-note__l{font-family:var(--font-label);font-weight:600;font-size:10px;letter-spacing:.07em;text-transform:uppercase;opacity:.55}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-note')){const s=document.createElement('style');s.id='ax-css-note';s.textContent=css;document.head.appendChild(s);}
const BG={yellow:'var(--butter-300)',lavender:'var(--accent-lavender-soft)',paper:'var(--gray-50)',blush:'var(--accent-blush-soft)',pink:'var(--accent-pink-soft)',coral:'var(--accent-coral-soft)'};
export function StickyNote({tint='yellow',tilt=0,tape=false,fold=true,heading,label,className='',style,children,...rest}){
  return <div className={('ax-note'+(fold?' ax-note--fold':'')+' '+className).trim()}
    style={{'--nt-bg':BG[tint],...(tilt?{transform:`rotate(${tilt}deg)`}:null),...style}} {...rest}>
    {tape&&<span className="ax-note__tape" aria-hidden="true"></span>}
    {label&&<span className="ax-note__l">{label}</span>}
    {heading&&<span className="ax-note__h">{heading}</span>}
    {children}
  </div>;
}
