# Plano de originação — novembro de 2026 a abril de 2027

### Como a Blackhill atrai fluxo qualificado sem rastrear ninguém

| | |
| :-- | :-- |
| **Data** | 4 de novembro de 2026 |
| **Base** | [Auditoria de SEO e inbound](AUDITORIA_SEO_INBOUND.md) · [Posicionamento 2026–2031](POSICIONAMENTO_INSTITUCIONAL_2026-2031_v2.md) |
| **Norma** | [Brand & Communication Standard v1.4](BRAND_STANDARD_v1.4.md) |
| **Classificação** | Uso interno |

---

## 1. O alvo, antes das táticas

**Volume de leads é a métrica errada.** Cada mandato é conduzido pelo profissional sênior responsável, e a restrição do negócio é capacidade, não funil. Duzentos contatos por mês seriam um fracasso operacional, não um sucesso comercial.

O objetivo é **fluxo qualificado**: menos conversas, maior aderência de mandato. Isso elimina de saída a maior parte do repertório de geração de demanda — isca de conversão, formulário com download, nutrição automatizada — que, além de desalinhado, conflita com a decisão de não pedir documento nem dado de operação antes de NDA.

## 2. Três fatos que determinam a sequência

**O site tem dias de vida.** Publicado em 2 de novembro de 2026. Indexação ainda não existe. Nenhum plano que dependa de busca orgânica produz resultado antes de dois a três meses, por melhor que seja o conteúdo.

**A medição é deliberadamente limitada.** O site não tem analytics, pixel ou cookie de rastreamento, por decisão registrada em `CLAUDE.md` e refletida na política de privacidade. Restam dois instrumentos, e os dois bastam: o bloco **"Origem do contato"** que já viaja com o formulário — UTM, página de entrada e domínio referenciador, lidos do `sessionStorage` sem ferramenta de terceiro — e o **Search Console**, que ainda não foi criado.

**A entidade não está declarada.** O JSON-LD traz razão social, CNPJ e endereço, mas não `sameAs`. A auditoria aponta esse campo como o antídoto direto à colisão de nome com a Blackhill Partners, e ele está travado desde junho por um dado nunca confirmado.

## 3. Fase 1 — destravar · duas semanas

Nada aqui é marketing. É remover o que impede o resto de funcionar.

| Ação | Responsável | Observação |
| :-- | :-- | :-- |
| Criar propriedade no Google Search Console | Marcello | Prefixo de URL, verificação por "Tag HTML" |
| Preencher `GOOGLE_SITE_VERIFICATION` em Production | Marcello | A meta já é emitida por `src/app/[locale]/layout.tsx`; vazia, nada sai |
| Enviar `sitemap.xml` | Marcello | 48 entradas, PT e EN |
| Confirmar o LinkedIn da empresa e o do sócio-fundador | Marcello | Destrava o `sameAs` |
| Implementar `sameAs` no JSON-LD | Dev | Só após confirmação; nenhuma URL presumida entra |
| Bing Webmaster Tools | Marcello | Importa do Search Console; o Copilot consulta esse índice |
| Revisar Google Business Profile | Marcello | Perfil antigo com dado velho compete com o site |

**Por que a propriedade é por prefixo e não por domínio.** A de domínio é tecnicamente preferível, mas exige registro TXT no DNS — e DNS não se altera sem decisão específica. A de prefixo resolve com a meta que o código já emite.

## 4. Fase 2 — rede de referência · contínua

**É daqui que saem mandatos de boutique, e é o canal hoje subutilizado.**

Quem encontra a situação estressada antes de todo mundo não é um buscador. São advogados de recuperação judicial, auditores, administradores de FIDC, servicers, assessores de M&A e consultores de reestruturação. Eles esbarram no problema no exercício do próprio trabalho e não têm a solução de monetização.

O trabalho é **nominal, não difuso**: lista de 20 a 30 nomes por categoria, uma conversa estruturada com cada um ao longo de um trimestre. Não é networking — é apresentação de capacidade a quem origina.

O site publicado passa a servir de credencial nessas conversas, que é exatamente a função para a qual foi desenhado.

## 5. Fase 3 — LinkedIn técnico · doze semanas

A campanha institucional começou em 3 de novembro.

A auditoria é precisa sobre onde está o valor, e vale repetir: **o retorno de SEO não está no post, está no link do post para a página de frente correspondente.** Cada publicação aponta para `/advisory/<frente>`, nunca apenas para a home.

