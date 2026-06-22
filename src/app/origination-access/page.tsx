import type { Metadata } from "next";
import { Section, Eyebrow, StatCard, Caveat, PrimaryButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Originação & Acesso | Pipeline Blackhill Capital",
  description:
    "Acesso institucional a um fluxo de originação proprietário — não dependente de leilões públicos ou bases de dados abertas.",
};

export default function OriginationAccess() {
  return (
    <>
      <Section className="pt-16 pb-12">
        <Eyebrow>Origination & Access</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          Um mercado de R$ 7 trilhões com infraestrutura de crédito ainda subdesenvolvida.
        </h1>
        <p className="mt-6 text-lg text-light-blue max-w-2xl leading-relaxed">
          Acesso institucional a um fluxo de originação proprietário — não dependente de
          leilões públicos ou bases de dados abertas.
        </p>
      </Section>

      <Section className="pt-0">
        <Eyebrow>Mercado endereçável</Eyebrow>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <StatCard value="R$ 6,5T" label="Carteira de Crédito SFN" />
          <StatCard value="R$ 524B" label="Dívida Negativada" />
          <StatCard value="R$ 34B/a" label="NPL Transacionado" />
          <StatCard value="R$ 393B" label="Precatórios — Estoque" />
        </div>
        <Caveat>
          Fontes: Bacen, Serasa Experian, Recovery/Deloitte, TCU/PGFN. Dados públicos de
          mercado — não representam operações ou pipeline ativo da Blackhill Capital.
        </Caveat>
      </Section>

      <Section className="pt-0 max-w-3xl">
        <Eyebrow>Originação</Eyebrow>
        <p className="text-base text-light-blue leading-relaxed">
          Mapeamento proprietário de oportunidades via rede institucional, parceiros e
          finders — acesso exclusivo a ativos fora do circuito tradicional de leilões e
          bases públicas.
        </p>

        <Eyebrow>
          <span className="block mt-10">Acesso</span>
        </Eyebrow>
        <p className="text-base text-light-blue leading-relaxed">
          O acesso ao pipeline ativo da Blackhill é restrito a investidores qualificados,
          mediante assinatura de NDA padrão e alinhamento prévio de mandato.
        </p>

        <div className="mt-10">
          <PrimaryButton href="/contact">Solicitar acesso sob NDA</PrimaryButton>
        </div>
      </Section>
    </>
  );
}
