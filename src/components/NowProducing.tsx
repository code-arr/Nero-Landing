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
    description: "Una experiencia de montaña donde la naturaleza, el vino y la música se encuentran en el atardecer. 16 bodegas, 50+ etiquetas para degustar, cocina al fuego y una tarde que se transforma en noche de pura jodita.",
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
      className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={production.image}
          alt={production.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center">
          <p className="text-white/40 uppercase text-sm tracking-widest mb-4">
            Actualmente produciendo
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            {production.title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {production.description}
          </p>
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
