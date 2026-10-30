@AGENTS.md

# Blackhill Capital — website institucional

Site institucional da Blackhill Capital em `blackhill.com.br`. Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · TypeScript strict. Deploy na Vercel, projeto `blackhill-site`, team `blackhill-capital`.

**Antes de alterar qualquer conteúdo visível, leia [`BLACKHILL_BRAND_CONTEXT.md`](BLACKHILL_BRAND_CONTEXT.md).** Ele consolida as referências institucionais aprovadas. A norma vigente é o [Brand & Communication Standard v1.2](docs/BRAND_STANDARD_v1.2.md).

---

## Regras que não se negociam

### Conteúdo e compliance

- **Nunca** publicar IRR, TIR, retorno esperado, rentabilidade-alvo, MOIC ou qualquer projeção de rentabilidade. O smoke test falha se essa linguagem aparecer no HTML renderizado.
- **Nunca** nomear cedentes, devedores, investidores, contrapartes ou operações específicas.
- **Nunca** apresentar dado de mercado sem fonte e data-base de consolidação, acompanhado do caveat de que não representa operações da Blackhill (`MARKET_CAVEAT`).
- **Nunca** divulgar percentuais de participação, controle ou relações societárias das plataformas do ecossistema.
- A declaração de independência vigente é **"Não investimos nas operações que assessoramos. Não gerimos capital de terceiros."** Não reintroduzir o absoluto "Sem capital próprio": o Pilar 2 o torna falso.
- As sete frentes de advisory **nunca** aparecem em paridade visual. A hierarquia núcleo → capacidades → complementares é estrutural, codificada em `Tier` (`src/content/advisory.ts`).
- Texto institucional é bilíngue. Toda string visível vive em `src/content/*`, com `pt` e `en`. **Nunca** escrever texto solto no JSX.

### Identidade visual

- Paleta e tipografia são fixadas pelo Standard: navy `#0D1B2E` / `#152236` / `#1E3047`, ouro `#C9A84C`, Arial.
- **Ouro apenas sobre navy — nunca ouro sobre branco.**
- Profundidade se obtém por alpha sobre os navies existentes, nunca por novos matizes.
- Tokens em `src/app/globals.css`. Não usar cores literais em componentes.

### Privacidade

- Este site **não** usa analytics de terceiros, pixels, cookies de publicidade ou qualquer rastreamento. Por isso não há banner de cookies.
- Se isso mudar, `src/content/legal.ts` (seções 4 e 5 de `PRIVACY`) precisa ser atualizado **na mesma alteração**, e o banner de consentimento passa a ser obrigatório.

### Originação comercial

- O site origina mandatos, mas **originar não autoriza prometer**. Nunca prometer aprovação de crédito, execução garantida, prazo de fechamento, retorno ou êxito — nem em CTA, nem em copy de conversão. O smoke test falha se linguagem de retorno proibida aparecer.
- Toda página de frente de advisory responde quatro perguntas, nesta ordem: o problema, quem pode contratar, como atuamos, como iniciar uma conversa confidencial. A estrutura está em `src/app/[locale]/advisory/[slug]/page.tsx`; o conteúdo, nos campos `problem` e `who` de `src/content/advisory.ts`.
- Toda frente declara que o contato preliminar **não é vinculante** (`ENGAGE.caveat`).
- A CTA primária é "Apresente sua operação" / "Discuss a Transaction" e leva sempre ao formulário qualificado.
- O formulário coleta **apenas** nome, empresa, e-mail profissional, natureza da oportunidade e descrição resumida. **Nunca** pedir documentos, nomes de contrapartes, dados de devedores ou informação sigilosa antes de NDA.
- A natureza da oportunidade vem de `OPPORTUNITY_NATURES` (lista fechada). `?assunto=<valor>` pré-seleciona o assunto; valores fora da lista são ignorados, nunca refletidos na página.

### Condução sênior e tecnologia

