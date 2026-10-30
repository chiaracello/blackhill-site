# BLACKHILL CAPITAL

## CONTINUIDADE VISUAL — WEBSITE × MATERIAIS EXISTENTES

### Conflitos identificados antes de alterar o Brand Standard · 30 de outubro de 2026

> **Status:** levantamento. **Nenhuma alteração foi feita no Brand Standard nem no website.**
> Produzido em resposta à diretriz de continuidade visual com os materiais institucionais do Knowledge Hub.

---

## 01 · O QUE EXISTE, DE FATO

A diretriz pede continuidade com "as apresentações institucionais premium da Blackhill já existentes no Blackhill Knowledge Hub". O que encontrei é diferente do que a frase sugere, e a diferença importa.

**Não existe uma apresentação institucional da Blackhill.** Não há deck de credenciais, não há apresentação corporativa, não há documento de identidade visual além do próprio Standard. A busca no Drive por qualquer apresentação ou PDF relacionado à Blackhill devolve **quatro teasers comerciais de operações específicas** e nada mais.

| Arquivo | Natureza | Examinado |
| :-- | :-- | :-- |
| `BH-0002 — Teaser Precatório DNIT` | Teaser de operação — é o template canônico citado no Hub | ✅ Sim |
| `BH-0005 — Teaser Precatório Vilas Boas` | Teaser de operação | ✅ Sim |
| `BH-0009 — Teaser Distressed RE / TAB` | Teaser de operação, o mais recente (jul/2026) | ✅ Sim |
| `BH-0012 — Teaser 4U Nordex` | Teaser de operação | ❌ Não — os três acima já davam resultado consistente |
| `Blackhill_Proposta_de_Valor.docx` | Institucional, citado no Hub | ❌ Não localizado na busca |

Esses arquivos contêm dados de operações, contrapartes e valores. **Examinei exclusivamente a camada visual** — fontes declaradas e cores dos fluxos de conteúdo do PDF. Nada do conteúdo comercial desses documentos entra, nem pode entrar, em material público.

O Knowledge Hub v2.1 foi lido integralmente. Ele **repete** o Standard v1.0 na seção "Brand & Communication Standard — Síntese": navy `#0D1B2E` / `#152236` / `#1E3047`, ouro `#C9A84C`, Arial, "ouro apenas sobre fundo navy — nunca ouro sobre branco".

---

## 02 · O CONFLITO CENTRAL

**A norma e a prática divergiram, e ninguém registrou isso.**

O Standard diz uma coisa. Os materiais que a Blackhill efetivamente enviou ao mercado em 2026 dizem outra. Não em detalhe — em cor de marca e em tipografia.

### Paleta — o que os materiais realmente usam

| Elemento | Standard v1.1 / site | BH-0002 | BH-0005 | BH-0009 |
| :-- | :-- | :-- | :-- | :-- |
| **Navy** | `#0D1B2E` | `#0B1F3A` | `#0B1F3A` | `#0B1F3A` |
| **Ouro** | `#C9A84C` | `#B8923F` | `#B8923F` | `#B79A43` |
| **Ouro sobre claro** | *proibido* | — | `#5C4A1E` · `#8A6A25` | — |
| **Marfim / champanhe** | não existe | — | `#F5EFE3` · `#E4D6B8` | `#F3EEDC` · `#D7C88E` |
| **Corpo de texto** | branco sobre navy | `#222222` | `#1F2937` | `#23262B` |
| **Base da página** | navy | `#EEF1F5` / branco | claro | claro |

Três teasers independentes, produzidos em meses diferentes, convergem em `#0B1F3A` e na família `#B8923F`–`#B79A43`. Não é variação acidental de um arquivo: é a cor que a Blackhill usa.

### Tipografia — não há padrão a preservar

| Arquivo | Fonte |
| :-- | :-- |
| BH-0002 | **Carlito** (clone métrico de Calibri, produzido em LibreOffice) |
| BH-0005 | **Calibri** |
| BH-0009 | **Aptos** (padrão do Microsoft 365 desde 2024) |

