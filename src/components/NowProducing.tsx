"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface ProductionItem {
  title: string;
  description: string;
  image: string;
}

const PRODUCTIONS: ProductionItem[] = [
  {
    title: "Isidris Sunset",
    description: "Un sunset único en la montaña mendocina. Vino en mano, música en vivo y la mejor vista de los Andes. A solo 15 minutos de la ciudad.",
    image: "/images/isidris-works-2.jpg",
  },
  // Agregá más eventos aquí
];

export default function NowProducing() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);

  if (PRODUCTIONS.length === 0) return null;

  const next = () => {
    setCurrent((current + 1) % PRODUCTIONS.length);
  };

  const prev = () => {
    setCurrent((current - 1 + PRODUCTIONS.length) % PRODUCTIONS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart.current - touchEnd > 50) {
      next();
    } else if (touchEnd - touchStart.current > 50) {
      prev();
    }
  };

  const production = PRODUCTIONS[current];

  return (
    <section
      className="relative py-8 md:py-12 flex items-center justify-center bg-black overflow-hidden"
      style={{ minHeight: "calc(100vh - 64px)" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image */}
      <div className="absolute inset-0 top-8 md:top-12 bottom-8 md:bottom-12">
        <Image
          src={production.image}
          alt={production.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black to-black/50 via-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center">
          <p className="text-white/80 uppercase text-lg md:text-xl tracking-widest -mb-4 md:-mb-6">
            Actualmente produciendo
          </p>
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/isidris-logo-title.png"
              alt={production.title}
              width={300}
              height={200}
              className="max-w-xs md:max-w-md h-auto"
            />
          </div>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            {production.description}
          </p>
          <a
            href="https://isidriseventos.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-white/90 text-black font-bold px-10 py-4 rounded-full transition-all hover:scale-[1.05] text-lg"
          >
            Comprar Entradas
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all hidden md:flex"
        aria-label="Anterior"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all hidden md:flex"
        aria-label="Siguiente"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {PRODUCTIONS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === current ? "bg-white w-8" : "bg-white/30 w-2"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