Duas correções de rota em relação ao que está programado:

**Publicar pelo perfil, não só pela página.** Em mercado de crédito, conteúdo técnico assinado por pessoa tem alcance e credibilidade substancialmente maiores que post de página institucional. A página serve de arquivo; o perfil é o que circula.

**Cadência quinzenal amarrada aos insights.** Cada insight publicado vira um post que o resume e aponta para ele. Resolve conteúdo e backlink no mesmo movimento.

## 6. Fase 4 — insights 06 a 12 · dois trimestres

Os sete temas já estão definidos na auditoria, com frente e intenção. **Inverter a ordem numérica e começar pelos de intenção comercial**, que capturam quem está com o problema na mesa agora:

| Ordem | # | Tema | Frente |
| :-- | :-- | :-- | :-- |
| 1º | 06 | Como funciona a cessão de uma carteira NPL | NPL |
| 2º | 09 | Due diligence de carteira: o que se verifica | NPL |
| 3º | 11 | LC 208/2024: o que o município precisa aprovar | Dívida ativa |
| 4º | 10 | Reestruturação extrajudicial × recuperação judicial | Reestruturação |
| 5º | 07 | O que é um FIDC NP e quando faz sentido | Crédito estruturado |
| 6º | 08 | EC 113/2021 e a atualização de precatórios | Precatórios |
| 7º | 12 | O papel do servicer na curva de recuperação | Servicing |

PT e EN simultâneos, sempre. `hreflang` incompleto é pior que ausência de versão.

## 7. Fase 5 — originação direta

O universo que efetivamente vende carteira no Brasil é finito: algumas dezenas de instituições financeiras, fundos, varejistas e utilities. Para precatórios e dívida ativa, entes públicos determinados. Não é prospecção em massa — é uma lista que cabe numa planilha.

Com o site no ar e a assinatura institucional pronta, a abordagem direta ganha lastro que não tinha em junho.

## 8. O que não fazer

Vedado pela auditoria, pela arquitetura aprovada ou pelo Standard:

- **Blog de atualidades.** Exige manutenção contínua e a fase 1 da arquitetura o proíbe.
- **Páginas por cidade.** Não corresponde a como o mercado busca.
- **Conteúdo que precise prometer resultado para converter.** O smoke test quebra se a linguagem proibida aparecer no HTML.
- **Formulário com documento ou dado de operação antes de NDA.**
- **Mídia paga com retargeting.** Ver a seção seguinte.

## 9. A decisão em aberto: aquisição paga

O site não tem pixel, cookie ou rastreador. A consequência prática é que **mídia paga funcionaria apenas como alcance bruto** — sem retargeting, sem otimização por conversão, sem público semelhante. Em um mercado de poucas centenas de decisores, é o pior uso possível de verba.

Se em algum momento a decisão mudar, `src/content/legal.ts` precisa ser atualizado nas seções 4 e 5 **no mesmo deploy**, e o banner de consentimento passa a ser obrigatório. É decisão de posicionamento, não ajuste técnico.

**Recomendação:** manter como está. Para público institucional que valoriza discrição, a ausência de rastreamento é um argumento, não uma limitação.

## 10. Medição

| Indicador | Fonte | Primeiro sinal |
| :-- | :-- | :-- |
| Contatos qualificados por mês | Bloco "Origem do contato" no e-mail do formulário | Imediato |
| Taxa de aderência de mandato | Registro manual: contatos que viram conversa | Imediato |
| Posição nos seis clusters comerciais | Search Console | 8 a 12 semanas |
| Backlinks ganhos | Search Console | 8 a 12 semanas |
| Alcance e cliques | Buffer | Imediato |

A rede de referência dá retorno em semanas. A busca orgânica, em trimestres. Planejar o contrário é a forma mais comum de abandonar um plano de inbound no segundo mês.

---

## Pendências que bloqueiam

| Pendência | Bloqueia |
| :-- | :-- |
| URL do LinkedIn da empresa, não confirmada | `sameAs` no JSON-LD, Fase 1 |
| URL do LinkedIn do sócio-fundador, não confirmada | `sameAs` e assinatura de e-mail |
| Token do Search Console | Toda a medição de busca |
| Canal Finders travado no Buffer | Publicação pela página da própria plataforma |
