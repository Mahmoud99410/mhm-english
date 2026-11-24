(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var app = $('#app');
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var plain = function (s) { return String(s || '').replace(/[\[\]]/g, ''); };
  var marked = function (s) { return esc(s).replace(/\[(.+?)\]/g, '<mark>$1</mark>'); };

  var ICON = {
    spk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 9a4 4 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2h8.5A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"/></svg>',
    search: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
    ar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/></svg>'
  };

  // ---------- storage ----------
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem('mhm.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem('mhm.' + k, JSON.stringify(v)); } catch (e) { } }
  };
  var fav = store.get('fav', {});
  var learned = store.get('learned', {});
  var cfg = store.get('cfg', { rate: 0.85, acc: 'en-US', readAr: false, theme: 'system', hideTr: false, hideAr: false });
  var saveAll = function () { store.set('fav', fav); store.set('learned', learned); store.set('cfg', cfg); };

  // ---------- index ----------
  var FOLDERS = {}, TOTAL = 0;
  DB.forEach(function (s) {
    s.folders.forEach(function (f) {
      f.sec = s; FOLDERS[f.id] = f; TOTAL += f.items.length;
      f.items.forEach(function (it) { it.key = f.id + '::' + plain(it.t || it.en); it.folder = f; });
    });
  });
  var countLearned = function (items) { var n = 0; items.forEach(function (i) { if (learned[i.key]) n++; }); return n; };
  var allItems = function () { var a = []; DB.forEach(function (s) { s.folders.forEach(function (f) { a = a.concat(f.items); }); }); return a; };
  var secItems = function (s) { var a = []; s.folders.forEach(function (f) { a = a.concat(f.items); }); return a; };

  // ---------- theme ----------
  function applyTheme() {
    var dark = cfg.theme === 'dark' || (cfg.theme === 'system' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (window.Android && Android.setBar) Android.setBar(dark ? '#8f241c' : '#a92b21');
  }
  applyTheme();

  // ---------- speech ----------
  var queue = [], seq = 0, playing = false, ttsOk = true, arOk = true;
  var native = !!(window.Android && Android.speak);
  function speak(text, lang, tag) {
    var id = 'u' + (++seq) + '|' + (tag || '');
    if (native) { Android.speak(plain(text), lang, cfg.rate, id); return; }
    if (!('speechSynthesis' in window)) { toast('النطق غير متوفر هنا'); window.ttsDone(id); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(plain(text)); u.lang = lang === 'ar' ? 'ar-SA' : lang; u.rate = cfg.rate;
    u.onstart = function () { window.ttsStart(id); }; u.onend = function () { window.ttsDone(id); }; u.onerror = function () { window.ttsDone(id); };
    speechSynthesis.speak(u);
  }
  function stopAll() {
    queue = []; playing = false;
    if (native) Android.stop(); else if ('speechSynthesis' in window) speechSynthesis.cancel();
    clearHL(); setPlayBtn();
  }
  function clearHL() { var a = document.querySelectorAll('.on'); for (var i = 0; i < a.length; i++) a[i].classList.remove('on'); }
  window.ttsStart = function (id) {
    var tag = id.split('|')[1]; clearHL();
    if (!tag) return;
    var el = document.getElementById(tag);
    if (el) { el.classList.add('on'); if (playing && el.scrollIntoView) el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
  };
  window.ttsDone = function (id) {
    if (!playing) { clearHL(); return; }
    if (queue.length) { var n = queue.shift(); setTimeout(function () { if (playing) speak(n.text, n.lang, n.tag); }, n.gap || 350); }
    else { playing = false; clearHL(); setPlayBtn(); }
  };
  window.ttsStop = function () { };
  window.ttsReady = function (ok) { ttsOk = ok === '1'; if (!ttsOk) showNotice('noengine'); };
  window.ttsProblem = function (p) {
    if (p === 'noarabic') { arOk = false; toast('الصوت العربي غير مثبت في هاتفك، سيُقرأ الإنجليزي فقط'); }
    else showNotice(p);
  };
  var noticeKind = '';
  function showNotice(k) { noticeKind = k; render(); }
  function sayOne(text, lang, tag) { playing = false; queue = []; speak(text, lang || cfg.acc, tag); }
  function playList(items) {
    stopAll(); var q = [];
    items.forEach(function (it, i) {
      var tag = 'c' + i;
      if (it.ex && it.ex.length) {
        if (it.say) q.push({ text: it.say, lang: cfg.acc, tag: tag });
        it.ex.forEach(function (e, j) { q.push({ text: e.en, lang: cfg.acc, tag: 'c' + i + 'x' + j }); });
      } else {
        q.push({ text: it.en, lang: cfg.acc, tag: tag, gap: 600 });
        if (cfg.readAr && arOk && it.ar) q.push({ text: it.ar, lang: 'ar', tag: tag, gap: 250 });
      }
    });
    if (!q.length) return;
    playing = true; queue = q; var f = queue.shift(); speak(f.text, f.lang, f.tag); setPlayBtn();
  }
  function setPlayBtn() {
    var b = $('#playall'); if (!b) return;
    b.innerHTML = playing ? ICON.stop + ' إيقاف' : ICON.play + ' استمع للكل';
  }

  var tt;
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('show'); }, 2200); }

  // ---------- routing ----------
  var cur = [];
  function route() { return (location.hash || '#').slice(1); }
  function go(h) { if (route() !== h) location.hash = h; else render(); }
  window.addEventListener('hashchange', function () { stopAll(); render(); window.scrollTo(0, 0); });

  function setBar(title, sub, isHome) {
    $('#ttl').innerHTML = esc(title) + (sub ? '<span class="sub">' + esc(sub) + '</span>' : '');
    $('#back').hidden = !!isHome; $('#home').hidden = !!isHome;
  }

  function noticeHTML() {
    if (!noticeKind) return '';
    var msg = noticeKind === 'noenglish' ? 'صوت اللغة الإنجليزية غير مثبت في هاتفك. ثبّته مرة واحدة ليعمل زر السماعة.'
      : 'محرك النطق في الهاتف غير جاهز. ثبّت أو فعّل «خدمة تحويل النص إلى كلام من Google».';
    return '<div class="notice"><span style="flex:1">' + msg + '</span><button data-act="install">تثبيت الصوت</button><button data-act="hidenotice">إغلاق</button></div>';
  }

  // ---------- views ----------
  function viewHome() {
    setBar('تعلّم الإنجليزية', '', true);
    var l = Object.keys(learned).length, f = Object.keys(fav).length;
    var pct = TOTAL ? Math.round(l * 100 / TOTAL) : 0;
    var h = '<div class="hero"><p>حفظت ' + l + ' من ' + TOTAL + ' عنصر (' + pct + '%)</p><div class="prog"><i style="width:' + pct + '%"></i></div>' +
      '<form class="search" id="sform">' + ICON.search + '<input id="sq" type="search" placeholder="ابحث عن كلمة أو جملة، بالعربي أو الإنجليزي" autocomplete="off"></form>' +
      '<div class="legend"><span>پ = p</span><span>ڤ = v</span><span>گ = g</span><span>ث = th في think</span><span>ذ = th في this</span></div></div>';
    h += noticeHTML();
    h += '<div class="quick"><button class="q fav" data-go="fav"><b>' + f + '</b>المفضلة</button><button class="q lrn" data-go="learned"><b>' + l + '</b>حفظتها</button><button class="q" data-go="settings"><b>⚙</b>الإعدادات</button></div>';
    h += '<h2 class="sec">الأقسام</h2><div class="secs">';
    DB.forEach(function (s) {
      var items = secItems(s), n = countLearned(items), p = items.length ? Math.round(n * 100 / items.length) : 0;
      h += '<button class="sec-card" data-go="s/' + s.id + '"><span class="badge" style="background:' + s.color + '">' + esc(s.badge) + '</span><span class="tx"><b>' + esc(s.name) + '</b><small>' + esc(s.desc) + ' · ' + items.length + '</small><span class="mini"><i style="width:' + p + '%"></i></span></span><span class="chev">‹</span></button>';
    });
    h += '</div><p class="foot">الكتابة العربية للنطق تقريبية — الأدق دائماً هو زر السماعة.</p>';
    app.innerHTML = h;
    $('#sform').addEventListener('submit', function (e) { e.preventDefault(); var v = $('#sq').value.trim(); if (v) go('q/' + encodeURIComponent(v)); });
  }

  function viewSection(id) {
    var s = DB.filter(function (x) { return x.id === id; })[0]; if (!s) return viewHome();
    if (s.folders.length === 1) return viewFolder(s.folders[0].id, true);
    setBar(s.name, s.folders.length + ' مجلد');
    var h = noticeHTML();
    s.folders.forEach(function (f) {
      var n = countLearned(f.items);
      h += '<button class="folder" data-go="f/' + f.id + '"><span class="ic">' + ICON.folder + '</span><span class="tx"><b>' + esc(f.name) + '</b><small>' + f.items.length + ' عنصر · حفظت ' + n + (f.desc ? ' · ' + esc(f.desc) : '') + '</small></span><span class="chev">‹</span></button>';
    });
    app.innerHTML = h;
  }

  function toolbar() {
    return '<div class="tools"><button class="pill main" id="playall" data-act="playall">' + ICON.play + ' استمع للكل</button>' +
      '<button class="pill" data-act="hidetr" aria-pressed="' + !!cfg.hideTr + '">إخفاء القراءة</button>' +
      '<button class="pill" data-act="hidear" aria-pressed="' + !!cfg.hideAr + '">إخفاء المعنى</button></div>';
  }

  function cardHTML(it, i, showFolder) {
    var cls = 'card' + (learned[it.key] ? ' done' : '');
    var h = '<article class="' + cls + '" id="c' + i + '">';
    if (it.ex) {
      h += '<div class="rhead"><span class="rt">' + esc(it.t) + '</span><span class="rs">' + esc(it.s) + '</span><button class="spk" data-act="sayrule" data-i="' + i + '" aria-label="استمع">' + ICON.spk + '</button></div>';
      if (it.n) h += '<div class="note">' + esc(it.n) + '</div>';
      if (it.ex.length) {
        h += '<ul class="ex">';
        it.ex.forEach(function (e, j) {
          h += '<li id="c' + i + 'x' + j + '"><span class="t"><div class="e">' + marked(e.en) + '</div><div class="a"><b>' + esc(e.tr) + '</b> — <span>' + esc(e.ar) + '</span></div></span><button class="spk sm" data-act="sayex" data-i="' + i + '" data-j="' + j + '" aria-label="استمع">' + ICON.spk + '</button></li>';
        });
        h += '</ul>';
      }
    } else {
      h += '<div class="top"><div class="txt"><div class="en">' + marked(it.en) + '</div><div class="tr">' + esc(it.tr) + '</div><div class="ar">' + esc(it.ar) + '</div></div><button class="spk" data-act="say" data-i="' + i + '" aria-label="استمع">' + ICON.spk + '</button></div>';
      if (it.n) h += '<div class="note">' + esc(it.n) + '</div>';
    }
    h += '<div class="acts"><button class="ab fv" data-act="fav" data-i="' + i + '" aria-pressed="' + !!fav[it.key] + '">' + ICON.star + (fav[it.key] ? ' في المفضلة' : ' مفضلة') + '</button>' +
      '<button class="ab ln" data-act="learn" data-i="' + i + '" aria-pressed="' + !!learned[it.key] + '">' + ICON.check + (learned[it.key] ? ' حفظتها' : ' حفظت') + '</button>';
    if (!it.ex && it.ar) h += '<button class="ab" data-act="sayar" data-i="' + i + '">' + ICON.ar + ' المعنى بالعربي</button>';
    if (showFolder) h += '<button class="ab" data-go="f/' + it.folder.id + '">' + esc(it.folder.name) + '</button>';
    h += '</div></article>';
    return h;
  }

  function listView(items, showFolder, emptyMsg) {
    cur = items;
    var h = noticeHTML() + (items.length ? toolbar() : '');
    h += items.length ? '<div class="list' + (cfg.hideTr ? ' hide-tr' : '') + (cfg.hideAr ? ' hide-ar' : '') + '" id="list">' + items.map(function (it, i) { return cardHTML(it, i, showFolder); }).join('') + '</div>'
      : '<div class="empty">' + emptyMsg + '</div>';
    app.innerHTML = h;
  }

  function viewFolder(id, single) {
    var f = FOLDERS[id]; if (!f) return viewHome();
    setBar(single ? f.sec.name : f.name, (single ? '' : f.sec.name + ' · ') + f.items.length + ' عنصر · حفظت ' + countLearned(f.items));
    listView(f.items, false, 'لا يوجد محتوى');
  }
  function viewFav() {
    var a = allItems().filter(function (i) { return fav[i.key]; });
    setBar('المفضلة', a.length + ' عنصر');
    listView(a, true, 'اضغط ★ «مفضلة» على أي جملة أو كلمة لتظهر هنا.');
  }
  function viewLearned() {
    var a = allItems().filter(function (i) { return learned[i.key]; });
    setBar('حفظتها', a.length + ' عنصر');
    listView(a, true, 'اضغط ✓ «حفظت» على ما حفظته ليظهر هنا، وتستطيع مراجعته في أي وقت.');
  }
  function viewSearch(q) {
    var k = q.toLowerCase();
    var a = allItems().filter(function (i) {
      var t = [i.en, i.tr, i.ar, i.t, i.s, i.n].join(' ');
      if (i.ex) i.ex.forEach(function (e) { t += ' ' + e.en + ' ' + e.tr + ' ' + e.ar; });
      return plain(t).toLowerCase().indexOf(k) >= 0;
    }).slice(0, 250);
    setBar('بحث: ' + q, a.length + ' نتيجة');
    listView(a, true, 'لا توجد نتائج لـ «' + esc(q) + '»');
  }
  function viewSettings() {
    setBar('الإعدادات', '');
    var seg = function (name, val, label) { return '<button class="pill" data-set="' + name + '" data-v="' + val + '" aria-pressed="' + (String(cfg[name]) === String(val)) + '">' + label + '</button>'; };
    app.innerHTML = noticeHTML() +
      '<div class="set"><label>سرعة النطق: <span id="rv">' + cfg.rate.toFixed(2) + '</span></label><input type="range" id="rate" min="0.4" max="1.3" step="0.05" value="' + cfg.rate + '"><div class="seg" style="margin-top:8px"><button class="pill" data-act="test">' + ICON.spk + ' تجربة</button></div></div>' +
      '<div class="set"><label>اللهجة</label><div class="seg">' + seg('acc', 'en-US', 'أمريكية') + seg('acc', 'en-GB', 'بريطانية') + '</div></div>' +
      '<div class="set"><label>عند «استمع للكل»</label><div class="seg">' + seg('readAr', 'false', 'الإنجليزي فقط') + seg('readAr', 'true', 'الإنجليزي ثم المعنى بالعربي') + '</div></div>' +
      '<div class="set"><label>المظهر</label><div class="seg">' + seg('theme', 'system', 'حسب الهاتف') + seg('theme', 'light', 'فاتح') + seg('theme', 'dark', 'داكن') + '</div></div>' +
      '<div class="set"><label>الصوت لا يعمل؟</label><p style="margin:0 0 8px;font-size:14px;color:var(--muted)">يستخدم التطبيق محرك النطق الموجود في هاتفك. إذا لم تسمع شيئاً، ثبّت صوت الإنجليزية من إعدادات Google للنطق.</p><button class="pill" data-act="install">فتح إعدادات الصوت</button></div>' +
      '<div class="set"><label>البيانات</label><button class="danger" data-act="reset">مسح «حفظتها» والمفضلة</button></div>' +
      '<p class="foot">MHM English · المحتوى: ' + TOTAL + ' عنصر</p>';
    $('#rate').addEventListener('input', function (e) { cfg.rate = +e.target.value; $('#rv').textContent = cfg.rate.toFixed(2); saveAll(); });
  }

  function render() {
    var r = route(), p = r.split('/');
    if (p[0] === 's') viewSection(p[1]);
    else if (p[0] === 'f') viewFolder(p[1]);
    else if (p[0] === 'fav') viewFav();
    else if (p[0] === 'learned') viewLearned();
    else if (p[0] === 'settings') viewSettings();
    else if (p[0] === 'q') viewSearch(decodeURIComponent(p.slice(1).join('/')));
    else viewHome();
  }

  // ---------- events ----------
  $('#back').addEventListener('click', function () { history.back(); });
  $('#home').addEventListener('click', function () { go(''); });
  document.addEventListener('click', function (e) {
    var g = e.target.closest('[data-go]');
    if (g) { go(g.getAttribute('data-go')); return; }
    var st = e.target.closest('[data-set]');
    if (st) {
      var n = st.getAttribute('data-set'), v = st.getAttribute('data-v');
      cfg[n] = v === 'true' ? true : v === 'false' ? false : v; saveAll(); applyTheme(); render(); return;
    }
    var b = e.target.closest('[data-act]'); if (!b) return;
    var act = b.getAttribute('data-act'), i = +b.getAttribute('data-i'), it = cur[i];
    switch (act) {
      case 'say': sayOne(it.en, cfg.acc, 'c' + i); break;
      case 'sayar': if (!arOk) toast('الصوت العربي غير مثبت في هاتفك'); else sayOne(it.ar, 'ar', 'c' + i); break;
      case 'sayex': var j = +b.getAttribute('data-j'); sayOne(it.ex[j].en, cfg.acc, 'c' + i + 'x' + j); break;
      case 'sayrule': playList([it]); break;
      case 'playall': if (playing) stopAll(); else playList(cur); break;
      case 'fav':
        if (fav[it.key]) delete fav[it.key]; else { fav[it.key] = 1; toast('أُضيفت إلى المفضلة'); }
        saveAll(); refreshCard(i); break;
      case 'learn':
        if (learned[it.key]) delete learned[it.key]; else { learned[it.key] = 1; toast('أحسنت! أُضيفت إلى «حفظتها»'); }
        saveAll(); refreshCard(i); break;
      case 'hidetr': cfg.hideTr = !cfg.hideTr; saveAll(); b.setAttribute('aria-pressed', cfg.hideTr); $('#list').classList.toggle('hide-tr', cfg.hideTr); break;
      case 'hidear': cfg.hideAr = !cfg.hideAr; saveAll(); b.setAttribute('aria-pressed', cfg.hideAr); $('#list').classList.toggle('hide-ar', cfg.hideAr); break;
      case 'install': if (window.Android && Android.installVoices) Android.installVoices(); else toast('متاح داخل التطبيق على الهاتف'); break;
      case 'hidenotice': noticeKind = ''; render(); break;
      case 'test': sayOne('Hello! Welcome to your English lessons.', cfg.acc); break;
      case 'reset':
        if (b.getAttribute('data-sure')) { fav = {}; learned = {}; saveAll(); toast('تم المسح'); render(); }
        else { b.setAttribute('data-sure', '1'); b.textContent = 'اضغط مرة أخرى للتأكيد'; }
        break;
    }
  });
  // Tap a blurred line to reveal it.
  document.addEventListener('click', function (e) {
    var t = e.target.closest('.hide-tr .tr, .hide-ar .ar, .hide-tr .ex .a b, .hide-ar .ex .a span');
    if (t) t.style.filter = 'none';
  });
  function refreshCard(i) {
    var el = document.getElementById('c' + i); if (!el) return;
    var r = route().split('/')[0];
    var tmp = document.createElement('div'); tmp.innerHTML = cardHTML(cur[i], i, r === 'fav' || r === 'learned' || r === 'q');
    el.parentNode.replaceChild(tmp.firstChild, el);
  }

  render();
})();
