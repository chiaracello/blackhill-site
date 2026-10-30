import type { Localized } from "./site";

/* ==========================================================================
   HOME
   ========================================================================== */

export const HOME: Localized<{
  heroEyebrow: string;
  heroTitle: string;
  heroLede: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** Reworded independence triad — Brand Standard v1.1. */
  triad: { label: string; detail: string }[];
  pillarsEyebrow: string;
  pillarsTitle: string;
  pillarsLede: string;
  advisoryEyebrow: string;
  advisoryTitle: string;
  advisoryLede: string;
  ecosystemEyebrow: string;
  ecosystemTitle: string;
  ecosystemLede: string;
  marketEyebrow: string;
  marketTitle: string;
  processEyebrow: string;
  processTitle: string;
  processLede: string;
  segmentEyebrow: string;
  segmentTitle: string;
  segments: { title: string; detail: string; href: string }[];
}> = {
  pt: {
    heroEyebrow: "Financial Advisory & Strategic Technology Investments",
    heroTitle: "Onde capital encontra complexidade.",
    heroLede:
      "A Blackhill Capital atua na interseção entre o Judiciário brasileiro e o mercado de capitais — originando, estruturando e monetizando ativos de crédito complexos para capital institucional qualificado.",
    ctaPrimary: "Apresente sua operação",
    ctaSecondary: "Conhecer as competências",
    triad: [
      {
        label: "Advisor independente",
        detail: "Não investimos nas operações que assessoramos.",
      },
      {
        label: "Sem gestão de capital de terceiros",
        detail: "Não somos gestora regulada nem fundo de investimento.",
      },
      {
        label: "Sem conflito cedente–investidor",
        detail: "Alinhamento exclusivo com o mandato de cada cliente.",
      },
    ],
    pillarsEyebrow: "Dois pilares",
    pillarsTitle: "Uma casa de advisory, com um ecossistema de tecnologia ao lado dela.",
    pillarsLede:
      "O advisory em crédito complexo é a atividade principal da Blackhill e concentra a profundidade técnica da casa. O ecossistema de tecnologia é uma frente distinta, de investimento estratégico, mantida estruturalmente separada das operações assessoradas.",
    advisoryEyebrow: "Pilar 01 — Blackhill Advisors",
    advisoryTitle: "Sete frentes especializadas. Um núcleo de autoridade.",
    advisoryLede:
      "Precatórios e NPL & Distressed Credit concentram a maior profundidade técnica da plataforma. As demais frentes existem como instrumentos de estruturação e serviços de suporte a esse núcleo — não como verticais concorrentes em visibilidade.",
    ecosystemEyebrow: "Pilar 02 — Ecossistema de tecnologia",
    ecosystemTitle: "Tecnologia aplicada à originação, à decisão e à execução de crédito.",
    ecosystemLede:
      "Três plataformas que endereçam as restrições estruturais do mercado de crédito complexo: capacidade de decisão, infraestrutura de negociação e disciplina de execução.",
    marketEyebrow: "Mercado endereçável",
    marketTitle:
      "Um mercado de trilhões de reais com infraestrutura de crédito ainda subdesenvolvida.",
    processEyebrow: "Como atuamos",
    processTitle: "Quatro fases. Rigor técnico em cada etapa.",
    processLede:
      "Toda oportunidade percorre o mesmo processo estruturado, com suporte jurídico-financeiro independente em cada fase.",
    segmentEyebrow: "Comece por aqui",
    segmentTitle: "Três caminhos, conforme o seu papel na operação.",
    segments: [
      {
        title: "Sou investidor",
        detail:
          "Family office, fundo, gestora, banco ou securitizadora em busca de acesso institucional a ativos de crédito complexos.",
        href: "/investors",
      },
      {
        title: "Sou cedente",
        detail:
          "Banco, empresa ou ente público com carteira ou ativo de crédito para cessão, com necessidade de confidencialidade.",
        href: "/companies",
      },
      {
        title: "Busco reestruturação",
        detail:
          "Empresa com passivos complexos que precisa reorganizar sua estrutura de capital com assessoria independente.",
        href: "/advisory/restructuring",
      },
    ],
  },
  en: {
    heroEyebrow: "Financial Advisory & Strategic Technology Investments",
    heroTitle: "Where capital meets complexity.",
    heroLede:
      "Blackhill Capital operates at the intersection of the Brazilian judiciary and the capital markets — originating, structuring and monetising complex credit assets for qualified institutional capital.",
    ctaPrimary: "Discuss a Transaction",
    ctaSecondary: "Explore our capabilities",
    triad: [
      {
        label: "Independent advisor",
        detail: "We do not invest in the transactions we advise on.",
      },
      {
        label: "No third-party capital under management",
        detail: "We are neither a regulated manager nor an investment fund.",
      },
      {
        label: "No seller–investor conflict",
        detail: "Exclusive alignment with each client's mandate.",
      },
    ],
    pillarsEyebrow: "Two pillars",
    pillarsTitle: "An advisory house, with a technology ecosystem alongside it.",
    pillarsLede:
      "Complex credit advisory is Blackhill's principal activity and holds the firm's technical depth. The technology ecosystem is a distinct strategic investment front, kept structurally separate from advised transactions.",
    advisoryEyebrow: "Pillar 01 — Blackhill Advisors",
    advisoryTitle: "Seven specialised practice lines. One core of authority.",
    advisoryLede:
      "Court-ordered public claims and NPL & Distressed Credit hold the platform's deepest technical capability. The remaining lines exist as structuring instruments and support services to that core — not as verticals competing for visibility.",
    ecosystemEyebrow: "Pillar 02 — Technology ecosystem",
    ecosystemTitle: "Technology applied to credit origination, decisioning and execution.",
    ecosystemLede:
      "Three platforms addressing the structural constraints of the complex credit market: decisioning capacity, negotiation infrastructure and execution discipline.",
    marketEyebrow: "Addressable market",
    marketTitle:
      "A market of trillions of reais with credit infrastructure that remains underdeveloped.",
    processEyebrow: "How we work",
    processTitle: "Four phases. Technical rigour at every stage.",
    processLede:
      "Every opportunity follows the same structured process, with independent legal and financial support at each phase.",
    segmentEyebrow: "Start here",
    segmentTitle: "Three paths, according to your role in the transaction.",
    segments: [
      {
        title: "I am an investor",
        detail:
          "Family office, fund, asset manager, bank or securitisation company seeking institutional access to complex credit assets.",
        href: "/investors",
      },
      {
        title: "I am a seller",
        detail:
          "Bank, company or public entity with a credit portfolio or asset to assign, requiring confidentiality.",
        href: "/companies",
      },
      {
        title: "I need restructuring",
        detail:
          "A company with complex liabilities that needs to reorganise its capital structure with independent advice.",
        href: "/advisory/restructuring",
      },
    ],
  },
};

