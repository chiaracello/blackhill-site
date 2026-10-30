import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  Caveat,
  Eyebrow,
  GoldRule,
  PrimaryLink,
  RevealLink,
  SecondaryLink,
  Section,
  SectionHead,
  Shell,
  StatBlock,
} from "@/components/ui";
import { ADVISORY_AREAS, TIER_LABEL, areasByTier } from "@/content/advisory";
import { APPROACH, SIGNATURE } from "@/content/approach";
import { ECOSYSTEM_SCOPE, PLATFORMS } from "@/content/ecosystem";
import { HOME, MARKET_STATS, PROCESS } from "@/content/pages";
import { MARKET_CAVEAT, UI } from "@/content/site";
import { isLocale, localePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

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
    path: "/",
    title: pt
      ? "Blackhill Capital | Advisory em Crédito Complexo e Investimentos em Tecnologia"
      : "Blackhill Capital | Complex Credit Advisory and Technology Investments",
    description: pt
      ? "Advisory independente em precatórios, NPL, distressed credit, claims e crédito estruturado — e um ecossistema de tecnologia aplicada ao crédito. Sem gestão de capital de terceiros."
      : "Independent advisory in court-ordered claims, NPL, distressed credit, judicial claims and structured credit — and a technology ecosystem applied to credit. No third-party capital under management.",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = HOME[locale];
  const ui = UI[locale];
  const core = areasByTier("core");
  const supporting = ADVISORY_AREAS.filter((area) => area.tier !== "core");

  return (
    <>
      {/* ---------------------------------------------------------------- HERO */}
      <section className="surface-obsidian relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(125% 95% at 8% 0%, rgb(22 48 79 / 0.92) 0%, rgb(7 21 38 / 0) 58%), radial-gradient(85% 70% at 92% 100%, rgb(201 168 76 / 0.14) 0%, rgb(7 21 38 / 0) 62%)",
          }}
        />
        <div className="hero-sweep" aria-hidden="true" />
        <Shell className="relative pb-20 pt-20 md:pb-28 md:pt-32 lg:pb-36 lg:pt-40">
          <p className="t-eyebrow">{copy.heroEyebrow}</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-end lg:gap-16">
            <div>
              <h1 className="t-display max-w-4xl">{copy.heroTitle}</h1>
              <GoldRule className="mt-10" />
              <p className="t-lead mt-8 max-w-2xl">{copy.heroLede}</p>
              <div className="mt-11 flex flex-wrap gap-4">
                <PrimaryLink href={localePath(locale, "/contact")}>
                  {copy.ctaPrimary}
                </PrimaryLink>
                <SecondaryLink href={localePath(locale, "/advisory")}>
                  {copy.ctaSecondary}
                </SecondaryLink>
              </div>
            </div>

            <dl className="space-y-5">
              {copy.heroPillars.map((pillar) => (
                <div key={pillar.label} className="border-l-2 border-gold-line pl-5">
                  <dt className="text-[0.9375rem] font-semibold tracking-tight text-fg">
                    {pillar.label}
                  </dt>
                  <dd className="t-small mt-1">{pillar.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Shell>
      </section>

      {/* ----------------------------------------------------------- SIGNATURE */}
      <section className="rule-top surface-navy-2">
        <Shell>
          <p className="t-eyebrow py-6 md:py-7">
            {SIGNATURE[locale].map((part, i) => (
              <span key={part}>
                {i > 0 ? (
                  <span aria-hidden="true" className="mx-3 opacity-50">
                    ·
                  </span>
                ) : null}
                {part}
              </span>
            ))}
          </p>
        </Shell>
      </section>

      {/* --------------------------------------------------------- INDEPENDENCE */}
      <section className="rule-top">
        <Shell>
          <dl className="grid md:grid-cols-3">
            {copy.triad.map((item, i) => (
              <div
                key={item.label}
                className={`py-10 md:py-12 ${
                  i > 0 ? "border-t border-rule md:border-l md:border-t-0 md:pl-10" : "md:pr-10"
                }`}
              >
                <dt className="text-sm font-bold tracking-wide text-fg">{item.label}</dt>
                <dd className="t-small mt-2.5">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </Shell>
      </section>

      {/* --------------------------------------------------------- TWO PILLARS */}
      <Section rule surface="ivory">
        <SectionHead
          eyebrow={copy.pillarsEyebrow}
          title={copy.pillarsTitle}
          lede={copy.pillarsLede}
        />
      </Section>

      {/* --------------------------------------------------------- SENIOR-LED */}
      <Section rule surface="warm">
        <SectionHead
          eyebrow={copy.seniorEyebrow}
          title={copy.seniorTitle}
          lede={copy.seniorLede}
        />

        <div className="mt-14 grid gap-px md:grid-cols-3">
          {APPROACH[locale].seniorPoints.map((point, i) => (
            <div key={point.label} className="panel p-7 lg:p-8">
              <span className="t-index">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-5 text-base font-bold text-fg">{point.label}</p>
              <p className="t-small mt-3">{point.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <RevealLink href={localePath(locale, "/approach")}>{copy.seniorCta}</RevealLink>
        </div>
      </Section>

      {/* ------------------------------------------------------ PILLAR 1 — CORE */}
      <Section rule surface="navy">
        <SectionHead
          eyebrow={copy.advisoryEyebrow}
          title={copy.advisoryTitle}
          lede={copy.advisoryLede}
        />

        <div className="mt-16 grid gap-px md:grid-cols-2">
          {core.map((area) => (
            <Link
              key={area.slug}
              href={localePath(locale, `/advisory/${area.slug}`)}
              className="panel panel-interactive group flex flex-col justify-between gap-10 p-8 md:p-10 lg:p-12"
            >
              <div>
                <Eyebrow index={area.index}>{TIER_LABEL.core[locale]}</Eyebrow>
                <h3 className="t-h3 mt-6 text-xl md:text-2xl">{area.title[locale]}</h3>
                <p className="t-body mt-4">{area.short[locale]}</p>
              </div>
              <span className="link-reveal">
                {ui.readMore} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>

        <ul className="mt-14">
          {supporting.map((area) => (
            <li key={area.slug}>
              <Link
                href={localePath(locale, `/advisory/${area.slug}`)}
                className="index-row group"
              >
                <span className="t-index">{area.index}</span>
                <span className="text-base font-bold text-fg">{area.title[locale]}</span>
                <span className="t-small hidden md:block">{area.short[locale]}</span>
                <span className="t-caveat uppercase tracking-[0.16em]">
                  {area.tier === "capability" ? ui.capability : ui.complementary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-rule" />
      </Section>

      {/* -------------------------------------------------- PILLAR 2 — ECOSYSTEM */}
      <Section rule surface="obsidian">
        <SectionHead
          eyebrow={copy.ecosystemEyebrow}
          title={copy.ecosystemTitle}
          lede={copy.ecosystemLede}
        />

        <div className="mt-16 grid gap-px md:grid-cols-3">
          {PLATFORMS.map((platform) => (
            <div key={platform.slug} className="panel p-8 lg:p-10">
              <Eyebrow index={platform.index}>{platform.category[locale]}</Eyebrow>
              <p className="t-h3 mt-6 text-xl">{platform.name}</p>
              <p className="t-body mt-4">{platform.lede[locale]}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-8">
          <RevealLink href={localePath(locale, "/ecosystem")}>
            {locale === "pt" ? "Ver o ecossistema" : "View the ecosystem"}
          </RevealLink>
        </div>

        <Caveat className="mt-10">{ECOSYSTEM_SCOPE[locale].body[1]}</Caveat>
      </Section>

      {/* ------------------------------------------------------------- MARKET */}
      <Section rule surface="ivory">
        <SectionHead eyebrow={copy.marketEyebrow} index="01" title={copy.marketTitle} />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {MARKET_STATS[locale].map((stat) => (
            <StatBlock key={stat.label} {...stat} sourceLabel={ui.sources} />
          ))}
        </div>

        <Caveat className="mt-12">{MARKET_CAVEAT[locale]}</Caveat>

        <div className="mt-10">
          <RevealLink href={localePath(locale, "/market")}>
            {locale === "pt" ? "Mercado e acesso a oportunidades" : "Market and access to opportunities"}
          </RevealLink>
        </div>
      </Section>

      {/* ------------------------------------------------------------ PROCESS */}
      <Section rule surface="warm">
        <SectionHead
          eyebrow={copy.processEyebrow}
          index="02"
          title={copy.processTitle}
          lede={copy.processLede}
        />

        <ol className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS[locale].map((phase) => (
            <li key={phase.index} className="panel flex flex-col p-8 lg:p-9">
              <span className="t-index">{phase.index}</span>
              <p className="mt-6 text-base font-bold text-fg">{phase.title}</p>
              <p className="t-small mt-3">{phase.detail}</p>
              <div className="mt-6 border-t border-rule pt-5">
                <p className="t-caveat uppercase tracking-[0.16em]">
                  {APPROACH[locale].deliverableLabel}
                </p>
                <p className="t-small mt-2 text-off-white">{phase.deliverable}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <RevealLink href={localePath(locale, "/approach")}>
            {locale === "pt" ? "Método de execução completo" : "The full method of execution"}
          </RevealLink>
        </div>
      </Section>

      {/* -------------------------------------------------------- SEGMENTATION */}
      <Section rule surface="ivory">
        <SectionHead eyebrow={copy.segmentEyebrow} index="03" title={copy.segmentTitle} />

        <div className="mt-14 grid gap-px md:grid-cols-3">
          {copy.segments.map((segment) => (
            <Link
              key={segment.title}
              href={localePath(locale, segment.href)}
              className="panel panel-interactive flex flex-col justify-between gap-10 p-8 lg:p-10"
            >
              <div>
                <p className="t-h3 text-lg">{segment.title}</p>
                <p className="t-small mt-3">{segment.detail}</p>
              </div>
              <span className="link-reveal">
                {ui.readMore} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------ CLOSING */}
      <Section rule surface="navy">
        <div className="max-w-3xl">
          <GoldRule />
          <h2 className="t-h2 mt-7">
            {locale === "pt"
              ? "Toda conversa começa por confidencialidade."
              : "Every conversation begins with confidentiality."}
          </h2>
          <p className="t-lead mt-6">
            {locale === "pt"
              ? "Não publicamos operações, cedentes ou investidores. O contato institucional é o ponto de partida — direto e discreto."
              : "We do not publish transactions, sellers or investors. Institutional contact is the starting point — direct and discreet."}
          </p>
          <div className="mt-10">
            <PrimaryLink href={localePath(locale, "/contact")}>{copy.ctaPrimary}</PrimaryLink>
          </div>
        </div>
      </Section>
    </>
  );
}
