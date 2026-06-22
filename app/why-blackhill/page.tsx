import type { Metadata } from "next";
import { Section, Eyebrow, PrimaryButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Por que a Blackhill | Advisory Judicial e Financeiro",
  description:
    "Entre o sistema judicial brasileiro e o mercado de capitais existe um espaço que exige rigor jurídico-processual e disciplina de capital markets. É onde a Blackhill atua.",
};

const COMPARE = [
  {
    t: "vs. Gestoras",
    d: "A Blackhill não gere capital de terceiros. Atuamos exclusivamente como advisor, sem o conflito de interesse típico de estruturas integradas que compram e vendem o mesmo ativo que estruturam.",
  },
  {
    t: "vs. Escritórios de Advocacia",
    d: "Não emitimos pareceres jurídicos. Nossa competência é financeira e de estruturação — due diligence, precificação, modelagem de veículos e acesso a capital institucional qualificado.",
  },
  {
    t: "vs. Servicers",
    d: "Não somos uma operação de cobrança ampliada. Servicing é uma capacidade oferecida a clientes do nosso núcleo de originação — não o nosso negócio principal.",
  },
];

export default function WhyBlackhill() {
  return (
    <>
      <Section className="pt-16 pb-12">
        <Eyebrow>Why Blackhill</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          A interseção que poucas instituições compreendem.
        </h1>
        <p className="mt-6 text-lg text-light-blue max-w-2xl leading-relaxed">
          Entre o sistema judicial brasileiro e o mercado de capitais existe um espaço que
          concentra trilhões de reais em ativos — e exige uma dupla competência rara: rigor
          jurídico-processual e disciplina de capital markets.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPARE.map((c) => (
            <div key={c.t} className="rounded-lg border border-navy-3 bg-navy-2 px-6 py-7">
              <p className="text-sm font-bold text-gold mb-3">{c.t}</p>
              <p className="text-sm text-light-blue leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Eyebrow>Prova</Eyebrow>
        <ul className="space-y-3 text-base text-light-blue max-w-3xl">
          <li>– Mais de 30 anos de trajetória do fundador em instituições de mercado (BTG Pactual, Enforce, Banco ABC Brasil).</li>
          <li>– Processo estruturado em quatro fases, com suporte jurídico-financeiro independente em cada etapa.</li>
          <li>– Separação explícita entre experiência consolidada e pipeline ativo — rigor de compliance incomum em boutiques emergentes.</li>
        </ul>
        <div className="mt-10">
          <PrimaryButton href="/practice-areas">Explorar as áreas de atuação</PrimaryButton>
        </div>
      </Section>
    </>
  );
}
