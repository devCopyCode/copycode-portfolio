# Guia Completo: Automação de Leads com Claude como Orquestrador

---

## Antes de começar — O que é o custo por lead?

Cada API que você usa cobra por uso. Veja o que você paga para processar **1 lead do zero até o e-mail enviado**:

| Etapa | Serviço | Custo em USD | Custo em BRL* |
|-------|---------|-------------|--------------|
| Buscar empresas | Google Places API | $0,002 | ~R$0,01 |
| Filtrar leads | Claude API | $0,005 | ~R$0,03 |
| Verificar site | HTTP request | Grátis | R$0,00 |
| Gerar site HTML | Claude API | $0,08 | ~R$0,45 |
| Hospedar preview | Netlify | Grátis | R$0,00 |
| Escrever e-mail | Claude API | $0,005 | ~R$0,03 |
| Enviar e-mail | Brevo (grátis) | Grátis | R$0,00 |
| **TOTAL** | | **~$0,09** | **~R$0,50** |

*Câmbio aproximado R$5,60 por dólar

**Resumo prático:** Para prospectar 100 empresas você gasta ~R$50. Se fechar 2 clientes a R$800 cada = R$1.600 de receita com R$50 de custo.

---

## Visão Geral do Fluxo

```
TRIGGER (manual ou agendado)
         │
         ▼
┌─────────────────────┐
│  Busca de Empresas  │  ← Google Places API
│  (por nicho/cidade) │
└─────────┬───────────┘
          │ lista de empresas
          ▼
┌─────────────────────┐
│  Claude Filtra      │  ← descarta quem já tem site bom
│  os Leads           │
└─────────┬───────────┘
          │ leads qualificados
          ▼
┌─────────────────────┐
│  Verifica Site      │  ← HTTP GET no domínio
│  (tem ou não tem?)  │
└─────────┬───────────┘
          │ confirmado: sem site ou site ruim
          ▼
┌─────────────────────┐
│  Claude Gera        │  ← HTML completo personalizado
│  o Site             │
└─────────┬───────────┘
          │ código HTML
          ▼
┌─────────────────────┐
│  Deploy no Netlify  │  ← URL pública gerada
└─────────┬───────────┘
          │ link do preview
          ▼
┌─────────────────────┐
│  Claude Escreve     │  ← e-mail com link do preview
│  a Proposta         │
└─────────┬───────────┘
          │ assunto + corpo
          ▼
┌─────────────────────┐
│  Envia E-mail       │  ← Brevo ou Gmail
│  + Registra Planilha│
└─────────────────────┘
```

---

## FASE 0 — Configuração Inicial

### 0.1 — Contas e APIs necessárias

**Checklist de contas para criar:**

- [ ] Conta no **Make** (make.com) — plano grátis tem 1.000 operações/mês
- [ ] Conta na **Anthropic** (console.anthropic.com) — para usar o Claude via API
- [ ] Conta no **Google Cloud** (console.cloud.google.com) — para Google Places
- [ ] Conta no **Netlify** (netlify.com) — para hospedar os previews
- [ ] Conta no **Brevo** (brevo.com) — para enviar e-mails
- [ ] Conta no **Google** com e-mail dedicado à prospecção (ex: contato@seudominio.com)
- [ ] Planilha no **Google Sheets** para controle dos leads

---

### 0.2 — Como pegar cada chave de API

**Claude (Anthropic):**
1. Acesse console.anthropic.com
2. Clique em "API Keys" no menu lateral
3. Clique em "Create Key"
4. Copie e salve em lugar seguro — ela só aparece uma vez
5. Adicione crédito em "Billing" (comece com $5 para testar)

**Checklist Claude:**
- [ ] Conta criada na Anthropic
- [ ] Chave de API gerada e salva
- [ ] Crédito adicionado (mínimo $5)
- [ ] Testou chamada simples no Postman ou curl

---

**Google Places API:**
1. Acesse console.cloud.google.com
2. Crie um novo projeto (botão no topo)
3. Vá em "APIs e Serviços" → "Biblioteca"
4. Busque "Places API" e ative
5. Vá em "Credenciais" → "Criar credencial" → "Chave de API"
6. Copie a chave gerada
7. Restrinja a chave: em "Restrições de API" selecione só "Places API"

