import React from 'react';
const css=`
.ax-sticker{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:var(--st-pad);border-radius:var(--radius-pill);background:var(--st-bg);color:var(--st-fg);font-family:var(--font-display);font-weight:var(--weight-bold);font-size:13px;letter-spacing:-.01em;white-space:nowrap;box-shadow:0 0 0 3px var(--gray-0),3px 4px 0 rgba(23,16,41,.14)}
.ax-sticker--round{padding:0;width:var(--st-d);height:var(--st-d);border-radius:50%}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-sticker')){const s=document.createElement('style');s.id='ax-css-sticker';s.textContent=css;document.head.appendChild(s);}
const ACC={violet:['var(--brand-primary)','#fff'],coral:['var(--accent-coral)','#fff'],orange:['var(--accent-orange)','var(--ink-900)'],pink:['var(--accent-pink)','#fff'],blush:['var(--accent-blush)','var(--ink-900)'],lavender:['var(--accent-lavender)','var(--ink-900)'],yellow:['var(--accent-yellow)','var(--ink-900)'],paper:['var(--gray-50)','var(--ink-900)'],ink:['var(--ink-900)','#fff']};
const BG=Object.fromEntries(Object.entries(ACC).map(([k,v])=>[k,v[0]]));
const FG={...Object.fromEntries(Object.entries(ACC).map(([k,v])=>[k,v[1]])),ink:'var(--accent-yellow)'};
export function Sticker({tone='ink',round=false,size=44,tilt=0,className='',style,children,...rest}){
  return <span className={('ax-sticker'+(round?' ax-sticker--round':'')+' '+className).trim()}
    style={{'--st-bg':BG[tone],'--st-fg':FG[tone],'--st-pad':'7px 13px','--st-d':size+'px',...(tilt?{transform:`rotate(${tilt}deg)`}:null),...style}} {...rest}>{children}</span>;
}
