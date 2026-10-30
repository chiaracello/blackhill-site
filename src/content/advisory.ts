import type { Localized } from "./site";

/**
 * Hierarchy fixed by the Posicionamento Institucional 2026–2031, Fase 5:
 * core authority → structuring capability → complementary service. The tier
 * drives editorial weight everywhere these areas appear; they are never shown
 * with equal visual parity.
 */
export type Tier = "core" | "capability" | "complementary";

export type AdvisoryArea = {
  slug: string;
  tier: Tier;
  index: string;
  title: Localized<string>;
  short: Localized<string>;
  lede: Localized<string>;
  /** Why the asset class is structurally complex — the authority argument. */
  complexity: Localized<string[]>;
  /** What Blackhill does, strictly as advisor/structurer/intermediary. */
  role: Localized<string[]>;
  /** Regulatory and procedural frame. No pricing, no deal terms. */
  frame: Localized<{ label: string; value: string }[]>;
};

export const ADVISORY_AREAS: AdvisoryArea[] = [
  {
    slug: "precatorios",
    tier: "core",
    index: "01",
    title: { pt: "Precatórios", en: "Court-Ordered Public Claims" },
    short: {
      pt: "Créditos judiciais definitivos contra entes públicos federais, estaduais e municipais.",
      en: "Final judicial claims against federal, state and municipal public entities.",
    },
    lede: {
      pt: "O precatório é um crédito reconhecido judicialmente em caráter definitivo contra a Fazenda Pública. Sua complexidade não está no mérito — já decidido — mas na fila orçamentária, na cadeia de titularidade e na atualização do valor. É aí que a estruturação técnica define o resultado.",
      en: "A precatório is a judicially recognised, final claim against the Brazilian public treasury. Its complexity lies not in the merits — already decided — but in the budgetary queue, the chain of title and the restatement of value. That is where technical structuring determines the outcome.",
    },
    complexity: {
      pt: [
        "O pagamento depende da inscrição no orçamento do ente devedor (LOA) e do exercício em que o crédito é alcançado — não de uma data contratual.",
        "A atualização monetária segue regimes distintos antes e depois da inscrição orçamentária, com a EC 113/2021 fixando a SELIC como índice após a LOA.",
        "A natureza do crédito — alimentar ou comum — altera a posição na fila de pagamento.",
        "A cadeia de cessões anteriores, gravames, penhoras e débitos inscritos em dívida ativa do titular original podem comprometer a liquidez do ativo.",
        "O perfil de risco varia materialmente entre União, Estados e Municípios: são três curvas de crédito soberano distintas, não um único ativo.",
      ],
      en: [
        "Payment depends on inclusion in the debtor entity's budget law and on the fiscal year in which the claim is reached — not on a contractual date.",
        "Monetary restatement follows different regimes before and after budget inclusion, with Constitutional Amendment 113/2021 fixing the SELIC rate as the post-budget index.",
        "The nature of the claim — food-related or ordinary — changes its position in the payment queue.",
        "Prior assignment chains, liens, attachments and tax debts of the original holder can compromise the asset's liquidity.",
        "Risk profiles differ materially between the Federal Union, states and municipalities: these are three distinct sovereign credit curves, not one asset.",
      ],
    },
    role: {
      pt: [
        "Originação junto a titulares, escritórios e entes institucionais por rede proprietária.",
        "Verificação documental: ofício requisitório, trânsito em julgado, pendências recursais, cadeia de titularidade e ausência de gravames.",
        "Atualização do valor pelo índice aplicável, com data-base explícita.",
        "Estruturação da cessão ou do veículo de investimento, com cláusulas de ajuste de preço e indenidade.",
        "Intermediação entre cedente e investidor qualificado, com due diligence independente em cada etapa.",
      ],
      en: [
        "Origination from holders, law firms and institutional entities through a proprietary network.",
        "Document verification: requisition order, final judgment, pending appeals, chain of title and absence of liens.",
        "Restatement of value using the applicable index, with an explicit reference date.",
        "Structuring of the assignment or investment vehicle, with price adjustment and indemnity provisions.",
        "Intermediation between seller and qualified investor, with independent due diligence at each stage.",
      ],
    },
    frame: {
      pt: [
        { label: "Esferas", value: "Federal · Estadual · Municipal" },
        { label: "Atualização pós-LOA", value: "EC 113/2021 — SELIC" },
        { label: "Securitização municipal", value: "LC 208/2024" },
        { label: "Parecer jurídico", value: "Independente e obrigatório" },
      ],
      en: [
        { label: "Spheres", value: "Federal · State · Municipal" },
        { label: "Post-budget restatement", value: "Amendment 113/2021 — SELIC" },
        { label: "Municipal securitisation", value: "Complementary Law 208/2024" },
        { label: "Legal opinion", value: "Independent and mandatory" },
      ],
    },
  },
  {
    slug: "npl-distressed",
    tier: "core",
    index: "02",
    title: { pt: "NPL & Distressed Credit", en: "NPL & Distressed Credit" },
    short: {
      pt: "Carteiras inadimplentes e exposições corporativas estressadas, do varejo pulverizado ao corporate.",
      en: "Non-performing portfolios and stressed corporate exposures, from granular retail to corporate.",
    },
    lede: {
      pt: "Precificar uma carteira inadimplente é projetar comportamento de recuperação sobre um ativo cuja documentação, colateral e histórico raramente estão completos. A disciplina está em separar o que é mensurável do que é suposição — e em precificar a diferença.",
      en: "Pricing a non-performing portfolio means projecting recovery behaviour on an asset whose documentation, collateral and history are rarely complete. The discipline lies in separating what is measurable from what is assumption — and pricing the difference.",
    },
    complexity: {
      pt: [
        "Carteiras pulverizadas de pessoa física e de pessoa jurídica seguem lógicas de recuperação distintas e não devem ser precificadas pelo mesmo modelo.",
        "A curva de recuperação depende tanto da safra e do aging quanto da capacidade operacional do servicer que assumirá a cobrança.",
        "A regularidade jurídica da cessão — notificação de devedores, registro e cadeia documental — determina a exigibilidade do crédito adquirido.",
        "Exposições corporativas estressadas exigem leitura de garantias, subordinação e cenários de recuperação judicial, não apenas de inadimplência.",
        "A cessão de carteiras de pessoa física envolve tratamento de dados pessoais e, portanto, conformidade com a LGPD em todo o processo.",
      ],
      en: [
        "Granular retail and corporate portfolios follow distinct recovery logics and should not be priced with the same model.",
        "The recovery curve depends as much on vintage and aging as on the operational capacity of the servicer that will take over collection.",
        "The legal soundness of the assignment — debtor notification, registration and documentary chain — determines the enforceability of the acquired claim.",
        "Stressed corporate exposures require reading collateral, subordination and reorganisation scenarios, not merely default.",
        "Assignment of retail portfolios involves personal data processing and therefore LGPD compliance throughout.",
      ],
    },
    role: {
      pt: [
        "Originação de carteiras junto a bancos, financeiras e empresas cedentes.",
        "Estratificação por produto, safra, aging, ticket médio e presença de colateral.",
        "Construção da curva de recuperação projetada e análise de sensibilidade sobre taxa de recuperação e prazo.",
        "Avaliação do servicer: capacidade operacional, régua de cobrança, sistema e conformidade com a LGPD.",
        "Estruturação da transação — cessão onerosa, FIDC NP ou co-investimento — e condução até o fechamento.",
      ],
      en: [
        "Portfolio origination from banks, finance companies and corporate sellers.",
        "Stratification by product, vintage, aging, average ticket and presence of collateral.",
        "Construction of the projected recovery curve and sensitivity analysis on recovery rate and tenor.",
        "Servicer assessment: operational capacity, collection workflow, systems and LGPD compliance.",
        "Transaction structuring — onerous assignment, non-standard receivables fund or co-investment — through to closing.",
      ],
    },
    frame: {
      pt: [
        { label: "Tipologia", value: "Pulverizado PF · Pulverizado PJ · Corporate" },
        { label: "Veículo típico", value: "Cessão direta · FIDC NP" },
        { label: "Regulamentação", value: "ICVM 175/2022 · LGPD" },
        { label: "Indicadores", value: "WARR · curva M+1 a M+36 · aging" },
      ],
      en: [
        { label: "Typology", value: "Granular retail · Granular SME · Corporate" },
        { label: "Typical vehicle", value: "Direct assignment · Non-standard receivables fund" },
        { label: "Regulation", value: "CVM Rule 175/2022 · LGPD" },
        { label: "Indicators", value: "WARR · M+1 to M+36 curve · aging" },
      ],
    },
  },
  {
    slug: "claims",
    tier: "capability",
    index: "03",
    title: { pt: "Claims & Litigation Finance", en: "Claims & Litigation Finance" },
    short: {
      pt: "Monetização antecipada de direitos creditórios de origem judicial ou arbitral.",
      en: "Early monetisation of credit rights arising from judicial or arbitral proceedings.",
    },
    lede: {
      pt: "Um direito litigioso só se torna ativo financeiro quando a probabilidade de êxito, a cessibilidade e o prazo de realização podem ser avaliados de forma independente. A elegibilidade é função da fase processual — não da expectativa do titular.",
      en: "A litigious right becomes a financial asset only when probability of success, assignability and time to realisation can be assessed independently. Eligibility is a function of procedural stage — not of the holder's expectation.",
    },
    complexity: {
      pt: [
        "A fase processual determina a elegibilidade: trânsito em julgado elimina risco recursal, enquanto decisões de primeira instância só se sustentam com jurisprudência pacificada.",
        "A ação rescisória mantém risco de reversão por até dois anos após o trânsito em julgado.",
        "A cessibilidade do direito precisa ser confirmada por parecer jurídico independente — a Blackhill não emite parecer próprio.",
        "A concentração por tese jurídica ou por contraparte é um risco de carteira frequentemente subestimado.",
        "A qualidade e a capacidade de pagamento da contraparte importam tanto quanto o mérito da decisão.",
      ],
      en: [
        "Procedural stage determines eligibility: a final judgment removes appellate risk, while first-instance decisions hold only where case law is settled.",
        "Rescissory action preserves reversal risk for up to two years after final judgment.",
        "Assignability must be confirmed by an independent legal opinion — Blackhill does not issue opinions of its own.",
        "Concentration by legal thesis or by counterparty is a portfolio risk that is frequently underestimated.",
        "The counterparty's quality and capacity to pay matter as much as the merits of the decision.",
      ],
    },
    role: {
      pt: [
        "Triagem de elegibilidade por fase processual e consistência documental.",
        "Verificação da cadeia de titularidade, cessões anteriores e ausência de constrições.",
        "Coordenação do parecer jurídico independente sobre mérito e cessibilidade.",
        "Estruturação do instrumento de cessão ou do veículo, com marcos de liberação atrelados a eventos processuais.",
        "Desenho de proteções contratuais contra desvio de pagamento e reversão.",
      ],
      en: [
        "Eligibility screening by procedural stage and documentary consistency.",
        "Verification of chain of title, prior assignments and absence of encumbrances.",
        "Coordination of the independent legal opinion on merits and assignability.",
        "Structuring of the assignment instrument or vehicle, with release milestones tied to procedural events.",
        "Design of contractual protections against payment diversion and reversal.",
      ],
    },
    frame: {
      pt: [
        { label: "Tipologia", value: "Tributários · Trabalhistas · Comerciais · Honorários" },
        { label: "Elegibilidade máxima", value: "Trânsito em julgado" },
        { label: "Parecer jurídico", value: "Independente e obrigatório" },
        { label: "Proteções", value: "Anuência · escrow · indenidade" },
      ],
      en: [
        { label: "Typology", value: "Tax · Labour · Commercial · Success fees" },
        { label: "Highest eligibility", value: "Final, unappealable judgment" },
        { label: "Legal opinion", value: "Independent and mandatory" },
        { label: "Protections", value: "Consent · escrow · indemnity" },
      ],
    },
  },
  {
    slug: "structured-credit",
    tier: "capability",
    index: "04",
    title: { pt: "Crédito Estruturado & FIDC", en: "Structured Credit & Receivables Funds" },
    short: {
      pt: "Veículos de investimento com lastro em recebíveis — do FIDC à securitização.",
      en: "Receivables-backed investment vehicles — from receivables funds to securitisation.",
    },
    lede: {
      pt: "A estrutura não é o objetivo: é o instrumento que torna um ativo complexo investível por capital institucional. A escolha entre cessão direta, FIDC simples ou estrutura multiclasse decorre do tamanho, da origem e do perfil de risco da carteira.",
      en: "The structure is not the objective: it is the instrument that makes a complex asset investable by institutional capital. The choice between direct assignment, a single-tranche fund or a multi-class structure follows from the portfolio's size, origin and risk profile.",
    },
    complexity: {
      pt: [
        "O sizing das cotas — sênior, mezanino e subordinada — define a cobertura efetiva do investidor sênior e é a decisão estrutural central.",
        "A cota subordinada retida pelo originador funciona como alinhamento de interesse e primeira absorção de perda.",
        "Gestor, administrador e custodiante independentes são exigência regulatória, não escolha de conveniência.",
        "A política de crédito e os critérios de elegibilidade do lastro precisam ser definidos antes do registro, não ajustados depois.",
        "Estruturas multiorigem exigem limites de concentração explícitos por cedente, devedor e classe de ativo.",
      ],
      en: [
        "Tranche sizing — senior, mezzanine and subordinated — defines the senior investor's effective coverage and is the central structural decision.",
        "The subordinated tranche retained by the originator serves as interest alignment and first-loss absorption.",
        "Independent manager, administrator and custodian are a regulatory requirement, not a matter of convenience.",
        "Credit policy and eligibility criteria for the underlying must be set before registration, not adjusted afterwards.",
        "Multi-origin structures require explicit concentration limits by seller, debtor and asset class.",
      ],
    },
    role: {
      pt: [
        "Definição do lastro e dos critérios de elegibilidade dos ativos.",
        "Sizing das cotas e desenho das proteções estruturais.",
        "Seleção e coordenação de gestor, administrador, custodiante e assessores jurídicos.",
        "Condução do processo de estruturação da cessão e do registro regulatório.",
        "Acompanhamento pós-fechamento: relatório periódico, eventos de liquidez e substituição de ativos.",
      ],
      en: [
        "Definition of the underlying pool and asset eligibility criteria.",
        "Tranche sizing and design of structural protections.",
        "Selection and coordination of manager, administrator, custodian and legal advisers.",
        "Management of the assignment structuring process and regulatory registration.",
        "Post-closing monitoring: periodic reporting, liquidity events and asset substitution.",
      ],
    },
    frame: {
      pt: [
        { label: "Estruturas", value: "FIDC NP · FIDC performado · multiclasse" },
        { label: "Securitização", value: "CRI · CRA · debêntures" },
        { label: "Regulamentação", value: "ICVM 175/2022 · Lei 14.430/2022" },
        { label: "Papel da Blackhill", value: "Advisor estruturador — não gestor" },
      ],
      en: [
        { label: "Structures", value: "Non-standard · performing · multi-class funds" },
        { label: "Securitisation", value: "Real estate and agribusiness notes · debentures" },
        { label: "Regulation", value: "CVM Rule 175/2022 · Law 14.430/2022" },
        { label: "Blackhill's role", value: "Structuring advisor — not manager" },
      ],
    },
  },
  {
    slug: "public-receivables",
    tier: "capability",
    index: "05",
    title: { pt: "Dívida Ativa & Recebíveis Públicos", en: "Public Tax Receivables" },
    short: {
      pt: "Securitização de dívida ativa municipal sob a LC 208/2024.",
      en: "Municipal tax receivables securitisation under Complementary Law 208/2024.",
    },
    lede: {
      pt: "A LC 208/2024 abriu aos municípios a possibilidade de securitizar créditos tributários inscritos em dívida ativa. É uma classe de ativo nova no Brasil, com risco soberano municipal e arcabouço ainda em consolidação — o que exige diligência proporcionalmente maior.",
      en: "Complementary Law 208/2024 enabled Brazilian municipalities to securitise tax claims registered as active debt. It is a new asset class, carrying municipal sovereign risk within a framework still consolidating — which demands proportionally greater diligence.",
    },
    complexity: {
      pt: [
        "A cessão alcança o produto do crédito tributário, preservando a titularidade e a competência de cobrança do ente público.",
        "A qualidade do estoque inscrito varia amplamente: exige estratificação por idade, natureza do tributo e histórico de arrecadação.",
        "A capacidade fiscal e a governança do município determinam a previsibilidade do fluxo, mais do que o valor nominal inscrito.",
        "O arcabouço legal é recente, e a estruturação precisa acompanhar a consolidação regulatória e a jurisprudência em formação.",
        "A operação exige autorização legislativa municipal específica, com rito próprio.",
      ],
      en: [
        "The assignment reaches the proceeds of the tax claim, preserving the public entity's ownership and collection authority.",
        "The quality of registered stock varies widely: it requires stratification by age, type of tax and collection history.",
        "The municipality's fiscal capacity and governance determine flow predictability more than the registered nominal amount.",
        "The legal framework is recent, and structuring must track regulatory consolidation and emerging case law.",
        "The transaction requires specific municipal legislative authorisation, with its own procedure.",
      ],
    },
    role: {
      pt: [
        "Diagnóstico do estoque de dívida ativa e estratificação por recuperabilidade.",
        "Modelagem do fluxo projetado de arrecadação e análise de sensibilidade.",
        "Estruturação do veículo de securitização e das proteções ao investidor.",
        "Coordenação com assessores jurídicos do município e com os órgãos de controle.",
        "Intermediação junto a investidores qualificados com mandato para risco soberano subnacional.",
      ],
      en: [
        "Assessment of the active-debt stock and stratification by recoverability.",
        "Modelling of projected collection flows and sensitivity analysis.",
        "Structuring of the securitisation vehicle and investor protections.",
        "Coordination with the municipality's legal advisers and oversight bodies.",
        "Intermediation with qualified investors mandated for subnational sovereign risk.",
      ],
    },
    frame: {
      pt: [
        { label: "Marco legal", value: "LC 208/2024" },
        { label: "Objeto da cessão", value: "Produto do crédito tributário" },
        { label: "Veículo", value: "SPE ou FIDC" },
        { label: "Risco", value: "Soberano municipal" },
      ],
      en: [
        { label: "Legal framework", value: "Complementary Law 208/2024" },
        { label: "Object of assignment", value: "Proceeds of the tax claim" },
        { label: "Vehicle", value: "Special purpose entity or receivables fund" },
        { label: "Risk", value: "Municipal sovereign" },
      ],
    },
  },
  {
    slug: "restructuring",
    tier: "complementary",
    index: "06",
    title: { pt: "Reestruturação Corporativa", en: "Corporate Restructuring" },
    short: {
      pt: "Assessoria independente em renegociação de passivos e new money.",
      en: "Independent advisory on liability renegotiation and new money.",
    },
    lede: {
      pt: "Assessoramos empresas com passivos complexos a reorganizar sua estrutura de capital com a mesma lente técnica usada para precificar ativos distressed — do lado oposto da mesa, e sem viés de gestora.",
      en: "We advise companies with complex liabilities on reorganising their capital structure using the same technical lens applied to pricing distressed assets — from the opposite side of the table, and without a fund manager's bias.",
    },
    complexity: {
      pt: [
        "O mapeamento completo do passivo — bancário, fiscal, trabalhista e de fornecedores — precede qualquer negociação.",
        "Credores com garantias distintas têm incentivos distintos: a sequência de negociação importa tanto quanto o mérito da proposta.",
        "A necessidade de new money condiciona a estrutura de garantias disponível e a ordem de prioridade.",
        "A escolha entre renegociação extrajudicial e via judicial altera materialmente prazo, custo e exposição reputacional.",
      ],
      en: [
        "A complete mapping of liabilities — bank, tax, labour and supplier — precedes any negotiation.",
        "Creditors with different security have different incentives: negotiation sequencing matters as much as the merits of the proposal.",
        "The need for new money conditions the available security structure and priority ranking.",
        "Choosing between out-of-court renegotiation and a judicial process materially changes timeline, cost and reputational exposure.",
      ],
    },
    role: {
      pt: [
        "Diagnóstico do passivo e da capacidade real de pagamento.",
        "Desenho do plano de renegociação e da sequência de abordagem aos credores.",
        "Estruturação de instrumentos de new money e das garantias correspondentes.",
        "Condução das negociações como assessor independente da empresa.",
      ],
      en: [
        "Assessment of liabilities and actual capacity to pay.",
        "Design of the renegotiation plan and creditor approach sequencing.",
        "Structuring of new money instruments and corresponding security.",
        "Conduct of negotiations as the company's independent adviser.",
      ],
    },
    frame: {
      pt: [
        { label: "Mandante", value: "A empresa — exclusivamente" },
        { label: "Escopo", value: "Passivo bancário, fiscal e comercial" },
        { label: "Instrumentos", value: "Renegociação · new money · garantias" },
        { label: "Limite", value: "Não emitimos parecer jurídico" },
      ],
      en: [
        { label: "Principal", value: "The company — exclusively" },
        { label: "Scope", value: "Bank, tax and trade liabilities" },
        { label: "Instruments", value: "Renegotiation · new money · security" },
        { label: "Limit", value: "We do not issue legal opinions" },
      ],
    },
  },
  {
    slug: "servicing",
    tier: "complementary",
    index: "07",
    title: { pt: "Servicing & Recuperação", en: "Servicing & Recovery" },
    short: {
      pt: "Gestão de carteiras pós-cessão e maximização de recuperação.",
      en: "Post-assignment portfolio management and recovery maximisation.",
    },
    lede: {
      pt: "O preço de uma carteira é uma hipótese; a recuperação é o resultado. O acompanhamento pós-fechamento existe para verificar a hipótese contra a realidade e corrigir a operação enquanto há tempo.",
      en: "A portfolio's price is a hypothesis; recovery is the outcome. Post-closing monitoring exists to test the hypothesis against reality and correct the operation while there is still time.",
    },
    complexity: {
      pt: [
        "A capacidade operacional do servicer é determinante da curva de recuperação efetiva — frequentemente mais do que a qualidade do estoque.",
        "O desvio entre curva projetada e curva realizada precisa ser medido mensalmente, não ao final do ciclo.",
        "O custo de cobrança por real recuperado define a margem real da operação.",
        "O tratamento de dados pessoais na cobrança está integralmente sujeito à LGPD.",
      ],
      en: [
        "The servicer's operational capacity drives the effective recovery curve — often more than the quality of the stock.",
        "Divergence between projected and realised curves must be measured monthly, not at the end of the cycle.",
        "Collection cost per unit recovered defines the operation's real margin.",
        "Personal data processing in collection is fully subject to the LGPD.",
      ],
    },
    role: {
      pt: [
        "Seleção e avaliação técnica de servicers qualificados.",
        "Definição da régua de cobrança e da estratégia por segmento da carteira.",
        "Monitoramento da curva de recuperação contra o caso-base e reporte periódico ao investidor.",
        "Revisão de estratégia quando o desvio observado exige correção.",
      ],
      en: [
        "Selection and technical assessment of qualified servicers.",
        "Definition of the collection workflow and per-segment portfolio strategy.",
        "Monitoring of the recovery curve against the base case and periodic investor reporting.",
        "Strategy revision where observed divergence requires correction.",
      ],
    },
    frame: {
      pt: [
        { label: "Indicadores", value: "WARR · recovery acumulado · custo/receita" },
        { label: "Periodicidade", value: "Reporte mensal" },
        { label: "Conformidade", value: "LGPD" },
        { label: "Papel da Blackhill", value: "Coordenação e monitoramento" },
      ],
      en: [
        { label: "Indicators", value: "WARR · cumulative recovery · cost/revenue" },
        { label: "Frequency", value: "Monthly reporting" },
        { label: "Compliance", value: "LGPD" },
        { label: "Blackhill's role", value: "Coordination and monitoring" },
      ],
    },
  },
];