/* ==========================================================================
   PROCESS — four phases, Standard §1 "Rigor Técnico"
   ========================================================================== */

export const PROCESS: Localized<{ index: string; title: string; detail: string }[]> = {
  pt: [
    {
      index: "01",
      title: "Originação",
      detail:
        "Mapeamento por rede institucional proprietária, não dependente de leilões públicos ou bases de dados abertas.",
    },
    {
      index: "02",
      title: "Análise & Due Diligence",
      detail:
        "Triagem de risco, verificação documental e análise jurídico-financeira, com parecer independente quando o ativo exige.",
    },
    {
      index: "03",
      title: "Estruturação & Negociação",
      detail:
        "Modelagem do veículo, desenho de garantias e proteções contratuais, condução até o fechamento.",
    },
    {
      index: "04",
      title: "Monitoramento",
      detail:
        "Acompanhamento pós-fechamento, reporte periódico e revisão de estratégia conforme a curva realizada.",
    },
  ],
  en: [
    {
      index: "01",
      title: "Origination",
      detail:
        "Mapping through a proprietary institutional network, not dependent on public auctions or open databases.",
    },
    {
      index: "02",
      title: "Analysis & Due Diligence",
      detail:
        "Risk screening, document verification and legal-financial analysis, with an independent opinion where the asset requires one.",
    },
    {
      index: "03",
      title: "Structuring & Negotiation",
      detail:
        "Vehicle modelling, design of security and contractual protections, through to closing.",
    },
    {
      index: "04",
      title: "Monitoring",
      detail:
        "Post-closing follow-through, periodic reporting and strategy revision against the realised curve.",
    },
  ],
};

/* ==========================================================================
   MARKET — public data only. Source and consolidation date are mandatory.
   ========================================================================== */

export const MARKET_STATS: Localized<
  { value: string; label: string; detail: string; source: string }[]
> = {
  pt: [
    {
      value: "R$ 6,5 tri",
      label: "Carteira de crédito do SFN",
      detail: "Volume total de crédito do sistema financeiro nacional.",
      source: "Banco Central do Brasil",
    },
    {
      value: "R$ 524 bi",
      label: "Dívida negativada",
      detail: "Inadimplência acumulada de pessoas físicas e jurídicas.",
      source: "Serasa Experian",
    },
    {
      value: "R$ 393 bi",
      label: "Estoque de precatórios",
      detail: "Créditos judiciais definitivos na fila orçamentária dos entes públicos.",
      source: "TCU · PGFN",
    },
    {
      value: "R$ 6 bi+",
      label: "Dívida ativa municipal",
      detail: "Potencial de mercado endereçável aberto pela LC 208/2024.",
      source: "Recovery · Deloitte",
    },
  ],
  en: [
    {
      value: "R$ 6.5 tn",
      label: "Brazilian financial system credit book",
      detail: "Total credit volume in the national financial system.",
      source: "Central Bank of Brazil",
    },
    {
      value: "R$ 524 bn",
      label: "Registered defaulted debt",
      detail: "Accumulated default by individuals and companies.",
      source: "Serasa Experian",
    },
    {
      value: "R$ 393 bn",
      label: "Court-ordered claims stock",
      detail: "Final judicial claims in the budgetary queue of public entities.",
      source: "Federal Audit Court · Attorney General of the Treasury",
    },
    {
      value: "R$ 6 bn+",
      label: "Municipal active debt",
      detail: "Addressable market potential opened by Complementary Law 208/2024.",
      source: "Recovery · Deloitte",
    },
  ],
};

