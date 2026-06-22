import { Section, Eyebrow, Caveat, PrimaryButton } from "@/components/ui";

export function InsightTemplate({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { h: string; p: string }[];
}) {
  return (
    <>
      <Section className="pt-16 pb-12">
        <Eyebrow>Insights</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg text-light-blue max-w-2xl leading-relaxed">{intro}</p>
      </Section>

      <Section className="pt-0 max-w-3xl">
        {sections.map((s) => (
          <div key={s.h} className="mb-10">
            <h2 className="text-lg font-bold text-white mb-3">{s.h}</h2>
            <p className="text-base text-light-blue leading-relaxed">{s.p}</p>
          </div>
        ))}

        <Caveat>
          Conteúdo técnico de referência, sem caráter de recomendação de investimento ou
          parecer jurídico. Não representa operações específicas da Blackhill Capital.
        </Caveat>

        <div className="mt-10">
          <PrimaryButton href="/contact">Falar com a Blackhill sobre esta categoria</PrimaryButton>
        </div>
      </Section>
    </>
  );
}
