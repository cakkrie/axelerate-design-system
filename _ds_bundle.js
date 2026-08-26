/* @ds-bundle: {"format":4,"namespace":"AxelerateDesignSystem_edbc1f","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"MarkerBar","sourcePath":"components/data/MarkerBar.jsx"},{"name":"StatBlock","sourcePath":"components/data/StatBlock.jsx"},{"name":"TallyCount","sourcePath":"components/data/TallyCount.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Illustration","sourcePath":"components/illustration/Illustration.jsx"},{"name":"Checkbox","sourcePath":"components/inputs/Checkbox.jsx"},{"name":"Input","sourcePath":"components/inputs/Input.jsx"},{"name":"Radio","sourcePath":"components/inputs/Radio.jsx"},{"name":"Select","sourcePath":"components/inputs/Select.jsx"},{"name":"Switch","sourcePath":"components/inputs/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Bubble","sourcePath":"components/paper/Bubble.jsx"},{"name":"FileCard","sourcePath":"components/paper/FileCard.jsx"},{"name":"Sticker","sourcePath":"components/paper/Sticker.jsx"},{"name":"StickyNote","sourcePath":"components/paper/StickyNote.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b135d464f691","components/actions/IconButton.jsx":"d4ae3b90f2d9","components/data/MarkerBar.jsx":"14c2ce85aba2","components/data/StatBlock.jsx":"b99707712fa1","components/data/TallyCount.jsx":"55b4e5933abb","components/display/Badge.jsx":"7ec264b3221b","components/display/Card.jsx":"39779241e01a","components/display/Tag.jsx":"1a3043bd947c","components/feedback/Dialog.jsx":"d9bafef617e7","components/feedback/Toast.jsx":"884d75456818","components/feedback/Tooltip.jsx":"069949548838","components/illustration/Illustration.jsx":"061779e30331","components/inputs/Checkbox.jsx":"a90df4f83829","components/inputs/Input.jsx":"89596625da39","components/inputs/Radio.jsx":"20d75c2db055","components/inputs/Select.jsx":"03afb8d8b115","components/inputs/Switch.jsx":"4a1146c43d65","components/navigation/Tabs.jsx":"043f34a9ac44","components/paper/Bubble.jsx":"0bfb1225baf7","components/paper/FileCard.jsx":"fbc0a933d930","components/paper/Sticker.jsx":"dc530d5eef0b","components/paper/StickyNote.jsx":"1c58160d4f4a","ui_kits/website/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[]} */

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
.ax-btn--md{height:40px;padding:0 18px;font-size:14.5px}
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
.ax-iconbtn--md{width:36px;height:36px}.ax-iconbtn--md svg,.ax-iconbtn--md .ax-icon{width:18px;height:18px}
.ax-iconbtn--lg{width:44px;height:44px}.ax-iconbtn--lg svg,.ax-iconbtn--lg .ax-icon{width:22px;height:22px}
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
.ax-card--sheet{background:var(--surface-card);box-shadow:var(--shadow-paper-lg)}
.ax-card--quiet{background:var(--surface-quiet);box-shadow:var(--shadow-paper-lg)}
.ax-card--tint{background:var(--cd-tint);color:var(--cd-fg);box-shadow:var(--shadow-paper-lg)}
.ax-card--ink{background:var(--surface-inverse);color:var(--text-inverse);box-shadow:var(--shadow-paper-lg)}
.ax-card--sketch{background:transparent;border:2px dashed var(--pencil-line);box-shadow:none}
.ax-card--tall{box-shadow:var(--shadow-paper-lg)}
.ax-card--interactive{cursor:pointer}
.ax-card--interactive:hover{box-shadow:var(--shadow-paper-lg)}
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
  const cls = ['ax-card', 'ax-card--' + (t && v !== 'ink' && v !== 'sketch' ? 'tint' : v), v === 'tall' ? 'ax-card--tall' : '', 'ax-card--pad-' + padding, punch ? 'ax-card--punched' : '', interactive ? 'ax-card--interactive' : '', className].filter(Boolean).join(' ');
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
.ax-field{display:flex;flex-direction:column;gap:5px;font-family:var(--font-body);min-width:0}
.ax-field__label{font-family:var(--font-label);font-size:10.5px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--gray-600)}
.ax-field__msg{font-family:var(--font-hand);font-size:16px;color:var(--gray-600);line-height:1.15}
.ax-field__msg--error{color:var(--danger-fg)}
.ax-input{height:42px;padding:0 12px;border:none;border-bottom:2px solid var(--pencil-line);border-radius:var(--radius-hand-sm) var(--radius-hand-sm) 3px 3px;background:var(--surface-sunken);font-family:inherit;font-size:14.5px;color:var(--text-primary);transition:border-color var(--dur-fast),box-shadow var(--dur-fast),background var(--dur-fast)}
.ax-input::placeholder{color:var(--gray-400)}
.ax-input:hover:not(:disabled):not(:focus){border-bottom-color:var(--pencil-line-strong)}
.ax-input:focus{outline:none;background:var(--gray-0);border-bottom-color:var(--brand-primary);box-shadow:inset 0 -9px 0 var(--butter-200)}
.ax-input:disabled{color:var(--gray-400);border-bottom-style:dashed;cursor:not-allowed;background:var(--surface-sunken)}
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
  return /*#__PURE__*/React.createElement("label", {
    className: ('ax-field ' + className).trim(),
    style: style
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ax-field__label"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    className: 'ax-input' + (error ? ' ax-input--error' : ''),
    disabled: disabled
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
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
.ax-select{appearance:none;-webkit-appearance:none;width:100%;height:42px;padding:0 36px 0 12px;border:none;border-bottom:2px solid var(--pencil-line);border-radius:var(--radius-hand-sm) var(--radius-hand-sm) 3px 3px;background:var(--surface-sunken);font-family:var(--font-body);font-size:14.5px;color:var(--text-primary);cursor:pointer;transition:border-color var(--dur-fast),box-shadow var(--dur-fast),background var(--dur-fast)}
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
  return /*#__PURE__*/React.createElement("label", {
    className: ('ax-field ' + className).trim(),
    style: style
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ax-field__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "ax-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "ax-select",
    disabled: disabled
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
  })), hint && /*#__PURE__*/React.createElement("span", {
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

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

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

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Bubble = __ds_scope.Bubble;

__ds_ns.FileCard = __ds_scope.FileCard;

__ds_ns.Sticker = __ds_scope.Sticker;

__ds_ns.StickyNote = __ds_scope.StickyNote;

})();
