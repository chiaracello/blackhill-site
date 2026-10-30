# BLACKHILL CAPITAL

## PROPOSTA DE CONTEÚDO — SENIOR-LED ADVISORY POSITIONING

### Documento de aprovação · 30 de outubro de 2026

> **Status:** **aprovada em 30 de outubro de 2026** e implementada na branch. Nada publicado.
> Decisões do aprovador: C1 — mobilização conforme cada mandato, sem afirmar rede formal, equipe permanente ou parceiros contratados · C2 — ferramentas de análise e IA como suporte, decisões humanas, sem afirmar integração de XCurve, Finders ou DealNorth · C3 — LinkedIn pendente de verificação · A5 — somente credenciais verificáveis · M1 e M2 aprovados. A norma resultante é o [Brand & Communication Standard v1.2](BRAND_STANDARD_v1.2.md), §10.
> **Refinamentos finais aprovados em 30 de outubro de 2026, após a implementação:** (1) a ressalva pública da seção "Estrutura por mandato" foi retirada — a regra passa a ser de abstenção, não de ressalva, e a apresentação é positiva; (2) o bloco de tecnologia passa a intitular-se **"Supervisão e responsabilidade profissional"** / *Professional supervision and responsibility*, preservando integralmente a afirmação de que análises finais, recomendações, decisões e negociações permanecem sob responsabilidade humana.
> **Base:** Brand & Communication Standard v1.1, Posicionamento Institucional 2026–2031 v2, Auditoria de SEO e Visibilidade.
> **Branch:** `redesign/reposicionamento-2026`, 5 commits à frente de `main`, sem push.

---

## 01 · O QUE O APRENDIZADO COMERCIAL REVELA

O episódio relatado tem três informações distintas, e cada uma exige uma resposta diferente.

**(a) O cliente encontrou a Blackhill por pesquisa em inteligência artificial.**
Isso é significativo e precisa ser lido com precisão: os mecanismos de resposta por IA sintetizam a partir do texto da página, não de sinais de autoridade de link. Eles respondem "quem faz isso no Brasil" com base em quem **descreve a competência de forma explícita e verificável**. A Blackhill foi encontrada apesar de estar invisível na busca orgânica — o que confirma a leitura da auditoria de SEO e eleva a prioridade de uma coisa específica: o site precisa afirmar, em texto corrido, quem executa o mandato e como. Hoje ele não afirma.

**(b) O contato foi feito diretamente com o fundador.**
Isso não é uma falha de estrutura. É o diferencial, e o site não o reivindica em nenhum lugar. Em um banco, a mesa que avalia a operação não é a que a conduz; em uma boutique sênior, é. Essa frase não está no site.

**(c) A preocupação inicial foi com a percepção de estrutura.**
Aqui está a lacuna real. Revisei todas as páginas contra essa pergunta e o diagnóstico é objetivo: **o site descreve competência técnica em profundidade e não descreve capacidade de execução em nenhum lugar.** Um leitor institucional encontra sete frentes de advisory, cinco argumentos de complexidade por frente, e nenhuma resposta a: quem conduz, com que método, respondendo a quem, com que entregáveis, em que prazo de processo.

As quatro causas, nomeadas:

| # | Lacuna | Onde | Consequência na leitura institucional |
| :-- | :-- | :-- | :-- |
| L1 | Ausência de afirmação de condução sênior | Nenhuma página | O leitor supõe estrutura — e supõe para baixo |
| L2 | `PROCESS` descreve o ciclo do ativo, não a execução do mandato | Home, About §04 | Processo parece descritivo de mercado, não compromisso de método |
| L3 | Tecnologia aparece só como participação societária | `/ecosystem` | A tecnologia não sustenta a capacidade de execução, que é onde ela convence |
| L4 | Nenhum entregável nomeado | Nenhuma página | Não há como o leitor distinguir advisory de intermediação |

---

## 02 · UMA CORREÇÃO OBRIGATÓRIA, ANTES DE QUALQUER ADIÇÃO

Encontrei no conteúdo atual duas formulações que **afirmam uma estrutura societária plural não comprovada** — exatamente o oposto da diretriz 7.

