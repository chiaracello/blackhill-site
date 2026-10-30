import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { Eyebrow, GoldRule, PrimaryLink, RevealLink, Section } from "@/components/ui";
import { COMPANIES } from "@/content/pages";
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
    path: "/companies",
    title: pt ? "Para Cedentes e Empresas" : "For Sellers and Companies",
    description: pt
      ? "Bancos, empresas e entes públicos com ativos de crédito para cessão, e empresas em reestruturação de passivos — assessoria independente, sem conflito de interesse."
      : "Banks, companies and public entities with credit assets to assign, and companies restructuring liabilities — independent advice, without conflict of interest.",
  });
}

export default async function CompaniesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = COMPANIES[locale];
  const ui = UI[locale];

  const blocks = [
    {
      index: "01",
      eyebrow: copy.sellersEyebrow,
      title: copy.sellersTitle,
      lede: copy.sellersLede,
      points: copy.sellersPoints,
      link: { href: "/advisory/npl-distressed", label: locale === "pt" ? "NPL & Distressed Credit" : "NPL & Distressed Credit" },
    },
    {
      index: "02",
      eyebrow: copy.restructuringEyebrow,
      title: copy.restructuringTitle,
      lede: copy.restructuringLede,
      points: copy.restructuringPoints,
      link: {
        href: "/advisory/restructuring",
        label: locale === "pt" ? "Reestruturação Corporativa" : "Corporate Restructuring",
      },
    },
  ];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "pt" ? "Cedentes e empresas" : "Sellers and companies"}
        title={copy.title}
        lede={copy.lede}
      />

      {blocks.map((block, i) => (
        <Section key={block.index} rule className={i % 2 === 1 ? "bg-navy-2/30" : ""}>
          <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
            <div>
              <Eyebrow index={block.index}>{block.eyebrow}</Eyebrow>
            </div>
            <div>
              <div className="max-w-3xl">
                <GoldRule />
                <h2 className="t-h2 mt-7">{block.title}</h2>
                <p className="t-lead mt-6">{block.lede}</p>
              </div>

              <dl className="mt-12 grid gap-px sm:grid-cols-2">
                {block.points.map((point, pointIndex) => (
                  <div key={point.title} className="panel p-7 lg:p-8">
                    <span className="t-index">{String(pointIndex + 1).padStart(2, "0")}</span>
                    <dt className="mt-5 text-base font-bold text-white">{point.title}</dt>
                    <dd className="t-small mt-3">{point.detail}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <RevealLink href={localePath(locale, block.link.href)}>
                  {block.link.label}
                </RevealLink>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section rule>
        <div className="max-w-2xl">
          <h2 className="t-h2">
            {locale === "pt"
              ? "Uma conversa preliminar não exige compromisso."
              : "A preliminary conversation requires no commitment."}
          </h2>
          <p className="t-lead mt-6">
            {locale === "pt"
              ? "Nenhuma informação sobre o ativo ou a instituição circula antes da formalização de confidencialidade. Para assuntos sensíveis, prefira o contato por telefone."
              : "No information about the asset or the institution circulates before confidentiality is formalised. For sensitive matters, a telephone call is preferable."}
          </p>
          <div className="mt-10">
            <PrimaryLink href={localePath(locale, "/contact")}>{ui.talkToUs}</PrimaryLink>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: locale === "pt" ? "Empresas" : "Companies", path: "/companies" },
        ])}
      />
    </>
  );
}
