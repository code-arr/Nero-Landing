"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

const PHONE = "5492615346116";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value;
    const tipo = (form.elements.namedItem("tipo") as HTMLSelectElement).value;
    const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement).value;

    const text = `*Nueva consulta desde neroproducciones.com*

*Nombre:* ${nombre}
*Tipo de evento:* ${tipo}

${mensaje}`;

    trackEvent("envio_formulario", { tipo_evento: tipo });

    const url = `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setStatus("idle");
  };

  return (
    <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-3xl p-8 md:p-10 border border-white/10 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
          <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.331 0-4.512-.654-6.369-1.787l-.456-.279-3.156 1.058 1.058-3.156-.279-.456A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
        </div>
        <div>
          <p className="font-bold text-lg">Escribinos</p>
          <p className="text-white/40 text-sm">Te respondemos al instante</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="peer w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-[#25D366]/50 focus:bg-white/[0.06] transition-all"
            placeholder="Tu nombre"
          />
          <label
            htmlFor="nombre"
            className="absolute left-5 top-4 text-white/30 text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[11px] peer-focus:text-[#25D366] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-white/40"
          >
            Tu nombre
          </label>
        </div>

        <div className="relative">
          <select
            id="tipo"
            name="tipo"
            required
            defaultValue=""
            className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#25D366]/50 focus:bg-white/[0.06] transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled className="bg-[#1a1a1a] text-white/30">Tipo de evento</option>
            <option value="Activación de marca" className="bg-[#1a1a1a]">Activación de marca</option>
            <option value="Evento corporativo" className="bg-[#1a1a1a]">Evento corporativo</option>
            <option value="Experiencia enogastronómica" className="bg-[#1a1a1a]">Experiencia enogastronómica</option>
            <option value="Festival o ciclo cultural" className="bg-[#1a1a1a]">Festival o ciclo cultural</option>
            <option value="Evento social" className="bg-[#1a1a1a]">Evento social</option>
            <option value="Otro" className="bg-[#1a1a1a]">Otro</option>
          </select>
          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            required
            className="peer w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-transparent focus:outline-none focus:border-[#25D366]/50 focus:bg-white/[0.06] transition-all resize-none"
            placeholder="Tu consulta"
          />
          <label
            htmlFor="mensaje"
            className="absolute left-5 top-4 text-white/30 text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[11px] peer-focus:text-[#25D366] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-white/40"
          >
            Contanos sobre tu evento...
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-2xl transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3 text-lg"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.331 0-4.512-.654-6.369-1.787l-.456-.279-3.156 1.058 1.058-3.156-.279-.456A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
          Enviar por WhatsApp
        </button>
      </form>

      <p className="text-center text-white/20 text-xs mt-6">
        Se abrirá WhatsApp con tu consulta lista para enviar
      </p>
    </div>
  );
}