export const MARKET_PAGE: Localized<{
  title: string;
  lede: string;
  consolidation: string;
  accessTitle: string;
  accessLede: string;
  accessSteps: { title: string; detail: string }[];
}> = {
  pt: {
    title: "Mercado endereçável e acesso a oportunidades",
    lede:
      "O tamanho do mercado de crédito complexo no Brasil é público e verificável. O que não é público — e o que a Blackhill não divulga — são as operações específicas, os cedentes e os investidores envolvidos.",
    consolidation:
      "Dados conforme as últimas divulgações públicas das fontes indicadas. Consolidação: junho de 2026.",
    accessTitle: "Acesso a oportunidades",
    accessLede:
      "A Blackhill não publica oportunidades específicas. O acesso ocorre por processo qualificado, com confidencialidade formalizada antes de qualquer informação sensível ser compartilhada.",
    accessSteps: [
      {
        title: "Contato institucional",
        detail:
          "Apresentação da instituição, do mandato e das classes de ativo de interesse.",
      },
      {
        title: "Confidencialidade",
        detail:
          "Formalização de NDA antes do compartilhamento de qualquer informação sobre ativos ou contrapartes.",
      },
      {
        title: "Sala de dados",
        detail:
          "Disponibilização de documentação para due diligence, com acesso controlado e registrado.",
      },
      {
        title: "Due diligence e estruturação",
        detail:
          "Diligência independente do investidor, seguida de term sheet e estruturação da operação.",
      },
    ],
  },
  en: {
    title: "Addressable market and access to opportunities",
    lede:
      "The size of Brazil's complex credit market is public and verifiable. What is not public — and what Blackhill does not disclose — are the specific transactions, sellers and investors involved.",
    consolidation:
      "Figures per the most recent public disclosures of the sources indicated. Consolidated: June 2026.",
    accessTitle: "Access to opportunities",
    accessLede:
      "Blackhill does not publish specific opportunities. Access follows a qualified process, with confidentiality formalised before any sensitive information is shared.",
    accessSteps: [
      {
        title: "Institutional contact",
        detail: "Presentation of the institution, its mandate and asset classes of interest.",
      },
      {
        title: "Confidentiality",
        detail:
          "Execution of an NDA before any information on assets or counterparties is shared.",
      },
      {
        title: "Data room",
        detail: "Documentation made available for due diligence, with controlled, logged access.",
      },
      {
        title: "Due diligence and structuring",
        detail:
          "The investor's independent diligence, followed by term sheet and transaction structuring.",
      },
    ],
  },
};

/* ==========================================================================
   ABOUT
   ========================================================================== */

