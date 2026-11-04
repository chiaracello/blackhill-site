import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { Caveat, Eyebrow, PrimaryLink, RevealLink, Section } from "@/components/ui";
import { areaBySlug } from "@/content/advisory";
import { INSIGHTS, insightBySlug } from "@/content/insights";
import { DISCLAIMER, UI } from "@/content/site";
import { LOCALES, absoluteUrl, isLocale, localePath } from "@/lib/i18n";
import { breadcrumbSchema, buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    INSIGHTS.map((insight) => ({ locale, slug: insight.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const insight = insightBySlug(slug);
  if (!insight) return {};

  return buildMetadata({
    locale,
    path: `/insights/${insight.slug}`,
    title: insight.title[locale],
    description: insight.deck[locale],
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const insight = insightBySlug(slug);
  if (!insight) notFound();

  const ui = UI[locale];
  const sections = insight.sections[locale];
  const area = areaBySlug(insight.related);
  const others = INSIGHTS.filter((other) => other.slug !== insight.slug);

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumb={{ label: ui.backToInsights, href: "/insights" }}
        eyebrow={`Insight ${insight.index}`}
        title={insight.title[locale]}
        lede={insight.deck[locale]}
      />

      <Section rule>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
          <article className="max-w-3xl">
            {sections.map((section, i) => (
              <section key={section.heading} className={i > 0 ? "mt-14" : ""}>
                <h2 className="t-h3 border-t border-rule pt-8">
                  <span className="t-index mr-4">{String(i + 1).padStart(2, "0")}</span>
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="t-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {/*
              Commercial close. The audit is explicit that an explainer earns
              its keep through the link it sends to the corresponding practice
              page, not through the page view it collects — so this points at
              advisory, while the section below points at contact. Rendered
              only when the insight declares a `cta` and the related area
              resolves; an explainer without a commercial counterpart shows
              nothing here.
            */}
            {insight.cta && area ? (
              <div className="mt-16 border-t border-rule pt-8">
                <Eyebrow>
                  {locale === "pt" ? "Para quem avalia uma operação" : "Weighing a transaction"}
                </Eyebrow>
                <p className="t-body mt-4 max-w-2xl">{insight.cta[locale]}</p>
                <div className="mt-8">
                  <PrimaryLink href={localePath(locale, `/advisory/${area.slug}`)}>
                    {area.title[locale]}
                  </PrimaryLink>
                </div>
              </div>
            ) : null}

            <Caveat className="mt-16 border-t border-rule pt-8">{DISCLAIMER[locale]}</Caveat>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            {area ? (
              <div className="border-t border-rule pt-6">
                <Eyebrow>{locale === "pt" ? "Frente relacionada" : "Related practice"}</Eyebrow>
                <p className="mt-4">
                  <RevealLink href={localePath(locale, `/advisory/${area.slug}`)}>
                    {area.title[locale]}
                  </RevealLink>
                </p>
              </div>
            ) : null}

            <div className="mt-10 border-t border-rule pt-6">
              <Eyebrow>{locale === "pt" ? "Outros insights" : "Other insights"}</Eyebrow>
              <ul className="mt-4 space-y-3.5">
                {others.map((other) => (
                  <li key={other.slug}>
                    <RevealLink href={localePath(locale, `/insights/${other.slug}`)}>
                      {other.title[locale]}
                    </RevealLink>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section rule surface="ivory">
        <div className="max-w-2xl">
          <h2 className="t-h2">
            {locale === "pt" ? "Falar com a Blackhill." : "Talk to Blackhill."}
          </h2>
          <p className="t-lead mt-6">
            {locale === "pt"
              ? "Para discutir uma categoria de ativo ou uma situação específica, o contato institucional é direto."
              : "To discuss an asset category or a specific situation, institutional contact is direct."}
          </p>
          <div className="mt-10">
            <PrimaryLink href={localePath(locale, "/contact")}>{ui.talkToUs}</PrimaryLink>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: insight.title[locale], path: `/insights/${insight.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: insight.title[locale],
          description: insight.deck[locale],
          url: absoluteUrl(locale, `/insights/${insight.slug}`),
          inLanguage: locale === "pt" ? "pt-BR" : "en",
          isAccessibleForFree: true,
          publisher: { "@id": "https://blackhill.com.br/#organization" },
          author: { "@id": "https://blackhill.com.br/#organization" },
        }}
      />
    </>
  );
}
