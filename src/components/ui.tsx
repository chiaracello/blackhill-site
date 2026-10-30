import Link from "next/link";
import type { ReactNode } from "react";

export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`shell ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  rule = false,
  id,
  tight = false,
  compact = false,
}: {
  children: ReactNode;
  className?: string;
  rule?: boolean;
  id?: string;
  tight?: boolean;
  /** For sections that continue the one above — keeps them reading as one list. */
  compact?: boolean;
}) {
  const rhythm = tight
    ? "py-12 md:py-16"
    : compact
      ? "py-14 md:py-16 lg:py-20"
      : "py-20 md:py-28 lg:py-32";
  return (
    <section id={id} className={`${rule ? "rule-top" : ""} ${rhythm} ${className}`}>
      <Shell>{children}</Shell>
    </section>
  );
}

/** Section label: `01 — ADVISORY`. The number is structural, not decorative. */
export function Eyebrow({
  children,
  index,
  className = "",
}: {
  children: ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <p className={`t-eyebrow ${className}`}>
      {index ? <span className="mr-3 opacity-70">{index}</span> : null}
      {children}
    </p>
  );
}

/**
 * Two-column editorial header: label rail on the left, heading and lede on the
 * right. The recurring page-opening unit across the site.
 */
export function SectionHead({
  eyebrow,
  index,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
      <div>{eyebrow ? <Eyebrow index={index}>{eyebrow}</Eyebrow> : null}</div>
      <div className="max-w-3xl">
        <h2 className="t-h2">{title}</h2>
        {lede ? <p className="t-lead mt-6">{lede}</p> : null}
        {children}
      </div>
    </div>
  );
}

export function Divider() {
  return (
    <Shell>
      <hr className="border-0 border-t border-rule" />
    </Shell>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <span className={`block h-px w-10 bg-gold ${className}`} aria-hidden="true" />;
}

export function PrimaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn-primary ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn-secondary ${className}`}>
      {children}
    </Link>
  );
}

export function RevealLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-reveal ${className}`}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

export function Arrow() {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M10.5 1 14.5 5l-4 4M14 5H1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** Figure block for market data. Hairline rules, never boxes. */
export function StatBlock({
  value,
  label,
  detail,
  source,
  sourceLabel,
}: {
  value: string;
  label: string;
  detail: string;
  source: string;
  sourceLabel: string;
}) {
  return (
    <div className="border-t border-rule pt-6">
      <p className="t-figure">{value}</p>
      <p className="mt-4 text-sm font-bold text-white">{label}</p>
      <p className="t-small mt-2">{detail}</p>
      <p className="t-caveat mt-4 opacity-80">
        <span className="sr-only">{sourceLabel}: </span>
        {source}
      </p>
    </div>
  );
}

export function Caveat({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`t-caveat max-w-3xl ${className}`}>{children}</p>;
}

/** Numbered prose list used for complexity and role arguments. */
export function ArgumentList({ items }: { items: string[] }) {
  return (
    <ol className="mt-2">
      {items.map((item, i) => (
        <li
          key={item}
          className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-t border-rule py-5"
        >
          <span className="t-index pt-1">{String(i + 1).padStart(2, "0")}</span>
          <p className="t-body">{item}</p>
        </li>
      ))}
    </ol>
  );
}

/** Key/value frame for regulatory and procedural context. */
export function FrameList({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid gap-px sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="border-t border-rule py-5 sm:pr-8">
          <dt className="t-caveat uppercase tracking-[0.16em]">{item.label}</dt>
          <dd className="mt-2 text-sm font-bold text-white">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CheckList({
  items,
  tone = "affirm",
}: {
  items: string[];
  tone?: "affirm" | "deny";
}) {
  return (
    <ul className="mt-6">
      {items.map((item) => (
        <li key={item} className="flex gap-4 border-t border-rule py-4">
          <span
            aria-hidden="true"
            className={`mt-2 shrink-0 ${tone === "affirm" ? "text-gold" : "text-muted-blue"}`}
          >
            {tone === "affirm" ? (
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <path
                  d="M1 4.5 4.2 7.5 11 1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="square"
                />
              </svg>
            ) : (
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <path d="M1 4.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
              </svg>
            )}
          </span>
          <p className="t-body">{item}</p>
        </li>
      ))}
    </ul>
  );
}
