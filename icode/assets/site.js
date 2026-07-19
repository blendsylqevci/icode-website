/* ============================================================
   iCode LLC — site.js
   Shared header/footer injection, SQ/EN i18n, reveal, counters,
   mobile nav, accordion, marquee, header scroll behaviour.
   ============================================================ */
(function(){
  "use strict";

  /* ---------- Icons (inline SVG) ---------- */
  var ICON = {
    web:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M7 12h6"/></svg>',
    mobile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/></svg>',
    cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 4h2l2.2 11h10l2-8H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
    code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/></svg>',
    pen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4l6 6L8 22H2v-6z"/><path d="M12 6l6 6"/></svg>',
    cube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>',
    chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>',
    ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    x:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 3h3l-7 8 8 10h-6l-5-6-5 6H2l8-9L2 3h6l4 5z"/></svg>',
    li:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8H3v13h3.5zM4.7 3a2 2 0 100 4 2 2 0 000-4zM21 21h-3.5v-7c0-1.7-.6-2.6-1.9-2.6-1.1 0-1.7.7-2 1.5-.1.3-.1.7-.1 1V21H10s.05-11 0-12h3.5v1.7c.5-.8 1.3-1.9 3.3-1.9 2.4 0 4.2 1.6 4.2 5z"/></svg>',
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
    {key:'erp', ico:'erp', sq:'Platformë ERP', en:'ERP Platform', dsq:'12 module — nga financat te prodhimi', den:'12 modules — finance to manufacturing'},
    {key:'pos', ico:'pos', sq:'Sistem POS', en:'POS System', dsq:'Pikë shitjeje, e lidhur me ERP', den:'Point of sale, wired into ERP'},
    {key:'wms', ico:'cube', sq:'WMS & OMS', en:'WMS & OMS', dsq:'Depo, porosi & logjistikë', den:'Warehouse, orders & logistics'},
    {key:'mobile', ico:'mobile', sq:'Aplikacione Mobile', en:'Mobile Apps', dsq:'iOS & Android me React Native', den:'iOS & Android with React Native'},
    {key:'ecommerce', ico:'cart', sq:'E-Commerce', en:'E-Commerce', dsq:'Integrime Shopify & Shopware', den:'Shopify & Shopware integrations'},
    {key:'software', ico:'code', sq:'Custom Software', en:'Custom Software', dsq:'Sisteme me arkitekturë të pastër', den:'Systems on clean architecture'},
    {key:'web', ico:'web', sq:'Zhvillim Web', en:'Web Development', dsq:'Web apps & faqe me performancë', den:'High-performance sites & web apps'},
    {key:'uiux', ico:'pen', sq:'UI/UX Design', en:'UI/UX Design', dsq:'Produkte intuitive & të bukura', den:'Intuitive, beautiful products'},
    {key:'game', ico:'game', sq:'Game Engine & 3D', en:'Game Engine & 3D', dsq:'Lojëra, simulime & përvoja 3D', den:'Games, simulations & 3D experiences'},
    {key:'ai', ico:'ai', sq:'Integrime AI & Cloud', en:'AI & Cloud', dsq:'AI në procese + Azure cloud', den:'AI in workflows + Azure cloud'}
  ];

  var NAV = [
    {href:'index.html', sq:'Ballina', en:'Home'},
    {mega:'platforms', href:'services.html', sq:'Platformat', en:'Platforms'},
    {mega:'services', href:'services.html', sq:'Shërbimet', en:'Services'},
    {mega:'work', href:'portfolio.html', sq:'Projektet', en:'Work'},
    {mega:'company', href:'about.html', sq:'Kompania', en:'Company'}
  ];

  function current(){
    var p = location.pathname.split('/').pop();
    return p && p.length ? p : 'index.html';
  }

  /* ---------- Build header ---------- */
  function buildHeader(){
    var cur = current();
    var WORKCATS = [
      ['erp','ERP & POS','ERP & POS'],
      ['web','Web & Portale','Web & Portals'],
      ['mobile','Mobile','Mobile'],
      ['ecommerce','E-Commerce','E-Commerce'],
      ['3d','Game & 3D','Game & 3D'],
      ['software','Custom Software','Custom Software']
    ];
    function dlink(href,sq,en){return '<a class="dd-a" href="'+href+'"><i>›</i><span data-sq="'+sq+'" data-en="'+en+'">'+sq+'</span></a>';}
    function svcLinks(keys){
      return keys.map(function(k){
        var s=null; SERVICES.forEach(function(x){if(x.key===k)s=x;});
        return s? dlink('service-'+s.key+'.html', s.sq, s.en) : '';
      }).join('');
    }
    var ckSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" style="width:13px;height:13px;"><path d="M5 12l5 5L19 7"/></svg>';
    function dgroup(tSq,tEn,inner){return '<div><div class="dd-title" data-sq="'+tSq+'" data-en="'+tEn+'">'+tSq+'</div><div class="dd-list">'+inner+'</div></div>';}
    function dcta(hSq,hEn,rows,href,bSq,bEn){
      return '<div class="dd-cta"><h4 data-sq="'+hSq+'" data-en="'+hEn+'">'+hSq+'</h4>'+
        '<div class="dd-cta-rows">'+rows.map(function(r){return '<span class="dd-ck">'+ckSvg+'<b data-sq="'+r[0]+'" data-en="'+r[1]+'">'+r[0]+'</b></span>';}).join('')+'</div>'+
        '<a class="btn btn-primary" href="'+href+'" data-sq="'+bSq+'" data-en="'+bEn+'">'+bSq+'</a></div>';
    }
    var PANELS = {
      platforms: dgroup('PLATFORMAT','PLATFORMS', svcLinks(['erp','pos','wms','ecommerce','ai']))+
        dgroup('SI PUNOJMË','HOW WE WORK', dlink('process.html','Procesi ynë','Our process')+dlink('industries.html','Industritë','Industries')+dlink('portfolio.html#cat=erp','Raste ERP & POS','ERP & POS cases'))+
        dcta('Nis me një demo të platformës.','Start with a platform demo.',[['12 module ERP mbi një bazë të dhënash','12 ERP modules on one database'],['POS offline-first','An offline-first POS'],['SLA 99.9% & mbështetje 24/7','99.9% SLA & 24/7 support']],'contact.html','Kërko demo','Request a demo'),
      services: dgroup('ZHVILLIMI','DEVELOPMENT', svcLinks(['web','mobile','software']))+
        dgroup('DIZAJNI & 3D','DESIGN & 3D', svcLinks(['uiux','game'])+dlink('services.html','Të gjitha shërbimet','All services'))+
        dcta('Nuk je i sigurt çfarë të duhet?','Not sure what you need?',[['Bisedë falas 15-minutëshe','A free 15-minute call'],['Plan i qartë, pa detyrime','A clear plan, no obligations']],'contact.html','Konsultë falas','Free consultation'),
      work: dgroup('KATEGORITË','CATEGORIES', WORKCATS.map(function(c){return dlink('portfolio.html#cat='+c[0],c[1],c[2]);}).join('')+dlink('portfolio.html','Të gjitha projektet','All projects'))+
        dcta('Projekti yt mund të jetë i radhës.','Your project could be next.',[['120+ projekte të lëshuara','120+ projects shipped'],['98% e klientëve rikthehen','98% of clients come back']],'contact.html','Nis një projekt','Start a project'),
      company: dgroup('KOMPANIA','COMPANY', dlink('about.html','Rreth nesh','About us')+dlink('process.html','Procesi','Process')+dlink('industries.html','Industritë','Industries'))+
        dgroup('MË SHUMË','MORE', dlink('blog.html','Blog','Blog')+dlink('careers.html','Karriera','Careers')+dlink('contact.html','Kontakti','Contact'))+
        dcta('Cakto një bisedë falas 15-minutëshe.','Book a free 15-minute call.',[['+383 48 331 333','+383 48 331 333'],['info@icode-ks.com','info@icode-ks.com']],'contact.html','Cakto takim','Book a call')
    };
    var ACT = {
      platforms:['service-erp.html','service-pos.html','service-wms.html','service-ecommerce.html','service-ai.html'],
      services:['services.html','service-web.html','service-mobile.html','service-software.html','service-uiux.html','service-game.html'],
      work:['portfolio.html'],
      company:['about.html','process.html','industries.html','blog.html','careers.html','contact.html']
    };
    var navHtml = NAV.map(function(n){
      if(n.mega){
        var act = (ACT[n.mega]||[]).indexOf(cur)>-1 ? ' active':'';
        return '<li class="nav-item"><a class="nav-link'+act+'" href="'+n.href+'">'+
          '<span data-sq="'+n.sq+'" data-en="'+n.en+'">'+n.sq+'</span>'+
          '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></a>'+
          '<div class="dropdown"><div class="dd-wrap dd-cols">'+PANELS[n.mega]+'</div></div></li>';
      }
      var act2 = cur===n.href ? ' active':'';
      return '<li class="nav-item"><a class="nav-link'+act2+'" href="'+n.href+'" data-sq="'+n.sq+'" data-en="'+n.en+'">'+n.sq+'</a></li>';
    }).join('');
    var MOB = {
      platforms: [['service-erp.html','Platformë ERP','ERP Platform'],['service-pos.html','Sistem POS','POS System'],['service-wms.html','WMS & OMS','WMS & OMS'],['service-ecommerce.html','E-Commerce','E-Commerce'],['service-ai.html','Integrime AI & Cloud','AI & Cloud']],
      services: [['service-web.html','Zhvillim Web','Web Development'],['service-mobile.html','Aplikacione Mobile','Mobile Apps'],['service-software.html','Custom Software','Custom Software'],['service-uiux.html','UI/UX Design','UI/UX Design'],['service-game.html','Game Engine & 3D','Game Engine & 3D']],
      work: WORKCATS.map(function(c){return ['portfolio.html#cat='+c[0],c[1],c[2]];}),
      company: [['about.html','Rreth nesh','About us'],['process.html','Procesi','Process'],['industries.html','Industritë','Industries'],['blog.html','Blog','Blog'],['careers.html','Karriera','Careers'],['contact.html','Kontakti','Contact']]
    };
    var mobileHtml = NAV.map(function(n){
      if(!n.mega) return '<a href="'+n.href+'" data-sq="'+n.sq+'" data-en="'+n.en+'">'+n.sq+'</a>';
      var subs = MOB[n.mega].map(function(l){return '<a class="sub" href="'+l[0]+'" data-sq="'+l[1]+'" data-en="'+l[2]+'">'+l[1]+'</a>';}).join('');
      return '<div class="m-item"><a href="'+n.href+'" data-sq="'+n.sq+'" data-en="'+n.en+'">'+n.sq+'</a>'+
        '<button class="m-chev" data-mtoggle aria-label="Expand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></button></div>'+
        '<div class="m-subs">'+subs+'</div>';
    }).join('');

    var brand = '<a class="brand" href="index.html"><img class="brand-logo" src="assets/brand/logo-black.png" alt="iCode"></a>';

    var header = document.getElementById('site-header');
    if(header){
      header.className='site-header';
      header.innerHTML =
        '<div class="container-wide"><div class="bar">'+
        '<button class="menu-toggle" aria-label="Menu"><span></span></button>'+brand+
        '<nav class="nav"><ul style="display:flex;gap:2px;">'+navHtml+'</ul></nav>'+
        '<div class="header-actions">'+
          '<a class="btn btn-primary" href="contact.html" data-sq="Konsultë falas" data-en="Free consultation">Konsultë falas</a>'+
        '</div></div></div>';
      // utility bar above header
      var ub = document.createElement('div');
      ub.className='utility-bar';
      ub.innerHTML = '<div class="container-wide"><div class="u-inner">'+
        '<div class="u-left"><b style="color:var(--ink);font-weight:600;letter-spacing:.02em;">Gjilan, KOSOVË</b><span style="color:var(--muted-2);">·</span><span id="u-clock" style="font-variant-numeric:tabular-nums;font-weight:600;color:var(--ink);">--:--:--</span></div>'+
        '<div class="u-right">'+
          '<a class="u-phone" href="tel:+38348331333">+383 48 331 333</a>'+
          '<a href="mailto:info@icode-ks.com">info@icode-ks.com</a>'+
          '<div class="lang-toggle" role="group" aria-label="Language">'+
            '<button data-setlang="sq">SQ</button><button data-setlang="en">EN</button></div>'+
          '<a class="u-badge" href="audit.html"><span data-sq="Kërko audit falas" data-en="Request free audit">Kërko audit falas</span>'+ICON.arrow+'</a>'+
        '</div></div></div>';
      header.parentNode.insertBefore(ub, header);
    }
    // mobile drawer + overlay
    var drawer = document.createElement('div'); drawer.className='mobile-nav';
    drawer.innerHTML = '<div class="m-top"><div class="lang-toggle" role="group" aria-label="Language"><button data-setlang="sq">SQ</button><button data-setlang="en">EN</button></div><a class="u-badge" href="audit.html"><span data-sq="Kërko audit falas" data-en="Request free audit">Kërko audit falas</span>'+ICON.arrow+'</a></div>' + mobileHtml + '<a class="btn btn-primary" href="contact.html" data-sq="Na kontakto" data-en="Get in touch">Na kontakto</a>';
    var overlay = document.createElement('div'); overlay.className='nav-overlay';
    document.body.appendChild(overlay); document.body.appendChild(drawer);
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

  /* ---------- Build footer ---------- */
  function buildFooter(){
    var f = document.getElementById('site-footer');
    if(!f) return;
    var servLinks = SERVICES.map(function(s){
      return '<a href="service-'+s.key+'.html" data-sq="'+s.sq+'" data-en="'+s.en+'">'+s.sq+'</a>';
    }).join('');
    f.className='site-footer';
    f.innerHTML =
      '<div class="container-wide">'+
        '<div class="footer-top">'+
          '<div class="footer-brand">'+
            '<a class="brand" href="index.html"><img class="brand-logo" src="assets/brand/logo-white.png" alt="iCode"></a>'+
            '<p data-sq="Prej 10 vitesh ndërtojmë platforma softuerike — ERP, POS, WMS & OMS — aplikacione mobile dhe integrime AI për biznese që rriten." data-en="For 10 years we have built software platforms — ERP, POS, WMS & OMS — mobile apps and AI integrations for growing businesses.">Prej 10 vitesh ndërtojmë platforma softuerike — ERP, POS, WMS & OMS — aplikacione mobile dhe integrime AI për biznese që rriten.</p>'+
            '<div class="socials">'+
              '<a href="https://m.facebook.com/ICODEKS" target="_blank" rel="noopener" aria-label="Facebook">'+ICON.fb+'</a>'+
              '<a href="https://www.instagram.com/icode_ks/" target="_blank" rel="noopener" aria-label="Instagram">'+ICON.ig+'</a>'+
              '<a href="https://twitter.com/iCode_ks" target="_blank" rel="noopener" aria-label="X">'+ICON.x+'</a>'+
              '<a href="https://www.linkedin.com/company/icode-ks" target="_blank" rel="noopener" aria-label="LinkedIn">'+ICON.li+'</a>'+
            '</div>'+
          '</div>'+
          '<div class="footer-col"><h5 data-sq="Shërbimet" data-en="Services">Shërbimet</h5>'+servLinks+'</div>'+
          '<div class="footer-col"><h5 data-sq="Kompania" data-en="Company">Kompania</h5>'+
            '<a href="about.html" data-sq="Rreth nesh" data-en="About us">Rreth nesh</a>'+
            '<a href="portfolio.html" data-sq="Projekte" data-en="Work">Projekte</a>'+
            '<a href="process.html" data-sq="Procesi" data-en="Process">Procesi</a>'+
            '<a href="industries.html" data-sq="Industritë" data-en="Industries">Industritë</a>'+
            '<a href="careers.html" data-sq="Karriera" data-en="Careers">Karriera</a>'+
            '<a href="blog.html" data-sq="Blog" data-en="Blog">Blog</a></div>'+
          '<div class="footer-col"><h5 data-sq="Kontakti" data-en="Contact">Kontakti</h5>'+
            '<a href="tel:+38348331333">+383 48 331 333</a>'+
            '<a href="mailto:info@icode-ks.com">info@icode-ks.com</a>'+
            '<a href="mailto:office@icode-ks.com">office@icode-ks.com</a>'+
            '<a href="#" data-sq="Gjilan, Kosovë" data-en="Gjilan, Kosovo">Gjilan, Kosovë</a>'+
            '<a class="btn btn-primary" href="contact.html" style="margin-top:14px;display:inline-flex;" data-sq="Nis një projekt" data-en="Start a project">Nis një projekt</a></div>'+
        '</div>'+
        '<div class="footer-bottom">'+
          '<span data-sq="© 2026 iCode LLC. Të gjitha të drejtat e rezervuara." data-en="© 2026 iCode LLC. All rights reserved.">© 2026 iCode LLC. Të gjitha të drejtat e rezervuara.</span>'+
          '<div class="links"><a href="#" data-sq="Privatësia" data-en="Privacy">Privatësia</a><a href="#" data-sq="Kushtet" data-en="Terms">Kushtet</a></div>'+
        '</div>'+
      '</div>';
  }

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
    buildHeader();
    buildFooter();
    initClock();
    initLang();
    initHeaderScroll();
    initMobileMenu();
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
