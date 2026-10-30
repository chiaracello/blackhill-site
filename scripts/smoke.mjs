#!/usr/bin/env node
/**
 * End-to-end smoke test against a real `next start` server.
 *
 * Zero dependencies on purpose: it must be runnable in CI without installing a
 * browser. It checks what actually broke on the previous site — metadata,
 * canonical/hreflang, redirects, headers — plus every internal link.
 *
 * Usage: node scripts/smoke.mjs [baseUrl]
 *        (with no argument it boots `next start` on port 3399 itself)
 */

import { spawn } from "node:child_process";
import { once } from "node:events";

const PORT = Number(process.env.SMOKE_PORT ?? 3399);
const EXTERNAL = process.argv[2];
const BASE = EXTERNAL ?? `http://127.0.0.1:${PORT}`;

const LOCALES = ["pt", "en"];
const PATHS = [
  "/",
  "/about",
  "/advisory",
  "/advisory/precatorios",
  "/advisory/npl-distressed",
  "/advisory/claims",
  "/advisory/structured-credit",
  "/advisory/public-receivables",
  "/advisory/restructuring",
  "/advisory/servicing",
  "/ecosystem",
  "/market",
  "/investors",
  "/companies",
  "/insights",
  "/insights/precatorios",
  "/insights/npl",
  "/insights/divida-ativa",
  "/insights/judicial-claims",
  "/insights/distressed-credit",
  "/contact",
  "/privacy",
  "/compliance",
];

const LEGACY = [
  ["/why-blackhill", "/about"],
  ["/practice-areas", "/advisory"],
  ["/practice-areas/precatorios", "/advisory/precatorios"],
  ["/practice-areas/npl", "/advisory/npl-distressed"],
  ["/origination-access", "/market"],
  ["/pt", "/"],
  ["/pt/advisory", "/advisory"],
];

const REQUIRED_HEADERS = [
  "x-content-type-options",
  "x-frame-options",
  "referrer-policy",
  "strict-transport-security",
  "permissions-policy",
];

let passed = 0;
const failures = [];

function check(name, condition, detail = "") {
  if (condition) {
    passed += 1;
  } else {
    failures.push(`${name}${detail ? ` — ${detail}` : ""}`);
  }
}

function localeUrl(locale, path) {
  const clean = path === "/" ? "" : path;
  return locale === "pt" ? clean || "/" : `/${locale}${clean}`;
}

const one = (html, re) => {
  const matches = html.match(re);
  return matches ? matches.length : 0;
};

async function waitForServer(url, timeoutMs = 90_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.status > 0) return;
    } catch {
      /* not up yet */
    }
    await new Promise((resolve) => setTimeout(resolve, 400));
  }
  throw new Error(`Server did not become ready at ${url}`);
}

