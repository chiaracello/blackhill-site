"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import { DEFAULT_LOCALE, LOCALES, LOCALE_LABEL, localePath, type Locale } from "@/lib/i18n";
import { NAV, UI } from "@/content/site";

/** Current path with any locale prefix removed, so it can be re-prefixed. */
function neutralPath(pathname: string): string {
  for (const locale of LOCALES) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname || "/";
}

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const ui = UI[locale];
  const bare = neutralPath(pathname);
  const other = LOCALES.find((l) => l !== locale) ?? DEFAULT_LOCALE;

  // Lock scroll while the mobile panel is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => bare === href || bare.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-navy/92 backdrop-blur-md">
      <Shell>
        <div className="flex h-18 items-center justify-between gap-6 md:h-20">
          <Link
            href={localePath(locale, "/")}
            aria-label={`Blackhill Capital — ${ui.home}`}
            className="shrink-0"
          >
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative py-1 text-[0.8125rem] tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-light-blue hover:text-white"
                }`}
              >
                {item.label[locale]}
                {isActive(item.href) ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-px w-full bg-gold"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={localePath(other, bare)}
              hrefLang={other}
              aria-label={ui.switchTo}
              className="hidden text-[0.75rem] font-bold tracking-[0.12em] text-muted-blue transition-colors hover:text-gold md:block"
            >
              {LOCALE_LABEL[other]}
            </Link>

            <button
              type="button"
              className="flex items-center gap-2 border border-rule-strong px-4 py-2.5 text-xs font-bold tracking-[0.12em] text-white transition-colors hover:border-gold xl:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? ui.closeMenu : ui.openMenu}
            >
              {open ? ui.close.toUpperCase() : ui.menu.toUpperCase()}
            </button>
          </div>
        </div>
      </Shell>

      {open ? (
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-rule bg-navy xl:hidden"
        >
          <Shell>
            <nav aria-label="Primary mobile" className="flex flex-col py-2">
              {NAV.map((item, i) => (
                <Link
                  key={item.href}
                  href={localePath(locale, item.href)}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-4 border-b border-rule py-5"
                >
                  <span className="t-index">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={`text-base font-bold ${
                      isActive(item.href) ? "text-gold" : "text-white"
                    }`}
                  >
                    {item.label[locale]}
                  </span>
                </Link>
              ))}
              <Link
                href={localePath(other, bare)}
                hrefLang={other}
                onClick={() => setOpen(false)}
                className="py-6 text-xs font-bold tracking-[0.16em] text-muted-blue"
              >
                {ui.switchTo.toUpperCase()} — {LOCALE_LABEL[other]}
              </Link>
            </nav>
          </Shell>
        </div>
      ) : null}
    </header>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return <div className="shell">{children}</div>;
}
