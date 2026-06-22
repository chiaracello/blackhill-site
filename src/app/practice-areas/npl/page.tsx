import type { Metadata } from "next";
import { PracticeAreaTemplate } from "@/components/PracticeAreaTemplate";

export const metadata: Metadata = {
  title: "NPL & Distressed Credit | Blackhill Capital",
  description:
    "Originação, precificação e estruturação de carteiras inadimplentes — advisory independente da Blackhill Capital.",
};

export default function NPL() {
  return (
    <PracticeAreaTemplate
      eyebrow="Practice Areas · Núcleo"
      title="NPL & Distressed Credit"
      intro="Originação, precificação e estruturação de carteiras inadimplentes, com perfil de retorno diferenciado pelo prêmio de complexidade e iliquidez."
      definition="NPL (Non-Performing Loans) são créditos inadimplentes — pulverizados (varejo) ou corporate — cuja recuperação exige modelagem de risco específica. Distressed credit amplia essa categoria a ativos de empresas em dificuldade financeira, com potencial de reestruturação."
      whyComplex="A precificação exige modelagem de probabilidade de recuperação, prazo, garantias e custos de cobrança — variáveis que diferem significativamente entre carteiras pulverizadas e operações corporate de grande ticket."
      role="A Blackhill origina, analisa e estrutura essas carteiras para investidores qualificados, sempre como advisor independente, sujeito à due diligence do investidor — sem garantir resultado de recuperação."
      caveat="Perfil de retorno diferenciado pelo prêmio de complexidade e iliquidez, sujeito à due diligence do investidor. Não constitui promessa de rentabilidade."
    />
  );
}
