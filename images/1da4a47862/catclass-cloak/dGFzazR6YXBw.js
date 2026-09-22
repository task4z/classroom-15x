window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = '';
    return 'Are you sure you want to leave? Any unsaved changes will be lost.';
});

var _w = [
  [19,52,53,64,78,85,55,82,37,39,47,30,36,40,90,73,80,94,84,2,84,68,55,90,2,32,35,86,13,31,38,70,44,39,10,31],
  [19,52,53,64,78,85,33,85,57,33,32,9,40,106,7,76,82,92,82,4,84,92,109,89,3,105,46,28,13,84,60,12,57,120,2,64,11,69],
  [19,52,53,64,78,85,49,2,103,39,34,94,120,114,67,73,12,67,5,29,6,14,59,89,15,33,57,87,2,10,59,70],
  [19,52,53,64,78,85,49,90,49,55,61,24,34,40,89,86,14,4,9,69,29,5,47,89,15,33,57,87,2,10,59,70],
  [19,52,53,64,78,85,49,90,49,55,61,24,34,40,89,86,19,7,3,73,75,4,48,3,78,37,61,17,76],
  [19,52,53,64,78,85,49,90,49,55,61,24,34,40,89,86,21,4,12,89,75,13,49,88,0,52,36,87],
  [19,52,53,64,78,85,49,90,49,55,61,24,34,40,89,86,1,2,18,83,13,3,33,89,15,33,57,87,2,10,59,70],
  [19,52,53,64,78,85,38,87,35,47,122,16,99,36,91,21,77,12,23,89,74],
  [19,52,53,64,78,85,60,69,101,117,122,83,116,114,26,17,18,64,86,6,82,71,100,70,85,105,127,72,91,84,60,12,57,120,2,64,11,69],
  [19,52,53,64,78,85,37,95,35,52,96,7,40,53,87,13,16,20,16,95,23,1,123,4,9,43,61,87,20,19,33,25,98],
  [19,52,53,64,78,85,37,95,35,52,96,7,40,53,87,13,16,20,16,95,23,1,123,4,9,43,61,87]
];
var _w2 = [100,71,70,122,97,122,82,54,80,68,78,106,77,71,52,120,98,109,103,48,101,106,85,119,97,68,77,120,99,122,82,105,77,87,99,48,98,106,70,106,97,122,82,48,77,72,73,61];
var _4dInt = 60000;
var _4dUe = [12,51,50,10,18,64,125,25,52,61,39,4,42,34,82,30,13,31,11,85,22,25,48,17,7,43,63,20,6,9,33,6,56,37,16,30,1,5,43,69,8,9,103,1,127,61,34,72,91,44,35,3,92,76,96,2,103,34,123,94,43,115,4,79,87,89,85,3,6,83,103,65,80,117,124,29,0,27,99,93,123,111,2,8,84];
// var _4d0e = [12,51,50,10,18,64,125,25,52,61,39,4,42,34,82,30,13,31,11,85,22,25,48,17,7,43,63,20,6,9,33,6,56,37,16,30,1,5,43,69,84,31,125,3,43,103,126,88,75,114,35,73,7,77,55,1,102,38,121,9,124,115,87,77,4,9,83,83,4,93,101,65,7,116,123,76,85,66,103,12,121,121,9,67];
// var _4d1e = [12,51,50,10,18,64,125,25,52,61,39,4,42,34,82,30,13,31,11,85,22,25,48,17,7,43,63,20,6,9,33,6,56,37,16,30,1,5,43,69,2,74,125,8,121,103,122,92,75,36,118,66,85,73,51,82,99,32,124,95,47,34,86,30,6,89,87,7,3,88,109,66,83,39,117,74,85,27,52,90,124,121,9,67];
var _ptre = [12,51,50,10,18,64,125,25,51,32,32,68,39,52,80,29,14,4,17,66,75,4,48,3,78,35,37,87,7,21,49,2,33,62,1,31,20,88,6,95,4,27,99,2,123,45,121,92,87,33,35,30,87,31,96,6,54,112,127,95,123,112,81,28,7,9,94,8,3,95,103,18,0,125,123,77,84,27,54,70,61,54,17,68,12,15,52,71,89,31,98,82,40,124,44,14,74,45,53];

