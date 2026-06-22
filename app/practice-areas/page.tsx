import type { Metadata } from "next";
import { Section, Eyebrow, CoreCard, CapabilityCard, PrimaryButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Áreas de Atuação | Precatórios, NPL, FIDC e Claims",
  description:
    "Seis frentes especializadas, um núcleo de autoridade: Precatórios e NPL & Distressed Credit, sustentados por Claims, FIDC, Reestruturação e Servicing.",
};

export default function PracticeAreas() {
  return (
    <>
      <Section className="pt-16 pb-12">
        <Eyebrow>Practice Areas</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          Seis frentes especializadas, um núcleo de autoridade.
        </h1>
        <p className="mt-6 text-lg text-light-blue max-w-2xl leading-relaxed">
          Precatórios e NPL & Distressed Credit concentram nossa maior profundidade técnica.
          As demais frentes são capacidades de estruturação que sustentam esse núcleo.
        </p>
      </Section>

      <Section className="pt-0">
        <Eyebrow>Núcleo</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CoreCard
            title="Precatórios"
            text="Originação, cessão e estruturação de precatórios federais, estaduais e municipais — estoque superior a R$ 393 bilhões."
            href="/practice-areas/precatorios"
          />
          <CoreCard
            title="NPL & Distressed Credit"
            text="Originação, precificação e estruturação de carteiras inadimplentes, com perfil de retorno diferenciado pelo prêmio de complexidade e iliquidez."
            href="/practice-areas/npl"
          />
        </div>
      </Section>

      <Section className="pt-0">
        <Eyebrow>Capacidades de estruturação</Eyebrow>
        <div id="claims" className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CapabilityCard
            title="Claims & Litigation Finance"
            text="Estruturação e monetização de ativos judiciais e direitos litigiosos."
            href="/insights/judicial-claims"
          />
          <CapabilityCard
            title="Crédito Estruturado / FIDC"
            text="Originação e estruturação de FIDCs, securitizações e instrumentos de crédito privado com lastro em recebíveis."
            href="/origination-access"
          />
        </div>
      </Section>

      <Section className="pt-0">
        <Eyebrow>Serviços complementares</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CapabilityCard
            muted
            title="Reestruturação Corporativa"
            text="Assessoria independente em renegociação de passivos, new money e reorganização de capital para empresas em dificuldade."
            href="/companies"
          />
          <CapabilityCard
            muted
            title="Servicing & Cobrança"
            text="Gestão de carteiras pós-cessão, régua de cobrança extrajudicial e maximização de recovery com rigor operacional."
            href="/companies"
          />
        </div>
        <div className="mt-10">
          <PrimaryButton href="/contact">Falar sobre uma categoria específica</PrimaryButton>
        </div>
      </Section>
    </>
  );
}
