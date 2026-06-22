"use client";

import { useRef } from "react";
import Image from "next/image";

const events = [
  {
    id: 1,
    name: "Mi Amigo Invencible",
    image: "/images/amigo-invencible.png",
    date: "Vie 4 Jul",
    url: "#",
    contain: true,
  },
  {
    id: 2,
    name: "Club Edition",
    image: "/images/club-edition.png",
    date: "Vie 4 Jul",
    url: "#",
    contain: true,
  },
  {
    id: 3,
    name: "Isidris Sunset - Fuegos de Invierno",
    image: "/images/isidris-fuegos.png",
    date: "Sáb 18 Jul",
    url: "https://isidriseventos.com/events/fuegos-de-invierno-18-07",
    contain: false,
  },
  {
    id: 4,
    name: "Isla de Caras - La Sala Club",
    image: "/images/isla-de-caras.png",
    date: "Dom 16 Ago",
    url: "https://bullaccess.com.ar/events/isladecaras",
    contain: false,
  },
];

export default function EventsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
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
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {events.map((event) => (
          <a
            key={event.id}
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start shrink-0 w-[280px] md:w-[300px] group block rounded-2xl overflow-hidden bg-[#1a1a1a]"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={event.image}
                alt={event.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <span className="block w-full text-center bg-white hover:bg-white/90 text-black font-semibold py-2.5 rounded-full transition-all hover:scale-[1.02] text-sm">
                Comprar entradas
              </span>
            </div>
          </a>
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