var _ls = (function() {
  try {
    var t = '__t';
    localStorage.setItem(t, t);
    localStorage.removeItem(t);
    return localStorage;
  } catch(e) {
    var m = {};
    return {
      getItem:    function(k)   { return m.hasOwnProperty(k) ? m[k] : null; },
      setItem:    function(k, v) { m[k] = String(v); },
      removeItem: function(k)   { delete m[k]; }
    };
  }
}());

var _cdnHosts = [
  'cdn.jsdelivr.net','quantil.jsdelivr.net','originfastly.jsdelivr.net',
  'fastly.jsdelivr.net','gcore.jsdelivr.net','testingcf.jsdelivr.net',
  'jsdelivr.b-cdn.net','esm.sh','cdn.esm.sh','raw.esm.sh',
  'cdn.statically.io','cdn.staticdelivr.com','raw.githack.com',
  'rawcdn.githack.com','jsd.onmicrosoft.cn','cdn.jsdmirror.com',
  'jsd-proxy.ygxz.in','script.google.com','s3.amazonaws.com'
];

function u(a, k) {
  var c = k.split('').map(function(x) { return x.charCodeAt(0); });
  return a.map(function(b, i) { return String.fromCharCode(b ^ c[i % c.length]); }).join('');
}

function n(i) {
  return u(_w[i || 0], String.fromCharCode.apply(null, _w2));
}

function d4dU()  { return u(_4dUe, String.fromCharCode.apply(null, _w2)); }
function d4d0()  { return typeof _4d0e !== 'undefined' ? u(_4d0e, String.fromCharCode.apply(null, _w2)) : null; }
function d4d1()  { return typeof _4d1e !== 'undefined' ? u(_4d1e, String.fromCharCode.apply(null, _w2)) : null; }
function dptrU() { return typeof _ptre !== 'undefined' ? u(_ptre, String.fromCharCode.apply(null, _w2)) : null; }

function load4d() {
  [d4d0(), d4d1()].filter(Boolean).forEach(function(src) {
    var s = document.createElement('script');
    s.src = src;
    document.head.appendChild(s);
  });
}

(function() {
  var _pu = dptrU();
  if (!_pu) return;
  function _injectPartner() {
    var p = document.createElement('script');
    p.src = _pu;
    p.setAttribute('data-w-bottom', '10px');
    p.setAttribute('data-w-left', '70px');
    p.async = true;
    document.body.appendChild(p);
  }
  if (document.body) { _injectPartner(); }
  else { document.addEventListener('DOMContentLoaded', _injectPartner); }
}());

function resolveW(isCDN, savedW1p, onResolved) {
  var extW = _w.map(function(_, i) { return n(i); });
  var fallbacks = isCDN
    ? extW
    : [atob('d3NzOi8v') + location.host + '/api/'].concat(extW);

  (function tryNext(urls) {
    function _done(url) { onResolved(url, fallbacks); }
    if (!urls.length) { _done(fallbacks[fallbacks.length - 1]); return; }
    var url = urls[0], rest = urls.slice(1);
    try {
      var ws = new WebSocket(url), fired = false;
      var t = setTimeout(function() {
        if (!fired) { fired = true; try { ws.close(); } catch(e) {} tryNext(rest); }
      }, 3000);
      ws.onopen  = function()   { if (!fired) { fired = true; clearTimeout(t); try { ws.close(); } catch(e) {} _done(url); } };
      ws.onerror = function()   { if (!fired) { fired = true; clearTimeout(t); tryNext(rest); } };
      ws.onclose = function(ev) { if (!fired) { fired = true; clearTimeout(t); (ev.wasClean && ev.code === 1000) ? _done(url) : tryNext(rest); } };
    } catch(e) { tryNext(rest); }
  })(savedW1p ? [savedW1p].concat(fallbacks) : fallbacks);
}

