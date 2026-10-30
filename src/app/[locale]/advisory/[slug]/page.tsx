import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import {
  ArgumentList,
  Caveat,
  CheckList,
  Eyebrow,
  FrameList,
  GoldRule,
  PrimaryLink,
  RevealLink,
  Section,
} from "@/components/ui";
import { ADVISORY_AREAS, ENGAGE, TIER_LABEL, areaBySlug } from "@/content/advisory";
import { INSIGHTS } from "@/content/insights";
import { AREA_NATURE, DISCLAIMER, UI } from "@/content/site";
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
    // The problem statement is the strongest summary for search results.
    description: area.problem[locale].slice(0, 300),
  });
}

/** Label rail + content, the recurring two-column unit on this page. */
function Block({
  index,
  eyebrow,
  note,
  children,
}: {
  index: string;
  eyebrow: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
      <div>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        {note ? <p className="t-caveat mt-5 max-w-xs">{note}</p> : null}
      </div>
      <div className="max-w-3xl">{children}</div>
    </div>
  );
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
  const engage = ENGAGE[locale];
  const related = INSIGHTS.filter((insight) => insight.related === area.slug);
  const siblings = ADVISORY_AREAS.filter((other) => other.slug !== area.slug).slice(0, 3);
  // Opens the contact form with this front's subject already selected.
  const contactHref = `${localePath(locale, "/contact")}?assunto=${AREA_NATURE[area.slug] ?? "other"}`;

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumb={{ label: ui.backToAdvisory, href: "/advisory" }}
        eyebrow={`${area.index} — ${TIER_LABEL[area.tier][locale]}`}
        title={area.title[locale]}
        lede={area.lede[locale]}
      />

      {/* 1 — What financial problem does this solve? */}
      <Section rule>
        <Block
          index="01"
          eyebrow={locale === "pt" ? "O problema" : "The problem"}
        >
          <p className="t-lead text-off-white">{area.problem[locale]}</p>
        </Block>
      </Section>

      {/* 2 — Why it is technically complex. */}
      <Section rule surface="ivory">
        <Block
          index="02"
          eyebrow={locale === "pt" ? "Por que é complexo" : "Why it is complex"}
        >
          <ArgumentList items={area.complexity[locale]} />
        </Block>
      </Section>

      {/* 3 — Who can engage Blackhill. */}
      <Section rule>
        <Block
          index="03"
          eyebrow={locale === "pt" ? "Quem pode contratar" : "Who can engage us"}
          note={
            locale === "pt"
              ? "Atuamos por mandato. A aderência é avaliada caso a caso, antes de qualquer compromisso."
              : "We act under mandate. Fit is assessed case by case, before any commitment."
          }
        >
          <CheckList items={area.who[locale]} tone="affirm" />
        </Block>
      </Section>

      {/* 4 — How we act in structuring and negotiation. */}
      <Section rule surface="ivory">
        <Block
          index="04"
          eyebrow={locale === "pt" ? "Como atuamos" : "How we work"}
          note={
            locale === "pt"
              ? "Advisor, estruturador e intermediário. Não adquirimos o ativo que assessoramos."
              : "Advisor, structurer and intermediary. We do not acquire the asset we advise on."
          }
        >
          <ArgumentList items={area.role[locale]} />

          <div className="mt-10 border-l border-gold pl-6">
            <p className="t-caveat uppercase tracking-[0.16em]">
              {locale === "pt" ? "Condução" : "Conduct"}
            </p>
            <p className="t-body mt-3 text-off-white">{area.execution[locale]}</p>
          </div>

          <div className="mt-8">
            <RevealLink href={localePath(locale, "/approach")}>
              {locale === "pt" ? "Como a Blackhill executa" : "How Blackhill executes"}
            </RevealLink>
          </div>
        </Block>
      </Section>

      {/* 5 — Regulatory and procedural frame. */}
      <Section rule>
        <Block
          index="05"
          eyebrow={locale === "pt" ? "Arcabouço e referências" : "Framework and references"}
        >
          <FrameList items={area.frame[locale]} />
          <Caveat className="mt-10">{DISCLAIMER[locale]}</Caveat>
        </Block>
      </Section>

      {related.length > 0 ? (
        <Section rule surface="ivory">
          <Block
            index="06"
            eyebrow={locale === "pt" ? "Leitura técnica" : "Technical reading"}
          >
            <ul className="!max-w-none">
              {related.map((insight) => (
                <li key={insight.slug}>
                  <Link
                    href={localePath(locale, `/insights/${insight.slug}`)}
                    className="index-row"
                  >
                    <span className="t-index">{insight.index}</span>
                    <span className="text-base font-bold text-fg">
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
          </Block>
        </Section>
      ) : null}

      {/* 6 — How to start a confidential conversation. */}
      <Section rule>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div>
            <Eyebrow index={related.length > 0 ? "07" : "06"}>{engage.eyebrow}</Eyebrow>
            <GoldRule className="mt-7" />
            <h2 className="t-h2 mt-7 max-w-2xl">{engage.title}</h2>
            <p className="t-lead mt-6 max-w-2xl">{engage.lede}</p>

            <ol className="mt-12 grid gap-px sm:grid-cols-3">
              {engage.steps.map((step, i) => (
                <li key={step.title} className="panel p-6 lg:p-7">
                  <span className="t-index">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-5 text-sm font-bold text-fg">{step.title}</p>
                  <p className="t-small mt-3">{step.detail}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <PrimaryLink href={contactHref}>{engage.cta}</PrimaryLink>
            </div>

            <Caveat className="mt-8">{engage.caveat}</Caveat>
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
