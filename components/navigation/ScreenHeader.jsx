import React from 'react';
const css=`
.ax-screenhead__top{display:flex;align-items:center;gap:6px;margin-bottom:16px}
.ax-screenhead__back{width:44px;height:44px;margin:-8px 0 -8px -14px;display:flex;align-items:center;justify-content:center;border:none;padding:0;background:none;cursor:pointer;text-decoration:none;color:var(--sh-ink,var(--text-primary))}
.ax-screenhead__chev{display:inline-block;width:9px;height:9px;border-left:2px solid currentColor;border-bottom:2px solid currentColor;border-radius:1px;transform:rotate(45deg)}
.ax-screenhead__kicker{font-family:var(--font-label);font-size:var(--text-3xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--sh-muted,var(--text-secondary))}
.ax-screenhead__action{margin-left:auto}
.ax-screenhead__head{display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap}
.ax-screenhead__h1{margin:0;font-family:var(--font-title);font-weight:var(--weight-semibold);font-size:var(--text-xl);letter-spacing:.01em;text-transform:uppercase;color:var(--sh-ink,var(--text-primary))}
.ax-screenhead__note{margin:0 0 2px;font-family:var(--font-hand);font-size:var(--text-sm);line-height:1;white-space:nowrap;color:var(--sh-note,var(--brand-primary));transform:rotate(-2deg)}
.ax-screenhead__lede{margin:8px 0 0;font-size:var(--text-sm);line-height:var(--leading-normal);color:var(--sh-lede,var(--gray-700))}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-screenhead')){const s=document.createElement('style');s.id='ax-css-screenhead';s.textContent=css;document.head.appendChild(s);}
/* Header for a screen you arrive at from somewhere else: back control, the
   place you came from, the title in --font-title, and one handwritten aside.

   Every colour reads through an override with the default as its fallback, so
   the same header works on a coloured full-bleed band without anyone reaching
   into .ax-* from outside: set --sh-ink (chevron + title), --sh-muted
   (kicker), --sh-note or --sh-lede on any ancestor.

   `back` is {as, label, ...props}. `as` defaults to 'a', so `{href:'/me'}`
   works; pass your router's link as `as` and its own props alongside:
   back={{as: Link, to: '/me', label: 'Back to me'}}. The system does not
   depend on a router.

   The note is the margin voice — one short phrase, never a sentence, and
   never anything the screen cannot be read without. */
export function ScreenHeader({title,kicker,note,lede,action,back,className='',...rest}){
  const {as:Back='a',label:backLabel,...backProps}=back||{};
  return <div className={('ax-screenhead '+className).trim()} {...rest}>
    {(back||kicker||action)&&<div className="ax-screenhead__top">
      {back&&<Back className="ax-screenhead__back" aria-label={backLabel} {...backProps}>
        <span className="ax-screenhead__chev" aria-hidden="true" />
      </Back>}
      {kicker&&<span className="ax-screenhead__kicker">{kicker}</span>}
      {action&&<span className="ax-screenhead__action">{action}</span>}
    </div>}
    <div className="ax-screenhead__head">
      <h1 className="ax-screenhead__h1">{title}</h1>
      {note&&<p className="ax-screenhead__note">{note}</p>}
    </div>
    {lede&&<p className="ax-screenhead__lede">{lede}</p>}
  </div>;
}
