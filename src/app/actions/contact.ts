"use server";

import { isLocale, type Locale } from "@/lib/i18n";
import { COMPANY, natureByValue } from "@/content/site";

/**
 * Contact delivery.
 *
 * The form this replaces reported success without transmitting anything, so the
 * one rule here is absolute: `ok` is returned only after the delivery provider
 * has accepted the message. Any other outcome returns an error telling the
 * visitor the message was NOT recorded, and points them at the direct channel.
 */

export type ContactState =
  | { status: "idle" }
  | { status: "ok" }
  | {
      status: "error";
      code: ContactErrorCode;
      field?: ContactField;
      /** Echoed back so a failed submission never costs the visitor their text. */
      values?: ContactValues;
    };

export type ContactValues = {
  name: string;
  institution: string;
  email: string;
  nature: string;
  message: string;
};

export type ContactErrorCode =
  | "name"
  | "email"
  | "nature"
  | "message"
  | "consent"
  | "unavailable"
  | "generic";

export type ContactField = "name" | "email" | "nature" | "message" | "consent";

const LIMITS = {
  name: 120,
  institution: 160,
  email: 180,
  nature: 40,
  message: 4000,
} as const;

/** Deliberately permissive: the goal is to catch typos, not to police addresses. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function field(data: FormData, key: string, max: number): string {
  const raw = data.get(key);
  return typeof raw === "string" ? raw.trim().slice(0, max) : "";
}

/** Keeps submitted text inert in the HTML body of the notification email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strips CR/LF so submitted text can never inject an email header. */
function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function submitContact(
  _previous: ContactState,
  data: FormData,
): Promise<ContactState> {
  // Honeypot: a real visitor never sees or fills this field.
  if (field(data, "bh_ref", 200) !== "") return { status: "ok" };

  const localeRaw = field(data, "locale", 8);
  const locale: Locale = isLocale(localeRaw) ? localeRaw : "pt";

  const name = field(data, "name", LIMITS.name);
  const institution = field(data, "institution", LIMITS.institution);
  const email = field(data, "email", LIMITS.email);
  const nature = field(data, "nature", LIMITS.nature);
  const message = field(data, "message", LIMITS.message);
  const consent = data.get("consent") === "on";

  // Campaign origin, carried by the form. Never a decision input — only
  // context appended to the notification so a lead can be attributed.
  const origin: [string, string][] = [
    ["Origem", field(data, "origin_source", 120)],
    ["Meio", field(data, "origin_medium", 120)],
    ["Campanha", field(data, "origin_campaign", 120)],
    ["Conteúdo", field(data, "origin_content", 120)],
    ["Termo", field(data, "origin_term", 120)],
    ["Página de entrada", field(data, "origin_landing", 160)],
    ["Referenciador", field(data, "origin_referrer", 100)],
  ].filter(([, value]) => value !== "") as [string, string][];

  const values: ContactValues = { name, institution, email, nature, message };
  const fail = (code: ContactErrorCode, field?: ContactField): ContactState => ({
    status: "error",
    code,
    field,
    values,
  });

  // The subject must be one of the published options, not free text.
  const selected = natureByValue(nature);

  if (name.length < 2) return fail("name", "name");
  if (!EMAIL.test(email)) return fail("email", "email");
  if (!selected) return fail("nature", "nature");
  if (message.length < 20) return fail("message", "message");
  if (!consent) return fail("consent", "consent");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? COMPANY.founder.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Without a configured transport the message cannot be delivered. Say so —
  // never swallow it behind a confirmation.
  if (!apiKey || !from) {
    console.error(
      "[contact] Delivery not configured: RESEND_API_KEY and/or CONTACT_FROM_EMAIL are unset. Message was not sent.",
    );
    return fail("unavailable");
  }

  const natureLabel = selected.label[locale];

  const subject = headerSafe(
    `[Website] ${selected.label.pt} — ${name}${institution ? ` · ${institution}` : ""}`,
  );

  const rows: [string, string][] = [
    ["Nome", name],
    ["Instituição", institution || "—"],
    ["E-mail", email],
    ["Natureza", `${selected.label.pt}${locale === "en" ? ` (${natureLabel})` : ""}`],
    ["Idioma", locale === "pt" ? "Português" : "Inglês"],
  ];

  const html = `<div style="font-family:Aptos,Calibri,Helvetica,Arial,sans-serif;font-size:14px;color:#23262B;line-height:1.6">
<p style="margin:0 0 16px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#7B93B5"><strong>Blackhill Capital — formulário do website</strong></p>
<table style="border-collapse:collapse;margin-bottom:20px">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="padding:4px 16px 4px 0;color:#7B93B5;vertical-align:top">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(value)}</strong></td></tr>`,
  )
  .join("")}
</table>
<p style="margin:0 0 6px;color:#7B93B5">Descrição</p>
<p style="margin:0 0 24px;white-space:pre-wrap">${escapeHtml(message)}</p>
${
  origin.length > 0
    ? `<p style="margin:0 0 8px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#7B93B5">Origem do contato</p>
<table style="border-collapse:collapse;font-size:13px">
${origin
  .map(
    ([label, value]) =>
      `<tr><td style="padding:3px 16px 3px 0;color:#7B93B5">${label}</td><td style="padding:3px 0">${escapeHtml(value)}</td></tr>`,
  )
  .join("")}
</table>`
    : ""
}
</div>`;

  const text = [
    "Blackhill Capital — formulário do website",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Descrição:",
    message,
    ...(origin.length > 0
      ? ["", "Origem do contato:", ...origin.map(([label, value]) => `${label}: ${value}`)]
      : []),
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        html,
        text,
      }),
      // Fail fast rather than leaving the visitor waiting on a hung request.
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error(
        `[contact] Provider rejected the message (HTTP ${response.status}). Message was not sent.`,
      );
      return fail("generic");
    }

    return { status: "ok" };
  } catch (error) {
    console.error("[contact] Delivery failed. Message was not sent.", error);
    return fail("generic");
  }
}
