import React from 'react';
const css=`
.ax-tally{display:inline-flex;align-items:flex-end;gap:13px;font-family:var(--font-body)}
.ax-tally__g{display:flex;align-items:flex-end;gap:5px}
.ax-tally__m{width:3px;background:var(--ty-color);border-radius:2px}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-tally')){const s=document.createElement('style');s.id='ax-css-tally';s.textContent=css;document.head.appendChild(s);}
const C={ink:'var(--ink-900)',violet:'var(--brand-primary)',coral:'var(--accent-coral)',orange:'var(--accent-orange)',pink:'var(--accent-pink)',blush:'var(--accent-blush)',lavender:'var(--accent-lavender)',yellow:'var(--butter-500)'};
const TILT=[-3,2,-1.5,3,-2,1.5,-2.5,2.5];
export function TallyCount({count=0,color='ink',height=34,label,className='',style,...rest}){
  const n=Math.max(0,Math.round(count));
  const groups=[];
  for(let i=0;i<n;i+=5)groups.push(Math.min(5,n-i));
  return <span className={('ax-tally '+className).trim()} role="img" aria-label={label||`${n} marks`}
    style={{'--ty-color':C[color],height,...style}} {...rest}>
    {groups.map((g,gi)=><span className="ax-tally__g" key={gi}>
      {Array.from({length:g},(_,i)=><span className="ax-tally__m" key={i}
        style={{height:height-Math.abs(TILT[(gi+i)%TILT.length])*1.4,transform:`rotate(${TILT[(gi+i)%TILT.length]}deg)`}}></span>)}
    </span>)}
  </span>;
}
