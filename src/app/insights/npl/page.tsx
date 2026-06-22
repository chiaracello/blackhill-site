import type { Metadata } from "next";
import { InsightTemplate } from "@/components/InsightTemplate";

export const metadata: Metadata = {
  title: "O que é NPL (Non-Performing Loan) | Blackhill",
  description: "Guia técnico sobre NPL: o que caracteriza um crédito inadimplente e como funciona a estruturação de carteiras.",
};

export default function InsightNPL() {
  return (
    <InsightTemplate
      title="O que é NPL (Non-Performing Loan)?"
      intro="Um guia técnico sobre créditos inadimplentes, suas classes e a lógica de estruturação de carteiras."
      sections={[
        { h: "Definição", p: "NPL é o crédito inadimplente — um empréstimo ou financiamento cujo devedor deixou de honrar os pagamentos conforme contratado, geralmente após determinado prazo de atraso." },
        { h: "Pulverizado vs. corporate", p: "NPL pulverizado refere-se a carteiras de varejo, com grande número de devedores e tickets baixos; NPL corporate envolve devedores pessoa jurídica, com tickets maiores e análise individualizada." },
        { h: "Precificação", p: "A precificação considera a probabilidade de recuperação, o prazo esperado, garantias associadas e os custos de cobrança — variáveis centrais na modelagem de qualquer carteira." },
        { h: "Estruturação", p: "Carteiras de NPL podem ser estruturadas via cessão direta, FIDC ou outros veículos, conforme o perfil do investidor e o volume da operação." },
      ]}
    />
  );
}
