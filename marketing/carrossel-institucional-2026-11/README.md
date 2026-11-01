# Carrossel institucional — lançamento do website

Novembro de 2026. Quatro páginas, 1080 × 1350 px (4:5), para publicação como
documento no LinkedIn.

| Arquivo | O que é |
| :-- | :-- |
| `blackhill-carrossel.pdf` | Peça final, 4 páginas. É este arquivo que sobe no LinkedIn. |
| `pagina-01…04.png` | As mesmas páginas em bitmap, 1080 × 1350, para uso como imagens. |
| `carrossel.html` | Fonte editável. Toda a composição vive aqui. |
| `css/fonts.css` · `media/*.woff2` | Bodoni Moda e Inter extraídas do build do site. |

## Por que as fontes estão aqui

As duas famílias são auto-hospedadas pelo `next/font` e só existem, como
arquivo, dentro de `.next/`, que não é versionado. Copiá-las para cá é o que
torna a peça reproduzível sem depender de um build local. São exatamente os
mesmos arquivos servidos em `blackhill.com.br` — a peça e o site não são
aproximações um do outro.

Se as fontes mudarem no site, reextraia:

```bash
npm run build
grep -o "@font-face{[^}]*}" .next/static/chunks/*.css > marketing/carrossel-institucional-2026-11/css/fonts.css
cp .next/static/media/*.woff2 marketing/carrossel-institucional-2026-11/media/
```

## Como regerar o PDF e os PNGs

```bash
cd marketing/carrossel-institucional-2026-11
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --allow-file-access-from-files \
  --run-all-compositor-stages-before-draw --virtual-time-budget=8000 \
  --no-pdf-header-footer --print-to-pdf=blackhill-carrossel.pdf \
  "file://$PWD/carrossel.html"
```

O `@page { size: 1080px 1350px; margin: 0 }` fixa a geometria: o PDF sai com
MediaBox de 810 × 1013 pt, que são exatamente 1080 × 1350 px a 96 dpi.

Para os PNGs, capture a página inteira em 1080 × 5400 com `--screenshot` e
recorte em quatro faixas de 1350 px.

## Decisões de design que não devem ser desfeitas

Valem o Brand Standard v1.4 e o [design system](../../BLACKHILL_DESIGN_SYSTEM.md).
Três pontos merecem registro porque um editor futuro tende a reverter:

**A escala é maior que a do site, de propósito.** O piso de 13px do Standard
vale para tela de navegador. Em uma peça de 1080px lida num telefone de 390px
de largura, 13px viram 4,7px aparentes. O caveat aqui está em 21px e o corpo
entre 23 e 30px. A hierarquia e as proporções do sistema estão preservadas; o
que mudou foi a régua.

**As três células da página 02 têm altura idêntica e fixa.** Paridade entre os
núcleos de autoridade é regra estrutural, não estética. Se um texto crescer,
reduza o texto — não a altura de uma célula só.

**Os acentos de plataforma da página 03 não são logotipo.** Champagne para
Finders, `#7FA894` para DealNorth, exclusivamente como fio e rótulo. Nenhuma
marca é atribuída às plataformas, e a página declara que elas estão em
diferentes estágios de desenvolvimento.