**Nenhum usa Arial.** As três fontes são defaults de suíte de escritório — o que a ferramenta entregou, não o que a marca escolheu. A cláusula "Fonte padrão: Arial" do Standard nunca foi cumprida em material produzido.

---

## 03 · OS CINCO CONFLITOS, NOMEADOS

| # | Conflito | Severidade | Decisão necessária |
| :-- | :-- | :-- | :-- |
| **C1** | **O navy do Standard não é o navy dos materiais.** `#0D1B2E` × `#0B1F3A`. A diferença é perceptível: o dos materiais é mais azul e mais saturado. | 🔴 Alta | Qual é o navy da Blackhill? |
| **C2** | **O ouro do Standard não é o ouro dos materiais.** `#C9A84C` × `#B8923F`. O dos materiais é mais profundo e menos amarelo. | 🔴 Alta | Qual é o ouro da Blackhill? |
| **C3** | **A proibição de ouro sobre claro já é violada na prática** — e com acerto. BH-0005 usa `#5C4A1E` e `#8A6A25` sobre fundo claro há meses. | 🟡 Média | Emendar a cláusula §07 |
| **C4** | **Marfim não é identidade paralela: já está nos materiais.** `#F5EFE3` e `#F3EEDC` aparecem como painéis de destaque. | 🟢 Resolvido | Nenhuma — confirma a direção |
| **C5** | **O site é o outlier, não a proposta.** Os materiais comerciais são claro-dominantes com cabeçalhos navy; o site atual é escuro-dominante. | 🟢 Resolvido | Nenhuma — confirma a direção |

### A leitura que isso permite

A preocupação da diretriz — que Ivory & Ink crie uma identidade paralela — **não se confirma**. O oposto: a direção aprovada aproxima o website do material comercial que já circula. Hoje, um investidor que recebe um teaser e depois abre o site vê duas casas diferentes. É o site que destoa.

O que exige decisão não é o marfim. É o **navy** e o **ouro**.

---

## 04 · VALIDAÇÃO DE CONTRASTE — E UMA CORREÇÃO DA MINHA PROPOSTA

A aprovação condicionou o `#8C6F2E` à validação de contraste. **Validei, e ele não passa.**

| Combinação | Razão | WCAG | Veredito |
| :-- | :-- | :-- | :-- |
| `#B8923F` sobre marfim `#F5EFE3` | 2,54:1 | ✗ | Reprovado para qualquer texto |
| **`#8C6F2E`** sobre marfim | **4,14:1** | ✗ AA | **Reprovado para texto normal** |
| `#8A6A25` sobre marfim | 4,40:1 | ✗ AA | Reprovado para texto normal |
| **`#5C4A1E`** sobre marfim | **7,47:1** | ✓ AAA | **Aprovado para qualquer texto** |
| `#C9A84C` sobre navy `#0B1F3A` | 7,23:1 | ✓ AAA | Aprovado |
| `#B8923F` sobre navy `#0B1F3A` | 5,68:1 | ✓ AA | Aprovado |
| `#0B1F3A` sobre marfim | 14,42:1 | ✓ AAA | Aprovado |
| `#23262B` sobre marfim | 13,25:1 | ✓ AAA | Aprovado |
| `#FFFFFF` sobre navy `#0B1F3A` | 16,52:1 | ✓ AAA | Aprovado |

O `#8C6F2E` que propus fica em 4,14:1, abaixo do mínimo de 4,5:1 para texto normal. Serve para fio, numeral grande e elemento gráfico; **não serve para texto corrido nem para rótulo pequeno**.

A solução já existe nos próprios materiais da Blackhill: **`#5C4A1E`**, usado em BH-0005, atinge 7,47:1 e passa em AAA.

---

## 05 · PALETA RECONCILIADA — PROPOSTA

Uma única paleta para website, teasers, propostas comerciais e o futuro Credentials Deck.

