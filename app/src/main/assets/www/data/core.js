// Content model: Section -> folders -> items.
// Item types:
//   phrase  {en, tr, ar, n?}                       from P("English | قراءة | المعنى | ملاحظة")
//   rule    {t, s, n, ex:[phrase], say?}           R(title, sound, note, examples, say)
//   word    W(word, reading, meaning, example, note)
//   letter  L(upper, name, vowel?, note, examples)
//   number  N("digits | words | قراءة | المعنى")
//   table   T(title, subtitle, note, [[label, value], ...], examples, say)
window.DB = [];
window.CATS = [
  { id: 'read', name: 'القراءة والنطق' },
  { id: 'vocab', name: 'المفردات والأرقام' },
  { id: 'grammar', name: 'القواعد' },
  { id: 'talk', name: 'الجمل والمحادثة' }
];
window.P = function (txt) {
  return txt.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) {
    var p = l.split('|').map(function (x) { return x.trim(); });
    var o = { en: p[0], tr: p[1] || '', ar: p[2] || '' };
    if (p[3]) o.n = p[3];
    return o;
  });
};
window.R = function (t, s, n, ex, say) {
  var o = { t: t, s: s, n: n, ex: P(ex || '') };
  if (say) o.say = say;
  return o;
};
window.W = function (w, tr, ar, ex, n) { return { t: w, s: tr + ' — ' + ar, n: n || '', ex: P(ex || ''), say: w, w: true }; };
window.L = function (up, name, vowel, n, ex) {
  return { letter: up, t: up + ' ' + up.toLowerCase(), s: name, vowel: !!vowel, n: n, ex: P(ex || ''), say: up };
};
window.N = function (txt) {
  return txt.split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) {
    var p = l.split('|').map(function (x) { return x.trim(); });
    var o = { num: p[0], en: p[1], tr: p[2] || '', ar: p[3] || '' };
    if (p[4]) o.n = p[4];
    return o;
  });
};
window.T = function (t, s, n, rows, ex, say) {
  var o = { t: t, s: s, n: n || '', rows: rows, ex: P(ex || ''), table: true };
  if (say) o.say = say;
  return o;
};
window.SEC = function (id, name, badge, color, desc, cat) {
  var s = { id: id, name: name, badge: badge, color: color, desc: desc, cat: cat || 'talk', folders: [] };
  s.f = function (fid, fname, items, fdesc) { s.folders.push({ id: fid, name: fname, items: items, desc: fdesc || '' }); return s; };
  s.order = function (ids) {
    var byId = {}; s.folders.forEach(function (f) { byId[f.id] = f; });
    var out = []; ids.forEach(function (i) { if (byId[i]) { out.push(byId[i]); delete byId[i]; } });
    s.folders.forEach(function (f) { if (byId[f.id]) out.push(f); });
    s.folders = out; return s;
  };
  DB.push(s);
  return s;
};
window.SECTION = function (id) { return DB.filter(function (s) { return s.id === id; })[0]; };
window.PASSAGES = [];
