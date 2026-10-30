import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LegalDocument from "@/components/LegalDocument";
import PageHero from "@/components/PageHero";
import { PRIVACY } from "@/content/legal";
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
    path: "/privacy",
    title: PRIVACY[locale].title,
    description:
      locale === "pt"
        ? "Como a Blackhill Capital trata dados pessoais coletados neste website, em conformidade com a LGPD. Sem cookies de publicidade, sem analytics de terceiros e sem rastreamento."
        : "How Blackhill Capital processes personal data collected on this website under Brazil's LGPD. No advertising cookies, no third-party analytics and no tracking.",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = PRIVACY[locale];

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={locale === "pt" ? "Privacidade e LGPD" : "Privacy and LGPD"}
        title={copy.title}
        lede={copy.lede}
      />
      <LegalDocument sections={copy.sections} footnote={copy.updated} />
    </>
  );
}