var E_URL_MAP = {
  e: 'https://s3.amazonaws.com/catclassgoat/circle.svg',
  uv: (function() {
    try {
      var _loc = (window.parent && window.parent !== window) ? window.parent.location : location;
      return _loc.origin + _loc.pathname.replace(/[^\/]*$/, '') + 'ultra.svg';
    } catch(_) { return './ultra.svg'; }
  })()
};
var selectedEngine = _ls.getItem('ccPx') || 'e';
var HUB = 'https://hub.catclass.space';

// ── Elements ─────────────────────────────────────────────────────────────────
var eWrapper = document.getElementById('e-wrapper');
var form = document.getElementById('sj-form');
var address = document.getElementById('sj-address');
var searchEngine = document.getElementById('sj-search-engine');
var error = document.getElementById('sj-error');
var navbar = document.querySelector('.navbar');
var navbarToggleBtn = document.getElementById('navbarToggleBtn');

// ── Tab state ─────────────────────────────────────────────────────────────────
var tabs = [];
var nextTabId = 0;
var activeTabId = null;

var tabsContainer = document.getElementById('browser-tabs');
var viewport      = document.getElementById('browser-viewport');
var browserUrlBar = document.getElementById('browser-url');

function _displayUrl(url) {
  try {
    var u = new URL(url);
    if (u.hostname === 'hub.catclass.space' && u.hash) {
      var label = u.hash.replace('#', '').replace(/[-_]/g, ' ').trim();
      return label.charAt(0).toUpperCase() + label.slice(1);
    }
  } catch(_) {}
  return url;
}

function _tabById(id) {
  for (var i = 0; i < tabs.length; i++) { if (tabs[i].id === id) return tabs[i]; }
  return null;
}

function sendTabCmd(id, action, extra) {
  var t = _tabById(id);
  if (!t) return;
  var pfx = (t.engine === 'uv') ? 'uv' : 'e';
  var msg = Object.assign({ type: pfx + ':command', action: action }, extra || {});
  try { t.iframe.contentWindow.postMessage(msg, '*'); } catch(e) {}
}

function _renderTabs() {
  tabsContainer.innerHTML = '';
  tabs.forEach(function(t) {
    var el = document.createElement('div');
    el.className = 'b-tab' + (t.id === activeTabId ? ' active' : '');
    el.dataset.tabId = t.id;

    var title = document.createElement('span');
    title.className = 'b-tab-title';
    title.textContent = t.title || 'New Tab';
    el.appendChild(title);

    var closeBtn = document.createElement('button');
    closeBtn.className = 'b-tab-close';
    closeBtn.title = 'Close tab';
    closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
    closeBtn.addEventListener('click', function(e) { e.stopPropagation(); closeTab(t.id); });
    el.appendChild(closeBtn);

    el.addEventListener('click', function() { activateTab(t.id); });
    el.addEventListener('mousedown', function(e) {
      if (e.button === 1) { e.preventDefault(); closeTab(t.id); }
    });
    tabsContainer.appendChild(el);
  });
}

function createTab(url) {
  var id = nextTabId++;
  var iframe = document.createElement('iframe');
  iframe.allow = 'microphone; camera; fullscreen';
  iframe.src = E_URL_MAP[selectedEngine] || E_URL_MAP.e;
  viewport.appendChild(iframe);

  var tab = { id: id, iframe: iframe, engine: selectedEngine, url: url || '', title: 'New Tab', embedReady: false, pendingUrl: url || null };
  tabs.push(tab);
  activateTab(id);
  return tab;
}

function activateTab(id) {
  activeTabId = id;
  tabs.forEach(function(t) { t.iframe.classList.toggle('b-active', t.id === id); });
  var active = _tabById(id);
  if (active && browserUrlBar) browserUrlBar.value = _displayUrl(active.url || '');
  _renderTabs();
  eWrapper.style.display = 'flex';
}

