"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Integração de envio (e-mail/CRM) a ser conectada na fase de implementação backend.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-gold/70 bg-navy-2 px-7 py-8">
        <p className="text-base font-bold text-white">Mensagem recebida.</p>
        <p className="text-sm text-light-blue mt-2">
          A Blackhill Capital entrará em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="text-xs font-bold text-light-blue uppercase tracking-wide">
          Nome
        </label>
        <input
          required
          type="text"
          className="mt-2 w-full rounded border border-navy-3 bg-navy-2 px-4 py-3 text-sm text-white outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-light-blue uppercase tracking-wide">
          Instituição
        </label>
        <input
          type="text"
          className="mt-2 w-full rounded border border-navy-3 bg-navy-2 px-4 py-3 text-sm text-white outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="text-xs font-bold text-light-blue uppercase tracking-wide">
          Perfil
        </label>
        <select className="mt-2 w-full rounded border border-navy-3 bg-navy-2 px-4 py-3 text-sm text-white outline-none focus:border-gold">
          <option>Investidor</option>
          <option>Cedente</option>
          <option>Empresa em reestruturação</option>
          <option>Parceiro estratégico</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-bold text-light-blue uppercase tracking-wide">
          Mensagem
        </label>
        <textarea
          required
          rows={4}
          className="mt-2 w-full rounded border border-navy-3 bg-navy-2 px-4 py-3 text-sm text-white outline-none focus:border-gold"
        />
      </div>
      <button
        type="submit"
        className="inline-block rounded bg-gold px-7 py-3.5 text-sm font-bold text-navy hover:bg-gold-light transition-colors"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