| Arquivo | Texto atual | Problema |
| :-- | :-- | :-- |
| `src/content/pages.ts` · `CONTACT.pt.natureHint` | "A seleção direciona o contato ao **sócio responsável pela frente correspondente**." | Afirma vários sócios, um por frente |
| `src/content/pages.ts` · `CONTACT.pt.success.body` | "O retorno é feito pelo **sócio responsável**…" | Idem, em inglês: "the partner responsible for that front" |

Proposta de substituição — mais forte comercialmente **e** verificável:

| Campo | PT | EN |
| :-- | :-- | :-- |
| `natureHint` | A seleção organiza a leitura inicial da oportunidade e orienta a preparação da resposta. | Your selection frames the initial reading of the opportunity and guides how the response is prepared. |
| `success.body` | Sua mensagem foi entregue à Blackhill Capital. A resposta é dada diretamente pelo profissional sênior responsável pelo mandato, normalmente em até dois dias úteis. | Your message has been delivered to Blackhill Capital. The reply comes directly from the senior professional responsible for the mandate, usually within two business days. |

Isto é a diretriz 1 operando: o acesso direto deixa de ser um acidente do tamanho da casa e passa a ser a promessa explícita do canal.

---

## 03 · A MENSAGEM INSTITUCIONAL

**Senior-Led. Technology-Enabled. Execution-Focused.**

Recomendação: manter a linha em inglês como assinatura institucional travada — é assim que ela circula em deck, e-mail e LinkedIn — e fixar uma renderização em português que **não declare número de pessoas**:

| | Linha |
| :-- | :-- |
| EN | Senior-Led. Technology-Enabled. Execution-Focused. |
| PT | **Condução sênior. Tecnologia aplicada. Foco em execução.** |

Por que frases nominais e não "liderada por profissionais seniores": a forma verbal plural afirma um quadro de pessoas. A forma nominal afirma um **modelo de condução**, que é verdadeiro independentemente do número de profissionais e permanece verdadeiro quando a casa crescer. A diretriz 8 proíbe "solo advisor"; esta construção também não o insinua.

**Onde aparece:** faixa imediatamente abaixo do hero na Home · topo da nova página de abordagem · capa do Credentials Deck · rodapé do e-mail institucional. **Onde não aparece:** páginas de frente de advisory (competem com o problema financeiro, que é o que converte) e páginas legais.

---

## 04 · ARQUITETURA — ONDE ENTRA "OUR APPROACH"

### Decisão a tomar

A diretriz 4 pede uma seção. Recomendo mais do que uma seção: **uma rota própria**, `/approach` ("Abordagem" em PT, "Our Approach" em EN), por três razões.

1. É a página que responde à objeção que custou credibilidade neste caso concreto. Uma seção dentro de About divide atenção com a biografia; uma página é endereçável, compartilhável e citável.
2. É um ativo de busca com intenção própria — "como funciona um advisor independente de crédito estressado", "quem conduz a estruturação" — e um ativo de resposta para mecanismos de IA, que foi o canal real de descoberta.
3. Pode ser enviada por link em um primeiro contato, antes de qualquer NDA, sem expor nada.

**Custo:** o menu principal tem 8 itens e 9 é demais. Proposta: **"Mercado" sai do menu principal e permanece no rodapé** (já está lá, em *Advisory → Mercado endereçável*) e `/approach` assume a posição. A rota `/market` continua existindo, no sitemap e indexada — não se perde nada de SEO. Se preferir manter "Mercado" no menu, a alternativa é mover "Insights"; não recomendo, porque Insights é o motor da estratégia de conteúdo.

### Estrutura proposta da página `/approach`

Cinco seções, nesta ordem, com numeração contínua no padrão visual atual:

**01 — Condução sênior**

> **PT · título:** O profissional que avalia a sua operação é o mesmo que a conduz.
> **PT · lede:** Não há camada intermediária entre a análise e a execução. A leitura técnica inicial, a negociação com a contraparte e o acompanhamento até o fechamento são conduzidos pelo profissional sênior responsável pelo mandato — que responde diretamente pelo que foi analisado.
>
> **EN · título:** The professional who assesses your transaction is the one who executes it.
> **EN · lede:** There is no intermediate layer between analysis and execution. The initial technical reading, the negotiation with the counterparty and the follow-through to closing are conducted by the senior professional responsible for the mandate — accountable directly for what was assessed.

