export const LOCALES = ["pt", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "pt";

/** BCP 47 tag for the `lang` attribute and `hreflang`. */
export const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Public URL for a route in a given locale.
 *
 * The default locale is served from the root (`/advisory`); other locales are
 * prefixed (`/en/advisory`). `src/proxy.ts` rewrites root paths to the
 * `[locale]` segment, so these URLs never expose `/pt`.
 */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean || "/";
  return `/${locale}${clean}`;
}

export const SITE_URL = "https://blackhill.com.br";

export function absoluteUrl(locale: Locale, path = "/"): string {
  return `${SITE_URL}${localePath(locale, path)}`;
}
