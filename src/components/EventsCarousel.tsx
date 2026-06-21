"use client";

import { useRef } from "react";
import Image from "next/image";

const events = [
  {
    id: 1,
    name: "Isidris Sunset - Fuegos de Invierno",
    description: "Experiencia de montaña con vinos seleccionados, cocina al fuego y música al atardecer. 16 bodegas y más de 50 etiquetas en degustación.",
    image: "/images/isidris-fuegos.png",
    date: "Sáb 18 Jul",
    url: "https://isidriseventos.com/events/fuegos-de-invierno-18-07",
  },
  {
    id: 2,
    name: "Isla de Caras - La Sala Club",
    description: "La Sala Club presenta Isla de Caras. Un nuevo espacio para disfrutar de la música en vivo en Bodega Giol.",
    image: "/images/isla-de-caras.png",
    date: "Dom 16 Ago",
    url: "https://bullaccess.com.ar/events/isladecaras",
  },
];

export default function EventsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-all -translate-x-1/2 hidden md:flex"
        aria-label="Anterior"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="snap-start shrink-0 w-[300px] md:w-[320px] bg-surface-light border border-white/5 rounded-2xl overflow-hidden card-hover group flex flex-col"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={event.image}
                alt={event.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                  {event.date}
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2 leading-tight">{event.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                {event.description}
              </p>
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white hover:bg-white/90 text-black font-semibold py-2.5 rounded-full transition-all hover:scale-[1.02] text-sm"
              >
                Comprar entradas
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-all translate-x-1/2 hidden md:flex"
        aria-label="Siguiente"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