export const TIER_ORDER: Tier[] = ["core", "capability", "complementary"];

export const TIER_LABEL: Record<Tier, Localized<string>> = {
  core: { pt: "Núcleo de autoridade", en: "Core authority" },
  capability: { pt: "Capacidades de estruturação", en: "Structuring capabilities" },
  complementary: { pt: "Serviços complementares", en: "Complementary services" },
};

export const TIER_NOTE: Record<Tier, Localized<string>> = {
  core: {
    pt: "Frentes em que a Blackhill concentra a maior profundidade técnica e onde se posiciona como referência de mercado.",
    en: "Practice lines where Blackhill concentrates its deepest technical capability and positions itself as a market reference.",
  },
  capability: {
    pt: "Instrumentos técnicos que viabilizam a monetização dos ativos do núcleo.",
    en: "Technical instruments that enable monetisation of the core asset classes.",
  },
  complementary: {
    pt: "Serviços oferecidos a clientes do núcleo, sem protagonismo narrativo equivalente.",
    en: "Services offered to core clients, without equivalent narrative prominence.",
  },
};

export function areaBySlug(slug: string): AdvisoryArea | undefined {
  return ADVISORY_AREAS.find((area) => area.slug === slug);
}

export function areasByTier(tier: Tier): AdvisoryArea[] {
  return ADVISORY_AREAS.filter((area) => area.tier === tier);
}
