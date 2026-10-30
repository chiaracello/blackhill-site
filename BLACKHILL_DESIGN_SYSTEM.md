# BLACKHILL CAPITAL — DESIGN SYSTEM

### Referência visual única para website, apresentações, propostas e materiais comerciais

| | |
| :-- | :-- |
| **Versão** | 1.0 — 30 de outubro de 2026 |
| **Norma de origem** | [Brand & Communication Standard v1.4](docs/BRAND_STANDARD_v1.4.md) |
| **Base de reconciliação** | [Continuidade visual](docs/CONTINUIDADE_VISUAL_MATERIAIS.md) |
| **Implementação de referência** | `src/app/globals.css` |
| **Classificação** | Uso interno — referência permanente |

Este documento é a referência visual de **todo** material da Blackhill. Onde ele e um material antigo divergirem, este documento prevalece e o material é atualizado.

A paleta aqui não foi inventada: ela reconcilia o Brand Standard com as cores efetivamente usadas nos teasers comerciais em circulação. O navy e o ouro vêm dos materiais; o marfim e o bronze já apareciam neles; o champagne vem do Standard.

---

## 01 · PALETA OFICIAL

### Azuis institucionais

| Token | Hex | Função | Onde |
| :-- | :-- | :-- | :-- |
| **Navy** | `#0B1F3A` | Cor institucional principal | Hero, bandas, cabeçalhos, blocos invertidos |
| **Obsidian** | `#071526` | Profundidade máxima | Hero cinematográfico, abertura de deck |
| **Navy elevado** | `#122A49` | Segundo degrau escuro | Rodapé, placas, moldura de retrato |
| **Navy claro** | `#16304F` | Terceiro degrau, hover | Estados de hover em blocos escuros |

### Família ouro — três tons, três funções

| Token | Hex | Função | Regra |
| :-- | :-- | :-- | :-- |
| **Champagne Gold** | `#C9A84C` | Destaques premium | **Somente sobre navy.** 7,23:1 |
| **Ouro institucional** | `#B8923F` | Linhas, marcas, elementos gráficos | **Somente sobre navy.** 5,68:1 |
| **Bronze** | `#5C4A1E` | Texto e rótulo da família ouro | **Somente sobre fundo claro.** 7,47:1 |

> **A regra de ouro, em uma frase.** Sobre navy, ouro é champagne ou institucional. Sobre claro, ouro é bronze — e nunca champagne, que atinge apenas 2,54:1 sobre marfim e reprova para qualquer tamanho de texto.

### Claros editoriais

| Token | Hex | Função |
| :-- | :-- | :-- |
| **Marfim** | `#F5EFE3` | Base editorial, corpo de leitura |
| **Champanhe claro** | `#F3EEDC` | Painel de destaque sobre marfim |
| **Warm gray** | `#E4DFD4` | Banda secundária, alternância |
| **Branco** | `#FFFFFF` | Texto sobre navy, superfície de cartão |

### Tintas

| Token | Hex | Função | Contraste sobre marfim |
| :-- | :-- | :-- | :-- |
| **Tinta** | `#23262B` | Corpo de texto sobre claro | 13,25:1 |
| **Corpo** | `#3E434B` | Parágrafo sobre claro | ~10:1 |
| **Secundário** | `#5A6068` | Legenda, caveat sobre claro | ~6,4:1 |
| **Corpo sobre navy** | `#C6D2E2` | Parágrafo sobre escuro | ~11:1 |
| **Secundário sobre navy** | `#93A7C2` | Legenda, caveat sobre escuro | ~6,5:1 |

### Acentos de plataforma — exceção única

Usados **apenas** no Pilar 2, para distinguir XCurve, Finders e DealNorth entre si. São ornamentos editoriais; **não são logotipo nem identidade visual da plataforma**, e nenhuma plataforma tem marca atribuída pela Blackhill.

| Plataforma | Acento |
| :-- | :-- |
| XCurve | `#8FB4D9` |
| Finders | `#C9A84C` |
| DealNorth | `#7FA894` |

### Como a cor funciona: superfícies

Nenhum componente declara cor de texto. Cada seção declara uma **superfície**, e a superfície define tipo, fio, acento e botão de tudo que está dentro dela.

| Superfície | Fundo | Texto | Acento | Botão primário |
| :-- | :-- | :-- | :-- | :-- |
| `obsidian` | `#071526` | branco | champagne | champagne, texto navy |
| `navy` | `#0B1F3A` | branco | champagne | champagne, texto navy |
| `navy-2` | `#122A49` | branco | champagne | champagne, texto navy |
| `ivory` | `#F5EFE3` | navy | bronze | navy, texto marfim |
| `warm` | `#E4DFD4` | navy | bronze | navy, texto marfim |

**Regra estrutural:** todo bloco escuro aninhado dentro de uma seção clara precisa declarar sua própria superfície. Sem isso ele herda o texto navy da seção clara e desaparece no próprio fundo.

---

## 02 · TIPOGRAFIA

