import React from 'react';
const css=`
.ax-appbar{display:flex;align-items:center;gap:10px;font-family:var(--font-body)}
.ax-appbar__wordmark{font-family:var(--font-display);font-weight:var(--weight-extrabold);font-size:var(--text-xl);letter-spacing:-.04em;color:var(--brand-primary);text-decoration:none}
.ax-appbar__spacer{flex:1}
.ax-appbar__action{width:44px;height:44px;margin:-8px -6px -8px 0;display:flex;align-items:center;justify-content:center;border:none;padding:0;cursor:pointer;background:none;color:var(--text-primary);text-decoration:none}
.ax-appbar__avatar{width:44px;height:44px;flex:none;display:flex;align-items:center;justify-content:center;text-decoration:none}
.ax-appbar__avatar>*{width:36px;height:36px;border-radius:50%;overflow:hidden;box-shadow:var(--sticker-cut),var(--shadow-paper)}`;
if(typeof document!=='undefined'&&!document.getElementById('ax-css-appbar')){const s=document.createElement('style');s.id='ax-css-appbar';s.textContent=css;document.head.appendChild(s);}
/* The row at the top of a top-level screen: wordmark left, controls right.
   Controls are yours to render — this system does not own your icon set or
   your router. Put `ax-appbar__action` on a button and `ax-appbar__avatar` on
   the profile link: both are 44px targets whose visible ink is smaller, with
   negative margins so the row still measures as if the ink were the button. */
export function AppBar({wordmark,as:As='header',className='',children,...rest}){
  return <As className={('ax-appbar '+className).trim()} {...rest}>
    {wordmark&&(typeof wordmark==='string'?<span className="ax-appbar__wordmark">{wordmark}</span>:wordmark)}
    <span className="ax-appbar__spacer" />
    {children}
  </As>;
}