**Checklist Google Places:**
- [ ] Projeto criado no Google Cloud
- [ ] Places API ativada
- [ ] Chave de API gerada
- [ ] Chave restrita à Places API
- [ ] Conta de cobrança configurada (obrigatório, mas tem $200 grátis/mês)

---

**Netlify:**
1. Crie conta em netlify.com com GitHub
2. Vá em "User Settings" → "Applications" → "Personal access tokens"
3. Clique em "New access token"
4. Dê um nome (ex: "make-automacao") e clique "Generate"
5. Copie o token

**Checklist Netlify:**
- [ ] Conta criada
- [ ] Token de acesso pessoal gerado e salvo
- [ ] Testou deploy manual de um HTML simples

---

**Brevo:**
1. Crie conta em brevo.com
2. Vá em "SMTP & API" no menu lateral
3. Clique em "API Keys" → "Generate a new API key"
4. Copie a chave
5. Configure o remetente em "Senders & IPs" → "Senders"

**Checklist Brevo:**
- [ ] Conta criada
- [ ] Chave de API gerada
- [ ] Remetente verificado (precisa confirmar o e-mail)
- [ ] Testou envio de e-mail de teste

---

### 0.3 — Planilha de controle no Google Sheets

Crie uma planilha com as colunas abaixo. Essa planilha vai registrar cada lead processado.

**Colunas da planilha:**

| Coluna | O que guardar |
|--------|--------------|
| A — Data | Data do processamento |
| B — Nome | Nome da empresa |
| C — Categoria | Nicho (restaurante, clínica...) |
| D — Cidade | Cidade |
| E — Telefone | Telefone/WhatsApp |
| F — E-mail | E-mail encontrado |
| G — Status Site | sem_site / site_ruim / site_ok |
| H — URL Preview | Link do site gerado no Netlify |
| I — E-mail Enviado | sim / não |
| J — Status Lead | novo / respondeu / fechou / descartado |
| K — Observações | Notas manuais |

**Checklist Google Sheets:**
- [ ] Planilha criada com todas as colunas
- [ ] Compartilhada com a conta do Make (ou conectada via OAuth)
- [ ] Testou adicionar linha manualmente

---

## FASE 1 — Montando o Fluxo no Make

Acesse make.com → "Create a new scenario"

---

### Módulo 1 — Webhook (Gatilho)

O webhook é como você dispara o fluxo. Você vai enviar uma requisição com o nicho e a cidade que quer prospectar.

**Passo a passo no Make:**
1. Clique no "+" para adicionar o primeiro módulo
2. Busque "Webhooks" → selecione "Custom webhook"
3. Clique em "Add" para criar um novo webhook
4. Dê o nome "disparar-prospeccao"
5. Copie a URL gerada (ex: `https://hook.eu1.make.com/abc123`)
6. Clique em "Save"

**Estrutura do JSON que você vai enviar para disparar:**
```json
{
  "nicho": "restaurante",
  "cidade": "São Paulo",
  "estado": "SP",
  "limite": 20
}
```

**Como testar o webhook:**
Abra o terminal ou use o Postman:
```
POST https://hook.eu1.make.com/SUA_URL_AQUI
Content-Type: application/json

{
  "nicho": "restaurante",
  "cidade": "São Paulo",
  "estado": "SP",
  "limite": 20
}
```

**Checklist Módulo 1:**
- [ ] Webhook criado no Make
- [ ] URL do webhook copiada e salva
- [ ] Testou envio do JSON e o Make recebeu os dados
- [ ] Os campos nicho, cidade, estado e limite aparecem no Make

---

### Módulo 2 — Busca no Google Places

**Passo a passo no Make:**
1. Clique em "+" após o webhook
2. Busque "HTTP" → selecione "Make a request"
3. Configure:
   - **URL:** `https://maps.googleapis.com/maps/api/place/textsearch/json`
   - **Method:** GET
   - **Query String:** adicione os parâmetros abaixo

**Parâmetros da requisição:**

| Parâmetro | Valor no Make |
|-----------|--------------|
| query | `{{1.nicho}} {{1.cidade}} {{1.estado}}` |
| key | SUA_CHAVE_GOOGLE_PLACES |
| language | pt-BR |
| region | br |

