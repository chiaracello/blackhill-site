import Link from "next/link";

import { GoldRule, Shell } from "@/components/ui";

/**
 * Rendered inside the locale layout. Copy is bilingual in a single block
 * because a 404 can be reached before a locale is reliably known.
 */
export default function NotFound() {
  return (
    <Shell className="py-28 md:py-40">
      <p className="t-eyebrow">404</p>
      <GoldRule className="mt-6" />
      <h1 className="t-h1 mt-6 max-w-2xl">Página não encontrada.</h1>
      <p className="t-lead mt-6 max-w-xl">
        O endereço solicitado não existe ou foi movido. Page not found — the address requested
        does not exist or has moved.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn-primary">
          Início / Home
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contato / Contact
        </Link>
      </div>
    </Shell>
  );
}
