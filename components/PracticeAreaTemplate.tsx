import { Section, Eyebrow, Caveat, PrimaryButton } from "@/components/ui";

export function PracticeAreaTemplate({
  eyebrow,
  title,
  intro,
  definition,
  whyComplex,
  role,
  caveat,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  definition: string;
  whyComplex: string;
  role: string;
  caveat: string;
}) {
  return (
    <>
      <Section className="pt-16 pb-12">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg text-light-blue max-w-2xl leading-relaxed">{intro}</p>
      </Section>

      <Section className="pt-0 max-w-3xl">
        <h2 className="text-lg font-bold text-white mb-3">Definição</h2>
        <p className="text-base text-light-blue leading-relaxed">{definition}</p>

        <h2 className="text-lg font-bold text-white mt-10 mb-3">Por que é complexo</h2>
        <p className="text-base text-light-blue leading-relaxed">{whyComplex}</p>

        <h2 className="text-lg font-bold text-white mt-10 mb-3">Papel da Blackhill</h2>
        <p className="text-base text-light-blue leading-relaxed">{role}</p>

        <Caveat>{caveat}</Caveat>

        <div className="mt-10">
          <PrimaryButton href="/contact">Falar sobre esta categoria</PrimaryButton>
        </div>
      </Section>
    </>
  );
}
