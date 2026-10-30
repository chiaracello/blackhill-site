import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n";

/**
 * Routes from the June 2026 site, preserved as 301s so indexed URLs keep
 * resolving after the 2026 repositioning. Locale-agnostic: the prefix is
 * re-applied after the match.
 */
const LEGACY_ROUTES: Record<string, string> = {
  "/why-blackhill": "/about",
  "/practice-areas": "/advisory",
  "/practice-areas/precatorios": "/advisory/precatorios",
  "/practice-areas/npl": "/advisory/npl-distressed",
  "/origination-access": "/market",
};

const PREFIXED = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

function splitLocale(pathname: string): { prefix: string; rest: string } {
  for (const locale of PREFIXED) {
    if (pathname === `/${locale}`) return { prefix: `/${locale}`, rest: "/" };
    if (pathname.startsWith(`/${locale}/`)) {
      return { prefix: `/${locale}`, rest: pathname.slice(locale.length + 1) };
    }
  }
  return { prefix: "", rest: pathname };
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The default locale is never exposed in a URL: /pt/x permanently becomes /x.
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url, 301);
  }

  const { prefix, rest } = splitLocale(pathname);

  const legacy = LEGACY_ROUTES[rest.replace(/\/$/, "")];
  if (legacy) {
    const url = request.nextUrl.clone();
    url.pathname = `${prefix}${legacy}`;
    return NextResponse.redirect(url, 301);
  }

  // Already addressed to a prefixed locale — render it as-is.
  if (prefix) return NextResponse.next();

  // Root-level request: render the default locale without changing the URL.
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Everything except Next internals, metadata routes and files with an extension.
    "/((?!_next/|api/|robots\\.txt|sitemap\\.xml|favicon\\.ico|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