**O que você vai receber:**
```json
{
  "results": [
    {
      "name": "Restaurante do João",
      "formatted_address": "Rua X, 123 - São Paulo",
      "formatted_phone_number": "(11) 9999-9999",
      "website": "http://restaurantedojoao.com.br",
      "rating": 4.2,
      "user_ratings_total": 87
    }
  ]
}
```

**Checklist Módulo 2:**
- [ ] Módulo HTTP criado
- [ ] URL da API configurada
- [ ] Chave do Google inserida
- [ ] Parâmetros mapeados do webhook
- [ ] Testou e recebeu lista de empresas na resposta

---

### Módulo 3 — Iterator (percorre cada empresa)

Esse módulo divide a lista de resultados para processar uma empresa por vez.

**Passo a passo no Make:**
1. Clique em "+" após o HTTP
2. Busque "Flow Control" → selecione "Iterator"
3. Em "Array", selecione `{{2.data.results}}` (o array de resultados do Google)
4. Clique em "Save"

A partir daqui, tudo que vier depois vai rodar uma vez para cada empresa encontrada.

**Checklist Módulo 3:**
- [ ] Iterator criado
- [ ] Array mapeado para `results` da resposta do Google
- [ ] Testou e viu o fluxo rodando para cada empresa separadamente

---

### Módulo 4 — Claude filtra o lead

**Passo a passo no Make:**
1. Clique em "+" após o Iterator
2. Busque "HTTP" → "Make a request"
3. Configure:
   - **URL:** `https://api.anthropic.com/v1/messages`
   - **Method:** POST
   - **Headers:**
     - `x-api-key`: SUA_CHAVE_CLAUDE
     - `anthropic-version`: `2023-06-01`
     - `content-type`: `application/json`
   - **Body Type:** Raw
   - **Content Type:** JSON

**Body da requisição:**
```json
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 300,
  "messages": [
    {
      "role": "user",
      "content": "Analise essa empresa e me diga se é um bom lead para vender um site profissional.\n\nDados:\n- Nome: {{3.name}}\n- Endereço: {{3.formatted_address}}\n- Telefone: {{3.formatted_phone_number}}\n- Website atual: {{3.website}}\n- Avaliação: {{3.rating}} estrelas\n- Total de avaliações: {{3.user_ratings_total}}\n\nClassifique como:\n- 'qualificado' se: não tem site OU site parece amador/desatualizado, tem mais de 10 avaliações e nota acima de 3.5\n- 'descartado' se: já tem site profissional, ou tem poucas avaliações, ou nota abaixo de 3.0\n\nRetorne APENAS este JSON sem explicações:\n{\"status\": \"qualificado\" ou \"descartado\", \"motivo\": \"motivo em uma frase\", \"website_status\": \"sem_site\" ou \"site_ruim\" ou \"site_ok\"}"
    }
  ]
}
```

> **Por que usar claude-haiku?** É o modelo mais barato da Anthropic. Para tarefas simples de classificação como essa, ele funciona perfeitamente e custa 25x menos que o Sonnet.

**Checklist Módulo 4:**
- [ ] Módulo HTTP criado com URL da Anthropic
- [ ] Headers configurados (x-api-key, anthropic-version, content-type)
- [ ] Body montado com variáveis do Iterator mapeadas
- [ ] Testou e recebeu JSON de classificação do Claude

---

### Módulo 5 — Router (separa qualificados dos descartados)

**Passo a passo no Make:**
1. Clique em "+" após o Claude
2. Busque "Flow Control" → selecione "Router"
3. Isso cria dois caminhos: um para qualificados e um para descartados

**Configuração do caminho "qualificado":**
1. Clique na seta do primeiro caminho
2. Clique em "Set up a filter"
3. Nome do filtro: "Lead Qualificado"
4. Condição: `{{4.data.content[].text}}` contém `"qualificado"`

**Configuração do caminho "descartado":**
1. No segundo caminho, adicione um módulo Google Sheets
2. Registre na planilha com status "descartado"
3. Encerre esse caminho

**Checklist Módulo 5:**
- [ ] Router criado com dois caminhos
- [ ] Filtro de qualificados configurado
- [ ] Caminho de descartados registra na planilha e encerra

---

### Módulo 6 — Verifica se tem site (HTTP GET)

Só para leads qualificados. Confirma se o site existe ou não.

**Passo a passo no Make:**
1. Após o router (caminho qualificado), adicione HTTP → "Make a request"
2. Configure:
   - **URL:** `{{3.website}}` (o website da empresa do Iterator)
   - **Method:** GET
   - **Follow Redirect:** Sim
   - **Return error response:** Sim (importante!)
