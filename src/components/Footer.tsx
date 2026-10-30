import Link from "next/link";

import Logo from "./Logo";
import { localePath, type Locale } from "@/lib/i18n";
import { BRAND, COMPANY, DISCLAIMER, FOOTER_GROUPS, UI } from "@/content/site";

export default function Footer({ locale }: { locale: Locale }) {
  const ui = UI[locale];
  const groups = FOOTER_GROUPS[locale];

  return (
    <footer className="mt-auto border-t border-rule bg-navy-2">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <Logo withTagline tagline={BRAND.tagline[locale]} />
            <p className="t-caveat mt-8">
              {COMPANY.address.line1}
              <br />
              {COMPANY.address.line2}
              <br />
              CNPJ {COMPANY.cnpj}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <p className="t-eyebrow mb-5">{group.title}</p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.href}`}>
                      <Link
                        href={localePath(locale, link.href)}
                        className="text-sm text-light-blue transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-rule pt-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="t-eyebrow mb-5">{locale === "pt" ? "Contato" : "Contact"}</p>
            <address className="t-small not-italic">
              <span className="block font-bold text-white">{COMPANY.founder.name}</span>
              <span className="block">{COMPANY.founder.role}</span>
              <a
                href={`tel:${COMPANY.founder.phoneHref}`}
                className="mt-3 block transition-colors hover:text-gold"
              >
                {COMPANY.founder.phone}
              </a>
              <a
                href={`mailto:${COMPANY.founder.email}`}
                className="block break-all transition-colors hover:text-gold"
              >
                {COMPANY.founder.email}
              </a>
            </address>
          </div>
          <div>
            <p className="t-eyebrow mb-5">
              {locale === "pt" ? "Aviso legal" : "Legal notice"}
            </p>
            <p className="t-caveat max-w-3xl">{DISCLAIMER[locale]}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="shell flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <p className="t-caveat">
            © {new Date().getFullYear()} {COMPANY.legalName} · {ui.rights}
          </p>
          <p className="t-caveat">{BRAND.descriptor[locale]}</p>
        </div>
      </div>
    </footer>
  );
}
