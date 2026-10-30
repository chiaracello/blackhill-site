# BLACKHILL CAPITAL — WEBSITE

## Diagnóstico Consolidado · Posicionamento Recomendado · Arquitetura Proposta

**Classificação:** Uso Interno — Decisão do Sócio-Fundador
**Data:** 30 de outubro de 2026
**Escopo:** Entrega 1 de 1 — diagnóstico prévio. Nenhuma alteração de código, branch ou deploy foi realizada.

> **Governança aplicada.** O `__BLACKHILL_KNOWLEDGE_HUB.md` v2.1 determina: *"Toda nova instrução que divergir do Brand & Communication Standard v1.0 deve ser sinalizada e o Standard prevalece até validação expressa de Marcello Chiara."* Este documento sinaliza **uma divergência material** entre o briefing de redesign e o posicionamento aprovado (Seção 4). Nada será implementado sobre esse ponto sem validação expressa.

---

## 1. Fontes consultadas — o que foi efetivamente acessado

### 1.1 Acessado e lido integralmente

| Fonte | Origem | Data-base |
| :-- | :-- | :-- |
| `__BLACKHILL_KNOWLEDGE_HUB.md` **v2.1** — referência mestre | Google Drive (conector) | Jun/2026 |
| `Blackhill_Posicionamento_Institucional_2026-2031.docx` | `~/Downloads` | 20/Jun/2026 |
| `Blackhill_Brand_Communication_Standard_v1.docx` | `~/Downloads` | 14/Jun/2026 |
| `Blackhill_Arquitetura_Website.docx` | `~/Downloads` | Jun/2026 |
| Repositório `chiaracello/blackhill-site` (código integral) | GitHub | 22/Jun/2026 |
| Projeto Vercel `blackhill-site` + domínios + deployments | Vercel (team Blackhill Capital) | atual |
| Site em produção `blackhill.com.br` (HTML, headers, SEO) | HTTP | atual |
| `README.md` Finders e DealNorth (status real dos produtos) | repositórios locais | Out/2026 |

As **8 skills Blackhill** mapeadas no Hub estão ativas neste ambiente, e há **3 adicionais** não mapeadas (`blackhill-legal-claims`, `blackhill-special-situations`, `zerou-cfo-fpa-turnaround-advisor`). O mapa de skills do Hub v2.1 está desatualizado.

### 1.2 Disponível, não lido nesta fase

`Blackhill_Capital_Apresentacao_Institucional_2026.pptx`, `Blackhill_Capital_Institucional_v3_2026.pptx` e demais apresentações institucionais. Serão lidos na fase de redação de copy, se autorizado.

### 1.3 Não acessível — lacunas que bloqueiam o Pilar 2

O Claude Code **não tem acesso** aos projetos ou conversas do Claude. O acesso ao Knowledge Hub se deu pelo conector do Google Drive, que expõe o documento mestre — não o projeto. Consequência:

| Item do briefing | Situação no Knowledge Hub | Status |
| :-- | :-- | :-- |
| **XCurve** | Não consta. Único material: contrato de **venda da participação** da Blackhill na Xcurve para Lopes Cardi (minuta, Mai/2025) e memória de acerto de contas societário (Mai/2026). | 🔴 **Bloqueado** |
| **Finders** | Não consta no Hub. README: Fase 11, *"Nada foi publicado"*. | 🟡 Definir exposição |
| **DealNorth** | Não consta no Hub. README: Fase 1 (Foundation). | 🟡 Definir exposição |
| **Blackhill Advisors** | **Não consta em nenhuma fonte.** Há relatórios de comitê de Nov/2025 sob esse nome. | 🔴 **Bloqueado** |
| XCurve · Finders · DealNorth — produtos, público, diferenciais | Inexistente em fonte institucional | 🔴 **Bloqueado** |

**Não há base documental para escrever o Pilar 2.** O Hub v2.1 registra apenas duas relações societárias: **Enforce/BTG** (parceria contratual, sem participação) e **ZEROU/NW Soluções** (opção de até 33,33% após metas + vesting de 24 meses). Nenhuma das três plataformas do briefing aparece.

### 1.4 Divergências entre fontes históricas e atuais