| Token | Hex | Origem | Aplicação |
| :-- | :-- | :-- | :-- |
| **Navy** | `#0B1F3A` | Materiais | Hero, bandas institucionais, cabeçalhos |
| **Navy profundo** | `#071526` | Derivado | Profundidade do hero Obsidian |
| **Navy elevado** | `#16304F` | Derivado | Blocos e cartões sobre navy |
| **Champagne Gold** | `#C9A84C` | Standard | Accent **sobre navy** — 7,23:1 |
| **Ouro institucional** | `#B8923F` | Materiais | Fios, marcas e numerais **sobre navy** |
| **Bronze editorial** | `#5C4A1E` | Materiais | Texto e rótulo da família ouro **sobre claro** — 7,47:1 |
| **Marfim** | `#F5EFE3` | Materiais | Base editorial |
| **Champanhe claro** | `#F3EEDC` | Materiais | Painéis de destaque sobre marfim |
| **Warm gray** | `#E4DFD4` | Derivado | Blocos secundários |
| **Tinta** | `#23262B` | Materiais | Corpo de texto sobre claro |
| **Branco** | `#FFFFFF` | Standard | Texto sobre navy |

**Regra de ouro reescrita:** champagne `#C9A84C` e `#B8923F` **apenas sobre navy**; sobre fundo claro, a família ouro aparece **exclusivamente** como bronze `#5C4A1E` para texto, e como `#8C6F2E` apenas em fio, numeral grande e elemento decorativo — nunca em texto.

### Tipografia

Como não há padrão tipográfico a preservar — Carlito, Calibri e Aptos são acidentes de ferramenta —, a adoção de uma tipografia institucional **não rompe continuidade nenhuma**. Ela cria a primeira que a Blackhill terá.

| Uso | Fonte | Observação |
| :-- | :-- | :-- |
| Títulos editoriais de destaque | **Bodoni Moda** | Apenas títulos, conforme a diretriz |
| Corpo, menus, interface | **Inter** | Alta legibilidade, numerais tabulares nativos |
| Indicadores e rótulos técnicos | **Inter** tabular | Dispensa uma terceira família |

Ambas auto-hospedadas via `next/font`, sem requisição externa. Para Word e PowerPoint, onde Bodoni Moda e Inter não estarão instaladas no computador do destinatário, a recomendação é **Aptos** — já em uso em BH-0009 e presente em qualquer Microsoft 365 atual — como fonte de corpo dos teasers, com os títulos de capa em Bodoni Moda convertidos em imagem ou com a fonte incorporada no arquivo.

---

## 06 · O QUE EU NÃO FIZ

- **Não alterei o Brand Standard.** A diretriz pede que conflitos sejam apresentados antes, e eles existem.
- **Não implementei a nova direção visual.** Paleta e tipografia são justamente o objeto da decisão pendente; implementar antes significaria refazer.
- **Não usei conteúdo dos teasers.** Li fontes e cores dos arquivos PDF. Nenhum dado de operação, contraparte ou valor entra em material público.
- **Não examinei BH-0012 nem a Proposta de Valor.** Os três teasers lidos convergem; o quarto não mudaria a conclusão, e a Proposta de Valor não apareceu na busca do Drive.
- **Não toquei em produção, DNS, branch ou deploy.**

---

## 07 · AS TRÊS DECISÕES

| # | Pergunta | Minha recomendação |
| :-- | :-- | :-- |
| **D1** | Navy: `#0D1B2E` do Standard ou `#0B1F3A` dos materiais? | **`#0B1F3A`** — é o que o mercado já recebeu, em três materiais independentes. Mudar um site é barato; reemitir material comercial e retreinar a produção, não. |
| **D2** | Ouro: `#C9A84C`, `#B8923F`, ou os dois? | **Os dois, com papéis distintos** — champagne para accent de destaque, `#B8923F` para fios e marcas, ambos sobre navy. Preserva o Standard e reconhece a prática. |
| **D3** | Ouro sobre fundo claro | **Autorizar, restrito ao bronze `#5C4A1E`** para texto, por ser o único que passa em AAA — e é o que a Blackhill já usa. |

Com essas três respostas eu altero o Standard para a v1.3, implemento a direção visual e sigo o roteiro de validação aprovado.