export const ABOUT: Localized<{
  title: string;
  lede: string;
  bodyEyebrow: string;
  body: string[];
  advisorsEyebrow: string;
  advisorsTitle: string;
  advisorsBody: string;
  advisorsScope: string[];
  founderEyebrow: string;
  founderIntro: string;
  portraitCaption: string;
  founderBio: string[];
  track: { org: string; role: string; detail: string }[];
  trackCaveat: string;
  independenceEyebrow: string;
  independenceTitle: string;
  independenceLede: string;
  doesTitle: string;
  does: string[];
  doesNotTitle: string;
  doesNot: string[];
  separationTitle: string;
  separationLede: string;
  separation: { title: string; detail: string }[];
}> = {
  pt: {
    title: "Uma boutique construída sobre uma competência rara.",
    lede:
      "A Blackhill Capital entrega o que gestoras de crédito generalistas não têm — profundidade jurídico-processual em ativos judiciais — e o que escritórios de advocacia não têm — disciplina de underwriting, estruturação de veículos e acesso a capital institucional.",
    bodyEyebrow: "Quem somos",
    body: [
      "A Blackhill Capital é uma boutique independente de assessoria financeira especializada em ativos de crédito complexos no Brasil. Atuamos como advisor, estruturador, intermediário e originador — nunca como gestora discricionária de capital de terceiros.",
      "Existe um espaço entre o sistema judicial brasileiro e o mercado de capitais que poucas instituições compreendem por completo. Esse espaço concentra trilhões de reais em ativos — precatórios, créditos judiciais, carteiras distressed — presos por assimetria de informação, complexidade processual e falta de estruturação técnica.",
      "A Blackhill existe para operar nesse espaço, com o rigor técnico de uma instituição financeira combinado à profundidade jurídico-processual que esses ativos exigem. Não somos gestora, não somos escritório de advocacia, não somos servicer.",
      "A partir de 2026, a plataforma passou a incluir uma frente de investimentos estratégicos em tecnologia, mantida estruturalmente separada da atividade de advisory.",
    ],
    advisorsEyebrow: "Blackhill Advisors",
    advisorsTitle: "A frente de advisory da plataforma.",
    advisorsBody:
      "Blackhill Advisors é a denominação da frente especializada em assessoria financeira da Blackhill Capital. Não constitui pessoa jurídica independente: é a designação institucional da atividade de advisory conduzida pela Blackhill Capital Ltda.",
    advisorsScope: [
      "Financial Advisory",
      "Structured Credit",
      "Debt Solutions",
      "NPL",
      "Distressed Assets",
      "Judicial Claims",
      "Special Situations",
    ],
    founderEyebrow: "Sócio-fundador",
    portraitCaption: "Marcello de Rezende Chiara · Founder & Managing Partner · São Paulo",
    founderIntro:
      "Mais de 30 anos em mercados financeiros, com foco em crédito estruturado, distressed assets e advisory institucional.",
    founderBio: [
      "A trajetória de Marcello Chiara atravessa as três posições que definem o mercado de crédito estressado brasileiro: a mesa de um banco de investimento, a operação de originação e gestão de carteiras inadimplidas, e a área de distressed assets de um banco comercial.",
      "Essa combinação é o que sustenta a competência central da Blackhill: avaliar um ativo judicial com o rigor de underwriting de uma instituição financeira, sem depender de terceiros para compreender o processo que o originou.",
    ],
    track: [
      {
        org: "BTG Pactual",
        role: "Associate Partner",
        detail: "Cerca de 20 anos em crédito, distressed e estruturação.",
      },
      {
        org: "Enforce",
        role: "Head Comercial",
        detail:
          "Arm de NPL do BTG Pactual — originação e gestão de carteiras inadimplidas.",
      },
      {
        org: "Banco ABC Brasil",
        role: "Distressed Assets",
        detail: "Análise e estruturação de ativos estressados.",
      },
    ],
    trackCaveat:
      "Experiência consolidada ao longo da trajetória profissional do sócio-fundador. Não representa ativos sob gestão, pipeline ou histórico de operações da Blackhill Capital.",
    independenceEyebrow: "Independência & Governança",
    independenceTitle: "O que somos, e o que deliberadamente não somos.",
    independenceLede:
      "Para um cedente, a independência do advisor é a condição que permite expor um ativo. Para um investidor, é o que garante que a análise não esteja contaminada por interesse próprio na transação. Por isso ela é enunciada aqui de forma explícita e verificável.",
    doesTitle: "O que a Blackhill faz",
    does: [
      "Origina oportunidades de crédito complexo junto a cedentes institucionais.",
      "Estrutura veículos de investimento — FIDC, CRI, cessão, debêntures.",
      "Intermedia entre cedentes e investidores qualificados, com due diligence rigorosa.",
      "Assessora empresas em reestruturação de passivos e renegociação de dívida.",
      "Monitora operações pós-fechamento com foco em maximização de recuperação.",
      "Mantém participações estratégicas em plataformas de tecnologia, fora do mandato de advisory.",
    ],
    doesNotTitle: "O que a Blackhill não faz",
    doesNot: [
      "Não gere capital de terceiros nem atua como gestora regulada.",
      "Não investe capital próprio nas operações de crédito que assessora.",
      "Não é parte compradora ou vendedora nas transações em que atua como advisor.",
      "Não garante retorno, rentabilidade ou recuperação de ativos.",
      "Não emite pareceres jurídicos nem recomendações de investimento.",
      "Não compartilha informação confidencial entre cedentes e investidores sem autorização.",
    ],
    separationTitle: "Quatro conceitos que nunca se confundem",
    separationLede:
      "A separação abaixo é obrigatória em todo material da Blackhill, institucional ou confidencial. Conflatar essas categorias é o erro de comunicação mais comum no mercado de crédito complexo — e o mais custoso em credibilidade.",
    separation: [
      {
        title: "Mercado endereçável",
        detail: "Dados públicos de mercado e dimensionamento setorial, com fonte e data-base.",
      },
      {
        title: "Pipeline Blackhill",
        detail: "Oportunidades atuais da firma. Não divulgadas publicamente.",
      },
      {
        title: "Track record profissional",
        detail: "Histórico do sócio-fundador anterior à Blackhill, sempre identificado como tal.",
      },
      {
        title: "Track record Blackhill",
        detail: "Histórico da firma desde a fundação. Não divulgado publicamente.",
      },
    ],
  },
  en: {
    title: "A boutique built on a rare combination of skills.",
    lede:
      "Blackhill Capital delivers what generalist credit managers lack — procedural and legal depth in judicial assets — and what law firms lack — underwriting discipline, vehicle structuring and access to institutional capital.",
    bodyEyebrow: "Who we are",
    body: [
      "Blackhill Capital is an independent financial advisory boutique specialising in complex credit assets in Brazil. We act as advisor, structurer, intermediary and originator — never as a discretionary manager of third-party capital.",
      "There is a space between the Brazilian judicial system and the capital markets that few institutions fully understand. That space holds trillions of reais in assets — court-ordered claims, judicial credits, distressed portfolios — locked in by information asymmetry, procedural complexity and the absence of technical structuring.",
      "Blackhill exists to operate in that space, with the technical rigour of a financial institution combined with the procedural depth these assets demand. We are not a fund manager, not a law firm, not a servicer.",
      "From 2026, the platform also includes a strategic technology investment front, kept structurally separate from the advisory practice.",
    ],
    advisorsEyebrow: "Blackhill Advisors",
    advisorsTitle: "The platform's advisory front.",
    advisorsBody:
      "Blackhill Advisors is the name of Blackhill Capital's specialised financial advisory front. It is not a separate legal entity: it is the institutional designation of the advisory activity conducted by Blackhill Capital Ltda.",
    advisorsScope: [
      "Financial Advisory",
      "Structured Credit",
      "Debt Solutions",
      "NPL",
      "Distressed Assets",
      "Judicial Claims",
      "Special Situations",
    ],
    founderEyebrow: "Founding partner",
    portraitCaption: "Marcello de Rezende Chiara · Founder & Managing Partner · São Paulo",
    founderIntro:
      "Over 30 years in financial markets, focused on structured credit, distressed assets and institutional advisory.",
    founderBio: [
      "Marcello Chiara's career spans the three positions that define Brazil's distressed credit market: the desk of an investment bank, the origination and management of non-performing portfolios, and the distressed assets function of a commercial bank.",
      "That combination underpins Blackhill's core capability: assessing a judicial asset with the underwriting rigour of a financial institution, without depending on third parties to understand the proceeding that created it.",
    ],
    track: [
      {
        org: "BTG Pactual",
        role: "Associate Partner",
        detail: "Approximately 20 years in credit, distressed and structuring.",
      },
      {
        org: "Enforce",
        role: "Head of Commercial",
        detail: "BTG Pactual's NPL arm — origination and management of non-performing portfolios.",
      },
      {
        org: "Banco ABC Brasil",
        role: "Distressed Assets",
        detail: "Analysis and structuring of stressed assets.",
      },
    ],
    trackCaveat:
      "Experience accumulated over the founding partner's professional career. It does not represent assets under management, pipeline or transaction history of Blackhill Capital.",
    independenceEyebrow: "Independence & Governance",
    independenceTitle: "What we are, and what we deliberately are not.",
    independenceLede:
      "For a seller, the advisor's independence is the condition that makes exposing an asset possible. For an investor, it is what ensures the analysis is not contaminated by self-interest in the transaction. That is why it is stated here explicitly and verifiably.",
    doesTitle: "What Blackhill does",
    does: [
      "Originates complex credit opportunities from institutional sellers.",
      "Structures investment vehicles — receivables funds, notes, assignments, debentures.",
      "Intermediates between sellers and qualified investors, with rigorous due diligence.",
      "Advises companies on liability restructuring and debt renegotiation.",
      "Monitors transactions post-closing with a focus on maximising recovery.",
      "Holds strategic interests in technology platforms, outside the advisory mandate.",
    ],
    doesNotTitle: "What Blackhill does not do",
    doesNot: [
      "Does not manage third-party capital or act as a regulated manager.",
      "Does not invest its own capital in the credit transactions it advises on.",
      "Is not a buying or selling party in transactions where it acts as advisor.",
      "Does not guarantee returns, profitability or asset recovery.",
      "Does not issue legal opinions or investment recommendations.",
      "Does not share confidential information between sellers and investors without authorisation.",
    ],
    separationTitle: "Four concepts that are never conflated",
    separationLede:
      "The separation below is mandatory in every Blackhill material, institutional or confidential. Conflating these categories is the most common communication error in the complex credit market — and the most costly in credibility.",
    separation: [
      {
        title: "Addressable market",
        detail: "Public market data and sector sizing, with source and reference date.",
      },
      {
        title: "Blackhill pipeline",
        detail: "The firm's current opportunities. Not publicly disclosed.",
      },
      {
        title: "Professional track record",
        detail:
          "The founding partner's history prior to Blackhill, always identified as such.",
      },
      {
        title: "Blackhill track record",
        detail: "The firm's history since inception. Not publicly disclosed.",
      },
    ],
  },
};

