import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { UI } from "@/content/site";
import { HTML_LANG, LOCALES, SITE_URL, isLocale } from "@/lib/i18n";
import { organizationSchema } from "@/lib/metadata";

/**
 * Root layout. It sits inside `[locale]` — the documented Next.js i18n pattern —
 * so `lang` is always the locale actually being rendered.
 */

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0D1B2E",
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const pt = locale === "pt";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: pt
        ? "Blackhill Capital | Advisory em Crédito Complexo e Investimentos em Tecnologia"
        : "Blackhill Capital | Complex Credit Advisory and Technology Investments",
      template: "%s | Blackhill Capital",
    },
    description: pt
      ? "Boutique independente de assessoria financeira em ativos de crédito complexos no Brasil — precatórios, NPL, distressed credit, claims e crédito estruturado. Advisor independente, sem gestão de capital de terceiros."
      : "Independent financial advisory boutique for complex credit assets in Brazil — court-ordered claims, NPL, distressed credit, judicial claims and structured credit. Independent advisor, no third-party capital under management.",
    applicationName: "Blackhill Capital",
    authors: [{ name: "Blackhill Capital" }],
    creator: "Blackhill Capital",
    publisher: "Blackhill Capital",
    formatDetection: { email: false, address: false, telephone: false },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={HTML_LANG[locale]} className="h-full">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-navy"
        >
          {UI[locale].skipToContent}
        </a>
        <Header locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <JsonLd data={organizationSchema(locale)} />
      </body>
    </html>
  );
}