- **Nenhum texto afirma número de pessoas, sócios, escritórios, equipe permanente, quadro próprio de analistas, rede formal de parceiros ou parceiros contratados.** A formulação canônica é **"o profissional sênior responsável pelo mandato"**, sempre no singular. O oposto também é proibido: "one-man firm", "solo advisor" ou qualquer descrição do tamanho da casa.
- **Nenhum texto apresenta sistema, modelo ou inteligência artificial como autor de decisão de crédito, de precificação ou de recomendação.** A IA é suporte ao trabalho profissional; decisões, análises finais, recomendações e negociações são humanas — e isso aparece declarado em texto, sob o título "Supervisão e responsabilidade profissional" / "Professional supervision and responsibility" (`techLimitLabel`), nunca apenas implícito.
- Especialistas são mobilizados **conforme a necessidade de cada mandato**. Não afirmar que XCurve, Finders ou DealNorth estão integrados aos mandatos de advisory sem confirmação documental.
- **A regra sobre estrutura é de abstenção, não de ressalva:** não afirmar capacidade, equipe ou parceria que não exista — e tampouco enunciar publicamente a inexistência delas. A apresentação é positiva: condução sênior e mobilização de especialistas conforme a necessidade real de cada mandato.
- A assinatura institucional vive em `SIGNATURE` (`src/content/approach.ts`) e é travada nas duas línguas: *Condução sênior. Tecnologia aplicada. Foco em execução.* / *Senior-Led. Technology-Enabled. Execution-Focused.*
- Cada fase de `PROCESS` tem um `deliverable`. Entregável nomeado **não** é promessa de prazo, de fechamento ou de resultado.
- `COMPANY.founder.linkedin` é `null` por decisão: o valor anterior era presumido. Nenhum `sameAs` entra no JSON-LD sem URL verificada.

### Formulário de contato

- O formulário anterior exibia confirmação de recebimento sem transmitir nada. **A regra é absoluta: `status: "ok"` só pode ser retornado depois que o provedor aceitou a mensagem.** Qualquer outro desfecho retorna erro dizendo que a mensagem **não** foi registrada.
- Lógica em `src/app/actions/contact.ts`. Não introduzir caminho de sucesso otimista.

---

## Rotas e i18n

- PT é o idioma padrão e é servido **sem prefixo** (`/advisory`). EN vive em `/en/advisory`.
- `src/proxy.ts` (Next 16 renomeou `middleware` → `proxy`) faz o rewrite da raiz para `/pt`, redireciona `/pt/*` de volta para `/*` com 301 e trata as rotas legadas de junho de 2026.
- Ao adicionar uma rota: criar a página em `src/app/[locale]/`, acrescentá-la a `ROUTES` em `src/app/sitemap.ts` e a `PATHS` em `scripts/smoke.mjs`.
- Ao renomear uma rota: adicionar o par antigo → novo em `LEGACY_ROUTES` (`src/proxy.ts`) e em `LEGACY` (`scripts/smoke.mjs`). Nenhuma URL indexada pode passar a dar 404.
- Slugs são compartilhados entre os idiomas, por decisão: dois conjuntos de slugs exigiriam duas árvores de rotas.
- `/approach` ("Abordagem" / "Our Approach") está no menu principal. `/market` saiu do menu e permanece no rodapé, no sitemap e no smoke test — a indexação foi preservada.

---

## Qualidade

```bash
npm run verify     # lint + typecheck + build + smoke
```

O smoke test (`scripts/smoke.mjs`, zero dependências) sobe um `next start` real e verifica, nos dois idiomas: status 200, cabeçalhos de segurança, `lang`, título, description, canonical, hreflang (`pt-BR`, `en`, `x-default`), exatamente um `<h1>`, ausência de linguagem proibida, todos os links internos, os redirects legados, `robots.txt`, `sitemap.xml` e o 404.

**Rodar `npm run verify` antes de qualquer commit.**

---

## Variáveis de ambiente

| Variável | Obrigatória | Função |
| :-- | :-- | :-- |
| `RESEND_API_KEY` | sim, em produção | Chave do provedor de envio. Sem ela o formulário recusa o envio e informa o visitante. |
| `CONTACT_FROM_EMAIL` | sim, em produção | Remetente, em domínio verificado no provedor. |
| `CONTACT_TO_EMAIL` | não | Destinatário. Default: `mchiara@blackhillcapital.com.br`. |

## Imagem e foto

- A imagem Open Graph é gerada em `src/app/[locale]/opengraph-image.tsx` e referenciada explicitamente em `buildMetadata` — a convenção de arquivo sozinha não resolve sob o segmento `[locale]`.
- A foto do sócio-fundador entra por `COMPANY.founder.photo` (`src/content/site.ts`): basta pôr o arquivo em `public/` e apontar o caminho. Enquanto for `null`, a página renderiza o fallback tipográfico.
- **Não publicar a timeline da plataforma** enquanto os marcos não forem confirmados.

---

## Produção

- **Não fazer merge nem deploy em produção sem autorização expressa de Marcello Chiara.**
- Branch de trabalho: `redesign/reposicionamento-2026`. Produção é `main`.
- Domínios `blackhill.com.br` e `www.blackhill.com.br` estão no projeto `blackhill-site` e não devem ser alterados.
