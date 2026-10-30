/**
 * Wordmark plus an optional geometric mark.
 *
 * The mark is two overlapping outlined peaks: the name itself, and the
 * "intersection" reading the Posicionamento Institucional 2026–2031 recommended
 * exploring in the design phase (item 1 of Fase 6) — deliberately avoiding
 * literal legal metaphors such as scales or gavels, which would pull the brand
 * toward a law firm. It is a proposal pending brand sign-off; removing it means
 * passing `mark={false}` here and nothing else changes.
 */

type LogoProps = {
  /** `light` = on navy (default). `dark` = on a light surface. */
  variant?: "light" | "dark";
  withTagline?: boolean;
  tagline?: string;
  mark?: boolean;
  className?: string;
};

export default function Logo({
  variant = "light",
  withTagline = false,
  tagline,
  mark = true,
  className = "",
}: LogoProps) {
  const primary = variant === "light" ? "text-white" : "text-navy";
  // Gold is only ever used over navy (Standard §5). On a light surface the
  // secondary line falls back to navy.
  const secondary = variant === "light" ? "text-gold" : "text-navy";
  const taglineTone = variant === "light" ? "text-muted-blue" : "text-navy";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {mark ? (
        <svg
          width="30"
          height="25"
          viewBox="0 0 34 28"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M1 25.5 10.5 7.5 20 25.5"
            stroke="currentColor"
            strokeWidth="1.4"
            className={primary}
            opacity="0.85"
          />
          <path
            d="M14 25.5 23.5 7.5 33 25.5"
            stroke="currentColor"
            strokeWidth="1.4"
            className={secondary}
          />
        </svg>
      ) : null}

      <span className="inline-flex flex-col leading-none">
        <span
          className={`text-[1.0625rem] font-bold tracking-[0.1em] md:text-lg ${primary}`}
        >
          BLACKHILL
        </span>
        <span
          className={`mt-[0.3rem] text-[0.5rem] font-bold tracking-[0.42em] md:text-[0.5625rem] ${secondary}`}
        >
          CAPITAL
        </span>
        {withTagline && tagline ? (
          <span className={`mt-3 text-xs italic ${taglineTone}`}>{tagline}</span>
        ) : null}
      </span>
    </span>
  );
}