Três argumentos de apoio:

| PT | EN |
| :-- | :-- |
| **Acesso direto ao responsável.** O contato inicial e a condução do mandato não passam por camadas de triagem. | **Direct access to the person responsible.** Neither first contact nor the mandate itself passes through screening layers. |
| **Continuidade de leitura.** Quem analisou o ativo é quem negocia — o que elimina a perda de contexto entre diligência e mesa. | **Continuity of judgement.** Whoever analysed the asset is the one who negotiates — removing the loss of context between diligence and desk. |
| **Responsabilidade nominal.** Cada mandato tem um responsável identificado, não uma equipe difusa. | **Named accountability.** Every mandate has an identified principal, not a diffuse team. |

**02 — Estrutura por mandato**

Esta é a resposta direta à objeção de estrutura, e é a única forma de respondê-la sem inventar quadro próprio.

> **PT · título:** A estrutura de cada mandato é montada para o ativo, não mantida em folha.
> **PT · corpo:** Operações de crédito complexo exigem especialistas distintos conforme o ativo: parecer jurídico independente sobre a cadeia processual, avaliação de colateral, análise de servicing, auditoria documental. A Blackhill coordena esses especialistas, define o escopo técnico de cada um e integra o resultado — e responde pela leitura final apresentada ao cliente. O que não é delegado é a análise: a tese técnica da operação é da Blackhill.
>
> **EN · título:** Each mandate's structure is assembled for the asset, not carried on a payroll.
> **EN · corpo:** Complex credit transactions require different specialists depending on the asset: an independent legal opinion on the procedural chain, collateral valuation, servicing assessment, documentary audit. Blackhill engages those specialists, defines each one's technical scope and integrates the result — and is accountable for the final reading presented to the client. What is never delegated is the analysis: the technical thesis of the transaction is Blackhill's own.

> ⚠ **Confirmação necessária (C1).** Esta seção afirma que a Blackhill contrata e coordena especialistas independentes por mandato. O conteúdo já aprovado afirma coisas compatíveis ("parecer jurídico independente e obrigatório", "coordena os prestadores", "trabalhamos em conjunto com os assessores jurídicos da empresa"). Antes de publicar, confirme a lista de categorias de especialista que a Blackhill efetivamente aciona, para que nenhuma seja afirmada por inferência minha.

**03 — Método de execução**

A diretriz 3 pede o processo do diagnóstico à conclusão. O `PROCESS` atual tem quatro fases corretas mas descreve o ciclo do ativo. Proposta: manter as quatro fases e acrescentar, em cada uma, **o entregável** — que é o que converte método em capacidade de execução percebida.

| Fase | Entregável proposto (PT) | Deliverable (EN) |
| :-- | :-- | :-- |
| 01 Originação | Leitura inicial de aderência — classe de ativo, ordem de grandeza, viabilidade de estruturação | Initial fit assessment — asset class, order of magnitude, feasibility of structuring |
| 02 Análise & Due Diligence | Memorando técnico com premissas explícitas, lacunas documentais identificadas e pontos que exigem parecer independente | Technical memorandum with explicit assumptions, identified documentary gaps and points requiring an independent opinion |
| 03 Estruturação & Negociação | Desenho do veículo ou da cessão, matriz de proteções contratuais e condução da negociação até o fechamento | Vehicle or assignment design, matrix of contractual protections, and conduct of the negotiation through to closing |
| 04 Monitoramento | Reporte periódico comparando curva realizada e curva projetada, com revisão de estratégia | Periodic reporting comparing realised against projected curve, with strategy revision |

Linha de responsabilidade, ao final das quatro fases:

> **PT:** Em todas as fases, o responsável pelo mandato é o mesmo. O que muda é o conjunto de especialistas acionado.
> **EN:** The principal responsible for the mandate is the same at every phase. What changes is the set of specialists engaged.

**Caveat obrigatório** (Standard §08, linguagem a evitar na conversão):

