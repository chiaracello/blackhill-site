import type { Metadata } from "next";
import { InsightTemplate } from "@/components/InsightTemplate";

export const metadata: Metadata = {
  title: "Judicial Claims e Litigation Finance | Blackhill",
  description: "Guia técnico sobre direitos litigiosos monetizáveis e litigation finance no Brasil.",
};

export default function InsightClaims() {
  return (
    <InsightTemplate
      title="Judicial claims e litigation finance"
      intro="Um guia técnico sobre direitos litigiosos monetizáveis e os riscos típicos dessa classe de ativo."
      sections={[
        { h: "Definição", p: "Judicial claims são direitos litigiosos — créditos ou indenizações ainda em disputa ou já reconhecidos judicialmente — passíveis de monetização antecipada por meio de cessão ou financiamento de litígio." },
        { h: "Como funciona a estruturação", p: "A estruturação envolve avaliação da probabilidade de êxito, prazo estimado, instância processual e a solidez documental do direito a ser monetizado." },
        { h: "Riscos processuais típicos", p: "Riscos incluem reversão de decisões em instâncias superiores, prescrição, mudanças de entendimento jurisprudencial e questões de legitimidade processual — todos avaliados em due diligence." },
      ]}
    />
  );
}
