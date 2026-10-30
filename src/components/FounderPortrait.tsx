import Image from "next/image";

import { COMPANY } from "@/content/site";

/**
 * Portrait frame for the founding partner, specified by the approved website
 * architecture ("foto, nome, cargo, trajetória — card destacado").
 *
 * Until a professional photograph is supplied, it renders a typographic
 * fallback: the monogram over navy inside the same frame, so the page reads as
 * finished rather than as a missing image. Setting `COMPANY.founder.photo`
 * swaps in the photograph and nothing else changes.
 */
export default function FounderPortrait({ caption }: { caption: string }) {
  const { photo, initials, name } = COMPANY.founder;

  /**
   * Without a photograph the monogram does not earn a full 4:5 frame on a
   * phone — it would push the founder's name below the fold for two letters.
   * In that state the frame collapses to a compact badge beside the caption
   * and only opens into the editorial format from `md` up. The moment
   * `COMPANY.founder.photo` is set, the full framing returns at every width.
   */
  const frame = photo
    ? "relative aspect-[4/5] w-full"
    : "relative h-20 w-20 shrink-0 md:h-auto md:w-full md:aspect-[4/5]";

  return (
    <figure
      className={
        photo
          ? "w-full max-w-[19rem]"
          : "flex w-full max-w-[19rem] items-center gap-5 md:block"
      }
    >
      <div className={`${frame} surface-navy-2 overflow-hidden border border-rule`}>
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(min-width: 1024px) 19rem, 60vw"
            className="object-cover object-top"
            priority={false}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 0%, rgb(22 48 79 / 0.95) 0%, rgb(18 42 73 / 1) 70%)",
            }}
          >
            <span
              aria-hidden="true"
              className="text-[1.375rem] font-bold tracking-[0.12em] text-gold/80 md:text-[3.25rem]"
            >
              {initials}
            </span>
          </div>
        )}

        {/* Hairline inset, so the frame reads as deliberate in both states. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-1.5 border border-rule-strong md:inset-3"
        />
      </div>

      <figcaption className={photo ? "t-caveat mt-4" : "t-caveat md:mt-4"}>
        {caption}
      </figcaption>
    </figure>
  );
}
