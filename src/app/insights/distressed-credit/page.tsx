import type { Metadata } from "next";
import { InsightTemplate } from "@/components/InsightTemplate";

export const metadata: Metadata = {
  title: "O que é Distressed Credit | Blackhill",
  description: "Guia técnico sobre ativos distressed e o prêmio de complexidade e iliquidez.",
};

export default function InsightDistressed() {
  return (
    <InsightTemplate
      title="O que é distressed credit?"
      intro="Um guia técnico sobre ativos de crédito distressed e os fatores que formam seu valor."
      sections={[
        { h: "Definição", p: "Distressed credit refere-se a créditos de empresas ou devedores em dificuldade financeira relevante — situação que vai além da simples inadimplência e pode envolver recuperação judicial ou reestruturação ampla." },
        { h: "Diferença em relação ao NPL convencional", p: "Enquanto o NPL convencional é tipicamente um ativo de varejo padronizado, o distressed credit costuma envolver análise caso a caso, com maior peso de variáveis jurídicas e operacionais do devedor." },
        { h: "O prêmio de complexidade e iliquidez", p: "O valor desses ativos é formado, em parte, pelo prêmio que o investidor exige para assumir a complexidade de análise e a baixa liquidez típica dessa classe — não por garantia de retorno." },
      ]}
    />
  );
}
