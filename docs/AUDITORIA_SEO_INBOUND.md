# BLACKHILL CAPITAL

## Auditoria de SEO e Visibilidade Digital · Estratégia de Inbound Institucional

**Classificação:** Uso Interno — Decisão do Sócio-Fundador
**Data:** 30 de outubro de 2026
**Escopo:** Diagnóstico, prioridades e recomendações. Nenhuma alteração de DNS, nenhuma ferramenta de rastreamento instalada, nada publicado.

---

## Sumário executivo

A Blackhill Capital é, hoje, **invisível para busca**. Não é uma questão de posição ruim: é ausência. Uma consulta pelos termos centrais da casa — Blackhill Capital, precatórios, NPL, distressed, Brasil — não retorna nenhuma página da Blackhill. O espaço é ocupado por `capitalaberto.com.br`, `acionista.com.br`, TMA Brasil, `judit.io` e Garrigues.

A causa imediata é simples e já está resolvida na branch: o site em produção **não tem `robots.txt`, não tem `sitemap.xml`, não tem canonical, não tem hreflang e não tem Open Graph**. Para um buscador, ele é um site de uma página só, em um idioma só, sem mapa e sem identidade declarada.

A causa estrutural é mais difícil e precisa de decisão: **"Blackhill" não é um nome distintivo na categoria**. Existe a Blackhill Partners, banco de special situations de Dallas com histórico de restructuring e distressed M&A, cuja operação de reestruturação foi vendida à Stephens Inc. em 2018 — e há registro de imprensa setorial de uma "Blackhill" atuando com a Starboard no Brasil. A busca por "Blackhill Advisers distressed credit" devolve, majoritariamente, a Oak Hill Advisors.

Isso significa que a estratégia de inbound **não pode se apoiar no nome da marca**. Precisa se apoiar na categoria técnica: quem procura "venda de carteira NPL" ou "como ceder precatório" não está procurando a Blackhill — e é exatamente essa pessoa que precisa encontrá-la.

**Três decisões bloqueiam tudo o mais:** publicar a branch, escolher o domínio canônico e resolver o domínio de envio do formulário.

---

## 1. Indexação, sitemap, metadados e PT/EN

### 1.1 Produção — o que o Google vê hoje

| Sinal | Estado |
| :-- | :-- |
| `robots.txt` | **404** |
| `sitemap.xml` | **404** |
| `canonical` | ausente |
| `hreflang` | ausente |
| Open Graph | ausente |
| `google-site-verification` | ausente |
| Idiomas | português apenas |
| Dados estruturados | nenhum |

Sem sitemap e sem robots, a descoberta depende inteiramente de links externos — que praticamente não existem. Sem canonical, variações de URL competem entre si. Sem Open Graph, qualquer link compartilhado no LinkedIn renderiza sem card.

### 1.2 Branch `redesign/reposicionamento-2026` — o que vai ao ar

| Sinal | Estado |
| :-- | :-- |
| `robots.txt` | gerado, com `Allow: /` e declaração do sitemap |
| `sitemap.xml` | 46 URLs (23 rotas × 2 idiomas), com `xhtml:link` de alternância |
| `canonical` | por página, absoluto |
| `hreflang` | `pt-BR`, `en` e `x-default` → raiz portuguesa |
| Open Graph | título, descrição, URL e **imagem 1200×630** por idioma |
| Dados estruturados | `FinancialService`, `BreadcrumbList`, `Article` nos insights |
| Idiomas | PT na raiz, EN em `/en` |

Verificado por 1000 asserções automatizadas a cada build.

> **Conclusão da seção 1.** A diferença entre produção e branch não é incremental — é a diferença entre não ser rastreável e ser. **Publicar a branch é, isoladamente, a ação de maior impacto desta auditoria.** Nenhuma recomendação adiante produz efeito antes dela.

---

## 2. Google Search Console — como integrar

### 2.1 Situação atual

Verifiquei os dois artefatos que uma propriedade verificada deixa visíveis de fora:

- **Registros TXT em `blackhill.com.br`: nenhum.** O domínio não tem *nenhum* TXT — nem verificação, nem SPF.
- **Meta `google-site-verification` no site em produção: ausente.**

Não tenho acesso à sua conta do Search Console, então não afirmo que nenhuma propriedade existe. Afirmo o verificável: **não há, hoje, nenhum artefato de verificação em DNS nem no HTML**. Se uma propriedade foi criada no passado, ela não está verificada por nenhum desses dois métodos.

### 2.2 Os dois caminhos

| | Propriedade de domínio | Propriedade por prefixo de URL |
| :-- | :-- | :-- |
| Cobertura | `blackhill.com.br` inteiro: http/https, com e sem www, todos os subdomínios | apenas o prefixo exato declarado |
| Verificação | registro **TXT no DNS** | meta tag no HTML, ou arquivo, ou Google Analytics |
| DNS | **exige alteração** (KingHost) | não exige |
| Recomendação | preferível no médio prazo | **caminho imediato** |

Como você pediu para não alterar o DNS, **preparei o caminho sem DNS**: a variável `GOOGLE_SITE_VERIFICATION` emite a meta tag quando preenchida e não emite nada quando vazia. O encaixe está no código e inerte.

**Passo a passo:**

1. No Search Console, adicionar propriedade → **Prefixo do URL** → `https://blackhill.com.br`.
2. Escolher o método **Tag HTML** e copiar o valor do atributo `content`.
3. Definir `GOOGLE_SITE_VERIFICATION` nas variáveis de ambiente do projeto na Vercel.
4. Publicar (após sua aprovação) e clicar em Verificar.
5. Enviar `https://blackhill.com.br/sitemap.xml` em Sitemaps.
6. Repetir para `https://blackhill.com.br/en` se quiser relatórios separados por idioma — opcional, o sitemap já cobre ambos.

Quando quiser a propriedade de domínio (mais completa), é um único TXT no apex em KingHost. Não executei.

---

## 3. `blackhill.com.br` × `blackhilladvisers.com`

### 3.1 O que apurei

| | `blackhill.com.br` | `blackhilladvisers.com` |
| :-- | :-- | :-- |
| Hospedagem | Vercel (`216.198.79.1`) | HostGator (`66.235.200.171`) |
| DNS | KingHost | HostGator |
| Proteção | nenhuma | **Cloudflare, com desafio interativo** |
| TXT | **nenhum** | `v=spf1 a mx include:websitewelcome.com ~all` |
| MX | **nenhum** | implícito no SPF |
| Visibilidade em busca | nula | nula |

Não consegui ler o conteúdo de `blackhilladvisers.com`: o Cloudflare apresenta um desafio interativo que não transpus — e não vou transpor. **Preciso que você me diga o que esse domínio serve hoje**, ou me autorize a tentar de novo com mais paciência no navegador.

### 3.2 Os quatro riscos

**1 · Diluição de autoridade.** Dois domínios para uma instituição dividem links, menções e sinais. Em um nicho onde o volume de busca é baixo e a autoridade se constrói devagar, dividir é caro.

**2 · Conteúdo duplicado.** Se os dois sites descreverem a mesma casa, o Google escolhe um e ignora o outro — e a escolha não é sua.

**3 · O desafio Cloudflare.** Uma interstitial de verificação na raiz é risco de rastreamento. O Google costuma ser liberado, mas não é garantido, e a página de desafio que eu recebi carrega `noindex,nofollow`. Só o Search Console daquele domínio confirmaria se o Googlebot passa.

**4 · Colisão de marca — o risco que não está sob seu controle.** "Blackhill" já tem histórico de busca em restructuring e distressed, por causa da Blackhill Partners (Dallas), e há registro de imprensa de uma "Blackhill" associada à Starboard no Brasil. Buscar "Blackhill Advisers" devolve Oak Hill Advisors.

### 3.3 Recomendação