1. **Duas cópias do Knowledge Hub no Drive** com 2h18 de diferença (15/Jun/2026). Adotei a mais recente (23:19). Recomendo arquivar a anterior para eliminar ambiguidade de fonte mestre.
2. **XCurve:** a minuta de Mai/2025 vende a participação da Blackhill. O briefing a lista como investimento vigente. **Contradição a resolver antes de qualquer menção pública.**
3. **Sede:** o Hub registra Alameda Rio Negro 1030, Alphaville, Barueri/SP. O site publica apenas "São Paulo · Brasil".
4. **Domínio × e-mail:** o site é `blackhill.com.br`; o e-mail publicado no rodapé é `@blackhillcapital.com.br`.
5. **Arquitetura aprovada × site construído:** o documento aprovado define 7 itens de menu (*Investment Strategies*, *Transactions & Opportunities*). O site publica 8, renomeados (*Practice Areas*, *Origination & Access*) e com *Why Blackhill* e *Insights* adicionados. O documento veda blog/notícias na fase 1; *Insights* são explicadores estáticos — aceitável, mas é desvio não registrado.

---

## 2. Diagnóstico técnico do site atual

**Stack:** Next.js 16.2.9 (App Router, Turbopack) · React 19.2.4 · Tailwind CSS 4 · TypeScript 5 · Node 24.x
**Deploy:** Vercel, team `blackhill-capital`, projeto `blackhill-site` → `blackhill.com.br` + `www` (ambos verificados)
**Repositório:** `chiaracello/blackhill-site` — **público**, 1 commit único (*"Initial Blackhill website upload"*)
**Build:** `npx next build` → **exit 0**, 19 páginas estáticas. Site responde HTTP 200, `x-vercel-cache: HIT`.

A base técnica é sólida e moderna. Os problemas são de completude e governança, não de fundação.

### 🔴 Críticos

**C1 — O formulário de contato não envia nada. Leads estão sendo perdidos em produção.**
`components/ContactForm.tsx` executa `e.preventDefault()` e apenas muda o estado local para exibir *"Mensagem recebida. A Blackhill Capital entrará em contato em breve."* Não há `action`, Server Action, endpoint, atributos `name` nos campos nem persistência. **Toda mensagem enviada desde 22/Jun/2026 foi descartada silenciosamente, e o visitante recebeu confirmação de recebimento.** Para uma boutique cujo ativo é credibilidade institucional, é o achado de maior severidade — e é corrigível de forma isolada, sem depender do redesign.

**C2 — Ausência de LGPD.**
Não há política de privacidade, consentimento no formulário, nem aviso de tratamento confidencial. O documento de arquitetura aprovado exige: *"Toda página com formulário deve indicar tratamento confidencial dos dados enviados."* O rodapé previsto (*Compliance · Disclaimer · Política de Privacidade*) não foi implementado.

### 🟠 Altos

**A1 — Árvore de diretórios duplicada, com armadilha de manutenção.**
Existem `app/` + `components/` na raiz **e** `src/app/` + `src/components/` — 19 arquivos byte-a-byte idênticos em cada. O build confirma o comportamento real:

- o Next.js serve **`app/` da raiz** e **ignora `src/app/`** (código morto);
- `tsconfig.json` mapeia `@/*` → `./src/*`, portanto as páginas servidas importam de **`src/components/`**;
- logo, **`components/` na raiz também é código morto.**

Editar `components/Header.tsx` não produz efeito nenhum. Editar `src/app/page.tsx` não produz efeito nenhum. É uma armadilha silenciosa que precisa ser eliminada antes de qualquer trabalho de conteúdo.

**A2 — SEO institucional incompleto.**
`robots.txt` → **404**. `sitemap.xml` → **404**. Sem Open Graph, sem Twitter Card, sem `canonical`, sem JSON-LD `Organization`. Títulos e descriptions por página existem e estão bem escritos — essa parte está correta. O que falta é a camada que determina indexação e aparência em compartilhamento: hoje um link da Blackhill no LinkedIn ou WhatsApp renderiza sem card.

**A3 — Site monolíngue.**
O briefing exige português e inglês. Há apenas PT-BR, com strings fixas no JSX, `lang="pt-BR"` e nenhuma infraestrutura de rotas. Agravante de coerência: os **rótulos de navegação estão em inglês** (*About*, *Why Blackhill*, *Practice Areas*, *Companies*) sobre conteúdo integralmente em português. O Standard §3 define *"Português (Brasil) — acentuação rigorosa; termos técnicos em inglês preservados quando de uso corrente no mercado"*. *Practice Areas* e *Companies* não são termos técnicos de mercado — são rótulos traduzíveis.

### 🟡 Médios

**M1 — Acessibilidade.** Os `<label>` do formulário não têm `htmlFor`/`id`, logo não estão associados programaticamente aos campos. O botão do menu mobile mantém `aria-label="Abrir menu"` mesmo quando aberto e não expõe `aria-expanded`.