| Família | Uso | Peso |
| :-- | :-- | :-- |
| **Bodoni Moda** | Títulos editoriais de destaque | 400 |
| **Inter** | Corpo, menu, interface, rótulos, números | 400 / 500 / 600 |
| **Aptos** | Substituta em Word e PowerPoint editáveis | regular / bold |

**Bodoni Moda não é usada em texto longo.** Ela carrega display, h1, h2, figuras e citações de destaque — nada que o leitor precise percorrer por mais de uma ou duas linhas. Subtítulo de trabalho (h3), parágrafo, lista, rótulo e número são Inter.

As duas famílias são **auto-hospedadas**: servidas do próprio domínio, sem requisição a terceiros. O site não faz nenhuma conexão externa e a política de privacidade permanece literalmente verdadeira.

### Escala

| Classe | Tamanho | Família | Entrelinha | Tracking |
| :-- | :-- | :-- | :-- | :-- |
| `t-display` | 2,75 → 6 rem | Bodoni | 0,98 | −0,015em |
| `t-h1` | 2,125 → 4 rem | Bodoni | 1,02 | −0,012em |
| `t-h2` | 1,75 → 2,875 rem | Bodoni | 1,08 | −0,01em |
| `t-h3` | 1,06 → 1,25 rem | Inter 600 | 1,3 | −0,008em |
| `t-quote` | 1,5 → 2,25 rem | Bodoni | 1,22 | −0,008em |
| `t-figure` | 2 → 3 rem | Bodoni | 1 | −0,02em |
| `t-numeral` | 2,25 → 3,25 rem | Bodoni | 0,9 | — |
| `t-lead` | 1,06 → 1,31 rem | Inter | 1,58 | −0,003em |
| `t-body` | 0,94 → 1,06 rem | Inter | 1,75 | — |
| `t-small` | 0,875 rem | Inter | 1,65 | — |
| `t-eyebrow` | 0,69 rem | Inter 600 | — | +0,22em, caixa alta |
| `t-caveat` | 0,8125 rem | Inter | 1,62 | — |

**Piso de tamanho:** nada abaixo de 13px (`t-caveat`). Caveat de compliance é discreto, nunca ilegível.

**Números:** `font-variant-numeric: tabular-nums` em todo o site. Valor financeiro alinha em coluna, sempre.

**Itálico de destaque:** `t-accent` aplica itálico Bodoni na cor do acento. Uma palavra dentro de um título — nunca uma frase inteira, nunca duas vezes na mesma página.

---

## 03 · ESPAÇAMENTO

| Medida | Valor | Uso |
| :-- | :-- | :-- |
| **Medida editorial** | 1280px | Largura máxima do conteúdo |
| **Gutter** | 1,25rem · 2,5rem (≥768px) · 4rem (≥1280px) | Margem lateral |
| **Ritmo de seção** | 5rem · 7rem (≥768px) · 8rem (≥1024px) | Respiro vertical padrão |
| **Ritmo compacto** | 3,5rem · 4rem · 5rem | Seção que continua a anterior |
| **Ritmo estreito** | 3rem · 4rem | Faixas e notas |
| **Trilho de rótulo** | 14rem | Coluna esquerda do par rótulo/conteúdo |
| **Medida de leitura** | 62–66 caracteres | Parágrafo corrido |

**Unidade editorial recorrente:** rótulo à esquerda em trilho de 14rem, conteúdo à direita em coluna de no máximo 3xl. É o que dá ao site a cadência de documento institucional em vez de página de marketing.

**Fio, não caixa.** Separação se faz com fio de 1px na cor do `rule` da superfície. Sombra é usada só em cartão que levanta no hover, nunca como decoração.

---

## 04 · COMPONENTES

### Cartões e células

| Componente | Quando | Como |
| :-- | :-- | :-- |
| `panel` | Bloco de conteúdo leve | Superfície tingida + fio de 1px. Nunca cartão pesado. |
| `cell` + `cell-grid` | Hierarquia lida como área | Grade cujos vãos são fios de 1px |
| `cell-invert` | Os três núcleos de autoridade | Célula navy dentro de grade clara |
| `index-row` | Lista navegável | Fio superior, padding que cresce no hover |

**Hierarquia por área.** Nas frentes de advisory o peso não é só tipográfico: os três núcleos — NPL & Distressed Credit, Crédito Estruturado, FIDCs & Securities e Precatórios & Legal Claims — ocupam células grandes, iguais entre si, e invertem contra a superfície. As quatro capacidades complementares ficam em células menores. Uma pessoa entende a hierarquia antes de ler uma palavra.

### Botões e links

| Componente | Sobre navy | Sobre claro |
| :-- | :-- | :-- |
| `btn-primary` | Fundo champagne, texto navy | Fundo navy, texto marfim |
| `btn-secondary` | Contorno, texto branco | Contorno, texto navy |
| `link-reveal` | Champagne, fio cresce da esquerda | Bronze, mesmo comportamento |

### Movimento

- Entrada `rise`: 0,9s, deslocamento de 14px. **Nunca aplicada a h1 nem ao primeiro parágrafo** — o elemento de LCP pinta opaco no primeiro quadro.
- `hero-sweep`: varredura de luz de 16s, decorativa, atrás do texto, alternando.
- Transições de hover: 0,35–0,45s.
- `prefers-reduced-motion: reduce` desliga tudo, inclusive o scroll suave.

