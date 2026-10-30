import type { Localized } from "./site";

/**
 * PILLAR 2 — Strategic Technology Investments.
 *
 * Disclosure limits set by the founder (Oct 2026) and carried into Brand
 * Standard v1.1:
 *   · no ownership percentages, control statements or corporate-relationship
 *     claims without current documentary validation;
 *   · platforms may be presented institutionally while in development or
 *     pre-launch, provided no operating scale or commercial availability is
 *     implied;
 *   · technology investments are presented as structurally separate from the
 *     advisory mandate.
 *
 * Platform descriptions follow the founder's directive. Product detail for
 * Finders and DealNorth is corroborated by each platform's own repository
 * documentation. Nothing here states a shareholding.
 */

export type Platform = {
  slug: string;
  index: string;
  name: string;
  category: Localized<string>;
  lede: Localized<string>;
  capabilities: Localized<string[]>;
  /** Why it sits next to the advisory practice — the strategic rationale. */
  rationale: Localized<string>;
};

export const PLATFORMS: Platform[] = [
  {
    slug: "xcurve",
    index: "01",
    name: "XCurve",
    category: {
      pt: "Motor de decisão de crédito",
      en: "Credit decisioning engine",
    },
    lede: {
      pt: "Motor de decisão de crédito que combina tecnologia e inteligência artificial para estruturar a análise, a classificação e a priorização de crédito em escala.",
      en: "A credit decisioning engine combining technology and artificial intelligence to structure credit analysis, classification and prioritisation at scale.",
    },
    capabilities: {
      pt: [
        "Modelagem e automação de política de crédito",
        "Classificação e priorização de carteiras por perfil de risco",
        "Aplicação de inteligência artificial à leitura de grandes volumes de dados de crédito",
        "Padronização de critérios de decisão entre equipes e operações",
      ],
      en: [
        "Credit policy modelling and automation",
        "Portfolio classification and prioritisation by risk profile",
        "Application of artificial intelligence to large-volume credit data",
        "Standardisation of decision criteria across teams and operations",
      ],
    },
    rationale: {
      pt: "A precificação de ativos de crédito complexos é limitada pela capacidade de processar informação incompleta e heterogênea. Tecnologia de decisão endereça exatamente essa restrição.",
      en: "Pricing complex credit assets is constrained by the capacity to process incomplete, heterogeneous information. Decisioning technology addresses precisely that constraint.",
    },
  },
  {
    slug: "finders",
    index: "02",
    name: "Finders",
    category: {
      pt: "Originação e negociação de ativos",
      en: "Asset origination and negotiation",
    },
    lede: {
      pt: "Plataforma de originação e negociação de NPL e ativos de crédito complexos, que conecta organizações cedentes a organizações cessionárias em um processo estruturado e auditável.",
      en: "A platform for originating and negotiating NPL and complex credit assets, connecting selling organisations to acquiring organisations through a structured, auditable process.",
    },
    capabilities: {
      pt: [
        "Vitrine de carteiras com manifestação de interesse e habilitação da contraparte",
        "Fluxo de NDA e sala de dados com controle de acesso por concessão",
        "Propostas lacradas, adjudicação e registro do negócio",
        "Inteligência de mercado em agregados anônimos, com piso mínimo de amostra",
        "Operação em equipe com papéis, convites e trilha de auditoria",
      ],
      en: [
        "Portfolio showcase with expressions of interest and counterparty qualification",
        "NDA workflow and data room with grant-based access control",
        "Sealed proposals, award and transaction record",
        "Market intelligence in anonymous aggregates, subject to a minimum sample floor",
        "Team operation with roles, invitations and audit trail",
      ],
    },
    rationale: {
      pt: "O mercado secundário de crédito complexo no Brasil opera com assimetria de informação elevada e processos pouco padronizados. Uma infraestrutura de negociação reduz atrito sem exigir que a Blackhill seja parte na transação.",
      en: "Brazil's secondary market for complex credit operates with high information asymmetry and weakly standardised processes. Negotiation infrastructure reduces friction without requiring Blackhill to be a party to the transaction.",
    },
  },
  {
    slug: "dealnorth",
    index: "03",
    name: "DealNorth",
    category: {
      pt: "Gestão de pipeline e oportunidades",
      en: "Pipeline and opportunity management",
    },
    lede: {
      pt: "Plataforma SaaS multi-tenant para gestão de pipelines, próximos passos e prioridades, construída para diferentes setores — não restrita ao mercado de crédito.",
      en: "A multi-tenant SaaS platform for managing pipelines, next steps and priorities, built for a range of sectors — not restricted to credit markets.",
    },
    capabilities: {
      pt: [
        "Controle de pipeline com próximos passos e priorização explícita",
        "Arquitetura multi-tenant com isolamento de dados entre organizações",
        "Papéis, permissões e trilha de auditoria por organização",
        "Aplicável a setores distintos, com o mesmo núcleo de produto",
      ],
      en: [
        "Pipeline control with explicit next steps and prioritisation",
        "Multi-tenant architecture with data isolation between organisations",
        "Roles, permissions and audit trail per organisation",
        "Applicable across distinct sectors from the same product core",
      ],
    },
    rationale: {
      pt: "Disciplina de execução é um diferencial transferível: o mesmo rigor de acompanhamento que uma operação de crédito exige aplica-se a qualquer pipeline comercial ou institucional.",
      en: "Execution discipline is a transferable advantage: the same follow-through rigour a credit transaction demands applies to any commercial or institutional pipeline.",
    },
  },
];

/**
 * Mandatory scope note. Appears wherever the ecosystem is presented, including
 * the home page section. Resolves the independence question structurally rather
 * than relying on the reader to infer it.
 */
export const ECOSYSTEM_SCOPE: Localized<{ title: string; body: string[] }> = {
  pt: {
    title: "Escopo e limites desta página",
    body: [
      "As plataformas apresentadas integram o ecossistema de tecnologia da Blackhill Capital e encontram-se em diferentes estágios de desenvolvimento, incluindo fases pré-comerciais. Esta página tem caráter exclusivamente institucional e não constitui oferta de produto, serviço, valor mobiliário ou participação societária.",
      "Participações societárias em empresas de tecnologia são estruturalmente distintas da atividade de advisory. A Blackhill não investe capital próprio nas operações de crédito que assessora e não atua como gestora de capital de terceiros — a independência descrita em Independência & Governança permanece integralmente aplicável.",
      "Percentuais de participação, estruturas de controle e relações societárias não são divulgados nesta página.",
    ],
  },
  en: {
    title: "Scope and limits of this page",
    body: [
      "The platforms presented form part of Blackhill Capital's technology ecosystem and are at different stages of development, including pre-commercial stages. This page is institutional in nature only and does not constitute an offer of any product, service, security or equity interest.",
      "Equity interests in technology companies are structurally distinct from the advisory practice. Blackhill does not invest its own capital in the credit transactions it advises on and does not act as a manager of third-party capital — the independence described under Independence & Governance remains fully applicable.",
      "Ownership percentages, control structures and corporate relationships are not disclosed on this page.",
    ],
  },
};
