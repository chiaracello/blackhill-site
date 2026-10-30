import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import {
  Caveat,
  Eyebrow,
  GoldRule,
  PrimaryLink,
  RevealLink,
  Section,
} from "@/components/ui";
import { ENGAGE } from "@/content/advisory";
import { APPROACH } from "@/content/approach";
import { PROCESS } from "@/content/pages";
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
    path: "/approach",
    title: pt
      ? "Abordagem | Condução Sênior, Método e Execução"
      : "Our Approach | Senior Conduct, Method and Execution",
    description: pt
      ? "Como a Blackhill conduz um mandato de advisory: acesso direto ao profissional sênior responsável, especialistas mobilizados conforme cada mandato, quatro fases com entregáveis definidos e supervisão profissional sobre o uso de tecnologia e inteligência artificial."
      : "How Blackhill runs an advisory mandate: direct access to the senior professional responsible, specialists engaged as each mandate requires, four phases with defined deliverables, and professional supervision over the use of technology and artificial intelligence.",
  });
}

/** Label rail on the left, content on the right — the site's editorial unit. */
function Block({
  index,
  eyebrow,
  children,
}: {
  index: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
      <div>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = APPROACH[locale];
  const ui = UI[locale];
  const engage = ENGAGE[locale];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={copy.heroEyebrow}
        title={copy.title}
        lede={copy.lede}
      />

      {/* --------------------------------------------------------- SENIOR-LED */}
      <Section rule>
        <Block index="01" eyebrow={copy.seniorEyebrow}>
          <div className="max-w-3xl">
            <h2 className="t-h2">{copy.seniorTitle}</h2>
            <p className="t-lead mt-6">{copy.seniorLede}</p>
          </div>

          <dl className="mt-14 grid gap-px md:grid-cols-3">
            {copy.seniorPoints.map((point, i) => (
              <div key={point.label} className="panel p-7 lg:p-8">
                <span className="t-index">{String(i + 1).padStart(2, "0")}</span>
                <dt className="mt-5 text-base font-bold text-fg">{point.label}</dt>
                <dd className="t-small mt-3">{point.detail}</dd>
              </div>
            ))}
          </dl>
        </Block>
      </Section>

      {/* ------------------------------------------------- STRUCTURE PER MANDATE */}
      <Section rule surface="ivory">
        <Block index="02" eyebrow={copy.structureEyebrow}>
          <div className="max-w-3xl">
            <h2 className="t-h2">{copy.structureTitle}</h2>
            <div className="mt-8 space-y-6">
              {copy.structureBody.map((paragraph) => (
                <p key={paragraph} className="t-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Block>
      </Section>

      {/* ------------------------------------------------------------- METHOD */}
      <Section rule>
        <Block index="03" eyebrow={copy.methodEyebrow}>
          <div className="max-w-3xl">
            <h2 className="t-h2">{copy.methodTitle}</h2>
            <p className="t-lead mt-6">{copy.methodLede}</p>
          </div>

          <ol className="mt-14 grid gap-px sm:grid-cols-2">
            {PROCESS[locale].map((phase) => (
              <li key={phase.index} className="panel flex flex-col p-7 lg:p-8">
                <span className="t-index">{phase.index}</span>
                <p className="mt-5 text-base font-bold text-fg">{phase.title}</p>
                <p className="t-small mt-3">{phase.detail}</p>
                <div className="mt-6 border-t border-rule pt-5">
                  <p className="t-caveat uppercase tracking-[0.16em]">
                    {copy.deliverableLabel}
                  </p>
                  <p className="t-small mt-2 text-off-white">{phase.deliverable}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 max-w-3xl">
            <GoldRule />
            <p className="t-lead mt-6 text-off-white">{copy.methodClose}</p>
          </div>

          <Caveat className="mt-10">{copy.methodCaveat}</Caveat>
        </Block>
      </Section>

      {/* --------------------------------------------------------- TECHNOLOGY */}
      <Section rule surface="ivory">
        <Block index="04" eyebrow={copy.techEyebrow}>
          <div className="max-w-3xl">
            <h2 className="t-h2">{copy.techTitle}</h2>
            <div className="mt-8 space-y-6">
              {copy.techBody.map((paragraph) => (
                <p key={paragraph} className="t-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-3xl border-l border-gold pl-7">
            <p className="t-caveat uppercase tracking-[0.16em]">{copy.techLimitLabel}</p>
            <p className="t-body mt-3 text-off-white">{copy.techLimit}</p>
          </div>

          <Caveat className="mt-10">{copy.techPillar}</Caveat>

          <div className="mt-8">
            <RevealLink href={localePath(locale, "/ecosystem")}>
              {locale === "pt" ? "Ver o ecossistema" : "View the ecosystem"}
            </RevealLink>
          </div>
        </Block>
      </Section>

      {/* ------------------------------------------------------------- ENGAGE */}
      <Section rule>
        <Block index="05" eyebrow={engage.eyebrow}>
          <div className="max-w-3xl">
            <h2 className="t-h2">{engage.title}</h2>
            <p className="t-lead mt-6">{engage.lede}</p>
          </div>

          <ol className="mt-12 grid gap-px sm:grid-cols-3">
            {engage.steps.map((step, i) => (
              <li key={step.title} className="panel p-6 lg:p-7">
                <span className="t-index">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-5 text-sm font-bold text-fg">{step.title}</p>
                <p className="t-small mt-3">{step.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <PrimaryLink href={localePath(locale, "/contact")}>{engage.cta}</PrimaryLink>
            <RevealLink href={localePath(locale, "/advisory")}>
              {ui.backToAdvisory}
            </RevealLink>
          </div>

          <Caveat className="mt-8">{engage.caveat}</Caveat>
        </Block>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: locale === "pt" ? "Abordagem" : "Our Approach", path: "/approach" },
        ])}
      />
    </>
  );
}