3. Isso vai retornar o status HTTP (200 = tem site, 404/0 = sem site)

**Checklist Módulo 6:**
- [ ] Módulo HTTP de verificação criado
- [ ] URL mapeada para o website da empresa
- [ ] Configurado para não quebrar quando o site não existe
- [ ] Testou com empresa que tem site e empresa que não tem

---

### Módulo 7 — Claude gera o site HTML

Esse é o módulo mais importante. O Claude vai criar o site personalizado.

**Passo a passo no Make:**
1. Adicione HTTP → "Make a request"
2. Configure igual ao Módulo 4 (mesmos headers da Anthropic)
3. Use o modelo `claude-sonnet-4-6` aqui (precisa de mais capacidade para gerar código)

**Body da requisição:**
```json
{
  "model": "claude-sonnet-4-6",
  "max_tokens": 8000,
  "messages": [
    {
      "role": "user",
      "content": "Crie um site HTML completo para esta empresa. O site deve estar 100% em um único arquivo index.html com CSS e JavaScript embutidos.\n\nDados da empresa:\n- Nome: {{3.name}}\n- Categoria: {{1.nicho}}\n- Cidade: {{1.cidade}}\n- Telefone: {{3.formatted_phone_number}}\n- Endereço: {{3.formatted_address}}\n\nRequisitos obrigatórios:\n1. Design moderno, responsivo e mobile-first\n2. Header com logo em texto e menu de navegação\n3. Seção Hero com chamada para ação e botão de contato\n4. Seção Sobre com texto genérico adequado para {{1.nicho}}\n5. Seção Serviços com 4 cards de serviços típicos de {{1.nicho}}\n6. Seção Depoimentos com 3 depoimentos fictícios realistas\n7. Seção Contato com formulário simples e mapa placeholder\n8. Footer com dados da empresa\n9. Botão flutuante verde do WhatsApp no canto inferior direito linkando para https://wa.me/55{{3.formatted_phone_number}}\n10. Paleta de cores profissional adequada para {{1.nicho}}\n11. Google Fonts via CDN (escolha fonte adequada)\n12. Font Awesome via CDN para ícones\n13. Animações sutis de entrada com CSS\n14. Sem dependências externas além de Google Fonts e Font Awesome\n\nRetorne APENAS o código HTML completo, começando com <!DOCTYPE html> e terminando com </html>. Nenhum texto antes ou depois."
    }
  ]
}
```

**Checklist Módulo 7:**
- [ ] Módulo criado com modelo claude-sonnet-4-6
- [ ] max_tokens em 8000 (site grande precisa de espaço)
- [ ] Todos os dados da empresa mapeados no prompt
- [ ] Testou e recebeu HTML válido na resposta
- [ ] Abriu o HTML no navegador e está bonito

---

### Módulo 8 — Deploy no Netlify

Pega o HTML gerado e coloca online com uma URL pública.

**Passo a passo no Make:**
1. Adicione HTTP → "Make a request"
2. Configure:
   - **URL:** `https://api.netlify.com/api/v1/sites`
   - **Method:** POST
   - **Headers:**
     - `Authorization`: `Bearer SEU_TOKEN_NETLIFY`
     - `Content-Type`: `application/zip`
3. **Body:** aqui é o truque — você precisa enviar o HTML como um arquivo ZIP

**Como montar o ZIP no Make:**

O Make não tem módulo nativo de ZIP, então use a seguinte alternativa:

**Alternativa simples — Netlify via form upload:**
```
POST https://api.netlify.com/api/v1/sites/{site_id}/deploys

Headers:
  Authorization: Bearer SEU_TOKEN
  Content-Type: application/zip
  
Body: [arquivo zip com o index.html]
```

**Alternativa mais fácil — Criar site com deploy direto:**
1. Primeiro cria o site:
```json
POST https://api.netlify.com/api/v1/sites
{
  "name": "preview-{{3.name | replace(' ', '-') | lowercase}}"
}
```
2. Pega o `site_id` da resposta
3. Faz o deploy via drag-and-drop da API

> **Dica prática:** Para simplificar, use o módulo "Netlify" nativo do Make se aparecer nas integrações. Se não, considere usar o **Cloudflare Pages** que tem API mais simples para upload direto de HTML.

