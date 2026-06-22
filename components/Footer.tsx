import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-2 border-t border-navy-3 mt-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Logo variant="light" withTagline />
        </div>

        <div>
          <p className="eyebrow mb-4">Navegação</p>
          <ul className="space-y-2 text-sm text-light-blue">
            <li><Link href="/about" className="hover:text-gold">About Blackhill</Link></li>
            <li><Link href="/why-blackhill" className="hover:text-gold">Why Blackhill</Link></li>
            <li><Link href="/practice-areas" className="hover:text-gold">Practice Areas</Link></li>
            <li><Link href="/origination-access" className="hover:text-gold">Origination & Access</Link></li>
            <li><Link href="/insights" className="hover:text-gold">Insights</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Para quem</p>
          <ul className="space-y-2 text-sm text-light-blue">
            <li><Link href="/investors" className="hover:text-gold">Investors</Link></li>
            <li><Link href="/companies" className="hover:text-gold">Companies</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contato</p>
          <ul className="space-y-2 text-sm text-light-blue">
            <li>Marcello Chiara</li>
            <li>Founder & Managing Partner</li>
            <li>+55 (11) 99199-5656</li>
            <li>mchiara@blackhillcapital.com.br</li>
            <li>São Paulo · Brasil</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-3">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="caveat max-w-3xl">
            Este material não constitui oferta pública de valores mobiliários, parecer jurídico,
            recomendação de investimento, promessa de rentabilidade nem garantia de qualquer
            natureza. A decisão de investimento cabe exclusivamente ao investidor, com base em
            suas próprias análises e due diligence independente.
          </p>
          <p className="text-[11px] text-muted-blue whitespace-nowrap">
            © {new Date().getFullYear()} Blackhill Capital · Confidencial
          </p>
        </div>
      </div>
    </footer>
  );
}
