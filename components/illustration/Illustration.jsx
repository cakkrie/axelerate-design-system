import React from 'react';
const css=`
.ax-ill{position:relative;display:inline-flex;align-items:center;justify-content:center;flex:none}
.ax-ill__blob{position:absolute;inset:12% 10% 14% 14%;background:var(--il-blob);border-radius:58% 42% 52% 48%/48% 55% 45% 52%;transform:rotate(var(--il-tilt,-6deg))}
.ax-ill__art{position:relative;width:100%;height:100%;object-fit:contain}
.ax-ill__glyph{position:relative;width:64%;height:64%;background:var(--ink-900);-webkit-mask:var(--il-glyph) center/contain no-repeat;mask:var(--il-glyph) center/contain no-repeat}
.ax-ill__slot{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:100%;height:100%;border:2px dashed var(--pencil-line);border-radius:var(--radius-hand);background:transparent;text-align:center;padding:10px;box-sizing:border-box}
.ax-ill__slot b{font-family:var(--font-hand);font-size:20px;font-weight:600;color:var(--gray-600);line-height:1.1}
.ax-ill__slot i{font-style:normal;font-family:var(--font-label);font-size:9.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--gray-500)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-ill')){const s=document.createElement('style');s.id='ax-css-ill';s.textContent=css;document.head.appendChild(s);}
const SIZE={mini:96,spot:220,hero:520};
const BLOB={violet:'var(--violet-300)',lilac:'var(--tint-lilac)',pink:'var(--accent-pink-soft)',coral:'var(--accent-coral-soft)',yellow:'var(--accent-yellow-soft)',lime:'var(--accent-lime-soft)',cyan:'var(--accent-cyan-soft)',paper:'var(--gray-50)'};
export function Illustration({tier='mini',src,glyph,glyphBase='assets/icons',blob='lilac',tilt=-6,alt='',label,size,className='',style,...rest}){
  const d=size||SIZE[tier];
  const art=src?<img className="ax-ill__art" src={src} alt={alt}/>
    :glyph?<span className="ax-ill__glyph" role="img" aria-label={alt||glyph} style={{'--il-glyph':`url('${glyphBase}/${glyph}.svg')`}}></span>
    :<span className="ax-ill__slot"><b>{label||'illustration goes here'}</b><i>{tier}</i></span>;
  return <span className={('ax-ill '+className).trim()}
    style={{width:d,height:tier==='hero'?Math.round(d*0.6):d,'--il-blob':BLOB[blob]||blob,'--il-tilt':tilt+'deg',...style}} {...rest}>
    {blob&&(src||glyph)&&<span className="ax-ill__blob" aria-hidden="true"></span>}
    {art}
  </span>;
}
