import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { Caveat, Section } from "@/components/ui";
import { INSIGHTS } from "@/content/insights";
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
    path: "/insights",
    title: pt
      ? "Insights | Precatórios, NPL, Dívida Ativa e Claims"
      : "Insights | Court-Ordered Claims, NPL, Public Receivables and Claims",
    description: pt
      ? "Conteúdo técnico de referência sobre as classes de ativo que a Blackhill estrutura — sem projeção de retorno e sem referência a operações específicas."
      : "Technical reference content on the asset classes Blackhill structures — with no return projections and no reference to specific transactions.",
  });
}

export default async function InsightsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow="Insights"
        title={
          locale === "pt"
            ? "Conhecimento técnico sobre os ativos que estruturamos."
            : "Technical knowledge on the assets we structure."
        }
        lede={
          locale === "pt"
            ? "Páginas de referência sobre as classes de ativo do nosso núcleo de autoridade. Não são material comercial: não há projeção de retorno, nem menção a operações, cedentes ou investidores."
            : "Reference pages on the asset classes at our core. This is not sales material: there are no return projections and no mention of transactions, sellers or investors."
        }
      />

      <Section rule>
        <ul>
          {INSIGHTS.map((insight) => (
            <li key={insight.slug}>
              <Link href={localePath(locale, `/insights/${insight.slug}`)} className="index-row">
                <span className="t-index">{insight.index}</span>
                <span className="text-base font-bold text-white">{insight.title[locale]}</span>
                <span className="t-small">{insight.deck[locale]}</span>
                <span className="link-reveal hidden lg:inline-block">
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
          <li className="border-t border-rule" />
        </ul>

        <Caveat className="mt-12">
          {locale === "pt"
            ? "Conteúdo de natureza educacional e técnica. Não constitui parecer jurídico, recomendação de investimento nem análise de operação específica."
            : "Educational and technical content. It does not constitute a legal opinion, an investment recommendation or analysis of any specific transaction."}
        </Caveat>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
    </>
  );
}