**M2 — Separação Mercado × Pipeline.** O card *"R$ 6B+ Dívida Ativa Municípios"* traz o rótulo *"Potencial em estruturação"*, que pode ser lido como pipeline da Blackhill. O Standard e o Hub exigem separação explícita entre **Mercado Endereçável** e **Pipeline Blackhill**. Os outros três cards e o caveat de fontes estão corretos.

**M3 — Rodapé marcado "Confidencial".** Um site público aberto não pode carregar a marcação `© Blackhill Capital · Confidencial`. O disclaimer de compliance ao lado está correto e aderente ao Standard.

**M4 — Sem portões de qualidade.** Nenhuma configuração de ESLint, nenhum teste, nenhum CI, repositório público com commit único. Qualquer regressão chega à produção sem barreira.

**M5 — Preview atrás do Vercel SSO.** `ssoProtection: all_except_custom_domains`. Os previews que você pediu para aprovação só abrem para membros do team — compartilhar com terceiros exige token de bypass. Decisão operacional para a fase de aprovação.

**M6 — Tipografia.** O Standard fixa **Arial**, e o site cumpre (`Arial, Helvetica, sans-serif`). Em tela, porém, Arial é o principal limitador da leitura "boutique internacional" pedida no briefing. **Não alterarei isso unilateralmente** — é cláusula do Standard. Ver decisão D6.

### ✅ O que está correto e deve ser preservado

- Paleta **exatamente** conforme o Standard: navy `#0D1B2E` / `#152236` / `#1E3047`, ouro `#C9A84C`. Ouro aplicado somente sobre navy — regra *"nunca ouro sobre branco"* respeitada.
- Tagline *"Onde capital encontra complexidade"* — ativo permanente de marca, conforme memorando.
- Hierarquia **núcleo → capacidades → complementares** já implementada na home com pesos visuais distintos: exatamente o que o memorando de posicionamento recomendou.
- Dados de mercado com fonte, data-base e caveat de não-representação de operações.
- Disclaimer de compliance do rodapé aderente ao Standard §1.
- Zero linguagem proibida: nenhum IRR/TIR, nenhuma promessa de retorno, nenhum nome de cedente, devedor ou investidor.
- Segmentação por persona na home (investidor / cedente / empresa), conforme arquitetura aprovada.

**Conclusão do diagnóstico de conteúdo:** o site atual é uma execução fiel e competente do posicionamento aprovado em Jun/2026. Ele não precisa ser refeito — precisa ser completado tecnicamente e **estendido** para acomodar o Pilar 2, que é a mudança real pedida.

---

## 3. A questão central: o que o briefing muda

| | Posicionamento aprovado (Jun/2026) | Briefing de redesign (Out/2026) |
| :-- | :-- | :-- |
| Categoria | Distressed & Judicial Claims **Advisor** | Financial Advisory **& Technology Investments** |
| Estrutura | Núcleo / capacidades / complementares | **Dois pilares** |
| Capital próprio | *"sem gestão de capital próprio"* | **Participações societárias** (XCurve, Finders, DealNorth) |
| Risco diagnosticado | Diluição por verticais em paridade | — |

O briefing não é um ajuste de design. É uma **mudança de categoria institucional**: de advisor puro para advisor + holding de participações em tecnologia.

---

## 4. 🔴 Divergência de governança — requer validação expressa

Apresentar *"Investments"* como pilar de peso equivalente ao advisory **contradiz quatro cláusulas vigentes**:

| Fonte | Cláusula |
| :-- | :-- |
| Standard §1 — Definição Operacional | *"Atuamos como advisor, intermediário e estruturador — **sem gestão de capital próprio** e sem conflito de interesses entre cedente e investidor."* |
| Standard §1 — Pilar *Especialização* | *"Foco exclusivo em crédito complexo. **Sem dispersão para crédito convencional ou equity.**"* |
| Standard §4 — Erros de posicionamento | *"**'Investimos em'** — a Blackhill não investe capital próprio nas operações que assessora"*; *"**'Gestora' ou 'Fundo'** — a Blackhill não é gestora regulada de capital de terceiros"* |
| Posicionamento 2026–2031, Fase 4 | Recomenda a alternativa **C**, rejeitando explicitamente **B — *Alternative Credit Platform*** porque *"sem capital próprio sob gestão, a palavra 'plataforma' pode gerar expectativa equivocada de AUM"* |