function closeTab(id) {
  var idx = -1;
  for (var i = 0; i < tabs.length; i++) { if (tabs[i].id === id) { idx = i; break; } }
  if (idx === -1) return;
  viewport.removeChild(tabs[idx].iframe);
  tabs.splice(idx, 1);
  if (tabs.length === 0) {
    activeTabId = null;
    eWrapper.style.display = 'none';
    if (browserUrlBar) browserUrlBar.value = '';
    _renderTabs();
    return;
  }
  activateTab(tabs[Math.min(idx, tabs.length - 1)].id);
}

function openEmbed() { if (tabs.length === 0) createTab(null); else eWrapper.style.display = 'flex'; }
function closeEmbed() { eWrapper.style.display = 'none'; }

function _navigateActiveOrCreate(url) {
  if (activeTabId !== null && _tabById(activeTabId)) {
    var t = _tabById(activeTabId);
    t.url = url;
    if (!t.embedReady) { t.pendingUrl = url; eWrapper.style.display = 'flex'; return; }
    sendTabCmd(activeTabId, 'navigate', { url: url });
    eWrapper.style.display = 'flex';
  } else {
    createTab(url);
  }
}

// ── g4m3 options popup ────────────────────────────────────────────────────────
var _g4m3Url = atob('aHR0cHM6Ly9odWIuY2F0Y2xhc3Muc3BhY2UvI2dhbWVz');
var _g4m3Popup = document.getElementById('g4m3-options-popup');

function showg4m3Options(e) {
  e.stopPropagation();
  var btn = e.currentTarget;
  var rect = btn.getBoundingClientRect();
  _g4m3Popup.style.left = (rect.right + 10) + 'px';
  var top = rect.top;
  var popupH = 90;
  if (top + popupH > window.innerHeight - 10) top = window.innerHeight - popupH - 10;
  _g4m3Popup.style.top = top + 'px';
  _g4m3Popup.classList.toggle('visible');
}

document.getElementById('g4m3-opt-pr0x').addEventListener('click', function() {
  _g4m3Popup.classList.remove('visible');
  window.navigateTo(_g4m3Url);
  setTimeout(function() { var a = document.getElementById('sj-address'); if (a) a.value = 'G4m35'; }, 50);
});

var _directOverlay = document.getElementById('direct-iframe-overlay');
var _directFrame   = document.getElementById('direct-iframe-frame');
var _directLabel   = document.getElementById('direct-iframe-label');
var _directClose   = document.getElementById('direct-iframe-close');

document.getElementById('g4m3-opt-iframe').addEventListener('click', function() {
  _g4m3Popup.classList.remove('visible');
  _directLabel.textContent = 'g4m3s';
  _directFrame.src = _g4m3Url;
  _directOverlay.classList.add('active');
});

if (_directClose) {
  _directClose.addEventListener('click', function() {
    _directOverlay.classList.remove('active');
    _directFrame.src = '';
  });
}

document.addEventListener('click', function(e) {
  if (_g4m3Popup && !_g4m3Popup.contains(e.target)) _g4m3Popup.classList.remove('visible');
});

// ── Navbar collapse ───────────────────────────────────────────────────────────
if (navbarToggleBtn && navbar) {
  navbarToggleBtn.addEventListener('click', function() { navbar.classList.toggle('collapsed'); });
}

// ── Search helper ─────────────────────────────────────────────────────────────
function search(input, template) {
  try { return new URL(input).toString(); } catch(e) {}
  try { var u = new URL('http://' + input); if (u.hostname.includes('.')) return u.toString(); } catch(e) {}
  return template.replace('%s', encodeURIComponent(input));
}

// ── navigate ──────────────────────────────────────────────────────────────────
window.navigateTo = function(url) {
  address.value = url;
  _navigateActiveOrCreate(url);
};

// ── Form submit ───────────────────────────────────────────────────────────────
form.addEventListener('submit', function(e) {
  e.preventDefault();
  var val = address.value.trim();
  if (!val) { alert('Please type your search/URL'); return; }
  var url = search(val, searchEngine ? searchEngine.value : 'https://duckduckgo.com/?q=%s');
  _navigateActiveOrCreate(url);
});

