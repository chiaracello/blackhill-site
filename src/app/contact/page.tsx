import type { Metadata } from "next";
import { Section, Eyebrow, Caveat } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato | Blackhill Capital",
  description: "Atendimento direto, discreto e qualificado — São Paulo, Brasil.",
};

export default function Contact() {
  return (
    <Section className="pt-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-14">
      <div>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Vamos conversar.
        </h1>
        <p className="mt-6 text-lg text-light-blue leading-relaxed">
          Atendimento direto, discreto e qualificado — São Paulo, Brasil.
        </p>

        <div className="mt-10 rounded-lg border border-navy-3 bg-navy-2 px-7 py-7">
          <p className="text-base font-bold text-white">Marcello Chiara</p>
          <p className="text-sm text-gold mt-1">Founder & Managing Partner</p>
          <p className="text-sm text-light-blue mt-4">+55 (11) 99199-5656</p>
          <p className="text-sm text-light-blue">mchiara@blackhillcapital.com.br</p>
          <p className="text-sm text-light-blue">linkedin.com/in/marcellochiara</p>
          <p className="text-sm text-light-blue mt-4">São Paulo · Brasil</p>
        </div>
      </div>

      <div>
        <ContactForm />
        <Caveat>
          Todas as informações enviadas são tratadas com confidencialidade. O envio deste
          formulário não constitui solicitação de investimento nem oferta de qualquer
          natureza.
        </Caveat>
      </div>
    </Section>
  );
}
