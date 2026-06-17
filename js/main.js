/**
 * COPY E CODE - JavaScript principal
 * Interacoes: menu mobile, scroll reveal, header dinamico, seletor de idioma,
 * modal de portfolio, formulario de contato, voltar ao topo e navegacao ativa.
 */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '554197063216';

  const PROJECTS = {
    pizzaria: {
      category: { pt: 'Restaurante', en: 'Restaurant' },
      title: { pt: 'Site para Pizzaria', en: 'Pizzeria Website' },
      description: {
        pt: 'Cardápio digital, pedidos online e integração com delivery para uma pizzaria local.',
        en: 'Digital menu, online ordering and delivery integration for a local pizzeria.'
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://astonishing-jalebi-d4e88a.netlify.app',
      imageUrl: 'assets/projeto-pizzaria.webp'
    },
    barbearia: {
      category: { pt: 'Beleza', en: 'Beauty' },
      title: { pt: 'Landing page para Barbearia', en: 'Barbershop Landing Page' },
      description: {
        pt: 'Página de conversão com agendamento, serviços e botão de WhatsApp.',
        en: 'Conversion page with booking, services and WhatsApp button.'
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://astonishing-jalebi-d4e88a.netlify.app',
      imageUrl: ''
    },
    designer: {
      category: { pt: 'Criativo', en: 'Creative' },
      title: { pt: 'Portfólio para Designer', en: 'Designer Portfolio' },
      description: {
        pt: 'Showcase minimalista para apresentar trabalhos e captar novos clientes.',
        en: 'Minimalist showcase to present work and attract new clients.'
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '',
      imageUrl: ''
    },
    loja: {
      category: { pt: 'E-commerce', en: 'E-commerce' },
      title: { pt: 'Site para Loja de Roupas', en: 'Clothing Store Website' },
      description: {
        pt: 'Vitrine digital com catálogo, filtros e contato direto para vendas.',
        en: 'Digital storefront with catalog, filters and direct sales contact.'
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '',
      imageUrl: ''
    },
    advogado: {
      category: { pt: 'Jurídico', en: 'Legal' },
      title: { pt: 'Página para Advogado', en: 'Lawyer Landing Page' },
      description: {
        pt: 'Site institucional com áreas de atuação, credibilidade e formulário de contato.',
        en: 'Business website with practice areas, credibility and contact form.'
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '',
      imageUrl: 'assets/projeto-advogado.webp'
    },
    marketing: {
      category: { pt: 'Marketing', en: 'Marketing' },
      title: { pt: 'Site para Agência de Marketing', en: 'Marketing Agency Website' },
      description: {
        pt: 'Presença digital impactante com cases, serviços e captura de leads.',
        en: 'Impactful digital presence with case studies, services and lead capture.'
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '',
      imageUrl: ''
    }
  };

  const body = document.body;
  const header = document.getElementById('header');
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  const navLinks = Array.from(document.querySelectorAll('.header__link'));
  const revealElements = Array.from(document.querySelectorAll('.reveal'));
  const conceptModal = document.getElementById('conceptModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalCta = document.getElementById('modalCta');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const portfolioBtns = Array.from(document.querySelectorAll('.portfolio-card__btn'));
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const langButtons = Array.from(document.querySelectorAll('[data-lang]'));
  const backToTopBtn = document.getElementById('backToTop');
  const footerYearEls = Array.from(document.querySelectorAll('#footerYear'));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const lightSections = ['servicos', 'processo', 'planos', 'faq']
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  let lastFocusedElement = null;
  let currentProjectId = null;
  const pageLocks = new Set();

  function getDict() {
    if (!window.copyECodeI18n) return {};
    const lang = window.copyECodeI18n.getLang();
    return window.copyECodeI18n.translations[lang] || window.copyECodeI18n.translations.en;
  }

  function setBodyLocked(lockName, isLocked) {
    if (isLocked) {
      pageLocks.add(lockName);
    } else {
      pageLocks.delete(lockName);
    }

    body.classList.toggle('is-locked', pageLocks.size > 0);
  }

  function setMenuState(isOpen) {
    if (!menuBtn || !nav) return;

    const lang = window.copyECodeI18n ? window.copyECodeI18n.getLang() : 'pt-BR';
    const isPt = lang === 'pt-BR';
    menuBtn.classList.toggle('active', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen
      ? (isPt ? 'Fechar menu' : 'Close menu')
      : (isPt ? 'Abrir menu' : 'Open menu'));
    nav.classList.toggle('open', isOpen);
    setBodyLocked('menu', isOpen);
  }

  function toggleMenu() {
    setMenuState(!nav.classList.contains('open'));
  }

  function closeMenu() {
    setMenuState(false);
  }

  function updateHeader() {
    if (!header) return;

    const isLight = lightSections.some(function (section) {
      const rect = section.getBoundingClientRect();
      return rect.top <= 80 && rect.bottom >= 80;
    });

    header.classList.toggle('header--light', window.scrollY >= 100 && isLight);
  }

  function updateActiveNav() {
    let current = '';

    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    navLinks.forEach(function (link) {
      const isActive = link.getAttribute('href') === '#' + current;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function initReveal() {
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window) || prefersReducedMotion.matches) {
      revealElements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function renderModal(project) {
    if (!project) return;

    const lang = window.copyECodeI18n ? window.copyECodeI18n.getLang() : 'pt-BR';
    const isPt = lang === 'pt-BR';
    const l = isPt ? 'pt' : 'en';

    const catEl = document.getElementById('modalCategory');
    if (catEl) catEl.textContent = project.category[l];

    const titleText = project.title[l];
    if (modalTitle) modalTitle.textContent = titleText;

    const descEl = document.getElementById('modalDesc');
    if (descEl) descEl.textContent = project.description[l];

    const techEl = document.getElementById('modalTech');
    if (techEl) {
      if (project.technologies && project.technologies.length) {
        techEl.innerHTML = project.technologies.map(function (t) {
          return '<span>' + t + '</span>';
        }).join('');
        techEl.removeAttribute('hidden');
      } else {
        techEl.setAttribute('hidden', '');
      }
    }

    const demoBtn = document.getElementById('modalDemoBtn');
    const demoSoon = document.getElementById('modalDemoSoon');

    if (project.demoUrl) {
      if (demoBtn) {
        demoBtn.href = project.demoUrl;
        demoBtn.setAttribute('aria-label',
          isPt
            ? ('Abrir demonstração: ' + titleText)
            : ('Open live demo: ' + titleText)
        );
        demoBtn.removeAttribute('hidden');
      }
      if (demoSoon) demoSoon.setAttribute('hidden', '');
    } else {
      if (demoBtn) demoBtn.setAttribute('hidden', '');
      if (demoSoon) demoSoon.removeAttribute('hidden');
    }

    if (modalClose) {
      modalClose.setAttribute('aria-label', isPt ? 'Fechar' : 'Close');
    }

    const imgWrap = document.getElementById('modalImageWrap');
    const imgEl = document.getElementById('modalImage');
    if (imgWrap && imgEl) {
      if (project.imageUrl) {
        imgEl.src = project.imageUrl;
        imgEl.alt = titleText;
        imgWrap.removeAttribute('hidden');
      } else {
        imgWrap.setAttribute('hidden', '');
        imgEl.src = '';
        imgEl.alt = '';
      }
    }
  }

  function updateCardImageAlts() {
    const lang = window.copyECodeI18n ? window.copyECodeI18n.getLang() : 'pt-BR';
    const l = lang === 'pt-BR' ? 'pt' : 'en';
    document.querySelectorAll('.portfolio-card__image[data-project-id]').forEach(function (img) {
      const project = PROJECTS[img.dataset.projectId];
      if (project) img.alt = project.title[l];
    });
  }

  function initCardImages() {
    const lang = window.copyECodeI18n ? window.copyECodeI18n.getLang() : 'pt-BR';
    const l = lang === 'pt-BR' ? 'pt' : 'en';

    document.querySelectorAll('.portfolio-card__btn[data-project]').forEach(function (btn) {
      const projectId = btn.dataset.project;
      const project = PROJECTS[projectId];
      if (!project || !project.imageUrl) return;

      const card = btn.closest('.portfolio-card');
      if (!card) return;
      const preview = card.querySelector('.portfolio-card__preview');
      if (!preview) return;

      const img = document.createElement('img');
      img.className = 'portfolio-card__image';
      img.dataset.projectId = projectId;
      img.alt = project.title[l];
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = project.imageUrl;

      img.addEventListener('error', function () {
        img.remove();
        preview.classList.remove('has-image');
      });

      preview.classList.add('has-image');
      preview.insertBefore(img, preview.firstChild);
    });
  }

  function openModal(projectId) {
    if (!conceptModal) return;

    const project = PROJECTS[projectId];
    if (!project) return;

    lastFocusedElement = document.activeElement;
    currentProjectId = projectId;

    renderModal(project);

    conceptModal.classList.add('active');
    conceptModal.setAttribute('aria-hidden', 'false');
    setBodyLocked('modal', true);

    requestAnimationFrame(function () {
      if (modalClose) modalClose.focus();
    });
  }

  function closeModal() {
    if (!conceptModal) return;

    conceptModal.classList.remove('active');
    conceptModal.setAttribute('aria-hidden', 'true');
    setBodyLocked('modal', false);

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function getFocusableElements(container) {
    return Array.from(
      container.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) {
      return !el.closest('[hidden]');
    });
  }

  function trapModalFocus(event) {
    if (!conceptModal || !conceptModal.classList.contains('active') || event.key !== 'Tab') return;

    const focusable = getFocusableElements(conceptModal);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function buildWhatsAppUrl(message) {
    const params = new URLSearchParams({ text: message });
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?' + params.toString();
  }

  function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);

    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return '(' + digits.slice(0, 2) + ') ' + digits.slice(2);
    if (digits.length <= 10) {
      return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 6) + '-' + digits.slice(6);
    }
    return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 7) + '-' + digits.slice(7);
  }

  function setFieldError(field, hasError) {
    const group = field.closest('.form-group');
    if (!group) return;
    group.classList.toggle('has-error', hasError);
  }

  function validateForm() {
    if (!contactForm) return true;

    let isValid = true;
    const requiredFields = contactForm.querySelectorAll('[required]');

    requiredFields.forEach(function (field) {
      const valid = field.checkValidity();
      setFieldError(field, !valid);
      if (!valid) isValid = false;
    });

    return isValid;
  }

  function initContactForm() {
    if (!contactForm) return;

    const phoneInput = contactForm.querySelector('#whatsapp');

    if (phoneInput) {
      phoneInput.addEventListener('input', function () {
        phoneInput.value = formatPhone(phoneInput.value);
      });
    }

    Array.from(contactForm.querySelectorAll('[required]')).forEach(function (field) {
      field.addEventListener('blur', function () {
        setFieldError(field, !field.checkValidity());
      });
      field.addEventListener('input', function () {
        if (field.checkValidity()) setFieldError(field, false);
      });
      field.addEventListener('change', function () {
        if (field.checkValidity()) setFieldError(field, false);
      });
    });

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const dict = getDict();

      if (!validateForm()) {
        if (formStatus) {
          formStatus.textContent = dict.formErrorGeneral || '';
          formStatus.classList.remove('form-status--success');
          formStatus.classList.add('form-status--error');
        }
        const firstError = contactForm.querySelector('.has-error input, .has-error select, .has-error textarea');
        if (firstError) firstError.focus();
        return;
      }

      const submitBtn = document.getElementById('formSubmit');
      const submitLabel = submitBtn ? submitBtn.querySelector('.btn-label') : null;
      if (submitBtn) submitBtn.classList.add('is-sending');
      if (submitLabel) submitLabel.textContent = dict.formSending || '...';

      const formData = new FormData(contactForm);
      const projectSelect = contactForm.querySelector('#tipo');
      const projectType = projectSelect && projectSelect.selectedIndex >= 0
        ? projectSelect.options[projectSelect.selectedIndex].text
        : formData.get('tipo');

      const budgetSelect = contactForm.querySelector('#orcamento');
      const budgetLabel = budgetSelect && budgetSelect.selectedIndex >= 0
        ? budgetSelect.options[budgetSelect.selectedIndex].text
        : '';

      const lines = [
        dict.waGreeting || 'Olá! Gostaria de solicitar um orçamento.',
        '',
        (dict.waName || '*Nome:*') + ' ' + String(formData.get('nome')).trim(),
        (dict.waEmail || '*E-mail:*') + ' ' + String(formData.get('email')).trim(),
        (dict.waPhone || '*WhatsApp:*') + ' ' + String(formData.get('whatsapp')).trim()
      ];

      const empresa = String(formData.get('empresa') || '').trim();
      if (empresa) lines.push((dict.waCompany || '*Empresa:*') + ' ' + empresa);

      lines.push((dict.waProjectType || '*Tipo de projeto:*') + ' ' + projectType);

      if (budgetLabel && budgetSelect.value) {
        lines.push((dict.waBudget || '*Faixa de orçamento:*') + ' ' + budgetLabel);
      }

      lines.push((dict.waMessage || '*Mensagem:*') + ' ' + String(formData.get('mensagem')).trim());

      const message = lines.join('\n');

      window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');

      if (formStatus) {
        formStatus.textContent = dict.formSuccess || '';
        formStatus.classList.remove('form-status--error');
        formStatus.classList.add('form-status--success');
      }

      if (submitBtn) submitBtn.classList.remove('is-sending');
      if (submitLabel) submitLabel.textContent = dict.formSubmit || 'Enviar';

      contactForm.reset();
      Array.from(contactForm.querySelectorAll('.has-error')).forEach(function (group) {
        group.classList.remove('has-error');
      });
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (event) {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        closeMenu();
        target.scrollIntoView({
          behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
          block: 'start'
        });
      });
    });
  }

  function initLanguageSwitcher() {
    if (!langButtons.length || !window.copyECodeI18n) return;

    langButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = btn.getAttribute('data-lang');
        window.copyECodeI18n.setLang(lang);
        if (currentProjectId && conceptModal && conceptModal.classList.contains('active')) {
          renderModal(PROJECTS[currentProjectId]);
        }
        updateCardImageAlts();
      });
    });
  }

  function initBackToTop() {
    if (!backToTopBtn) return;

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
      });
    });
  }

  function initFooterYear() {
    const year = String(new Date().getFullYear());
    footerYearEls.forEach(function (el) {
      el.textContent = year;
    });
  }

  function initEvents() {
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', toggleMenu);
      setMenuState(false);
    }

    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    portfolioBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        openModal(btn.dataset.project);
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    if (modalCta) {
      modalCta.addEventListener('click', closeModal);
    }

    if (conceptModal) {
      const overlay = conceptModal.querySelector('.modal__overlay');
      if (overlay) overlay.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        if (conceptModal && conceptModal.classList.contains('active')) {
          closeModal();
        } else if (nav && nav.classList.contains('open')) {
          closeMenu();
          if (menuBtn) menuBtn.focus();
        }
      }
      trapModalFocus(event);
    });
  }

  function initScrollHandlers() {
    let ticking = false;

    window.addEventListener('scroll', function () {
      if (ticking) return;

      window.requestAnimationFrame(function () {
        updateHeader();
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }, { passive: true });
  }

  initEvents();
  initReveal();
  initContactForm();
  initSmoothScroll();
  initScrollHandlers();
  initLanguageSwitcher();
  initBackToTop();
  initFooterYear();
  initCardImages();
  updateHeader();
  updateActiveNav();
})();
