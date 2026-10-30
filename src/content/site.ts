import type { Locale } from "@/lib/i18n";

export type Localized<T> = Record<Locale, T>;

/* --------------------------------------------------------------------------
   Corporate record — Knowledge Hub v2.1, "Dados Corporativos".
   -------------------------------------------------------------------------- */

export const COMPANY = {
  legalName: "Blackhill Capital Ltda.",
  cnpj: "49.400.092/0001-96",
  address: {
    line1: "Alameda Rio Negro, 1030 — Torre Corporate — Escritório 206",
    line2: "Alphaville — Barueri — SP — CEP 06454-000",
  },
  founder: {
    name: "Marcello de Rezende Chiara",
    shortName: "Marcello Chiara",
    role: "Founder & Managing Partner",
    phone: "+55 (11) 99199-5656",
    phoneHref: "+5511991995656",
    email: "mchiara@blackhillcapital.com.br",
    /**
     * Pending verification. The previous value was assumed, never confirmed,
     * and was rendered nowhere. A `sameAs` pointing at the wrong profile binds
     * the Blackhill entity to a third party, so this stays null until the real
     * addresses are confirmed — see docs/PROPOSTA_SENIOR_LED.md, item C3.
     */
    linkedin: null as string | null,
    initials: "MC",
    /**
     * Professional portrait. Drop the file in `public/` and set the path here
     * (e.g. "/marcello-chiara.jpg"); the About page swaps the typographic
     * fallback for the photograph with no other change.
     */
    photo: null as string | null,
  },
} as const;

/* --------------------------------------------------------------------------
   Navigation. Slugs are shared across locales: `advisory`, `insights` and
   `investors` are current market terms in Brazilian finance, which Standard §3
   preserves in English. Portuguese-only slugs would force a second route tree.
   -------------------------------------------------------------------------- */

export type NavItem = { href: string; label: Localized<string> };

export const NAV: NavItem[] = [
  { href: "/about", label: { pt: "A Blackhill", en: "About" } },
  { href: "/advisory", label: { pt: "Advisory", en: "Advisory" } },
  { href: "/approach", label: { pt: "Abordagem", en: "Our Approach" } },
  { href: "/ecosystem", label: { pt: "Ecossistema", en: "Ecosystem" } },
  { href: "/investors", label: { pt: "Investidores", en: "Investors" } },
  { href: "/companies", label: { pt: "Empresas", en: "Companies" } },
  { href: "/insights", label: { pt: "Insights", en: "Insights" } },
  { href: "/contact", label: { pt: "Contato", en: "Contact" } },
];

export const FOOTER_GROUPS: Localized<
  { title: string; links: { href: string; label: string }[] }[]
