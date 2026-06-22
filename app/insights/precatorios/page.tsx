import type { Metadata } from "next";
import { InsightTemplate } from "@/components/InsightTemplate";

export const metadata: Metadata = {
  title: "O que é um Precatório | Guia Técnico Blackhill",
  description: "Guia técnico sobre precatórios: fila orçamentária, classes e cessão de crédito.",
};

export default function InsightPrecatorios() {
  return (
    <InsightTemplate
      title="O que é um precatório?"
      intro="Um guia técnico sobre a natureza jurídica, a fila orçamentária e a estruturação de precatórios no Brasil."
      sections={[
        { h: "Definição", p: "Precatório é o instrumento de execução de decisão judicial transitada em julgado contra a Fazenda Pública, inscrito em fila orçamentária para pagamento conforme a ordem cronológica de apresentação." },
        { h: "Como funciona a fila orçamentária", p: "Cada ente público (União, Estados, Municípios) possui fila própria, com prazos de pagamento que variam conforme a disponibilidade orçamentária anual e o regime adotado." },
        { h: "Federal, estadual e municipal", p: "Precatórios federais tendem a ter prazo de pagamento mais previsível; estaduais e municipais variam significativamente conforme a saúde fiscal do ente devedor." },
        { h: "Como funciona a cessão", p: "O credor original pode ceder seu direito a um terceiro mediante deságio, antecipando o recebimento. A cessão exige validação de titularidade, regularidade processual e averbação adequada." },
      ]}
    />
  );
}
