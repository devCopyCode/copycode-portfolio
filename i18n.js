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
      navPlans: 'Planos',
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
      pageTitle: 'COPY CODE',

      plansHeroLabel: 'PLANOS COPY E CODE',
      plansHeroTitle: 'Um site profissional para cada etapa do seu negócio.',
      plansHeroSubtitle: 'Escolha entre uma solução essencial, uma presença digital completa ou um sistema desenvolvido sob medida. Todos os planos incluem desempenho, segurança e suporte contínuo.',
      plansHeroCtaCompare: 'Comparar planos',
      plansHeroCtaQuote: 'Solicitar orçamento',
      plansFeature1: 'Design responsivo',
      plansFeature2: 'Domínio incluído',
      plansFeature3: 'Hospedagem gerenciada',
      plansFeature4: 'Suporte técnico',

      plansToggleSub: 'Plano por assinatura',
      plansToggleDef: 'Compra definitiva',

      planEssName: 'Site Essencial',
      planProName: 'Site Profissional',
      planAdvName: 'Site Avançado',
      planPopularBadge: 'Mais escolhido',
      planPublicEss: 'Profissionais autônomos, pequenos negócios, barbearias, restaurantes e empresas que precisam iniciar sua presença digital.',
      planPublicPro: 'Empresas que precisam de um site mais completo, com várias páginas, melhor apresentação e recursos personalizados.',
      planPublicAdv: 'Empresas que precisam de sistemas personalizados, automações, área de clientes ou integrações avançadas.',

      planEssSubPrice: 'R$ 249',
      planProSubPrice: 'R$ 449',
      planAdvSubPrice: 'A partir de R$ 799',
      planSubPeriod: '/mês',
      planSubNote: 'Inclui site, hospedagem, domínio, manutenção e suporte.',
      planMinStay: 'Permanência mínima de 12 meses.',
      planAdvMinStay: 'Permanência mínima definida em contrato.',

      planEssDefPrice: 'R$ 1.100',
      planProDefPrice: 'R$ 2.500',
      planAdvDefPrice: 'A partir de R$ 5.000',
      planDefNote: 'Hospedagem, domínio e manutenção incluídos nos primeiros 12 meses.',
      planAdvDefNote: 'Período de hospedagem e suporte definido na proposta comercial.',
      planDefOneTime: 'pagamento único',

      planCta: 'Solicitar orçamento',
      planViewFeatures: 'Ver todos os recursos',

      planEssFeat1: 'Site moderno e responsivo',
      planEssFeat2: 'Página única com até 5 seções',
      planEssFeat3: 'Apresentação, serviços e contato',
      planEssFeat4: 'Botão direto para WhatsApp',
      planEssFeat5: 'Formulário de contato e Google Maps',
      planEssFeat6: 'SEO básico e certificado SSL',
      planEssFeat7: 'Hospedagem, domínio e backups',
      planEssFeat8: 'Até 2 alterações por mês',

      planProFeat1: 'Design personalizado',
      planProFeat2: 'Até 8 páginas completas',
      planProFeat3: 'Blog, catálogo ou portfólio',
      planProFeat4: 'Google Analytics integrado',
      planProFeat5: 'SEO intermediário e velocidade',
      planProFeat6: 'Animações e efeitos modernos',
      planProFeat7: 'Hospedagem, domínio e backups',
      planProFeat8: 'Até 4 alterações por mês',

      planAdvFeat1: 'Design totalmente exclusivo',
      planAdvFeat2: 'Área de login e cadastro',
      planAdvFeat3: 'Painel administrativo',
      planAdvFeat4: 'Agendamentos e pagamentos online',
      planAdvFeat5: 'Integrações com APIs externas',
      planAdvFeat6: 'Automações e relatórios',
      planAdvFeat7: 'Hospedagem, domínio e backups',
      planAdvFeat8: 'Monitoramento e suporte prioritários',

      quizSectionLabel: 'Recomendação',
      quizSectionTitle: 'Qual plano combina com você?',
      quizSectionSubtitle: 'Responda 4 perguntas e receba uma recomendação inicial gratuita.',
      quizStep: 'Pergunta',
      quizOf: 'de',
      quizQ1: 'Quantas páginas o seu projeto precisa?',
      quizQ1A1: '1 página (site de uma página só)',
      quizQ1A2: 'Entre 2 e 8 páginas',
      quizQ1A3: 'Muitas páginas ou ainda não sei',
      quizQ2: 'Você precisa de login, pagamentos ou agendamentos?',
      quizQ2A1: 'Não, não preciso',
      quizQ2A2: 'Talvez, ainda não sei',
      quizQ2A3: 'Sim, preciso',
      quizQ3: 'Você precisa de blog, catálogo ou portfólio?',
      quizQ3A1: 'Não',
      quizQ3A2: 'Sim',
      quizQ4: 'Qual nível de personalização você deseja?',
      quizQ4A1: 'Um site funcional e objetivo',
      quizQ4A2: 'Um site com design diferenciado',
      quizQ4A3: 'Um sistema único e personalizado',
      quizBack: 'Anterior',
      quizNext: 'Próxima pergunta',
      quizResultLabel: 'Recomendação para você',
      quizResultDisclaimer: 'Esta recomendação é apenas uma estimativa inicial. O plano final será definido após entendermos as necessidades do seu projeto.',
      quizResultCta: 'Conversar sobre este plano',
      quizRestart: 'Refazer',

      compLabel: 'Comparativo',
      compTitle: 'Todos os recursos em detalhe',
      compSubtitle: 'Compare os três planos e encontre o que melhor se adapta ao seu projeto.',
      compCatStructure: 'Estrutura',
      compCatIntegrations: 'Integrações',
      compCatSeo: 'SEO e performance',
      compCatAdvanced: 'Funcionalidades avançadas',
      compCatInfra: 'Infraestrutura',
      compCatSupport: 'Suporte',

      compRowPages: 'Páginas',
      compRowStructure: 'Estrutura',
      compRowDesign: 'Design',
      compRowResponsive: 'Responsividade',
      compRowWhatsapp: 'Botão WhatsApp',
      compRowForm: 'Formulário de contato',
      compRowMaps: 'Google Maps',
      compRowSocial: 'Redes sociais',
      compRowSeo: 'SEO',
      compRowAnalytics: 'Google Analytics',
      compRowSpeed: 'Otimização de velocidade',
      compRowBlog: 'Blog ou catálogo',
      compRowLogin: 'Login e cadastro',
      compRowAdmin: 'Painel administrativo',
      compRowDatabase: 'Banco de dados',
      compRowBooking: 'Agendamentos',
      compRowPayment: 'Pagamentos online',
      compRowApi: 'Integrações com APIs',
      compRowAutomation: 'Automações',
      compRowDomain: 'Domínio',
      compRowHosting: 'Hospedagem',
      compRowSsl: 'Certificado SSL',
      compRowBackups: 'Backups',
      compRowMaintenance: 'Manutenção técnica',
      compRowChanges: 'Alterações mensais',
      compRowSupport: 'Suporte',

      compValPageEss: 'Até 5 seções',
      compValPagePro: 'Até 8 páginas',
      compValPageAdv: 'Definido pelo projeto',
      compValStructEss: 'Página única',
      compValStructPro: 'Múltiplas páginas',
      compValStructAdv: 'Personalizado',
      compValDesignEss: 'Moderno',
      compValDesignPro: 'Personalizado',
      compValDesignAdv: 'Exclusivo',
      compValSeoEss: 'Básico',
      compValSeoPro: 'Intermediário',
      compValSeoAdv: 'Avançado',
      compValDomain: '1 incluído',
      compValHosting: 'Gerenciada',
      compValBackups: 'Periódicos',
      compValChangesEss: '2 por mês',
      compValChangesPro: '4 por mês',
      compValChangesAdv: 'A combinar',
      compValSupportEss: 'Padrão',
      compValSupportPro: 'Prioritário',
      compValSupportAdv: 'Prioritário',
      compValIncluded: 'Incluso',
      compValNotIncluded: '—',

      modalityLabel: 'Modalidades',
      modalityTitle: 'Assinatura ou compra definitiva?',
      modalitySubTitle: 'Plano por assinatura',
      modalityDefTitle: 'Compra definitiva',
      modalitySubItem1: 'Menor investimento inicial',
      modalitySubItem2: 'Site, hospedagem, domínio e manutenção no mesmo plano',
      modalitySubItem3: 'Suporte contínuo incluído',
      modalitySubItem4: 'Permanência mínima conforme o plano',
      modalitySubItem5: 'Indicado para quem deseja acompanhamento constante',
      modalityDefItem1: 'Pagamento integral pelo desenvolvimento',
      modalityDefItem2: 'Propriedade do site após a quitação',
      modalityDefItem3: 'Hospedagem e manutenção incluídas pelo período informado',
      modalityDefItem4: 'Possibilidade de continuar com o Plano de Cuidados',
      modalityDefItem5: 'Possibilidade de transferir o site após o período contratado',

      domainLabel: 'Domínio',
      domainTitle: 'Domínio incluído em todos os planos',
      domainText1: 'Os planos incluem o registro e a administração de 1 domínio padrão enquanto o contrato estiver ativo ou durante o período informado na proposta.',
      domainText2: 'O domínio é registrado no nome, CPF ou CNPJ do cliente. A Copy E Code cuida da configuração e administração técnica.',
      domainNote: 'Domínios premium, nomes já registrados por terceiros ou extensões com valor elevado serão cobrados separadamente.',

      hostingLabel: 'Hospedagem',
      hostingTitle: 'Hospedagem gerenciada',
      hostingSubtitle: 'Tudo que mantém seu site disponível, seguro e funcionando corretamente — sem que você precise se preocupar com os detalhes técnicos.',
      hostingItem1: 'Publicação e configuração do site',
      hostingItem2: 'Certificado SSL instalado',
      hostingItem3: 'Monitoramento básico de disponibilidade',
      hostingItem4: 'Backups periódicos',
      hostingItem5: 'Atualizações técnicas de ambiente',
      hostingItem6: 'Correção de falhas e erros',
      hostingItem7: 'Proteção e configurações de segurança',
      hostingItem8: 'Suporte técnico relacionado ao funcionamento',
      hostingNote: 'A capacidade pode ser ajustada caso o site apresente volume elevado de acessos, armazenamento ou processamento.',

      infoLabel: 'Transparência',
      infoTitle: 'Informações importantes',
      infoItem1: 'O domínio está incluído enquanto o contrato estiver ativo ou durante o período informado na proposta.',
      infoItem2: 'Em caso de cancelamento do plano mensal, o domínio continua pertencendo ao cliente, que passa a ser responsável pelos custos de renovação.',
      infoItem3: 'E-mails profissionais (ex: contato@suaempresa.com.br) não estão incluídos automaticamente e podem ser contratados separadamente.',
      infoItem4: 'Funcionalidades adicionais ou mudanças fora do escopo poderão receber um orçamento separado.',
      infoItem5: 'Os valores do Site Avançado dependem da complexidade, número de funcionalidades e integrações do projeto.',
      infoItem6: 'Os detalhes finais são definidos em proposta comercial ou contrato.',

      plansFaqLabel: 'Dúvidas',
      plansFaqTitle: 'Perguntas frequentes',
      plansFaq1Q: 'O domínio realmente fica no nome do cliente?',
      plansFaq1A: 'Sim. O domínio é registrado no nome, CPF ou CNPJ do cliente. A Copy E Code cuida da configuração técnica durante a vigência do plano.',
      plansFaq2Q: 'O que acontece depois dos primeiros 12 meses?',
      plansFaq2A: 'Após os primeiros 12 meses, o cliente pode contratar o Plano de Cuidados da Copy E Code ou transferir o site para outra hospedagem. As condições são definidas na proposta comercial.',
      plansFaq3Q: 'Posso cancelar o plano mensal?',
      plansFaq3A: 'Sim, respeitando a permanência mínima prevista no contrato. Os detalhes de cancelamento são definidos em proposta comercial.',
      plansFaq4Q: 'Posso transferir o site para outra hospedagem?',
      plansFaq4A: 'Sim. Após o período contratado, o cliente pode solicitar a transferência do site para outra hospedagem.',
      plansFaq5Q: 'O que é considerado uma pequena alteração?',
      plansFaq5A: 'Alterações simples de texto, imagem ou ajuste de layout já existente. Novas seções, páginas ou funcionalidades podem ser orçadas separadamente.',
      plansFaq6Q: 'Os textos e imagens estão incluídos?',
      plansFaq6A: 'Os textos e imagens devem ser fornecidos pelo cliente. Caso precise de ajuda com redação ou fotografia, podemos indicar parceiros ou orçar este serviço separadamente.',
      plansFaq7Q: 'Posso mudar de plano futuramente?',
      plansFaq7A: 'Sim. Conversaremos sobre as condições de migração de plano de acordo com o momento do seu contrato.',
      plansFaq8Q: 'O Site Avançado possui preço fixo?',
      plansFaq8A: 'Não. O valor depende da complexidade, número de funcionalidades, usuários e integrações. O orçamento é feito após análise detalhada do projeto.',
      plansFaq9Q: 'O site funciona no celular?',
      plansFaq9A: 'Sim. Todos os sites são 100% responsivos e adaptados para celular, tablet e computador.',
      plansFaq10Q: 'Vocês oferecem e-mail profissional?',
      plansFaq10A: 'E-mail profissional não está incluído automaticamente nos planos, mas pode ser contratado separadamente.',
      plansFaq11Q: 'Quanto tempo demora para o site ficar pronto?',
      plansFaq11A: 'O prazo varia conforme o plano e a complexidade do projeto. Ele será definido na proposta comercial após entendermos o escopo do trabalho.',
      plansFaq12Q: 'Como funciona o pagamento?',
      plansFaq12A: 'Os detalhes de pagamento são definidos na proposta comercial. Entre em contato para receber uma proposta personalizada.',

      plansFinalCtaTitle: 'Ainda não sabe qual plano escolher?',
      plansFinalCtaText: 'Conte um pouco sobre sua empresa e nós ajudaremos a encontrar a solução mais adequada para o seu momento.',
      plansFinalCtaWa: 'Falar no WhatsApp',
      plansFinalCtaQuote: 'Solicitar orçamento',
      plansFinalCtaTrust: 'Atendimento direto, proposta transparente e projeto desenvolvido de acordo com as necessidades do seu negócio.',

      plansMetaDescription: 'Conheça os planos de criação de sites da Copy E Code. Sites profissionais com domínio, hospedagem, manutenção e suporte para empresas de diferentes tamanhos.',
      plansOgTitle: 'Planos de Criação de Sites | Copy E Code',
      plansPageTitle: 'Planos | COPY CODE'
    },

    en: {
      skipLink: 'Skip to content',
      navHome: 'Home',
      navServices: 'Services',
      navProjects: 'Projects',
      navProcess: 'Process',
      navPlans: 'Plans',
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
      pageTitle: 'COPY CODE',

      plansHeroLabel: 'COPY E CODE PLANS',
      plansHeroTitle: 'A professional website for every stage of your business.',
      plansHeroSubtitle: 'Choose between an essential solution, a complete digital presence, or a custom-built system. All plans are designed to deliver performance, security and ongoing support.',
      plansHeroCtaCompare: 'Compare plans',
      plansHeroCtaQuote: 'Request a quote',
      plansFeature1: 'Responsive design',
      plansFeature2: 'Domain included',
      plansFeature3: 'Managed hosting',
      plansFeature4: 'Technical support',

      plansToggleSub: 'Subscription plan',
      plansToggleDef: 'One-time purchase',

      planEssName: 'Essential Website',
      planProName: 'Professional Website',
      planAdvName: 'Advanced Website',
      planPopularBadge: 'Most Popular',
      planPublicEss: 'Freelancers, small businesses, barbershops, restaurants and companies looking to start their digital presence.',
      planPublicPro: 'Businesses that need a more complete website, with multiple pages and custom features.',
      planPublicAdv: 'Companies that need custom systems, automation, client areas or advanced integrations.',

      planEssSubPrice: 'R$ 249',
      planProSubPrice: 'R$ 449',
      planAdvSubPrice: 'Starting at R$ 799',
      planSubPeriod: '/month',
      planSubNote: 'Includes website, hosting, domain, maintenance and support.',
      planMinStay: 'Minimum 12-month commitment.',
      planAdvMinStay: 'Minimum commitment defined by contract.',

      planEssDefPrice: 'R$ 1,100',
      planProDefPrice: 'R$ 2,500',
      planAdvDefPrice: 'Starting at R$ 5,000',
      planDefNote: 'Hosting, domain and maintenance included for the first 12 months.',
      planAdvDefNote: 'Hosting and support period defined in the commercial proposal.',
      planDefOneTime: 'one-time payment',

      planCta: 'Request a quote',
      planViewFeatures: 'View all features',

      planEssFeat1: 'Modern responsive website',
      planEssFeat2: 'Single page with up to 5 sections',
      planEssFeat3: 'About, services and contact',
      planEssFeat4: 'Direct WhatsApp button',
      planEssFeat5: 'Contact form and Google Maps',
      planEssFeat6: 'Basic SEO and SSL certificate',
      planEssFeat7: 'Hosting, domain and backups',
      planEssFeat8: 'Up to 2 changes per month',

      planProFeat1: 'Custom design',
      planProFeat2: 'Up to 8 complete pages',
      planProFeat3: 'Blog, catalog or portfolio',
      planProFeat4: 'Google Analytics integrated',
      planProFeat5: 'Intermediate SEO and speed optimization',
      planProFeat6: 'Modern animations and effects',
      planProFeat7: 'Hosting, domain and backups',
      planProFeat8: 'Up to 4 changes per month',

      planAdvFeat1: 'Fully exclusive design',
      planAdvFeat2: 'Login and registration area',
      planAdvFeat3: 'Admin dashboard',
      planAdvFeat4: 'Bookings and online payments',
      planAdvFeat5: 'API and external integrations',
      planAdvFeat6: 'Automation and reports',
      planAdvFeat7: 'Hosting, domain and backups',
      planAdvFeat8: 'Priority support and monitoring',

      quizSectionLabel: 'Recommendation',
      quizSectionTitle: 'Which plan is right for you?',
      quizSectionSubtitle: 'Answer 4 questions and get a free initial recommendation.',
      quizStep: 'Question',
      quizOf: 'of',
      quizQ1: 'How many pages does your project need?',
      quizQ1A1: '1 page (single-page website)',
      quizQ1A2: 'Between 2 and 8 pages',
      quizQ1A3: 'Many pages or not sure yet',
      quizQ2: 'Do you need login, payments or bookings?',
      quizQ2A1: "No, I don't need those",
      quizQ2A2: 'Maybe, not sure yet',
      quizQ2A3: 'Yes, I do need those',
      quizQ3: 'Do you need a blog, catalog or portfolio?',
      quizQ3A1: 'No',
      quizQ3A2: 'Yes',
      quizQ4: 'What level of customization do you want?',
      quizQ4A1: 'A functional and straightforward website',
      quizQ4A2: 'A website with a distinctive design',
      quizQ4A3: 'A unique, fully custom system',
      quizBack: 'Previous',
      quizNext: 'Next question',
      quizResultLabel: 'Recommendation for you',
      quizResultDisclaimer: "This is an initial estimate only. The final plan will be defined after we understand your project's needs.",
      quizResultCta: 'Talk about this plan',
      quizRestart: 'Start over',

      compLabel: 'Comparison',
      compTitle: 'All features in detail',
      compSubtitle: 'Compare the three plans and find the best fit for your project.',
      compCatStructure: 'Structure',
      compCatIntegrations: 'Integrations',
      compCatSeo: 'SEO & performance',
      compCatAdvanced: 'Advanced features',
      compCatInfra: 'Infrastructure',
      compCatSupport: 'Support',

      compRowPages: 'Pages',
      compRowStructure: 'Structure',
      compRowDesign: 'Design',
      compRowResponsive: 'Responsiveness',
      compRowWhatsapp: 'WhatsApp button',
      compRowForm: 'Contact form',
      compRowMaps: 'Google Maps',
      compRowSocial: 'Social media',
      compRowSeo: 'SEO',
      compRowAnalytics: 'Google Analytics',
      compRowSpeed: 'Speed optimization',
      compRowBlog: 'Blog or catalog',
      compRowLogin: 'Login & registration',
      compRowAdmin: 'Admin dashboard',
      compRowDatabase: 'Database',
      compRowBooking: 'Bookings',
      compRowPayment: 'Online payments',
      compRowApi: 'API integrations',
      compRowAutomation: 'Automation',
      compRowDomain: 'Domain',
      compRowHosting: 'Hosting',
      compRowSsl: 'SSL certificate',
      compRowBackups: 'Backups',
      compRowMaintenance: 'Technical maintenance',
      compRowChanges: 'Monthly changes',
      compRowSupport: 'Support',

      compValPageEss: 'Up to 5 sections',
      compValPagePro: 'Up to 8 pages',
      compValPageAdv: 'Defined by project',
      compValStructEss: 'Single page',
      compValStructPro: 'Multiple pages',
      compValStructAdv: 'Custom',
      compValDesignEss: 'Modern',
      compValDesignPro: 'Custom',
      compValDesignAdv: 'Exclusive',
      compValSeoEss: 'Basic',
      compValSeoPro: 'Intermediate',
      compValSeoAdv: 'Advanced',
      compValDomain: '1 included',
      compValHosting: 'Managed',
      compValBackups: 'Periodic',
      compValChangesEss: '2 per month',
      compValChangesPro: '4 per month',
      compValChangesAdv: 'To be agreed',
      compValSupportEss: 'Standard',
      compValSupportPro: 'Priority',
      compValSupportAdv: 'Priority',
      compValIncluded: 'Included',
      compValNotIncluded: '—',

      modalityLabel: 'Options',
      modalityTitle: 'Subscription or one-time purchase?',
      modalitySubTitle: 'Subscription plan',
      modalityDefTitle: 'One-time purchase',
      modalitySubItem1: 'Lower initial investment',
      modalitySubItem2: 'Website, hosting, domain and maintenance in one plan',
      modalitySubItem3: 'Ongoing support included',
      modalitySubItem4: 'Minimum commitment as per the plan',
      modalitySubItem5: 'Ideal for businesses that want continuous management',
      modalityDefItem1: 'Full payment for development',
      modalityDefItem2: 'Website ownership after payment',
      modalityDefItem3: 'Hosting and maintenance included for the stated period',
      modalityDefItem4: 'Option to continue with the Care Plan',
      modalityDefItem5: 'Option to transfer the website after the contracted period',

      domainLabel: 'Domain',
      domainTitle: 'Domain included in all plans',
      domainText1: 'All plans include the registration and management of 1 standard domain while the contract is active or during the period stated in the proposal.',
      domainText2: "The domain is registered in the client's name, CPF or CNPJ. Copy E Code handles the technical setup and management.",
      domainNote: 'Premium domains, names already registered by third parties, or extensions with elevated pricing will be charged separately.',

      hostingLabel: 'Hosting',
      hostingTitle: 'Managed hosting',
      hostingSubtitle: 'Everything that keeps your website available, secure and running correctly — without you having to worry about the technical details.',
      hostingItem1: 'Website publishing and configuration',
      hostingItem2: 'SSL certificate installed',
      hostingItem3: 'Basic availability monitoring',
      hostingItem4: 'Periodic backups',
      hostingItem5: 'Technical environment updates',
      hostingItem6: 'Bug and failure correction',
      hostingItem7: 'Security protection and configuration',
      hostingItem8: 'Technical support for website operation',
      hostingNote: 'Capacity may be adjusted if the website experiences high volumes of traffic, storage or processing.',

      infoLabel: 'Transparency',
      infoTitle: 'Important information',
      infoItem1: 'The domain is included while the contract is active or during the period stated in the proposal.',
      infoItem2: "If the monthly plan is cancelled, the domain remains the client's property, who becomes responsible for renewal costs.",
      infoItem3: 'Professional email addresses (e.g. contact@yourcompany.com) are not automatically included and can be contracted separately.',
      infoItem4: 'Additional features or changes outside the scope may receive a separate quote.',
      infoItem5: 'Advanced Website pricing depends on project complexity, number of features and integrations.',
      infoItem6: 'Final details are defined in a commercial proposal or contract.',

      plansFaqLabel: 'Questions',
      plansFaqTitle: 'Frequently asked questions',
      plansFaq1Q: "Is the domain really registered in the client's name?",
      plansFaq1A: "Yes. The domain is registered in the client's name, CPF or CNPJ. Copy E Code handles the technical configuration during the plan's validity.",
      plansFaq2Q: 'What happens after the first 12 months?',
      plansFaq2A: 'After the first 12 months, the client can sign up for the Copy E Code Care Plan or transfer the website to another hosting provider. Conditions are defined in the commercial proposal.',
      plansFaq3Q: 'Can I cancel the monthly plan?',
      plansFaq3A: 'Yes, as long as the minimum commitment stated in the contract is respected. Details are defined in the commercial proposal.',
      plansFaq4Q: 'Can I move the website to another hosting provider?',
      plansFaq4A: 'Yes. After the contracted period, the client can request the transfer of the website to another hosting provider.',
      plansFaq5Q: 'What counts as a minor change?',
      plansFaq5A: 'Simple changes to text, images or existing layout. New sections, pages or features may be quoted separately.',
      plansFaq6Q: 'Are texts and images included?',
      plansFaq6A: 'Texts and images must be provided by the client. If you need help with copywriting or photography, we can recommend partners or quote this service separately.',
      plansFaq7Q: 'Can I upgrade to a different plan later?',
      plansFaq7A: 'Yes. We will discuss the migration conditions according to the terms of your contract at that time.',
      plansFaq8Q: 'Does the Advanced Website have a fixed price?',
      plansFaq8A: 'No. The price depends on the complexity, number of features, users and integrations. A quote is provided after a detailed project analysis.',
      plansFaq9Q: 'Does the website work on mobile?',
      plansFaq9A: 'Yes. All websites are 100% responsive and adapted for mobile, tablet and desktop.',
      plansFaq10Q: 'Do you offer professional email?',
      plansFaq10A: 'Professional email is not automatically included in the plans, but it can be contracted separately.',
      plansFaq11Q: 'How long does it take for the website to be ready?',
      plansFaq11A: 'The timeline varies according to the plan and project complexity. It will be defined in the commercial proposal after we understand the project scope.',
      plansFaq12Q: 'How does payment work?',
      plansFaq12A: 'Payment details are defined in the commercial proposal. Get in touch to receive a personalized quote.',

      plansFinalCtaTitle: 'Still not sure which plan to choose?',
      plansFinalCtaText: "Tell us a bit about your business and we'll help you find the right solution for your current stage.",
      plansFinalCtaWa: 'Chat on WhatsApp',
      plansFinalCtaQuote: 'Request a quote',
      plansFinalCtaTrust: 'Direct service, transparent proposal and a project developed according to your business needs.',

      plansMetaDescription: 'Explore Copy E Code\'s website plans. Professional websites with domain, hosting, maintenance and support for businesses of all sizes.',
      plansOgTitle: 'Website Plans | Copy E Code',
      plansPageTitle: 'Plans | COPY CODE'
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