**Checklist Módulo 8:**
- [ ] Token do Netlify configurado
- [ ] Site criado via API (guarde o site_id)
- [ ] Deploy feito com o HTML gerado
- [ ] URL pública gerada e salva para o próximo passo
- [ ] Testou abrindo a URL no navegador

---

### Módulo 9 — Claude escreve o e-mail

Com a URL do preview em mãos, o Claude personaliza o e-mail de prospecção.

**Passo a passo no Make:**
1. Adicione HTTP → "Make a request"
2. Use o modelo `claude-haiku-4-5-20251001` (suficiente para e-mail)

**Body da requisição:**
```json
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 500,
  "messages": [
    {
      "role": "user",
      "content": "Escreva um e-mail de prospecção para esta empresa.\n\nDados:\n- Nome da empresa: {{3.name}}\n- Segmento: {{1.nicho}}\n- Cidade: {{1.cidade}}\n- Link do site que criei para eles: {{8.deploy_url}}\n\nRegras do e-mail:\n1. Assunto curto e específico (não genérico)\n2. Corpo com no máximo 120 palavras\n3. Tom informal e direto\n4. Mencione que o site já está pronto no link\n5. Não fale em preço\n6. Termine com uma pergunta simples\n7. Assine como: Equipe [Seu Nome]\n\nRetorne APENAS este JSON:\n{\"assunto\": \"...\", \"corpo\": \"...\"}"
    }
  ]
}
```

**Checklist Módulo 9:**
- [ ] Módulo criado com Haiku
- [ ] URL do preview mapeada da resposta do Netlify
- [ ] Testou e recebeu JSON com assunto e corpo
- [ ] Leu o e-mail gerado e está natural e convincente

---

### Módulo 10 — Envia o e-mail pelo Brevo

**Passo a passo no Make:**
1. Adicione HTTP → "Make a request"
2. Configure:
   - **URL:** `https://api.brevo.com/v3/smtp/email`
   - **Method:** POST
   - **Headers:**
     - `api-key`: SUA_CHAVE_BREVO
     - `content-type`: `application/json`

**Body da requisição:**
```json
{
  "sender": {
    "name": "Seu Nome",
    "email": "seuemail@dominio.com"
  },
  "to": [
    {
      "email": "{{3.email}}",
      "name": "{{3.name}}"
    }
  ],
  "subject": "{{parse_json(9.data.content[].text).assunto}}",
  "textContent": "{{parse_json(9.data.content[].text).corpo}}"
}
```

**Checklist Módulo 10:**
- [ ] Chave do Brevo configurada
- [ ] Remetente verificado no Brevo
- [ ] Assunto e corpo mapeados da resposta do Claude
- [ ] Testou enviando para seu próprio e-mail
- [ ] E-mail chegou na caixa de entrada (não no spam)

---

### Módulo 11 — Registra na planilha Google Sheets

Salva tudo para controle e acompanhamento futuro.

**Passo a passo no Make:**
1. Adicione "Google Sheets" → "Add a Row"
2. Conecte sua conta Google
3. Selecione a planilha e aba criada na Fase 0
4. Mapeie as colunas:

| Coluna na planilha | Valor no Make |
|-------------------|--------------|
| Data | `{{now}}` |
| Nome | `{{3.name}}` |
| Categoria | `{{1.nicho}}` |
| Cidade | `{{1.cidade}}` |
| Telefone | `{{3.formatted_phone_number}}` |
| E-mail | `{{3.email}}` |
| Status Site | `{{parse_json(4.data.content[].text).website_status}}` |
| URL Preview | `{{8.deploy_url}}` |
| E-mail Enviado | `sim` |
| Status Lead | `novo` |

**Checklist Módulo 11:**
- [ ] Google Sheets conectado ao Make
- [ ] Planilha e aba corretas selecionadas
- [ ] Todas as colunas mapeadas
- [ ] Testou e a linha apareceu na planilha

---

## FASE 2 — Testes antes de rodar pra valer

Antes de mandar para 100 empresas, faça esses testes:

### Teste 1 — Roda o fluxo com 1 empresa
- [ ] Disparou o webhook com `"limite": 1`
- [ ] O fluxo rodou sem erros
- [ ] O site HTML foi gerado e está bonito no navegador
- [ ] O deploy no Netlify criou uma URL pública
- [ ] O e-mail foi enviado para o seu próprio e-mail de teste
- [ ] A linha foi registrada na planilha

