@AGENTS.md

# Blackhill Capital — website institucional

Site institucional da Blackhill Capital em `blackhill.com.br`. Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · TypeScript strict. Deploy na Vercel, projeto `blackhill-site`, team `blackhill-capital`.

**Antes de alterar qualquer conteúdo visível, leia [`BLACKHILL_BRAND_CONTEXT.md`](BLACKHILL_BRAND_CONTEXT.md).** Ele consolida as referências institucionais aprovadas. A norma vigente é o [Brand & Communication Standard v1.1](docs/BRAND_STANDARD_v1.1.md).

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

---

## Produção

- **Não fazer merge nem deploy em produção sem autorização expressa de Marcello Chiara.**
- Branch de trabalho: `redesign/reposicionamento-2026`. Produção é `main`.
- Domínios `blackhill.com.br` e `www.blackhill.com.br` estão no projeto `blackhill-site` e não devem ser alterados.
