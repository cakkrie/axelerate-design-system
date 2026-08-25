import React from 'react';
const css=`
.ax-tabs{display:flex;align-items:flex-end;font-family:var(--font-body)}
.ax-tabs--folder{gap:4px;position:relative;border-bottom:3px solid var(--brand-primary)}
.ax-tabs--folder .ax-tab{border:none;background:var(--surface-card);color:var(--gray-600);padding:9px 18px 8px;border-radius:10px 13px 0 0;font-family:var(--font-display);font-weight:var(--weight-bold);font-size:14px;letter-spacing:-.01em;cursor:pointer;position:relative;top:2px;transition:background var(--dur-fast),color var(--dur-fast),top var(--dur-fast) var(--ease-launch)}
.ax-tabs--folder .ax-tab:hover{top:0;color:var(--text-primary)}
.ax-tabs--folder .ax-tab--active{background:var(--brand-primary);color:#fff;top:0;padding-bottom:11px}
.ax-tabs--underline{gap:22px;border-bottom:1px solid var(--border-subtle)}
.ax-tabs--underline .ax-tab{border:none;background:none;padding:10px 2px;margin-bottom:-1px;font:inherit;font-size:14px;font-weight:var(--weight-medium);color:var(--text-secondary);cursor:pointer;border-bottom:2px solid transparent;transition:color var(--dur-fast),border-color var(--dur-fast)}
.ax-tabs--underline .ax-tab:hover{color:var(--text-primary)}
.ax-tabs--underline .ax-tab--active{color:var(--text-brand);font-weight:var(--weight-semibold);border-bottom-color:var(--brand-primary)}
.ax-tabs--pill{gap:4px;padding:4px;background:var(--surface-quiet);border-radius:var(--radius-pill);width:max-content}
.ax-tabs--pill .ax-tab{border:none;background:none;padding:6px 14px;border-radius:var(--radius-pill);font:inherit;font-size:14px;font-weight:var(--weight-medium);color:var(--gray-700);cursor:pointer;transition:background var(--dur-fast),color var(--dur-fast),box-shadow var(--dur-med) var(--ease-launch)}
.ax-tabs--pill .ax-tab:hover{color:var(--text-primary)}
.ax-tabs--pill .ax-tab--active{background:var(--brand-primary);color:#fff;font-weight:var(--weight-semibold);box-shadow:var(--shadow-paper)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-tabs')){const s=document.createElement('style');s.id='ax-css-tabs';s.textContent=css;document.head.appendChild(s);}
export function Tabs({items=[],value,onChange,variant='folder',className='',...rest}){
  const norm=items.map(it=>typeof it==='string'?{id:it,label:it}:it);
  return <div className={('ax-tabs ax-tabs--'+variant+' '+className).trim()} role="tablist" {...rest}>
    {norm.map(item=><button key={item.id} type="button" role="tab" aria-selected={value===item.id}
      className={'ax-tab'+(value===item.id?' ax-tab--active':'')}
      onClick={()=>onChange&&onChange(item.id)}>{item.label}</button>)}
  </div>;
}
