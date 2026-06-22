import type { Metadata } from "next";
import { Section, Eyebrow, PrimaryButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Para Empresas e Cedentes | Blackhill Capital",
  description:
    "Soluções para cedentes e empresas em reestruturação — assessoria independente, com a mesma disciplina técnica usada para estruturar ativos distressed.",
};

export default function Companies() {
  return (
    <>
      <Section className="pt-16 pb-12">
        <Eyebrow>Companies</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          Soluções para cedentes e empresas em reestruturação.
        </h1>
        <p className="mt-6 text-lg text-light-blue max-w-2xl leading-relaxed">
          Assessoria independente, com a mesma disciplina técnica usada para estruturar
          ativos distressed.
        </p>
      </Section>

      <Section className="pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-navy-3 bg-navy-2 px-7 py-8">
          <h2 className="text-lg font-bold text-white mb-3">Para Cedentes</h2>
          <p className="text-sm text-light-blue leading-relaxed">
            Bancos, empresas e entes públicos com carteiras de NPL ou precatórios para
            cessão ou monetização — com confidencialidade e sem conflito de interesse. A
            Blackhill nunca divide informações entre cedentes e compradores sem autorização.
          </p>
        </div>
        <div className="rounded-lg border border-navy-3 bg-navy-2 px-7 py-8">
          <h2 className="text-lg font-bold text-white mb-3">Para Empresas em Reestruturação</h2>
          <p className="text-sm text-light-blue leading-relaxed">
            Renegociação de passivos, new money e reorganização de capital, conduzidas por
            assessoria sem viés de gestora — alinhamento exclusivo com o objetivo da
            empresa.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <PrimaryButton href="/contact">Falar com a Blackhill</PrimaryButton>
      </Section>
    </>
  );
}