### Formulário

Campo sem caixa: apenas fio inferior, que vira acento no foco. Rótulo em caixa alta 11px. Foco visível com contorno de 2px na cor do acento, deslocado 3px.

---

## 05 · PADRÕES DE APRESENTAÇÃO

Aplicável a teaser, proposta comercial e ao Institutional Credentials Deck.

### Estrutura de página

| Elemento | Padrão |
| :-- | :-- |
| **Capa** | Obsidian ou navy. Título em Bodoni. Fio champagne. Descritor e data no rodapé. |
| **Divisória de seção** | Banda navy, título Bodoni, numeral de seção em champagne |
| **Página de conteúdo** | Fundo branco ou marfim, título navy em Bodoni, corpo em Aptos |
| **Tabela** | Cabeçalho navy com texto branco, fios de 1px, sem preenchimento alternado pesado |
| **Números** | Tabular, destacados em Bodoni sobre fundo claro ou champagne sobre navy |
| **Rodapé** | Caveat de compliance em 9–10pt, cinza secundário, em toda página |

### Tipografia em arquivo editável

Bodoni Moda e Inter não estarão instaladas no computador do destinatário. Em `.docx` e `.pptx`:

- **Corpo e tabela:** Aptos (presente em qualquer Microsoft 365 atual).
- **Título de capa e de divisória:** Bodoni Moda com a fonte **incorporada** no arquivo, ou convertido em imagem quando o arquivo precisar abrir em qualquer máquina.
- Nunca substituir Bodoni por uma serifada qualquer. Sem Bodoni, o título vai em Aptos — consistência vale mais que aproximação.

### O que vai em todo material

Caveat de compliance · aviso de investidor qualificado quando aplicável · "material preliminar, sujeito a due diligence" · fonte e data-base de todo dado de mercado · a Blackhill sempre como advisor, nunca como compradora.

---

## 06 · USO INSTITUCIONAL DA MARCA

### Wordmark

**BLACKHILL** em Inter 600, tracking +0,14em, com **CAPITAL** abaixo em 0,58rem e tracking +0,34em. Sobre navy, o wordmark é branco e a linha secundária é champagne. Sobre claro, ambos são navy.

### Símbolo

Duas formas angulares sobrepostas em contorno — o nome e a interseção. **Permanece pendente de aprovação formal.** O wordmark tipográfico é válido isoladamente e é o que está em uso.

### Área de respiro

Mínimo equivalente à altura da palavra BLACKHILL em todos os lados. Nada invade essa área.

### Assinatura institucional

> **Senior-Led. Technology-Enabled. Execution-Focused.**
> **Condução sênior. Tecnologia aplicada. Foco em execução.**

Forma nominal obrigatória. Aparece em faixa sob o hero, no topo da página de Abordagem, na capa do Credentials Deck e na assinatura de e-mail. Não aparece em páginas de frente de advisory nem em páginas legais.

---

## 07 · APLICAÇÕES PERMITIDAS E PROIBIDAS

### Permitido

- Alternar superfícies claras e escuras para criar ritmo editorial.
- Bodoni Moda em display, h1, h2, figuras e citações.
- Champagne e ouro institucional sobre navy; bronze sobre claro.
- Inverter um bloco navy dentro de uma seção clara, desde que ele declare a própria superfície.
- Acentos de plataforma, exclusivamente no Pilar 2.
- Numeral grande em Bodoni como marcador de hierarquia.

### Proibido

- **Champagne ou ouro institucional sobre fundo claro.** Reprova em contraste.
- **Bronze sobre navy.** Some.
- Bodoni Moda em parágrafo, lista, rótulo, menu ou formulário.
- Texto abaixo de 13px.
- Matiz fora desta paleta. Profundidade se obtém por alpha sobre os azuis existentes.
- Sombra como decoração; gradiente como preenchimento de bloco de conteúdo.
- Animação que esconda texto no carregamento, ou que atinja o h1.
- Cartão com canto arredondado acentuado — o sistema é de fio reto.
- Logotipo ou identidade visual atribuída a XCurve, Finders ou DealNorth.
- Paridade visual entre núcleo e capacidade complementar. Entre os três núcleos, ao contrário, a paridade é obrigatória.

---

## 08 · VERIFICAÇÃO ANTES DE PUBLICAR

- [ ] Nenhum texto abaixo de 4,5:1 de contraste — 3:1 para texto grande.
- [ ] Ouro no tom certo para a superfície.
- [ ] Bodoni apenas em título, figura e citação.
- [ ] Todo bloco escuro aninhado em seção clara declara sua superfície.
- [ ] Nenhum overflow horizontal em 375px.
- [ ] `prefers-reduced-motion` respeitado.
- [ ] h1 sem animação de opacidade.
- [ ] Dado de mercado com fonte e data-base.
- [ ] Caveat de compliance presente.
- [ ] Hierarquia das frentes preservada.
