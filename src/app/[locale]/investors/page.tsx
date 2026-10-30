import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { Caveat, CheckList, Eyebrow, PrimaryLink, Section } from "@/components/ui";
import { INVESTORS, MARKET_PAGE } from "@/content/pages";
import { DISCLAIMER } from "@/content/site";
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
    path: "/investors",
    title: pt ? "Para Investidores Institucionais" : "For Institutional Investors",
    description: pt
      ? "Acesso institucional a ativos de crédito complexos para family offices, fundos, gestoras, bancos e securitizadoras — com perfil de operações e processo de due diligence."
      : "Institutional access to complex credit assets for family offices, funds, asset managers, banks and securitisation companies — with transaction profile and due diligence process.",
  });
}

export default async function InvestorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = INVESTORS[locale];
  const access = MARKET_PAGE[locale];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "pt" ? "Investidores" : "Investors"}
        title={copy.title}
        lede={copy.lede}
      />

      <Section rule>
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="01">{copy.personasEyebrow}</Eyebrow>
          </div>
          <div className="grid gap-px sm:grid-cols-2">
            {copy.personas.map((persona) => (
              <div key={persona.title} className="panel flex flex-col gap-6 p-7 lg:p-8">
                <div>
                  <h2 className="t-h3 text-lg">{persona.title}</h2>
                  <p className="t-caveat mt-2">{persona.profile}</p>
                </div>
                <p className="t-small flex-1">{persona.detail}</p>
                <div className="border-t border-rule pt-4">
                  <p className="t-caveat uppercase tracking-[0.16em]">{copy.ticketLabel}</p>
                  <p className="mt-1.5 text-sm font-bold text-gold">{persona.ticket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section rule className="bg-navy-2/30">
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="02">{copy.profileEyebrow}</Eyebrow>
          </div>
          <div className="max-w-3xl">
            <h2 className="t-h2">{copy.profileTitle}</h2>
            <CheckList items={copy.expectations} tone="affirm" />
          </div>
        </div>
      </Section>

      <Section rule>
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="03">{copy.ddEyebrow}</Eyebrow>
          </div>
          <div>
            <div className="max-w-3xl">
              <h2 className="t-h2">{copy.ddTitle}</h2>
              <p className="t-lead mt-6">{copy.ddLede}</p>
            </div>

            <ol className="mt-12 grid gap-px sm:grid-cols-2">
              {access.accessSteps.map((step, i) => (
                <li key={step.title} className="panel p-7 lg:p-8">
                  <span className="t-index">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-5 text-base font-bold text-white">{step.title}</p>
                  <p className="t-small mt-3">{step.detail}</p>
                </li>
              ))}
            </ol>

            <Caveat className="mt-12">{DISCLAIMER[locale]}</Caveat>

            <div className="mt-10">
              <PrimaryLink href={localePath(locale, "/contact")}>
                {locale === "pt" ? "Agendar conversa institucional" : "Arrange an institutional call"}
              </PrimaryLink>
            </div>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: locale === "pt" ? "Investidores" : "Investors", path: "/investors" },
        ])}
      />
    </>
  );
}
