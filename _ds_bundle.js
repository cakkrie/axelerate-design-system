/* @ds-bundle: {"format":4,"namespace":"AxelerateDesignSystem_edbc1f","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"MarkerBar","sourcePath":"components/data/MarkerBar.jsx"},{"name":"StatBlock","sourcePath":"components/data/StatBlock.jsx"},{"name":"TallyCount","sourcePath":"components/data/TallyCount.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Illustration","sourcePath":"components/illustration/Illustration.jsx"},{"name":"Checkbox","sourcePath":"components/inputs/Checkbox.jsx"},{"name":"Input","sourcePath":"components/inputs/Input.jsx"},{"name":"Radio","sourcePath":"components/inputs/Radio.jsx"},{"name":"Select","sourcePath":"components/inputs/Select.jsx"},{"name":"Switch","sourcePath":"components/inputs/Switch.jsx"},{"name":"AppBar","sourcePath":"components/navigation/AppBar.jsx"},{"name":"ScreenHeader","sourcePath":"components/navigation/ScreenHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Bubble","sourcePath":"components/paper/Bubble.jsx"},{"name":"FileCard","sourcePath":"components/paper/FileCard.jsx"},{"name":"Sticker","sourcePath":"components/paper/Sticker.jsx"},{"name":"StickyNote","sourcePath":"components/paper/StickyNote.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b135d464f691","components/actions/IconButton.jsx":"d4ae3b90f2d9","components/data/MarkerBar.jsx":"14c2ce85aba2","components/data/StatBlock.jsx":"b99707712fa1","components/data/TallyCount.jsx":"55b4e5933abb","components/display/Badge.jsx":"7ec264b3221b","components/display/Card.jsx":"4b9f1ae0015f","components/display/Tag.jsx":"1a3043bd947c","components/feedback/Dialog.jsx":"d9bafef617e7","components/feedback/Toast.jsx":"884d75456818","components/feedback/Tooltip.jsx":"069949548838","components/illustration/Illustration.jsx":"061779e30331","components/inputs/Checkbox.jsx":"a90df4f83829","components/inputs/Input.jsx":"89596625da39","components/inputs/Radio.jsx":"20d75c2db055","components/inputs/Select.jsx":"03afb8d8b115","components/inputs/Switch.jsx":"4a1146c43d65","components/navigation/AppBar.jsx":"12a25a1f8776","components/navigation/ScreenHeader.jsx":"aa9f357ee71f","components/navigation/Tabs.jsx":"043f34a9ac44","components/paper/Bubble.jsx":"0bfb1225baf7","components/paper/FileCard.jsx":"fbc0a933d930","components/paper/Sticker.jsx":"dc530d5eef0b","components/paper/StickyNote.jsx":"1c58160d4f4a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AxelerateDesignSystem_edbc1f = window.AxelerateDesignSystem_edbc1f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;border-radius:var(--radius-btn);font-family:var(--font-display);font-weight:var(--weight-bold);letter-spacing:0;cursor:pointer;white-space:nowrap;text-decoration:none;transition:transform var(--dur-fast) var(--ease-launch),box-shadow var(--dur-med) var(--ease-launch),background var(--dur-fast) var(--ease-launch),color var(--dur-fast)}
.ax-btn:active:not(:disabled){transform:scale(.97)}
.ax-btn:disabled{opacity:.45;cursor:not-allowed}
.ax-btn--sm{height:32px;padding:0 14px;font-size:13.5px}
.ax-btn--md{height:44px;padding:0 18px;font-size:14.5px}
.ax-btn--lg{height:48px;padding:0 24px;font-size:16.5px}
.ax-btn--primary{background:var(--brand-primary);color:var(--text-on-brand);box-shadow:var(--sticker-cut),var(--shadow-paper)}
.ax-btn--primary:hover:not(:disabled){background:var(--brand-primary-strong);color:var(--text-on-brand);box-shadow:var(--sticker-cut),var(--shadow-paper-lg)}
.ax-btn--yellow{background:var(--brand-accent);color:var(--text-on-accent);box-shadow:var(--sticker-cut),var(--shadow-paper)}
.ax-btn--yellow:hover:not(:disabled){background:var(--brand-accent-strong);color:var(--text-on-accent);box-shadow:var(--sticker-cut),var(--shadow-paper-lg)}
.ax-btn--secondary{background:var(--surface-card);color:var(--text-primary);box-shadow:var(--sticker-cut),0 0 0 4px var(--gray-300),var(--shadow-paper)}
.ax-btn--secondary:hover:not(:disabled){color:var(--text-brand);box-shadow:var(--sticker-cut),0 0 0 4px var(--violet-400),var(--shadow-paper-lg)}
.ax-btn--ghost{background:transparent;color:var(--text-brand);padding-bottom:2px}
.ax-btn--ghost:hover:not(:disabled){color:var(--text-brand);background:var(--scribble-butter) no-repeat left 92%/100% 7px}
.ax-btn--full{width:100%}
.ax-btn svg,.ax-btn .ax-icon{width:1.1em;height:1.1em;flex:none}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-button')) {
  const s = document.createElement('style');
  s.id = 'ax-css-button';
  s.textContent = css;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ax-btn', 'ax-btn--' + variant, 'ax-btn--' + size, fullWidth ? 'ax-btn--full' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-iconbtn{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:var(--radius-pill);background:transparent;color:var(--gray-600);cursor:pointer;flex:none;transition:transform var(--dur-fast) var(--ease-launch),background var(--dur-fast),color var(--dur-fast),box-shadow var(--dur-med) var(--ease-launch)}
.ax-iconbtn:active:not(:disabled){transform:scale(.94)}
.ax-iconbtn:disabled{opacity:.45;cursor:not-allowed}
.ax-iconbtn--sm{width:28px;height:28px}.ax-iconbtn--sm svg,.ax-iconbtn--sm .ax-icon{width:15px;height:15px}
.ax-iconbtn--md{width:44px;height:44px}.ax-iconbtn--md svg,.ax-iconbtn--md .ax-icon{width:18px;height:18px}
.ax-iconbtn--lg{width:48px;height:48px}.ax-iconbtn--lg svg,.ax-iconbtn--lg .ax-icon{width:22px;height:22px}
.ax-iconbtn--ghost:hover:not(:disabled){background:var(--surface-quiet);color:var(--text-primary)}
.ax-iconbtn--secondary{background:var(--surface-card);box-shadow:var(--sticker-cut),0 0 0 4px var(--gray-300),var(--shadow-paper)}
.ax-iconbtn--secondary:hover:not(:disabled){color:var(--text-brand);box-shadow:var(--sticker-cut),0 0 0 4px var(--violet-400),var(--shadow-paper-lg)}
.ax-iconbtn--primary{background:var(--brand-primary);color:var(--text-on-brand);box-shadow:var(--sticker-cut),var(--shadow-paper)}
.ax-iconbtn--primary:hover:not(:disabled){background:var(--brand-primary-strong);color:var(--text-on-brand);box-shadow:var(--sticker-cut),var(--shadow-paper-lg)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-iconbutton')) {
  const s = document.createElement('style');
  s.id = 'ax-css-iconbutton';
  s.textContent = css;
  document.head.appendChild(s);
}
function IconButton({
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ax-iconbtn', 'ax-iconbtn--' + variant, 'ax-iconbtn--' + size, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/MarkerBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
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
if (typeof document !== 'undefined' && !document.getElementById('ax-css-hatch')) {
  const s = document.createElement('style');
  s.id = 'ax-css-hatch';
  s.textContent = css;
  document.head.appendChild(s);
}
const C = {
  violet: 'var(--brand-primary)',
  pink: 'var(--accent-pink)',
  coral: 'var(--accent-coral)',
  orange: 'var(--accent-orange)',
  yellow: 'var(--butter-500)',
  lime: 'var(--accent-lime)',
  teal: 'var(--accent-teal)',
  cyan: 'var(--accent-cyan)',
  navy: 'var(--accent-navy)',
  lilac: 'var(--tint-lilac)',
  ink: 'var(--ink-900)'
};
const TILT = [-14, -19, -12, -17, -15, -21, -13, -18, -16, -20];
const JIT = [0, 1.5, -1, 2, 0, -1.5, 1, -2, .5, -.5];
function MarkerBar({
  value = 0,
  total = 100,
  ticks = 22,
  shape = 'hatch',
  color = 'violet',
  label,
  figure,
  note,
  height = 26,
  inverse = false,
  className = '',
  style,
  ...rest
}) {
  const pct = total ? Math.max(0, Math.min(1, value / total)) : 0;
  const on = Math.round(pct * ticks);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('ax-hatch ' + className).trim(),
    style: {
      '--hb-on': C[color],
      '--hb-off': inverse ? 'rgba(255,255,255,.22)' : 'var(--gray-200)',
      '--hb-w': shape === 'dot' ? height * .5 + 'px' : '4px',
      '--hb-h': shape === 'dot' ? height * .5 + 'px' : height + 'px',
      '--hb-gap': shape === 'dot' ? '7px' : '6px',
      ...style
    }
  }, rest), (label || figure) && /*#__PURE__*/React.createElement("div", {
    className: "ax-hatch__top"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ax-hatch__k",
    style: inverse ? {
      color: 'var(--text-inverse)'
    } : undefined
  }, label), figure && /*#__PURE__*/React.createElement("span", {
    className: "ax-hatch__v",
    style: inverse ? {
      color: 'rgba(255,255,255,.72)'
    } : undefined
  }, figure)), /*#__PURE__*/React.createElement("div", {
    className: "ax-hatch__row",
    role: "img",
    "aria-label": `${label || 'value'}: ${value} of ${total}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "ax-hatch__marks"
  }, Array.from({
    length: ticks
  }, (_, i) => /*#__PURE__*/React.createElement("span", _extends({
    key: i,
    className: shape === 'dot' ? 'ax-hatch__d' : 'ax-hatch__m'
  }, i < on ? {
    'data-on': ''
  } : {}, {
    style: shape === 'dot' ? {
      transform: `rotate(${TILT[i % TILT.length]}deg)`
    } : {
      transform: `rotate(${TILT[i % TILT.length]}deg) translateY(${JIT[i % JIT.length] * .6}px)`,
      height: height - Math.abs(JIT[i % JIT.length])
    }
  })))), note && /*#__PURE__*/React.createElement("span", {
    className: "ax-hatch__note",
    style: inverse ? {
      color: 'rgba(255,255,255,.72)'
    } : undefined
  }, note)));
}
Object.assign(__ds_scope, { MarkerBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MarkerBar.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-stat{display:flex;flex-direction:column;gap:8px;min-width:0}
.ax-stat__n{font-family:var(--font-display);font-weight:var(--weight-extrabold);font-size:38px;letter-spacing:var(--tracking-tighter);line-height:1;color:var(--text-primary)}
.ax-stat__l{font-family:var(--font-label);font-size:11px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--gray-600)}
.ax-stat__note{font-family:var(--font-hand);font-size:15px;color:var(--gray-600)}
.ax-stat--inverse .ax-stat__n{color:var(--text-inverse)}
.ax-stat--inverse .ax-stat__l,.ax-stat--inverse .ax-stat__note{color:rgba(255,255,255,.72)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-stat')) {
  const s = document.createElement('style');
  s.id = 'ax-css-stat';
  s.textContent = css;
  document.head.appendChild(s);
}
function StatBlock({
  figure,
  label,
  note,
  inverse = false,
  className = '',
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('ax-stat' + (inverse ? ' ax-stat--inverse' : '') + ' ' + className).trim(),
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ax-stat__n"
  }, figure), children, label && /*#__PURE__*/React.createElement("span", {
    className: "ax-stat__l"
  }, label), note && /*#__PURE__*/React.createElement("span", {
    className: "ax-stat__note"
  }, note));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/data/TallyCount.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-tally{display:inline-flex;align-items:flex-end;gap:13px;font-family:var(--font-body)}
.ax-tally__g{display:flex;align-items:flex-end;gap:5px}
.ax-tally__m{width:3px;background:var(--ty-color);border-radius:2px}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-tally')) {
  const s = document.createElement('style');
  s.id = 'ax-css-tally';
  s.textContent = css;
  document.head.appendChild(s);
}
const C = {
  ink: 'var(--ink-900)',
  violet: 'var(--brand-primary)',
  pink: 'var(--accent-pink)',
  coral: 'var(--accent-coral)',
  orange: 'var(--accent-orange)',
  yellow: 'var(--butter-500)',
  lime: 'var(--accent-lime)',
  teal: 'var(--accent-teal)',
  cyan: 'var(--accent-cyan)',
  navy: 'var(--accent-navy)'
};
const TILT = [-3, 2, -1.5, 3, -2, 1.5, -2.5, 2.5];
function TallyCount({
  count = 0,
  color = 'ink',
  height = 34,
  label,
  className = '',
  style,
  ...rest
}) {
  const n = Math.max(0, Math.round(count));
  const groups = [];
  for (let i = 0; i < n; i += 5) groups.push(Math.min(5, n - i));
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ('ax-tally ' + className).trim(),
    role: "img",
    "aria-label": label || `${n} marks`,
    style: {
      '--ty-color': C[color],
      height,
      ...style
    }
  }, rest), groups.map((g, gi) => /*#__PURE__*/React.createElement("span", {
    className: "ax-tally__g",
    key: gi
  }, Array.from({
    length: g
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    className: "ax-tally__m",
    key: i,
    style: {
      height: height - Math.abs(TILT[(gi + i) % TILT.length]) * 1.4,
      transform: `rotate(${TILT[(gi + i) % TILT.length]}deg)`
    }
  })))));
}
Object.assign(__ds_scope, { TallyCount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TallyCount.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-badge{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 11px;border-radius:var(--radius-pill);font-family:var(--font-display);font-size:12px;font-weight:var(--weight-bold);letter-spacing:0;white-space:nowrap;box-shadow:2px 2px 0 rgba(23,16,41,.14)}
.ax-badge--brand{background:var(--brand-primary);color:#fff}

.ax-badge--success{background:var(--success-bg);color:var(--success-fg)}
.ax-badge--warning{background:var(--warning-bg);color:var(--warning-fg)}
.ax-badge--danger{background:var(--danger-bg);color:var(--danger-fg)}
.ax-badge--neutral{background:var(--surface-quiet);color:var(--gray-700)}
.ax-badge--pink{background:var(--accent-pink);color:#fff}
.ax-badge--coral{background:var(--accent-coral);color:#fff}
.ax-badge--orange{background:var(--accent-orange);color:var(--ink-900)}
.ax-badge--yellow{background:var(--accent-yellow);color:var(--ink-900)}
.ax-badge--lime{background:var(--accent-lime);color:var(--ink-900)}
.ax-badge--teal{background:var(--accent-teal);color:var(--ink-900)}
.ax-badge--cyan{background:var(--accent-cyan);color:var(--ink-900)}
.ax-badge--navy{background:var(--accent-navy);color:#fff}
.ax-badge--lilac{background:var(--tint-lilac);color:var(--ink-900)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-badge')) {
  const s = document.createElement('style');
  s.id = 'ax-css-badge';
  s.textContent = css;
  document.head.appendChild(s);
}
function Badge({
  tone = 'brand',
  tilt,
  className = '',
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ('ax-badge ax-badge--' + tone + ' ' + className).trim(),
    style: tilt ? {
      transform: `rotate(${tilt}deg)`,
      ...style
    } : style
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-card{position:relative;font-family:var(--font-body);border-radius:var(--radius-hand);transition:transform var(--dur-med) var(--ease-launch),box-shadow var(--dur-med) var(--ease-launch)}
.ax-card--sheet{background:var(--surface-card);box-shadow:var(--shadow-paper)}
.ax-card--quiet{background:var(--surface-quiet);box-shadow:var(--shadow-paper)}
.ax-card--tint{background:var(--cd-tint);color:var(--cd-fg);box-shadow:var(--shadow-paper)}
.ax-card--ink{background:var(--surface-inverse);color:var(--text-inverse);box-shadow:var(--shadow-paper)}
.ax-card--sketch{background:transparent;border:2px dashed var(--pencil-line);box-shadow:none}
.ax-card--flat{background:var(--surface-card);box-shadow:none}
.ax-card--tall{box-shadow:var(--shadow-paper-lg)}
.ax-card--interactive{cursor:pointer}
.ax-card--interactive:hover{box-shadow:var(--shadow-paper-lg)}
.ax-card--wash:hover{background-image:linear-gradient(color-mix(in srgb,var(--ink-900) 5%,transparent),color-mix(in srgb,var(--ink-900) 5%,transparent))}
.ax-card--ink.ax-card--wash:hover{background-image:linear-gradient(rgba(255,255,255,.08),rgba(255,255,255,.08))}
@media (prefers-reduced-motion:reduce){.ax-card{transition:none}}
.ax-card--pad-none{padding:0}.ax-card--pad-sm{padding:16px}.ax-card--pad-md{padding:24px}.ax-card--pad-lg{padding:32px}
.ax-card__punch{position:absolute;top:11px;left:18px;display:flex;gap:14px}
.ax-card__punch span{width:13px;height:13px;border-radius:50%;background:var(--surface-quiet);box-shadow:inset 0 0 0 1.5px rgba(23,16,41,.22),inset 2px 2px 0 rgba(23,16,41,.10)}
.ax-card--punched.ax-card--pad-sm{padding-top:34px}.ax-card--punched.ax-card--pad-md{padding-top:42px}.ax-card--punched.ax-card--pad-lg{padding-top:50px}
.ax-card__num{position:absolute;top:-6px;right:16px;z-index:2;font-family:var(--font-display);font-size:24px;font-weight:var(--weight-extrabold);letter-spacing:-.03em;line-height:1;color:var(--cd-num,var(--violet-700));transform:rotate(-5deg)}
.ax-card__rule{border:0;border-top:2px solid currentColor;opacity:.28;margin:12px 0}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-card')) {
  const s = document.createElement('style');
  s.id = 'ax-css-card';
  s.textContent = css;
  document.head.appendChild(s);
}
const ACC = {
  violet: ['var(--brand-primary)', '#fff'],
  pink: ['var(--accent-pink)', '#fff'],
  coral: ['var(--accent-coral)', '#fff'],
  orange: ['var(--accent-orange)', 'var(--ink-900)'],
  yellow: ['var(--accent-yellow)', 'var(--ink-900)'],
  lime: ['var(--accent-lime)', 'var(--ink-900)'],
  teal: ['var(--accent-teal)', 'var(--ink-900)'],
  cyan: ['var(--accent-cyan)', 'var(--ink-900)'],
  navy: ['var(--accent-navy)', '#fff'],
  lilac: ['var(--tint-lilac)', 'var(--ink-900)'],
  paper: ['var(--gray-50)', 'var(--ink-900)'],
  ink: ['var(--ink-900)', '#fff']
};
const TINT = ACC;
const ALIAS = {
  default: 'sheet',
  elevated: 'tall',
  outline: 'sketch',
  inverse: 'ink',
  paper: 'quiet'
};
function Card({
  variant = 'sheet',
  padding = 'md',
  tint,
  tilt = 0,
  punch = false,
  scribble,
  interactive = false,
  className = '',
  style,
  children,
  ...rest
}) {
  const v = ALIAS[variant] || variant;
  const t = tint && TINT[tint];
  const cls = ['ax-card', 'ax-card--' + (t && v !== 'ink' && v !== 'sketch' ? 'tint' : v), v === 'tall' ? 'ax-card--tall' : '', 'ax-card--pad-' + padding, punch ? 'ax-card--punched' : '', interactive ? 'ax-card--interactive' : '', interactive === true ? 'ax-card--wash' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      ...(t ? {
        '--cd-tint': t[0],
        '--cd-fg': t[1]
      } : null),
      ...(tilt ? {
        transform: `rotate(${tilt}deg)`
      } : null),
      ...style
    }
  }, rest), punch && /*#__PURE__*/React.createElement("span", {
    className: "ax-card__punch",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), scribble && /*#__PURE__*/React.createElement("span", {
    className: "ax-card__num",
    style: t ? {
      '--cd-num': t[1]
    } : undefined
  }, scribble), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-tag{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 12px;border:none;border-radius:var(--radius-hand-sm);background:var(--tg-bg,var(--ink-900));font-family:var(--font-body);font-size:13px;font-weight:var(--weight-semibold);color:var(--tg-fg,#fff);white-space:nowrap;box-shadow:2px 2px 0 rgba(23,16,41,.10)}
.ax-tag--selected{background:var(--brand-primary);color:#fff}
.ax-tag__x{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;margin-right:-4px;border:none;border-radius:50%;background:transparent;color:currentColor;opacity:.6;font-size:13px;line-height:1;cursor:pointer;padding:0}
.ax-tag__x:hover{opacity:1}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-tag')) {
  const s = document.createElement('style');
  s.id = 'ax-css-tag';
  s.textContent = css;
  document.head.appendChild(s);
}
const SOLID = {
  pink: ['var(--accent-pink)', '#fff'],
  coral: ['var(--accent-coral)', '#fff'],
  orange: ['var(--accent-orange)', 'var(--ink-900)'],
  yellow: ['var(--accent-yellow)', 'var(--ink-900)'],
  lime: ['var(--accent-lime)', 'var(--ink-900)'],
  teal: ['var(--accent-teal)', 'var(--ink-900)'],
  cyan: ['var(--accent-cyan)', 'var(--ink-900)'],
  navy: ['var(--accent-navy)', '#fff'],
  lilac: ['var(--tint-lilac)', 'var(--ink-900)'],
  ink: ['var(--ink-900)', '#fff']
};
const SOFT = {
  pink: ['var(--accent-pink-soft)', '#A31257'],
  coral: ['var(--accent-coral-soft)', '#A8371E'],
  orange: ['var(--accent-orange-soft)', '#8F4C00'],
  yellow: ['var(--accent-yellow-soft)', '#8A6300'],
  lime: ['var(--accent-lime-soft)', '#4F6D0E'],
  teal: ['var(--accent-teal-soft)', '#0B6E6E'],
  cyan: ['var(--accent-cyan-soft)', '#106A85'],
  navy: ['var(--accent-navy-soft)', 'var(--accent-navy)'],
  lilac: ['var(--tint-lilac-soft)', 'var(--violet-800)'],
  ink: ['var(--surface-quiet)', 'var(--gray-700)']
};
function Tag({
  tone = 'ink',
  soft = false,
  selected = false,
  onRemove,
  className = '',
  style,
  children,
  ...rest
}) {
  const t = (soft || onRemove ? SOFT : SOLID)[tone] || SOLID.ink;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ('ax-tag' + (selected ? ' ax-tag--selected' : '') + ' ' + className).trim(),
    style: {
      '--tg-bg': t[0],
      '--tg-fg': t[1],
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ax-tag__x",
    "aria-label": "Remove",
    onClick: onRemove
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-dialog-overlay{position:fixed;inset:0;background:var(--overlay);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;z-index:100;animation:axFade var(--dur-med) var(--ease-launch)}
.ax-dialog{position:relative;background:var(--surface-card);border-radius:var(--radius-hand-lg);box-shadow:var(--shadow-paper-lg);display:flex;flex-direction:column;max-height:calc(100% - 48px);animation:axPop var(--dur-med) var(--ease-launch)}
.ax-dialog__tape{position:absolute;left:50%;top:-11px;width:104px;height:22px;transform:translateX(-50%) rotate(-1.5deg);background:rgba(246,222,124,.72);box-shadow:inset 0 0 0 1px rgba(23,16,41,.07)}
.ax-dialog__head{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:26px 24px 0}
.ax-dialog__title{margin:0;font-family:var(--font-display);font-size:20px;font-weight:var(--weight-bold);letter-spacing:var(--tracking-tight);color:var(--text-primary)}
.ax-dialog__x{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border:none;border-radius:50%;background:transparent;color:var(--gray-500);cursor:pointer;flex:none;transition:background var(--dur-fast),color var(--dur-fast)}
.ax-dialog__x:hover{background:var(--surface-quiet);color:var(--text-primary)}
.ax-dialog__body{padding:14px 24px 20px;overflow:auto;font-size:14px;line-height:var(--leading-normal);color:var(--text-secondary)}
.ax-dialog__foot{display:flex;justify-content:flex-end;gap:10px;padding:16px 24px 20px;background:var(--surface-quiet);border-radius:var(--radius-hand-lg);border-top-left-radius:0;border-top-right-radius:0}
@keyframes axPop{from{transform:scale(.95) translateY(8px);opacity:0}}
@keyframes axFade{from{opacity:0}}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-dialog')) {
  const s = document.createElement('style');
  s.id = 'ax-css-dialog';
  s.textContent = css;
  document.head.appendChild(s);
}
function Dialog({
  open = false,
  onClose,
  title,
  footer,
  width = 440,
  tape = true,
  children,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ax-dialog-overlay",
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: "ax-dialog",
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: 'calc(100% - 32px)'
    }
  }, rest), tape && /*#__PURE__*/React.createElement("span", {
    className: "ax-dialog__tape",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ax-dialog__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ax-dialog__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ax-dialog__x",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ax-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "ax-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-toast{position:relative;display:flex;align-items:flex-start;gap:12px;width:340px;max-width:100%;padding:15px 16px 15px 17px;background:var(--surface-quiet);border-radius:var(--radius-hand);box-shadow:var(--shadow-paper-lg);font-family:var(--font-body);box-sizing:border-box;clip-path:polygon(0 0,100% 0,100% 86%,88% 100%,0 100%)}
.ax-toast__dot{width:11px;height:11px;border-radius:50%;margin-top:4px;flex:none;box-shadow:0 0 0 2.5px var(--gray-0)}
.ax-toast__dot--brand{background:var(--brand-primary)}.ax-toast__dot--yellow{background:var(--butter-500)}.ax-toast__dot--success{background:var(--green-500)}.ax-toast__dot--warning{background:var(--amber-500)}.ax-toast__dot--danger{background:var(--red-500)}.ax-toast__dot--neutral{background:var(--gray-400)}
.ax-toast__title{margin:0;font-family:var(--font-display);font-size:14.5px;font-weight:var(--weight-bold);letter-spacing:-.01em;color:var(--text-primary)}
.ax-toast__desc{margin:3px 0 0;font-size:13px;line-height:1.45;color:var(--gray-700)}
.ax-toast__x{display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;margin:-2px -4px 0 auto;border:none;border-radius:50%;background:transparent;color:var(--gray-600);font-size:14px;cursor:pointer;flex:none;padding:0}
.ax-toast__x:hover{background:rgba(23,16,41,.07);color:var(--text-primary)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-toast')) {
  const s = document.createElement('style');
  s.id = 'ax-css-toast';
  s.textContent = css;
  document.head.appendChild(s);
}
function Toast({
  tone = 'brand',
  title,
  description,
  onDismiss,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('ax-toast ' + className).trim(),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: 'ax-toast__dot ax-toast__dot--' + tone
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ax-toast__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "ax-toast__desc"
  }, description)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ax-toast__x",
    "aria-label": "Dismiss",
    onClick: onDismiss
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-tip{position:relative;display:inline-flex}
.ax-tip__bubble{position:absolute;left:50%;bottom:calc(100% + 10px);transform:translateX(-50%) translateY(3px);background:var(--ink-900);color:var(--text-inverse);font-family:var(--font-body);font-size:12px;font-weight:var(--weight-medium);padding:7px 11px;border-radius:11px 13px 10px 14px/13px 11px 14px 10px;white-space:nowrap;opacity:0;pointer-events:none;z-index:60;transition:opacity var(--dur-fast) var(--ease-launch),transform var(--dur-fast) var(--ease-launch)}
.ax-tip__bubble::after{content:'';position:absolute;left:50%;margin-left:-7px;bottom:-7px;width:14px;height:9px;background:var(--ink-900);clip-path:polygon(0 0,100% 0,32% 100%)}
.ax-tip[data-side="bottom"] .ax-tip__bubble::after{bottom:auto;top:-7px;clip-path:polygon(32% 0,100% 100%,0 100%)}
.ax-tip[data-side="bottom"] .ax-tip__bubble{bottom:auto;top:calc(100% + 10px);transform:translateX(-50%) translateY(-3px)}
.ax-tip:hover .ax-tip__bubble,.ax-tip:focus-within .ax-tip__bubble,.ax-tip[data-open] .ax-tip__bubble{opacity:1;transform:translateX(-50%) translateY(0)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-tooltip')) {
  const s = document.createElement('style');
  s.id = 'ax-css-tooltip';
  s.textContent = css;
  document.head.appendChild(s);
}
function Tooltip({
  label,
  side = 'top',
  open,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ('ax-tip ' + className).trim(),
    "data-side": side,
    "data-open": open || undefined
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "ax-tip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/illustration/Illustration.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-ill{position:relative;display:inline-flex;align-items:center;justify-content:center;flex:none}
.ax-ill__blob{position:absolute;inset:12% 10% 14% 14%;background:var(--il-blob);border-radius:58% 42% 52% 48%/48% 55% 45% 52%;transform:rotate(var(--il-tilt,-6deg))}
.ax-ill__art{position:relative;width:100%;height:100%;object-fit:contain}
.ax-ill__glyph{position:relative;width:64%;height:64%;background:var(--ink-900);-webkit-mask:var(--il-glyph) center/contain no-repeat;mask:var(--il-glyph) center/contain no-repeat}
.ax-ill__slot{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:100%;height:100%;border:2px dashed var(--pencil-line);border-radius:var(--radius-hand);background:transparent;text-align:center;padding:10px;box-sizing:border-box}
.ax-ill__slot b{font-family:var(--font-hand);font-size:20px;font-weight:600;color:var(--gray-600);line-height:1.1}
.ax-ill__slot i{font-style:normal;font-family:var(--font-label);font-size:9.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--gray-500)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-ill')) {
  const s = document.createElement('style');
  s.id = 'ax-css-ill';
  s.textContent = css;
  document.head.appendChild(s);
}
const SIZE = {
  mini: 96,
  spot: 220,
  hero: 520
};
const BLOB = {
  violet: 'var(--violet-300)',
  lilac: 'var(--tint-lilac)',
  pink: 'var(--accent-pink-soft)',
  coral: 'var(--accent-coral-soft)',
  yellow: 'var(--accent-yellow-soft)',
  lime: 'var(--accent-lime-soft)',
  cyan: 'var(--accent-cyan-soft)',
  paper: 'var(--gray-50)'
};
function Illustration({
  tier = 'mini',
  src,
  glyph,
  glyphBase = 'assets/icons',
  blob = 'lilac',
  tilt = -6,
  alt = '',
  label,
  size,
  className = '',
  style,
  ...rest
}) {
  const d = size || SIZE[tier];
  const art = src ? /*#__PURE__*/React.createElement("img", {
    className: "ax-ill__art",
    src: src,
    alt: alt
  }) : glyph ? /*#__PURE__*/React.createElement("span", {
    className: "ax-ill__glyph",
    role: "img",
    "aria-label": alt || glyph,
    style: {
      '--il-glyph': `url('${glyphBase}/${glyph}.svg')`
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "ax-ill__slot"
  }, /*#__PURE__*/React.createElement("b", null, label || 'illustration goes here'), /*#__PURE__*/React.createElement("i", null, tier));
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ('ax-ill ' + className).trim(),
    style: {
      width: d,
      height: tier === 'hero' ? Math.round(d * 0.6) : d,
      '--il-blob': BLOB[blob] || blob,
      '--il-tilt': tilt + 'deg',
      ...style
    }
  }, rest), blob && (src || glyph) && /*#__PURE__*/React.createElement("span", {
    className: "ax-ill__blob",
    "aria-hidden": "true"
  }), art);
}
Object.assign(__ds_scope, { Illustration });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustration/Illustration.jsx", error: String((e && e.message) || e) }); }

// components/inputs/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TICK = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.5 13.4c2.3 1.7 4 3.5 5.6 6C12.4 12 16.4 6.2 21.5 2.3'/%3E%3C/svg%3E\")";
const css = `
.ax-choice{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:14.5px;font-weight:var(--weight-medium);color:var(--text-primary);cursor:pointer}
.ax-choice--disabled{opacity:.45;cursor:not-allowed}
.ax-checkwrap{position:relative;display:inline-flex;flex:none;width:21px;height:21px}
.ax-check{appearance:none;-webkit-appearance:none;width:21px;height:21px;margin:0;border:2px solid var(--pencil-line);border-radius:7px 8px 6px 9px/8px 6px 9px 7px;background:var(--surface-card);cursor:inherit;transition:background var(--dur-fast) var(--ease-launch),border-color var(--dur-fast),transform var(--dur-fast) var(--ease-launch)}
.ax-check:hover:not(:disabled):not(:checked){border-color:var(--ink-900)}
.ax-check:active:not(:disabled){transform:scale(.92)}
.ax-check:checked{background:var(--brand-primary-soft);border-color:var(--brand-primary)}
.ax-checkwrap i{position:absolute;left:-6px;top:-9px;width:33px;height:33px;background:var(--brand-primary);opacity:0;transform:rotate(-7deg) scale(.75);transform-origin:42% 62%;pointer-events:none;-webkit-mask:var(--tick) center/contain no-repeat;mask:var(--tick) center/contain no-repeat;transition:opacity var(--dur-fast) var(--ease-launch),transform var(--dur-med) var(--ease-launch)}
.ax-check:checked~i{opacity:1;transform:rotate(-7deg) scale(1)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-checkbox')) {
  const s = document.createElement('style');
  s.id = 'ax-css-checkbox';
  s.textContent = css;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ('ax-choice' + (disabled ? ' ax-choice--disabled' : '') + ' ' + className).trim(),
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ax-checkwrap"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: "ax-check",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true",
    style: {
      '--tick': TICK
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/inputs/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-field{display:flex;flex-direction:column;gap:5px;font-family:var(--font-body);min-width:0}\n.ax-field__lab{display:flex;flex-direction:column;gap:5px;min-width:0}
.ax-field__label{font-family:var(--font-label);font-size:10.5px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--gray-600)}
.ax-field__msg{font-family:var(--font-hand);font-size:16px;color:var(--gray-600);line-height:1.15}
.ax-field__msg--error{color:var(--danger-fg)}
.ax-input{height:44px;padding:0 12px;border:none;border-bottom:2px solid var(--pencil-line);border-radius:var(--radius-hand-sm) var(--radius-hand-sm) 3px 3px;background:var(--surface-quiet);font-family:inherit;font-size:14.5px;color:var(--text-primary);transition:border-color var(--dur-fast),box-shadow var(--dur-fast),background var(--dur-fast)}
.ax-input::placeholder{color:var(--gray-400)}
.ax-input:hover:not(:disabled):not(:focus){border-bottom-color:var(--pencil-line-strong)}
.ax-input:focus{outline:none;background:var(--gray-0);border-bottom-color:var(--brand-primary);box-shadow:inset 0 -9px 0 var(--butter-200)}
.ax-input:disabled{color:var(--gray-400);border-bottom-style:dashed;cursor:not-allowed;background:var(--surface-quiet)}
.ax-input--error{border-bottom-color:var(--red-500)}
.ax-input--error:focus{border-bottom-color:var(--red-500);box-shadow:inset 0 -9px 0 var(--red-100)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-input')) {
  const s = document.createElement('style');
  s.id = 'ax-css-input';
  s.textContent = css;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  const __msgId = React.useId();
  return /*#__PURE__*/React.createElement("div", {
    className: ('ax-field ' + className).trim(),
    style: style
  }, /*#__PURE__*/React.createElement("label", {
    className: "ax-field__lab"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ax-field__label"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    className: 'ax-input' + (error ? ' ax-input--error' : ''),
    disabled: disabled,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": (error || hint) ? __msgId : undefined
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    id: __msgId,
    className: 'ax-field__msg' + (error ? ' ax-field__msg--error' : '')
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/Input.jsx", error: String((e && e.message) || e) }); }

// components/inputs/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-radiowrap{position:relative;display:inline-flex;flex:none;width:21px;height:21px}
.ax-radio{appearance:none;-webkit-appearance:none;width:21px;height:21px;margin:0;border:2px solid var(--pencil-line);border-radius:50%;background:var(--surface-card);cursor:inherit;transition:border-color var(--dur-fast),transform var(--dur-fast) var(--ease-launch)}
.ax-radio:hover:not(:disabled):not(:checked){border-color:var(--ink-900)}
.ax-radio:active:not(:disabled){transform:scale(.92)}
.ax-radio:checked{border-color:var(--brand-primary)}
.ax-radiowrap i{position:absolute;left:5.5px;top:5.5px;width:10px;height:10px;border-radius:50%;background:var(--brand-primary);transform:scale(.3);opacity:0;pointer-events:none;transition:opacity var(--dur-fast),transform var(--dur-med) var(--ease-launch)}
.ax-radio:checked~i{opacity:1;transform:scale(1)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-radio')) {
  const s = document.createElement('style');
  s.id = 'ax-css-radio';
  s.textContent = css;
  document.head.appendChild(s);
}
function Radio({
  label,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ('ax-choice' + (disabled ? ' ax-choice--disabled' : '') + ' ' + className).trim(),
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "ax-radiowrap"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    className: "ax-radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/Radio.jsx", error: String((e && e.message) || e) }); }

// components/inputs/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-selectwrap{position:relative;display:flex}
.ax-select{appearance:none;-webkit-appearance:none;width:100%;height:44px;padding:0 36px 0 12px;border:none;border-bottom:2px solid var(--pencil-line);border-radius:var(--radius-hand-sm) var(--radius-hand-sm) 3px 3px;background:var(--surface-quiet);font-family:var(--font-body);font-size:14.5px;color:var(--text-primary);cursor:pointer;transition:border-color var(--dur-fast),box-shadow var(--dur-fast),background var(--dur-fast)}
.ax-select:hover:not(:disabled):not(:focus){border-bottom-color:var(--pencil-line-strong)}
.ax-select:focus{outline:none;background:var(--gray-0);border-bottom-color:var(--brand-primary);box-shadow:inset 0 -9px 0 var(--butter-200)}
.ax-select:disabled{color:var(--gray-400);border-bottom-style:dashed;cursor:not-allowed}
.ax-selectwrap i{position:absolute;right:12px;top:50%;transform:translateY(-50%) rotate(-4deg);width:17px;height:17px;background:var(--gray-600);pointer-events:none;-webkit-mask:var(--chevron) center/contain no-repeat;mask:var(--chevron) center/contain no-repeat}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-select')) {
  const s = document.createElement('style');
  s.id = 'ax-css-select';
  s.textContent = css;
  document.head.appendChild(s);
}
const CHEV = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4.5 8.2c2.4 2.1 5 4.4 7.7 6.9 2.4-2.6 4.9-5 7.4-7.2'/%3E%3C/svg%3E\")";
function Select({
  label,
  hint,
  disabled = false,
  options,
  className = '',
  style,
  children,
  ...rest
}) {
  const __msgId = React.useId();
  return /*#__PURE__*/React.createElement("div", {
    className: ('ax-field ' + className).trim(),
    style: style
  }, /*#__PURE__*/React.createElement("label", {
    className: "ax-field__lab"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ax-field__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "ax-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "ax-select",
    disabled: disabled,
    "aria-describedby": hint ? __msgId : undefined
  }, rest), options ? options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true",
    style: {
      '--chevron': CHEV
    }
  }))), hint && /*#__PURE__*/React.createElement("span", {
    id: __msgId,
    className: "ax-field__msg"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/Select.jsx", error: String((e && e.message) || e) }); }

// components/inputs/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-switch{display:inline-flex;align-items:center;gap:11px;font-family:var(--font-body);font-size:14.5px;font-weight:var(--weight-medium);color:var(--text-primary);cursor:pointer;position:relative}
.ax-switch--disabled{opacity:.45;cursor:not-allowed}
.ax-switch__input{position:absolute;opacity:0;width:0;height:0}
.ax-switch__track{width:46px;height:25px;border-radius:15px 17px 14px 18px/17px 14px 18px 15px;background:var(--surface-card);box-shadow:inset 0 0 0 2px var(--pencil-line);position:relative;flex:none;transition:background var(--dur-med) var(--ease-launch),box-shadow var(--dur-med)}
.ax-switch__thumb{position:absolute;top:-4px;left:-3px;width:29px;height:29px;border-radius:54% 46% 50% 50%/50% 52% 48% 50%;background:var(--ink-900);box-shadow:0 0 0 2.5px var(--gray-0),2px 3px 0 rgba(23,16,41,.2);transition:transform var(--dur-med) var(--ease-launch),background var(--dur-fast)}
.ax-switch:hover:not(.ax-switch--disabled) .ax-switch__track{box-shadow:inset 0 0 0 2px var(--ink-900)}
.ax-switch__input:checked~.ax-switch__track{background:var(--brand-primary-soft);box-shadow:inset 0 0 0 2px var(--brand-primary)}
.ax-switch__input:checked~.ax-switch__track .ax-switch__thumb{transform:translateX(23px) rotate(14deg);background:var(--brand-primary)}
.ax-switch__input:focus-visible~.ax-switch__track{outline:2px solid var(--violet-500);outline-offset:3px}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-switch')) {
  const s = document.createElement('style');
  s.id = 'ax-css-switch';
  s.textContent = css;
  document.head.appendChild(s);
}
function Switch({
  label,
  disabled = false,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ('ax-switch' + (disabled ? ' ax-switch--disabled' : '') + ' ' + className).trim(),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    className: "ax-switch__input",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ax-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ax-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/inputs/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-appbar{display:flex;align-items:center;gap:10px;font-family:var(--font-body)}
.ax-appbar__wordmark{font-family:var(--font-display);font-weight:var(--weight-extrabold);font-size:var(--text-xl);letter-spacing:-.04em;color:var(--brand-primary);text-decoration:none}
.ax-appbar__spacer{flex:1}
.ax-appbar__action{width:44px;height:44px;margin:-8px -6px -8px 0;display:flex;align-items:center;justify-content:center;border:none;padding:0;cursor:pointer;background:none;color:var(--text-primary);text-decoration:none}
.ax-appbar__avatar{width:44px;height:44px;flex:none;display:flex;align-items:center;justify-content:center;text-decoration:none}
.ax-appbar__avatar>*{width:36px;height:36px;border-radius:50%;overflow:hidden;box-shadow:var(--sticker-cut),var(--shadow-paper)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-appbar')) { const s = document.createElement('style'); s.id = 'ax-css-appbar'; s.textContent = css; document.head.appendChild(s); }
function AppBar({ wordmark, as: As = 'header', className = '', children, ...rest }) {
  return React.createElement(As, _extends({ className: ('ax-appbar ' + className).trim() }, rest),
    wordmark && (typeof wordmark === 'string' ? React.createElement("span", { className: "ax-appbar__wordmark" }, wordmark) : wordmark),
    React.createElement("span", { className: "ax-appbar__spacer" }),
    children);
}
Object.assign(__ds_scope, { AppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ScreenHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-screenhead__top{display:flex;align-items:center;gap:6px;margin-bottom:16px}
.ax-screenhead__back{width:44px;height:44px;margin:-8px 0 -8px -14px;display:flex;align-items:center;justify-content:center;border:none;padding:0;background:none;cursor:pointer;text-decoration:none;color:var(--text-primary)}
.ax-screenhead__chev{display:inline-block;width:9px;height:9px;border-left:2px solid currentColor;border-bottom:2px solid currentColor;border-radius:1px;transform:rotate(45deg)}
.ax-screenhead__kicker{font-family:var(--font-label);font-size:var(--text-3xs);font-weight:var(--weight-bold);letter-spacing:var(--tracking-caps);text-transform:uppercase;color:var(--text-secondary)}
.ax-screenhead__action{margin-left:auto}
.ax-screenhead__head{display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap}
.ax-screenhead__h1{margin:0;font-family:var(--font-title);font-weight:var(--weight-semibold);font-size:var(--text-xl);letter-spacing:.01em;text-transform:uppercase;color:var(--text-primary)}
.ax-screenhead__note{margin:0 0 2px;font-family:var(--font-hand);font-size:var(--text-sm);line-height:1;white-space:nowrap;color:var(--brand-primary);transform:rotate(-2deg)}
.ax-screenhead__lede{margin:8px 0 0;font-size:var(--text-sm);line-height:var(--leading-normal);color:var(--gray-700)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-screenhead')) { const s = document.createElement('style'); s.id = 'ax-css-screenhead'; s.textContent = css; document.head.appendChild(s); }
function ScreenHeader({ title, kicker, note, lede, action, back, className = '', ...rest }) {
  const { as: Back = 'a', label: backLabel, ...backProps } = back || {};
  return React.createElement("div", _extends({ className: ('ax-screenhead ' + className).trim() }, rest),
    (back || kicker || action) && React.createElement("div", { className: "ax-screenhead__top" },
      back && React.createElement(Back, _extends({ className: "ax-screenhead__back", "aria-label": backLabel }, backProps),
        React.createElement("span", { className: "ax-screenhead__chev", "aria-hidden": "true" })),
      kicker && React.createElement("span", { className: "ax-screenhead__kicker" }, kicker),
      action && React.createElement("span", { className: "ax-screenhead__action" }, action)),
    React.createElement("div", { className: "ax-screenhead__head" },
      React.createElement("h1", { className: "ax-screenhead__h1" }, title),
      note && React.createElement("p", { className: "ax-screenhead__note" }, note)),
    lede && React.createElement("p", { className: "ax-screenhead__lede" }, lede));
}
Object.assign(__ds_scope, { ScreenHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ScreenHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-tabs{display:flex;align-items:flex-end;font-family:var(--font-body)}
.ax-tabs--folder{gap:4px;position:relative;border-bottom:3px solid var(--brand-primary)}
.ax-tabs--folder .ax-tab{border:none;background:var(--surface-card);color:var(--gray-600);padding:9px 18px 8px;border-radius:10px 13px 0 0;font-family:var(--font-display);font-weight:var(--weight-bold);font-size:14px;letter-spacing:-.01em;cursor:pointer;position:relative;top:2px;transition:background var(--dur-fast),color var(--dur-fast),top var(--dur-fast) var(--ease-launch)}
.ax-tabs--folder .ax-tab:hover{color:var(--text-primary)}
.ax-tabs--folder .ax-tab--active{background:var(--brand-primary);color:#fff;top:0;padding-bottom:11px}
.ax-tabs--underline{gap:22px;border-bottom:1px solid var(--border-subtle)}
.ax-tabs--underline .ax-tab{border:none;background:none;padding:10px 2px;margin-bottom:-1px;font:inherit;font-size:14px;font-weight:var(--weight-medium);color:var(--text-secondary);cursor:pointer;border-bottom:2px solid transparent;transition:color var(--dur-fast),border-color var(--dur-fast)}
.ax-tabs--underline .ax-tab:hover{color:var(--text-primary)}
.ax-tabs--underline .ax-tab--active{color:var(--text-brand);font-weight:var(--weight-semibold);border-bottom-color:var(--brand-primary)}
.ax-tabs--pill{gap:4px;padding:4px;background:var(--surface-quiet);border-radius:var(--radius-pill);width:max-content}
.ax-tabs--pill .ax-tab{border:none;background:none;padding:6px 14px;border-radius:var(--radius-pill);font:inherit;font-size:14px;font-weight:var(--weight-medium);color:var(--gray-700);cursor:pointer;transition:background var(--dur-fast),color var(--dur-fast),box-shadow var(--dur-med) var(--ease-launch)}
.ax-tabs--pill .ax-tab:hover{color:var(--text-primary)}
.ax-tabs--pill .ax-tab--active{background:var(--brand-primary);color:#fff;font-weight:var(--weight-semibold);box-shadow:var(--shadow-paper)}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-tabs')) {
  const s = document.createElement('style');
  s.id = 'ax-css-tabs';
  s.textContent = css;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'folder',
  className = '',
  ...rest
}) {
  const norm = items.map(it => typeof it === 'string' ? {
    id: it,
    label: it
  } : it);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('ax-tabs ax-tabs--' + variant + ' ' + className).trim(),
    role: "tablist"
  }, rest), norm.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    type: "button",
    role: "tab",
    "aria-selected": value === item.id,
    className: 'ax-tab' + (value === item.id ? ' ax-tab--active' : ''),
    onClick: () => onChange && onChange(item.id)
  }, item.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/paper/Bubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-bubble{position:relative;display:inline-block;max-width:38ch;padding:14px 18px;border-radius:20px 22px 19px 23px/22px 20px 23px 19px;background:var(--bb-bg);color:var(--bb-fg);font-family:var(--font-body);font-size:14.5px;line-height:1.5}
.ax-bubble__t{position:absolute;width:18px;height:14px;background:var(--bb-bg)}
.ax-bubble--bl .ax-bubble__t{left:22px;bottom:-9px;clip-path:polygon(0 0,100% 0,18% 100%)}
.ax-bubble--br .ax-bubble__t{right:22px;bottom:-9px;clip-path:polygon(0 0,100% 0,82% 100%)}
.ax-bubble--tl .ax-bubble__t{left:22px;top:-9px;clip-path:polygon(18% 0,100% 100%,0 100%)}
.ax-bubble--tr .ax-bubble__t{right:22px;top:-9px;clip-path:polygon(82% 0,100% 100%,0 100%)}
.ax-bubble__c{margin:0}
.ax-bubble__w{margin:8px 0 0;font-family:var(--font-label);font-weight:600;font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;opacity:.85}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-bubble')) {
  const s = document.createElement('style');
  s.id = 'ax-css-bubble';
  s.textContent = css;
  document.head.appendChild(s);
}
const ACC = {
  violet: ['var(--brand-primary)', '#fff'],
  pink: ['var(--accent-pink)', '#fff'],
  coral: ['var(--accent-coral)', '#fff'],
  orange: ['var(--accent-orange)', 'var(--ink-900)'],
  yellow: ['var(--accent-yellow)', 'var(--ink-900)'],
  lime: ['var(--accent-lime)', 'var(--ink-900)'],
  teal: ['var(--accent-teal)', 'var(--ink-900)'],
  cyan: ['var(--accent-cyan)', 'var(--ink-900)'],
  navy: ['var(--accent-navy)', '#fff'],
  lilac: ['var(--tint-lilac)', 'var(--ink-900)'],
  paper: ['var(--gray-50)', 'var(--ink-900)'],
  ink: ['var(--ink-900)', '#fff']
};
const BG = Object.fromEntries(Object.entries(ACC).map(([k, v]) => [k, v[0]]));
const FG = Object.fromEntries(Object.entries(ACC).map(([k, v]) => [k, v[1]]));
function Bubble({
  tone = 'paper',
  tail = 'bl',
  who,
  tilt = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('ax-bubble ax-bubble--' + tail + ' ' + className).trim(),
    style: {
      '--bb-bg': BG[tone],
      '--bb-fg': FG[tone],
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    className: "ax-bubble__c"
  }, children), who && /*#__PURE__*/React.createElement("p", {
    className: "ax-bubble__w"
  }, who), /*#__PURE__*/React.createElement("span", {
    className: "ax-bubble__t",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Bubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/Bubble.jsx", error: String((e && e.message) || e) }); }

// components/paper/FileCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-file{position:relative;display:flex;flex-direction:column;gap:10px;padding:22px 20px 24px;border-radius:4px 4px var(--radius-hand-sm) var(--radius-hand-sm);background:var(--fl-bg);color:var(--fl-fg);box-shadow:var(--shadow-hand);font-family:var(--font-body)}
.ax-file::before{content:'';position:absolute;left:0;top:-14px;width:46%;height:16px;background:var(--fl-bg);border-radius:6px 12px 0 0}
.ax-file__tab{position:absolute;left:15px;top:-10px;z-index:1;font-family:var(--font-label);font-weight:700;font-size:13px;letter-spacing:.05em;text-transform:uppercase;color:var(--fl-fg);line-height:14px}
.ax-file__h{margin:0;font-family:var(--font-display);font-weight:var(--weight-bold);font-size:21px;letter-spacing:var(--tracking-tight);line-height:1.1}
.ax-file__r{border:0;border-top:1.5px solid currentColor;opacity:.35;margin:2px 0 0}
.ax-file ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:7px}
.ax-file li{display:flex;gap:8px;font-size:13.5px;line-height:1.45}
.ax-file li::before{content:'✦';font-size:11px;line-height:1.6;opacity:.9}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-file')) {
  const s = document.createElement('style');
  s.id = 'ax-css-file';
  s.textContent = css;
  document.head.appendChild(s);
}
const ACC = {
  violet: ['var(--brand-primary)', '#fff'],
  pink: ['var(--accent-pink)', '#fff'],
  coral: ['var(--accent-coral)', '#fff'],
  orange: ['var(--accent-orange)', 'var(--ink-900)'],
  yellow: ['var(--accent-yellow)', 'var(--ink-900)'],
  lime: ['var(--accent-lime)', 'var(--ink-900)'],
  teal: ['var(--accent-teal)', 'var(--ink-900)'],
  cyan: ['var(--accent-cyan)', 'var(--ink-900)'],
  navy: ['var(--accent-navy)', '#fff'],
  lilac: ['var(--tint-lilac)', 'var(--ink-900)'],
  paper: ['var(--gray-50)', 'var(--ink-900)'],
  ink: ['var(--ink-900)', '#fff']
};
const BG = Object.fromEntries(Object.entries(ACC).map(([k, v]) => [k, v[0]]));
const FG = Object.fromEntries(Object.entries(ACC).map(([k, v]) => [k, v[1]]));
function FileCard({
  tint = 'violet',
  tab,
  title,
  items,
  tilt = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('ax-file ' + className).trim(),
    style: {
      '--fl-bg': BG[tint],
      '--fl-fg': FG[tint],
      transform: tilt ? `rotate(${tilt}deg)` : undefined,
      ...style
    }
  }, rest), tab && /*#__PURE__*/React.createElement("span", {
    className: "ax-file__tab"
  }, tab), title && /*#__PURE__*/React.createElement("h3", {
    className: "ax-file__h"
  }, title), title && /*#__PURE__*/React.createElement("hr", {
    className: "ax-file__r"
  }), items && /*#__PURE__*/React.createElement("ul", null, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, i))), children);
}
Object.assign(__ds_scope, { FileCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/FileCard.jsx", error: String((e && e.message) || e) }); }

// components/paper/Sticker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-sticker{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:var(--st-pad);border-radius:var(--radius-pill);background:var(--st-bg);color:var(--st-fg);font-family:var(--font-display);font-weight:var(--weight-bold);font-size:13px;letter-spacing:-.01em;white-space:nowrap;box-shadow:0 0 0 3px var(--gray-0),3px 4px 0 rgba(23,16,41,.14)}
.ax-sticker--round{padding:0;width:var(--st-d);height:var(--st-d);border-radius:50%}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-sticker')) {
  const s = document.createElement('style');
  s.id = 'ax-css-sticker';
  s.textContent = css;
  document.head.appendChild(s);
}
const ACC = {
  violet: ['var(--brand-primary)', '#fff'],
  pink: ['var(--accent-pink)', '#fff'],
  coral: ['var(--accent-coral)', '#fff'],
  orange: ['var(--accent-orange)', 'var(--ink-900)'],
  yellow: ['var(--accent-yellow)', 'var(--ink-900)'],
  lime: ['var(--accent-lime)', 'var(--ink-900)'],
  teal: ['var(--accent-teal)', 'var(--ink-900)'],
  cyan: ['var(--accent-cyan)', 'var(--ink-900)'],
  navy: ['var(--accent-navy)', '#fff'],
  lilac: ['var(--tint-lilac)', 'var(--ink-900)'],
  paper: ['var(--gray-50)', 'var(--ink-900)'],
  ink: ['var(--ink-900)', '#fff']
};
const BG = Object.fromEntries(Object.entries(ACC).map(([k, v]) => [k, v[0]]));
const FG = {
  ...Object.fromEntries(Object.entries(ACC).map(([k, v]) => [k, v[1]])),
  ink: 'var(--accent-yellow)'
};
function Sticker({
  tone = 'ink',
  round = false,
  size = 44,
  tilt = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ('ax-sticker' + (round ? ' ax-sticker--round' : '') + ' ' + className).trim(),
    style: {
      '--st-bg': BG[tone],
      '--st-fg': FG[tone],
      '--st-pad': '7px 13px',
      '--st-d': size + 'px',
      ...(tilt ? {
        transform: `rotate(${tilt}deg)`
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Sticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/Sticker.jsx", error: String((e && e.message) || e) }); }

// components/paper/StickyNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = `
.ax-note{position:relative;display:flex;flex-direction:column;gap:6px;padding:18px 16px;background:var(--nt-bg);color:var(--ink-900);box-shadow:2px 3px 0 rgba(23,16,41,.10);font-family:var(--font-body);font-size:13.5px;line-height:1.45}
.ax-note--fold{clip-path:polygon(0 0,100% 0,100% 84%,84% 100%,0 100%)}
.ax-note__tape{position:absolute;left:50%;top:-9px;width:62px;height:18px;transform:translateX(-50%) rotate(-2deg);background:rgba(255,255,255,.55);box-shadow:inset 0 0 0 1px rgba(23,16,41,.06)}
.ax-note__h{font-family:var(--font-hand);font-size:22px;font-weight:600;line-height:1.1}
.ax-note__l{font-family:var(--font-label);font-weight:600;font-size:10px;letter-spacing:.07em;text-transform:uppercase;opacity:.55}`;
if (typeof document !== 'undefined' && !document.getElementById('ax-css-note')) {
  const s = document.createElement('style');
  s.id = 'ax-css-note';
  s.textContent = css;
  document.head.appendChild(s);
}
const BG = {
  yellow: 'var(--butter-300)',
  lilac: 'var(--tint-lilac-soft)',
  paper: 'var(--gray-50)',
  cyan: 'var(--accent-cyan-soft)',
  pink: 'var(--accent-pink-soft)',
  lime: 'var(--accent-lime-soft)'
};
function StickyNote({
  tint = 'yellow',
  tilt = 0,
  tape = false,
  fold = true,
  heading,
  label,
  className = '',
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ('ax-note' + (fold ? ' ax-note--fold' : '') + ' ' + className).trim(),
    style: {
      '--nt-bg': BG[tint],
      ...(tilt ? {
        transform: `rotate(${tilt}deg)`
      } : null),
      ...style
    }
  }, rest), tape && /*#__PURE__*/React.createElement("span", {
    className: "ax-note__tape",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "ax-note__l"
  }, label), heading && /*#__PURE__*/React.createElement("span", {
    className: "ax-note__h"
  }, heading), children);
}
Object.assign(__ds_scope, { StickyNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/paper/StickyNote.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MarkerBar = __ds_scope.MarkerBar;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TallyCount = __ds_scope.TallyCount;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Illustration = __ds_scope.Illustration;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.AppBar = __ds_scope.AppBar;

__ds_ns.ScreenHeader = __ds_scope.ScreenHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Bubble = __ds_scope.Bubble;

__ds_ns.FileCard = __ds_scope.FileCard;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.StickyNote = __ds_scope.StickyNote;

})();