**Eleger `blackhill.com.br` como domínio canônico único.** Três razões: já está na Vercel com o site novo; o `.com.br` sinaliza o mercado que é a tese central da casa; e concentra todo o sinal em um só lugar.

Para `blackhilladvisers.com`, por ordem de preferência:

1. **301 permanente** para `blackhill.com.br` — transfere o pouco sinal que exista e elimina a ambiguidade.
2. **Estacionar** com `noindex`, mantendo a titularidade defensiva do nome.
3. **Manter os dois**, apenas se tiverem públicos genuinamente distintos — e, nesse caso, com conteúdo distinto e canonical cruzado explícito. É a opção mais cara de manter e a mais fácil de errar.

**Não recomendo** manter dois sites institucionais descrevendo a mesma casa.

> Sobre a colisão de marca: não há solução de SEO. Há mitigação — ancorar a presença na **categoria técnica** e na **entidade jurídica** (razão social, CNPJ, endereço, perfis oficiais), não no nome isolado. É o que a seção 5 trata.

---

## 4. Dependência operacional que a auditoria revelou

`blackhill.com.br` **não tem SPF e não tem MX**. O `.env.example` sugere enviar o formulário a partir de `site@blackhill.com.br` — e, sem SPF e DKIM nesse domínio, as notificações tendem a cair em spam ou serem rejeitadas.

Três saídas, todas exigindo DNS (que não toquei):

1. Autenticar `blackhill.com.br` no Resend (SPF + DKIM no apex ou em subdomínio de envio, p. ex. `mail.blackhill.com.br`).
2. Enviar a partir de `blackhillcapital.com.br`, que já tem infraestrutura de e-mail — exige adicionar o `include` do Resend ao SPF existente do Microsoft 365, **sem quebrar o `-all` atual**.
3. Usar um subdomínio dedicado de envio, que é o mais limpo operacionalmente e não interfere no e-mail corporativo.

**Isto não é detalhe de SEO: é o que separa um lead recebido de um lead perdido.** O site agora é canal de originação; sem domínio de envio autenticado, o canal não entrega.

---

## 5. SEO para busca especializada em crédito estressado

### 5.1 A premissa

Ninguém busca "Blackhill Capital". Buscam o problema. A arquitetura comercial implementada já acerta nisso — cada frente abre pelo problema, não pela capacidade. Falta alinhar o vocabulário ao que o mercado efetivamente digita.

### 5.2 Clusters de intenção

**Português — intenção comercial (prioridade máxima):**

| Cluster | Consultas típicas | Página |
| :-- | :-- | :-- |
| Cessão de NPL | venda de carteira NPL · ceder carteira inadimplente · comprar carteira NPL | `/advisory/npl-distressed` |
| Precatórios | como vender precatório · cessão de precatório · antecipar precatório | `/advisory/precatorios` |
| Reestruturação | assessoria reestruturação de dívida · renegociação de passivo bancário | `/advisory/restructuring` |
| Dívida ativa | securitização dívida ativa municipal · LC 208/2024 | `/advisory/public-receivables` |
| Crédito estruturado | estruturar FIDC NP · funding com lastro em recebíveis | `/advisory/structured-credit` |
| Claims | antecipação de crédito judicial · cessão de crédito trabalhista | `/advisory/claims` |

**Inglês — investidor internacional:**

Brazil NPL portfolio sale · Brazilian distressed credit advisory · precatórios investment Brazil · Brazil special situations advisor · LC 208/2024 municipal receivables securitisation.

### 5.3 Recomendações técnicas

**a) Publicar a branch.** Já dito; é a única com efeito de ordem de grandeza.

**b) Declarar a entidade com `sameAs`.** O JSON-LD atual declara razão social, CNPJ e endereço — bom. Falta `sameAs`, que é como o Google amarra o site a uma entidade real e a distingue de homônimos. **Este é o antídoto direto à colisão com a Blackhill Partners.** Preciso das URLs oficiais (LinkedIn da empresa, qualquer registro ou diretório setorial).