> **PT:** O método descreve como a Blackhill conduz um mandato. Não constitui promessa de prazo, de fechamento, de aprovação de crédito ou de resultado — cada operação depende de condições de mercado, da documentação do ativo e da decisão independente das contrapartes.
> **EN:** The method describes how Blackhill conducts a mandate. It is not a promise of timing, closing, credit approval or outcome — every transaction depends on market conditions, the asset's documentation and the independent decisions of the counterparties.

**04 — Tecnologia aplicada**

Esta seção tem um limite que não pode ser atravessado, e o limite é do Standard, não meu. O §03 do Standard v1.1 separa estruturalmente **participação societária em plataformas** (Pilar 2) de **atividade de advisory** (Pilar 1). A diretriz 6 pede uma terceira coisa, distinta de ambas: **ferramental analítico empregado na condução dos mandatos.**

Formulação proposta:

> **PT · título:** Tecnologia que aumenta a capacidade de análise — não que substitui o julgamento.
> **PT · corpo:** Estratificar uma carteira inadimplente por safra, aging e colateral, projetar curvas de recuperação sob múltiplos cenários, conferir cadeia de titularidade e atualizar valores por índices distintos são tarefas de processamento. Tratá-las com ferramental analítico adequado é o que permite que o tempo do profissional sênior seja gasto onde ele é insubstituível: na leitura de risco, na estruturação e na negociação.
> **PT · limite explícito:** Nenhuma decisão de crédito, precificação ou recomendação é tomada por sistema automatizado. A análise é humana, sênior e nominalmente responsável; a tecnologia organiza a informação sobre a qual essa análise se exerce.
>
> **EN · título:** Technology that expands analytical capacity — not that replaces judgement.
> **EN · corpo:** Stratifying a non-performing portfolio by vintage, aging and collateral, projecting recovery curves across scenarios, verifying chains of title and restating values under different indices are processing tasks. Handling them with proper analytical tooling is what allows senior time to be spent where it cannot be replaced: reading risk, structuring and negotiating.
> **EN · limite explícito:** No credit decision, pricing or recommendation is made by an automated system. The analysis is human, senior and named; technology organises the information on which that analysis is exercised.

Fecho com remissão ao Pilar 2, mantendo a separação:

> **PT:** A Blackhill mantém, em frente distinta e estruturalmente separada, participações estratégicas em plataformas de tecnologia de crédito. Essa frente é de investimento, não de prestação de serviço aos mandatos de advisory.
> **EN:** Blackhill holds, in a distinct and structurally separate front, strategic interests in credit technology platforms. That front is an investment activity, not a service provider to advisory mandates.

> ⚠ **Confirmação necessária (C2).** Escrevi a seção descrevendo **categorias de ferramental** (estratificação, projeção de cenários, conferência documental) sem nomear sistema nenhum e sem afirmar que XCurve, Finders ou DealNorth são utilizados nos mandatos. Se forem, isso muda a seção e é um argumento muito mais forte — mas também cria uma relação entre os dois pilares que o Standard §03 hoje separa, e que exigiria revisão da norma. Precisa da sua decisão, não da minha.

**05 — Como iniciar**

Reaproveita o bloco `ENGAGE` já implementado (contato preliminar → confidencialidade → análise e mandato), com o CTA primário "Apresente sua operação" / "Discuss a Transaction" e o caveat de não vinculação. Sem conteúdo novo.

---

## 05 · HOME — TRÊS ALTERAÇÕES

| # | Alteração | Detalhe |
| :-- | :-- | :-- |
| H1 | Faixa institucional sob o hero | A linha "Condução sênior · Tecnologia aplicada · Foco em execução", em caixa alta espaçada, ouro sobre navy, acima da tríade de independência. Sem animação, sem concorrer com o H1 (preserva o LCP corrigido no refinamento anterior). |
| H2 | Nova seção, entre "Dois pilares" e "Pilar 01" | Título PT: **"Quem conduz o seu mandato."** / EN: **"Who runs your mandate."** Lede de três linhas com o argumento de acesso direto + continuidade de leitura, e `RevealLink` para `/approach`. Esta é a seção que responde à objeção antes de o leitor chegar ao About. |
| H3 | Reforço no bloco "Como atuamos" | Acrescentar os quatro entregáveis da tabela da seção 04-03 às fases já existentes, e o link para a página de abordagem. |

