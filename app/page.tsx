import Link from "next/link";
import {
  Section,
  Eyebrow,
  Divider,
  StatCard,
  CoreCard,
  CapabilityCard,
  PrimaryButton,
  SecondaryButton,
  Caveat,
} from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <p className="eyebrow mb-5">Boutique independente de crédito complexo</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] max-w-3xl">
          Onde capital encontra complexidade.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-light-blue max-w-2xl leading-relaxed">
          A interseção entre o Judiciário brasileiro e o mercado de capitais — advisory
          independente para originação, estruturação e monetização de ativos de crédito
          complexos: precatórios, NPL judicial, claims e dívida ativa.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <PrimaryButton href="/why-blackhill">Conhecer a Blackhill</PrimaryButton>
          <SecondaryButton href="/contact">Falar com a Blackhill</SecondaryButton>
        </div>
      </Section>

      {/* TRUST STRIP */}
      <Section tight className="border-y border-navy-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <p className="text-sm font-bold text-light-blue">Advisor Independente</p>
          <p className="text-sm font-bold text-light-blue">Sem Capital Próprio</p>
          <p className="text-sm font-bold text-light-blue">Sem Conflito de Interesse</p>
        </div>
      </Section>

      {/* NÚCLEO */}
      <Section>
        <Eyebrow>Núcleo de autoridade</Eyebrow>
        <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl">
          Precatórios e NPL & Distressed Credit — onde concentramos a maior profundidade
          técnica da plataforma.
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CoreCard
            title="Precatórios"
            text="Originação, cessão e estruturação de precatórios federais, estaduais e municipais — estoque superior a R$ 393 bilhões ainda carente de estruturação técnica."
            href="/practice-areas/precatorios"
          />
          <CoreCard
            title="NPL & Distressed Credit"
            text="Originação, precificação e estruturação de carteiras inadimplentes, com perfil de retorno diferenciado pelo prêmio de complexidade e iliquidez."
            href="/practice-areas/npl"
          />
        </div>
      </Section>

      {/* CAPACIDADES */}
      <Section className="pt-0">
        <Eyebrow>Capacidades de estruturação</Eyebrow>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-5">
          <CapabilityCard
            title="Claims & Litigation Finance"
            text="Estruturação e monetização de ativos judiciais e direitos litigiosos."
            href="/practice-areas#claims"
          />
          <CapabilityCard
            title="Crédito Estruturado / FIDC"
            text="Originação e estruturação de FIDCs, securitizações e instrumentos com lastro em recebíveis."
            href="/practice-areas#fidc"
          />
          <CapabilityCard
            muted
            title="Reestruturação Corporativa"
            text="Assessoria independente em renegociação de passivos e new money."
            href="/practice-areas#reestruturacao"
          />
          <CapabilityCard
            muted
            title="Servicing & Cobrança"
            text="Gestão de carteiras pós-cessão e maximização de recovery."
            href="/practice-areas#servicing"
          />
        </div>
      </Section>

      {/* MERCADO */}
      <Section>
        <Eyebrow>Mercado endereçável</Eyebrow>
        <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl">
          Um mercado de R$ 7 trilhões com infraestrutura de crédito ainda subdesenvolvida.
        </h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          <StatCard value="R$ 6,5T" label="Carteira de Crédito SFN" sub="Total do sistema financeiro nacional" />
          <StatCard value="R$ 524B" label="Dívida Negativada" sub="Serasa — inadimplência acumulada" />
          <StatCard value="R$ 393B" label="Precatórios" sub="Estoque total — fila orçamentária" />
          <StatCard value="R$ 6B+" label="Dívida Ativa Municípios" sub="Potencial em estruturação — LC 208/2024" />
        </div>
        <Caveat>
          Fontes: Bacen, Serasa Experian, Recovery/Deloitte, TCU/PGFN. Dados setoriais de
          mercado — não representam operações da Blackhill Capital.
        </Caveat>
      </Section>

      {/* PROCESSO */}
      <Section className="bg-navy-2/40">
        <Eyebrow>Processo</Eyebrow>
        <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl">
          Quatro fases. Rigor técnico em cada etapa.
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-px bg-navy-3 rounded-lg overflow-hidden">
          {[
            { t: "Originação", d: "Mapeamento proprietário via rede institucional e parceiros." },
            { t: "Análise & Due Diligence", d: "Triagem de risco, scoring e análise jurídico-financeira." },
            { t: "Estruturação & Negociação", d: "Modelagem do veículo, garantias e fechamento." },
            { t: "Monitoramento", d: "Reporting periódico e maximização de recovery." },
          ].map((s) => (
            <div key={s.t} className="bg-navy-2 px-6 py-7">
              <p className="text-sm font-bold text-white mb-2">{s.t}</p>
              <p className="text-sm text-light-blue leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INSIGHTS PREVIEW */}
      <Section>
        <Eyebrow>Insights</Eyebrow>
        <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl">
          Conhecimento técnico sobre os ativos que estruturamos.
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <CapabilityCard
            title="O que é um precatório"
            text="Fila orçamentária, classes e como funciona a cessão."
            href="/insights/precatorios"
          />
          <CapabilityCard
            title="O que é NPL"
            text="Carteiras inadimplentes, pulverizado vs. corporate."
            href="/insights/npl"
          />
          <CapabilityCard
            title="Dívida ativa municipal"
            text="O impacto da LC 208/2024 na estruturação de recebíveis públicos."
            href="/insights/divida-ativa"
          />
        </div>
        <div className="mt-8">
          <Link href="/insights" className="text-sm font-bold text-gold">
            Ver todos os Insights →
          </Link>
        </div>
      </Section>

      <Divider />

      {/* SEGMENTAÇÃO */}
      <Section className="pt-0">
        <Eyebrow>Comece por aqui</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/investors" className="rounded-lg border border-navy-3 bg-navy-2 px-7 py-9 hover:border-gold transition-colors">
            <p className="text-lg font-bold text-white mb-2">Sou investidor</p>
            <p className="text-sm text-light-blue">Family office, fundo, gestora ou banco em busca de acesso institucional.</p>
          </Link>
          <Link href="/companies" className="rounded-lg border border-navy-3 bg-navy-2 px-7 py-9 hover:border-gold transition-colors">
            <p className="text-lg font-bold text-white mb-2">Sou cedente</p>
            <p className="text-sm text-light-blue">Banco, empresa ou ente público com ativo de crédito para cessão.</p>
          </Link>
          <Link href="/companies" className="rounded-lg border border-navy-3 bg-navy-2 px-7 py-9 hover:border-gold transition-colors">
            <p className="text-lg font-bold text-white mb-2">Minha empresa busca reestruturação</p>
            <p className="text-sm text-light-blue">Renegociação de passivos e reorganização de capital.</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
