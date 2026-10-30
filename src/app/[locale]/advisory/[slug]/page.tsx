import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import {
  ArgumentList,
  Caveat,
  Eyebrow,
  FrameList,
  PrimaryLink,
  RevealLink,
  Section,
} from "@/components/ui";
import { ADVISORY_AREAS, TIER_LABEL, areaBySlug } from "@/content/advisory";
import { INSIGHTS } from "@/content/insights";
import { DISCLAIMER, UI } from "@/content/site";
import { LOCALES, isLocale, localePath } from "@/lib/i18n";
import { breadcrumbSchema, buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    ADVISORY_AREAS.map((area) => ({ locale, slug: area.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const area = areaBySlug(slug);
  if (!area) return {};

  return buildMetadata({
    locale,
    path: `/advisory/${area.slug}`,
    title: area.title[locale],
    description: area.short[locale],
  });
}

export default async function AdvisoryAreaPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const area = areaBySlug(slug);
  if (!area) notFound();

  const ui = UI[locale];
  const related = INSIGHTS.filter((insight) => insight.related === area.slug);
  const siblings = ADVISORY_AREAS.filter((other) => other.slug !== area.slug).slice(0, 3);

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumb={{ label: ui.backToAdvisory, href: "/advisory" }}
        eyebrow={`${area.index} — ${TIER_LABEL[area.tier][locale]}`}
        title={area.title[locale]}
        lede={area.lede[locale]}
      />

      <Section rule>
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow>
              {locale === "pt" ? "Por que é complexo" : "Why it is complex"}
            </Eyebrow>
          </div>
          <div className="max-w-3xl">
            <ArgumentList items={area.complexity[locale]} />
          </div>
        </div>
      </Section>

      <Section rule className="bg-navy-2/30">
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow>{locale === "pt" ? "O papel da Blackhill" : "Blackhill's role"}</Eyebrow>
            <p className="t-caveat mt-5 max-w-xs">
              {locale === "pt"
                ? "Atuamos como advisor, estruturador e intermediário. Não adquirimos o ativo que assessoramos."
                : "We act as advisor, structurer and intermediary. We do not acquire the asset we advise on."}
            </p>
          </div>
          <div className="max-w-3xl">
            <ArgumentList items={area.role[locale]} />
          </div>
        </div>
      </Section>

      <Section rule>
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow>
              {locale === "pt" ? "Arcabouço e referências" : "Framework and references"}
            </Eyebrow>
          </div>
          <div className="max-w-3xl">
            <FrameList items={area.frame[locale]} />
            <Caveat className="mt-10">{DISCLAIMER[locale]}</Caveat>
          </div>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section rule className="bg-navy-2/30">
          <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
            <div>
              <Eyebrow>{locale === "pt" ? "Leitura técnica" : "Technical reading"}</Eyebrow>
            </div>
            <div>
              <ul>
                {related.map((insight) => (
                  <li key={insight.slug}>
                    <Link
                      href={localePath(locale, `/insights/${insight.slug}`)}
                      className="index-row"
                    >
                      <span className="t-index">{insight.index}</span>
                      <span className="text-base font-bold text-white">
                        {insight.title[locale]}
                      </span>
                      <span className="t-small">{insight.deck[locale]}</span>
                      <span className="link-reveal hidden lg:inline-block">
                        <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="border-t border-rule" />
              </ul>
            </div>
          </div>
        </Section>
      ) : null}

      <Section rule>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="t-h2">
              {locale === "pt"
                ? "Falar sobre esta categoria."
                : "Discuss this category."}
            </h2>
            <p className="t-lead mt-6">
              {locale === "pt"
                ? "O contato é direto e tratado com confidencialidade. Não envie documentos de operações por formulário."
                : "Contact is direct and handled confidentially. Please do not send transaction documents by form."}
            </p>
            <div className="mt-10">
              <PrimaryLink href={localePath(locale, "/contact")}>{ui.talkToUs}</PrimaryLink>
            </div>
          </div>

          <div>
            <Eyebrow>{locale === "pt" ? "Outras frentes" : "Other practice lines"}</Eyebrow>
            <ul className="mt-6 space-y-4">
              {siblings.map((other) => (
                <li key={other.slug}>
                  <RevealLink href={localePath(locale, `/advisory/${other.slug}`)}>
                    {other.title[locale]}
                  </RevealLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: "Advisory", path: "/advisory" },
          { name: area.title[locale], path: `/advisory/${area.slug}` },
        ])}
      />
    </>
  );
}
