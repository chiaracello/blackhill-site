# Blackhill Capital — website institucional

Site institucional da Blackhill Capital, em `blackhill.com.br`.
Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript strict · deploy na Vercel.

Bilíngue — português (padrão, sem prefixo de rota) e inglês (`/en`).

---

## Antes de alterar conteúdo

Leia **[`BLACKHILL_BRAND_CONTEXT.md`](BLACKHILL_BRAND_CONTEXT.md)**. A norma vigente é o
**[Brand & Communication Standard v1.1](docs/BRAND_STANDARD_v1.1.md)**, que fixa paleta,
tipografia, linguagem proibida e limites de divulgação. As regras de trabalho estão em
[`CLAUDE.md`](CLAUDE.md).

---

## Desenvolvimento

```bash
npm install
npm run dev          # http://localhost:3000
```

## Qualidade

```bash
npm run verify       # lint + typecheck + build + smoke
```

```bash
npm run smoke        # exige um build prévio; sobe next start na porta 3399
```

O smoke test (`scripts/smoke.mjs`, sem dependências) verifica, nos dois idiomas: status,
cabeçalhos de segurança, `lang`, título, description, canonical, hreflang, um único `<h1>`,
ausência de linguagem de retorno proibida, todos os links internos, os redirects das rotas
de 2026, `robots.txt`, `sitemap.xml` e o 404.

---

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. **Sem `RESEND_API_KEY` e `CONTACT_FROM_EMAIL`, o
formulário de contato recusa o envio e informa o visitante de que a mensagem não foi
registrada** — por decisão de projeto, nunca exibe confirmação sem entrega.

| Variável | Obrigatória em produção | Função |
| :-- | :-- | :-- |
| `RESEND_API_KEY` | sim | Chave do provedor de envio de e-mail |
| `CONTACT_FROM_EMAIL` | sim | Remetente, em domínio verificado no provedor |
| `CONTACT_TO_EMAIL` | não | Destinatário (default: `mchiara@blackhillcapital.com.br`) |

---

## Estrutura

```
src/
  app/[locale]/          páginas (o root layout vive aqui — padrão de i18n do Next)
  app/actions/           server actions (entrega do formulário de contato)
  app/robots.ts          robots.txt
  app/sitemap.ts         sitemap.xml com alternates hreflang
  components/            componentes de UI e layout
  content/               TODO texto visível, em pt e en
  lib/                   i18n, metadados e JSON-LD
  proxy.ts               i18n de rotas e redirects legados (Next 16: middleware → proxy)
scripts/smoke.mjs        suíte de verificação end-to-end
docs/                    diagnóstico, posicionamento e brand standard
```

**Nenhum texto visível no JSX.** Todo conteúdo vive em `src/content/*`, nos dois idiomas.

---

## Rotas

PT na raiz, EN sob `/en`:

`/` · `/about` · `/advisory` · `/advisory/<frente>` · `/ecosystem` · `/market` ·
`/investors` · `/companies` · `/insights` · `/insights/<slug>` · `/contact` ·
`/privacy` · `/compliance`

Rotas de junho de 2026 preservadas com 301 em `src/proxy.ts`:
`/why-blackhill` → `/about` · `/practice-areas` → `/advisory` ·
`/practice-areas/precatorios` → `/advisory/precatorios` ·
`/practice-areas/npl` → `/advisory/npl-distressed` · `/origination-access` → `/market`

---

## Produção

Projeto Vercel `blackhill-site` (team `blackhill-capital`), domínios `blackhill.com.br` e
`www.blackhill.com.br`. Produção é `main`.

**Não fazer merge nem deploy em produção sem autorização expressa do sócio-fundador.**
