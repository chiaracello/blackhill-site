import Link from "next/link";
import type { ReactNode } from "react";

import { GoldRule, Shell } from "./ui";
import { localePath, type Locale } from "@/lib/i18n";

/**
 * Standard interior-page opening. Keeps every page below the home page on the
 * same vertical rhythm and the same editorial register.
 */
export default function PageHero({
  locale,
  eyebrow,
  title,
  lede,
  breadcrumb,
  children,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  lede?: string;
  breadcrumb?: { label: string; href: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(115% 75% at 8% 0%, rgb(22 48 79 / 0.78) 0%, rgb(11 31 58 / 0) 62%)",
        }}
      />
      <Shell className="relative pb-16 pt-14 md:pb-20 md:pt-20 lg:pb-24 lg:pt-24">
        {breadcrumb ? (
          <Link
            href={localePath(locale, breadcrumb.href)}
            className="t-caveat inline-flex items-center gap-2 transition-colors hover:text-gold"
          >
            <span aria-hidden="true">←</span> {breadcrumb.label}
          </Link>
        ) : null}

        <p className={`t-eyebrow ${breadcrumb ? "mt-10" : ""}`}>{eyebrow}</p>
        <GoldRule className="mt-6" />
        <h1 className="t-h1 mt-6 max-w-4xl">{title}</h1>
        {lede ? <p className="t-lead mt-7 max-w-3xl">{lede}</p> : null}
        {children}
      </Shell>
    </section>
  );
}
