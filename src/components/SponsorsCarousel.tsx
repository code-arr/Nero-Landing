'use client';

import Image from 'next/image';

export default function SponsorsCarousel() {
  const sponsors = [
    { name: 'Martin Co', logo: '/images/sponsors/martin-co.svg' },
    { name: 'Sancor Seguros', logo: '/images/sponsors/sancor-seguros.svg' },
    { name: 'Royal Enfield', logo: '/images/sponsors/royal-enfield.svg' },
    { name: 'Tecno', logo: '/images/sponsors/tecno.svg' },
  ];

  return (
    <div className="py-16 md:py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-white/40 font-semibold text-sm tracking-widest uppercase mb-4">Confían en nosotros</p>
        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-16">
          Nuestros partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center h-24 md:h-32 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.05]"
            >
              <div className="relative w-full h-full p-4">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
