import type { Metadata } from "next";
import { PracticeAreaTemplate } from "@/components/PracticeAreaTemplate";

export const metadata: Metadata = {
  title: "Precatórios | Originação e Estruturação | Blackhill",
  description:
    "Originação, cessão e estruturação de precatórios federais, estaduais e municipais — advisory independente da Blackhill Capital.",
};

export default function Precatorios() {
  return (
    <PracticeAreaTemplate
      eyebrow="Practice Areas · Núcleo"
      title="Precatórios"
      intro="Originação, cessão e estruturação de precatórios federais, estaduais e municipais."
      definition="Precatórios são créditos judiciais exigíveis contra a Fazenda Pública, inscritos em fila orçamentária para pagamento. Representam um estoque superior a R$ 393 bilhões no Brasil, com diferentes classes conforme a esfera (federal, estadual, municipal) e a natureza do crédito."
      whyComplex="A complexidade decorre da combinação entre o rito processual de execução contra a Fazenda Pública, a variabilidade da fila orçamentária por ente devedor, e a necessidade de validação rigorosa de titularidade e cadeia de cessões antes de qualquer estruturação."
      role="A Blackhill atua como advisor e estruturador independente na originação, due diligence jurídico-financeira e estruturação de veículos para cessão de precatórios — nunca como parte compradora ou vendedora, e sem garantir cessibilidade, regularidade jurídica ou fiscal do crédito."
      caveat="Material preliminar e indicativo. Sujeito a due diligence do investidor. Não constitui oferta, parecer jurídico ou promessa de pagamento por ente público."
    />
  );
}
