"use client";

import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { submitContact, type ContactState } from "@/app/actions/contact";
import { CONTACT } from "@/content/pages";
import { OPPORTUNITY_NATURES, natureByValue } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";

const INITIAL: ContactState = { status: "idle" };

export default function ContactForm({ locale }: { locale: Locale }) {
  const [state, action] = useActionState(submitContact, INITIAL);
  const copy = CONTACT[locale];

  // An advisory page can open the form with its subject already selected:
  // /contact?assunto=npl. Unknown values are ignored rather than trusted.
  const params = useSearchParams();
  const requested = params.get("assunto") ?? "";
  const preselected = natureByValue(requested)?.value ?? "";

  if (state.status === "ok") {
    return (
      <div className="panel border-l-2 border-l-gold px-7 py-8" role="status">
        <p className="t-h3">{copy.success.title}</p>
        <p className="t-body mt-3">{copy.success.body}</p>
      </div>
    );
  }

  const error = state.status === "error" ? state : null;
  // Re-seed the fields after a failed submission so nothing typed is lost.
  const prior = error?.values;

  const fieldError = (field: string) =>
    error?.field === field ? copy.errors[error.code as keyof typeof copy.errors] : null;
  // Delivery failures are not tied to a single field.
  const formError =
    error && !error.field ? copy.errors[error.code as keyof typeof copy.errors] : null;

  return (
    <form
      key={error ? "retry" : "initial"}
      action={action}
      className="space-y-8"
      noValidate
    >
      <input type="hidden" name="locale" value={locale} />

      {/* Honeypot — hidden from assistive technology and from tab order. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="bh_ref">Ref</label>
        <input id="bh_ref" name="bh_ref" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field
        id="contact-name"
        name="name"
        label={copy.labels.name}
        placeholder={copy.placeholders.name}
        autoComplete="name"
        required
        defaultValue={prior?.name}
        error={fieldError("name")}
      />

      <Field
        id="contact-institution"
        name="institution"
        label={copy.labels.institution}
        placeholder={copy.placeholders.institution}
        autoComplete="organization"
        defaultValue={prior?.institution}
      />

      <Field
        id="contact-email"
        name="email"
        type="email"
        label={copy.labels.email}
        placeholder={copy.placeholders.email}
        autoComplete="email"
        required
        defaultValue={prior?.email}
        error={fieldError("email")}
      />

      <div>
        <label htmlFor="contact-nature" className="field-label">
          {copy.labels.nature} <Required />
        </label>
        <select
          id="contact-nature"
          name="nature"
          required
          defaultValue={prior?.nature ?? preselected}
          aria-invalid={fieldError("nature") ? true : undefined}
          aria-describedby={
            fieldError("nature") ? "contact-nature-error" : "contact-nature-hint"
          }
          className="field mt-1"
        >
          <option value="" disabled>
            —
          </option>
          {OPPORTUNITY_NATURES.map((nature) => (
            <option key={nature.value} value={nature.value}>
              {nature.label[locale]}
            </option>
          ))}
        </select>
        <p id="contact-nature-hint" className="t-caveat mt-2">
          {copy.natureHint}
        </p>
        <FieldError id="contact-nature-error" message={fieldError("nature")} />
      </div>

      <div>
        <label htmlFor="contact-message" className="field-label">
          {copy.labels.message} <Required />
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          defaultValue={prior?.message}
          placeholder={copy.placeholders.message}
          aria-invalid={fieldError("message") ? true : undefined}
          aria-describedby={fieldError("message") ? "contact-message-error" : undefined}
          className="field mt-1 resize-y"
        />
        <FieldError id="contact-message-error" message={fieldError("message")} />
      </div>

      <div>
        <div className="flex gap-3.5">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            required
            aria-invalid={fieldError("consent") ? true : undefined}
            aria-describedby={fieldError("consent") ? "contact-consent-error" : undefined}
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--gold)]"
          />
          <label htmlFor="contact-consent" className="t-small">
            {copy.labels.consent}{" "}
            <a
              href={localePath(locale, "/privacy")}
              className="text-gold underline underline-offset-2"
            >
              {locale === "pt" ? "Política de Privacidade" : "Privacy Policy"}
            </a>
            .
          </label>
        </div>
        <FieldError id="contact-consent-error" message={fieldError("consent")} />
      </div>

      {formError ? (
        <p
          role="alert"
          className="border-l-2 border-l-gold bg-navy-2 px-5 py-4 text-sm text-off-white"
        >
          {formError}
        </p>
      ) : null}

      <Submit label={copy.labels.submit} busyLabel={copy.labels.submitting} />
    </form>
  );
}

function Required() {
  return (
    <span className="text-gold" aria-hidden="true">
      *
    </span>
  );
}

function FieldError({ id, message }: { id: string; message: string | null }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-gold">
      {message}
    </p>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required = false,
  defaultValue,
  error,
}: {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  defaultValue?: string;
  error?: string | null;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label} {required ? <Required /> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="field mt-1"
      />
      <FieldError id={`${id}-error`} message={error ?? null} />
    </div>
  );
}

function Submit({ label, busyLabel }: { label: string; busyLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn-primary">
      {pending ? busyLabel : label}
    </button>
  );
}
