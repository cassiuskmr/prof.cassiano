/* ===================================================================
   PORTAL PROFESSOR CASSIANO — shell compartilhado
   Injeta cabeçalho, rodapé e proteção anti-cópia em todas as páginas.

   Como usar:
   <link rel="stylesheet" href="CAMINHO/assets/style.css">
   <div id="site-header"></div>  ← após <body>
   <div id="site-footer"></div>  ← antes de </body>
   <script src="CAMINHO/assets/disciplinas.js"></script>
   <script src="CAMINHO/assets/shell.js" data-base="CAMINHO/"></script>
   data-base: "" na raiz, "../" nas subpastas disciplinas/
   =================================================================== */

(function(){
  var thisScript = document.currentScript;
  var BASE = (thisScript && thisScript.getAttribute('data-base')) || '';

  /* ---- CABEÇALHO ---- */
  var headerHTML =
    '<header class="site-header">'+
      '<div class="bar">'+
        '<a class="brand" href="'+BASE+'index.html">'+
          '<span class="mark">C</span>'+
          '<span>'+
            '<span class="bt">Professor Cassiano</span>'+
            '<br><span class="bs">Material de Aula</span>'+
          '</span>'+
        '</a>'+
        '<button class="nav-toggle" id="shellNavToggle" aria-label="Abrir menu" aria-expanded="false">'+
          '<span></span><span></span><span></span>'+
        '</button>'+
        '<nav class="site-nav" id="shellNav">'+
          '<a href="'+BASE+'index.html">Início</a>'+
          '<a href="'+BASE+'index.html#disciplinas">Disciplinas</a>'+
          '<a href="'+BASE+'index.html#disciplinas" class="cta">Acessar →</a>'+
        '</nav>'+
      '</div>'+
    '</header>';

  /* ---- RODAPÉ ---- */
  var year = new Date().getFullYear();

  function buildDiscLinks(){
    var discs = window.PORTAL_DISCIPLINAS || [];
    if(!discs.length) return '<li style="color:rgba(246,244,238,.25)">Em breve</li>';
    return discs.map(function(d){
      return '<li><a href="'+BASE+d.pagina+'">'+d.nome+'</a></li>';
    }).join('');
  }

  var footerHTML =
    '<footer class="site-footer">'+
      '<div class="ft-inner">'+

        '<div class="ft-col ft-col-brand">'+
          '<a class="ft-logo" href="'+BASE+'index.html">'+
            '<span class="mark">C</span>'+
            '<span class="bt">Professor Cassiano</span>'+
          '</a>'+
          '<p>Material didático interativo para o ensino médio. Conteúdo construído passo a passo, com simulações e exercícios corrigidos na hora.</p>'+
        '</div>'+

        '<div class="ft-col">'+
          '<h4 class="ft-col-title">Navegação</h4>'+
          '<ul class="ft-links">'+
            '<li><a href="'+BASE+'index.html">Início</a></li>'+
            '<li><a href="'+BASE+'index.html#disciplinas">Todas as disciplinas</a></li>'+
          '</ul>'+
        '</div>'+

        '<div class="ft-col">'+
          '<h4 class="ft-col-title">Disciplinas</h4>'+
          '<ul class="ft-links">'+buildDiscLinks()+'</ul>'+
        '</div>'+

      '</div>'+
      '<div class="ft-bottom">'+
        '<p>© '+year+' Professor Cassiano · Material didático de apoio ao ensino médio</p>'+
        '<p>Conteúdo para fins educacionais · Uso em sala de aula</p>'+
      '</div>'+
    '</footer>';

  /* ---- INJEÇÃO ---- */
  function inject(){
    var h = document.getElementById('site-header');
    if(h) h.outerHTML = headerHTML;
    var f = document.getElementById('site-footer');
    if(f) f.outerHTML = footerHTML;

    document.body.classList.add('no-copy');
    setupMobileNav();
    applyProtection();
  }

  /* ---- MENU MOBILE ---- */
  function setupMobileNav(){
    var toggle = document.getElementById('shellNavToggle');
    var nav    = document.getElementById('shellNav');
    if(!toggle || !nav) return;

    toggle.addEventListener('click', function(){
      var open = toggle.getAttribute('aria-expanded') === 'true';
      var next = !open;
      toggle.setAttribute('aria-expanded', next);
      toggle.classList.toggle('open', next);
      nav.classList.toggle('open', next);
    });

    document.addEventListener('click', function(e){
      if(!toggle.contains(e.target) && !nav.contains(e.target)){
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('open');
        nav.classList.remove('open');
      }
    });

    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  /* ---- PROTEÇÃO ANTI-CÓPIA ---- */
  function applyProtection(){
    document.addEventListener('contextmenu', function(e){ e.preventDefault(); });
    document.addEventListener('copy',  function(e){ if(!isField(e.target)) e.preventDefault(); });
    document.addEventListener('cut',   function(e){ if(!isField(e.target)) e.preventDefault(); });
    document.addEventListener('dragstart', function(e){ e.preventDefault(); });
    document.addEventListener('keydown', function(e){
      var k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey;
      if(mod && ['c','x','u','s'].indexOf(k) !== -1 && !isField(e.target)) e.preventDefault();
    });
  }

  function isField(el){ return el && (el.tagName==='INPUT' || el.tagName==='TEXTAREA'); }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