/* ==========================================================================
   INVESTORS
   ========================================================================== */

export const INVESTORS: Localized<{
  title: string;
  lede: string;
  personasEyebrow: string;
  personas: { title: string; profile: string; ticket: string; detail: string }[];
  ticketLabel: string;
  profileEyebrow: string;
  profileTitle: string;
  expectations: string[];
  ddEyebrow: string;
  ddTitle: string;
  ddLede: string;
}> = {
  pt: {
    title: "Acesso institucional a ativos de crédito complexos.",
    lede:
      "A Blackhill não distribui cotas nem capta recursos. Apresenta oportunidades estruturadas a investidores qualificados, com a documentação necessária para que cada um conduza sua própria diligência.",
    personasEyebrow: "Perfis atendidos",
    personas: [
      {
        title: "Family Offices",
        profile: "Patrimônio acima de R$ 50 milhões",
        ticket: "R$ 5 mi – R$ 50 mi",
        detail:
          "Buscam diversificação em crédito privado e ativos alternativos, com tolerância a liquidez restrita.",
      },
      {
        title: "Fundos de Crédito & Gestoras",
        profile: "Mandato em crédito estruturado, distressed ou special situations",
        ticket: "R$ 10 mi – R$ 200 mi",
        detail:
          "Requerem material com rigor de comitê de investimento e modelagem auditável.",
      },
      {
        title: "Bancos & Securitizadoras",
        profile: "Originação de carteiras, cessão e co-investimento",
        ticket: "Conforme mandato",
        detail:
          "Exigem compliance rigoroso e estrutura documental completa em cada etapa.",
      },
      {
        title: "Investidores Institucionais",
        profile: "Fundos de pensão, seguradoras e fundos soberanos",
        ticket: "Conforme mandato",
        detail:
          "Mandato conservador — exigem estrutura regulatória formal e, quando aplicável, rating.",
      },
    ],
    ticketLabel: "Ticket típico",
    profileEyebrow: "O que esperar da Blackhill",
    profileTitle: "Material técnico, não material de captação.",
    expectations: [
      "Rigor técnico e linguagem de banco de investimento, sem exagero comercial.",
      "Dados verificáveis, com fonte e data-base explícitas.",
      "Clareza permanente sobre o papel da Blackhill: advisor, nunca parte ou gestor.",
      "Separação explícita entre dados de mercado, pipeline e track record.",
      "Ausência de promessa de retorno, rentabilidade-alvo ou garantia implícita.",
      "Disclaimer e caveat em todo material que contenha dados financeiros.",
    ],
    ddEyebrow: "Processo",
    ddTitle: "Como funciona a due diligence",
    ddLede:
      "A diligência é conduzida pelo investidor, com assessores independentes de sua escolha. A Blackhill organiza a documentação, coordena os prestadores e responde às solicitações — mas não substitui, nem pretende substituir, a análise independente do investidor.",
  },
  en: {
    title: "Institutional access to complex credit assets.",
    lede:
      "Blackhill does not distribute fund units or raise capital. It presents structured opportunities to qualified investors, with the documentation each needs to conduct its own diligence.",
    personasEyebrow: "Profiles served",
    personas: [
      {
        title: "Family Offices",
        profile: "Assets above R$ 50 million",
        ticket: "R$ 5 m – R$ 50 m",
        detail:
          "Seeking diversification into private credit and alternative assets, with tolerance for restricted liquidity.",
      },
      {
        title: "Credit Funds & Asset Managers",
        profile: "Mandate in structured credit, distressed or special situations",
        ticket: "R$ 10 m – R$ 200 m",
        detail: "Require investment-committee-grade material and auditable modelling.",
      },
      {
        title: "Banks & Securitisation Companies",
        profile: "Portfolio origination, assignment and co-investment",
        ticket: "Per mandate",
        detail: "Require rigorous compliance and complete documentation at every stage.",
      },
      {
        title: "Institutional Investors",
        profile: "Pension funds, insurers and sovereign funds",
        ticket: "Per mandate",
        detail:
          "Conservative mandate — require a formal regulatory structure and, where applicable, a rating.",
      },
    ],
    ticketLabel: "Typical ticket",
    profileEyebrow: "What to expect from Blackhill",
    profileTitle: "Technical material, not fundraising material.",
    expectations: [
      "Technical rigour and investment-banking register, without commercial overstatement.",
      "Verifiable data, with explicit source and reference date.",
      "Permanent clarity on Blackhill's role: advisor, never a party or a manager.",
      "Explicit separation between market data, pipeline and track record.",
      "No promise of returns, target profitability or implied guarantee.",
      "Disclaimer and caveats on every material containing financial data.",
    ],
    ddEyebrow: "Process",
    ddTitle: "How due diligence works",
    ddLede:
      "Diligence is conducted by the investor, with independent advisers of its own choosing. Blackhill organises documentation, coordinates providers and responds to requests — but does not replace, and does not seek to replace, the investor's independent analysis.",
  },
};

