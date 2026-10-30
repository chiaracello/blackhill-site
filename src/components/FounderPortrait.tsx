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

  return (
    <figure className="w-full max-w-[19rem]">
      <div className="relative aspect-[4/5] overflow-hidden border border-rule bg-navy-2">
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
                "radial-gradient(120% 90% at 50% 0%, rgb(30 48 71 / 0.9) 0%, rgb(21 34 54 / 1) 70%)",
            }}
          >
            <span
              aria-hidden="true"
              className="text-[3.25rem] font-bold tracking-[0.12em] text-gold/80"
            >
              {initials}
            </span>
          </div>
        )}

        {/* Hairline inset, so the frame reads as deliberate in both states. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 border border-white/8"
        />
      </div>

      <figcaption className="t-caveat mt-4">{caption}</figcaption>
    </figure>
  );
}
