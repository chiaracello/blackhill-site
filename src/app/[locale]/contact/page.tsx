import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { Caveat, Eyebrow, Section } from "@/components/ui";
import { CONTACT } from "@/content/pages";
import { COMPANY, DISCLAIMER } from "@/content/site";
import { isLocale } from "@/lib/i18n";
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
    path: "/contact",
    title: pt ? "Contato" : "Contact",
    description: pt
      ? "Atendimento direto, discreto e qualificado. Blackhill Capital — Alphaville, Barueri, São Paulo."
      : "Direct, discreet and qualified contact. Blackhill Capital — Alphaville, Barueri, São Paulo, Brazil.",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = CONTACT[locale];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "pt" ? "Contato" : "Contact"}
        title={copy.title}
        lede={copy.lede}
      />

      <Section rule>
        <div className="grid gap-14 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-20">
          {/* ------------------------------------------------- DIRECT CONTACT */}
          <div>
            <Eyebrow index="01">{copy.directEyebrow}</Eyebrow>

            <address className="mt-8 not-italic">
              <p className="text-base font-bold text-white">{COMPANY.founder.name}</p>
              <p className="t-small mt-1">{COMPANY.founder.role}</p>

              <dl className="mt-8">
                <div className="border-t border-rule py-4">
                  <dt className="t-caveat uppercase tracking-[0.16em]">
                    {locale === "pt" ? "Telefone" : "Telephone"}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${COMPANY.founder.phoneHref}`}
                      className="text-sm font-bold text-off-white transition-colors hover:text-gold"
                    >
                      {COMPANY.founder.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-rule py-4">
                  <dt className="t-caveat uppercase tracking-[0.16em]">
                    {locale === "pt" ? "E-mail" : "Email"}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${COMPANY.founder.email}`}
                      className="break-all text-sm font-bold text-off-white transition-colors hover:text-gold"
                    >
                      {COMPANY.founder.email}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-rule py-4">
                  <dt className="t-caveat uppercase tracking-[0.16em]">
                    {locale === "pt" ? "Escritório" : "Office"}
                  </dt>
                  <dd className="t-small mt-1.5">
                    {COMPANY.address.line1}
                    <br />
                    {COMPANY.address.line2}
                  </dd>
                </div>
                <div className="border-t border-rule py-4">
                  <dt className="t-caveat uppercase tracking-[0.16em]">CNPJ</dt>
                  <dd className="t-small mt-1.5">{COMPANY.cnpj}</dd>
                </div>
              </dl>
            </address>
          </div>

          {/* --------------------------------------------------------- FORM */}
          <div>
            <Eyebrow index="02">{copy.formEyebrow}</Eyebrow>
            <h2 className="t-h2 mt-6">{copy.formTitle}</h2>

            <div className="mt-10 max-w-xl">
              <ContactForm locale={locale} />
            </div>

            <div className="mt-14 max-w-2xl border-t border-rule pt-8">
              <p className="t-eyebrow">{copy.confidentialityTitle}</p>
              <Caveat className="mt-4">{copy.confidentialityBody}</Caveat>
              <Caveat className="mt-5">{DISCLAIMER[locale]}</Caveat>
            </div>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: locale === "pt" ? "Início" : "Home", path: "/" },
          { name: locale === "pt" ? "Contato" : "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
