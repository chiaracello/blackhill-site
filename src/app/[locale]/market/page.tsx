import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { Caveat, Eyebrow, PrimaryLink, Section, StatBlock } from "@/components/ui";
import { MARKET_PAGE, MARKET_STATS } from "@/content/pages";
import { DISCLAIMER, MARKET_CAVEAT, UI } from "@/content/site";
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
    path: "/market",
    title: pt
      ? "Mercado Endereçável e Acesso a Oportunidades"
      : "Addressable Market and Access to Opportunities",
    description: pt
      ? "Dimensionamento do mercado de crédito complexo no Brasil a partir de fontes públicas, e o processo qualificado de acesso a oportunidades sob confidencialidade."
      : "Sizing of Brazil's complex credit market from public sources, and the qualified process for accessing opportunities under confidentiality.",
  });
}

export default async function MarketPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = MARKET_PAGE[locale];
  const ui = UI[locale];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "pt" ? "Mercado endereçável" : "Addressable market"}
        title={copy.title}
        lede={copy.lede}
      />

      <Section rule>
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="01">
              {locale === "pt" ? "Dimensionamento" : "Market sizing"}
            </Eyebrow>
            <p className="t-caveat mt-5 max-w-xs">{copy.consolidation}</p>
          </div>

          <div>
            <div className="grid gap-10 sm:grid-cols-2">
              {MARKET_STATS[locale].map((stat) => (
                <StatBlock key={stat.label} {...stat} sourceLabel={ui.sources} />
              ))}
            </div>
            <Caveat className="mt-12">{MARKET_CAVEAT[locale]}</Caveat>
          </div>
        </div>
      </Section>

      <Section rule surface="ivory">
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="02">{locale === "pt" ? "Acesso" : "Access"}</Eyebrow>
          </div>
          <div>
            <div className="max-w-3xl">
              <h2 className="t-h2">{copy.accessTitle}</h2>
              <p className="t-lead mt-6">{copy.accessLede}</p>
            </div>

            <ol className="mt-12 grid gap-px sm:grid-cols-2">
              {copy.accessSteps.map((step, i) => (
                <li key={step.title} className="panel p-7 lg:p-8">
                  <span className="t-index">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-5 text-base font-bold text-fg">{step.title}</p>
                  <p className="t-small mt-3">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section rule>
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="03">{locale === "pt" ? "Aviso legal" : "Legal notice"}</Eyebrow>
          </div>
          <div className="max-w-3xl">
            <Caveat>{DISCLAIMER[locale]}</Caveat>
            <div className="mt-10">
              <PrimaryLink href={localePath(locale, "/contact")}>{ui.talkToUs}</PrimaryLink>
            </div>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: locale === "pt" ? "Mercado" : "Market", path: "/market" },
        ])}
      />
    </>
  );
}
