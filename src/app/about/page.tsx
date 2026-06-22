import type { Metadata } from "next";
import { Section, Eyebrow, Divider, PrimaryButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sobre a Blackhill Capital | Advisor Independente em Crédito",
  description:
    "A Blackhill Capital origina, estrutura e monetiza ativos de crédito complexos. Advisor independente, sem gestão de capital próprio.",
};

export default function About() {
  return (
    <>
      <Section className="pt-16 pb-12">
        <Eyebrow>About Blackhill</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          Advisory especializado em ativos de crédito complexos no Brasil.
        </h1>
        <p className="mt-6 text-lg text-light-blue max-w-2xl leading-relaxed">
          Originação proprietária, rigor técnico e independência absoluta — construídos ao
          longo de mais de trinta anos de experiência em crédito estruturado e recuperação
          de ativos.
        </p>
      </Section>

      <Section className="pt-0 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="text-base text-light-blue leading-relaxed">
            A Blackhill Capital origina, estrutura e monetiza ativos de crédito complexos.
          </p>
          <p className="mt-4 text-base text-light-blue leading-relaxed">
            Atuamos como advisor e estruturador independente — sem gestão de capital próprio
            e sem conflito entre cedente e investidor.
          </p>

          <Divider />

          <Eyebrow>Trajetória da plataforma</Eyebrow>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {[
              { y: "2010", t: "Início em crédito estruturado e NPL" },
              { y: "2018", t: "Expansão para Distressed e Precatórios" },
              { y: "2022", t: "Plataforma multi-vertical: Claims, FIDC, Municípios" },
              { y: "2026", t: "Mandatos ativos e pipeline em expansão nacional" },
            ].map((s) => (
              <div key={s.y}>
                <p className="text-xl font-bold text-gold">{s.y}</p>
                <p className="text-sm text-light-blue mt-2">{s.t}</p>
              </div>
            ))}
          </div>

          <Divider />

          <Eyebrow>Como atuamos</Eyebrow>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
            {[
              ["Originação", "Mapeamento proprietário via rede institucional, parceiros e finders."],
              ["Análise & Due Diligence", "Triagem de risco, scoring do ativo, análise jurídica e financeira."],
              ["Estruturação & Negociação", "Modelagem do veículo, garantias, cronograma e fechamento."],
              ["Monitoramento", "Reporting periódico e maximização de recovery."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-lg border border-navy-3 bg-navy-2 px-5 py-5">
                <p className="text-sm font-bold text-white">{t}</p>
                <p className="text-sm text-light-blue mt-1.5">{d}</p>
              </div>
            ))}
          </div>

          <Divider />

          <Eyebrow>Independência & governança</Eyebrow>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            <div>
              <p className="text-sm font-bold text-white mb-3">O que a Blackhill faz</p>
              <ul className="space-y-2 text-sm text-light-blue">
                <li>– Origina oportunidades de crédito complexo junto a cedentes institucionais</li>
                <li>– Estrutura veículos de investimento (FIDC, CRI, cessão, debêntures)</li>
                <li>– Intermedia entre cedentes e investidores com DD rigorosa</li>
                <li>– Assessora reestruturação de passivos e renegociação de dívida</li>
                <li>– Monitora operações pós-fechamento</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-3">O que a Blackhill não faz</p>
              <ul className="space-y-2 text-sm text-light-blue">
                <li>– Não gere capital próprio de terceiros</li>
                <li>– Não garante retorno, rentabilidade ou recuperação de ativos</li>
                <li>– Não emite pareceres jurídicos ou recomendações de investimento</li>
                <li>– Não é parte vendedora ou compradora dos ativos que assessora</li>
                <li>– Não divide sigilo entre cedentes e compradores sem autorização</li>
              </ul>
            </div>
          </div>
        </div>

        <aside className="rounded-lg border border-gold/70 bg-navy-2 px-7 py-8 h-fit">
          <p className="text-lg font-bold text-white">Marcello Chiara</p>
          <p className="text-sm font-bold text-gold mt-1">Founder & Managing Partner</p>
          <p className="text-sm text-light-blue mt-4 leading-relaxed">
            +30 anos de experiência em crédito estruturado, NPL, distressed assets, special
            situations e reestruturações corporativas.
          </p>
          <p className="text-sm text-light-blue mt-3 leading-relaxed">
            Trajetória em instituições líderes do mercado brasileiro, incluindo BTG Pactual,
            Enforce e Banco ABC Brasil.
          </p>
          <div className="mt-6">
            <PrimaryButton href="/why-blackhill">Ver por que a Blackhill</PrimaryButton>
          </div>
        </aside>
      </Section>
    </>
  );
}
