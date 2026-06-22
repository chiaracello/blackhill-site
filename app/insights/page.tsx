import type { Metadata } from "next";
import { Section, Eyebrow, CapabilityCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Insights | Precatórios, NPL e Dívida Ativa",
  description:
    "Conteúdo técnico de referência sobre precatórios, NPL, distressed credit, claims judiciais e dívida ativa — atualizado periodicamente.",
};

const PILLARS = [
  { href: "/insights/precatorios", t: "Precatórios", d: "O que é, fila orçamentária, classes e cessão." },
  { href: "/insights/npl", t: "NPL", d: "O que caracteriza um Non-Performing Loan." },
  { href: "/insights/distressed-credit", t: "Distressed Credit", d: "Ativos distressed e o prêmio de complexidade." },
  { href: "/insights/judicial-claims", t: "Judicial Claims", d: "Litigation finance e direitos litigiosos monetizáveis." },
  { href: "/insights/divida-ativa", t: "Dívida Ativa", d: "Dívida ativa municipal e a LC 208/2024." },
];

export default function Insights() {
  return (
    <>
      <Section className="pt-16 pb-12">
        <Eyebrow>Insights</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          Conhecimento técnico sobre os ativos que estruturamos.
        </h1>
        <p className="mt-6 text-lg text-light-blue max-w-2xl leading-relaxed">
          Conteúdo de referência — atualizado periodicamente, sem caráter noticioso ou
          promocional.
        </p>
        <p className="caveat mt-4 max-w-2xl">
          Insights não é um blog. São páginas-pilar permanentes, revisadas trimestralmente,
          com foco em autoridade técnica de longo prazo.
        </p>
      </Section>

      <Section className="pt-0 grid grid-cols-1 md:grid-cols-3 gap-6">
        {PILLARS.map((p) => (
          <CapabilityCard key={p.href} title={p.t} text={p.d} href={p.href} />
        ))}
      </Section>
    </>
  );
}