/* ==========================================================================
   COMPANIES — sellers and restructuring
   ========================================================================== */

export const COMPANIES: Localized<{
  title: string;
  lede: string;
  sellersEyebrow: string;
  sellersTitle: string;
  sellersLede: string;
  sellersPoints: { title: string; detail: string }[];
  restructuringEyebrow: string;
  restructuringTitle: string;
  restructuringLede: string;
  restructuringPoints: { title: string; detail: string }[];
}> = {
  pt: {
    title: "Para cedentes e empresas em reestruturação.",
    lede:
      "Dois públicos com necessidades distintas, unidos por uma mesma exigência: discrição e ausência de conflito de interesse por parte do advisor.",
    sellersEyebrow: "Para cedentes",
    sellersTitle: "Monetizar um ativo complexo sem expor a operação.",
    sellersLede:
      "Bancos, empresas e entes públicos com carteiras ou créditos para cessão encontram na Blackhill um canal institucional, não um comprador. A distinção é estrutural: não adquirimos o ativo que assessoramos, portanto não há interesse próprio na formação do preço.",
    sellersPoints: [
      {
        title: "A Blackhill não compra o seu ativo",
        detail:
          "Atuamos como advisor e intermediário. Não somos parte compradora na transação que estruturamos, o que elimina o conflito típico de negociar com um fundo adquirente.",
      },
      {
        title: "Confidencialidade antes da informação",
        detail:
          "Nenhuma informação sobre o ativo, a instituição ou a operação circula antes da formalização de confidencialidade. Não compartilhamos informação entre cedentes e investidores sem autorização expressa.",
      },
      {
        title: "Acesso a capital qualificado",
        detail:
          "A rede de investidores institucionais é proprietária e segmentada por mandato, classe de ativo e ticket — o que reduz o tempo entre a decisão de ceder e o fechamento.",
      },
      {
        title: "Estruturação, não apenas intermediação",
        detail:
          "Quando o ativo exige um veículo, estruturamos o veículo. Quando exige correção documental antes da cessão, isso é endereçado antes de qualquer aproximação ao mercado.",
      },
    ],
    restructuringEyebrow: "Para empresas em reestruturação",
    restructuringTitle: "Assessoria independente, sem viés de gestora.",
    restructuringLede:
      "Reconhecemos a sensibilidade de uma situação de passivo estressado. A assessoria é conduzida com discrição, no interesse exclusivo da empresa, e sem que a Blackhill tenha posição no outro lado da mesa.",
    restructuringPoints: [
      {
        title: "O mandante é a empresa",
        detail:
          "Atuamos exclusivamente no interesse da empresa assessorada. Não representamos credores na mesma operação.",
      },
      {
        title: "A mesma lente técnica, do lado oposto",
        detail:
          "Precificamos passivos com a mesma disciplina que aplicamos a ativos distressed — o que permite antecipar a leitura que o credor fará da proposta.",
      },
      {
        title: "Extrajudicial antes de judicial",
        detail:
          "A via judicial é uma alternativa, não um ponto de partida. A escolha altera materialmente prazo, custo e exposição reputacional.",
      },
      {
        title: "Limite claro de escopo",
        detail:
          "Não emitimos parecer jurídico. A representação legal permanece com os assessores jurídicos da empresa, com quem trabalhamos em conjunto.",
      },
    ],
  },
  en: {
    title: "For sellers and companies in restructuring.",
    lede:
      "Two audiences with distinct needs, joined by a single requirement: discretion and the absence of any conflict of interest on the advisor's part.",
    sellersEyebrow: "For sellers",
    sellersTitle: "Monetise a complex asset without exposing the transaction.",
    sellersLede:
      "Banks, companies and public entities with portfolios or claims to assign find in Blackhill an institutional channel, not a buyer. The distinction is structural: we do not acquire the asset we advise on, so we have no interest of our own in how the price is formed.",
    sellersPoints: [
      {
        title: "Blackhill does not buy your asset",
        detail:
          "We act as advisor and intermediary. We are not a buying party in the transaction we structure, which removes the conflict inherent in negotiating with an acquiring fund.",
      },
      {
        title: "Confidentiality before information",
        detail:
          "No information about the asset, the institution or the transaction circulates before confidentiality is formalised. We do not share information between sellers and investors without express authorisation.",
      },
      {
        title: "Access to qualified capital",
        detail:
          "The institutional investor network is proprietary and segmented by mandate, asset class and ticket — shortening the time between the decision to sell and closing.",
      },
      {
        title: "Structuring, not merely intermediation",
        detail:
          "Where the asset requires a vehicle, we structure the vehicle. Where it requires documentary remediation before assignment, that is addressed before any approach to the market.",
      },
    ],
    restructuringEyebrow: "For companies in restructuring",
    restructuringTitle: "Independent advice, without a fund manager's bias.",
    restructuringLede:
      "We recognise the sensitivity of a stressed-liability situation. The engagement is conducted with discretion, in the company's exclusive interest, and without Blackhill holding a position on the other side of the table.",
    restructuringPoints: [
      {
        title: "The company is the principal",
        detail:
          "We act exclusively in the interest of the company advised. We do not represent creditors in the same transaction.",
      },
      {
        title: "The same technical lens, from the other side",
        detail:
          "We price liabilities with the same discipline we apply to distressed assets — which allows us to anticipate how a creditor will read the proposal.",
      },
      {
        title: "Out-of-court before judicial",
        detail:
          "A judicial process is an alternative, not a starting point. The choice materially changes timeline, cost and reputational exposure.",
      },
      {
        title: "A clear limit of scope",
        detail:
          "We do not issue legal opinions. Legal representation remains with the company's own counsel, with whom we work jointly.",
      },
    ],
  },
};