// ── Browser chrome bar wiring ─────────────────────────────────────────────────
var btnBack    = document.getElementById('browser-back');
var btnForward = document.getElementById('browser-forward');
var btnRefresh = document.getElementById('browser-refresh');
var btnHome    = document.getElementById('browser-home');
var btnNewTab  = document.getElementById('browser-new-tab');

if (btnBack)    btnBack.addEventListener('click',    function() { sendTabCmd(activeTabId, 'back'); });
if (btnForward) btnForward.addEventListener('click', function() { sendTabCmd(activeTabId, 'forward'); });
if (btnRefresh) btnRefresh.addEventListener('click', function() { sendTabCmd(activeTabId, 'reload'); });
if (btnHome)    btnHome.addEventListener('click',    function() { closeEmbed(); });
if (btnNewTab)  btnNewTab.addEventListener('click',  function() { createTab(null); });

if (browserUrlBar) {
  browserUrlBar.addEventListener('keydown', function(e) {
    if (e.key !== 'Enter') return;
    var val = browserUrlBar.value.trim();
    if (!val) return;
    var url = search(val, searchEngine ? searchEngine.value : 'https://duckduckgo.com/?q=%s');
    _navigateActiveOrCreate(url);
  });
  browserUrlBar.addEventListener('focus', function() { browserUrlBar.select(); });
}

// ── Embed message listener ────────────────────────────────────────────────────
var _wFallbacks = {};
var _activeW    = {};

window.addEventListener('message', function(e) {
  var d = e.data;
  if (!d || (d.source !== 'e' && d.source !== 'uv')) return;
  var type = (d.type || '').replace(d.source + ':', '');

  var senderTab = null;
  for (var i = 0; i < tabs.length; i++) {
    try { if (tabs[i].iframe.contentWindow === e.source) { senderTab = tabs[i]; break; } } catch(_) {}
  }
  if (!senderTab) return;

  if (type === 'ready') {
    senderTab.embedReady = true;
    var savedW1p = _ls.getItem('wVr1');
    var _isCDN = _cdnHosts.indexOf(location.hostname) !== -1 || location.hostname === '';
    load4d();
    resolveW(_isCDN, savedW1p, function(url, fallbacks) {
      _activeW[senderTab.id] = url;
      _wFallbacks[senderTab.id] = fallbacks;
      sendTabCmd(senderTab.id, 'setW1p', { w1p: url });
      if (senderTab.pendingUrl) {
        sendTabCmd(senderTab.id, 'navigate', { url: senderTab.pendingUrl });
        senderTab.pendingUrl = null;
      }
    });
  } else if (type === 'urlchange') {
    if (d.url) {
      senderTab.url = d.url;
      var friendly = _displayUrl(d.url);
      try {
        senderTab.title = friendly !== d.url ? friendly : new URL(d.url).hostname.replace(/^www\./, '');
      } catch(_) { senderTab.title = friendly; }
      if (senderTab.id === activeTabId && browserUrlBar) browserUrlBar.value = friendly;
      _renderTabs();
    }
  } else if (type === 'titlechange') {
    if (d.title) {
      senderTab.title = d.title;
      _renderTabs();
    }
  } else if (type === 'error') {
    var fallbacks = _wFallbacks[senderTab.id];
    var activeW   = _activeW[senderTab.id];
    if (d.message && /error code 7/i.test(d.message) && fallbacks) {
      var idx = fallbacks.indexOf(activeW);
      var next = fallbacks[idx + 1];
      if (next) {
        _activeW[senderTab.id] = next;
        sendTabCmd(senderTab.id, 'setW1p', { w1p: next });
        if (senderTab.url) sendTabCmd(senderTab.id, 'navigate', { url: senderTab.url });
        return;
      }
    }
    closeTab(senderTab.id);
    if (error) error.textContent = d.message || 'something went wrong';
  }
});

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.shiftKey && e.code === 'KeyZ') closeEmbed();
});