A tríade de independência **permanece**. Ela responde a uma pergunta diferente (conflito de interesse) e, somada à condução sênior, compõe o argumento completo: independente **e** sênior.

---

## 06 · ABOUT — REFORÇO DA APRESENTAÇÃO DO FUNDADOR

A diretriz 5. O que existe hoje: eyebrow "Sócio-fundador", uma linha de intro, dois parágrafos de bio, três posições de track record, caveat, e a moldura de retrato com fallback tipográfico "MC".

Proposta, em ordem de impacto:

**A1 · Fotografia profissional.** A moldura está construída (`FounderPortrait.tsx`, proporção 4:5, moldura de fio, fallback monograma). Basta o arquivo em `public/` e `COMPANY.founder.photo` apontando para ele. **Isto é, isoladamente, a maior melhoria de percepção de estrutura disponível no site.** Um retrato institucional em moldura premium converte "não sei quem é" em "sei exatamente com quem vou falar".

**A2 · Terceiro parágrafo de bio — o parágrafo de método.** A bio atual conta onde ele esteve. Falta o que ele faz com isso.

> **PT:** O que essa trajetória produz na prática é uma forma específica de avaliar: ler o processo judicial que originou o crédito com a disciplina de underwriting de uma mesa de crédito, e precificar a diferença entre o que a documentação comprova e o que a expectativa do titular supõe. É essa leitura que a Blackhill entrega ao cliente — e é ela que não é delegada.
>
> **EN:** What that career produces in practice is a specific way of assessing: reading the proceeding that created the claim with the underwriting discipline of a credit desk, and pricing the gap between what the documentation proves and what the holder's expectation assumes. That reading is what Blackhill delivers to the client — and it is the part that is never delegated.

**A3 · Linha de responsabilidade nominal**, imediatamente após o caveat de track record:

> **PT:** Mandatos de advisory da Blackhill Capital são conduzidos sob responsabilidade direta do sócio-fundador.
> **EN:** Blackhill Capital's advisory mandates are conducted under the founding partner's direct responsibility.

**A4 · `sameAs` e dados estruturados.** Acrescentar um nó `Person` ao JSON-LD, vinculado à entidade `FinancialService` pela propriedade `founder`, com nome, cargo e `sameAs` do LinkedIn pessoal. Isto serve diretamente ao problema identificado na auditoria de SEO: é o antídoto técnico à colisão de marca com a Blackhill Partners (Dallas), porque amarra a entidade "Blackhill Capital" a uma pessoa identificável em São Paulo.

> ⚠ **Confirmação necessária (C3).** O campo `linkedin` em `src/content/site.ts` aponta hoje para `linkedin.com/company/blackhill-capital` — valor que **eu presumi e nunca verifiquei**, e que por isso não é renderizado em lugar nenhum. Para o `sameAs` preciso das URLs reais: perfil pessoal e página da empresa. Uma URL errada em `sameAs` é pior que nenhuma: vincula a entidade a um terceiro.

**A5 · Opcional, apenas se verificável.** Formação acadêmica, idiomas de trabalho e participações em conselho reforçam substancialmente a percepção institucional e são os campos que um deck de credenciais exige. Não os incluo por não os ter. Se existirem e você os passar, entram em About, no `Person` do JSON-LD e no deck.

---

## 07 · ADVISORY — UMA LINHA POR FRENTE

Cada uma das sete frentes já responde às quatro perguntas do Standard §08 (problema · quem contrata · como atuamos · como iniciar). Falta a quinta, que é a nova:

Acrescentar ao tipo `AdvisoryArea` um campo `execution: Localized<string>` — uma frase por frente, dizendo **quem conduz e com que especialistas**. Exemplos, nas duas frentes de núcleo:

| Frente | PT | EN |
| :-- | :-- | :-- |
| Precatórios | A condução é sênior e direta, apoiada por parecer jurídico independente sobre a cadeia processual e a cessibilidade do crédito. | Senior and direct conduct, supported by an independent legal opinion on the procedural chain and the claim's assignability. |
| NPL & Distressed | A condução é sênior e direta, com estratificação da carteira e avaliação independente do servicer que assumirá a cobrança. | Senior and direct conduct, with portfolio stratification and an independent assessment of the servicer that will take over collection. |