E contradiz o **próprio site em produção**, que afirma hoje, na faixa de confiança da home: **"Advisor Independente · Sem Capital Próprio · Sem Conflito de Interesse"**.

**O risco não é estético, é de credibilidade.** Um cedente que leia *"sem capital próprio"* e, duas seções abaixo, *"nossos investimentos: XCurve, Finders, DealNorth"*, conclui que uma das duas afirmações é falsa. É precisamente o público que o Standard §2 descreve como exigente de *"clareza sobre o papel da Blackhill (advisor vs. parte vs. gestor)"*.

### A divergência é reconciliável — e o próprio briefing aponta como

O briefing instrui: *"Diferenciar corretamente a atividade de advisory dos investimentos e participações societárias."* Essa é a solução, e ela tem base literal no Standard.

A cláusula do Standard §4 é precisa: *"a Blackhill não investe capital próprio **nas operações que assessora**"*. Deter participação em empresas de tecnologia que **não são ativos de crédito intermediados pela Blackhill** não viola essa cláusula. O que viola é a **imprecisão** da afirmação atual — o absoluto *"Sem Capital Próprio"*, que o Pilar 2 torna literalmente falso.

**Resolução recomendada — três movimentos:**

1. **Reescrever a declaração de independência** do absoluto para o preciso:
   ~~"Sem Capital Próprio"~~ → **"Não investimos nas operações que assessoramos. Não gerimos capital de terceiros."**
   Mais forte, não mais fraco: enuncia a ausência de conflito com exatidão verificável, em vez de um absoluto que o próprio balanço contradiz.

2. **Não chamar o Pilar 2 de "Investments".** Em site institucional de crédito, *Investments* é lido como mandato de gestão — exatamente o erro de categoria que o Standard §4 proíbe e que o memorando rejeitou na alternativa B. Nomear pelo que factualmente é: **"Participações em Tecnologia"** / *Technology Ventures*. Declarar explicitamente que não constitui oferta, fundo ou mandato de gestão.

3. **Não dar paridade de navegação ao Pilar 2.** Dois pilares visualmente equivalentes reproduzem o erro central diagnosticado no memorando — *"seis verticais com peso narrativo igual não comunicam onde está o centro de gravidade"*. O advisory sustenta a autoridade técnica da casa; as participações a contextualizam.

Isso preserva a substância do Standard e acomoda a estrutura real. **Mas é alteração do Standard e exige sua validação expressa, mais atualização para v1.1** — como o próprio memorando já previa no item 3 dos Próximos Passos.

---

## 5. Posicionamento recomendado

> ### BLACKHILL CAPITAL
> **Onde capital encontra complexidade.**
>
> Boutique independente de assessoria financeira em ativos de crédito complexos no Brasil — e, separadamente, acionista em plataformas de tecnologia para os mercados em que atua.

**Pilar 1 — Financial Advisory** · núcleo narrativo, ~80% do site
Mantido **integralmente** conforme aprovado. *Distressed & Judicial Claims Advisor*, com a hierarquia já validada:

- **Núcleo de autoridade:** Precatórios · NPL & Distressed Credit (judicial)
- **Capacidades de estruturação:** Claims & Litigation Finance · Crédito Estruturado / FIDC · Securitização de Dívida Ativa (LC 208/2024)
- **Serviços complementares:** Reestruturação Corporativa · Servicing & Cobrança

**Pilar 2 — Participações em Tecnologia** · subordinado, 1 página + seção na home
Participações societárias em plataformas de tecnologia para crédito e originação. Fora do mandato de advisory. Não é oferta, fundo nem mandato de gestão. Conteúdo **pendente** das decisões D2–D4.

**Por que subordinado e não paritário:** a autoridade da Blackhill decorre de 30 anos de trajetória em crédito estruturado e distressed (BTG Pactual, Enforce, Banco ABC Brasil). As participações em tecnologia são recentes e pré-lançamento. Dar-lhes peso igual transfere o centro de gravidade da marca para o ativo mais fraco — e reintroduz o risco de categoria que o memorando levou cinco fases para eliminar.

---

## 6. Arquitetura proposta

Bilíngue, PT-BR como padrão, EN em `/en`. Rotas em português no PT (o site hoje tem rotas e menus em inglês com conteúdo em português).