> ⚠️ **Pendência de precisão.** Há em `src/content/site.ts` um campo `linkedin` com o valor `linkedin.com/company/blackhill-capital`, que **eu presumi e não verifiquei**. Ele não é renderizado em lugar nenhum hoje, então não há informação errada publicada — mas precisa ser confirmado ou corrigido antes de entrar no `sameAs`.

**c) Preservar os termos brasileiros no inglês.** Já aplicado em "Precatórios (Court-Ordered Public Claims)". Vale estender a `dívida ativa` e `FIDC`: o analista estrangeiro que pesquisa o mercado brasileiro digita o termo brasileiro depois do primeiro contato com ele.

**d) Off-page é o fator dominante.** Para uma boutique, backlinks e menções pesam mais que qualquer ajuste on-page. O memorando de posicionamento já havia recomendado LinkedIn técnico assinado por você. Reforço, com uma precisão: o valor de SEO não está no post — está no **link do post para a página de frente correspondente**.

**e) Não fazer:** blog de atualidades (a arquitetura aprovada o veda na fase 1 e ele exige manutenção contínua), páginas por cidade, e qualquer conteúdo que precise prometer resultado para converter — proibido pelo Standard §06 e §08.

---

## 6. Estratégia de conteúdo PT/EN

### 6.1 Três camadas

| Camada | Função | Onde | Estado |
| :-- | :-- | :-- | :-- |
| **Páginas de autoridade** | capturar intenção comercial | `/advisory/*` | ✅ 7 publicadas |
| **Explicadores** | capturar intenção informacional e sustentar autoridade | `/insights/*` | ✅ 5 publicados |
| **Conteúdo datado** | presença e geração de links | LinkedIn | ⏳ a ativar |

A divisão respeita a arquitetura aprovada: o site guarda conteúdo **durável**; o LinkedIn carrega o **datado**.

### 6.2 Expansão dos insights — 7 propostos, 2 trimestres

Cada um amarrado a uma frente, cada um em PT e EN, todos dentro do Standard §06:

| # | Tema | Frente | Intenção |
| :-- | :-- | :-- | :-- |
| 06 | Como funciona a cessão de uma carteira NPL | NPL | comercial |
| 07 | O que é um FIDC NP e quando faz sentido | Crédito estruturado | informacional |
| 08 | EC 113/2021 e a atualização de precatórios | Precatórios | informacional |
| 09 | Due diligence de carteira: o que se verifica | NPL | comercial |
| 10 | Reestruturação extrajudicial × recuperação judicial | Reestruturação | comercial |
| 11 | LC 208/2024: o que o município precisa aprovar | Dívida ativa | comercial |
| 12 | O papel do servicer na curva de recuperação | Servicing | informacional |

**Cadência sugerida:** um por quinzena, PT e EN simultâneos. Não publicar EN atrasado em relação ao PT — hreflang incompleto é pior que ausência de versão.

### 6.3 Prioridade da versão inglesa

Para o investidor internacional, quatro páginas carregam o peso: `/en/advisory/npl-distressed`, `/en/advisory/precatorios`, `/en/market` e `/en/investors`. São as que devem receber o conteúdo mais denso e os links externos.

---

## 7. Captura da origem dos contatos — implementado

Implementado e testado, **sem nenhuma ferramenta de rastreamento**.

### Como funciona

