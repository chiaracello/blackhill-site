import type { Metadata } from "next";
import { InsightTemplate } from "@/components/InsightTemplate";

export const metadata: Metadata = {
  title: "Dívida Ativa Municipal e LC 208/2024 | Blackhill",
  description: "Guia técnico sobre dívida ativa municipal e o impacto da LC 208/2024.",
};

export default function InsightDividaAtiva() {
  return (
    <InsightTemplate
      title="Dívida ativa municipal e a LC 208/2024"
      intro="Um guia técnico sobre dívida ativa e o potencial de estruturação aberto pela LC 208/2024."
      sections={[
        { h: "Definição", p: "Dívida ativa é o conjunto de créditos não pagos de natureza tributária ou não tributária, inscritos pelo poder público para fins de cobrança." },
        { h: "O impacto da LC 208/2024", p: "A Lei Complementar 208/2024 ampliou as possibilidades de estruturação de recebíveis públicos municipais, abrindo espaço para mecanismos de cessão e securitização ainda pouco explorados." },
        { h: "Potencial do mercado", p: "Estima-se um potencial superior a R$ 6 bilhões em estruturação de dívida ativa municipal — mercado emergente, com baixa concorrência institucional especializada até o momento." },
      ]}
    />
  );
}
