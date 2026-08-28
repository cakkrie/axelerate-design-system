import React from 'react';
const css=`
.ax-hatch{display:flex;flex-direction:column;gap:8px;font-family:var(--font-body);min-width:0}
.ax-hatch__top{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
.ax-hatch__k{font-size:13.5px;font-weight:var(--weight-medium);color:var(--text-primary)}
.ax-hatch__v{font-family:var(--font-hand);font-size:20px;font-weight:400;letter-spacing:0;color:var(--gray-700)}
.ax-hatch__row{display:flex;align-items:center;gap:var(--hb-gap);width:100%}
.ax-hatch__marks{display:flex;align-items:center;justify-content:space-between;gap:var(--hb-gap);flex:1;min-width:0}
.ax-hatch__m{width:var(--hb-w);height:var(--hb-h);border-radius:3px;background:var(--hb-off);flex:none}
.ax-hatch__m[data-on]{background:var(--hb-on)}
.ax-hatch__d{width:var(--hb-h);height:var(--hb-h);border-radius:56% 44% 52% 48%/48% 52% 44% 56%;background:var(--hb-off);flex:none}
.ax-hatch__d[data-on]{background:var(--hb-on)}
.ax-hatch__note{font-family:var(--font-hand);font-size:19px;color:var(--gray-600);transform:rotate(-1.5deg);margin-left:6px;white-space:nowrap}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-hatch')){const s=document.createElement('style');s.id='ax-css-hatch';s.textContent=css;document.head.appendChild(s);}
const C={violet:'var(--brand-primary)',coral:'var(--accent-coral)',orange:'var(--accent-orange)',pink:'var(--accent-pink)',blush:'var(--accent-blush)',lavender:'var(--accent-lavender)',yellow:'var(--butter-500)',ink:'var(--ink-900)'};
const TILT=[-14,-19,-12,-17,-15,-21,-13,-18,-16,-20];
const JIT=[0,1.5,-1,2,0,-1.5,1,-2,.5,-.5];
export function MarkerBar({value=0,total=100,ticks=22,shape='hatch',color='violet',label,figure,note,height=26,inverse=false,className='',style,...rest}){
  const pct=total?Math.max(0,Math.min(1,value/total)):0;
  const on=Math.round(pct*ticks);
  return <div className={('ax-hatch '+className).trim()}
    style={{'--hb-on':C[color],'--hb-off':inverse?'rgba(255,255,255,.22)':'var(--gray-200)','--hb-w':shape==='dot'?height*.5+'px':'4px','--hb-h':shape==='dot'?height*.5+'px':height+'px','--hb-gap':shape==='dot'?'7px':'6px',...style}} {...rest}>
    {(label||figure)&&<div className="ax-hatch__top">
      {label&&<span className="ax-hatch__k" style={inverse?{color:'var(--text-inverse)'}:undefined}>{label}</span>}
      {figure&&<span className="ax-hatch__v" style={inverse?{color:'rgba(255,255,255,.72)'}:undefined}>{figure}</span>}
    </div>}
    <div className="ax-hatch__row" role="img" aria-label={`${label||'value'}: ${value} of ${total}`}>
      <span className="ax-hatch__marks">
      {Array.from({length:ticks},(_,i)=><span key={i} className={shape==='dot'?'ax-hatch__d':'ax-hatch__m'} {...(i<on?{'data-on':''}:{})}
        style={shape==='dot'?{transform:`rotate(${TILT[i%TILT.length]}deg)`}
          :{transform:`rotate(${TILT[i%TILT.length]}deg) translateY(${JIT[i%JIT.length]*.6}px)`,height:height-Math.abs(JIT[i%JIT.length])}}></span>)}
      </span>
      {note&&<span className="ax-hatch__note" style={inverse?{color:'rgba(255,255,255,.72)'}:undefined}>{note}</span>}
    </div>
  </div>;
}
