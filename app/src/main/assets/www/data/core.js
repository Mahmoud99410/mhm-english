// Content model.
// Section -> folders -> items.
// Phrase item: "English | قراءة بالعربي | المعنى | ملاحظة (اختياري)"
// Rule item:   R(title, sound, note, examples, sayText?)
window.DB = [];
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
window.SEC = function (id, name, badge, color, desc) {
  var s = { id: id, name: name, badge: badge, color: color, desc: desc, folders: [] };
  s.f = function (fid, fname, items, fdesc) { s.folders.push({ id: fid, name: fname, items: items, desc: fdesc || '' }); return s; };
  DB.push(s);
  return s;
};
