import type { Localized } from "./site";

/**
 * Hierarchy approved on 30 October 2026: three cores of equal weight, and the
 * remaining fronts as complementary capabilities.
 *
 *   01 NPL & Distressed Credit
 *   02 Structured Credit, FIDCs & Securities
 *   03 Precatórios & Legal Claims
 *
 * The three cores carry identical editorial weight — equal cells, equal type,
 * equal position. The complementary capabilities keep their full content and
 * their own pages; what they do not carry is the same narrative prominence.
 */
export type Tier = "core" | "complementary";

export type AdvisoryArea = {
  slug: string;
  tier: Tier;
  index: string;
  title: Localized<string>;
  short: Localized<string>;
  lede: Localized<string>;
  /** The financial problem the mandate solves, stated from the client's side. */
  problem: Localized<string>;
  /** Who can engage Blackhill on this front. */
  who: Localized<string[]>;
  /** Why the asset class is structurally complex — the authority argument. */
  complexity: Localized<string[]>;
  /** What Blackhill does, strictly as advisor/structurer/intermediary. */
  role: Localized<string[]>;
  /**
   * Who conducts the mandate, and which specialist the asset requires.
   * Standard §10: states senior conduct and engagement as the mandate requires.
   * It never asserts a permanent team, a formal network or contracted partners.
   */
  execution: Localized<string>;
  /** Regulatory and procedural frame. No pricing, no deal terms. */
  frame: Localized<{ label: string; value: string }[]>;
};

