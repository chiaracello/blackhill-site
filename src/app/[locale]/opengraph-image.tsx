import { ImageResponse } from "next/og";

import { BRAND } from "@/content/site";
import { isLocale } from "@/lib/i18n";

/**
 * Share card. Navy ground, a single gold rule, the mark and the tagline —
 * the same restraint as the site, within the Standard's palette.
 *
 * Satori (which renders this) supports flexbox only, so every container that
 * holds more than one child declares `display: flex` explicitly.
 */

export const alt = "Blackhill Capital — Financial Advisory & Strategic Technology Investments";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#0D1B2E";
const NAVY_3 = "#1E3047";
const GOLD = "#C9A84C";
const WHITE = "#FFFFFF";
const LIGHT_BLUE = "#B0C4DE";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "pt";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(135deg, ${NAVY_3} 0%, ${NAVY} 55%)`,
          padding: "72px 80px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="58" height="48" viewBox="0 0 34 28" fill="none">
            <path d="M1 25.5 10.5 7.5 20 25.5" stroke={WHITE} strokeWidth="1.5" opacity="0.85" />
            <path d="M14 25.5 23.5 7.5 33 25.5" stroke={GOLD} strokeWidth="1.5" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ color: WHITE, fontSize: 34, fontWeight: 700, letterSpacing: 4 }}
            >
              BLACKHILL
            </span>
            <span
              style={{ color: GOLD, fontSize: 15, fontWeight: 700, letterSpacing: 13 }}
            >
              CAPITAL
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 72, height: 3, background: GOLD }} />
          <span
            style={{
              color: WHITE,
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: -2.5,
              lineHeight: 1.05,
              marginTop: 34,
              maxWidth: 940,
            }}
          >
            {BRAND.tagline[locale]}
          </span>
        </div>

        {/* Descriptor */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid rgba(255,255,255,0.14)`,
            paddingTop: 28,
          }}
        >
          <span
            style={{ color: LIGHT_BLUE, fontSize: 19, fontWeight: 700, letterSpacing: 2.6 }}
          >
            FINANCIAL ADVISORY & STRATEGIC TECHNOLOGY INVESTMENTS
          </span>
          <span style={{ color: GOLD, fontSize: 19, fontWeight: 700, letterSpacing: 2.6 }}>
            BLACKHILL.COM.BR
          </span>
        </div>
      </div>
    ),
    size,
  );
}
