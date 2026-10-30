import type { Localized } from "./site";

/**
 * Privacy notice. Describes what this site actually does — a contact form and
 * nothing else. There is no analytics, no tag manager, no advertising pixel and
 * no non-essential cookie anywhere in this codebase; if any is ever added, this
 * page and the cookie section must be updated in the same change.
 */
export const PRIVACY: Localized<{
  title: string;
  updated: string;
  lede: string;
  sections: { title: string; body: string[] }[];
}> = {
  pt: {
    title: "Política de Privacidade e Tratamento de Dados",
    updated: "Última atualização: outubro de 2026",
    lede:
      "Esta política descreve como a Blackhill Capital trata dados pessoais coletados por meio deste website, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).",
    sections: [
      {
        title: "1. Controlador dos dados",
        body: [
          "O controlador dos dados pessoais tratados por meio deste website é a Blackhill Capital Ltda., inscrita no CNPJ sob o nº 49.400.092/0001-96, com sede na Alameda Rio Negro, 1030, Torre Corporate, Escritório 206, Alphaville, Barueri — SP, CEP 06454-000.",
          "Contato para assuntos de proteção de dados: mchiara@blackhillcapital.com.br.",
        ],
      },
      {
        title: "2. Dados coletados",
        body: [
          "Este website coleta exclusivamente os dados que você informa voluntariamente no formulário de contato: nome, empresa ou instituição, endereço de e-mail profissional, natureza da oportunidade e a descrição que você escreve.",
          "Junto com o formulário é enviada também a origem do contato: os parâmetros de campanha presentes no endereço pelo qual você chegou (utm_source, utm_medium, utm_campaign, utm_content e utm_term), a página de entrada e o domínio de onde você veio — apenas o domínio, nunca o endereço completo da página anterior.",
          "Não há cadastro de usuários, não há área autenticada e não há coleta de dados por outros meios neste website.",
        ],
      },
      {
        title: "3. Finalidade e base legal",
        body: [
          "Os dados informados são tratados com a finalidade exclusiva de analisar e responder ao seu contato. A origem do contato é utilizada apenas para entender por qual caminho você chegou até a Blackhill, e não influencia a análise nem gera qualquer classificação sobre você.",
          "A base legal é o consentimento do titular, manifestado de forma expressa no envio do formulário (art. 7º, I, da LGPD). Quando o contato evolui para uma relação contratual ou pré-contratual, o tratamento passa a fundamentar-se na execução de contrato ou de procedimentos preliminares (art. 7º, V).",
        ],
      },
      {
        title: "4. Cookies e tecnologias de rastreamento",
        body: [
          "Este website não utiliza cookies, não emprega ferramentas de analytics de terceiros, não instala pixels de rastreamento e não realiza perfilamento de visitantes. Nenhum dado é compartilhado com plataformas de publicidade.",
          "A origem do contato descrita no item 2 fica guardada exclusivamente no armazenamento de sessão do seu próprio navegador (sessionStorage), que pertence apenas àquela aba e é descartado quando você a fecha. Não é cookie, não é lido por terceiros e não sai do seu navegador.",
          "Essa informação só é transmitida à Blackhill Capital se, e quando, você decidir enviar o formulário. Se você navegar pelo site e não enviar nada, nenhum registro é criado em lugar algum.",
          "Por não haver cookies nem rastreamento, não é exibido banner de consentimento de cookies — não há consentimento a ser coletado para essa finalidade.",
        ],
      },
      {
        title: "5. Compartilhamento",
        body: [
          "Os dados informados no formulário não são comercializados, não são cedidos a terceiros para finalidades próprias destes e não alimentam listas de marketing.",
          "O conteúdo do formulário é transmitido por um provedor de envio de e-mail, que atua como operador e processa os dados exclusivamente sob instrução da Blackhill Capital, para viabilizar a entrega da mensagem.",
          "Dados poderão ser compartilhados quando houver obrigação legal, regulatória ou determinação de autoridade competente.",
        ],
      },
      {
        title: "6. Retenção",
        body: [
          "As mensagens recebidas são mantidas pelo prazo necessário ao atendimento do contato e, quando aplicável, pelo prazo exigido por obrigação legal ou regulatória.",
          "Mensagens sem desdobramento são eliminadas quando deixam de ser necessárias à finalidade que justificou a coleta.",
        ],
      },
      {
        title: "7. Segurança",
        body: [
          "O tráfego deste website é integralmente servido sob HTTPS, com política de transporte estrito (HSTS).",
          "O acesso às mensagens recebidas é restrito às pessoas que necessitam delas para responder ao contato.",
        ],
      },
      {
        title: "8. Direitos do titular",
        body: [
          "Você pode solicitar, a qualquer momento: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade; portabilidade; informação sobre compartilhamento; informação sobre a possibilidade de não consentir e suas consequências; e revogação do consentimento.",
          "As solicitações devem ser enviadas a mchiara@blackhillcapital.com.br e são respondidas nos prazos previstos na LGPD.",
        ],
      },
      {
        title: "9. Informações confidenciais",
        body: [
          "O formulário de contato deste website não é canal apropriado para envio de documentos de operações, dados de carteiras, informações sobre devedores ou qualquer informação sujeita a sigilo contratual.",
          "Operações e informações confidenciais são tratadas exclusivamente após a formalização de acordo de confidencialidade, por canais apropriados.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy and Data Processing Policy",
    updated: "Last updated: October 2026",
    lede:
      "This policy describes how Blackhill Capital processes personal data collected through this website, in accordance with Brazil's General Data Protection Law (Law 13.709/2018).",
    sections: [
      {
        title: "1. Data controller",
        body: [
          "The controller of personal data processed through this website is Blackhill Capital Ltda., registered under CNPJ 49.400.092/0001-96, with its registered office at Alameda Rio Negro, 1030, Torre Corporate, Office 206, Alphaville, Barueri — SP, 06454-000, Brazil.",
          "Contact for data protection matters: mchiara@blackhillcapital.com.br.",
        ],
      },
      {
        title: "2. Data collected",
        body: [
          "This website collects only the data you voluntarily provide in the contact form: name, company or institution, professional email address, nature of the opportunity and the description you write.",
          "Submitted alongside the form is the origin of your enquiry: the campaign parameters present in the address you arrived through (utm_source, utm_medium, utm_campaign, utm_content and utm_term), the landing page, and the domain you came from — the domain only, never the full address of the previous page.",
          "There is no user registration, no authenticated area and no collection of data by any other means on this website.",
        ],
      },
      {
        title: "3. Purpose and legal basis",
        body: [
          "The data provided is processed for the sole purpose of reviewing and responding to your enquiry. The origin of the enquiry is used only to understand which path brought you to Blackhill; it does not influence the analysis and generates no classification about you.",
          "The legal basis is the data subject's consent, given expressly on submission of the form (LGPD art. 7, I). Where contact develops into a contractual or pre-contractual relationship, processing is then based on performance of a contract or preliminary procedures (art. 7, V).",
        ],
      },
      {
        title: "4. Cookies and tracking technologies",
        body: [
          "This website uses no cookies, employs no third-party analytics tools, installs no tracking pixels and performs no visitor profiling. No data is shared with advertising platforms.",
          "The enquiry origin described in item 2 is held solely in your own browser's session storage, which belongs to that tab alone and is discarded when you close it. It is not a cookie, it is not read by any third party and it does not leave your browser.",
          "That information is transmitted to Blackhill Capital only if, and when, you choose to submit the form. If you browse the site and submit nothing, no record is created anywhere.",
          "As there are no cookies and no tracking, no cookie consent banner is displayed — there is no consent to collect for that purpose.",
        ],
      },
      {
        title: "5. Sharing",
        body: [
          "Data provided in the form is not sold, is not transferred to third parties for their own purposes and does not feed marketing lists.",
          "Form content is transmitted through an email delivery provider acting as a processor, which handles the data exclusively on Blackhill Capital's instruction in order to deliver the message.",
          "Data may be shared where required by legal or regulatory obligation or by order of a competent authority.",
        ],
      },
      {
        title: "6. Retention",
        body: [
          "Messages received are retained for as long as necessary to handle the enquiry and, where applicable, for the period required by legal or regulatory obligation.",
          "Messages with no follow-up are deleted once they are no longer necessary for the purpose that justified collection.",
        ],
      },
      {
        title: "7. Security",
        body: [
          "All traffic to this website is served over HTTPS, with a strict transport security policy (HSTS).",
          "Access to messages received is restricted to those who need them in order to respond.",
        ],
      },
      {
        title: "8. Data subject rights",
        body: [
          "You may request at any time: confirmation that processing exists; access to your data; correction of incomplete, inaccurate or outdated data; anonymisation, blocking or deletion of unnecessary data or data processed unlawfully; portability; information on sharing; information on the option to withhold consent and its consequences; and withdrawal of consent.",
          "Requests should be sent to mchiara@blackhillcapital.com.br and are answered within the periods set by the LGPD.",
        ],
      },
      {
        title: "9. Confidential information",
        body: [
          "The contact form on this website is not an appropriate channel for transaction documents, portfolio data, debtor information or any information subject to contractual confidentiality.",
          "Confidential transactions and information are handled only after a confidentiality agreement is in place, through appropriate channels.",
        ],
      },
    ],
  },
};

export const COMPLIANCE: Localized<{
  title: string;
  lede: string;
  sections: { title: string; body: string[] }[];
}> = {
  pt: {
    title: "Compliance, Disclaimer e Natureza deste Website",
    lede:
      "Esta página reúne, em um único lugar, as declarações que governam a leitura de todo o conteúdo publicado neste website e de todo material institucional da Blackhill Capital.",
    sections: [
      {
        title: "Declaração de compliance",
        body: [
          "Este material não constitui: (i) oferta pública de valores mobiliários; (ii) parecer jurídico; (iii) recomendação de investimento; (iv) promessa de rentabilidade; nem (v) garantia de qualquer natureza. A decisão de investimento cabe exclusivamente ao investidor, com base em suas próprias análises e due diligence independente.",
        ],
      },
      {
        title: "Papel da Blackhill Capital",
        body: [
          "A Blackhill Capital atua como advisor, estruturador, intermediário e originador em operações de crédito complexo. Não é gestora regulada de capital de terceiros, não administra fundos de investimento e não distribui valores mobiliários.",
          "A Blackhill Capital não investe capital próprio nas operações de crédito que assessora e não é parte compradora ou vendedora nas transações em que atua como advisor.",
        ],
      },
      {
        title: "Investimentos em tecnologia",
        body: [
          "A Blackhill Capital mantém participações estratégicas em plataformas de tecnologia. Essas participações são estruturalmente distintas da atividade de advisory e não guardam relação com as operações de crédito assessoradas.",
          "A apresentação institucional dessas plataformas neste website não constitui oferta de produto, serviço, valor mobiliário ou participação societária. Percentuais de participação e estruturas de controle não são divulgados.",
        ],
      },
      {
        title: "Dados de mercado",
        body: [
          "Os dados de mercado publicados neste website são de natureza setorial, provenientes de fontes públicas identificadas, com data-base de consolidação indicada.",
          "Esses dados não representam operações, pipeline, ativos sob assessoria ou track record da Blackhill Capital. Pipeline e histórico de operações da firma não são divulgados publicamente.",
        ],
      },
      {
        title: "Ausência de projeções",
        body: [
          "Nenhum conteúdo deste website declara taxa interna de retorno, retorno esperado, rentabilidade-alvo, múltiplo de capital ou qualquer métrica de rentabilidade projetada.",
          "Referências a perfil de retorno limitam-se à descrição qualitativa de prêmio de complexidade e de iliquidez, sempre sujeita à due diligence independente do investidor.",
        ],
      },
      {
        title: "Limites de atuação jurídica",
        body: [
          "A Blackhill Capital não emite pareceres jurídicos e não presta serviços de advocacia. Pareceres sobre mérito, cessibilidade e exigibilidade de créditos judiciais são elaborados por assessores jurídicos independentes.",
          "A existência de precatório ou de decisão judicial favorável não constitui garantia automática de pagamento por ente público.",
        ],
      },
      {
        title: "Confidencialidade",
        body: [
          "A Blackhill Capital não divulga nomes de cedentes, devedores, investidores ou contrapartes, nem informações sobre operações específicas, sem autorização formal.",
          "Informação confidencial não é compartilhada entre cedentes e investidores sem autorização expressa das partes envolvidas.",
        ],
      },
    ],
  },
  en: {
    title: "Compliance, Disclaimer and Nature of this Website",
    lede:
      "This page brings together, in one place, the declarations that govern how all content published on this website and all Blackhill Capital institutional material should be read.",
    sections: [
      {
        title: "Compliance declaration",
        body: [
          "This material does not constitute: (i) a public offering of securities; (ii) a legal opinion; (iii) an investment recommendation; (iv) a promise of returns; nor (v) a guarantee of any nature. Investment decisions rest exclusively with the investor, based on their own analysis and independent due diligence.",
        ],
      },
      {
        title: "Blackhill Capital's role",
        body: [
          "Blackhill Capital acts as advisor, structurer, intermediary and originator in complex credit transactions. It is not a regulated manager of third-party capital, does not administer investment funds and does not distribute securities.",
          "Blackhill Capital does not invest its own capital in the credit transactions it advises on and is not a buying or selling party in transactions where it acts as advisor.",
        ],
      },
      {
        title: "Technology investments",
        body: [
          "Blackhill Capital holds strategic interests in technology platforms. These interests are structurally distinct from the advisory practice and bear no relation to the credit transactions advised on.",
          "The institutional presentation of these platforms on this website does not constitute an offer of any product, service, security or equity interest. Ownership percentages and control structures are not disclosed.",
        ],
      },
      {
        title: "Market data",
        body: [
          "Market data published on this website is sector-level, drawn from identified public sources, with the consolidation reference date stated.",
          "This data does not represent transactions, pipeline, assets under advisory or the track record of Blackhill Capital. The firm's pipeline and transaction history are not publicly disclosed.",
        ],
      },
      {
        title: "Absence of projections",
        body: [
          "No content on this website states an internal rate of return, expected return, target profitability, capital multiple or any projected profitability metric.",
          "References to return profile are limited to qualitative description of complexity and illiquidity premia, always subject to the investor's independent due diligence.",
        ],
      },
      {
        title: "Limits of legal scope",
        body: [
          "Blackhill Capital does not issue legal opinions and does not provide legal services. Opinions on merits, assignability and enforceability of judicial claims are prepared by independent legal advisers.",
          "The existence of a court-ordered claim or a favourable judicial decision does not constitute an automatic guarantee of payment by a public entity.",
        ],
      },
      {
        title: "Confidentiality",
        body: [
          "Blackhill Capital does not disclose the names of sellers, debtors, investors or counterparties, nor information on specific transactions, without formal authorisation.",
          "Confidential information is not shared between sellers and investors without the express authorisation of the parties involved.",
        ],
      },
    ],
  },
};
