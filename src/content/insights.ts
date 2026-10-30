import type { Localized } from "./site";

/**
 * Technical explainers, not a blog. The approved website architecture rules out
 * editorial/news content in phase one; these are static reference pages on the
 * asset classes Blackhill structures, kept at the original slugs so indexed
 * URLs from the June 2026 site keep resolving.
 */
export type Insight = {
  slug: string;
  index: string;
  title: Localized<string>;
  deck: Localized<string>;
  sections: Localized<{ heading: string; body: string[] }[]>;
  /** Advisory area this explainer supports. */
  related: string;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "precatorios",
    index: "01",
    related: "precatorios",
    title: { pt: "O que é um precatório", en: "What a precatório is" },
    deck: {
      pt: "Fila orçamentária, natureza do crédito e como funciona a cessão — o essencial para entender por que o mérito decidido não resolve a questão do prazo.",
      en: "The budgetary queue, the nature of the claim and how assignment works — the essentials of why a decided case does not settle the question of timing.",
    },
    sections: {
      pt: [
        {
          heading: "Definição",
          body: [
            "Precatório é o instrumento pelo qual o Judiciário requisita ao ente público o pagamento de um crédito reconhecido em decisão judicial definitiva. Surge após o trânsito em julgado e a homologação do cálculo, quando o tribunal expede o ofício requisitório ao devedor.",
            "A consequência prática é central: o risco de mérito já foi resolvido. O que permanece é risco de prazo, de atualização de valor e de regularidade documental.",
          ],
        },
        {
          heading: "A fila orçamentária",
          body: [
            "O pagamento não segue um vencimento contratual. Depende da inscrição do crédito no orçamento do ente devedor e do exercício financeiro em que a fila alcança aquela posição.",
            "Precatórios apresentados até 2 de abril devem ser incluídos no orçamento do exercício seguinte. A posição na fila, contudo, depende do estoque acumulado do ente e da sua capacidade de pagamento efetiva.",
          ],
        },
        {
          heading: "Natureza alimentar e natureza comum",
          body: [
            "Créditos de natureza alimentar — verbas salariais, previdenciárias, honorários, indenizações por morte ou invalidez — têm preferência de pagamento sobre os de natureza comum.",
            "Dentro da natureza alimentar existe preferência adicional para titulares com 60 anos ou mais, portadores de doença grave ou pessoas com deficiência, até um limite de valor definido em lei.",
          ],
        },
        {
          heading: "Atualização do valor",
          body: [
            "Antes da inscrição orçamentária, a atualização segue os índices aplicáveis à matéria discutida no processo.",
            "Após a inscrição, a Emenda Constitucional 113/2021 fixou a taxa SELIC como índice único de correção e juros moratórios para débitos da Fazenda Pública — simplificação relevante, mas que exige atenção à data de corte entre os dois regimes.",
          ],
        },
        {
          heading: "A cessão",
          body: [
            "O titular pode ceder o crédito a terceiro, total ou parcialmente. A cessão é onerosa, formalizada por instrumento próprio e comunicada ao tribunal para habilitação do cessionário.",
            "A cessão não altera a natureza nem a posição do crédito na fila — com uma exceção relevante: as preferências pessoais por idade, doença grave ou deficiência não se transferem ao cessionário.",
          ],
        },
        {
          heading: "Onde a diligência se concentra",
          body: [
            "A cadeia de cessões anteriores precisa ser íntegra e documentalmente comprovável.",
            "Gravames, penhoras e constrições sobre o crédito comprometem a sua liquidez.",
            "Débitos inscritos em dívida ativa em nome do titular original podem ser objeto de compensação pelo ente devedor.",
            "A existência de ação rescisória ou de recurso pendente sobre questão acessória precisa ser verificada mesmo após o trânsito em julgado do mérito.",
          ],
        },
      ],
      en: [
        {
          heading: "Definition",
          body: [
            "A precatório is the instrument by which the judiciary requisitions payment from a public entity of a claim recognised in a final judicial decision. It arises after final judgment and approval of the calculation, when the court issues the requisition order to the debtor.",
            "The practical consequence is central: merits risk has already been resolved. What remains is timing risk, restatement risk and documentary risk.",
          ],
        },
        {
          heading: "The budgetary queue",
          body: [
            "Payment does not follow a contractual maturity. It depends on inclusion of the claim in the debtor entity's budget and on the fiscal year in which the queue reaches that position.",
            "Claims presented by 2 April must be included in the following year's budget. Queue position, however, depends on the entity's accumulated stock and its effective capacity to pay.",
          ],
        },
        {
          heading: "Food-related and ordinary claims",
          body: [
            "Food-related claims — salary, social security, legal fees, death or disability compensation — take payment priority over ordinary claims.",
            "Within food-related claims there is further priority for holders aged 60 or over, those with serious illness and persons with disabilities, up to a statutory value cap.",
          ],
        },
        {
          heading: "Restatement of value",
          body: [
            "Before budget inclusion, restatement follows the indices applicable to the subject matter litigated.",
            "After inclusion, Constitutional Amendment 113/2021 fixed the SELIC rate as the sole index for restatement and default interest on treasury debts — a material simplification, but one requiring attention to the cut-off date between the two regimes.",
          ],
        },
        {
          heading: "Assignment",
          body: [
            "The holder may assign the claim to a third party, in whole or in part. Assignment is onerous, formalised by its own instrument and notified to the court so the assignee can be recognised.",
            "Assignment does not change the nature or queue position of the claim — with one relevant exception: personal priorities based on age, serious illness or disability do not transfer to the assignee.",
          ],
        },
        {
          heading: "Where diligence concentrates",
          body: [
            "The chain of prior assignments must be intact and documentarily verifiable.",
            "Liens, attachments and encumbrances over the claim compromise its liquidity.",
            "Tax debts registered against the original holder may be set off by the debtor entity.",
            "The existence of rescissory action or pending appeal on an ancillary question must be verified even after final judgment on the merits.",
          ],
        },
      ],
    },
  },
  {
    slug: "npl",
    index: "02",
    related: "npl-distressed",
    title: { pt: "O que é NPL", en: "What NPL means" },
    deck: {
      pt: "Carteiras inadimplentes, a diferença entre pulverizado e corporate, e por que o servicer importa tanto quanto o estoque.",
      en: "Non-performing portfolios, the difference between granular and corporate, and why the servicer matters as much as the stock.",
    },
    sections: {
      pt: [
        {
          heading: "Definição",
          body: [
            "NPL — non-performing loan — é o crédito cujo pagamento está em atraso além do prazo em que a instituição credora passa a considerá-lo de recuperação improvável, usualmente 90 dias.",
            "Para o credor original, a carteira inadimplente consome provisão e capital regulatório. A cessão transfere o ativo a quem tem estrutura especializada de recuperação, liberando capital e cristalizando a perda.",
          ],
        },
        {
          heading: "Pulverizado e corporate",
          body: [
            "Carteiras pulverizadas reúnem milhares de contratos de valor individual baixo — cartão, crédito pessoal, consignado, veículos. A análise é estatística: trabalha-se com curvas de comportamento por safra e por produto, não com o crédito individual.",
            "Exposições corporativas concentram valor relevante em poucos devedores. Aqui a análise é caso a caso: garantias, subordinação, viabilidade do negócio e cenários de recuperação judicial.",
            "São lógicas de precificação incompatíveis. Aplicar o modelo estatístico a uma exposição corporativa, ou analisar individualmente uma carteira de cem mil contratos, são erros simétricos.",
          ],
        },
        {
          heading: "O que determina o preço",
          body: [
            "Aging: quanto mais antigo o atraso, menor a probabilidade de recuperação.",
            "Produto e originação: crédito com colateral recupera de forma distinta de crédito limpo.",
            "Histórico de recuperação da própria carteira, quando disponível — é o dado mais informativo e o mais frequentemente ausente.",
            "Regularidade documental: a exigibilidade do crédito depende da integridade do instrumento e da cadeia de cessões.",
            "Capacidade do servicer que assumirá a cobrança.",
          ],
        },
        {
          heading: "Por que o servicer é determinante",
          body: [
            "Duas carteiras idênticas sob servicers distintos produzem curvas de recuperação materialmente diferentes. A régua de cobrança, o sistema, a qualidade do cadastro e a disciplina operacional respondem por boa parte do resultado.",
            "Por isso a avaliação do servicer integra a diligência da carteira, e não uma etapa posterior: o preço só é defensável quando se sabe quem vai operar o ativo.",
          ],
        },
        {
          heading: "Indicadores",
          body: [
            "WARR — weighted average recovery rate — taxa média ponderada de recuperação da carteira.",
            "Curva de recuperação por mês pós-cessão, tipicamente projetada de M+1 a M+36, ou até M+60 em carteiras longas.",
            "Custo de cobrança sobre receita recuperada, que define a margem efetiva.",
            "Ticket médio, aging médio e percentual da carteira com colateral.",
          ],
        },
        {
          heading: "LGPD",
          body: [
            "A cessão de carteiras de pessoa física envolve tratamento de dados pessoais em escala. Base legal, finalidade, segurança na transferência e conformidade do servicer precisam ser endereçados na estruturação — não após o fechamento.",
          ],
        },
      ],
      en: [
        {
          heading: "Definition",
          body: [
            "NPL — non-performing loan — is credit whose payment is overdue beyond the point at which the lender treats recovery as unlikely, usually 90 days.",
            "For the original lender, a non-performing portfolio consumes provisions and regulatory capital. Assignment transfers the asset to a party with specialised recovery infrastructure, releasing capital and crystallising the loss.",
          ],
        },
        {
          heading: "Granular and corporate",
          body: [
            "Granular portfolios gather thousands of low-value contracts — cards, personal loans, payroll loans, vehicles. Analysis is statistical: it works with behaviour curves by vintage and product, not with individual loans.",
            "Corporate exposures concentrate material value in few debtors. Here analysis is case by case: collateral, subordination, business viability and reorganisation scenarios.",
            "These pricing logics are incompatible. Applying the statistical model to a corporate exposure, or analysing a hundred thousand contracts individually, are symmetrical errors.",
          ],
        },
        {
          heading: "What determines price",
          body: [
            "Aging: the older the delinquency, the lower the probability of recovery.",
            "Product and origination: collateralised credit recovers differently from unsecured credit.",
            "The portfolio's own recovery history, where available — the most informative data point and the most frequently missing.",
            "Documentary soundness: enforceability depends on the integrity of the instrument and the assignment chain.",
            "The capacity of the servicer that will take over collection.",
          ],
        },
        {
          heading: "Why the servicer is decisive",
          body: [
            "Two identical portfolios under different servicers produce materially different recovery curves. The collection workflow, systems, data quality and operational discipline account for much of the outcome.",
            "That is why servicer assessment forms part of portfolio diligence rather than a later stage: a price is only defensible once you know who will operate the asset.",
          ],
        },
        {
          heading: "Indicators",
          body: [
            "WARR — weighted average recovery rate for the portfolio.",
            "Recovery curve by month post-assignment, typically projected from M+1 to M+36, or to M+60 for long portfolios.",
            "Collection cost over recovered revenue, which defines the effective margin.",
            "Average ticket, average aging and the share of the portfolio with collateral.",
          ],
        },
        {
          heading: "Data protection",
          body: [
            "Assignment of retail portfolios involves personal data processing at scale. Legal basis, purpose, security in transfer and the servicer's compliance must be addressed during structuring — not after closing.",
          ],
        },
      ],
    },
  },
  {
    slug: "divida-ativa",
    index: "03",
    related: "public-receivables",
    title: {
      pt: "Dívida ativa municipal e a LC 208/2024",
      en: "Municipal active debt and Complementary Law 208/2024",
    },
    deck: {
      pt: "O que a lei permitiu, o que ela preservou e por que o valor inscrito não é o valor recuperável.",
      en: "What the law enabled, what it preserved, and why registered value is not recoverable value.",
    },
    sections: {
      pt: [
        {
          heading: "O que mudou",
          body: [
            "A Lei Complementar 208/2024 autorizou expressamente União, Estados, Distrito Federal e Municípios a cederem o produto de créditos tributários e não tributários inscritos em dívida ativa a pessoas jurídicas de direito privado ou a fundos de investimento.",
            "Para municípios com estoque relevante de dívida ativa e necessidade de caixa, abriu-se uma alternativa de antecipação de receita que antes carecia de base legal clara.",
          ],
        },
        {
          heading: "O que a lei preservou",
          body: [
            "A cessão alcança o produto do crédito — o fluxo financeiro — e não a titularidade do crédito tributário em si.",
            "O ente público mantém a competência de cobrança, inscrição e execução fiscal. O cessionário não se torna credor tributário nem adquire prerrogativas de Fazenda Pública.",
            "A natureza do crédito tributário é indisponível: a lei não transformou tributo em ativo privado, apenas permitiu a cessão onerosa do resultado de sua arrecadação.",
          ],
        },
        {
          heading: "Por que o valor inscrito engana",
          body: [
            "O estoque de dívida ativa de um município costuma acumular décadas de inscrições, incluindo créditos prescritos, devedores inexistentes, valores irrecuperáveis e duplicidades.",
            "A diligência começa por estratificar o estoque: idade da inscrição, natureza do tributo, situação cadastral do devedor, existência de garantia e histórico de arrecadação por faixa.",
            "O valor nominal inscrito e o valor presente do fluxo recuperável costumam diferir por ordens de magnitude.",
          ],
        },
        {
          heading: "O que determina a qualidade da operação",
          body: [
            "Capacidade fiscal e governança do município — determinantes da previsibilidade do fluxo.",
            "Qualidade do cadastro e da base de dados da procuradoria municipal.",
            "Autorização legislativa específica, com rito próprio e aderente à lei.",
            "Estrutura do veículo e proteções ao investidor, incluindo mecanismos de substituição de ativos.",
          ],
        },
        {
          heading: "Estágio do mercado",
          body: [
            "É uma classe de ativo nova no Brasil. O arcabouço regulatório segue em consolidação e a jurisprudência sobre pontos específicos está em formação.",
            "A consequência prática é que a diligência exigida é proporcionalmente maior do que em classes maduras, e as estruturas tendem a incorporar proteções mais conservadoras.",
          ],
        },
      ],
      en: [
        {
          heading: "What changed",
          body: [
            "Complementary Law 208/2024 expressly authorised the Federal Union, states, the Federal District and municipalities to assign the proceeds of tax and non-tax claims registered as active debt to private legal entities or investment funds.",
            "For municipalities with material active-debt stock and cash needs, this opened a revenue-anticipation alternative that previously lacked a clear legal basis.",
          ],
        },
        {
          heading: "What the law preserved",
          body: [
            "The assignment reaches the proceeds of the claim — the financial flow — not ownership of the tax claim itself.",
            "The public entity retains authority over collection, registration and tax enforcement. The assignee does not become a tax creditor and acquires no treasury prerogatives.",
            "The nature of a tax claim is inalienable: the law did not turn taxes into private assets, it merely permitted onerous assignment of collection proceeds.",
          ],
        },
        {
          heading: "Why registered value misleads",
          body: [
            "A municipality's active-debt stock typically accumulates decades of registrations, including time-barred claims, non-existent debtors, unrecoverable amounts and duplicates.",
            "Diligence begins by stratifying the stock: age of registration, type of tax, debtor registry status, existence of security and collection history by band.",
            "Registered nominal value and the present value of recoverable flow typically differ by orders of magnitude.",
          ],
        },
        {
          heading: "What determines transaction quality",
          body: [
            "The municipality's fiscal capacity and governance — the drivers of flow predictability.",
            "The quality of the municipal attorney's registry and database.",
            "Specific legislative authorisation, following the proper procedure and compliant with the law.",
            "Vehicle structure and investor protections, including asset substitution mechanisms.",
          ],
        },
        {
          heading: "Market stage",
          body: [
            "This is a new asset class in Brazil. The regulatory framework continues to consolidate and case law on specific points is still forming.",
            "The practical consequence is that required diligence is proportionally greater than in mature classes, and structures tend to incorporate more conservative protections.",
          ],
        },
      ],
    },
  },
  {
    slug: "judicial-claims",
    index: "04",
    related: "claims",
    title: { pt: "Créditos judiciais como ativo", en: "Judicial claims as an asset" },
    deck: {
      pt: "Como a fase processual define elegibilidade, e por que a probabilidade de êxito não é suficiente.",
      en: "How procedural stage defines eligibility, and why probability of success is not enough.",
    },
    sections: {
      pt: [
        {
          heading: "O ativo",
          body: [
            "Um crédito judicial é o direito de receber um valor reconhecido — ou em discussão — em processo judicial ou arbitral. Sua monetização antecipada pode ocorrer por cessão onerosa do direito ou por financiamento estruturado da própria disputa.",
            "A diferença em relação ao precatório é a contraparte: aqui o devedor costuma ser privado, com capacidade de pagamento a ser verificada, e não um ente público com fila orçamentária.",
          ],
        },
        {
          heading: "A fase processual define a elegibilidade",
          body: [
            "Trânsito em julgado: risco recursal eliminado. É o nível máximo de elegibilidade.",
            "Acórdão favorável sem recurso especial pendente: elegível, com desconto proporcional ao risco residual.",
            "Sentença de primeira instância favorável: elegível apenas quando a jurisprudência sobre a tese está pacificada.",
            "Tese ainda em discussão: não elegível sem estrutura de contingência explícita.",
          ],
        },
        {
          heading: "Por que a probabilidade de êxito não basta",
          body: [
            "Um direito com alta probabilidade de êxito e contraparte insolvente não é ativo financeiro. A capacidade de pagamento da contraparte é condição independente do mérito.",
            "A cessibilidade do direito precisa ser confirmada: há créditos cuja natureza, origem ou cláusula contratual restringe ou impede a cessão a terceiros.",
            "O prazo de realização afeta o valor presente de forma frequentemente subestimada em teses de longa maturação.",
          ],
        },
        {
          heading: "Riscos específicos",
          body: [
            "Ação rescisória, cabível por até dois anos após o trânsito em julgado.",
            "Alteração de jurisprudência em instância superior, especialmente em teses tributárias de impacto fiscal relevante.",
            "Desvio de pagamento pela contraparte, mitigável por carta de anuência e estrutura de escrow.",
            "Concentração por tese jurídica: uma mudança de entendimento pode afetar simultaneamente toda a carteira.",
          ],
        },
        {
          heading: "Diligência mínima",
          body: [
            "Documentação societária do cedente e verificação de poderes de representação.",
            "Cadeia de titularidade e regularidade das cessões anteriores.",
            "Ausência de gravames, penhoras e constrições sobre os direitos.",
            "Valor atualizado confirmado por cálculo independente.",
            "Parecer jurídico independente sobre mérito e cessibilidade — obrigatório antes de proposta vinculante.",
          ],
        },
      ],
      en: [
        {
          heading: "The asset",
          body: [
            "A judicial claim is the right to receive an amount recognised — or under dispute — in judicial or arbitral proceedings. Early monetisation may occur through onerous assignment of the right or through structured financing of the dispute itself.",
            "The difference from a precatório is the counterparty: here the debtor is usually private, with capacity to pay still to be verified, rather than a public entity with a budgetary queue.",
          ],
        },
        {
          heading: "Procedural stage defines eligibility",
          body: [
            "Final, unappealable judgment: appellate risk removed. The highest level of eligibility.",
            "Favourable appellate decision with no special appeal pending: eligible, with a discount proportionate to residual risk.",
            "Favourable first-instance decision: eligible only where case law on the thesis is settled.",
            "Thesis still under dispute: not eligible without an explicit contingency structure.",
          ],
        },
        {
          heading: "Why probability of success is not enough",
          body: [
            "A right with high probability of success and an insolvent counterparty is not a financial asset. The counterparty's capacity to pay is a condition independent of the merits.",
            "Assignability must be confirmed: some claims are restricted or barred from assignment by their nature, origin or a contractual provision.",
            "Time to realisation affects present value in a way that is frequently underestimated in long-maturing theses.",
          ],
        },
        {
          heading: "Specific risks",
          body: [
            "Rescissory action, available for up to two years after final judgment.",
            "Shifts in higher-court case law, especially in tax theses with material fiscal impact.",
            "Payment diversion by the counterparty, mitigable through consent letters and escrow structures.",
            "Concentration by legal thesis: a change of interpretation can affect an entire portfolio at once.",
          ],
        },
        {
          heading: "Minimum diligence",
          body: [
            "The seller's corporate documentation and verification of representation powers.",
            "Chain of title and soundness of prior assignments.",
            "Absence of liens, attachments and encumbrances over the rights.",
            "Restated value confirmed by independent calculation.",
            "Independent legal opinion on merits and assignability — mandatory before any binding proposal.",
          ],
        },
      ],
    },
  },
  {
    slug: "distressed-credit",
    index: "05",
    related: "npl-distressed",
    title: { pt: "Prêmio de complexidade e de iliquidez", en: "Complexity and illiquidity premia" },
    deck: {
      pt: "Por que ativos de crédito complexos são precificados com desconto — e o que esse desconto efetivamente remunera.",
      en: "Why complex credit assets are priced at a discount — and what that discount actually compensates.",
    },
    sections: {
      pt: [
        {
          heading: "A origem do desconto",
          body: [
            "Ativos de crédito complexos são negociados com desconto relevante sobre o valor nominal. O desconto não é uma anomalia de mercado: remunera custos e riscos reais que o investidor assume ao adquiri-los.",
            "Compreender a composição desse desconto é o que distingue a análise técnica da aposta.",
          ],
        },
        {
          heading: "O que o desconto remunera",
          body: [
            "Prazo: o intervalo entre a aquisição e a realização do fluxo, descontado à taxa-alvo do investidor.",
            "Incerteza de valor: a amplitude entre o cenário conservador e o cenário base de recuperação.",
            "Iliquidez: a ausência de mercado secundário profundo impede a saída antecipada a preço previsível.",
            "Complexidade operacional: custo de diligência, estruturação, assessoria jurídica independente e monitoramento.",
            "Risco documental e processual: a possibilidade de que a exigibilidade do crédito seja menor do que a aparente.",
          ],
        },
        {
          heading: "Assimetria de informação",
          body: [
            "O vendedor conhece o ativo melhor do que o comprador. Em carteiras inadimplentes e créditos judiciais, essa assimetria é estrutural, não acidental.",
            "A diligência existe para reduzi-la a um nível tolerável — nunca para eliminá-la. O que não pode ser verificado precisa ser precificado ou endereçado por proteção contratual.",
          ],
        },
        {
          heading: "O papel do advisor independente",
          body: [
            "Um advisor que não adquire o ativo não tem interesse na formação do preço. Essa é a diferença estrutural entre um intermediário e uma contraparte.",
            "Para o cedente, significa que a precificação não está contaminada por interesse próprio na compra. Para o investidor, significa que a análise apresentada não foi construída para justificar uma posição já tomada.",
          ],
        },
        {
          heading: "Limite desta análise",
          body: [
            "Esta página descreve a lógica econômica de precificação de ativos complexos em termos qualitativos. Não apresenta, e não deve ser lida como, indicação de retorno, rentabilidade-alvo ou expectativa de resultado para qualquer operação.",
            "Toda decisão de investimento deve ser precedida de due diligence completa, conduzida por assessores independentes do investidor.",
          ],
        },
      ],
      en: [
        {
          heading: "Where the discount comes from",
          body: [
            "Complex credit assets trade at a material discount to nominal value. The discount is not a market anomaly: it compensates real costs and risks the investor assumes on acquisition.",
            "Understanding the composition of that discount is what separates technical analysis from a wager.",
          ],
        },
        {
          heading: "What the discount compensates",
          body: [
            "Time: the interval between acquisition and realisation of the flow, discounted at the investor's target rate.",
            "Value uncertainty: the spread between the conservative and base recovery scenarios.",
            "Illiquidity: the absence of a deep secondary market prevents early exit at a predictable price.",
            "Operational complexity: the cost of diligence, structuring, independent legal advice and monitoring.",
            "Documentary and procedural risk: the possibility that enforceability is narrower than it appears.",
          ],
        },
        {
          heading: "Information asymmetry",
          body: [
            "The seller knows the asset better than the buyer. In non-performing portfolios and judicial claims, that asymmetry is structural, not accidental.",
            "Diligence exists to reduce it to a tolerable level — never to eliminate it. What cannot be verified must be priced or addressed through contractual protection.",
          ],
        },
        {
          heading: "The role of the independent advisor",
          body: [
            "An advisor that does not acquire the asset has no interest in how the price is formed. That is the structural difference between an intermediary and a counterparty.",
            "For the seller, it means pricing is not contaminated by self-interest in buying. For the investor, it means the analysis presented was not built to justify a position already taken.",
          ],
        },
        {
          heading: "Limits of this analysis",
          body: [
            "This page describes the economic logic of pricing complex assets in qualitative terms. It does not present, and must not be read as, any indication of return, target profitability or expected outcome for any transaction.",
            "Every investment decision should be preceded by complete due diligence, conducted by advisers independent of the investor.",
          ],
        },
      ],
    },
  },
];

export function insightBySlug(slug: string): Insight | undefined {
  return INSIGHTS.find((insight) => insight.slug === slug);
}