Os parâmetros de campanha presentes na URL de chegada (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`), a página de entrada e o **domínio** referenciador são lidos uma vez, na primeira página da visita, e guardados no `sessionStorage` do próprio navegador. Viajam com o formulário quando — e apenas quando — ele é enviado, e chegam como um bloco "Origem do contato" no e-mail de notificação.

### O que ele não é

Sem cookie. Sem pixel. Sem terceiro. Sem perfilamento. Sem requisição de rede. **Verificado em navegador:** após uma visita com UTMs, `document.cookie` e `localStorage` permanecem vazios.

### Verificações executadas

| Cenário | Resultado |
| :-- | :-- |
| Chegada com UTMs em `/advisory/npl-distressed`, duas navegações, até `/contact` | origem preservada e presente nos campos ocultos |
| Visita direta, sem campanha e sem referenciador externo | **nada gravado** — `sessionStorage` vazio |
| Cookies e `localStorage` após visita com campanha | **ambos vazios** |
| Referenciador | apenas o host; a URL completa nunca é guardada |
| Referenciador interno | descartado — navegação no próprio site não é origem |

### Uso

A origem é **contexto no e-mail**, não entrada de decisão. Não classifica, não pontua e não segmenta o visitante.

---

## 8. LGPD

A política de privacidade foi atualizada **na mesma alteração** do código, conforme a regra registrada no `CLAUDE.md`. Os itens 2, 3 e 4 agora descrevem, em português claro: o que é coletado, para quê, onde fica e quando é transmitido.

**Por que isto é conservador:**

- **Minimização.** Só o necessário para atribuir um contato. Do referenciador, apenas o host.
- **Finalidade declarada.** Responder ao contato; a origem serve só para entender o caminho.
- **Base legal.** Consentimento expresso no envio — a caixa já existente, agora cobrindo também a origem.
- **Sem rastreamento.** Não há cookie, logo não há banner de consentimento a exibir. A política afirma isso, e é literalmente verdade.
- **Sem registro de quem não envia.** Quem navega e não envia nada não deixa registro em lugar algum. Testado.
- **Retenção.** `sessionStorage` morre com a aba. O que persiste é a mensagem recebida, sob a política já vigente.

**Se um dia instalar analytics**, três coisas passam a ser obrigatórias ao mesmo tempo: atualizar os itens 4 e 5 da política, implantar banner de consentimento com recusa real, e revisar a base legal. A regra está no `CLAUDE.md` para que não se perca.

---

## 9. Prioridades

### P0 — bloqueiam todo o resto

| # | Ação | Dono |
| :-- | :-- | :-- |
| 1 | **Publicar a branch.** Sem robots, sitemap, canonical e hreflang, nenhuma outra ação tem efeito. | você aprova; o push segue bloqueado |
| 2 | **Decidir o domínio canônico** e o destino de `blackhilladvisers.com` | você |
| 3 | **Autenticar o domínio de envio** (SPF/DKIM) e configurar o Resend | você — exige DNS |

### P1 — nas duas semanas seguintes à publicação

| # | Ação |
| :-- | :-- |
| 4 | Criar a propriedade no Search Console e preencher `GOOGLE_SITE_VERIFICATION` |
| 5 | Enviar o sitemap e acompanhar a cobertura |
| 6 | Confirmar as URLs oficiais e adicionar `sameAs` ao JSON-LD |
| 7 | Ativar o LinkedIn institucional, com links para as páginas de frente |

### P2 — trimestre

| # | Ação |
| :-- | :-- |
| 8 | Publicar os insights 06 a 12, PT e EN simultâneos |
| 9 | Primeira leitura de Search Console: quais consultas aparecem, em que posição |
| 10 | Revisar o vocabulário das frentes contra as consultas reais observadas |

---

## 10. O que eu não fiz

- **Não alterei DNS.** Nenhum registro foi criado, alterado ou removido.
- **Não instalei rastreamento.** Nenhum analytics, pixel, tag manager ou cookie.
- **Não publiquei nada.** Sem push, sem deploy; `main` e produção intocadas.
- **Não transpus o desafio Cloudflare** de `blackhilladvisers.com`, e por isso não sei o que aquele domínio serve.
- **Não acessei sua conta do Search Console** — não tenho credencial. O que afirmo sobre verificação é o que se observa de fora: ausência de TXT e de meta tag.

---

*Auditoria elaborada a partir de consultas DNS públicas, inspeção do site em produção, do código da branch e de busca na web. As lacunas estão declaradas como lacunas.*