/* ==========================================================================
   CONTACT
   ========================================================================== */

export const CONTACT: Localized<{
  title: string;
  lede: string;
  directEyebrow: string;
  formEyebrow: string;
  formTitle: string;
  confidentialityTitle: string;
  confidentialityBody: string;
  labels: {
    name: string;
    institution: string;
    email: string;
    nature: string;
    message: string;
    consent: string;
    submit: string;
    submitting: string;
  };
  placeholders: { name: string; institution: string; email: string; message: string };
  natureHint: string;
  success: { title: string; body: string };
  errors: {
    name: string;
    email: string;
    nature: string;
    message: string;
    consent: string;
    unavailable: string;
    generic: string;
  };
}> = {
  pt: {
    title: "Falar com a Blackhill.",
    lede:
      "Atendimento direto, discreto e qualificado. Para assuntos envolvendo ativos, contrapartes ou operações específicas, o contato por telefone é preferível ao formulário.",
    directEyebrow: "Contato direto",
    formEyebrow: "Formulário",
    formTitle: "Enviar uma mensagem",
    confidentialityTitle: "Tratamento das informações enviadas",
    confidentialityBody:
      "As informações enviadas por este formulário são tratadas de forma confidencial e utilizadas exclusivamente para responder ao seu contato. Não são compartilhadas com terceiros, não alimentam ferramentas de publicidade e não são usadas para envio de comunicação de marketing. Não envie por este canal dados sensíveis, documentos de operações ou informações sujeitas a sigilo contratual.",
    labels: {
      name: "Nome",
      institution: "Empresa ou instituição",
      email: "E-mail profissional",
      nature: "Qual é a natureza da oportunidade?",
      message: "Descrição resumida",
      consent:
        "Autorizo a Blackhill Capital a tratar os dados informados com a finalidade exclusiva de responder a este contato, conforme a Política de Privacidade.",
      submit: "Enviar mensagem",
      submitting: "Enviando…",
    },
    placeholders: {
      name: "Nome completo",
      institution: "Nome da instituição",
      email: "nome@instituicao.com.br",
      message:
        "Descreva o contexto em linhas gerais — classe de ativo, ordem de grandeza e o que você busca. Sem nomes de contrapartes, documentos ou dados de operação.",
    },
    natureHint:
      "A seleção direciona o contato ao sócio responsável pela frente correspondente.",
    success: {
      title: "Mensagem enviada.",
      body:
        "Sua mensagem foi entregue à Blackhill Capital. O retorno é feito pelo sócio responsável, normalmente em até dois dias úteis.",
    },
    errors: {
      name: "Informe seu nome.",
      email: "Informe um e-mail válido.",
      nature: "Selecione a natureza da oportunidade.",
      message: "Descreva o contexto em ao menos 20 caracteres.",
      consent: "É necessário autorizar o tratamento dos dados para enviar a mensagem.",
      unavailable:
        "O envio por formulário está temporariamente indisponível e sua mensagem não foi registrada. Utilize o contato direto indicado nesta página.",
      generic:
        "Não foi possível enviar sua mensagem e ela não foi registrada. Utilize o contato direto indicado nesta página.",
    },
  },
  en: {
    title: "Talk to Blackhill.",
    lede:
      "Direct, discreet and qualified. For matters involving assets, counterparties or specific transactions, a telephone call is preferable to this form.",
    directEyebrow: "Direct contact",
    formEyebrow: "Form",
    formTitle: "Send a message",
    confidentialityTitle: "Handling of the information you send",
    confidentialityBody:
      "Information submitted through this form is treated confidentially and used solely to respond to your enquiry. It is not shared with third parties, does not feed advertising tools and is not used for marketing communication. Please do not send sensitive data, transaction documents or information subject to contractual confidentiality through this channel.",
    labels: {
      name: "Name",
      institution: "Company or institution",
      email: "Professional email",
      nature: "What is the nature of the opportunity?",
      message: "Brief description",
      consent:
        "I authorise Blackhill Capital to process the data provided for the sole purpose of responding to this enquiry, in accordance with the Privacy Policy.",
      submit: "Send message",
      submitting: "Sending…",
    },
    placeholders: {
      name: "Full name",
      institution: "Institution name",
      email: "name@institution.com",
      message:
        "Describe the context in broad terms — asset class, order of magnitude and what you are looking for. No counterparty names, documents or transaction data.",
    },
    natureHint:
      "Your selection routes the enquiry to the partner responsible for that front.",
    success: {
      title: "Message sent.",
      body:
        "Your message has been delivered to Blackhill Capital. Responses come from the responsible partner, usually within two business days.",
    },
    errors: {
      name: "Please provide your name.",
      email: "Please provide a valid email address.",
      nature: "Please select the nature of the opportunity.",
      message: "Please describe the context in at least 20 characters.",
      consent: "You must authorise data processing to send the message.",
      unavailable:
        "Form submission is temporarily unavailable and your message was not recorded. Please use the direct contact details on this page.",
      generic:
        "Your message could not be sent and was not recorded. Please use the direct contact details on this page.",
    },
  },
};
