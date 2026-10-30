import { Section } from "./ui";

/** Shared layout for /privacy and /compliance: numbered sections, one measure. */
export default function LegalDocument({
  sections,
  footnote,
}: {
  sections: { title: string; body: string[] }[];
  footnote?: string;
}) {
  return (
    <Section rule>
      <div className="max-w-3xl">
        {sections.map((section, i) => (
          <section key={section.title} className={i > 0 ? "mt-12" : ""}>
            <h2 className="t-h3 border-t border-rule pt-8">{section.title}</h2>
            <div className="mt-5 space-y-4">
              {section.body.map((paragraph) => (
                <p key={paragraph} className="t-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {footnote ? (
          <p className="t-caveat mt-14 border-t border-rule pt-8">{footnote}</p>
        ) : null}
      </div>
    </Section>
  );
}