> = {
  pt: [
    {
      title: "Instituição",
      links: [
        { href: "/about", label: "A Blackhill" },
        { href: "/approach", label: "Abordagem" },
        { href: "/about#independencia", label: "Independência & Governança" },
        { href: "/about#fundador", label: "Sócio-Fundador" },
        { href: "/ecosystem", label: "Ecossistema de Tecnologia" },
      ],
    },
    {
      title: "Advisory",
      links: [
        { href: "/advisory/precatorios", label: "Precatórios" },
        { href: "/advisory/npl-distressed", label: "NPL & Distressed Credit" },
        { href: "/advisory", label: "Todas as frentes" },
        { href: "/market", label: "Mercado endereçável" },
      ],
    },
    {
      title: "Para quem",
      links: [
        { href: "/investors", label: "Investidores" },
        { href: "/companies", label: "Cedentes e empresas" },
        { href: "/insights", label: "Insights" },
        { href: "/contact", label: "Contato" },
      ],
    },
    {
      title: "Jurídico",
      links: [
        { href: "/compliance", label: "Compliance & Disclaimer" },
        { href: "/privacy", label: "Privacidade e LGPD" },
      ],
    },
  ],
  en: [
    {
      title: "Institution",
      links: [
        { href: "/about", label: "About Blackhill" },
        { href: "/approach", label: "Our Approach" },
        { href: "/about#independencia", label: "Independence & Governance" },
        { href: "/about#fundador", label: "Founding Partner" },
        { href: "/ecosystem", label: "Technology Ecosystem" },
      ],
    },
    {
      title: "Advisory",
      links: [
        { href: "/advisory/precatorios", label: "Court-Ordered Claims" },
        { href: "/advisory/npl-distressed", label: "NPL & Distressed Credit" },
        { href: "/advisory", label: "All practice lines" },
        { href: "/market", label: "Addressable market" },
      ],
    },
    {
      title: "Audiences",
      links: [
        { href: "/investors", label: "Investors" },
        { href: "/companies", label: "Sellers and companies" },
        { href: "/insights", label: "Insights" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/compliance", label: "Compliance & Disclaimer" },
        { href: "/privacy", label: "Privacy and LGPD" },
      ],
    },
  ],
};

/* --------------------------------------------------------------------------
   Brand constants — Standard §1. The tagline is a permanent brand asset and
   is not to be reworded.
   -------------------------------------------------------------------------- */

export const BRAND = {
  tagline: {
    pt: "Onde capital encontra complexidade.",
    en: "Where capital meets complexity.",
  },
  descriptor: {
    pt: "Financial Advisory & Strategic Technology Investments",
    en: "Financial Advisory & Strategic Technology Investments",
  },
} as const satisfies Record<string, Localized<string>>;

/**
 * Mandatory compliance declaration, Standard §1. Reproduced verbatim in the
 * global footer and reinforced on /investors, /market and /compliance.
 */
export const DISCLAIMER: Localized<string> = {
  pt: "Este material não constitui: (i) oferta pública de valores mobiliários; (ii) parecer jurídico; (iii) recomendação de investimento; (iv) promessa de rentabilidade; nem (v) garantia de qualquer natureza. A decisão de investimento cabe exclusivamente ao investidor, com base em suas próprias análises e due diligence independente.",
  en: "This material does not constitute: (i) a public offering of securities; (ii) a legal opinion; (iii) an investment recommendation; (iv) a promise of returns; nor (v) a guarantee of any nature. Investment decisions rest exclusively with the investor, based on their own analysis and independent due diligence.",
};

/** Separation required by the Knowledge Hub: market sizing ≠ Blackhill pipeline. */
export const MARKET_CAVEAT: Localized<string> = {
  pt: "Dados setoriais de mercado, com fonte e data-base indicadas. Não representam operações, pipeline ou ativos sob assessoria da Blackhill Capital.",
  en: "Sector-level market data, with source and reference date stated. It does not represent transactions, pipeline or assets advised on by Blackhill Capital.",
};

export const UI: Localized<Record<string, string>> = {
  pt: {
    skipToContent: "Ir para o conteúdo",
    home: "Início",
    menu: "Menu",
    close: "Fechar",
    openMenu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação",
    language: "Idioma",
    switchTo: "Ver em inglês",
    core: "Núcleo de autoridade",
    complementary: "Capacidade complementar",
    readMore: "Ver detalhe",
    allInsights: "Ver todos os Insights",
    talkToUs: "Falar com a Blackhill",
    knowMore: "Conhecer a Blackhill",
    backToAdvisory: "Todas as frentes de advisory",
    backToInsights: "Todos os Insights",
    sources: "Fontes",
    confidential: "Tratamento confidencial",
    rights: "Todos os direitos reservados",
    inThisSection: "Nesta seção",
  },
  en: {
    skipToContent: "Skip to content",
    home: "Home",
    menu: "Menu",
    close: "Close",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    language: "Language",
    switchTo: "View in Portuguese",
    core: "Core authority",
    complementary: "Complementary capability",
    readMore: "View detail",
    allInsights: "View all Insights",
    talkToUs: "Talk to Blackhill",
    knowMore: "About Blackhill",
    backToAdvisory: "All advisory practice lines",
    backToInsights: "All Insights",
    sources: "Sources",
    confidential: "Confidential handling",
    rights: "All rights reserved",
    inThisSection: "In this section",
  },
};

/* --------------------------------------------------------------------------
   Commercial origination.

   The site is also the entry point for Financial Advisory mandates. The
   taxonomy below drives the qualified contact form and lets an advisory page
   hand the visitor to the form with the subject already selected.
   -------------------------------------------------------------------------- */

export type OpportunityNature = {
  /** Stable value: submitted with the form and accepted as the `assunto` query param. */
  value: string;
  label: Localized<string>;
};

export const OPPORTUNITY_NATURES: OpportunityNature[] = [
  {
    value: "npl",
    label: {
      pt: "Venda ou aquisição de carteira NPL",
      en: "NPL portfolio sale or acquisition",
    },
  },
  {
    value: "structuring",
    label: { pt: "Estruturação de crédito / funding", en: "Credit structuring / funding" },
  },
  {
    value: "restructuring",
    label: { pt: "Debt restructuring", en: "Debt restructuring" },
  },
  {
    value: "special-situations",
    label: { pt: "Special situations", en: "Special situations" },
  },
  {
    value: "judicial-claims",
    label: { pt: "Precatórios / judicial claims", en: "Precatórios / judicial claims" },
  },
  {
    value: "partnerships",
    label: { pt: "Parcerias institucionais", en: "Institutional partnerships" },
  },
  { value: "other", label: { pt: "Outros assuntos", en: "Other matters" } },
];

export function natureByValue(value: string): OpportunityNature | undefined {
  return OPPORTUNITY_NATURES.find((nature) => nature.value === value);
}

/** Advisory front → the subject the contact form opens with. */
export const AREA_NATURE: Record<string, string> = {
  precatorios: "judicial-claims",
  "npl-distressed": "npl",
  claims: "judicial-claims",
  "structured-credit": "structuring",
  "public-receivables": "structuring",
  restructuring: "restructuring",
  servicing: "npl",
};
