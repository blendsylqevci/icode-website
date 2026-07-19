/* ============================================================
   iCode LLC — site.js
   SQ/EN i18n, reveal, counters, mobile nav, accordion,
   utility clock, header scroll behaviour.
   Header/footer are server-rendered (see src/components/).
   ============================================================ */
(function(){
  "use strict";

  /* ---------- Icons (inline SVG) — used by page scripts ---------- */
  var ICON = {
    web:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M7 12h6"/></svg>',
    mobile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/></svg>',
    cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 4h2l2.2 11h10l2-8H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
    code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>',
    pen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4l6 6L8 22H2v-6z"/><path d="M12 6l6 6"/></svg>',
    cube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>',
    chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3C9.5 5.7 9.5 18.3 12 21"/></svg>',
    layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/></svg>',
    users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3 3 0 010 5.6M21 20c0-2.5-1.3-4.3-3-5.2"/></svg>',
    gauge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 13l4-4M3 13a9 9 0 0118 0"/><circle cx="12" cy="13" r="1.5" fill="currentColor"/></svg>',
    rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 15c-1 1-1 4-1 4s3 0 4-1m8.5-12.5C18 7 14 13 11 14L9 12c1-3 7-7 8.5-8.5zM15 9a2 2 0 100-4 2 2 0 000 4z"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12l5 5L19 7"/></svg>',
    erp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
    pos:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="9" rx="2"/><path d="M8 8h8M6 13v7h12v-7M10 17h4"/></svg>',
    game:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 9h12a4 4 0 014 4v3a2.5 2.5 0 01-4.5 1.5L16 15H8l-1.5 2.5A2.5 2.5 0 012 16v-3a4 4 0 014-4z"/><path d="M8 12h3M9.5 10.5v3"/><circle cx="16" cy="11.2" r=".9" fill="currentColor" stroke="none"/><circle cx="18" cy="13" r=".9" fill="currentColor" stroke="none"/></svg>',
    ai:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/></svg>'
  };

  var SERVICES = [
    {key:'erp', href:'/erp-platform', ico:'erp', sq:'Platformë ERP', en:'ERP Platform', dsq:'12 module — nga financat te prodhimi', den:'12 modules — finance to manufacturing'},
    {key:'pos', href:'/pos-system', ico:'pos', sq:'Sistem POS', en:'POS System', dsq:'Pikë shitjeje, e lidhur me ERP', den:'Point of sale, wired into ERP'},
    {key:'wms', href:'/wms-oms', ico:'cube', sq:'WMS & OMS', en:'WMS & OMS', dsq:'Depo, porosi & logjistikë', den:'Warehouse, orders & logistics'},
    {key:'mobile', href:'/mobile-apps', ico:'mobile', sq:'Aplikacione Mobile', en:'Mobile Apps', dsq:'iOS & Android me React Native', den:'iOS & Android with React Native'},
    {key:'ecommerce', href:'/ecommerce', ico:'cart', sq:'E-Commerce', en:'E-Commerce', dsq:'Integrime Shopify & Shopware', den:'Shopify & Shopware integrations'},
    {key:'software', href:'/custom-software', ico:'code', sq:'Custom Software', en:'Custom Software', dsq:'Sisteme me arkitekturë të pastër', den:'Systems on clean architecture'},
    {key:'web', href:'/web-development', ico:'web', sq:'Zhvillim Web', en:'Web Development', dsq:'Web apps & faqe me performancë', den:'High-performance sites & web apps'},
    {key:'uiux', href:'/ui-ux-design', ico:'pen', sq:'UI/UX Design', en:'UI/UX Design', dsq:'Produkte intuitive & të bukura', den:'Intuitive, beautiful products'},
    {key:'game', href:'/game-engine-3d', ico:'game', sq:'Game Engine & 3D', en:'Game Engine & 3D', dsq:'Lojëra, simulime & përvoja 3D', den:'Games, simulations & 3D experiences'},
    {key:'ai', href:'/ai-cloud', ico:'ai', sq:'Integrime AI & Cloud', en:'AI & Cloud', dsq:'AI në procese + Azure cloud', den:'AI in workflows + Azure cloud'}
  ];

  /* ---------- i18n ---------- */
  function applyLang(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-sq]').forEach(function(el){
      var v = el.getAttribute('data-'+lang);
      if(v!=null) el.textContent = v;
    });
    document.querySelectorAll('[data-sq-ph]').forEach(function(el){
      var v = el.getAttribute('data-'+lang+'-ph');
      if(v!=null) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('[data-lang-block]').forEach(function(el){
      el.classList.toggle('show', el.getAttribute('data-lang-block')===lang);
    });
    document.querySelectorAll('[data-setlang]').forEach(function(b){
      b.classList.toggle('on', b.getAttribute('data-setlang')===lang);
    });
    try{ localStorage.setItem('icode-lang', lang); }catch(e){}
  }
  function initLang(){
    var saved='sq';
    try{ saved = localStorage.getItem('icode-lang') || 'sq'; }catch(e){}
    applyLang(saved);
    document.addEventListener('click', function(e){
      var b = e.target.closest('[data-setlang]');
      if(b) applyLang(b.getAttribute('data-setlang'));
    });
  }

  /* ---------- Header scroll ---------- */
  function initHeaderScroll(){
    var header = document.getElementById('site-header');
    if(!header) return;
    function onScroll(){ header.classList.toggle('scrolled', window.scrollY>10); }
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  /* ---------- Mobile menu ---------- */
  function initMobileMenu(){
    document.addEventListener('click', function(e){
      var tog = e.target.closest('[data-mtoggle]');
      if(tog){
        var item = tog.closest('.m-item');
        item.classList.toggle('open');
        var subs = item.nextElementSibling;
        if(subs && subs.classList.contains('m-subs')) subs.classList.toggle('open');
        return;
      }
      if(e.target.closest('.menu-toggle')) document.body.classList.toggle('menu-open');
      else if(e.target.closest('.nav-overlay')) document.body.classList.remove('menu-open');
      else if(e.target.closest('.mobile-nav a')) document.body.classList.remove('menu-open');
    });
  }

  /* ---------- Drawer positioning (drawer starts below the header) ---------- */
  function initDrawerPosition(){
    var drawer = document.querySelector('.mobile-nav');
    var overlay = document.querySelector('.nav-overlay');
    if(!drawer || !overlay) return;
    function positionDrawer(){
      var h = document.getElementById('site-header');
      var top = h ? Math.max(0, h.getBoundingClientRect().bottom) : 0;
      drawer.style.top = top+'px'; overlay.style.top = top+'px';
    }
    positionDrawer();
    window.addEventListener('resize', positionDrawer);
    window.addEventListener('scroll', function(){ if(document.body.classList.contains('menu-open')) positionDrawer(); }, {passive:true});
    document.addEventListener('click', function(e){ if(e.target.closest('.menu-toggle')) positionDrawer(); }, true);
  }

  /* ---------- Reveal on scroll (rect-based; robust in iframes/captures) ---------- */
  function revealAll(){
    document.querySelectorAll('[data-reveal]:not(.in)').forEach(function(el){ el.classList.add('in'); });
  }
  function scanReveal(){
    var vh = window.innerHeight || document.documentElement.clientHeight || 0;
    if(vh < 2){ revealAll(); return; } // non-interactive / capture context
    document.querySelectorAll('[data-reveal]:not(.in)').forEach(function(el){
      var r = el.getBoundingClientRect();
      if(r.top < vh*0.95 && r.bottom > -40) el.classList.add('in');
    });
  }
  function initReveal(){
    scanReveal();
    requestAnimationFrame(scanReveal);
    window.addEventListener('scroll', scanReveal, {passive:true});
    window.addEventListener('resize', scanReveal, {passive:true});
    window.addEventListener('load', scanReveal);
    setTimeout(scanReveal, 250);
    // Guaranteed fallback: never let content stay hidden.
    setTimeout(revealAll, 1300);
    window.ICODE_scan = scanReveal;
  }

  /* ---------- Counters (rect-based) ---------- */
  function initCounters(){
    var els = [].slice.call(document.querySelectorAll('[data-count]'));
    if(!els.length) return;
    function run(el){
      if(el.__counted) return; el.__counted = true;
      var to = parseFloat(el.getAttribute('data-count'));
      var dec = (el.getAttribute('data-dec')|0);
      var suf = el.getAttribute('data-suffix')||'';
      var pre = el.getAttribute('data-prefix')||'';
      var start=null, dur=1600;
      function step(ts){
        if(!start) start=ts;
        var p=Math.min((ts-start)/dur,1);
        var e=1-Math.pow(1-p,3);
        var val=(to*e).toFixed(dec);
        el.textContent = pre + Number(val).toLocaleString('en-US') + suf;
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    function scan(){
      var vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(function(el){
        var r = el.getBoundingClientRect();
        if(r.top < vh*0.85 && r.bottom > 0) run(el);
      });
    }
    scan();
    window.addEventListener('scroll', scan, {passive:true});
    window.addEventListener('resize', scan, {passive:true});
    window.addEventListener('load', scan);
    setTimeout(scan, 350);
  }

  /* ---------- Accordion ---------- */
  function initAccordion(){
    document.addEventListener('click', function(e){
      var q = e.target.closest('.acc-q');
      if(!q) return;
      var item = q.parentElement;
      var a = item.querySelector('.acc-a');
      var open = item.classList.contains('open');
      // close siblings within same group
      var group = item.closest('[data-acc-group]') || document;
      group.querySelectorAll('.acc-item.open').forEach(function(it){
        if(it!==item){ it.classList.remove('open'); it.querySelector('.acc-a').style.maxHeight=null; }
      });
      if(open){ item.classList.remove('open'); a.style.maxHeight=null; }
      else { item.classList.add('open'); a.style.maxHeight = a.scrollHeight+'px'; }
    });
  }

  /* ---------- Utility clock ---------- */
  function initClock(){
    var el=document.getElementById('u-clock'); if(!el) return;
    function two(n){return n<10?'0'+n:n;}
    function tick(){var d=new Date(); el.textContent=two(d.getHours())+':'+two(d.getMinutes())+':'+two(d.getSeconds());}
    tick(); setInterval(tick,1000);
  }

  /* ---------- Init ---------- */
  function init(){
    initClock();
    initLang();
    initHeaderScroll();
    initMobileMenu();
    initDrawerPosition();
    initReveal();
    initCounters();
    initAccordion();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // expose icons for pages
  window.ICODE_ICON = ICON;
  window.ICODE_SERVICES = SERVICES;
})();
