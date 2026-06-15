# Guia Completo: Claude como Orquestrador de Automação de Leads

## Visão Geral da Opção 2

Nessa abordagem, você usa o **Claude como cérebro** do fluxo — ele analisa os dados, toma decisões e gera o conteúdo — enquanto o **Make ou N8N** cuida da execução mecânica (buscar, salvar, enviar). Resultado: custo menor que a Opção 1 (menos tokens), muito mais controle que a Opção 3 (menos código manual).

---

## O Fluxo Completo

```
[Busca de Empresas]
       ↓
[Claude Filtra os Leads]
       ↓
[Verifica se tem site]
       ↓
[Claude Gera o Site]
       ↓
[Hospeda o Site]
       ↓
[Claude Escreve a Proposta]
       ↓
[Envia o E-mail]
```

---

## Passo 1 — Busca de Empresas

**Ferramentas:** Google Maps API, Apollo.io, Hunter.io, ou Outscraper

### Como configurar no Make/N8N:

1. **Crie um webhook** que receba: categoria + cidade
   - Exemplo: `{ "categoria": "restaurante", "cidade": "São Paulo" }`

2. **Adicione um módulo HTTP** que chama a API do Google Places:
   ```
   GET https://maps.googleapis.com/maps/api/place/textsearch/json
     ?query=restaurante+São+Paulo
     &key=SUA_API_KEY
   ```

3. **Salve os dados relevantes** de cada empresa:
   - Nome
   - Telefone
   - Endereço
   - Website (se tiver)
   - Avaliação

> **Dica:** Comece com 20-50 empresas por rodada para não estourar créditos de API.

---

## Passo 2 — Claude Filtra os Leads

Aqui o Claude entra pela primeira vez. Você envia a lista de empresas e ele decide quem vale a pena abordar.

### Prompt base para o filtro:

```
Você é um analista de prospecção B2B.

Recebi essa lista de empresas da categoria [CATEGORIA] em [CIDADE]:
[LISTA_JSON]

Filtre e retorne APENAS as empresas que:
1. Não têm site OU têm um site claramente desatualizado/amador
2. Têm avaliação acima de 3.5 estrelas (sinalizando negócio ativo)
3. Têm pelo menos 10 avaliações no Google

Retorne um JSON com os campos: nome, telefone, email (se disponível), 
website_status (sem_site / site_ruim), motivo_filtro.
```

### No Make/N8N:

- Módulo **Claude API** (ou OpenAI API)
- Passe o JSON da lista no prompt
- Parse o JSON de resposta para o próximo passo

---

## Passo 3 — Verificação de Site

Antes de gerar o site, confirme automaticamente se o lead realmente não tem site ou tem um ruim.

### Opções de verificação:

**Opção A — Simples (grátis):**
- Módulo HTTP que faz um GET no domínio da empresa
- Se retornar 404/timeout = sem site ✅
- Se retornar 200 = passa para o Claude avaliar

**Opção B — Com Claude:**
```
Acesse esse site: [URL]
Avalie em 3 critérios:
1. Tem versão mobile? (sim/não)
2. Parece profissional? (1 a 5)
3. Tem botão de contato/WhatsApp? (sim/não)

Se a nota for 2 ou menos em profissionalismo, classifique como "site_ruim".
Retorne JSON: { "status": "sem_site" | "site_ruim" | "site_ok", "motivo": "..." }
```

---

## Passo 4 — Claude Gera o Site

Esse é o coração do produto. O Claude gera um site HTML completo e personalizado para o negócio.

### Prompt base para geração de site:

```
Você é um desenvolvedor web especialista em sites de pequenas empresas.

Crie um site HTML completo (index.html em arquivo único, com CSS e JS embutidos) para:

- Nome: [NOME_EMPRESA]
- Categoria: [CATEGORIA]
- Cidade: [CIDADE]
- Telefone: [TELEFONE]

Requisitos:
- Design moderno, responsivo e mobile-first
- Seções: Hero, Sobre, Serviços, Depoimentos (fictícios), Contato
- Botão flutuante de WhatsApp com o número [TELEFONE]
- Paleta de cores adequada para [CATEGORIA]
- Formulário de contato simples
- Google Fonts incluído via CDN
- Sem dependências externas além de Google Fonts e Font Awesome

Retorne APENAS o código HTML, sem explicações.
```

### Variáveis de personalização por categoria:

| Categoria | Paleta sugerida | Seções extras |
|-----------|----------------|---------------|
| Restaurante | Vermelho/laranja | Cardápio, Horários |
| Clínica | Azul/verde | Especialidades, Planos |
| Salão | Rosa/roxo | Serviços, Agendamento |
| Loja | Neutro/amarelo | Produtos em destaque |
| Academia | Preto/laranja | Modalidades, Planos |

---

## Passo 5 — Hospedagem do Site

Você precisa de uma URL pública para mandar na proposta. Opções por custo:

### Opção A — GitHub Pages (grátis)
1. Crie um repositório por cliente via API do GitHub
2. Faça push do HTML via API
3. Ative o Pages — URL gerada: `seuusuario.github.io/nome-empresa`

**No Make/N8N:**
```
POST https://api.github.com/repos
Authorization: token SEU_TOKEN
Body: { "name": "preview-nome-empresa", "auto_init": true }

PUT https://api.github.com/repos/SEU_USER/preview-nome-empresa/contents/index.html
Body: { "message": "add site", "content": "[HTML em base64]" }
```

