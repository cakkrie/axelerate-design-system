import React from 'react';
const css=`
.ax-bubble{position:relative;display:inline-block;max-width:38ch;padding:14px 18px;border-radius:20px 22px 19px 23px/22px 20px 23px 19px;background:var(--bb-bg);color:var(--bb-fg);font-family:var(--font-body);font-size:14.5px;line-height:1.5}
.ax-bubble__t{position:absolute;width:18px;height:14px;background:var(--bb-bg)}
.ax-bubble--bl .ax-bubble__t{left:22px;bottom:-9px;clip-path:polygon(0 0,100% 0,18% 100%)}
.ax-bubble--br .ax-bubble__t{right:22px;bottom:-9px;clip-path:polygon(0 0,100% 0,82% 100%)}
.ax-bubble--tl .ax-bubble__t{left:22px;top:-9px;clip-path:polygon(18% 0,100% 100%,0 100%)}
.ax-bubble--tr .ax-bubble__t{right:22px;top:-9px;clip-path:polygon(82% 0,100% 100%,0 100%)}
.ax-bubble__c{margin:0}
.ax-bubble__w{margin:8px 0 0;font-family:var(--font-label);font-weight:600;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;opacity:.85}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-bubble')){const s=document.createElement('style');s.id='ax-css-bubble';s.textContent=css;document.head.appendChild(s);}
const ACC={violet:['var(--brand-primary)','#fff'],coral:['var(--accent-coral)','#fff'],orange:['var(--accent-orange)','var(--ink-900)'],pink:['var(--accent-pink)','#fff'],blush:['var(--accent-blush)','var(--ink-900)'],lavender:['var(--accent-lavender)','var(--ink-900)'],yellow:['var(--accent-yellow)','var(--ink-900)'],paper:['var(--gray-50)','var(--ink-900)'],ink:['var(--ink-900)','#fff']};
const BG=Object.fromEntries(Object.entries(ACC).map(([k,v])=>[k,v[0]]));
const FG=Object.fromEntries(Object.entries(ACC).map(([k,v])=>[k,v[1]]));
export function Bubble({tone='paper',tail='bl',who,tilt=0,className='',style,children,...rest}){
  return <div className={('ax-bubble ax-bubble--'+tail+' '+className).trim()} style={{'--bb-bg':BG[tone],'--bb-fg':FG[tone],transform:tilt?`rotate(${tilt}deg)`:undefined,...style}} {...rest}>
    <p className="ax-bubble__c">{children}</p>
    {who&&<p className="ax-bubble__w">{who}</p>}
    <span className="ax-bubble__t" aria-hidden="true"></span>
  </div>;
}
