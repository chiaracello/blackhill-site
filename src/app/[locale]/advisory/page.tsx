import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { Eyebrow, PrimaryLink, RevealLink, Section, Shell } from "@/components/ui";
import { ADVISORY_AREAS, TIER_LABEL, TIER_NOTE, TIER_ORDER, areasByTier } from "@/content/advisory";
import { UI } from "@/content/site";
import { isLocale, localePath } from "@/lib/i18n";
import { breadcrumbSchema, buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const pt = locale === "pt";

  return buildMetadata({
    locale,
    path: "/advisory",
    title: pt
      ? "Advisory | NPL, Crédito Estruturado e Precatórios"
      : "Advisory | NPL, Structured Credit and Precatórios",
    description: pt
      ? "Três núcleos de autoridade em crédito complexo — NPL & Distressed Credit, Crédito Estruturado, FIDCs & Securities e Precatórios & Legal Claims — e quatro capacidades complementares que viabilizam suas operações."
      : "Three cores of authority in complex credit — NPL & Distressed Credit, Structured Credit, FIDCs & Securities and Precatórios & Legal Claims — and four complementary capabilities that enable their transactions.",
  });
}

export default async function AdvisoryIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const ui = UI[locale];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "pt" ? "Pilar 01 — Blackhill Advisors" : "Pillar 01 — Blackhill Advisors"}
        title={
          locale === "pt"
            ? "Três núcleos de autoridade, sete frentes especializadas."
            : "Three cores of authority, seven specialised practice lines."
        }
        lede={
          locale === "pt"
            ? "A Blackhill concentra sua profundidade técnica em três núcleos de igual relevância. As demais frentes são capacidades complementares que viabilizam as operações desses núcleos — com conteúdo próprio, sem protagonismo narrativo equivalente."
            : "Blackhill concentrates its technical depth in three cores of equal standing. The remaining lines are complementary capabilities that enable those cores' transactions — with content of their own, without equivalent narrative prominence."
        }
      />

      {TIER_ORDER.map((tier, tierIndex) => {
        const areas = areasByTier(tier);
        const isCore = tier === "core";

        return (
          <Section
            key={tier}
            rule
            compact={tierIndex > 0}
            surface={tier === "core" ? "ivory" : "navy"}
          >
            <div className="grid gap-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
              <div>
                <Eyebrow index={`0${tierIndex + 1}`}>{TIER_LABEL[tier][locale]}</Eyebrow>
                <p className="t-caveat mt-5 max-w-xs">{TIER_NOTE[tier][locale]}</p>
              </div>

              <div>
                {isCore ? (
                  /* Hierarchy read as area: the core occupies the largest
                     cells on the page and inverts against its surface. */
                  <div className="cell-grid md:grid-cols-2 lg:grid-cols-3">
                    {areas.map((area) => (
                      <Link
                        key={area.slug}
                        href={localePath(locale, `/advisory/${area.slug}`)}
                        className="cell cell-invert"
                      >
                        <span className="t-numeral">{area.index}</span>
                        <div>
                          <h2 className="t-h2">{area.title[locale]}</h2>
                          <p className="t-body mt-5 max-w-[40ch]">{area.short[locale]}</p>
                          <span className="link-reveal mt-8 inline-block">
                            {ui.readMore} <span aria-hidden="true">→</span>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="cell-grid sm:grid-cols-2 lg:grid-cols-4">
                    {areas.map((area) => (
                      <Link
                        key={area.slug}
                        href={localePath(locale, `/advisory/${area.slug}`)}
                        className="cell hover:bg-[var(--surface-hover)]"
                      >
                        <span className="t-index">{area.index}</span>
                        <div>
                          <h2 className="t-h3">{area.title[locale]}</h2>
                          <p className="t-small mt-3">{area.short[locale]}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Section>
        );
      })}

      <Section rule>
        <Shell className="!px-0">
          <div className="max-w-2xl">
            <h2 className="t-h2">
              {locale === "pt"
                ? "Atua em alguma dessas categorias?"
                : "Do you operate in any of these categories?"}
            </h2>
            <p className="t-lead mt-6">
              {locale === "pt"
                ? "O contato institucional é direto e discreto. Nenhuma informação sobre ativos ou contrapartes circula antes da formalização de confidencialidade."
                : "Institutional contact is direct and discreet. No information on assets or counterparties circulates before confidentiality is formalised."}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <PrimaryLink href={localePath(locale, "/contact")}>{ui.talkToUs}</PrimaryLink>
              <RevealLink href={localePath(locale, "/approach")}>
                {locale === "pt" ? "Como a Blackhill executa" : "How Blackhill executes"}
              </RevealLink>
            </div>
          </div>
        </Shell>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: "Advisory", path: "/advisory" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: locale === "pt" ? "Frentes de advisory" : "Advisory practice lines",
          itemListElement: ADVISORY_AREAS.map((area, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: area.title[locale],
            url: `https://blackhill.com.br${localePath(locale, `/advisory/${area.slug}`)}`,
          })),
        }}
      />
    </>
  );
}
