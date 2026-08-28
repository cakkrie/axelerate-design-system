import React from 'react';
const css=`
.ax-file{position:relative;display:flex;flex-direction:column;gap:10px;padding:22px 20px 24px;border-radius:4px 4px var(--radius-hand-sm) var(--radius-hand-sm);background:var(--fl-bg);color:var(--fl-fg);box-shadow:var(--shadow-hand);font-family:var(--font-body)}
.ax-file::before{content:'';position:absolute;left:0;top:-14px;width:46%;height:16px;background:var(--fl-bg);border-radius:6px 12px 0 0}
.ax-file__tab{position:absolute;left:15px;top:-10px;z-index:1;font-family:var(--font-label);font-weight:700;font-size:13px;letter-spacing:.05em;text-transform:uppercase;color:var(--fl-fg);line-height:14px}
.ax-file__h{margin:0;font-family:var(--font-display);font-weight:var(--weight-bold);font-size:21px;letter-spacing:var(--tracking-tight);line-height:1.1}
.ax-file__r{border:0;border-top:1.5px solid currentColor;opacity:.35;margin:2px 0 0}
.ax-file ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:7px}
.ax-file li{display:flex;gap:8px;font-size:13.5px;line-height:1.45}
.ax-file li::before{content:'✦';font-size:11px;line-height:1.6;opacity:.9}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-file')){const s=document.createElement('style');s.id='ax-css-file';s.textContent=css;document.head.appendChild(s);}
const ACC={violet:['var(--brand-primary)','#fff'],coral:['var(--accent-coral)','#fff'],orange:['var(--accent-orange)','var(--ink-900)'],pink:['var(--accent-pink)','#fff'],blush:['var(--accent-blush)','var(--ink-900)'],lavender:['var(--accent-lavender)','var(--ink-900)'],yellow:['var(--accent-yellow)','var(--ink-900)'],paper:['var(--gray-50)','var(--ink-900)'],ink:['var(--ink-900)','#fff']};
const BG=Object.fromEntries(Object.entries(ACC).map(([k,v])=>[k,v[0]]));
const FG=Object.fromEntries(Object.entries(ACC).map(([k,v])=>[k,v[1]]));
export function FileCard({tint='violet',tab,title,items,tilt=0,className='',style,children,...rest}){
  return <div className={('ax-file '+className).trim()} style={{'--fl-bg':BG[tint],'--fl-fg':FG[tint],transform:tilt?`rotate(${tilt}deg)`:undefined,...style}} {...rest}>
    {tab&&<span className="ax-file__tab">{tab}</span>}
    {title&&<h3 className="ax-file__h">{title}</h3>}
    {title&&<hr className="ax-file__r"/>}
    {items&&<ul>{items.map(i=><li key={i}>{i}</li>)}</ul>}
    {children}
  </div>;
}
