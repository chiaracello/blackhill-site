import type { Metadata } from "next";

import { HTML_LANG, LOCALES, SITE_URL, absoluteUrl, type Locale } from "./i18n";

const OG_LOCALE: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
};

/**
 * Canonical URL plus a complete hreflang set for every page.
 *
 * `x-default` points at the Portuguese root: Brazil is the primary market and
 * the default locale is served without a prefix.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  /** Locale-neutral path, e.g. `/advisory/precatorios`. */
  path: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = absoluteUrl(locale, path);

  const languages: Record<string, string> = { "x-default": absoluteUrl("pt", path) };
  for (const l of LOCALES) {
    languages[HTML_LANG[l]] = absoluteUrl(l, path);
  }

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      siteName: "Blackhill Capital",
      locale: OG_LOCALE[locale],
      url: canonical,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * Organization graph. Deliberately conservative: it states the legal entity,
 * the founder and the contact point, and claims no ratings, no reviews and no
 * financial product — consistent with the compliance declaration.
 */
export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}/#organization`,
    name: "Blackhill Capital",
    legalName: "Blackhill Capital Ltda.",
    url: SITE_URL,
    taxID: "49.400.092/0001-96",
    description:
      locale === "pt"
        ? "Boutique independente de assessoria financeira especializada em ativos de crédito complexos no Brasil — precatórios, NPL, distressed credit, claims e crédito estruturado."
        : "Independent financial advisory boutique specialising in complex credit assets in Brazil — court-ordered public claims, NPL, distressed credit, judicial claims and structured credit.",
    slogan:
      locale === "pt" ? "Onde capital encontra complexidade." : "Where capital meets complexity.",
    areaServed: { "@type": "Country", name: "Brazil" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alameda Rio Negro, 1030, Torre Corporate, Escritório 206, Alphaville",
      addressLocality: "Barueri",
      addressRegion: "SP",
      postalCode: "06454-000",
      addressCountry: "BR",
    },
    founder: {
      "@type": "Person",
      name: "Marcello de Rezende Chiara",
      jobTitle: "Founder & Managing Partner",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: locale === "pt" ? "Atendimento institucional" : "Institutional enquiries",
      telephone: "+55-11-99199-5656",
      email: "mchiara@blackhillcapital.com.br",
      availableLanguage: ["pt-BR", "en"],
    },
    inLanguage: LOCALES.map((l) => HTML_LANG[l]),
  };
}

export function breadcrumbSchema(
  locale: Locale,
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}
