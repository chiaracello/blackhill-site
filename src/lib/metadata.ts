import type { Metadata } from "next";

import { COMPANY } from "@/content/site";

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
  // Referenced explicitly: the file convention lives under the [locale] segment,
  // so Next cannot resolve it for every static page on its own.
  const ogImage = absoluteUrl(locale, "/opengraph-image");

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
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Blackhill Capital",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
    // The founder node is what distinguishes this entity from the other firms
    // trading under the Blackhill name, and `sameAs` is what turns the claim
    // into a link a crawler can follow. It is emitted only when
    // `COMPANY.founder.linkedin` holds a confirmed address; an unverified URL
    // would bind this entity to a third party, which is the opposite of what
    // the field is for.
    founder: {
      "@type": "Person",
      name: "Marcello Chiara",
      jobTitle: "Founder & Managing Partner",
      ...(COMPANY.founder.linkedin ? { sameAs: [COMPANY.founder.linkedin] } : {}),
      description:
        locale === "pt"
          ? "Mais de 30 anos em mercados financeiros, com foco em crédito estruturado, distressed assets e advisory institucional. Conduz diretamente os mandatos de advisory da Blackhill Capital."
          : "Over 30 years in financial markets, focused on structured credit, distressed assets and institutional advisory. Conducts Blackhill Capital's advisory mandates directly.",
      worksFor: { "@id": `${SITE_URL}/#organization` },
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