```
/                            Home
/sobre                       Quem somos · Fundador · 4 Fases · Independência & Governança
/advisory                    [PILAR 1 — núcleo narrativo]
  /advisory/precatorios        ◆ NÚCLEO
  /advisory/npl-distressed     ◆ NÚCLEO
  /advisory/claims             ○ capacidade
  /advisory/credito-estruturado ○ capacidade
  /advisory/divida-ativa       ○ capacidade — LC 208/2024
  /advisory/reestruturacao     · complementar
  /advisory/servicing          · complementar
/mercado                     Mercado endereçável (dados públicos) + Acesso sob NDA
/investidores                Family Offices · Fundos & Gestoras · Bancos · Due Diligence
/empresas                    Cedentes · Empresas em reestruturação
/insights                    Explicadores técnicos (sem blog, conforme arquitetura aprovada)
/contato                     Contato direto + formulário qualificado funcional
/participacoes               [PILAR 2 — subordinado]
/privacidade                 LGPD — novo, hoje inexistente
/compliance                  Disclaimer institucional — novo, hoje inexistente
```

**Navegação principal — 7 itens:** Sobre · Advisory · Mercado · Investidores · Empresas · Insights · Contato.
**Participações** acessível pelo rodapé, por `/sobre` e por uma seção da home abaixo do conteúdo de advisory. Se preferir no menu principal, é sua decisão — registro apenas o trade-off da Seção 4, item 3.

**Mudanças relativas ao site atual:** `/practice-areas` → `/advisory` (o Standard trata *Áreas de Atuação* como hierarquia, e *Practice Areas* é vocabulário de escritório de advocacia — risco de categoria nominalmente identificado no memorando); `/origination-access` → `/mercado`; `/why-blackhill` incorporado a `/sobre`. Todas as rotas antigas com redirect 301 para preservar o que já foi indexado.

**Identidade visual:** navy/gold e Arial preservados conforme Standard. Design refinado por espaçamento, escala tipográfica, densidade editorial, hierarquia e contenção — não por troca de paleta.

---

## 7. Plano de execução

| # | Etapa | Depende de |
| :-- | :-- | :-- |
| 0 | **Correção isolada do formulário de contato** (C1 + C2) — pode ir à produção antes do redesign | sua autorização |
| 1 | Branch `redesign/reposicionamento-2026`; eliminar árvore duplicada; ESLint + CI | — |
| 2 | Infraestrutura: i18n PT/EN, `robots.ts`, `sitemap.ts`, Open Graph, JSON-LD, `/privacidade`, `/compliance` | 1 |
| 3 | Pilar 1 — redesign e reescrita das páginas de advisory | 2 |
| 4 | Pilar 2 — `/participacoes` | **D1–D4** |
| 5 | Testes: build, Playwright smoke, axe (acessibilidade), QA Checklist do Hub | 3, 4 |
| 6 | Preview no projeto Vercel existente (sem tocar produção) | 5 |
| 7 | **Sua aprovação** → merge → produção | 6 |

Produção, domínios e configurações da Vercel permanecem intocados até a etapa 7. A etapa 4 fica bloqueada enquanto as decisões abaixo não forem tomadas — as etapas 1 a 3 avançam independentemente.

---

## 8. Decisões necessárias

| # | Decisão | Por que bloqueia |
| :-- | :-- | :-- |
| **D1** | 🔴 Autoriza a divergência da Seção 4 — Pilar 2 subordinado + reescrita da declaração de independência + atualização do Standard para v1.1? | Governança do Hub exige validação expressa |
| **D2** | 🔴 **XCurve:** a Blackhill mantém a participação? A minuta de Mai/2025 a vende para Lopes Cardi. | Não se publica participação cuja titularidade é incerta |
| **D3** | 🔴 **Blackhill Advisors:** o que é? Não consta em nenhuma fonte institucional. | Sem fonte, não há conteúdo possível |
| **D4** | 🟠 Finders (Fase 11, nada publicado) e DealNorth (Fase 1) podem ser nomeados publicamente antes do lançamento? | Produto pré-lançamento em site institucional |
| **D5** | 🟡 Domínio e e-mail: consolidar em `blackhill.com.br` ou `blackhillcapital.com.br`? Publicar a sede de Alphaville? | Coerência institucional |
| **D6** | 🟡 Manter Arial (Standard §5) ou aprovar tipografia institucional de qualidade web na v1.1? | Cláusula do Standard — não altero unilateralmente |

---

*Diagnóstico elaborado a partir das fontes listadas na Seção 1. Nenhuma informação foi inferida ou presumida: as lacunas estão declaradas como lacunas. Nenhuma informação confidencial de operações, cedentes, investidores ou acertos societários será utilizada em conteúdo público.*
