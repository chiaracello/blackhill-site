/**
 * Structured data. The payload is always built server-side in
 * `src/lib/metadata.ts` from static content — never from user input.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