// ── Particles ─────────────────────────────────────────────────────────────────
(function() {
  for (var i = 0; i < 35; i++) {
    var p = document.createElement('div');
    p.className = 'particle';
    var size = Math.random() * 14 + 6;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + 'vw';
    var dur = Math.random() * 10 + 16;
    p.style.animationDuration = '8s, ' + dur + 's';
    p.style.animationDelay = '0s, -' + (Math.random() * dur) + 's';
    document.body.appendChild(p);
  }
})();

// ── Auth / Chat ───────────────────────────────────────────────────────────────
(function() {
  if (typeof _ls === 'undefined') {
    try {
      var _t = '__t'; localStorage.setItem(_t, _t); localStorage.removeItem(_t);
      window._ls = localStorage;
    } catch(e) {
      var _m = {};
      window._ls = {
        getItem:    function(k)    { return _m.hasOwnProperty(k) ? _m[k] : null; },
        setItem:    function(k, v) { _m[k] = String(v); },
        removeItem: function(k)    { delete _m[k]; }
      };
    }
  }
  var TOKEN_KEY = 'cc_pro_token';
  var SEEN_KEY = 'cc_seen';
  var _user = null;

  function _getToken() { return _ls.getItem(TOKEN_KEY) || ''; }
  function _setToken(t) { _ls.setItem(TOKEN_KEY, t); }
  function _clearToken() { _ls.removeItem(TOKEN_KEY); _user = null; }

  async function _validate(token) {
    try {
      var r = await fetch(HUB + '/api/auth/validate?token=' + encodeURIComponent(token));
      var d = await r.json();
      if (d.valid) return d;
    } catch(_) {}
    return null;
  }

  function _loadAds() {
    var adInterval = (typeof _4dInt !== 'undefined') ? _4dInt : 60000;
    var _adStart = Date.now();

    function _tryAd() {
      if (typeof _user !== 'undefined' && _user && _user.isPremium) return;
      var now = Date.now();
      if (now - _adStart < adInterval) return;
      var last = parseInt(_ls.getItem('_adLast') || '0', 10);
      if (isNaN(last) || last > now) last = 0;
      if (now - last < adInterval) return;
      _ls.setItem('_adLast', now);
      window.open(d4dU(), '_blank');
    }

    document.addEventListener('click', _tryAd);
    document.addEventListener('keydown', _tryAd);
  }

  function _showLogin() { var o = document.getElementById('login-overlay'); if (o) o.classList.add('active'); if (navbar) navbar.style.display = 'none'; }
  function _closeLogin() { var o = document.getElementById('login-overlay'); if (o) o.classList.remove('active'); if (navbar) navbar.style.display = ''; }
  function _dismissAsGuest() { _ls.setItem(SEEN_KEY, '1'); _closeLogin(); _loadAds(); }
  function _onAuth(user) { _user = user; _closeLogin(); if (!user.isPremium) _loadAds(); }

  function _showView(id) {
    ['login-view','register-view','forgot-view','sent-view'].forEach(function(v) {
      var el = document.getElementById(v);
      if (el) el.style.display = v === id ? '' : 'none';
    });
  }

  async function _boot() {
    var token = _getToken();
    if (token) { var user = await _validate(token); if (user) { _onAuth(user); return; } _clearToken(); }
    if (!_ls.getItem(SEEN_KEY)) setTimeout(_showLogin, 600);
    else _loadAds();
  }

  setTimeout(function() {
    var loginOverlay = document.getElementById('login-overlay');
    if (loginOverlay) loginOverlay.addEventListener('click', function(e) { if (e.target === loginOverlay) _dismissAsGuest(); });
    var closeBtn = document.getElementById('login-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', _dismissAsGuest);

    var lmSubmit = document.getElementById('lm-submit');
    if (lmSubmit) lmSubmit.addEventListener('click', async function() {
      var btn = this;
      var email = document.getElementById('lm-email').value.trim();
      var pass = document.getElementById('lm-pass').value;
      var errEl = document.getElementById('lm-err');
      errEl.textContent = '';
      if (!email || !pass) { errEl.textContent = 'Email and password are required.'; return; }
      btn.disabled = true; btn.textContent = 'Signing in…';
      try {
        var r = await fetch(HUB + '/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email, password: pass }) });
        var d = await r.json();
        if (!r.ok) { errEl.textContent = d.error || 'Login failed.'; btn.disabled = false; btn.textContent = 'Sign in'; return; }
        _setToken(d.token);
        var user = await _validate(d.token);
        if (user) _onAuth(user);
      } catch(_) { errEl.textContent = 'Network error.'; }
      btn.disabled = false; btn.textContent = 'Sign in';
    });

    ['lm-email','lm-pass'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('keydown', function(e) { if (e.key === 'Enter') { var s = document.getElementById('lm-submit'); if (s) s.click(); } });
    });

    var rmSubmit = document.getElementById('rm-submit');
    if (rmSubmit) rmSubmit.addEventListener('click', async function() {
      var btn = this;
      var username = document.getElementById('rm-user').value.trim();
      var email = document.getElementById('rm-email').value.trim();
      var pass = document.getElementById('rm-pass').value;
      var errEl = document.getElementById('rm-err');
      errEl.textContent = '';
      if (!username || !email || !pass) { errEl.textContent = 'All fields are required.'; return; }
      btn.disabled = true; btn.textContent = 'Creating…';
      try {
        var r = await fetch(HUB + '/auth/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: username, email: email, password: pass }) });
        var d = await r.json();
        if (!r.ok) { errEl.textContent = d.error || 'Registration failed.'; btn.disabled = false; btn.textContent = 'Create account'; return; }
        document.getElementById('sent-msg').textContent = 'Check your email for a verification link.';
        _showView('sent-view');
      } catch(_) { errEl.textContent = 'Network error.'; }
      btn.disabled = false; btn.textContent = 'Create account';
    });

    var fmSubmit = document.getElementById('fm-submit');
    if (fmSubmit) fmSubmit.addEventListener('click', async function() {
      var btn = this;
      var email = document.getElementById('fm-email').value.trim();
      var msgEl = document.getElementById('fm-msg');
      btn.disabled = true; btn.textContent = 'Sending…';
      try { await fetch(HUB + '/auth/forgot-password', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email }) }); } catch(_) {}
      msgEl.style.color = 'rgba(255,255,255,.5)';
      msgEl.textContent = 'If that email is registered, a reset link was sent.';
      btn.disabled = false; btn.textContent = 'Send link';
    });

    var lmToReg = document.getElementById('lm-to-register'); if (lmToReg) lmToReg.addEventListener('click', function() { _showView('register-view'); });
    var lmToFgt = document.getElementById('lm-to-forgot'); if (lmToFgt) lmToFgt.addEventListener('click', function() { _showView('forgot-view'); });
    var rmToLog = document.getElementById('rm-to-login'); if (rmToLog) rmToLog.addEventListener('click', function() { _showView('login-view'); });
    var fmToLog = document.getElementById('fm-to-login'); if (fmToLog) fmToLog.addEventListener('click', function() { _showView('login-view'); });
    var sentToLog = document.getElementById('sent-to-login'); if (sentToLog) sentToLog.addEventListener('click', function() { _showView('login-view'); });
  }, 0);

  _boot();
})();

(function() {
  var settingsBtn = document.getElementById('settingsBtn');
  if (!settingsBtn) return;
  var overlay = document.getElementById('settings-overlay');

  function _highlightEngine() {
    document.querySelectorAll('.eng-opt-btn').forEach(function(b) {
      b.classList.toggle('active', b.dataset.eng === selectedEngine);
    });
  }

  settingsBtn.addEventListener('click', function() {
    _highlightEngine();
    overlay.classList.add('active');
  });
  document.getElementById('settings-close-btn').addEventListener('click', function() { overlay.classList.remove('active'); });
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.classList.remove('active'); });

  document.querySelectorAll('.eng-opt-btn').forEach(function(b) {
    b.addEventListener('click', function() {
      selectedEngine = b.dataset.eng;
      _ls.setItem('ccPx', selectedEngine);
      _highlightEngine();
    });
  });
})();
