import { ReactNode } from "react";
import Link from "next/link";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

export function Section({
  children,
  className = "",
  tight = false,
}: {
  children: ReactNode;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section className={`mx-auto max-w-[1280px] px-5 md:px-16 ${tight ? "py-12" : "py-20 md:py-28"} ${className}`}>
      {children}
    </section>
  );
}

export function Divider() {
  return <div className="h-px bg-navy-3 my-10" />;
}

export function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="rounded-lg border border-navy-3 bg-navy-2 px-6 py-7">
      <p className="text-3xl md:text-4xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm font-bold text-light-blue">{label}</p>
      {sub && <p className="mt-1 text-xs text-muted-blue">{sub}</p>}
    </div>
  );
}

export function CoreCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-gold/70 bg-navy-2 px-7 py-8 hover:border-gold transition-colors"
    >
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-light-blue leading-relaxed">{text}</p>
      <span className="inline-block mt-4 text-xs font-bold text-gold tracking-wide">
        Saiba mais →
      </span>
    </Link>
  );
}

export function CapabilityCard({
  title,
  text,
  href,
  muted = false,
}: {
  title: string;
  text: string;
  href: string;
  muted?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-lg border px-6 py-6 transition-colors ${
        muted
          ? "border-navy-3 bg-navy-2/60 hover:border-muted-blue"
          : "border-navy-3 bg-navy-2 hover:border-light-blue"
      }`}
    >
      <h3 className="text-base font-bold text-white mb-1.5">{title}</h3>
      <p className="text-sm text-light-blue leading-relaxed">{text}</p>
    </Link>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block rounded bg-gold px-7 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block rounded border border-gold px-7 py-3.5 text-sm font-bold text-gold hover:bg-gold/10 transition-colors"
    >
      {children}
    </Link>
  );
}

export function Caveat({ children }: { children: ReactNode }) {
  return <p className="caveat mt-4">{children}</p>;
}
