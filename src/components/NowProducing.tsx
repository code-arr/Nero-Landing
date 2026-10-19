"use client";

import Image from "next/image";

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
  // Agregá más eventos aquí cuando quieras mostrar múltiples
];

export default function NowProducing() {
  if (PRODUCTIONS.length === 0) return null;

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-white/40 uppercase text-sm tracking-widest mb-4">
            Actualmente produciendo
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Nuestros Eventos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTIONS.map((production, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={production.image}
                  alt={production.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {production.title}
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                {production.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