export const ADVISORY_AREAS: AdvisoryArea[] = [
  {
    slug: "npl-distressed",
    tier: "core",
    index: "01",
    title: { pt: "NPL & Distressed Credit", en: "NPL & Distressed Credit" },
    short: {
      pt: "Carteiras inadimplentes e exposições corporativas estressadas, do varejo pulverizado ao corporate.",
      en: "Non-performing portfolios and stressed corporate exposures, from granular retail to corporate.",
    },
    lede: {
      pt: "Precificar uma carteira inadimplente é projetar comportamento de recuperação sobre um ativo cuja documentação, colateral e histórico raramente estão completos. A disciplina está em separar o que é mensurável do que é suposição — e em precificar a diferença.",
      en: "Pricing a non-performing portfolio means projecting recovery behaviour on an asset whose documentation, collateral and history are rarely complete. The discipline lies in separating what is measurable from what is assumption — and pricing the difference.",
    },
    problem: {
      pt: "Carteiras inadimplentes consomem provisão e capital regulatório de quem as originou, e exigem estrutura especializada de recuperação que a maioria dos credores não tem. A Blackhill conecta quem precisa ceder a quem tem mandato, estrutura e apetite para adquirir.",
      en: "Non-performing portfolios consume provisions and regulatory capital from the institution that originated them, and demand specialised recovery infrastructure most lenders do not have. Blackhill connects those who need to sell with those who have the mandate, structure and appetite to acquire.",
    },
    who: {
      pt: [
        "Bancos, financeiras e cooperativas de crédito com carteiras para cessão",
        "Empresas com carteiras de recebíveis inadimplidos",
        "Fundos e gestoras com mandato em distressed e special situations",
        "Securitizadoras e servicers verticalmente integrados",
      ],
      en: [
        "Banks, finance companies and credit unions with portfolios to assign",
        "Companies holding non-performing receivables portfolios",
        "Funds and asset managers mandated in distressed and special situations",
        "Securitisation companies and vertically integrated servicers",
      ],
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
    execution: {
      pt: "A condução é sênior e direta, com a estratificação e a curva de recuperação construídas pela própria Blackhill, e avaliação independente do servicer quando a operação o exige.",
      en: "Senior and direct conduct, with stratification and the recovery curve built by Blackhill itself, and an independent assessment of the servicer where the transaction requires one.",
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
    slug: "structured-credit",
    tier: "core",
    index: "02",
    title: {
      pt: "Crédito Estruturado, FIDCs & Securities",
      en: "Structured Credit, FIDCs & Securities",
    },
    short: {
      pt: "Veículos de investimento com lastro em recebíveis — do FIDC à securitização.",
      en: "Receivables-backed investment vehicles — from receivables funds to securitisation.",
    },
    lede: {
      pt: "A estrutura não é o objetivo: é o instrumento que torna um ativo complexo investível por capital institucional. A escolha entre cessão direta, FIDC simples ou estrutura multiclasse decorre do tamanho, da origem e do perfil de risco da carteira.",
      en: "The structure is not the objective: it is the instrument that makes a complex asset investable by institutional capital. The choice between direct assignment, a single-tranche fund or a multi-class structure follows from the portfolio's size, origin and risk profile.",
    },
    problem: {
      pt: "Um ativo de crédito pode ser bom e, ainda assim, não ser investível: falta o veículo, o desenho de garantias e o arcabouço regulatório que permitem a capital institucional entrar. A Blackhill constrói essa ponte entre o ativo e o investidor.",
      en: "A credit asset can be sound and still not be investable: what is missing is the vehicle, the security design and the regulatory framework that let institutional capital in. Blackhill builds that bridge between the asset and the investor.",
    },
    who: {
      pt: [
        "Originadores de recebíveis que buscam funding estruturado",
        "Empresas que precisam transformar carteira em liquidez",
        "Gestoras que precisam estruturar um veículo para uma tese",
        "Bancos e securitizadoras em operações de cessão",
      ],
      en: [
        "Receivables originators seeking structured funding",
        "Companies that need to turn a portfolio into liquidity",
        "Asset managers that need a vehicle built for a thesis",
        "Banks and securitisation companies in assignment transactions",
      ],
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
    execution: {
      pt: "A condução é sênior e direta, em articulação com o administrador, o custodiante e o gestor do veículo, e com auditoria e assessoria legal mobilizadas conforme a estrutura escolhida.",
      en: "Senior and direct conduct, working with the vehicle's administrator, custodian and manager, and with audit and legal counsel engaged according to the structure chosen.",
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
    slug: "precatorios",
    tier: "core",
    index: "03",
    title: { pt: "Precatórios & Legal Claims", en: "Precatórios & Legal Claims" },
    short: {
      pt: "Créditos judiciais definitivos contra entes públicos federais, estaduais e municipais.",
      en: "Final judicial claims against federal, state and municipal public entities.",
    },
    lede: {
      pt: "O precatório é um crédito reconhecido judicialmente em caráter definitivo contra a Fazenda Pública. Sua complexidade não está no mérito — já decidido — mas na fila orçamentária, na cadeia de titularidade e na atualização do valor. É aí que a estruturação técnica define o resultado.",
      en: "A precatório is a judicially recognised, final claim against the Brazilian public treasury. Its complexity lies not in the merits — already decided — but in the budgetary queue, the chain of title and the restatement of value. That is where technical structuring determines the outcome.",
    },
    problem: {
      pt: "O titular de um precatório tem um crédito já reconhecido em definitivo, mas não tem liquidez: o pagamento depende da fila orçamentária do ente devedor e pode levar anos. A Blackhill estrutura a monetização antecipada desse crédito junto a capital institucional qualificado.",
      en: "The holder of a precatório has a claim already recognised with finality, but no liquidity: payment depends on the debtor entity's budgetary queue and can take years. Blackhill structures the early monetisation of that claim with qualified institutional capital.",
    },
    who: {
      pt: [
        "Detentores de precatórios federais, estaduais ou municipais",
        "Escritórios de advocacia com carteiras de clientes titulares",
        "Empresas com precatórios reconhecidos em balanço",
        "Investidores institucionais com mandato para crédito de ente público",
      ],
      en: [
        "Holders of federal, state or municipal precatórios",
        "Law firms with portfolios of holder clients",
        "Companies carrying recognised precatórios on their balance sheet",
        "Institutional investors mandated for public-entity credit",
      ],
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
    execution: {
      pt: "A condução é sênior e direta. Quando o ativo exige, a Blackhill mobiliza parecer jurídico independente sobre a cadeia processual e a cessibilidade do crédito.",
      en: "Senior and direct conduct. Where the asset requires it, Blackhill engages an independent legal opinion on the procedural chain and the claim's assignability.",
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
    slug: "claims",
    tier: "complementary",
    index: "04",
    title: { pt: "Claims & Litigation Finance", en: "Claims & Litigation Finance" },
    short: {
      pt: "Monetização antecipada de direitos creditórios de origem judicial ou arbitral.",
      en: "Early monetisation of credit rights arising from judicial or arbitral proceedings.",
    },
    lede: {
      pt: "Um direito litigioso só se torna ativo financeiro quando a probabilidade de êxito, a cessibilidade e o prazo de realização podem ser avaliados de forma independente. A elegibilidade é função da fase processual — não da expectativa do titular.",
      en: "A litigious right becomes a financial asset only when probability of success, assignability and time to realisation can be assessed independently. Eligibility is a function of procedural stage — not of the holder's expectation.",
    },
    problem: {
      pt: "Um direito creditório reconhecido em juízo só se converte em caixa quando o processo se encerra — o que pode levar anos e imobilizar capital de giro. A Blackhill estrutura a antecipação desse valor, com as proteções contratuais que o risco processual exige.",
      en: "A credit right recognised in court only converts into cash when proceedings end — which can take years and tie up working capital. Blackhill structures the early realisation of that value, with the contractual protections procedural risk demands.",
    },
    who: {
      pt: [
        "Empresas com créditos tributários, trabalhistas ou comerciais reconhecidos",
        "Escritórios de advocacia com honorários de êxito a realizar",
        "Fundos com mandato em litigation finance",
        "Credores em execuções de longa maturação",
      ],
      en: [
        "Companies with recognised tax, labour or commercial claims",
        "Law firms with success fees yet to be realised",
        "Funds mandated in litigation finance",
        "Creditors in long-maturing enforcement proceedings",
      ],
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
    execution: {
      pt: "A condução é sênior e direta. A avaliação de probabilidade de êxito e de cessibilidade exige parecer jurídico independente, mobilizado conforme a fase processual do direito.",
      en: "Senior and direct conduct. Assessing probability of success and assignability requires an independent legal opinion, engaged according to the procedural stage of the right.",
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
    slug: "public-receivables",
    tier: "complementary",
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
    problem: {
      pt: "Municípios acumulam estoques relevantes de dívida ativa que não se convertem em caixa no horizonte necessário. A LC 208/2024 abriu a via de antecipação — e a estruturação técnica é o que separa a permissão legal da operação executável.",
      en: "Municipalities accumulate material stocks of registered tax debt that do not convert into cash within the horizon they need. Complementary Law 208/2024 opened the path to anticipation — and technical structuring is what separates legal permission from an executable transaction.",
    },
    who: {
      pt: [
        "Municípios com estoque relevante de dívida ativa inscrita",
        "Procuradorias municipais e assessorias jurídicas do setor público",
        "Investidores com mandato para risco soberano subnacional",
        "Securitizadoras e estruturadores de veículos de propósito específico",
      ],
      en: [
        "Municipalities with material registered tax-debt stock",
        "Municipal attorneys' offices and public-sector legal advisers",
        "Investors mandated for subnational sovereign risk",
        "Securitisation companies and special purpose vehicle structurers",
      ],
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
    execution: {
      pt: "A condução é sênior e direta, com assessoria jurídica especializada em direito financeiro público mobilizada conforme o ente devedor e o arcabouço aplicável.",
      en: "Senior and direct conduct, with counsel specialised in public finance law engaged according to the debtor entity and the applicable framework.",
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
    problem: {
      pt: "Uma empresa com passivo estressado precisa negociar com credores que têm incentivos distintos, garantias distintas e mais informação. Sem assessoria independente, a negociação acaba conduzida pelo lado mais preparado — que raramente é o devedor.",
      en: "A company with stressed liabilities must negotiate with creditors who hold different incentives, different security and more information. Without independent advice, the negotiation ends up led by the better-prepared side — which is rarely the debtor.",
    },
    who: {
      pt: [
        "Empresas médias e grandes com passivo bancário, fiscal ou comercial relevante",
        "Grupos empresariais em renegociação de dívida",
        "Acionistas e conselhos avaliando alternativas de capital",
        "Empresas buscando new money com estrutura de garantias",
      ],
      en: [
        "Mid-sized and large companies with material bank, tax or trade liabilities",
        "Corporate groups in debt renegotiation",
        "Shareholders and boards assessing capital alternatives",
        "Companies seeking new money with a security structure",
      ],
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
    execution: {
      pt: "A condução é sênior e direta, em conjunto com os assessores jurídicos da própria empresa. A Blackhill não emite parecer jurídico e não substitui a representação legal.",
      en: "Senior and direct conduct, jointly with the company's own legal advisers. Blackhill does not issue legal opinions and does not replace legal representation.",
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
    problem: {
      pt: "Depois do fechamento, o resultado de uma carteira passa a depender de quem opera a cobrança. O desvio entre a curva projetada e a realizada só aparece a tempo de ser corrigido quando há monitoramento estruturado e independente.",
      en: "After closing, a portfolio's outcome depends on whoever operates collection. The gap between the projected and the realised curve only surfaces in time to be corrected where monitoring is structured and independent.",
    },
    who: {
      pt: [
        "Investidores que adquiriram carteiras e precisam de acompanhamento independente",
        "Fundos com carteiras sob gestão de servicers terceiros",
        "Cedentes com cota subordinada retida na operação",
        "Estruturas de FIDC com reporte periódico obrigatório",
      ],
      en: [
        "Investors that acquired portfolios and need independent oversight",
        "Funds with portfolios managed by third-party servicers",
        "Sellers retaining a subordinated tranche in the transaction",
        "Receivables fund structures with mandatory periodic reporting",
      ],
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
    execution: {
      pt: "A condução é sênior e direta. A avaliação do servicer e da régua de cobrança é feita pela Blackhill; auditoria operacional e de conformidade com a LGPD é mobilizada quando a carteira o exige.",
      en: "Senior and direct conduct. Blackhill assesses the servicer and its collection workflow; operational and LGPD compliance audits are engaged where the portfolio requires them.",
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

export const TIER_ORDER: Tier[] = ["core", "complementary"];

export const TIER_LABEL: Record<Tier, Localized<string>> = {
  core: { pt: "Núcleos de autoridade", en: "Cores of authority" },
  complementary: { pt: "Capacidades complementares", en: "Complementary capabilities" },
};

export const TIER_NOTE: Record<Tier, Localized<string>> = {
  core: {
    pt: "Três frentes de igual relevância, em que a Blackhill concentra a maior profundidade técnica e onde se posiciona como referência de mercado.",
    en: "Three practice lines of equal standing, where Blackhill concentrates its deepest technical capability and positions itself as a market reference.",
  },
  complementary: {
    pt: "Instrumentos técnicos e serviços que viabilizam as operações dos três núcleos, sem protagonismo narrativo equivalente.",
    en: "Technical instruments and services that enable the transactions of the three cores, without equivalent narrative prominence.",
  },
};

export function areaBySlug(slug: string): AdvisoryArea | undefined {
  return ADVISORY_AREAS.find((area) => area.slug === slug);
}

export function areasByTier(tier: Tier): AdvisoryArea[] {
  return ADVISORY_AREAS.filter((area) => area.tier === tier);
}

/* --------------------------------------------------------------------------
   Engagement block, shared by every advisory front.

   Answers "how do I start a confidential conversation?" without promising any
   outcome: no approval, no execution, no result is implied at any step.
   -------------------------------------------------------------------------- */

export const ENGAGE: Localized<{
  eyebrow: string;
  title: string;
  lede: string;
  steps: { title: string; detail: string }[];
  cta: string;
  caveat: string;
}> = {
  pt: {
    eyebrow: "Como iniciar",
    title: "Iniciar uma conversa confidencial.",
    lede:
      "O primeiro contato não exige documentos, nomes de contrapartes ou dados de operação. Basta o contexto em linhas gerais para avaliarmos se há aderência de mandato.",
    steps: [
      {
        title: "Contato preliminar",
        detail:
          "Você descreve o contexto em termos gerais. Avaliamos aderência e retornamos com uma leitura inicial.",
      },
      {
        title: "Confidencialidade",
        detail:
          "Havendo aderência, formalizamos NDA antes de qualquer informação sensível ser compartilhada.",
      },
      {
        title: "Análise e mandato",
        detail:
          "Com a documentação disponível, estruturamos o escopo do trabalho e as condições do mandato.",
      },
    ],
    cta: "Apresente sua operação",
    caveat:
      "O contato preliminar não constitui mandato, proposta vinculante, compromisso de estruturação ou garantia de execução. A aceitação de qualquer trabalho depende de análise prévia e de acordo formal entre as partes.",
  },
  en: {
    eyebrow: "How to start",
    title: "Start a confidential conversation.",
    lede:
      "A first approach requires no documents, counterparty names or transaction data. The context in broad terms is enough for us to assess whether there is mandate fit.",
    steps: [
      {
        title: "Preliminary contact",
        detail:
          "You describe the context in general terms. We assess fit and come back with an initial reading.",
      },
      {
        title: "Confidentiality",
        detail:
          "Where there is fit, an NDA is executed before any sensitive information is shared.",
      },
      {
        title: "Analysis and mandate",
        detail:
          "With documentation available, we define the scope of work and the terms of the mandate.",
      },
    ],
    cta: "Discuss a Transaction",
    caveat:
      "Preliminary contact does not constitute a mandate, a binding proposal, a commitment to structure or any guarantee of execution. Accepting any engagement depends on prior analysis and a formal agreement between the parties.",
  },
};
