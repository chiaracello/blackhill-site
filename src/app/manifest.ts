import type { MetadataRoute } from "next";

/**
 * Web app manifest — ícone e cor de tema quando o site é fixado na tela
 * inicial de um dispositivo móvel. Os bitmaps vivem em `public/icons/` em vez
 * das convenções de arquivo do App Router porque o manifesto precisa de URLs
 * estáveis, e as rotas geradas por convenção carregam hash de versão.
 *
 * `display: "browser"` é deliberado: este é um site institucional de leitura,
 * não um aplicativo, e esconder a barra de endereço de um site que não é
 * aplicativo prejudica a confiança em vez de aumentá-la.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Blackhill Capital",
    short_name: "Blackhill",
    description:
      "Financial Advisory & Strategic Technology Investments — advisory independente em ativos de crédito complexos no Brasil.",
    start_url: "/",
    display: "browser",
    background_color: "#0b1f3a",
    theme_color: "#0b1f3a",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
