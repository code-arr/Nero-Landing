"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/ajax/agostina@neroproducciones.com", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setStatus("sent");
    form.reset();
  };

  if (status === "sent") {
    return (
      <div className="bg-surface rounded-2xl p-8 border border-white/5 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3">Mensaje enviado</h3>
        <p className="text-white/50 mb-8">Te respondemos en menos de 24 horas.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-white/40 hover:text-white text-sm transition-colors underline underline-offset-4"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-2xl p-8 border border-white/5">
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="_subject" value="Nueva consulta desde neroproducciones.com" />
        <input type="hidden" name="_template" value="box" />
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-white/50 mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/50 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-white/50 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="261 123 4567"
          />
        </div>
        <div>
          <label htmlFor="tipo" className="block text-sm font-medium text-white/50 mb-2">
            Tipo de proyecto
          </label>
          <select
            id="tipo"
            name="tipo_de_proyecto"
            required
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
          >
            <option value="">Seleccioná una opción</option>
            <option value="corporativo">Evento corporativo</option>
            <option value="boda">Boda destino</option>
            <option value="activacion">Activación de marca</option>
            <option value="cultural">Evento cultural</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-white/50 mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            required
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
            placeholder="Contanos sobre tu evento..."
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-white hover:bg-white/90 text-black font-semibold py-4 rounded-full transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
        >
          {status === "sending" ? "Enviando..." : "Enviar consulta"}
        </button>
      </form>
    </div>
  );
}
