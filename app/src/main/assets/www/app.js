(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var app = $('#app');
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var plain = function (s) { return String(s || '').replace(/[\[\]]/g, ''); };
  var marked = function (s) { return esc(s).replace(/\[(.+?)\]/g, '<mark>$1</mark>'); };
  var now = function () { return Date.now(); };

  // ---------------- icons ----------------
  var I = {
    spk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11"/></svg>',
    spk1: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 9a4 4 0 0 1 0 6"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1.2"/><rect x="14" y="5" width="4" height="14" rx="1.2"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/></svg>',
    gridsm: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="5" height="5" rx="1.3"/><rect x="9.5" y="3" width="5" height="5" rx="1.3"/><rect x="16" y="3" width="5" height="5" rx="1.3"/><rect x="3" y="9.5" width="5" height="5" rx="1.3"/><rect x="9.5" y="9.5" width="5" height="5" rx="1.3"/><rect x="16" y="9.5" width="5" height="5" rx="1.3"/><rect x="3" y="16" width="5" height="5" rx="1.3"/><rect x="9.5" y="16" width="5" height="5" rx="1.3"/><rect x="16" y="16" width="5" height="5" rx="1.3"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 5.5C5.5 4 8.5 4 12 6c3.5-2 6.5-2 9-.5V19c-2.5-1.5-5.5-1.5-9 .5-3.5-2-6.5-2-9-.5z"/><path d="M12 6v13.5"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/></svg>',
    cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="6" width="14" height="14" rx="2.5"/><path d="M7 3h11.5A2.5 2.5 0 0 1 21 5.5V17"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>',
    abc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l3.5-10L10 17M4.2 13.5h4.6M13 7v10h3.5a2.5 2.5 0 0 0 0-5H13h3a2.5 2.5 0 0 0 0-5z"/></svg>',
    slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/></svg>',
    repeat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'
  };
  $('#back').innerHTML = I.back; $('#homeBtn').innerHTML = I.home; $('#setBtn').innerHTML = I.gear;

  // ---------------- storage ----------------
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem('mhm.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem('mhm.' + k, JSON.stringify(v)); } catch (e) { } }
  };
  var fav = store.get('fav', {});
  var learned = store.get('learned', {});
  var myWords = store.get('mywords', []);
  var myPass = store.get('passages', []);
  var study = store.get('study', {});
  var DEF = { rate: 0.85, acc: 'en-US', readAr: false, follow: true, theme: 'system', color: 'red', bg: 'paper', barStyle: 'calm', fs: 16, layout: 'list', hideTr: false, hideAr: false, hideDone: false, goal: 20, rdSpeed: 'medium', rdMode: 'cont', rdAr: false, voice: '' };
  var cfg = store.get('cfg', {}); Object.keys(DEF).forEach(function (k) { if (cfg[k] === undefined) cfg[k] = DEF[k]; });
  var save = function () { store.set('fav', fav); store.set('learned', learned); store.set('cfg', cfg); store.set('mywords', myWords); store.set('passages', myPass); };

  // ---------------- theme ----------------
  var ACCENTS = { red: ['#c8352a', '#ee6b5f'], blue: ['#2952cc', '#8aa6ff'], green: ['#1f7a4d', '#52c690'], purple: ['#6d3fc0', '#b59bff'], orange: ['#c2590f', '#ff9d57'], teal: ['#0f7b7b', '#4fd1c5'], slate: ['#3d4a5c', '#a8b4c8'] };
  var GROUNDS = {
    white: { l: ['#f7f7f8', '#ffffff', '#efeff2', '#e4e4e8'], d: ['#111214', '#1a1b1f', '#24252a', '#2e2f35'], name: 'أبيض' },
    paper: { l: ['#f6f1e6', '#fffbf2', '#efe7d6', '#e3d9c4'], d: ['#17140f', '#211d16', '#2b261d', '#383126'], name: 'ورقي دافئ' },
    gray: { l: ['#eef0f3', '#ffffff', '#e5e8ec', '#d9dde3'], d: ['#15171b', '#1e2126', '#272b31', '#323740'], name: 'رمادي' },
    night: { l: ['#f6f5f2', '#ffffff', '#efede8', '#e5e1da'], d: ['#000000', '#0e0e10', '#18181b', '#232327'], name: 'أسود ليلي' }
  };
  var isDark = false;
  function hexA(h, a) { var n = parseInt(h.slice(1), 16); return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')'; }
  function applyTheme() {
    isDark = cfg.theme === 'dark' || (cfg.theme === 'system' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    var g = (GROUNDS[cfg.bg] || GROUNDS.paper)[isDark ? 'd' : 'l'];
    var acc = (ACCENTS[cfg.color] || ACCENTS.red)[isDark ? 1 : 0];
    var r = document.documentElement.style;
    r.setProperty('--bg', g[0]); r.setProperty('--surface', g[1]); r.setProperty('--surface2', g[2]); r.setProperty('--line', g[3]);
    r.setProperty('--ink', isDark ? '#ece9e4' : '#1d1b22'); r.setProperty('--muted', isDark ? '#a3a0a9' : '#66626d');
    r.setProperty('--accent', acc); r.setProperty('--on-accent', isDark ? '#111' : '#fff'); r.setProperty('--hl', hexA(acc, isDark ? 0.18 : 0.11));
    r.setProperty('--ok', isDark ? '#5fd39a' : '#1f7a4d'); r.setProperty('--gold', isDark ? '#ffc93c' : '#c98a00');
    r.setProperty('--fs', cfg.fs + 'px');
    $('#bar').className = 'bar' + (cfg.barStyle === 'color' ? ' color' : '');
    var barColor = cfg.barStyle === 'color' ? acc : g[1];
    if (window.Android && Android.setColors) { try { Android.setColors(barColor, g[0], cfg.barStyle === 'color' ? !isDark : isDark); } catch (e) { } }
  }
  applyTheme();
  if (window.matchMedia) { try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme); } catch (e) { } }

  // ---------------- index ----------------
  var SEC_ORDER = ['letters', 'rules', 'numdate', 'vocab', 'helpers', 'demo', 'grammar', 'inter-grammar', 'sentences', 'inter-talk'];
  DB.sort(function (a, b) { return SEC_ORDER.indexOf(a.id) - SEC_ORDER.indexOf(b.id); });
  var FOLDERS = {}, TOTAL = 0, ALL = [];
  DB.forEach(function (s) {
    s.folders.forEach(function (f) {
      f.sec = s; FOLDERS[f.id] = f; TOTAL += f.items.length;
      f.items.forEach(function (it) { it.key = f.id + '::' + plain(it.t || it.num || it.en); it.folder = f; ALL.push(it); });
    });
  });
  var MYF = { id: 'mywords', name: 'كلماتي من القراءة', sec: { name: 'القراءة التفاعلية', color: '#555' } };
  function myItems() { return myWords.map(function (w) { return { en: w.en, tr: w.tr || '', ar: w.ar || '', key: 'mywords::' + w.en, folder: MYF, mine: true }; }); }
  function allItems() { return ALL.concat(myItems()); }
  var countDone = function (items) { var n = 0; items.forEach(function (i) { if (learned[i.key]) n++; }); return n; };
  var secItems = function (s) { var a = []; s.folders.forEach(function (f) { a = a.concat(f.items); }); return a; };

  // dictionary for the reader
  var DICT = {};
  function addDict(w, tr, ar) { w = String(w || '').toLowerCase().trim(); if (!w || /\s/.test(w) || DICT[w]) return; DICT[w] = { tr: tr, ar: ar }; }
  ALL.forEach(function (it) {
    var en = plain(it.w ? it.t : it.en);
    if (!en) return;
    var ens = en.split(/\s*[—\/]\s*/), trs = String(it.tr || it.s || '').split(/\s*[—\/]\s*/), ars = String(it.ar || '').split(/\s*[—\/]\s*/);
    if (it.w) { var p = it.s.split(' — '); trs = [p[0]]; ars = [p.slice(1).join(' — ')]; }
    ens.forEach(function (w, i) { addDict(w.replace(/[.,!?]/g, ''), trs[i] || trs[0] || '', ars[i] || ars[0] || ''); });
    if (it.ex) it.ex.forEach(function (e) { var w = plain(e.en); if (!/\s/.test(w)) addDict(w, e.tr, e.ar); });
  });

  // ---------------- study time ----------------
  var lastAct = now(), paused = false, speaking = false;
  function dayKey(d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  ['touchstart', 'click', 'keydown', 'wheel', 'touchmove'].forEach(function (ev) { document.addEventListener(ev, function () { lastAct = now(); }, { passive: true }); });
  setInterval(function () {
    if (paused || document.hidden) return;
    if (now() - lastAct > 120000 && !speaking) return;
    var k = dayKey(); study[k] = (study[k] || 0) + 10; store.set('study', study);
  }, 10000);
  window.appPause = function () { paused = true; stopAll(); };
  window.appResume = function () { paused = false; lastAct = now(); };
  function fmtMin(sec) { var m = Math.round(sec / 60); if (m < 60) return m + ' د'; return Math.floor(m / 60) + ' س ' + (m % 60) + ' د'; }
  function streak() { var n = 0, d = new Date(); if ((study[dayKey(d)] || 0) < 60) d.setDate(d.getDate() - 1); while ((study[dayKey(d)] || 0) >= 60) { n++; d.setDate(d.getDate() - 1); } return n; }

  // ---------------- speech engine ----------------
  var native = !!(window.Android && Android.speak);
  var hasRange = native ? !!(Android.supportsRange && Android.supportsRange()) : ('speechSynthesis' in window);
  if (native && Android.setVoice) { try { Android.setVoice(cfg.voice || ''); } catch (e) { } }
  var Q = [], playing = false, seq = 0, curId = null, META = {}, onFinish = null, arOk = true, lastTouch = 0;
  ['touchstart', 'touchmove', 'wheel'].forEach(function (ev) { window.addEventListener(ev, function () { lastTouch = now(); }, { passive: true }); });

  function speak(it) {
    var id = 'u' + (++seq); META[id] = it; curId = id; speaking = true;
    var rate = it.rate || cfg.rate, lang = it.lang || cfg.acc;
    if (native) { Android.speak(plain(it.text), lang, rate, id); return; }
    if (!('speechSynthesis' in window)) { toast('النطق غير متوفر هنا'); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(plain(it.text)); u.lang = lang === 'ar' ? 'ar-SA' : lang; u.rate = rate;
    if (lang !== 'ar' && cfg.voice) { var vv = speechSynthesis.getVoices().filter(function (x) { return x.name === cfg.voice; })[0]; if (vv) u.voice = vv; }
    u.onstart = function () { window.ttsStart(id); };
    u.onend = function () { window.ttsDone(id); };
    u.onerror = function () { window.ttsDone(id); };
    u.onboundary = function (e) { if (e.name === 'word' || e.charLength) window.ttsRange(id, e.charIndex, e.charIndex + (e.charLength || 1)); };
    speechSynthesis.speak(u);
  }
  function stopAll() {
    Q = []; playing = false; curId = null; speaking = false; onFinish = null;
    if (native) { try { Android.stop(); } catch (e) { } } else if ('speechSynthesis' in window) speechSynthesis.cancel();
    clearHL(); setPlayBtn(); if (RD.on) RD.stopped();
  }
  function clearHL() { $$('.card.on, .ex li.on').forEach(function (e) { e.classList.remove('on'); }); }
  function follow(el) {
    if (!cfg.follow || !el) return;
    if (now() - lastTouch < 4000) return;           // the user is scrolling: never pull the page
    var r = el.getBoundingClientRect(), top = 64, bottom = window.innerHeight - 24;
    if (r.top >= top && r.bottom <= bottom) return;  // already visible: don't move
    window.scrollBy({ top: r.top - window.innerHeight / 2 + r.height / 2, behavior: 'smooth' });
  }
  window.ttsStart = function (id) {
    if (id !== curId) return;
    var m = META[id]; if (!m) return;
    if (m.onStart) m.onStart();
    if (!m.tag) return;
    clearHL();
    var el = document.getElementById(m.tag);
    if (el) { el.classList.add('on'); if (playing) follow(el); }
  };
  window.ttsRange = function (id, s) { var m = META[id]; if (id === curId && m && m.onRange) m.onRange(s); };
  window.ttsDone = function (id) {
    if (id !== curId) return;
    var m = META[id]; delete META[id];
    if (m && m.onDone) m.onDone();
    if (playing && Q.length) {
      var n = Q.shift(); var gap = n.gap != null ? n.gap : 350;
      setTimeout(function () { if (playing) speak(n); }, gap);
    } else {
      playing = false; speaking = false; curId = null;
      if (!m || !m.keepHL) clearHL();
      setPlayBtn();
      var f = onFinish; onFinish = null; if (f) f();
    }
  };
  window.ttsStop = function () { };
  window.ttsReady = function (ok) { if (ok !== '1') showNotice('noengine'); };
  window.ttsProblem = function (p) {
    if (p === 'noarabic') { arOk = false; toast('الصوت العربي غير مثبت في هاتفك، سيُقرأ الإنجليزي فقط'); }
    else showNotice(p);
  };
  function sayOne(text, lang, tag, rate) { Q = []; playing = false; onFinish = null; if (RD.on) RD.stopped(); speak({ text: text, lang: lang || cfg.acc, tag: tag, rate: rate }); }
  function runQueue(items, done) {
    stopAll(); if (!items.length) return;
    Q = items.slice(); playing = true; onFinish = done || null; speak(Q.shift()); setPlayBtn();
  }
  function itemQueue(it, i) {
    var q = [], tag = 'c' + i;
    if (it.ex && it.ex.length) {
      if (it.say) q.push({ text: it.say, tag: tag });
      it.ex.forEach(function (e, j) { q.push({ text: e.en, tag: 'c' + i + 'x' + j }); });
    } else {
      q.push({ text: it.en, tag: tag, gap: 650 });
      if (cfg.readAr && arOk && it.ar) q.push({ text: it.ar, lang: 'ar', tag: tag, gap: 250 });
    }
    return q;
  }
  function setPlayBtn() { var b = $('#playall'); if (b) b.innerHTML = playing && !RD.on ? I.stop + ' إيقاف' : I.play + ' استمع للكل'; }

  // notices without re-rendering the page (re-rendering used to jump to the top)
  function showNotice(k) {
    var n = $('#notice');
    var msg = k === 'noenglish' ? 'صوت الإنجليزية غير مثبت في هاتفك. ثبّته مرة واحدة ليعمل زر السماعة.' : 'محرك النطق في الهاتف غير جاهز. ثبّت أو فعّل «خدمة تحويل النص إلى كلام من Google».';
    n.innerHTML = '<span style="flex:1">' + msg + '</span><button data-act="install">تثبيت الصوت</button><button data-act="hidenotice">إغلاق</button>';
    n.hidden = false;
  }
  var tt;
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('show'); }, 2200); }

  // ---------------- routing ----------------
  var cur = [], POS = {}, curRoute = null, freshNav = false;
  function route() { return decodeURIComponent((location.hash || '#').slice(1)); }
  function go(h) { POS[h] = 0; freshNav = true; if (route() !== h) location.hash = h; else render(); }
  window.addEventListener('scroll', function () { if (curRoute != null) POS[curRoute] = window.scrollY; }, { passive: true });
  window.addEventListener('hashchange', function () { stopAll(); closeSheet(); closeWbar(); render(); });

  function setBar(title, sub, opts) {
    opts = opts || {};
    $('#ttl').innerHTML = esc(title) + (sub ? '<small>' + esc(sub) + '</small>' : '');
    $('#back').hidden = !!opts.home; $('#homeBtn').hidden = !!opts.home;
    var lb = $('#layoutBtn'); lb.hidden = !opts.layout;
    lb.innerHTML = cfg.layout === 'list' ? I.list : cfg.layout === 'grid' ? I.grid : I.gridsm;
  }

  // ---------------- views ----------------
  function ring(pct) {
    var C = 2 * Math.PI * 24, off = C * (1 - Math.min(1, pct));
    return '<svg viewBox="0 0 58 58"><circle cx="29" cy="29" r="24" fill="none" stroke="var(--surface2)" stroke-width="6"/><circle cx="29" cy="29" r="24" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/></svg>';
  }
  function tile(go_, badge, color, name, sub, pct, ltr) {
    return '<button class="tile" data-go="' + esc(go_) + '"><span class="badge" style="background:' + color + '">' + esc(badge) + '</span><span class="tx"><b>' + esc(name) + '</b><small>' + esc(sub) + '</small>' +
      (pct != null ? '<span class="meter"><i style="width:' + pct + '%"></i></span>' : '') + '</span><span class="chev">‹</span></button>';
  }
  function viewHome() {
    setBar('MHM English', 'تعلّم الإنجليزية خطوة بخطوة', { home: true, layout: true });
    var today = study[dayKey()] || 0, goal = cfg.goal * 60, l = Object.keys(learned).length, f = Object.keys(fav).length;
    var h = '<button class="today" data-go="stats"><span class="ring">' + ring(today / goal) + '<b>' + Math.round(today / 60) + '</b></span><span class="tx"><b>اليوم ' + fmtMin(today) + ' من ' + cfg.goal + ' د</b><span>سلسلة ' + streak() + ' يوم · أتقنت ' + l + ' من ' + TOTAL + '</span></span><span class="chev">‹</span></button>';
    h += '<form class="search" id="sform">' + I.search + '<input id="sq" type="search" placeholder="ابحث عن كلمة أو جملة بالعربي أو الإنجليزي" autocomplete="off"></form>';
    h += '<div class="quick">' +
      '<button class="qk" data-go="saved">' + I.star + '<b>المحفوظات</b>' + f + '</button>' +
      '<button class="qk" data-go="reader">' + I.book + '<b>القراءة</b>التفاعلية</button>' +
      '<button class="qk" data-go="review">' + I.cards + '<b>مراجعة</b>سريعة</button>' +
      '<button class="qk" data-go="learned">' + I.check + '<b>أتقنتها</b>' + l + '</button>' +
      '<button class="qk" data-go="stats">' + I.chart + '<b>وقت</b>الدراسة</button></div>';
    CATS.forEach(function (c) {
      var secs = DB.filter(function (s) { return s.cat === c.id; });
      if (!secs.length) return;
      h += '<h2 class="cat">' + esc(c.name) + '</h2><div class="tiles ' + cfg.layout + '">';
      secs.forEach(function (s) {
        var items = secItems(s), p = items.length ? Math.round(countDone(items) * 100 / items.length) : 0;
        h += tile('s/' + s.id, s.badge, s.color, s.name, s.desc + ' · ' + items.length, p);
      });
      if (c.id === 'read') h += tile('reader', 'Read', '#37474f', 'القراءة التفاعلية', 'قطع تقرأها مع التطبيق كلمة كلمة · ' + (PASSAGES.length + myPass.length), null);
      h += '</div>';
    });
    h += '<p class="foot">الكتابة العربية للنطق تقريبية — الأدق دائماً هو زر السماعة · ' + TOTAL + ' عنصراً</p>';
    app.innerHTML = h;
    $('#sform').addEventListener('submit', function (e) { e.preventDefault(); var v = $('#sq').value.trim(); if (v) go('q/' + v); });
  }

  function viewSection(id) {
    var s = SECTION(id); if (!s) return viewHome();
    var items = secItems(s);
    setBar(s.name, s.folders.length + ' مجلد · ' + items.length + ' عنصر', { layout: true });
    var h = '<div class="shead"><span class="badge" style="background:' + s.color + '">' + esc(s.badge) + '</span><span class="tx"><b>' + esc(s.name) + '</b><small>' + esc(s.desc) + ' · أتقنت ' + countDone(items) + ' من ' + items.length + '</small></span></div>';
    h += '<div class="tiles ' + cfg.layout + '">';
    s.folders.forEach(function (f, i) {
      var n = countDone(f.items), p = f.items.length ? Math.round(n * 100 / f.items.length) : 0;
      h += '<button class="tile" data-go="f/' + f.id + '"><span class="fic" style="background:' + hexA(s.color, 0.14) + ';color:' + s.color + '">' + (i + 1) + '</span><span class="tx"><b>' + esc(f.name) + '</b><small>' + f.items.length + ' عنصر' + (f.desc ? ' · ' + esc(f.desc) : '') + '</small><span class="meter"><i style="width:' + p + '%"></i></span></span><span class="chev">‹</span></button>';
    });
    app.innerHTML = h + '</div>';
  }

  function toolbar(extra) {
    return '<div class="tools"><button class="pill main" id="playall" data-act="playall">' + I.play + ' استمع للكل</button>' +
      '<button class="pill" data-act="tg" data-k="hideTr" aria-pressed="' + !!cfg.hideTr + '">إخفاء القراءة</button>' +
      '<button class="pill" data-act="tg" data-k="hideAr" aria-pressed="' + !!cfg.hideAr + '">إخفاء المعنى</button>' +
      '<button class="pill" data-act="tg" data-k="hideDone" aria-pressed="' + !!cfg.hideDone + '">إخفاء ما أتقنته</button>' + (extra || '') + '</div>';
  }
  function acts(it, i, showFolder) {
    var h = '<div class="acts"><button class="ab fv" data-act="fav" data-i="' + i + '" aria-pressed="' + !!fav[it.key] + '">' + I.star + (fav[it.key] ? 'محفوظة' : 'احفظ') + '</button>' +
      '<button class="ab ln" data-act="learn" data-i="' + i + '" aria-pressed="' + !!learned[it.key] + '">' + I.check + (learned[it.key] ? 'أتقنتها' : 'أتقنت') + '</button>';
    if (!it.ex && !it.rows && it.ar) h += '<button class="ab" data-act="sayar" data-i="' + i + '">' + I.spk1 + 'المعنى</button>';
    if (!it.ex && !it.rows && it.en) h += '<button class="ab" data-act="slow" data-i="' + i + '">' + I.slow + 'ببطء</button>';
    if (showFolder) h += '<button class="ab" data-go="f/' + it.folder.id + '">' + esc(it.folder.name) + '</button>';
    return h + '</div>';
  }
  function exList(it, i) {
    if (!it.ex || !it.ex.length) return '';
    return '<ul class="ex">' + it.ex.map(function (e, j) {
      return '<li id="c' + i + 'x' + j + '"><span class="t"><div class="e en">' + marked(e.en) + '</div><div class="a"><b>' + esc(e.tr) + '</b> — <span>' + esc(e.ar) + '</span></div></span><button class="spk sm" data-act="sayex" data-i="' + i + '" data-j="' + j + '" aria-label="استمع">' + I.spk + '</button></li>';
    }).join('') + '</ul>';
  }
  function rtc(t) { return /[\u0600-\u06FF]/.test(t) ? 'rt art' : 'rt'; }
  function cardHTML(it, i, showFolder) {
    var h = '<article class="card' + (learned[it.key] ? ' done' : '') + '" id="c' + i + '">';
    var spk = '<button class="spk" data-act="' + (it.ex ? 'sayrule' : 'say') + '" data-i="' + i + '" aria-label="استمع">' + I.spk + '</button>';
    if (it.letter) {
      h += '<div class="lhero"><span class="lbox ltr">' + esc(it.letter) + '</span><span class="lbox lo ltr">' + esc(it.letter.toLowerCase()) + '</span><span class="lname"><b>' + esc(it.s) + '</b>' + (it.vowel ? '<span class="tag">حرف علة</span>' : '<small>حرف ساكن</small>') + '</span>' + spk + '</div>';
      if (it.n) h += '<div class="note">' + esc(it.n) + '</div>';
      h += exList(it, i);
    } else if (it.rows) {
      h += '<div class="rhead"><span class="' + rtc(it.t) + '">' + esc(it.t) + '</span><span class="rs">' + esc(it.s) + '</span>' + (it.ex.length ? spk.replace('data-act="say"', 'data-act="sayrule"') : '') + '</div>';
      if (it.n) h += '<div class="note">' + esc(it.n) + '</div>';
      h += '<table class="tbl">' + it.rows.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>'; }).join('') + '</table>';
      h += exList(it, i);
    } else if (it.ex) {
      h += '<div class="rhead"><span class="' + rtc(it.t) + '">' + esc(it.t) + '</span><span class="rs">' + esc(it.s) + '</span>' + spk + '</div>';
      if (it.n) h += '<div class="note">' + esc(it.n) + '</div>';
      h += exList(it, i);
    } else {
      h += '<div class="top"><div class="txt">' + (it.num ? '<div class="num">' + esc(it.num) + '</div>' : '') + '<p class="en big">' + marked(it.en) + '</p><div class="tr">' + esc(it.tr) + '</div><div class="ar">' + esc(it.ar) + '</div></div>' + spk + '</div>';
      if (it.n) h += '<div class="note">' + esc(it.n) + '</div>';
    }
    return h + acts(it, i, showFolder) + '</article>';
  }
  function listView(items, showFolder, emptyMsg, extraTools) {
    var shown = cfg.hideDone ? items.filter(function (x) { return !learned[x.key]; }) : items;
    cur = shown;
    var h = items.length ? toolbar(extraTools) : '';
    h += shown.length ? '<div class="list' + (cfg.hideTr ? ' hide-tr' : '') + (cfg.hideAr ? ' hide-ar' : '') + '" id="list">' + shown.map(function (it, i) { return cardHTML(it, i, showFolder); }).join('') + '</div>'
      : '<div class="empty">' + (items.length ? 'أتقنت كل ما في هذا المجلد 🎉<br>أوقف «إخفاء ما أتقنته» لعرضها.' : emptyMsg) + '</div>';
    app.innerHTML = h;
  }
  function viewFolder(id) {
    var f = FOLDERS[id]; if (!f) return viewHome();
    setBar(f.name, f.sec.name + ' · ' + f.items.length + ' عنصر · أتقنت ' + countDone(f.items));
    listView(f.items, false, 'لا يوجد محتوى');
  }
  function savedItems() { return allItems().filter(function (i) { return fav[i.key]; }); }
  function viewSaved() {
    var a = savedItems();
    setBar('المحفوظات', a.length + ' عنصر للمراجعة');
    listView(a, true, 'اضغط ★ «احفظ» على أي كلمة أو جملة لتنتقل إلى هنا وتراجعها لاحقاً.', a.length ? '<button class="pill" data-go="review">' + I.cards + ' وضع المراجعة</button>' : '');
  }
  function viewLearned() {
    var a = allItems().filter(function (i) { return learned[i.key]; });
    setBar('أتقنتها', a.length + ' عنصر');
    listView(a, true, 'اضغط ✓ «أتقنت» على ما حفظته جيداً ليظهر هنا.');
  }
  function viewSearch(q) {
    var k = q.toLowerCase();
    var a = allItems().filter(function (i) {
      var t = [i.en, i.tr, i.ar, i.t, i.s, i.n, i.num].join(' ');
      if (i.ex) i.ex.forEach(function (e) { t += ' ' + e.en + ' ' + e.tr + ' ' + e.ar; });
      return plain(t).toLowerCase().indexOf(k) >= 0;
    }).slice(0, 300);
    setBar('بحث: ' + q, a.length + ' نتيجة');
    var save_ = cfg.hideDone; cfg.hideDone = false; listView(a, true, 'لا توجد نتائج لـ «' + esc(q) + '»'); cfg.hideDone = save_;
  }

  // ---------- review (flashcards) ----------
  var RV = { list: [], i: 0, show: false };
  function viewReview() {
    var src = savedItems(), from = 'المحفوظات';
    if (!src.length) { src = ALL.filter(function (x) { return !x.ex && !x.rows && !learned[x.key]; }); from = 'جمل وكلمات عشوائية'; src = shuffle(src).slice(0, 30); }
    if (!RV.list.length || RV.src !== from) { RV.list = shuffle(src.slice()); RV.i = 0; RV.src = from; }
    RV.show = false; drawReview();
  }
  function drawReview() {
    var L_ = RV.list; if (!L_.length) { setBar('مراجعة سريعة', ''); app.innerHTML = '<div class="empty">لا يوجد ما تراجعه.</div>'; return; }
    if (RV.i >= L_.length) RV.i = 0;
    var it = L_[RV.i], en = it.ex ? (it.t + (it.ex[0] ? ' · ' + plain(it.ex[0].en) : '')) : plain(it.en);
    setBar('مراجعة سريعة', (RV.i + 1) + ' من ' + L_.length + ' · ' + RV.src);
    cur = [it];
    app.innerHTML = '<div class="flash" id="c0">' + (it.num ? '<div class="num">' + esc(it.num) + '</div>' : '') + '<div class="en">' + esc(en) + '</div>' +
      '<button class="spk" data-act="' + (it.ex ? 'sayrule' : 'say') + '" data-i="0">' + I.spk + '</button>' +
      (RV.show ? '<div class="tr">' + esc(it.tr || it.s || '') + '</div><div class="ar">' + esc(it.ar || it.n || '') + '</div>' : '<button class="btn ghost" data-act="rvshow">' + 'أظهر المعنى' + '</button>') + '</div>' +
      '<div class="fl-nav"><button class="btn ghost" data-act="rvprev">السابق</button><button class="btn" data-act="rvnext">التالي</button></div>' +
      '<div class="fl-nav"><button class="btn ghost" data-act="learn" data-i="0">' + (learned[it.key] ? '✓ أتقنتها' : 'أتقنتها') + '</button><button class="btn ghost" data-act="fav" data-i="0">' + (fav[it.key] ? '★ إزالة من المحفوظات' : '☆ احفظ') + '</button></div>' +
      '<div class="fl-nav"><button class="btn ghost" data-act="rvshuffle">خلط البطاقات</button></div>';
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  // ---------- stats ----------
  var ST = { tab: 'week', off: 0 };
  var DAYS = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  var DSHORT = ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
  var MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  function viewStats() {
    setBar('وقت الدراسة', 'يُحسب تلقائياً أثناء استخدامك للتطبيق');
    var today = new Date(), tk = dayKey(today);
    var wStart = new Date(today); wStart.setDate(today.getDate() - ((today.getDay() + 1) % 7)); // week starts Saturday
    var weekSec = 0; for (var i = 0; i < 7; i++) { var d = new Date(wStart); d.setDate(wStart.getDate() + i); weekSec += study[dayKey(d)] || 0; }
    var monthSec = 0, allSec = 0, best = 0, days = 0;
    Object.keys(study).forEach(function (k) { var v = study[k]; allSec += v; if (v > best) best = v; if (v >= 60) days++; if (k.slice(0, 7) === tk.slice(0, 7)) monthSec += v; });
    var h = '<div class="kpis"><div class="kpi"><b>' + fmtMin(study[tk] || 0) + '</b><span>اليوم (الهدف ' + cfg.goal + ' د)</span></div><div class="kpi"><b>' + fmtMin(weekSec) + '</b><span>هذا الأسبوع</span></div>' +
      '<div class="kpi"><b>' + fmtMin(monthSec) + '</b><span>هذا الشهر</span></div><div class="kpi"><b>' + streak() + ' يوم</b><span>السلسلة الحالية</span></div>' +
      '<div class="kpi"><b>' + fmtMin(allSec) + '</b><span>المجموع · ' + days + ' يوم دراسة</span></div><div class="kpi"><b>' + Object.keys(learned).length + '</b><span>عنصراً أتقنته</span></div></div>';
    h += '<div class="seg" style="margin-top:12px"><button data-act="sttab" data-v="week" aria-pressed="' + (ST.tab === 'week') + '">حسب أيام الأسبوع</button><button data-act="sttab" data-v="month" aria-pressed="' + (ST.tab === 'month') + '">حسب الشهر</button><button data-act="sttab" data-v="year" aria-pressed="' + (ST.tab === 'year') + '">حسب السنة</button></div>';
    var bars = [], title = '';
    if (ST.tab === 'week') {
      var ws = new Date(wStart); ws.setDate(ws.getDate() - 7 * ST.off);
      var we = new Date(ws); we.setDate(ws.getDate() + 6);
      title = ws.getDate() + ' ' + MONTHS[ws.getMonth()] + ' — ' + we.getDate() + ' ' + MONTHS[we.getMonth()];
      for (var j = 0; j < 7; j++) { var dd = new Date(ws); dd.setDate(ws.getDate() + j); var k = dayKey(dd); bars.push({ v: study[k] || 0, l: DSHORT[dd.getDay()], t: k === tk }); }
    } else if (ST.tab === 'month') {
      var m = new Date(today.getFullYear(), today.getMonth() - ST.off, 1);
      title = MONTHS[m.getMonth()] + ' ' + m.getFullYear();
      var nd = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
      for (var x = 1; x <= nd; x++) { var d2 = new Date(m.getFullYear(), m.getMonth(), x), k2 = dayKey(d2); bars.push({ v: study[k2] || 0, l: (x === 1 || x % 5 === 0) ? String(x) : '', t: k2 === tk }); }
    } else {
      var y = today.getFullYear() - ST.off; title = 'سنة ' + y;
      for (var mm = 0; mm < 12; mm++) { var s2 = 0, pre = y + '-' + ('0' + (mm + 1)).slice(-2); Object.keys(study).forEach(function (k) { if (k.slice(0, 7) === pre) s2 += study[k]; }); bars.push({ v: s2, l: MONTHS[mm].slice(0, 3), t: y === today.getFullYear() && mm === today.getMonth() }); }
    }
    var max = Math.max.apply(null, bars.map(function (b) { return b.v; }).concat([ST.tab === 'year' ? 3600 : cfg.goal * 60]));
    h += '<div class="chart"><div class="chart-h"><button class="ib" data-act="stoff" data-v="1" aria-label="السابق">' + I.back + '</button><b>' + esc(title) + '</b><button class="ib" data-act="stoff" data-v="-1" aria-label="التالي" ' + (ST.off === 0 ? 'disabled style="opacity:.3"' : '') + '><span style="display:inline-block;transform:scaleX(-1)">' + I.back + '</span></button></div>' +
      '<div class="bars">' + bars.map(function (b) {
        var mins = Math.round(b.v / 60), lab = ST.tab === 'year' ? (b.v >= 3600 ? (b.v / 3600).toFixed(1) + 'س' : (mins || '')) : (mins || '');
        return '<div class="bar-c' + (b.t ? ' today' : '') + '"><small>' + (bars.length > 12 ? '' : lab) + '</small><i style="height:' + Math.max(1, Math.round(b.v / max * 100)) + '%"></i><em>' + esc(b.l) + '</em></div>';
      }).join('') + '</div></div>';
    h += '<p class="foot">يُحسب الوقت فقط عندما يكون التطبيق مفتوحاً وتستخدمه فعلاً (يتوقف بعد دقيقتين دون لمس، إلا أثناء الاستماع).</p>';
    app.innerHTML = h;
  }

  // ---------- voices ----------
  var LOCN = { en_US: 'أمريكي', en_GB: 'بريطاني', en_AU: 'أسترالي', en_IN: 'هندي', en_CA: 'كندي', en_IE: 'أيرلندي', en_NG: 'نيجيري', en_ZA: 'جنوب أفريقي' };
  function listVoices() {
    var out = [];
    if (native && Android.voices) { try { out = JSON.parse(Android.voices()); } catch (e) { out = []; } }
    else if ('speechSynthesis' in window) out = speechSynthesis.getVoices().filter(function (v) { return /^en/i.test(v.lang); }).map(function (v) { return { name: v.name, loc: v.lang.replace('-', '_'), q: v.localService ? 300 : 400, net: !v.localService }; });
    var pref = cfg.acc.replace('-', '_');
    out.sort(function (a, b) { return (b.loc === pref) - (a.loc === pref) || (a.net - b.net) || (b.q - a.q) || (a.name < b.name ? -1 : 1); });
    return out;
  }
  function voiceSection() {
    var vs = listVoices();
    var ql = function (q) { return q >= 500 ? 'جودة عالية جداً' : q >= 400 ? 'جودة عالية' : q >= 300 ? 'جودة جيدة' : 'جودة عادية'; };
    var h = '<div class="set"><label>صوت القارئ</label><p>لأوضح نطق: اختر صوتاً «جودة عالية جداً». الأصوات المكتوب عليها «إنترنت» أكثر طبيعية لكنها تحتاج اتصالاً. اضغط أي صوت لتسمعه.</p>' +
      '<div class="tiles list"><button class="tile" data-act="voice" data-v="" aria-pressed="' + (!cfg.voice) + '"><span class="tx"><b>تلقائي</b><small>أفضل صوت مثبّت في هاتفك للهجة المختارة</small></span>' + (!cfg.voice ? '<span style="color:var(--accent)">' + I.check + '</span>' : '') + '</button>';
    vs.slice(0, 24).forEach(function (v, i) {
      var code = (v.name.match(/-x-([a-z]+)/) || [])[1] || v.name;
      var sel = cfg.voice === v.name;
      h += '<button class="tile" data-act="voice" data-v="' + esc(v.name) + '" aria-pressed="' + sel + '"><span class="tx"><b>' + esc(LOCN[v.loc] || v.loc) + ' · صوت ' + esc(code) + '</b><small>' + ql(v.q) + (v.net ? ' · إنترنت' : ' · بدون إنترنت') + '</small></span>' + (sel ? '<span style="color:var(--accent);width:22px">' + I.check + '</span>' : '') + '</button>';
    });
    h += '</div>';
    if (!vs.length) h += '<p style="margin-top:8px">لم تظهر الأصوات بعد. <button class="pill" data-act="vrefresh">تحديث القائمة</button></p>';
    h += '<p style="margin-top:8px">للحصول على أصوات أكثر وضوحاً: «فتح إعدادات الصوت» ← محرك Google ← تثبيت بيانات الصوت ← الإنجليزية، ثم نزّل الصوت عالي الجودة.</p></div>';
    return h;
  }

  // ---------- settings ----------
  function viewSettings() {
    setBar('الإعدادات', '');
    var seg = function (name, opts) { return '<div class="seg">' + opts.map(function (o) { return '<button data-set="' + name + '" data-v="' + o[0] + '" aria-pressed="' + (String(cfg[name]) === String(o[0])) + '">' + o[1] + '</button>'; }).join('') + '</div>'; };
    var sw = function (name, label) { return '<div class="row"><span>' + label + '</span><button class="switch" data-set="' + name + '" data-v="' + (!cfg[name]) + '" aria-pressed="' + !!cfg[name] + '" aria-label="' + label + '"></button></div>'; };
    app.innerHTML =
      '<div class="set"><label>المظهر</label>' + seg('theme', [['system', 'حسب النظام'], ['light', 'فاتح'], ['dark', 'داكن']]) + '</div>' +
      '<div class="set"><label>اللون الرئيسي</label><div class="sw">' + Object.keys(ACCENTS).map(function (k) { return '<button data-set="color" data-v="' + k + '" aria-pressed="' + (cfg.color === k) + '" style="background:' + ACCENTS[k][isDark ? 1 : 0] + '" aria-label="' + k + '"></button>'; }).join('') + '</div></div>' +
      '<div class="set"><label>لون الخلفية</label><p>«ورقي دافئ» مريح للعين، و«أسود ليلي» مناسب للقراءة في الظلام مع الوضع الداكن.</p>' + seg('bg', Object.keys(GROUNDS).map(function (k) { return [k, GROUNDS[k].name]; })) + '</div>' +
      '<div class="set"><label>الشريط العلوي</label>' + seg('barStyle', [['calm', 'هادئ'], ['color', 'ملوّن']]) + '</div>' +
      '<div class="set"><label>حجم الخط</label>' + seg('fs', [[14, 'صغير'], [16, 'متوسط'], [18, 'كبير'], [20, 'كبير جداً']]) + '</div>' +
      '<div class="set"><label>عرض الأقسام والمجلدات</label>' + seg('layout', [['list', 'قائمة عمودية'], ['grid', 'مربعات كبيرة'], ['grid-sm', 'مربعات صغيرة']]) + '</div>' +
      '<div class="set"><label>سرعة النطق: <span id="rv">' + Number(cfg.rate).toFixed(2) + '</span></label><input type="range" id="rate" min="0.4" max="1.4" step="0.05" value="' + cfg.rate + '"><div class="row"><span>اللهجة</span></div>' + seg('acc', [['en-US', 'أمريكية'], ['en-GB', 'بريطانية']]) +
      '<div style="margin-top:8px"><button class="pill" data-act="test">' + I.spk + ' تجربة الصوت</button></div>' +
      sw('readAr', 'في «استمع للكل» اقرأ المعنى بالعربي أيضاً') + sw('follow', 'تابع الصفحة تلقائياً أثناء القراءة') + '</div>' +
      voiceSection() +
      '<div class="set"><label>هدف الدراسة اليومي</label>' + seg('goal', [[10, '10 د'], [20, '20 د'], [30, '30 د'], [45, '45 د'], [60, 'ساعة']]) + '</div>' +
      '<div class="set"><label>الصوت لا يعمل؟</label><p>يستخدم التطبيق محرك النطق في هاتفك (يعمل بدون إنترنت). إذا لم تسمع شيئاً ثبّت صوت الإنجليزية من إعدادات Google للنطق.</p><button class="pill" data-act="install">فتح إعدادات الصوت</button></div>' +
      '<div class="set"><label>البيانات</label><div class="sw" style="gap:8px"><button class="btn danger" data-act="reset" data-what="progress">مسح «أتقنتها» والمحفوظات</button><button class="btn danger" data-act="reset" data-what="time">مسح وقت الدراسة</button></div></div>' +
      '<p class="foot">MHM English · ' + TOTAL + ' عنصراً · ' + PASSAGES.length + ' قطعة قراءة</p>';
    $('#rate').addEventListener('input', function (e) { cfg.rate = +e.target.value; $('#rv').textContent = cfg.rate.toFixed(2); save(); });
  }

  // ---------------- interactive reader ----------------
  var SPEEDS = { slow: { rate: 0.55, gap: 700, name: 'بطيئة' }, medium: { rate: 0.75, gap: 420, name: 'متوسطة' }, normal: { rate: 0.95, gap: 200, name: 'عادية' }, fast: { rate: 1.2, gap: 80, name: 'سريعة' } };
  var RD = { on: false, p: null, words: [], sents: [], idx: 0, est: null, gotRange: false, stopped: function () { RD.on = false; clearTimeout(RD.est); setRdBtn(); } };
  function getPassage(id) { var a = PASSAGES.concat(myPass); for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i]; return null; }
  function viewReaderList() {
    setBar('القراءة التفاعلية', 'اقرأ مع التطبيق كلمة كلمة');
    var h = '<div class="tools"><button class="pill main" data-go="pedit/new">' + I.plus + ' أضف قطعتك</button></div>';
    var lv = { A1: 'مبتدئ', A2: 'ما قبل المتوسط', B1: 'متوسط' };
    if (myPass.length) {
      h += '<h2 class="cat">قطعي</h2><div class="tiles list">';
      myPass.forEach(function (p) { h += '<button class="tile" data-go="read/' + p.id + '"><span class="fic ltr" style="background:var(--hl);color:var(--accent)">' + I.edit + '</span><span class="tx"><b class="ltr" style="text-align:right">' + esc(p.title) + '</b><small>' + p.text.split(/\s+/).length + ' كلمة</small></span><span class="chev">‹</span></button>'; });
      h += '</div>';
    }
    ['A1', 'A2', 'B1'].forEach(function (L_) {
      h += '<h2 class="cat">' + lv[L_] + ' <span class="lvl">' + L_ + '</span></h2><div class="tiles list">';
      PASSAGES.filter(function (p) { return p.level === L_; }).forEach(function (p) {
        h += '<button class="tile" data-go="read/' + p.id + '"><span class="fic" style="background:var(--hl);color:var(--accent)">' + L_ + '</span><span class="tx"><b>' + esc(p.ar_title) + '</b><small class="ltr" style="text-align:right">' + esc(p.title) + ' · ' + p.text.split(/\s+/).length + ' كلمة</small></span><span class="chev">‹</span></button>';
      });
      h += '</div>';
    });
    app.innerHTML = h;
  }
  function viewReader(id) {
    var p = getPassage(id); if (!p) return viewReaderList();
    RD.p = p; RD.idx = 0; RD.on = false;
    setBar(p.ar_title || p.title, p.level ? 'المستوى ' + p.level : 'قطعتي');
    // tokenise
    var text = p.text, re = /[A-Za-z0-9’'’\-]+/g, m, words = [];
    while ((m = re.exec(text))) words.push({ s: m.index, e: m.index + m[0].length, w: m[0] });
    RD.words = words;
    var sents = [], sr = /[^.!?\n]+[.!?]*["”’']?\s*/g, sm;
    while ((sm = sr.exec(text))) { if (sm[0].trim()) sents.push({ s: sm.index, e: sm.index + sm[0].length }); }
    RD.sents = sents;
    var html = '', last = 0;
    words.forEach(function (w, i) { html += esc(text.slice(last, w.s)).replace(/\n/g, '<br>') + '<span class="w" id="w' + i + '" data-w="' + i + '">' + esc(w.w) + '</span>'; last = w.e; });
    html += esc(text.slice(last)).replace(/\n/g, '<br>');
    var sp = function (k) { return '<button data-act="rdspeed" data-v="' + k + '" aria-pressed="' + (cfg.rdSpeed === k) + '">' + SPEEDS[k].name + '</button>'; };
    var h = '<div class="rd-tools"><div class="rd-row"><button class="play" id="rdplay" data-act="rdplay" aria-label="تشغيل">' + I.play + '</button>' +
      '<div class="seg" style="flex:1">' + sp('slow') + sp('medium') + sp('normal') + sp('fast') + '</div></div>' +
      '<div class="rd-row"><div class="seg" style="flex:1"><button data-act="rdmode" data-v="cont" aria-pressed="' + (cfg.rdMode === 'cont') + '">قراءة متصلة</button><button data-act="rdmode" data-v="word" aria-pressed="' + (cfg.rdMode === 'word') + '">كلمة كلمة</button></div>' +
      '<button class="pill" data-act="rdrepeat">' + I.repeat + ' أعد الجملة</button><button class="pill" data-act="rdar" aria-pressed="' + !!cfg.rdAr + '">الترجمة</button>' + (p.mine ? '<button class="pill" data-go="pedit/' + p.id + '">' + I.edit + '</button>' : '') + '</div></div>';
    h += '<div class="passage" id="passage">' + html + '</div>';
    if (p.ar) h += '<div class="rd-ar" id="rdar"' + (cfg.rdAr ? '' : ' hidden') + '>' + esc(p.ar) + '</div>';
    h += '<p class="foot">اضغط على أي كلمة لسماعها مرة أخرى أو لإعادة جملتها. اضغط مطولاً على الكلمة للتهجئة والمعنى وقواعد النطق.</p>';
    app.innerHTML = h;
  }
  function setRdBtn() { var b = $('#rdplay'); if (b) b.innerHTML = RD.on ? I.pause : I.play; }
  function rdMark(i) {
    var old = $('.passage .w.on'); if (old) old.classList.remove('on');
    var el = document.getElementById('w' + i); if (!el) return;
    el.classList.add('on'); RD.idx = i;
    for (var k = 0; k < i; k++) { var e2 = document.getElementById('w' + k); if (e2) e2.classList.add('read'); }
    follow(el);
  }
  function wordAt(off) { var W_ = RD.words, lo = 0, hi = W_.length - 1, ans = 0; while (lo <= hi) { var mid = (lo + hi) >> 1; if (W_[mid].s <= off) { ans = mid; lo = mid + 1; } else hi = mid - 1; } return ans; }
  function sentOf(i) { var w = RD.words[i]; for (var k = 0; k < RD.sents.length; k++) if (w.s >= RD.sents[k].s && w.s < RD.sents[k].e) return RD.sents[k]; return RD.sents[RD.sents.length - 1]; }
  function rdStart(from, only) {
    stopAll(); if (!RD.words.length) return;
    from = Math.max(0, Math.min(from || 0, RD.words.length - 1));
    $$('.passage .w.read').forEach(function (e) { e.classList.remove('read'); });
    var sp = SPEEDS[cfg.rdSpeed] || SPEEDS.medium, q = [], one = only ? sentOf(from) : null;
    if (one) { from = wordAt(one.s); if (RD.words[from].s < one.s) from++; }
    $$('.passage .w.sent').forEach(function (e) { e.classList.remove('sent'); });
    if (one) RD.words.forEach(function (w, k) { if (w.s >= one.s && w.e <= one.e) { var el = document.getElementById('w' + k); if (el) el.classList.add('sent'); } });
    if (cfg.rdMode === 'word') {
      for (var i = from; i < RD.words.length && (!one || RD.words[i].e <= one.e); i++) (function (i) { q.push({ text: RD.words[i].w, rate: sp.rate, gap: sp.gap, onStart: function () { rdMark(i); } }); })(i);
    } else {
      var start = RD.words[from].s;
      RD.sents.forEach(function (s) {
        if (s.e <= start) return;
        if (one && s !== one) return;
        var cs = Math.max(s.s, start), chunk = RD.p.text.slice(cs, s.e);
        if (!chunk.trim()) return;
        q.push({
          text: chunk, rate: sp.rate, gap: Math.round(sp.gap / 2) + 150,
          onStart: function () {
            RD.gotRange = false; var first = wordAt(cs); rdMark(first);
            // fallback when the phone does not report word positions: estimate by time
            clearTimeout(RD.est);
            var ws = RD.words.filter(function (w) { return w.s >= cs && w.e <= s.e; });
            var per = 60000 / (165 * sp.rate), k = 0;
            (function tick() {
              RD.est = setTimeout(function () {
                if (!RD.on || RD.gotRange) return; k++;
                if (k < ws.length) { rdMark(RD.words.indexOf(ws[k])); tick(); }
              }, per * Math.max(1, ws[k] ? ws[k].w.length / 4.5 : 1));
            })();
          },
          onRange: function (off) { RD.gotRange = true; clearTimeout(RD.est); rdMark(wordAt(cs + off)); },
          onDone: function () { clearTimeout(RD.est); }
        });
      });
    }
    RD.on = true; setRdBtn();
    runQueue(q, function () {
      RD.on = false; setRdBtn(); var o = $('.passage .w.on'); if (o) o.classList.remove('on');
      if (one) { $$('.passage .w.sent').forEach(function (e) { e.classList.remove('sent'); }); RD.idx = from; }
      else toast('انتهت القراءة 👏');
    });
    RD.on = true; setRdBtn();
  }

  // tap a word: stop, say it, and offer replay / sentence / continue
  var WBi = 0;
  function wordTap(i) {
    stopAll(); RD.idx = i; WBi = i;
    $$('.passage .w.pick').forEach(function (e) { e.classList.remove('pick'); });
    var el = document.getElementById('w' + i); if (el) el.classList.add('pick');
    var w = RD.words[i].w.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, ''), d = lookup(w);
    var host = $('#wbar'); if (!host) { host = document.createElement('div'); host.id = 'wbar'; document.body.appendChild(host); }
    host.className = 'wbar';
    host.innerHTML = '<div class="wt"><b>' + esc(w) + '</b><span>' + (d ? esc(d.ar) : '') + '</span><button class="ib" data-act="wclose" aria-label="إغلاق">' + I.x + '</button></div>' +
      '<div class="wb"><button data-act="wagain">' + I.spk + 'الكلمة</button><button data-act="wslow">' + I.slow + 'ببطء</button>' +
      '<button data-act="wsent">' + I.repeat + 'الجملة</button><button data-act="wfrom">' + I.play + 'أكمل من هنا</button><button data-act="whelp">' + I.info + 'تهجئة ومعنى</button></div>';
    sayWord(w);
  }
  function sayWord(w, slow) { Q = []; playing = false; onFinish = null; RD.on = false; setRdBtn(); speak({ text: w, rate: slow ? 0.45 : Math.min(cfg.rate, 0.8) }); }
  function closeWbar() { var b = $('#wbar'); if (b) b.remove(); $$('.passage .w.pick').forEach(function (e) { e.classList.remove('pick'); }); }

  // word sheet
  var HINTS = [
    [/tion$/, 'tion = شَن'], [/sion$/, 'sion = ژَن / شَن'], [/cian$/, 'cian = شَن'], [/ture$/, 'ture = تشَر'], [/sure$/, 'sure = ژَر / شَر'], [/ous$/, 'ous = أَس'],
    [/cial$|tial$/, 'cial/tial = شَل'], [/ough/, 'ough: صوت متغير، استمع جيداً'], [/igh/, 'igh = آي (gh صامتة)'], [/eigh/, 'eigh = إي'], [/^kn/, 'k صامتة قبل n'], [/^wr/, 'w صامتة قبل r'],
    [/^gn|gn$/, 'g صامتة مع n'], [/mb$/, 'b صامتة بعد m'], [/mn$/, 'n صامتة بعد m'], [/stle$|sten$|ften$/, 't صامتة'], [/alk$|alf$|alm$|ould$/, 'l صامتة'], [/^ho(ur|nest|nor)/, 'h صامتة'],
    [/ph/, 'ph = ف'], [/sh/, 'sh = ش'], [/tch/, 'tch = تش'], [/ch/, 'ch = تش (أو ك / ش)'], [/th/, 'th = ث أو ذ'], [/ck/, 'ck = ك'], [/^wh/, 'wh = و (أو هـ قبل o)'], [/qu/, 'qu = كو'],
    [/dge/, 'dge = ج'], [/ng$/, 'ng = نگ خفيفة'], [/ee/, 'ee = إي طويلة'], [/ea/, 'ea = إي غالباً'], [/oo/, 'oo = و / أُ'], [/ou/, 'ou = آو غالباً'], [/ow/, 'ow = آو / أو'],
    [/ai|ay/, 'ai/ay = إي'], [/oa/, 'oa = أو'], [/oi|oy/, 'oi/oy = أوي'], [/au|aw/, 'au/aw = أو'], [/ar/, 'ar = آر'], [/or/, 'or = أور'], [/er|ir|ur/, 'er/ir/ur = ير'],
    [/c[eiy]/, 'c قبل e/i/y = س'], [/g[eiy]/, 'g قبل e/i/y قد تكون ج'], [/[^aeiou]e$/, 'e في الآخر صامتة وتطيل العلة قبلها'], [/ed$/, 'ed = ت / د / إد'], [/le$/, 'le = ِل'], [/^y|y$/, 'y: ي في الأول، إي/آي في الآخر']
  ];
  function wordHints(w) { var out = [], used = {}; HINTS.forEach(function (h) { if (out.length < 5 && h[0].test(w) && !used[h[1]]) { used[h[1]] = 1; out.push(h[1]); } }); return out; }
  function lookup(w) {
    var k = w.toLowerCase().replace(/[’']/g, "'"), d = DICT[k];
    if (!d) { var cands = [k.replace(/'s$/, ''), k.replace(/ies$/, 'y'), k.replace(/es$/, ''), k.replace(/s$/, ''), k.replace(/ed$/, ''), k.replace(/ed$/, 'e'), k.replace(/ing$/, ''), k.replace(/ing$/, 'e'), k.replace(/ly$/, '')]; for (var i = 0; i < cands.length && !d; i++) d = DICT[cands[i]]; }
    return d;
  }
  var SH = null;
  function openWordSheet(w, idx) {
    var clean = w.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, ''), low = clean.toLowerCase(), d = lookup(clean), hints = wordHints(low);
    SH = { w: clean, idx: idx, d: d };
    var mine = null; myWords.forEach(function (x) { if (x.en.toLowerCase() === low) mine = x; });
    var isSaved = !!fav['mywords::' + clean] || !!mine;
    var h = '<div class="scrim" data-act="shclose"></div><div class="sheet" role="dialog"><div class="grab"></div>' +
      '<div class="sh-word">' + esc(clean) + '</div>' +
      (d ? '<div class="sh-mean"><b style="color:var(--accent)">' + esc(d.tr) + '</b> — ' + esc(d.ar) + '</div>' : (mine && mine.ar ? '<div class="sh-mean">' + esc(mine.ar) + '</div>' : '<div class="sh-mean" style="color:var(--muted);font-size:.85rem">لا يوجد معنى محفوظ لهذه الكلمة. يمكنك كتابته عند الحفظ.</div>')) +
      '<div class="letters">' + clean.split('').map(function (c) { return '<button class="' + (/[aeiou]/i.test(c) ? 'v' : '') + '" data-act="shletter" data-c="' + esc(c) + '">' + esc(c) + '</button>'; }).join('') + '</div>' +
      (hints.length ? '<div class="hints">' + hints.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div>' : '') +
      '<div class="sh-acts"><button data-act="shsay">' + I.spk + ' استمع</button><button data-act="shslow">' + I.slow + ' ببطء</button>' +
      '<button data-act="shspell">' + I.abc + ' تهجئة صوتية</button>' + (idx != null ? '<button data-act="shfrom">' + I.play + ' اقرأ من هنا</button>' : '') +
      '</div>' + (isSaved ? '<p class="foot">★ هذه الكلمة في المحفوظات</p>' : '<input class="field" id="shmean" placeholder="المعنى بالعربي (اختياري)" style="margin-top:12px" value="' + esc(d ? d.ar : '') + '"><button class="btn" style="width:100%" data-act="shsave">' + '★ احفظها في المحفوظات للمراجعة</button>') +
      '</div>';
    $('#sheetHost').innerHTML = h;
    $$('.passage .w.pick').forEach(function (e) { e.classList.remove('pick'); });
    if (idx != null) { var el = document.getElementById('w' + idx); if (el) el.classList.add('pick'); }
    sayOne(clean, cfg.acc);
  }
  function closeSheet() { $('#sheetHost').innerHTML = ''; SH = null; $$('.passage .w.pick').forEach(function (e) { e.classList.remove('pick'); }); }

  function viewPassageEdit(id) {
    var p = id === 'new' ? { id: 'my' + now(), title: '', text: '', mine: true } : getPassage(id);
    if (!p || !p.mine) return viewReaderList();
    setBar(id === 'new' ? 'أضف قطعة' : 'تعديل القطعة', 'الصق أي نص إنجليزي');
    app.innerHTML = '<input class="field ltr" id="ptitle" placeholder="عنوان القطعة" value="' + esc(p.title) + '">' +
      '<textarea class="field" id="ptext" placeholder="Paste or type English text here...">' + esc(p.text) + '</textarea>' +
      '<p class="foot" style="text-align:right;margin-top:0">للّصق: اضغط مطولاً داخل المربع ثم اختر «لصق».</p>' +
      '<div class="fl-nav"><button class="btn" data-act="psave" data-id="' + p.id + '">حفظ وابدأ القراءة</button>' + (id !== 'new' ? '<button class="btn danger" data-act="pdel" data-id="' + p.id + '">حذف</button>' : '') + '</div>';
  }

  // ---------------- render ----------------
  function render() {
    var r = route(), p = r.split('/');
    var head = p[0], rest = p.slice(1).join('/');
    var y = freshNav ? 0 : (POS[r] || 0); freshNav = false;
    curRoute = null;
    if (head === 's') viewSection(rest);
    else if (head === 'f') viewFolder(rest);
    else if (head === 'saved') viewSaved();
    else if (head === 'learned') viewLearned();
    else if (head === 'review') viewReview();
    else if (head === 'stats') viewStats();
    else if (head === 'settings') viewSettings();
    else if (head === 'reader') viewReaderList();
    else if (head === 'read') viewReader(rest);
    else if (head === 'pedit') viewPassageEdit(rest);
    else if (head === 'q') viewSearch(rest);
    else viewHome();
    window.scrollTo(0, y);
    curRoute = r; POS[r] = y;
  }
  function rerenderKeep() { var y = window.scrollY; var r = curRoute; freshNav = false; render(); POS[r] = y; window.scrollTo(0, y); }

  // ---------------- events ----------------
  $('#back').addEventListener('click', function () { history.back(); });
  $('#homeBtn').addEventListener('click', function () { go(''); });
  $('#setBtn').addEventListener('click', function () { go('settings'); });
  $('#layoutBtn').addEventListener('click', function () { var o = ['list', 'grid', 'grid-sm']; cfg.layout = o[(o.indexOf(cfg.layout) + 1) % 3]; save(); rerenderKeep(); toast(cfg.layout === 'list' ? 'عرض: قائمة' : cfg.layout === 'grid' ? 'عرض: مربعات كبيرة' : 'عرض: مربعات صغيرة'); });

  document.addEventListener('click', function (e) {
    var w = e.target.closest('.passage .w');
    if (w) { if (longPressed) { longPressed = false; return; } wordTap(+w.getAttribute('data-w')); return; }
    var g = e.target.closest('[data-go]');
    if (g) { go(g.getAttribute('data-go')); return; }
    var st = e.target.closest('[data-set]');
    if (st) {
      var n = st.getAttribute('data-set'), v = st.getAttribute('data-v');
      cfg[n] = v === 'true' ? true : v === 'false' ? false : (/^\d+$/.test(v) ? +v : v); save(); applyTheme(); rerenderKeep(); return;
    }
    var b = e.target.closest('[data-act]'); if (!b) return;
    var act = b.getAttribute('data-act'), i = +b.getAttribute('data-i'), it = cur[i];
    switch (act) {
      case 'say': sayOne(it.en, cfg.acc, 'c' + i); break;
      case 'slow': sayOne(it.en, cfg.acc, 'c' + i, 0.5); break;
      case 'sayar': if (!arOk) toast('الصوت العربي غير مثبت في هاتفك'); else sayOne(it.ar, 'ar', 'c' + i); break;
      case 'sayex': var j = +b.getAttribute('data-j'); sayOne(it.ex[j].en, cfg.acc, 'c' + i + 'x' + j); break;
      case 'sayrule': runQueue(itemQueue(it, i)); break;
      case 'playall':
        if (playing) stopAll();
        else { var q = []; cur.forEach(function (x, k) { q = q.concat(itemQueue(x, k)); }); runQueue(q); }
        break;
      case 'fav':
        if (fav[it.key]) { delete fav[it.key]; if (it.mine) myWords = myWords.filter(function (x) { return 'mywords::' + x.en !== it.key; }); toast('أُزيلت من المحفوظات'); }
        else { fav[it.key] = 1; toast('★ حُفظت في المحفوظات للمراجعة'); }
        save(); refreshCard(i); break;
      case 'learn':
        if (learned[it.key]) delete learned[it.key]; else { learned[it.key] = 1; toast('أحسنت! أُضيفت إلى «أتقنتها»'); }
        save(); refreshCard(i); break;
      case 'tg': var k_ = b.getAttribute('data-k'); cfg[k_] = !cfg[k_]; save();
        if (k_ === 'hideDone') rerenderKeep();
        else { b.setAttribute('aria-pressed', cfg[k_]); var lst = $('#list'); if (lst) lst.classList.toggle(k_ === 'hideTr' ? 'hide-tr' : 'hide-ar', cfg[k_]); }
        break;
      case 'install': if (window.Android && Android.installVoices) Android.installVoices(); else toast('متاح داخل التطبيق على الهاتف'); break;
      case 'hidenotice': $('#notice').hidden = true; break;
      case 'test': sayOne('Hello! Welcome to your English lessons.', cfg.acc); break;
      case 'reset':
        if (!b.getAttribute('data-sure')) { b.setAttribute('data-sure', '1'); b.textContent = 'اضغط مرة أخرى للتأكيد'; break; }
        if (b.getAttribute('data-what') === 'time') { study = {}; store.set('study', study); } else { fav = {}; learned = {}; myWords = []; save(); }
        toast('تم المسح'); rerenderKeep(); break;
      // review
      case 'rvshow': RV.show = true; drawReview(); break;
      case 'rvnext': stopAll(); RV.i = (RV.i + 1) % RV.list.length; RV.show = false; drawReview(); break;
      case 'rvprev': stopAll(); RV.i = (RV.i - 1 + RV.list.length) % RV.list.length; RV.show = false; drawReview(); break;
      case 'rvshuffle': shuffle(RV.list); RV.i = 0; RV.show = false; drawReview(); toast('تم خلط البطاقات'); break;
      // stats
      case 'sttab': ST.tab = b.getAttribute('data-v'); ST.off = 0; viewStats(); break;
      case 'stoff': ST.off = Math.max(0, ST.off + (+b.getAttribute('data-v'))); viewStats(); break;
      // reader
      case 'rdplay': closeWbar(); if (RD.on) { var at = RD.idx; stopAll(); RD.idx = at; } else rdStart(RD.idx >= RD.words.length - 1 ? 0 : RD.idx); break;
      case 'rdspeed': cfg.rdSpeed = b.getAttribute('data-v'); save(); $$('[data-act=rdspeed]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); if (RD.on) rdStart(RD.idx); break;
      case 'rdmode': cfg.rdMode = b.getAttribute('data-v'); save(); $$('[data-act=rdmode]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); if (RD.on) rdStart(RD.idx); break;
      case 'rdar': cfg.rdAr = !cfg.rdAr; save(); b.setAttribute('aria-pressed', cfg.rdAr); var ra = $('#rdar'); if (ra) ra.hidden = !cfg.rdAr; else toast('لا توجد ترجمة لهذه القطعة'); break;
      // word bar
      case 'wclose': stopAll(); closeWbar(); break;
      case 'wagain': sayWord(RD.words[WBi].w.replace(/[^A-Za-z0-9'’-]/g, '')); break;
      case 'wslow': sayWord(RD.words[WBi].w.replace(/[^A-Za-z0-9'’-]/g, ''), true); break;
      case 'wsent': rdStart(WBi, true); break;
      case 'wfrom': var fr = WBi; closeWbar(); rdStart(fr); break;
      case 'whelp': var hi = WBi; stopAll(); closeWbar(); openWordSheet(RD.words[hi].w, hi); break;
      case 'rdrepeat': rdStart(RD.idx || 0, true); break;
      case 'voice': cfg.voice = b.getAttribute('data-v'); save(); if (native && Android.setVoice) Android.setVoice(cfg.voice); $$('[data-act=voice]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); sayOne('Hello! This is how I sound. Learning English is fun.', cfg.acc); break;
      case 'vrefresh': rerenderKeep(); break;
      // word sheet
      case 'shclose': closeSheet(); break;
      case 'shsay': sayOne(SH.w, cfg.acc); break;
      case 'shslow': sayOne(SH.w, cfg.acc, null, 0.45); break;
      case 'shletter': sayOne(b.getAttribute('data-c').toUpperCase(), cfg.acc, null, 0.8); break;
      case 'shspell': sayOne(SH.w.toUpperCase().split('').join(', ') + '. ' + SH.w, cfg.acc, null, 0.6); break;
      case 'shfrom': var fi = SH.idx; closeSheet(); rdStart(fi); break;
      case 'shsave':
        var mean = ($('#shmean') || {}).value || '';
        if (!myWords.some(function (x) { return x.en.toLowerCase() === SH.w.toLowerCase(); })) myWords.push({ en: SH.w, tr: SH.d ? SH.d.tr : '', ar: mean.trim() });
        fav['mywords::' + SH.w] = 1; save(); closeSheet(); toast('★ حُفظت الكلمة في المحفوظات'); break;
      // passages
      case 'psave':
        var t = $('#ptext').value.trim(), ti = $('#ptitle').value.trim() || t.split(/\s+/).slice(0, 4).join(' ');
        if (!t) { toast('الصق نصاً أولاً'); break; }
        var pid = b.getAttribute('data-id'), ex = myPass.filter(function (x) { return x.id === pid; })[0];
        if (ex) { ex.title = ti; ex.text = t; } else myPass.unshift({ id: pid, title: ti, text: t, mine: true });
        save(); location.replace('#read/' + pid); break;
      case 'pdel':
        if (!b.getAttribute('data-sure')) { b.setAttribute('data-sure', '1'); b.textContent = 'تأكيد الحذف'; break; }
        myPass = myPass.filter(function (x) { return x.id !== b.getAttribute('data-id'); }); save(); location.replace('#reader'); break;
    }
  });
  // long-press a word for the full help sheet
  var lpTimer = null, longPressed = false;
  document.addEventListener('touchstart', function (e) {
    var w = e.target.closest && e.target.closest('.passage .w'); if (!w) return;
    longPressed = false; clearTimeout(lpTimer);
    lpTimer = setTimeout(function () { longPressed = true; stopAll(); closeWbar(); openWordSheet(w.textContent, +w.getAttribute('data-w')); }, 550);
  }, { passive: true });
  ['touchend', 'touchmove', 'touchcancel'].forEach(function (ev) { document.addEventListener(ev, function () { clearTimeout(lpTimer); }, { passive: true }); });
  document.addEventListener('contextmenu', function (e) { if (e.target.closest && e.target.closest('.passage .w')) e.preventDefault(); });

  // tap a blurred line to reveal it
  document.addEventListener('click', function (e) {
    var t = e.target.closest('.hide-tr .tr, .hide-ar .ar, .hide-tr .ex .a b, .hide-ar .ex .a span');
    if (t) t.style.filter = 'none';
  });
  function refreshCard(i) {
    if (route() === 'review') { drawReview(); return; }
    var el = document.getElementById('c' + i); if (!el) return;
    var r = route().split('/')[0];
    var tmp = document.createElement('div'); tmp.innerHTML = cardHTML(cur[i], i, r === 'saved' || r === 'learned' || r === 'q');
    el.parentNode.replaceChild(tmp.firstChild, el);
  }

  render();
})();