### Opção B — Netlify (grátis, mais rápido)
- Use o módulo Netlify no Make/N8N
- Deploy via API com o HTML gerado
- URL gerada em segundos: `nome-empresa-preview.netlify.app`

### Opção C — Vercel (grátis)
- Similar ao Netlify, boa para sites com JS

> **Recomendação:** Netlify é a mais fácil de integrar com Make/N8N e gera URLs limpas automaticamente.

---

## Passo 6 — Claude Escreve a Proposta

Com a URL do preview em mãos, o Claude personaliza o e-mail de proposta.

### Prompt base para e-mail:

```
Você é um especialista em vendas de serviços digitais para pequenas empresas.

Escreva um e-mail de prospecção para:

- Empresa: [NOME_EMPRESA]
- Categoria: [CATEGORIA]
- Cidade: [CIDADE]
- Link do site preview: [URL_PREVIEW]

O e-mail deve:
- Ter assunto chamativo (não genérico)
- Mostrar que você já fez o trabalho (link do preview)
- Ser curto (máx 150 palavras no corpo)
- Ter tom amigável, não vendedor
- Terminar com uma pergunta simples para iniciar conversa
- Mencionar que o site está pronto e pode ser ativado hoje

Retorne JSON: { "assunto": "...", "corpo": "..." }
```

### Exemplo de e-mail gerado:

> **Assunto:** Fiz um site para o [Nome do Restaurante] — dá uma olhada
>
> Oi, tudo bem?
>
> Vi que o [Nome] ainda não tem presença online e resolvi criar um exemplo pra vocês verem como ficaria: [link]
>
> Já está responsivo, tem botão de WhatsApp e pode receber pedidos de reserva.
>
> Se gostar, consigo ativar em menos de 24 horas por um valor bem acessível.
>
> O que acha?

---

## Passo 7 — Envio do E-mail

### Opções de envio:

**Para volume baixo (até 200/dia):**
- Gmail via módulo nativo do Make/N8N
- Conta Google Workspace dedicada para prospecção

**Para volume médio (200-1000/dia):**
- Brevo (ex-Sendinblue) — grátis até 300/dia
- Mailgun — pago por volume, boa entregabilidade

**Para volume alto (+1000/dia):**
- Amazon SES — $0,10 por 1000 e-mails
- Postmark — foco em entregabilidade

> **Importante:** Sempre use uma conta de e-mail separada da principal para prospecção. Configure SPF, DKIM e DMARC para melhorar entregabilidade.

---

## Arquitetura Completa no Make

```
Webhook (trigger manual)
    ↓
Google Places API (busca empresas)
    ↓
Iterator (percorre cada empresa)
    ↓
Claude API — Filtro de leads
    ↓
Router (tem site? sim/não)
    ↓ (sem site ou site ruim)
Claude API — Gera HTML do site
    ↓
Netlify API — Faz deploy
    ↓
Claude API — Gera e-mail personalizado
    ↓
Gmail/Brevo — Envia e-mail
    ↓
Google Sheets — Registra resultado
```

---

## Custos Estimados por Lead

| Item | Custo aproximado |
|------|-----------------|
| Google Places API | $0,002 por empresa buscada |
| Claude (filtro) | ~$0,01 por lote de 20 |
| Claude (gerar site) | ~$0,05-0,10 por site |
| Claude (e-mail) | ~$0,01 por e-mail |
| Netlify (hospedagem) | Grátis (100 deploys/mês) |
| Gmail/Brevo | Grátis até 300/dia |
| **Total por lead** | **~$0,08-0,15** |

Para 100 leads: **~$8-15 no total**

---

## Como Começar (Roadmap Simples)

### Semana 1 — Validação manual
1. Escolha 1 nicho e 1 cidade
2. Encontre 5 empresas manualmente no Google Maps
3. Use o Claude manualmente para gerar os 5 sites
4. Envie os e-mails manualmente
5. Veja qual taxa de resposta você consegue

### Semana 2 — Automatiza parte 1
1. Crie a conta no Make (plano grátis tem 1000 operações/mês)
2. Monte os módulos de busca + filtro Claude
3. Teste com 10 empresas

### Semana 3 — Automatiza parte 2
1. Integra geração de site + deploy Netlify
2. Integra envio de e-mail
3. Adiciona planilha de controle no Google Sheets

### Semana 4 — Escala
1. Roda o fluxo para 50-100 empresas/semana
2. Monitora taxa de resposta
3. Ajusta os prompts conforme os resultados

---

## Dicas Importantes

**Sobre os prompts:**
- Salve os prompts que funcionam como templates no Make/N8N
- Teste variações de tom (formal vs. informal) por nicho
- Adicione campo para personalização manual antes do envio

**Sobre entregabilidade:**
- Não envie mais de 50 e-mails por dia por conta
- Use variação no assunto e corpo para evitar filtros de spam
- Sempre inclua link de descadastro

**Sobre o produto:**
- Cobre entre R$500-R$1500 pela ativação do site
- Ofereça manutenção mensal de R$100-200
- O preview gratuito é o gancho — a maioria vai querer ativar

---

## Próximos Passos

Quando você estiver pronto para montar:
1. Crie conta no Make: make.com
2. Pegue sua chave da API do Claude: console.anthropic.com
3. Pegue a chave do Google Places: console.cloud.google.com
4. Crie conta no Netlify: netlify.com

Qualquer dúvida em algum passo específico, é só perguntar.
