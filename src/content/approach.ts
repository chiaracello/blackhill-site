import type { Localized } from "./site";

/* ==========================================================================
   SENIOR-LED POSITIONING

   Approved 30 October 2026. Two constraints govern every string in this file
   and they are not editorial preferences:

   1. No text may assert a number of people, partners, offices, a permanent
      team, a formal partner network or contracted partners. Specialists are
      engaged as each mandate requires — that is the whole of the claim.
   2. No text may present a system, a model or artificial intelligence as the
      author of a decision, a price or a recommendation. Technology is support;
      judgement is human, senior and named.
   ========================================================================== */

/**
 * Institutional signature. Locked in both languages by Standard §10 — the
 * nominal form is deliberate: it states a model of conduct, not a headcount.
 */
export const SIGNATURE: Localized<string[]> = {
  pt: ["Condução sênior", "Tecnologia aplicada", "Foco em execução"],
  en: ["Senior-Led", "Technology-Enabled", "Execution-Focused"],
};

export const APPROACH: Localized<{
  heroEyebrow: string;
  title: string;
  lede: string;
  seniorEyebrow: string;
  seniorTitle: string;
  seniorLede: string;
  seniorPoints: { label: string; detail: string }[];
  structureEyebrow: string;
  structureTitle: string;
  structureBody: string[];
  methodEyebrow: string;
  methodTitle: string;
  methodLede: string;
  deliverableLabel: string;
  methodClose: string;
  methodCaveat: string;
  techEyebrow: string;
  techTitle: string;
  techBody: string[];
  techLimitLabel: string;
  techLimit: string;
  techPillar: string;
}> = {
  pt: {
    heroEyebrow: "Independent Distressed Credit & Special Situations Advisor",
    title: "Condução sênior, do diagnóstico ao fechamento.",
    lede:
      "Esta página descreve como a Blackhill conduz um mandato: quem responde por ele, como a estrutura técnica é montada, quais são os entregáveis de cada fase e onde está o limite entre o trabalho do profissional e o papel da tecnologia.",

    seniorEyebrow: "Condução sênior",
    seniorTitle: "O profissional que avalia a sua operação é o mesmo que a conduz.",
    seniorLede:
      "Não há camada intermediária entre a análise e a execução. A leitura técnica inicial, a negociação com a contraparte e o acompanhamento até o fechamento são conduzidos pelo profissional sênior responsável pelo mandato — que responde diretamente pelo que foi analisado.",
    seniorPoints: [
      {
        label: "Acesso direto ao responsável",
        detail:
          "O contato inicial e a condução do mandato não passam por camadas de triagem. Quem atende é quem decide.",
      },
      {
        label: "Continuidade de leitura",
        detail:
          "Quem analisou o ativo é quem negocia — o que elimina a perda de contexto entre a diligência e a mesa.",
      },
      {
        label: "Responsabilidade nominal",
        detail:
          "Cada mandato tem um responsável identificado, não uma equipe difusa à qual a responsabilidade se dilui.",
      },
    ],

    structureEyebrow: "Estrutura por mandato",
    structureTitle: "Capacidade de execução não se mede por tamanho de equipe.",
    structureBody: [
      "Operações de crédito complexo não exigem uma estrutura permanente de analistas: exigem a competência correta aplicada no momento correto. Conforme a necessidade de cada mandato, a Blackhill mobiliza profissionais especializados e define o escopo técnico de cada intervenção.",
      "O que não é mobilizado é a análise. A tese técnica da operação, a leitura de risco e a condução da negociação permanecem sob responsabilidade direta da Blackhill, que responde pela conclusão técnica apresentada ao cliente.",
      "A estrutura é montada para o ativo. É isso que permite que cada mandato receba atenção sênior integral, sem camada de triagem e sem diluição de responsabilidade.",
    ],

    methodEyebrow: "Método de execução",
    methodTitle: "Quatro fases, cada uma com um entregável definido.",
    methodLede:
      "Todo mandato percorre as mesmas quatro fases, e cada fase termina em algo verificável. É a diferença entre assessoria e intermediação: o cliente recebe uma conclusão técnica, não apenas uma aproximação de mercado.",
    deliverableLabel: "Entregável",
    methodClose:
      "Em todas as fases, o responsável pelo mandato é o mesmo. O que muda é o conjunto de especialistas acionado.",
    methodCaveat:
      "O método descreve como a Blackhill conduz um mandato. Não constitui promessa de prazo, de fechamento, de aprovação de crédito ou de resultado — cada operação depende das condições de mercado, da documentação do ativo e da decisão independente das contrapartes.",

    techEyebrow: "Tecnologia aplicada",
    techTitle: "Tecnologia e inteligência artificial como suporte — nunca como decisor.",
    techBody: [
      "Estratificar uma carteira inadimplente por safra, aging e colateral, projetar curvas de recuperação sob múltiplos cenários, conferir cadeia de titularidade e atualizar valores por índices distintos são tarefas de processamento. A Blackhill utiliza ferramentas avançadas de análise e inteligência artificial para executá-las.",
      "O ganho não é apenas de velocidade: é de alocação. Tratar o processamento com ferramental adequado é o que permite que o tempo do profissional sênior seja gasto onde ele é insubstituível — na leitura de risco, na estruturação e na negociação.",
    ],
    techLimitLabel: "Supervisão e responsabilidade profissional",
    techLimit:
      "Decisões, análises finais, recomendações e negociações permanecem sob responsabilidade humana. Nenhuma decisão de crédito, precificação ou recomendação é produzida por sistema automatizado. A tecnologia organiza a informação sobre a qual a análise sênior se exerce.",
    techPillar:
      "A Blackhill mantém, em pilar institucional distinto, participações estratégicas em plataformas de tecnologia de crédito. Essa frente é de investimento e permanece separada dos mandatos de advisory.",
  },

  en: {
    heroEyebrow: "Independent Distressed Credit & Special Situations Advisor",
    title: "Senior conduct, from diagnosis to closing.",
    lede:
      "This page describes how Blackhill runs a mandate: who is accountable for it, how the technical structure is assembled, what each phase delivers, and where the line sits between the professional's work and the role of technology.",

    seniorEyebrow: "Senior-led",
    seniorTitle: "The professional who assesses your transaction is the one who executes it.",
    seniorLede:
      "There is no intermediate layer between analysis and execution. The initial technical reading, the negotiation with the counterparty and the follow-through to closing are conducted by the senior professional responsible for the mandate — accountable directly for what was assessed.",
    seniorPoints: [
      {
        label: "Direct access to the person responsible",
        detail:
          "Neither first contact nor the mandate itself passes through screening layers. Whoever answers is whoever decides.",
      },
      {
        label: "Continuity of judgement",
        detail:
          "Whoever analysed the asset is the one who negotiates — removing the loss of context between diligence and desk.",
      },
      {
        label: "Named accountability",
        detail:
          "Every mandate has an identified principal, not a diffuse team across which accountability dissolves.",
      },
    ],

    structureEyebrow: "Structure per mandate",
    structureTitle: "Execution capacity is not measured in headcount.",
    structureBody: [
      "Complex credit transactions do not require a standing bench of analysts: they require the right competence applied at the right moment. As each mandate requires, Blackhill engages specialist professionals and defines the technical scope of every such intervention.",
      "What is never delegated is the analysis. The technical thesis of the transaction, the reading of risk and the conduct of the negotiation remain Blackhill's direct responsibility, and Blackhill is accountable for the technical conclusion presented to the client.",
      "The structure is assembled for the asset. That is what allows every mandate to receive undivided senior attention, with no screening layer and no dilution of accountability.",
    ],

    methodEyebrow: "Method of execution",
    methodTitle: "Four phases, each with a defined deliverable.",
    methodLede:
      "Every mandate follows the same four phases, and each phase ends in something verifiable. That is the difference between advisory and brokerage: the client receives a technical conclusion, not merely an introduction to the market.",
    deliverableLabel: "Deliverable",
    methodClose:
      "The principal responsible for the mandate is the same at every phase. What changes is the set of specialists engaged.",
    methodCaveat:
      "The method describes how Blackhill conducts a mandate. It is not a promise of timing, closing, credit approval or outcome — every transaction depends on market conditions, the asset's documentation and the independent decisions of the counterparties.",

    techEyebrow: "Technology applied",
    techTitle: "Technology and artificial intelligence as support — never as the decision-maker.",
    techBody: [
      "Stratifying a non-performing portfolio by vintage, aging and collateral, projecting recovery curves across multiple scenarios, verifying chains of title and restating values under different indices are processing tasks. Blackhill uses advanced analytical tools and artificial intelligence to carry them out.",
      "The gain is not only speed: it is allocation. Handling processing with proper tooling is what allows senior time to be spent where it cannot be replaced — reading risk, structuring and negotiating.",
    ],
    techLimitLabel: "Professional supervision and responsibility",
    techLimit:
      "Decisions, final analyses, recommendations and negotiations remain under human responsibility. No credit decision, pricing or recommendation is produced by an automated system. Technology organises the information on which senior analysis is exercised.",
    techPillar:
      "Blackhill holds, as a distinct institutional pillar, strategic interests in credit technology platforms. That front is an investment activity and remains separate from advisory mandates.",
  },
};
