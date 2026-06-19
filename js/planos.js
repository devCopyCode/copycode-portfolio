(function () {
  'use strict';

  var WHATSAPP_NUMBER = '554197063216';

  var PLAN_WA_MSGS = {
    'pt-BR': {
      essencial:    'Olá, conheci o plano Site Essencial pelo site da Copy & Code e gostaria de receber mais informações.',
      profissional: 'Olá, conheci o plano Site Profissional pelo site da Copy & Code e gostaria de receber mais informações.',
      avancado:     'Olá, conheci o plano Site Avançado pelo site da Copy & Code e gostaria de solicitar uma análise do meu projeto.'
    },
    'en': {
      essencial:    'Hello, I found the Essential Website plan on the Copy & Code website and would like more information.',
      profissional: 'Hello, I found the Professional Website plan on the Copy & Code website and would like more information.',
      avancado:     'Hello, I found the Advanced Website plan on the Copy & Code website and would like to request a project analysis.'
    }
  };

  var PLAN_NAMES = {
    'pt-BR': { essencial: 'Site Essencial', profissional: 'Site Profissional', avancado: 'Site Avançado' },
    'en':    { essencial: 'Essential Website', profissional: 'Professional Website', avancado: 'Advanced Website' }
  };

  var QUIZ_RESULT_MSG = {
    'pt-BR': 'Olá, fiz o quiz do site da Copy & Code e recebi a recomendação para o plano {plan}. Gostaria de saber mais.',
    'en':    'Hello, I took the quiz on the Copy & Code website and was recommended the {plan} plan. I would like to know more.'
  };

  // Light background sections — header goes dark text when overlapping these
  var LIGHT_SECTION_IDS = ['quiz', 'comparativo', 'dominio', 'informacoes', 'faq-planos', 'contato-planos'];

  // ================================================================
  //  Utilities
  // ================================================================

  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  var desktopMenuQuery = window.matchMedia('(min-width: 861px)');

  function getFocusableElements(container) {
    return qsa('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])', container)
      .filter(function (el) { return !el.closest('[hidden]'); });
  }

  function getLang() {
    return (window.copyECodeI18n && window.copyECodeI18n.getLang)
      ? window.copyECodeI18n.getLang()
      : (localStorage.getItem('copyecode-lang') === 'en' ? 'en' : 'pt-BR');
  }

  function getMenuLabel(isOpen) {
    var isPt = getLang() === 'pt-BR';
    if (isOpen) return isPt ? 'Fechar menu' : 'Close menu';
    return isPt ? 'Abrir menu' : 'Open menu';
  }

  function syncMenuButtonLabel() {
    var btn = qs('#menuBtn');
    var nav = qs('#nav');
    if (!btn) return;
    btn.setAttribute('aria-label', getMenuLabel(Boolean(nav && nav.classList.contains('open'))));
  }

  function waUrl(plan) {
    var lang = getLang();
    var msgs = PLAN_WA_MSGS[lang] || PLAN_WA_MSGS['pt-BR'];
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msgs[plan] || '');
  }

  // ================================================================
  //  Menu toggle
  // ================================================================

  function initMenu() {
    var btn = qs('#menuBtn');
    var nav = qs('#nav');
    var overlay = qs('#navOverlay');
    var lastMenuFocus = null;
    if (!btn || !nav) return;

    function setOverlay(open) {
      if (!overlay) return;

      if (open) {
        overlay.hidden = false;
        requestAnimationFrame(function () {
          overlay.classList.add('is-visible');
        });
        return;
      }

      overlay.classList.remove('is-visible');
      overlay.hidden = true;
    }

    function syncA11y(open) {
      if (desktopMenuQuery.matches) {
        nav.removeAttribute('aria-hidden');
        nav.removeAttribute('tabindex');
        return;
      }

      nav.setAttribute('aria-hidden', String(!open));

      if (open) {
        nav.setAttribute('tabindex', '-1');
      } else {
        nav.removeAttribute('tabindex');
      }
    }

    function setState(open, restoreFocus) {
      if (open) {
        lastMenuFocus = document.activeElement === document.body ? btn : document.activeElement;
      }

      nav.classList.toggle('open', open);
      btn.classList.toggle('active', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', getMenuLabel(open));
      syncA11y(open);
      setOverlay(open);
      document.body.classList.toggle('is-locked', open);

      if (open) {
        var focusMenu = function () {
          var firstMenuItem = getFocusableElements(nav)[0] || nav;
          firstMenuItem.focus({ preventScroll: true });
        };

        requestAnimationFrame(function () {
          focusMenu();
          window.setTimeout(focusMenu, 60);
          window.setTimeout(focusMenu, 320);
        });
      } else if (restoreFocus && lastMenuFocus && typeof lastMenuFocus.focus === 'function') {
        lastMenuFocus.focus({ preventScroll: true });
      }
    }

    function close(restoreFocus) {
      setState(false, Boolean(restoreFocus));
    }

    function open() {
      setState(true, false);
    }

    function trapMenuFocus(e) {
      if (!nav.classList.contains('open') || e.key !== 'Tab') return;

      var focusable = getFocusableElements(nav);
      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (!nav.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
        return;
      }

      if (e.shiftKey && (document.activeElement === first || document.activeElement === nav)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    btn.addEventListener('click', function () {
      nav.classList.contains('open') ? close(true) : open();
    });

    qsa('a', nav).forEach(function (a) {
      a.addEventListener('click', function () { close(); });
    });

    if (overlay) {
      overlay.addEventListener('click', function () { close(true); });
    }

    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) close(true);
      trapMenuFocus(e);
    });

    function resetMenuForViewport() {
      if (desktopMenuQuery.matches) {
        close();
      } else {
        syncA11y(nav.classList.contains('open'));
      }
    }

    if (desktopMenuQuery.addEventListener) {
      desktopMenuQuery.addEventListener('change', resetMenuForViewport);
    } else if (desktopMenuQuery.addListener) {
      desktopMenuQuery.addListener(resetMenuForViewport);
    }

    syncMenuButtonLabel();
    syncA11y(false);
  }

  // ================================================================
  //  Language switcher
  // ================================================================

  function initLanguageSync() {
    document.addEventListener('copyecode:languagechange', function () {
      renderQuizResult();
      updatePageMeta();
      syncMenuButtonLabel();
    });
  }

  // ================================================================
  //  Scroll reveal
  // ================================================================

  function initReveal() {
    var items = qsa('.reveal');
    if (!items.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    items.forEach(function (el) { obs.observe(el); });
  }

  // ================================================================
  //  Header light / dark
  // ================================================================

  function initHeader() {
    var header = qs('#header');
    if (!header) return;

    var lightEls = LIGHT_SECTION_IDS
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    var visible = new Set();

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visible.add(entry.target.id);
        } else {
          visible.delete(entry.target.id);
        }
      });
      header.classList.toggle('header--light', visible.size > 0);
    }, { rootMargin: '-62px 0px 0px 0px', threshold: 0 });

    lightEls.forEach(function (el) { obs.observe(el); });
  }

  // ================================================================
  //  Back to top
  // ================================================================

  function initBackToTop() {
    var btn = qs('#backToTop');
    if (!btn) return;
    btn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    });
  }

  // ================================================================
  //  Footer year
  // ================================================================

  function initFooterYear() {
    var el = qs('#footerYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  // ================================================================
  //  Smooth scroll for hash links within planos.html
  // ================================================================

  function initSmoothScroll() {
    var headerH = function () { return (qs('#header') || {}).offsetHeight || 64; };

    qsa('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - headerH() - 16,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      });
    });
  }

  // ================================================================
  //  Price toggle (assinatura / definitiva)
  // ================================================================

  function initPriceToggle() {
    var btnSub = qs('#toggleSub');
    var btnDef = qs('#toggleDef');
    if (!btnSub || !btnDef) return;

    var subEls = qsa('.plan-card__price-sub');
    var defEls = qsa('.plan-card__price-def');

    function activate(showSub) {
      btnSub.setAttribute('aria-pressed', String(showSub));
      btnSub.classList.toggle('active', showSub);
      btnDef.setAttribute('aria-pressed', String(!showSub));
      btnDef.classList.toggle('active', !showSub);
      subEls.forEach(function (el) { el.classList.toggle('hidden', !showSub); });
      defEls.forEach(function (el) { el.classList.toggle('hidden', showSub); });
    }

    btnSub.addEventListener('click', function () { activate(true); });
    btnDef.addEventListener('click', function () { activate(false); });

    activate(true); // assinatura como padrão
  }

  // ================================================================
  //  Quiz
  // ================================================================

  var quizAnswers  = {};       // { stepNum: [ess, pro, adv] }
  var quizResultPlan = null;  // 'essencial' | 'profissional' | 'avancado'
  var PLAN_KEYS = ['essencial', 'profissional', 'avancado'];

  function renderQuizResult() {
    if (!quizResultPlan) return;
    var nameEl = qs('#quiz-result-plan');
    if (!nameEl) return;
    var lang  = getLang();
    var names = PLAN_NAMES[lang] || PLAN_NAMES['pt-BR'];
    nameEl.textContent = names[quizResultPlan];
  }

  function updateProgressBar(activeStep) {
    // activeStep: 1–4 = question step, 5 = result
    qsa('.quiz__progress-step').forEach(function (el, i) {
      var sNum = i + 1;
      el.classList.toggle('done',   sNum < activeStep);
      el.classList.toggle('active', sNum === activeStep);
    });
  }

  function gotoStep(num) {
    qsa('.quiz__step').forEach(function (el) { el.classList.remove('active'); });
    var target = qs('#quiz-step-' + num);
    if (target) {
      target.classList.add('active');
      target.focus();
    }
    updateProgressBar(num);
  }

  function computeAndShowResult() {
    var totals = [0, 0, 0];
    Object.values(quizAnswers).forEach(function (scores) {
      scores.forEach(function (s, i) { totals[i] += s; });
    });

    // Highest total wins; tie goes to the higher plan (later index)
    var winner = 0;
    totals.forEach(function (score, i) {
      if (score >= totals[winner]) winner = i;
    });
    quizResultPlan = PLAN_KEYS[winner];

    qsa('.quiz__step').forEach(function (el) { el.classList.remove('active'); });
    var resultEl = qs('#quiz-result');
    if (resultEl) {
      resultEl.classList.add('visible');
      resultEl.focus();
    }
    updateProgressBar(5);
    renderQuizResult();
  }

  function resetQuiz() {
    quizAnswers    = {};
    quizResultPlan = null;

    var resultEl = qs('#quiz-result');
    if (resultEl) resultEl.classList.remove('visible');

    qsa('.quiz__option').forEach(function (b) {
      b.classList.remove('selected');
      b.removeAttribute('aria-pressed');
    });

    qsa('.quiz__btn--next').forEach(function (b) {
      b.disabled = true;
      b.setAttribute('aria-disabled', 'true');
    });

    gotoStep(1);
  }

  function initQuiz() {
    var widget = qs('#quiz-widget');
    if (!widget) return;

    widget.addEventListener('click', function (e) {
      // ---- Option selected ----
      var optBtn = e.target.closest('.quiz__option');
      if (optBtn) {
        var q      = Number(optBtn.dataset.q);
        var scores = optBtn.dataset.scores.split(',').map(Number);
        quizAnswers[q] = scores;

        // Highlight selection
        var group = optBtn.closest('.quiz__options');
        if (group) {
          qsa('.quiz__option', group).forEach(function (b) {
            b.classList.remove('selected');
            b.removeAttribute('aria-pressed');
          });
        }
        optBtn.classList.add('selected');
        optBtn.setAttribute('aria-pressed', 'true');

        // Enable the Next button inside this step
        var step = optBtn.closest('.quiz__step');
        if (step) {
          var nextBtn = qs('.quiz__btn--next', step);
          if (nextBtn) {
            nextBtn.disabled = false;
            nextBtn.setAttribute('aria-disabled', 'false');
          }
        }
        return;
      }

      // ---- Next button ----
      var nextBtn = e.target.closest('.quiz__btn--next');
      if (nextBtn && !nextBtn.disabled) {
        var dest = nextBtn.dataset.next;
        if (dest === 'result') computeAndShowResult();
        else gotoStep(Number(dest));
        return;
      }

      // ---- Back button ----
      var backBtn = e.target.closest('.quiz__btn--back');
      if (backBtn) {
        gotoStep(Number(backBtn.dataset.prev));
        return;
      }

      // ---- Result CTA (WhatsApp) ----
      var ctaEl = e.target.closest('#quiz-result-cta');
      if (ctaEl && quizResultPlan) {
        var lang  = getLang();
        var names = PLAN_NAMES[lang] || PLAN_NAMES['pt-BR'];
        var tmpl  = QUIZ_RESULT_MSG[lang] || QUIZ_RESULT_MSG['pt-BR'];
        var msg   = tmpl.replace('{plan}', names[quizResultPlan]);
        window.open(
          'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg),
          '_blank',
          'noopener,noreferrer'
        );
        return;
      }

      // ---- Restart button ----
      if (e.target.closest('#quiz-restart')) {
        resetQuiz();
      }
    });

    // Initial state
    gotoStep(1);
  }

  // ================================================================
  //  Plan card CTA buttons → WhatsApp
  // ================================================================

  function initPlanCtaButtons() {
    qsa('.plan-card__cta[data-plan]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        window.open(waUrl(btn.dataset.plan), '_blank', 'noopener,noreferrer');
      });
    });
  }

  // ================================================================
  //  Page meta (title + description) — overrides i18n defaults
  // ================================================================

  function updatePageMeta() {
    if (!window.copyECodeI18n || !window.copyECodeI18n.translations) return;
    var lang        = getLang();
    var t           = window.copyECodeI18n.translations[lang] || {};
    var titleEl     = qs('#pageTitle');
    var descEl      = qs('#metaDescription');
    var ogTitleEl   = qs('#ogTitle');
    var ogDescEl    = qs('#ogDescription');
    var twTitleEl   = qs('#twitterTitle');
    var twDescEl    = qs('#twitterDescription');
    var ogLocaleEl  = qs('#ogLocale');

    if (t.plansPageTitle && titleEl)           document.title = t.plansPageTitle;
    if (t.plansMetaDescription && descEl)      descEl.setAttribute('content', t.plansMetaDescription);
    if (t.plansOgTitle && ogTitleEl)           ogTitleEl.setAttribute('content', t.plansOgTitle);
    if (t.plansMetaDescription && ogDescEl)    ogDescEl.setAttribute('content', t.plansMetaDescription);
    if (t.plansOgTitle && twTitleEl)           twTitleEl.setAttribute('content', t.plansOgTitle);
    if (t.plansMetaDescription && twDescEl)    twDescEl.setAttribute('content', t.plansMetaDescription);
    if (ogLocaleEl) ogLocaleEl.setAttribute('content', lang === 'en' ? 'en_US' : 'pt_BR');
  }

  // ================================================================
  //  Boot
  // ================================================================

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initLanguageSync();
    initReveal();
    initHeader();
    initBackToTop();
    initFooterYear();
    initSmoothScroll();
    initPriceToggle();
    initQuiz();
    initPlanCtaButtons();
    updatePageMeta();
  });

})();