As cinco demais seguem o mesmo padrão, sempre nomeando o especialista cuja intervenção o ativo exige. Sujeito à confirmação C1.

---

## 08 · GOVERNANÇA — O QUE MUDA NOS DOCUMENTOS

| Documento | Alteração |
| :-- | :-- |
| `docs/BRAND_STANDARD_v1.1.md` → **v1.2** | Nova seção **10 · CONDUÇÃO SÊNIOR E CAPACIDADE DE EXECUÇÃO**: fixa a assinatura institucional nas duas línguas, autoriza a reivindicação de acesso direto, proíbe afirmação de quadro próprio não comprovado, proíbe "one-man firm"/"solo advisor" e proíbe apresentar sistema automatizado como decisor. Acréscimo ao §06 (linguagem a evitar): afirmação de número de profissionais, sócios ou escritórios sem comprovação. Acréscimo ao §03: o limite entre ferramental analítico do advisory e participação societária em plataformas. |
| `BLACKHILL_BRAND_CONTEXT.md` | Nova seção **10. Condução sênior**, com a assinatura, a formulação canônica de acesso direto e a regra de nunca afirmar quadro próprio. |
| `CLAUDE.md` | Duas regras não negociáveis: (1) nenhum texto afirma número de pessoas, sócios ou escritórios; (2) nenhum texto apresenta IA ou sistema como autor de decisão de crédito, precificação ou recomendação. |
| `docs/POSICIONAMENTO_INSTITUCIONAL_2026-2031_v2.md` | Nova subseção em "8. O site como canal de originação": a objeção de estrutura como risco comercial identificado em campo, e a página de abordagem como resposta. |

---

## 09 · INSTITUTIONAL CREDENTIALS DECK — ESTRUTURA

Diretriz 10. Estrutura proposta: **13 slides públicos + anexo confidencial separado**. A regra de ouro é a separação do Standard: o deck público nunca contém pipeline, track record da Blackhill, nomes de clientes, operações, fees ou percentuais de participação.

| # | Slide | Conteúdo | Origem |
| :-- | :-- | :-- | :-- |
| 01 | Capa | Marca · *Financial Advisory & Strategic Technology Investments* · assinatura institucional · São Paulo · data | Pronto |
| 02 | A Blackhill em uma página | O que é e o que deliberadamente não é — as duas listas do About | Pronto |
| 03 | O problema de mercado | Quatro indicadores públicos com fonte e data-base | Pronto (`MARKET_STATS`) |
| 04 | Posicionamento | Advisor independente · sem gestão de capital de terceiros · sem conflito cedente–investidor | Pronto |
| 05 | **Condução sênior** | Quem conduz · acesso direto · responsabilidade nominal · retrato institucional | **Novo — depende de A1** |
| 06 | Trajetória do sócio-fundador | BTG Pactual · Enforce · Banco ABC, com o caveat de track record profissional obrigatório no slide | Pronto |
| 07 | Competências | Sete frentes na hierarquia núcleo → capacidade → complementar | Pronto |
| 08 | **Método de execução** | Quatro fases com os entregáveis nomeados | **Novo — seção 04-03** |
| 09 | **Estrutura por mandato** | Especialistas acionados por tipo de ativo | **Novo — depende de C1** |
| 10 | **Tecnologia aplicada** | Ferramental analítico e o limite explícito sobre decisão automatizada | **Novo — depende de C2** |
| 11 | Independência & governança | As duas listas, a separação dos quatro conceitos | Pronto |
| 12 | Confidencialidade e acesso | NDA antes de informação · sala de dados com acesso registrado · diligência independente do investidor | Pronto (`MARKET_PAGE.accessSteps`) |
| 13 | Como iniciar | Três passos do `ENGAGE` · contato direto · caveat de não vinculação | Pronto |
| — | Disclaimer | Página de fechamento com o `DISCLAIMER` institucional integral | Pronto |

