/**
 * COPY CODE - Sistema de internacionalizacao (PT-BR / EN)
 * Objeto central de traducoes + aplicacao no DOM, meta tags e atributo lang.
 */

(function () {
  'use strict';

  const translations = {
    'pt-BR': {
      skipLink: 'Pular para o conteúdo',
      navHome: 'Início',
      navServices: 'Serviços',
      navProjects: 'Projetos',
      navProcess: 'Processo',
      navAbout: 'Sobre',
      navContact: 'Contato',
      navQuote: 'Solicitar orçamento',

      heroAvailability: 'Disponível para novos projetos',
      heroTitleLine1: 'Criamos experiências digitais',
      heroTitleLine2: 'que transformam ideias em negócios.',
      heroSubtitle: 'Sites institucionais, landing pages e sistemas web desenhados com precisão — da estratégia ao código.',
      heroCtaPrimary: 'Solicitar orçamento',
      heroCtaSecondary: 'Explorar projetos',
      heroSpec1Label: 'Especialidade',
      heroSpec1Value: 'Sites & sistemas web',
      heroSpec2Label: 'Atuação',
      heroSpec2Value: 'Projetos sob medida',
      heroScroll: 'Rolar',

      impactStatement: 'Estratégia, design e desenvolvimento trabalhando juntos.',
      impactText: 'Cada projeto da Copy E Code nasce de um processo claro: entender o negócio, definir a direção visual e construir uma solução rápida, responsiva e feita para durar.',

      servicesLabel: 'O que fazemos',
      servicesTitle: 'Serviços',
      servicesSubtitle: 'Soluções completas para presença digital, do conceito à publicação.',

      service1Title: 'Sites institucionais',
      service1Text: 'Sites completos que apresentam sua empresa com credibilidade, organização e identidade visual própria.',
      service1Item1: 'Arquitetura de páginas',
      service1Item2: 'Identidade visual aplicada',
      service1Item3: 'SEO técnico básico',

      service2Title: 'Landing pages',
      service2Text: 'Páginas focadas em conversão, ideais para campanhas, lançamentos e captura de leads.',
      service2Item1: 'Foco em uma única ação',
      service2Item2: 'Copy orientada à conversão',
      service2Item3: 'Integração com WhatsApp e formulários',

      service3Title: 'Sistemas web',
      service3Text: 'Painéis, ferramentas internas e plataformas web construídas sob medida para processos específicos.',
      service3Item1: 'Interfaces personalizadas',
      service3Item2: 'Fluxos sob medida',
      service3Item3: 'Estrutura preparada para evolução',

      service4Title: 'Redesign de interfaces',
      service4Text: 'Modernização de sites existentes, preservando conteúdo e funcionalidades com uma nova identidade visual.',
      service4Item1: 'Auditoria do site atual',
      service4Item2: 'Novo sistema visual',
      service4Item3: 'Migração sem perda de conteúdo',

      service5Title: 'Performance e SEO técnico',
      service5Text: 'Sites mais rápidos, leves e bem estruturados para mecanismos de busca.',
      service5Item1: 'Otimização de imagens e código',
      service5Item2: 'Metadados e dados estruturados',
      service5Item3: 'Boas práticas de Core Web Vitals',

      service6Title: 'Manutenção e evolução',
      service6Text: 'Acompanhamento contínuo, ajustes, novas seções e atualizações conforme seu negócio cresce.',
      service6Item1: 'Atualizações de conteúdo',
      service6Item2: 'Novas funcionalidades',
      service6Item3: 'Suporte direto',

      portfolioLabel: 'Conceitos visuais',
      portfolioTitle: 'Projetos',
      portfolioSubtitle: 'Exemplos de conceitos que demonstram nossa capacidade criativa — projetos fictícios para referência visual.',
      projectViewBtn: 'Ver conceito',

      project1Category: 'Restaurante',
      project1Title: 'Site para Pizzaria',
      project1Text: 'Cardápio digital, pedidos online e integração com delivery para uma pizzaria local.',

      project2Category: 'Beleza',
      project2Title: 'Landing page para Barbearia',
      project2Text: 'Página de conversão com agendamento, serviços e botão de WhatsApp.',

      project3Category: 'Criativo',
      project3Title: 'Portfólio para Designer',
      project3Text: 'Showcase minimalista para apresentar trabalhos e captar novos clientes.',

      project4Category: 'E-commerce',
      project4Title: 'Site para Loja de Roupas',
      project4Text: 'Vitrine digital com catálogo, filtros e contato direto para vendas.',

      project5Category: 'Jurídico',
      project5Title: 'Página para Advogado',
      project5Text: 'Site institucional com áreas de atuação, credibilidade e formulário de contato.',

      project6Category: 'Marketing',
      project6Title: 'Site para Agência de Marketing',
      project6Text: 'Presença digital impactante com cases, serviços e captura de leads.',

      processLabel: 'Como trabalhamos',
      processTitle: 'Processo de trabalho',
      processSubtitle: 'Um fluxo claro e transparente, do briefing à entrega do seu projeto.',
      process1Title: 'Descoberta',
      process1Text: 'Entendimento da empresa, do público, das necessidades e dos objetivos do projeto.',
      process2Title: 'Estratégia',
      process2Text: 'Definição da estrutura, dos conteúdos e da direção visual mais adequada.',
      process3Title: 'Design',
      process3Text: 'Construção da experiência e da interface, alinhada à identidade da marca.',
      process4Title: 'Desenvolvimento',
      process4Text: 'Transformação do design em uma solução rápida, responsiva e bem codificada.',
      process5Title: 'Testes',
      process5Text: 'Validação em diferentes telas, navegadores e dispositivos.',
      process6Title: 'Entrega e suporte',
      process6Text: 'Publicação do projeto, orientação de uso e acompanhamento contínuo.',

      aboutLabel: 'Quem somos',
      aboutTitle: 'Sobre a Copy E Code',
      aboutText1: 'A Copy E Code é uma empresa de tecnologia focada no desenvolvimento de sites profissionais, landing pages e sistemas web sob medida. Cada projeto é planejado do zero, combinando estratégia, design e código limpo.',
      aboutText2: 'Não entregamos apenas páginas. Construímos ferramentas digitais para empresas crescerem — com atenção a performance, identidade visual e experiência do usuário em cada detalhe.',
      aboutTag1: 'Web Design',
      aboutTag2: 'Desenvolvimento',
      aboutTag3: 'Performance',
      aboutTag4: 'UX/UI',
      diff1: 'Design personalizado',
      diff2: 'Código limpo',
      diff3: 'Alta performance',
      diff4: 'Responsividade completa',
      diff5: 'Comunicação transparente',
      diff6: 'Foco em conversão',

      faqLabel: 'Dúvidas',
      faqTitle: 'Perguntas frequentes',
      faq1Q: 'Quanto tempo demora para criar um site?',
      faq1A: 'O prazo varia conforme a complexidade do projeto. Um site simples pode ficar pronto em 1 a 2 semanas, enquanto projetos mais completos levam de 3 a 4 semanas. Definimos o cronograma no briefing inicial.',
      faq2Q: 'O site funciona no celular?',
      faq2A: 'Sim. Todos os nossos sites são 100% responsivos, adaptando-se perfeitamente a celulares, tablets e desktops para garantir a melhor experiência em qualquer dispositivo.',
      faq3Q: 'Vocês fazem sistemas web?',
      faq3A: 'Sim. Desenvolvemos sistemas e painéis sob medida, com interfaces personalizadas para processos específicos do seu negócio.',
      faq4Q: 'Posso pedir alterações?',
      faq4A: 'Claro. Incluímos rodadas de revisão em cada projeto para que você possa solicitar ajustes até ficar satisfeito com o resultado final.',
      faq5Q: 'Vocês ajudam com hospedagem?',
      faq5A: 'Sim. Orientamos na escolha da melhor hospedagem para o seu projeto e podemos cuidar de toda a configuração e publicação do site.',
      faq6Q: 'O site pode ter botão de WhatsApp?',
      faq6A: 'Sim. Integramos botões de WhatsApp, formulários de contato, links para redes sociais e outras funcionalidades para facilitar o contato com seus clientes.',

      ctaAvailability: 'Disponível para novos projetos',
      ctaTitle: 'Tem uma ideia? Vamos transformá-la em uma experiência digital.',
      ctaText: 'Conte um pouco sobre seu projeto e receba uma proposta personalizada.',
      ctaButton: 'Solicitar orçamento',
      ctaWhatsapp: 'Falar no WhatsApp',

      contactLabel: 'Fale conosco',
      contactTitle: 'Contato',
      contactText: 'Preencha o formulário ou entre em contato diretamente. Respondemos o mais rápido possível.',
      formName: 'Nome',
      formEmail: 'E-mail',
      formWhatsapp: 'WhatsApp',
      formCompany: 'Empresa',
      formType: 'Tipo de projeto',
      formTypeSelect: 'Selecione uma opção',
      formType1: 'Site institucional',
      formType2: 'Landing page',
      formType3: 'Sistema web',
      formType4: 'Redesign',
      formType5: 'Manutenção',
      formType6: 'Outro',
      formBudget: 'Faixa de orçamento',
      formBudgetSelect: 'Selecione uma opção',
      formBudget1: 'Até R$ 2.000',
      formBudget2: 'R$ 2.000 – R$ 5.000',
      formBudget3: 'R$ 5.000 – R$ 10.000',
      formBudget4: 'Acima de R$ 10.000',
      formBudget5: 'A definir',
      formMessage: 'Mensagem',
      formSubmit: 'Enviar mensagem',
      formSending: 'Enviando...',
      formSuccess: 'Tudo certo! Vamos abrir o WhatsApp para você concluir o envio.',
      formErrorGeneral: 'Verifique os campos destacados antes de enviar.',
      formErrorName: 'Informe seu nome.',
      formErrorEmail: 'Informe um e-mail válido.',
      formErrorWhatsapp: 'Informe um número válido.',
      formErrorType: 'Selecione um tipo de projeto.',
      formErrorMessage: 'Conte um pouco mais sobre o seu projeto (mín. 10 caracteres).',

      footerDesc: 'Empresa de tecnologia especializada em sites profissionais, landing pages, sistemas web e redesign de interfaces.',
      footerNavTitle: 'Navegação',
      footerServicesTitle: 'Serviços',
      footerContactTitle: 'Contato',
      footerBackToTop: 'Voltar ao topo',
      footerRights: '© <span id="footerYear"></span> Copy E Code. Todos os direitos reservados.',

      modalBadge: 'Conceito visual',
      modalDemoBtn: 'Ver projeto demonstrativo',
      modalDemoSoon: 'Demonstração em breve',
      modalCta: 'Solicitar orçamento',

      waGreeting: 'Olá! Gostaria de solicitar um orçamento.',
      waName: '*Nome:*',
      waEmail: '*E-mail:*',
      waPhone: '*WhatsApp:*',
      waCompany: '*Empresa:*',
      waProjectType: '*Tipo de projeto:*',
      waBudget: '*Faixa de orçamento:*',
      waMessage: '*Mensagem:*',

      metaDescription: 'Copy E Code — Desenvolvimento de sites profissionais, landing pages, sistemas web e redesign de interfaces com identidade própria, performance e design editorial.',
      ogTitle: 'Copy E Code — Sites, sistemas e interfaces sob medida',
      ogDescription: 'Estratégia, design e desenvolvimento trabalhando juntos para transformar ideias em negócios digitais.',
      pageTitle: 'COPY CODE'
    },

    en: {
      skipLink: 'Skip to content',
      navHome: 'Home',
      navServices: 'Services',
      navProjects: 'Projects',
      navProcess: 'Process',
      navAbout: 'About',
      navContact: 'Contact',
      navQuote: 'Request a quote',

      heroAvailability: 'Available for new projects',
      heroTitleLine1: 'We create digital experiences',
      heroTitleLine2: 'that turn ideas into businesses.',
      heroSubtitle: 'Business websites, landing pages and web systems designed with precision — from strategy to code.',
      heroCtaPrimary: 'Request a quote',
      heroCtaSecondary: 'Explore projects',
      heroSpec1Label: 'Specialty',
      heroSpec1Value: 'Websites & web systems',
      heroSpec2Label: 'Approach',
      heroSpec2Value: 'Custom-built projects',
      heroScroll: 'Scroll',

      impactStatement: 'Strategy, design and development working together.',
      impactText: 'Every Copy E Code project starts with a clear process: understanding the business, defining the visual direction, and building a fast, responsive solution made to last.',

      servicesLabel: 'What we do',
      servicesTitle: 'Services',
      servicesSubtitle: 'Complete solutions for your digital presence, from concept to launch.',

      service1Title: 'Business websites',
      service1Text: 'Complete websites that present your company with credibility, structure and a visual identity of its own.',
      service1Item1: 'Page architecture',
      service1Item2: 'Applied visual identity',
      service1Item3: 'Basic technical SEO',

      service2Title: 'Landing pages',
      service2Text: 'Conversion-focused pages, ideal for campaigns, launches and lead capture.',
      service2Item1: 'Focused on a single action',
      service2Item2: 'Conversion-driven copy',
      service2Item3: 'WhatsApp and form integration',

      service3Title: 'Web systems',
      service3Text: 'Dashboards, internal tools and web platforms built to fit specific processes.',
      service3Item1: 'Custom interfaces',
      service3Item2: 'Tailored workflows',
      service3Item3: 'Structure ready to evolve',

      service4Title: 'Interface redesign',
      service4Text: 'Modernizing existing websites while preserving content and features under a new visual identity.',
      service4Item1: 'Audit of the current site',
      service4Item2: 'New visual system',
      service4Item3: 'Migration with no content loss',

      service5Title: 'Performance & technical SEO',
      service5Text: 'Faster, lighter websites, well structured for search engines.',
      service5Item1: 'Image and code optimization',
      service5Item2: 'Metadata and structured data',
      service5Item3: 'Core Web Vitals best practices',

      service6Title: 'Maintenance & evolution',
      service6Text: 'Ongoing support, adjustments, new sections and updates as your business grows.',
      service6Item1: 'Content updates',
      service6Item2: 'New features',
      service6Item3: 'Direct support',

      portfolioLabel: 'Visual concepts',
      portfolioTitle: 'Projects',
      portfolioSubtitle: 'Concept examples that demonstrate our creative capability — fictional projects for visual reference.',
      projectViewBtn: 'View concept',

      project1Category: 'Restaurant',
      project1Title: 'Pizzeria Website',
      project1Text: 'Digital menu, online ordering and delivery integration for a local pizzeria.',

      project2Category: 'Beauty',
      project2Title: 'Barbershop Landing Page',
      project2Text: 'Conversion page with booking, services and WhatsApp button.',

      project3Category: 'Creative',
      project3Title: 'Designer Portfolio',
      project3Text: 'Minimalist showcase to present work and attract new clients.',

      project4Category: 'E-commerce',
      project4Title: 'Clothing Store Website',
      project4Text: 'Digital storefront with catalog, filters and direct sales contact.',

      project5Category: 'Legal',
      project5Title: 'Lawyer Landing Page',
      project5Text: 'Business website with practice areas, credibility and contact form.',

      project6Category: 'Marketing',
      project6Title: 'Marketing Agency Website',
      project6Text: 'Impactful digital presence with case studies, services and lead capture.',

      processLabel: 'How we work',
      processTitle: 'Work Process',
      processSubtitle: 'A clear and transparent flow, from briefing to project delivery.',
      process1Title: 'Discovery',
      process1Text: 'Understanding the company, its audience, needs and project goals.',
      process2Title: 'Strategy',
      process2Text: 'Defining the structure, content and the right visual direction.',
      process3Title: 'Design',
      process3Text: 'Building the experience and interface, aligned with the brand identity.',
      process4Title: 'Development',
      process4Text: 'Turning the design into a fast, responsive, well-built solution.',
      process5Title: 'Testing',
      process5Text: 'Validation across different screens, browsers and devices.',
      process6Title: 'Delivery & support',
      process6Text: 'Launching the project, usage guidance and ongoing support.',

      aboutLabel: 'Who we are',
      aboutTitle: 'About Copy E Code',
      aboutText1: 'Copy E Code is a technology company focused on building professional websites, landing pages and custom web systems. Every project is planned from scratch, combining strategy, design and clean code.',
      aboutText2: "We don't just deliver pages. We build digital tools for businesses to grow — with attention to performance, visual identity and user experience in every detail.",
      aboutTag1: 'Web Design',
      aboutTag2: 'Development',
      aboutTag3: 'Performance',
      aboutTag4: 'UX/UI',
      diff1: 'Custom design',
      diff2: 'Clean code',
      diff3: 'High performance',
      diff4: 'Full responsiveness',
      diff5: 'Transparent communication',
      diff6: 'Conversion-focused',

      faqLabel: 'Questions',
      faqTitle: 'Frequently Asked Questions',
      faq1Q: 'How long does it take to build a website?',
      faq1A: 'It depends on the complexity of the project. A simple site can be ready in 1 to 2 weeks, while more complete projects take 3 to 4 weeks. We set the timeline during the initial briefing.',
      faq2Q: 'Does the site work on mobile?',
      faq2A: 'Yes. All our websites are 100% responsive, adapting perfectly to phones, tablets and desktops for the best experience on any device.',
      faq3Q: 'Do you build web systems?',
      faq3A: 'Yes. We develop custom systems and dashboards, with interfaces tailored to your specific business processes.',
      faq4Q: 'Can I request changes?',
      faq4A: "Of course. We include review rounds in every project so you can request adjustments until you're satisfied with the final result.",
      faq5Q: 'Do you help with hosting?',
      faq5A: 'Yes. We help you choose the best hosting for your project and can take care of the full setup and publishing process.',
      faq6Q: 'Can the site have a WhatsApp button?',
      faq6A: 'Yes. We integrate WhatsApp buttons, contact forms, social media links and other features to make it easier for your customers to reach you.',

      ctaAvailability: 'Available for new projects',
      ctaTitle: "Have an idea? Let's turn it into a digital experience.",
      ctaText: 'Tell us a bit about your project and get a personalized proposal.',
      ctaButton: 'Request a quote',
      ctaWhatsapp: 'Chat on WhatsApp',

      contactLabel: 'Get in touch',
      contactTitle: 'Contact',
      contactText: "Fill out the form or reach out directly. We'll get back to you as soon as possible.",
      formName: 'Name',
      formEmail: 'Email',
      formWhatsapp: 'WhatsApp',
      formCompany: 'Company',
      formType: 'Project type',
      formTypeSelect: 'Select an option',
      formType1: 'Business website',
      formType2: 'Landing page',
      formType3: 'Web system',
      formType4: 'Redesign',
      formType5: 'Maintenance',
      formType6: 'Other',
      formBudget: 'Budget range',
      formBudgetSelect: 'Select an option',
      formBudget1: 'Up to $400',
      formBudget2: '$400 – $1,000',
      formBudget3: '$1,000 – $2,000',
      formBudget4: 'Above $2,000',
      formBudget5: 'To be defined',
      formMessage: 'Message',
      formSubmit: 'Send message',
      formSending: 'Sending...',
      formSuccess: "All set! We'll open WhatsApp so you can finish sending it.",
      formErrorGeneral: 'Please check the highlighted fields before submitting.',
      formErrorName: 'Please enter your name.',
      formErrorEmail: 'Please enter a valid email.',
      formErrorWhatsapp: 'Please enter a valid number.',
      formErrorType: 'Please select a project type.',
      formErrorMessage: 'Tell us a bit more about your project (min. 10 characters).',

      footerDesc: 'A technology company specialized in business websites, landing pages, web systems and interface redesign.',
      footerNavTitle: 'Navigation',
      footerServicesTitle: 'Services',
      footerContactTitle: 'Contact',
      footerBackToTop: 'Back to top',
      footerRights: '© <span id="footerYear"></span> Copy E Code. All rights reserved.',

      modalBadge: 'Visual concept',
      modalDemoBtn: 'View live demo',
      modalDemoSoon: 'Demo coming soon',
      modalCta: 'Request a quote',

      waGreeting: 'Hello! I would like to request a quote.',
      waName: '*Name:*',
      waEmail: '*Email:*',
      waPhone: '*WhatsApp:*',
      waCompany: '*Company:*',
      waProjectType: '*Project type:*',
      waBudget: '*Budget range:*',
      waMessage: '*Message:*',

      metaDescription: 'Copy E Code — Professional website development, landing pages, web systems and interface redesign with a distinctive identity, performance and editorial design.',
      ogTitle: 'Copy E Code — Custom websites, systems and interfaces',
      ogDescription: 'Strategy, design and development working together to turn ideas into digital businesses.',
      pageTitle: 'COPY CODE'
    }
  };

  const STORAGE_KEY = 'copyecode-lang';

  function detectInitialLang() {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'pt-BR' || stored === 'en') return stored;
    } catch (e) {
      /* localStorage indisponivel */
    }

    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return browserLang.startsWith('pt') ? 'pt-BR' : 'en';
  }

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (value === undefined) return;

      if (key === 'footerRights') {
        const yearSpan = el.querySelector('#footerYear');
        const year = yearSpan ? yearSpan.textContent : String(new Date().getFullYear());
        el.innerHTML = value.replace('<span id="footerYear"></span>', '<span id="footerYear">' + year + '</span>');
        return;
      }

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', value);
      } else {
        el.textContent = value;
      }
    });

    const titleEl = document.getElementById('pageTitle');
    if (titleEl) titleEl.textContent = dict.pageTitle;

    const metaDesc = document.getElementById('metaDescription');
    if (metaDesc) metaDesc.setAttribute('content', dict.metaDescription);

    const ogTitle = document.getElementById('ogTitle');
    if (ogTitle) ogTitle.setAttribute('content', dict.ogTitle);

    const ogDesc = document.getElementById('ogDescription');
    if (ogDesc) ogDesc.setAttribute('content', dict.ogDescription);

    const ogLocale = document.getElementById('ogLocale');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'pt-BR' ? 'pt_BR' : 'en_US');

    const twitterTitle = document.getElementById('twitterTitle');
    if (twitterTitle) twitterTitle.setAttribute('content', dict.ogTitle);

    const twitterDesc = document.getElementById('twitterDescription');
    if (twitterDesc) twitterDesc.setAttribute('content', dict.ogDescription);

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.setAttribute('aria-pressed', String(isActive));
    });

    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
      const isOpen = menuBtn.classList.contains('active');
      menuBtn.setAttribute('aria-label', isOpen
        ? (lang === 'pt-BR' ? 'Fechar menu' : 'Close menu')
        : (lang === 'pt-BR' ? 'Abrir menu' : 'Open menu'));
    }

    document.documentElement.setAttribute('data-lang-ready', 'true');
  }

  function setLang(lang) {
    if (lang !== 'pt-BR' && lang !== 'en') lang = 'en';

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage indisponivel */
    }

    applyTranslations(lang);
  }

  window.copyECodeI18n = {
    translations: translations,
    setLang: setLang,
    getLang: function () {
      try {
        return window.localStorage.getItem(STORAGE_KEY) || detectInitialLang();
      } catch (e) {
        return detectInitialLang();
      }
    }
  };

  applyTranslations(detectInitialLang());
})();