### Teste 2 — Roda com 5 empresas
- [ ] Disparou com `"limite": 5`
- [ ] Todos os módulos rodaram sem erros
- [ ] 5 linhas apareceram na planilha
- [ ] Verificou que os e-mails não caíram no spam
- [ ] Os sites gerados estão diferentes e personalizados

### Teste 3 — Roda com 20 empresas
- [ ] Disparou com `"limite": 20`
- [ ] Monitorou o fluxo no Make em tempo real
- [ ] Verificou o custo na Anthropic (deve ser < $2)
- [ ] Verificou o custo no Google Cloud (deve ser < $0,05)
- [ ] Sem erros críticos

---

## FASE 3 — Otimizações importantes

### 3.1 — Tratamento de erros

Adicione módulo de erro em cada chamada HTTP crítica:

**Checklist de error handling:**
- [ ] Módulo de fallback para quando o Claude não retornar JSON válido
- [ ] Módulo de fallback para quando o Netlify falhar no deploy
- [ ] Módulo que registra erros na planilha com status "erro"
- [ ] Alerta por e-mail quando mais de 3 erros seguidos acontecerem

### 3.2 — Anti-spam e entregabilidade

- [ ] Configurou SPF no DNS do seu domínio
- [ ] Configurou DKIM no DNS do seu domínio
- [ ] Configurou DMARC no DNS do seu domínio
- [ ] Está enviando no máximo 50 e-mails por hora
- [ ] Tem link de descadastro no rodapé do e-mail
- [ ] Testou entregabilidade em mail-tester.com (meta: acima de 8/10)

### 3.3 — Variação nos e-mails

Para evitar filtros de spam com e-mails idênticos:
- [ ] Criou 3 variações diferentes do prompt de e-mail
- [ ] Configurou o Make para escolher aleatoriamente entre elas
- [ ] Testou que os e-mails gerados são diferentes entre si

---

## FASE 4 — Escala e acompanhamento

### Rotina semanal recomendada

**Segunda-feira:**
- [ ] Define nicho e cidade da semana
- [ ] Dispara o fluxo para 50 empresas
- [ ] Verifica planilha: todos os leads foram processados?

**Quarta-feira:**
- [ ] Verifica respostas recebidas na caixa de entrada
- [ ] Atualiza status na planilha para quem respondeu
- [ ] Faz follow-up manual com os interessados

**Sexta-feira:**
- [ ] Dispara novo lote para 50 empresas
- [ ] Revisa métricas da semana:
  - Quantos leads processados
  - Quantos e-mails enviados
  - Taxa de abertura (via Brevo dashboard)
  - Quantas respostas recebidas
  - Quantos fechamentos

### Métricas para acompanhar

| Métrica | Referência inicial | Sua meta |
|---------|-------------------|----------|
| Taxa de abertura de e-mail | 20-30% | > 35% |
| Taxa de resposta | 2-5% | > 5% |
| Taxa de conversão (lead → cliente) | 10-20% das respostas | > 15% |
| Custo por cliente fechado | ~R$25-50 | < R$100 |

---

## Referência Rápida — Onde fica cada coisa

| O que você precisa | Onde achar |
|---------------------|-----------|
| Chave do Claude | console.anthropic.com → API Keys |
| Chave do Google Places | console.cloud.google.com → Credenciais |
| Token do Netlify | app.netlify.com → User Settings → Applications |
| Chave do Brevo | app.brevo.com → SMTP & API → API Keys |
| Custo Claude do mês | console.anthropic.com → Billing |
| Custo Google do mês | console.cloud.google.com → Billing |
| Status dos envios | app.brevo.com → Campaigns → Transactional |
| Seus leads | Google Sheets (planilha criada na Fase 0) |

---

## Próximos Passos

1. **Hoje:** Crie todas as contas da Fase 0 e pegue as chaves de API
2. **Esta semana:** Monte os Módulos 1 a 5 no Make e teste o filtro
3. **Próxima semana:** Monte os Módulos 6 a 11 e faça os testes da Fase 2
4. **Em 2 semanas:** Primeiro lote real de 50 empresas

Qualquer módulo que travar, me manda o erro que eu resolvo.