async function checkPage(locale, path) {
  const url = localeUrl(locale, path);
  const label = `${locale.toUpperCase()} ${url}`;
  const res = await fetch(`${BASE}${url}`, { redirect: "manual" });

  check(`${label} status 200`, res.status === 200, `got ${res.status}`);
  if (res.status !== 200) return { url, links: [] };

  for (const header of REQUIRED_HEADERS) {
    check(`${label} header ${header}`, res.headers.has(header));
  }

  const html = await res.text();

  const expectedLang = locale === "pt" ? "pt-BR" : "en";
  check(`${label} html lang=${expectedLang}`, html.includes(`lang="${expectedLang}"`));

  const title = html.match(/<title[^>]*>([^<]+)<\/title>/)?.[1] ?? "";
  check(`${label} has title`, title.trim().length > 10, `"${title}"`);
  check(`${label} title mentions Blackhill`, title.includes("Blackhill"), `"${title}"`);

  const description =
    html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  check(`${label} has description`, description.trim().length > 50);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "";
  // Next normalises the root path away, so compare without a trailing slash.
  const trim = (value) => value.replace(/\/$/, "");
  check(
    `${label} canonical`,
    trim(canonical) === trim(`https://blackhill.com.br${url}`),
    `got "${canonical}"`,
  );

  for (const tag of ["pt-BR", "en", "x-default"]) {
    check(
      `${label} hreflang ${tag}`,
      new RegExp(`hrefLang="${tag}"|hreflang="${tag}"`).test(html),
    );
  }

  check(`${label} exactly one h1`, one(html, /<h1[\s>]/g) === 1, `found ${one(html, /<h1[\s>]/g)}`);
  check(`${label} has og:title`, /property="og:title"/.test(html));
  check(`${label} has og:image`, /property="og:image"/.test(html));
  check(`${label} no literal undefined`, !/>undefined</.test(html));
  check(`${label} no unresolved [object Object]`, !html.includes("[object Object]"));

  // Compliance: no forbidden return language anywhere in rendered output.
  const forbidden = /\b(TIR de|IRR de|retorno garantido|rentabilidade-alvo de)\b/i;
  check(`${label} no forbidden return language`, !forbidden.test(html));

  const links = [...html.matchAll(/href="(\/[^"#?]*)"/g)]
    .map((match) => match[1])
    .filter((href) => !href.startsWith("/_next"));

  return { url, links };
}

async function main() {
  let server;

  if (!EXTERNAL) {
    server = spawn("npx", ["next", "start", "--port", String(PORT)], {
      stdio: ["ignore", "pipe", "pipe"],
      env: process.env,
    });
    server.stdout.on("data", () => {});
    server.stderr.on("data", (chunk) => process.stderr.write(chunk));
    await waitForServer(`${BASE}/`);
  }

  try {
    const discovered = new Set();

    for (const locale of LOCALES) {
      for (const path of PATHS) {
        const { links } = await checkPage(locale, path);
        links.forEach((link) => discovered.add(link));
      }
    }

    // Every internal link found on any page must resolve without a 404.
    const known = new Set(LOCALES.flatMap((l) => PATHS.map((p) => localeUrl(l, p))));
    for (const link of [...discovered].sort()) {
      if (known.has(link)) continue;
      const res = await fetch(`${BASE}${link}`, { redirect: "manual" });
      check(
        `internal link ${link}`,
        res.status === 200 || res.status === 301 || res.status === 308,
        `got ${res.status}`,
      );
    }

    for (const [from, to] of LEGACY) {
      const res = await fetch(`${BASE}${from}`, { redirect: "manual" });
      check(`redirect ${from}`, res.status === 301, `got ${res.status}`);
      const location = res.headers.get("location") ?? "";
      check(`redirect ${from} → ${to}`, location.endsWith(to), `got "${location}"`);
    }

    const robots = await fetch(`${BASE}/robots.txt`);
    check("robots.txt status", robots.status === 200);
    const robotsBody = await robots.text();
    check("robots.txt declares sitemap", robotsBody.includes("sitemap.xml"));
    check("robots.txt allows crawling", /Allow: \//.test(robotsBody));

    const sitemap = await fetch(`${BASE}/sitemap.xml`);
    check("sitemap.xml status", sitemap.status === 200);
    const sitemapBody = await sitemap.text();
    for (const locale of LOCALES) {
      for (const path of PATHS) {
        const loc = `https://blackhill.com.br${localeUrl(locale, path)}`;
        check(`sitemap lists ${loc}`, sitemapBody.includes(`<loc>${loc}</loc>`));
      }
    }
    check("sitemap has hreflang alternates", sitemapBody.includes("xhtml:link"));

    // The share card must actually render, not just be referenced.
    for (const locale of LOCALES) {
      const page = await fetch(`${BASE}${localeUrl(locale, "/")}`).then((r) => r.text());
      const ogUrl = page.match(/property="og:image" content="([^"]+)"/)?.[1] ?? "";
      check(`${locale} og:image declared`, ogUrl.length > 0);
      if (ogUrl) {
        const img = await fetch(ogUrl.replace("https://blackhill.com.br", BASE));
        check(
          `${locale} og:image renders`,
          img.status === 200 && (img.headers.get("content-type") ?? "").includes("image"),
          `got ${img.status} ${img.headers.get("content-type")}`,
        );
      }
    }

    // Origination CTAs must reach the form with the subject preselected.
    for (const nature of ["npl", "structuring", "restructuring", "judicial-claims"]) {
      const res = await fetch(`${BASE}/contact?assunto=${nature}`, { redirect: "manual" });
      check(`contact?assunto=${nature}`, res.status === 200, `got ${res.status}`);
    }

    // Every advisory page must offer the qualified form, not a bare mailto.
    for (const locale of LOCALES) {
      for (const slug of ["precatorios", "npl-distressed", "restructuring"]) {
        const html = await fetch(`${BASE}${localeUrl(locale, `/advisory/${slug}`)}`).then((r) =>
          r.text(),
        );
        check(
          `${locale} /advisory/${slug} links to qualified form`,
          /href="[^"]*\/contact\?assunto=[a-z-]+"/.test(html),
        );
      }
    }

    const missing = await fetch(`${BASE}/this-route-does-not-exist`, { redirect: "manual" });
    check("unknown route 404", missing.status === 404, `got ${missing.status}`);
  } finally {
    if (server) {
      server.kill("SIGTERM");
      await once(server, "exit").catch(() => {});
    }
  }

  console.log(`\n${passed} checks passed`);
  if (failures.length > 0) {
    console.error(`${failures.length} FAILED:\n`);
    failures.forEach((failure) => console.error(`  ✗ ${failure}`));
    process.exit(1);
  }
  console.log("All smoke checks passed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
