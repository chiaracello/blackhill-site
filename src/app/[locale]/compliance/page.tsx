import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LegalDocument from "@/components/LegalDocument";
import PageHero from "@/components/PageHero";
import { COMPLIANCE } from "@/content/legal";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return buildMetadata({
    locale,
    path: "/compliance",
    title: COMPLIANCE[locale].title,
    description:
      locale === "pt"
        ? "Declaração de compliance, papel da Blackhill Capital, natureza dos dados de mercado publicados e limites explícitos de atuação."
        : "Compliance declaration, Blackhill Capital's role, the nature of published market data and explicit limits of scope.",
  });
}

export default async function CompliancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = COMPLIANCE[locale];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "pt" ? "Compliance" : "Compliance"}
        title={copy.title}
        lede={copy.lede}
      />
      <LegalDocument sections={copy.sections} />
    </>
  );
}