**Anexo confidencial — arquivo separado, nunca anexado ao deck público:** pipeline corrente, track record da Blackhill desde a fundação, estrutura de remuneração, referências de cliente. Compartilhado somente após NDA e por decisão caso a caso.

**Slide opcional (14), a critério da audiência:** ecossistema de tecnologia como segundo pilar, com os cinco limites de divulgação do Standard §03 — sem percentuais, sem estrutura de controle. Recomendo **omitir** em primeira apresentação a cliente de advisory: nesse contexto ele dilui o foco em execução, que é o objetivo do deck.

**Produção:** quando autorizado, o deck pode ser gerado em `.pptx` no padrão visual do site (navy/ouro, moldura de fio, numeração contínua). Não o produzi ainda — a estrutura acima precisa da sua validação e dos itens C1–C3 e A5 primeiro, e um deck com um slide inventado é pior que nenhum deck.

---

## 10 · PRIORIDADES DE IMPLEMENTAÇÃO

| Prioridade | Item | Bloqueio |
| :-- | :-- | :-- |
| **P0** | Correção do "sócio responsável" (seção 02) | Nenhum — é correção de afirmação não comprovada já publicável na branch |
| **P0** | Fotografia do fundador (A1) | Arquivo |
| **P1** | Página `/approach` completa, PT e EN | Decisão de menu + C1 e C2 |
| **P1** | Home H1, H2, H3 | Depende de `/approach` existir |
| **P1** | About A2, A3 | Nenhum |
| **P2** | `Person` no JSON-LD + `sameAs` (A4) | C3 — URLs verificadas |
| **P2** | Campo `execution` nas sete frentes | C1 |
| **P2** | Brand Standard v1.2 e documentos de governança | Aprovação desta proposta |
| **P3** | Credentials Deck em `.pptx` | Tudo acima |

---

## 11 · O QUE EU PRECISO CONFIRMADO ANTES DE IMPLEMENTAR

| Ref | Pergunta | Por que importa |
| :-- | :-- | :-- |
| **C1** | Quais categorias de especialista independente a Blackhill efetivamente aciona por mandato? (jurídico, avaliação, servicing, auditoria documental, outras) | Sustenta toda a seção "Estrutura por mandato", que é a resposta à objeção de estrutura |
| **C2** | O advisory utiliza ferramental analítico proprietário? XCurve, Finders ou DealNorth são usados nos mandatos? | Se sim, a seção de tecnologia fica muito mais forte — mas cria relação entre os dois pilares que o Standard §03 hoje separa, e exige revisão da norma |
| **C3** | URLs reais do LinkedIn: perfil pessoal e página da empresa | `sameAs` errado vincula a entidade Blackhill a um terceiro. É o antídoto à colisão com a Blackhill Partners |
| **A5** | Formação, idiomas de trabalho, conselhos — apenas se verificáveis | Campos que o deck de credenciais exige e que não posso presumir |
| **M1** | "Mercado" sai do menu principal para abrir espaço a "Abordagem"? | Decisão de arquitetura de navegação |
| **M2** | A renderização em PT da assinatura — "Condução sênior. Tecnologia aplicada. Foco em execução." — está aprovada? | É assinatura institucional travada; muda depois é custoso |

---

## 12 · O QUE EU NÃO FIZ

- **Não implementei nada.** Nenhum arquivo de conteúdo, componente ou rota foi alterado. Este documento é a única adição ao repositório.
- **Não inventei equipe, parceiro, operação executada, certificação ou infraestrutura.** Onde a afirmação dependia de informação que não tenho, marquei C1, C2, C3 ou A5 em vez de escrever a frase.
- **Não usei "one-man firm", "solo advisor" nem equivalente**, e a formulação da assinatura em português foi escolhida especificamente para não afirmar número de pessoas em nenhuma direção.
- **Não apresentei IA como substituta de profissional** em nenhuma formulação proposta; a seção de tecnologia contém um limite explícito em texto publicável.
- **Não produzi o Credentials Deck**, apenas sua estrutura — três slides dependem de confirmação.
- **Não fiz push, merge ou deploy.** A branch continua 5 commits à frente de `main`, sem push, e a produção está intocada.
