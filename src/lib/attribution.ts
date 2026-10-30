/**
 * Origin of a contact, captured first-party.
 *
 * This is NOT analytics and NOT tracking. There is no cookie, no pixel, no
 * third party and no network request. The campaign parameters already present
 * in the URL the visitor arrived on are held in `sessionStorage` — which lives
 * in that browser tab alone and is discarded when the tab closes — and are read
 * back only if, and when, the visitor chooses to submit the contact form.
 *
 * A visitor who never submits leaves no record anywhere.
 *
 * The referrer is reduced to its host: enough to tell LinkedIn from Google,
 * without carrying the page someone was reading before.
 */

const KEY = "bh.origin";

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  /** Path of the page the visitor arrived on, without query or hash. */
  landing: string;
  /** Host only — never the full referring URL. */
  referrer: string;
};

export const EMPTY: Attribution = {
  source: "",
  medium: "",
  campaign: "",
  content: "",
  term: "",
  landing: "",
  referrer: "",
};

function clean(value: string | null, max = 120): string {
  if (!value) return "";
  // Campaign values are free text in the URL: keep them inert and bounded.
  return value.replace(/[^\w .\-/+:%]/g, "").trim().slice(0, max);
}

function referrerHost(): string {
  try {
    if (!document.referrer) return "";
    const url = new URL(document.referrer);
    // Same-site navigation is not an origin.
    if (url.host === window.location.host) return "";
    return clean(url.host, 100);
  } catch {
    return "";
  }
}

/**
 * Records the origin once per tab, on the first page the visitor lands on.
 * Later pages must not overwrite it — the entry point is what identifies the
 * campaign.
 */
export function captureOrigin(): void {
  try {
    if (sessionStorage.getItem(KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const referrer = referrerHost();
    const hasCampaign = UTM_KEYS.some((key) => params.get(key));

    // Nothing to attribute: no campaign parameters and no external referrer.
    if (!hasCampaign && !referrer) return;

    const origin: Attribution = {
      source: clean(params.get("utm_source")),
      medium: clean(params.get("utm_medium")),
      campaign: clean(params.get("utm_campaign")),
      content: clean(params.get("utm_content")),
      term: clean(params.get("utm_term")),
      landing: clean(window.location.pathname, 160),
      referrer,
    };

    sessionStorage.setItem(KEY, JSON.stringify(origin));
  } catch {
    // Private mode, blocked storage, or anything else: attribution is optional.
  }
}

export function readOrigin(): Attribution {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Attribution>;
    return {
      source: clean(parsed.source ?? ""),
      medium: clean(parsed.medium ?? ""),
      campaign: clean(parsed.campaign ?? ""),
      content: clean(parsed.content ?? ""),
      term: clean(parsed.term ?? ""),
      landing: clean(parsed.landing ?? "", 160),
      referrer: clean(parsed.referrer ?? "", 100),
    };
  } catch {
    return EMPTY;
  }
}

/**
 * Stable snapshot for `useSyncExternalStore`: React compares the reference, so
 * the parsed object is memoised and only rebuilt when the stored value changes.
 */
let snapshotRaw: string | null = null;
let snapshot: Attribution = EMPTY;

export function getOriginSnapshot(): Attribution {
  let raw: string | null = null;
  try {
    raw = sessionStorage.getItem(KEY);
  } catch {
    raw = null;
  }
  if (raw !== snapshotRaw) {
    snapshotRaw = raw;
    snapshot = readOrigin();
  }
  return snapshot;
}

/** The origin is written once per tab and never changes while the page lives. */
export function subscribeOrigin(): () => void {
  return () => {};
}

export const serverSnapshot = (): Attribution => EMPTY;

/** Called after a successful submission, so one origin is reported once. */
export function clearOrigin(): void {
  try {
    sessionStorage.removeItem(KEY);
    snapshotRaw = null;
    snapshot = EMPTY;
  } catch {
    /* nothing to clear */
  }
}
