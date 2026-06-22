"use client";

import Image from "next/image";

interface Work {
  name: string;
  image: string | null;
  large?: boolean;
}

interface WorksCategoryProps {
  title: string;
  works: Work[];
}

function WorksCategory({ title, works }: WorksCategoryProps) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-white/50 whitespace-nowrap">{title}</h3>
        <div className="h-px bg-white/10 flex-1" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {works.map((work) => (
          <div
            key={work.name}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
              work.large ? "col-span-2 aspect-[2/1]" : "aspect-[4/3]"
            }`}
          >
            {work.image ? (
              <>
                <Image
                  src={work.image}
                  alt={work.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent group-hover:from-black/80 transition-colors" />
              </>
            ) : (
              <div className="absolute inset-0 bg-white/[0.03] border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-2 rounded-2xl">
                <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-white/20 text-xs font-medium">Foto pendiente</p>
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <h4 className="text-lg md:text-xl font-bold">{work.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const categories: WorksCategoryProps[] = [
  {
    title: "Experiencias propias",
    works: [
      { name: "Vino a la Nave", image: "/images/nave-crowd.jpg", large: true },
      { name: "Isidris Sunset", image: null },
      { name: "Vino al Roble", image: "/images/roble-dj.jpg" },
      { name: "La Sala", image: null },
      { name: "Club Edition", image: null },
      { name: "Audioholics - Mariano Mellino", image: null, large: true },
      { name: "Finquita 1920", image: "/images/finquita-servicio.jpg" },
    ],
  },
  {
    title: "Activaciones de marca",
    works: [
      { name: "Royal Enfield", image: "/images/royal-enfield-real.jpg" },
      { name: "Tecno", image: null },
      { name: "Tucci", image: null },
    ],
  },
  {
    title: "Eventos masivos",
    works: [
      { name: "Peatonal del Vino 2025", image: null },
      { name: "Aniversario Arístides 2025", image: null },
      { name: "Aniversario Arístides 2026", image: null },
    ],
  },
];

export default function WorksCarousel() {
  return (
    <div>
      {categories.map((cat) => (
        <WorksCategory key={cat.title} title={cat.title} works={cat.works} />
      ))}
    </div>
  );
}
