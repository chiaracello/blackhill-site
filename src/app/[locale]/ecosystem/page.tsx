import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { ArgumentList, Eyebrow, GoldRule, PrimaryLink, Section } from "@/components/ui";
import { ECOSYSTEM_SCOPE, PLATFORMS } from "@/content/ecosystem";
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
    path: "/ecosystem",
    title: pt
      ? "Ecossistema de Tecnologia | XCurve, Finders e DealNorth"
      : "Technology Ecosystem | XCurve, Finders and DealNorth",
    description: pt
      ? "Plataformas de tecnologia aplicada à decisão de crédito, à originação de ativos complexos e à gestão de pipeline. Frente estruturalmente separada da atividade de advisory."
      : "Technology platforms applied to credit decisioning, complex asset origination and pipeline management. A front structurally separate from the advisory practice.",
  });
}

/**
 * Editorial accents that tell one platform from the next. They are section
 * ornaments within the Blackhill palette — never a logotype and never a visual
 * identity attributed to the platform itself (Standard v1.3 §03).
 *
 * Each plate is distinguished twice over: by accent and by the edge the rule
 * sits on. Finders carries the Standard's own `ouro institucional` #B8923F —
 * the token reserved for marks and linework over navy — rather than the
 * champagne used as the site's default accent, which left it reading as the
 * unstyled one of the three.
 */
const PLATFORM_STYLE: Record<string, { accent: string; edge: string }> = {
  xcurve: { accent: "#8FB4D9", edge: "border-t-2" },
  finders: { accent: "#B8923F", edge: "border-l-[3px] border-t-[3px]" },
  dealnorth: { accent: "#7FA894", edge: "border-b-2" },
};

export default async function EcosystemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const ui = UI[locale];
  const scope = ECOSYSTEM_SCOPE[locale];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={
          locale === "pt"
            ? "Pilar 02 — Strategic Technology Investments"
            : "Pillar 02 — Strategic Technology Investments"
        }
        title={
          locale === "pt"
            ? "Tecnologia aplicada às restrições estruturais do crédito complexo."
            : "Technology applied to the structural constraints of complex credit."
        }
        lede={
          locale === "pt"
            ? "O mercado de crédito complexo no Brasil não é limitado apenas por capital. É limitado por capacidade de decisão, por infraestrutura de negociação e por disciplina de execução. O ecossistema de tecnologia da Blackhill endereça essas três restrições."
            : "Brazil's complex credit market is not constrained by capital alone. It is constrained by decisioning capacity, negotiation infrastructure and execution discipline. Blackhill's technology ecosystem addresses those three constraints."
        }
      />

      {/* Scope note sits immediately below the hero, before any platform copy:
          the independence question is answered before it can be raised. */}
      <section className="rule-top">
        <div className="shell py-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
            <div>
              <Eyebrow>{scope.title}</Eyebrow>
            </div>
            <div className="max-w-3xl space-y-4">
              {scope.body.map((paragraph) => (
                <p key={paragraph} className="t-caveat">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {PLATFORMS.map((platform, i) => (
        <Section
          key={platform.slug}
          rule
          id={platform.slug}
          surface={i % 2 === 1 ? "warm" : "ivory"}
        >
          <div className="grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
            <div>
              <Eyebrow index={platform.index}>{platform.category[locale]}</Eyebrow>
            </div>

            <div className="max-w-3xl">
              {/* Name plate. The accent distinguishes one platform from the
                  next; it is an editorial device, not a brand mark — no
                  logotype or visual identity is attributed to a platform. */}
              <div
                className={`surface-navy-2 px-7 py-8 md:px-9 md:py-10 ${
                  PLATFORM_STYLE[platform.slug].edge
                }`}
                style={{ borderColor: PLATFORM_STYLE[platform.slug].accent }}
              >
                <span
                  className="t-numeral block"
                  style={{ color: PLATFORM_STYLE[platform.slug].accent }}
                >
                  {platform.index}
                </span>
                <h2 className="t-h2 mt-5">{platform.name}</h2>
                <p
                  className="t-eyebrow mt-3"
                  style={{ color: PLATFORM_STYLE[platform.slug].accent }}
                >
                  {platform.category[locale]}
                </p>
                <p className="t-lead mt-6">{platform.lede[locale]}</p>
              </div>

              <div className="mt-12">
                <Eyebrow>{locale === "pt" ? "Capacidades" : "Capabilities"}</Eyebrow>
                <ArgumentList items={platform.capabilities[locale]} />
              </div>

              <div
                className="mt-12 border-l-2 pl-6 md:pl-8"
                style={{ borderLeftColor: PLATFORM_STYLE[platform.slug].accent }}
              >
                <p className="t-eyebrow">
                  {locale === "pt" ? "Racional estratégico" : "Strategic rationale"}
                </p>
                <p className="t-body mt-4">{platform.rationale[locale]}</p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section rule>
        <div className="max-w-3xl">
          <GoldRule />
          <h2 className="t-h2 mt-7">
            {locale === "pt"
              ? "Duas atividades, uma linha divisória explícita."
              : "Two activities, one explicit dividing line."}
          </h2>
          <p className="t-lead mt-6">
            {locale === "pt"
              ? "O advisory em crédito complexo e os investimentos em tecnologia são frentes distintas da mesma plataforma. A independência da Blackhill nas operações assessoradas não é afetada por participações em empresas de tecnologia — e está descrita em detalhe na página de governança."
              : "Complex credit advisory and technology investments are distinct fronts of the same platform. Blackhill's independence in advised transactions is not affected by interests in technology companies — and is described in detail on the governance page."}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryLink href={localePath(locale, "/about#independencia")}>
              {locale === "pt" ? "Independência & Governança" : "Independence & Governance"}
            </PrimaryLink>
            <span className="sr-only">{ui.talkToUs}</span>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: locale === "pt" ? "Ecossistema" : "Ecosystem", path: "/ecosystem" },
        ])}
      />
    </>
  );
}
