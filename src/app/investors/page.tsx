import type { Metadata } from "next";
import { Section, Eyebrow, CapabilityCard, PrimaryButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Para Investidores | Blackhill Capital",
  description:
    "Acesso institucional a ativos de crédito complexos — estrutura, due diligence e alinhamento de mandato para Family Offices, Fundos, Gestoras e Bancos.",
};

export default function Investors() {
  return (
    <>
      <Section className="pt-16 pb-12">
        <Eyebrow>Investors</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          Acesso institucional a ativos de crédito complexos.
        </h1>
        <p className="mt-6 text-lg text-light-blue max-w-2xl leading-relaxed">
          Estrutura, due diligence e alinhamento de mandato — para Family Offices, Fundos,
          Gestoras, Bancos e Investidores Institucionais.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CapabilityCard
            title="Family Offices"
            text="Diversificação em crédito privado e ativos alternativos com liquidez restrita. Ticket típico de R$ 5M a R$ 50M."
            href="/contact"
          />
          <CapabilityCard
            title="Fundos & Gestoras"
            text="Mandato em crédito estruturado, distressed ou special situations, com material no rigor de comitê de investimento."
            href="/contact"
          />
          <CapabilityCard
            title="Bancos & Securitizadoras"
            text="Originação de carteiras, cessão e co-investimento, com compliance rigoroso de ponta a ponta."
            href="/contact"
          />
          <CapabilityCard
            title="Investidores Institucionais"
            text="Fundos de pensão, seguradoras e fundos soberanos — mandato conservador, estrutura regulatória e rating."
            href="/contact"
          />
        </div>
      </Section>

      <Section className="pt-0 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Eyebrow>Perfil das operações</Eyebrow>
          <div className="rounded-lg border border-navy-3 bg-navy-2 px-6 py-6">
            <p className="text-xs text-muted-blue">Ticket</p>
            <p className="text-lg font-bold text-white">R$ 5 milhões a R$ 1 bilhão+</p>
            <p className="text-xs text-muted-blue mt-4">Prazo</p>
            <p className="text-lg font-bold text-white">12 a 60 meses+</p>
          </div>
        </div>
        <div>
          <Eyebrow>Due diligence</Eyebrow>
          <p className="text-base text-light-blue leading-relaxed">
            Cada oportunidade passa por triagem de risco, scoring do ativo e análise
            jurídica, financeira e documental, conduzida por assessores independentes do
            cedente.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <PrimaryButton href="/contact">Agendar conversa institucional</PrimaryButton>
      </Section>
    </>
  );
}
