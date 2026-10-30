import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import FounderPortrait from "@/components/FounderPortrait";
import PageHero from "@/components/PageHero";
import {
  Caveat,
  CheckList,
  Eyebrow,
  GoldRule,
  PrimaryLink,
  RevealLink,
  Section,
} from "@/components/ui";
import { APPROACH } from "@/content/approach";
import { ABOUT, PROCESS } from "@/content/pages";
import { COMPANY, UI } from "@/content/site";
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
    path: "/about",
    title: pt
      ? "A Blackhill | Advisor Independente em Crédito Complexo"
      : "About Blackhill | Independent Complex Credit Advisor",
    description: pt
      ? "Boutique independente de assessoria financeira em ativos de crédito complexos. Trajetória do sócio-fundador, processo de quatro fases e declaração explícita de independência e governança."
      : "Independent financial advisory boutique for complex credit assets. The founding partner's track record, the four-phase process and an explicit statement of independence and governance.",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = ABOUT[locale];
  const ui = UI[locale];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "pt" ? "A Blackhill Capital" : "About Blackhill Capital"}
        title={copy.title}
        lede={copy.lede}
      />

      {/* --------------------------------------------------------- WHO WE ARE */}
      <Section rule>
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="01">{copy.bodyEyebrow}</Eyebrow>
          </div>
          <div className="max-w-3xl space-y-6">
            {copy.body.map((paragraph) => (
              <p key={paragraph} className="t-lead text-off-white">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------- BLACKHILL ADVISORS */}
      <Section rule className="bg-navy-2/30">
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="02">{copy.advisorsEyebrow}</Eyebrow>
          </div>
          <div className="max-w-3xl">
            <h2 className="t-h2">{copy.advisorsTitle}</h2>
            <p className="t-body mt-6">{copy.advisorsBody}</p>

            <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
              {copy.advisorsScope.map((item) => (
                <li
                  key={item}
                  className="border border-rule px-4 py-2 text-[0.8125rem] font-bold tracking-wide text-light-blue"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <RevealLink href={localePath(locale, "/advisory")}>
                {ui.backToAdvisory}
              </RevealLink>
            </div>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------------- FOUNDER */}
      <Section rule id="fundador">
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="03">{copy.founderEyebrow}</Eyebrow>
          </div>
          <div>
            <div className="grid gap-10 md:grid-cols-[19rem_minmax(0,1fr)] md:gap-12">
              <FounderPortrait caption={copy.portraitCaption} />
              <div className="max-w-2xl">
                <h2 className="t-h2">{COMPANY.founder.name}</h2>
                <p className="t-eyebrow mt-4 text-light-blue">{COMPANY.founder.role}</p>
                <p className="t-lead mt-7">{copy.founderIntro}</p>
                <div className="mt-8 space-y-5">
                  {copy.founderBio.map((paragraph) => (
                    <p key={paragraph} className="t-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <ol className="mt-14">
              {copy.track.map((entry, i) => (
                <li
                  key={entry.org}
                  className="grid gap-x-8 gap-y-2 border-t border-rule py-7 lg:grid-cols-[3.5rem_14rem_minmax(0,1fr)] lg:items-baseline"
                >
                  <span className="t-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-base font-bold text-white">{entry.org}</span>
                  <span>
                    <span className="block text-sm font-bold text-gold">{entry.role}</span>
                    <span className="t-small mt-1 block">{entry.detail}</span>
                  </span>
                </li>
              ))}
              <li className="border-t border-rule" />
            </ol>

            <Caveat className="mt-8">{copy.trackCaveat}</Caveat>

            <div className="mt-10 border-l border-gold pl-6">
              <p className="t-body text-off-white">{copy.founderResponsibility}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------------ PROCESS */}
      <Section rule className="bg-navy-2/30">
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="04">{locale === "pt" ? "Como atuamos" : "How we work"}</Eyebrow>
          </div>
          <div>
            <h2 className="t-h2 max-w-2xl">
              {locale === "pt"
                ? "Quatro fases, aplicadas sem exceção."
                : "Four phases, applied without exception."}
            </h2>
            <ol className="mt-12 grid gap-px sm:grid-cols-2">
              {PROCESS[locale].map((phase) => (
                <li key={phase.index} className="panel flex flex-col p-7 lg:p-8">
                  <span className="t-index">{phase.index}</span>
                  <p className="mt-5 text-base font-bold text-white">{phase.title}</p>
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

            <div className="mt-10">
              <RevealLink href={localePath(locale, "/approach")}>
                {locale === "pt" ? "Como a Blackhill executa" : "How Blackhill executes"}
              </RevealLink>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- INDEPENDENCE */}
      <Section rule id="independencia">
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="05">{copy.independenceEyebrow}</Eyebrow>
          </div>
          <div>
            <div className="max-w-3xl">
              <h2 className="t-h2">{copy.independenceTitle}</h2>
              <p className="t-lead mt-6">{copy.independenceLede}</p>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <GoldRule />
                <h3 className="t-h3 mt-6">{copy.doesTitle}</h3>
                <CheckList items={copy.does} tone="affirm" />
              </div>
              <div>
                <span className="block h-px w-10 bg-rule-strong" aria-hidden="true" />
                <h3 className="t-h3 mt-6">{copy.doesNotTitle}</h3>
                <CheckList items={copy.doesNot} tone="deny" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- CONCEPT SEPARATION */}
      <Section rule className="bg-navy-2/30">
        <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow index="06">
              {locale === "pt" ? "Rigor de comunicação" : "Communication rigour"}
            </Eyebrow>
          </div>
          <div>
            <h2 className="t-h2 max-w-2xl">{copy.separationTitle}</h2>
            <p className="t-lead mt-6 max-w-3xl">{copy.separationLede}</p>

            <dl className="mt-12 grid gap-px sm:grid-cols-2">
              {copy.separation.map((item, i) => (
                <div key={item.title} className="panel p-7">
                  <span className="t-index">{String(i + 1).padStart(2, "0")}</span>
                  <dt className="mt-5 text-base font-bold text-white">{item.title}</dt>
                  <dd className="t-small mt-3">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section rule>
        <div className="max-w-2xl">
          <h2 className="t-h2">
            {locale === "pt" ? "Falar com a Blackhill." : "Talk to Blackhill."}
          </h2>
          <p className="t-lead mt-6">
            {locale === "pt"
              ? "Atendimento direto com o profissional sênior responsável pelo mandato, tratado com confidencialidade."
              : "Direct contact with the senior professional responsible for the mandate, handled confidentially."}
          </p>
          <div className="mt-10">
            <PrimaryLink href={localePath(locale, "/contact")}>{ui.talkToUs}</PrimaryLink>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: locale === "pt" ? "A Blackhill" : "About", path: "/about" },
        ])}
      />
    </>
  );
}
