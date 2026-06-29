"use client";

import Image from "next/image";
import { useState, useEffect, useRef, type ReactNode, type TouchEvent as ReactTouchEvent } from "react";

interface Work {
  name: string;
  desc: string;
  image: string | null;
  gallery?: string[];
  large?: boolean;
  tall?: boolean;
  position?: string;
  order?: string;
}

interface WorksCategoryProps {
  title: ReactNode;
  works: Work[];
  onOpen: (work: { images: string[]; name: string }) => void;
}

function WorksCategory({ title, works, onOpen }: WorksCategoryProps) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white/50 md:whitespace-nowrap">{title}</h3>
        <div className="h-px bg-white/10 flex-1" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {works.map((work) => (
          <div
            key={work.name}
            className={`group cursor-pointer ${
              work.large ? "col-span-2" : work.tall ? "md:row-span-2" : ""
            } ${work.order ?? ""}`}
          >
            <div
              onClick={() => work.image && onOpen({ images: [work.image, ...(work.gallery ?? [])], name: work.name })}
              className={`relative overflow-hidden rounded-2xl ${work.image ? "cursor-zoom-in" : ""} ${
                work.large ? "aspect-[2/1]" : work.tall ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
              }`}
            >
              {work.image ? (
                <>
                  <Image
                    src={work.image}
                    alt={work.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={work.position ? { objectPosition: work.position } : undefined}
                  />
                  {/* overlay solo en desktop */}
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent group-hover:from-black/80 transition-colors" />
                  {/* indicador de galería (varias fotos) */}
                  {work.gallery && work.gallery.length > 0 && (
                    <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 bg-black/55 backdrop-blur-sm rounded-full pl-1.5 pr-2 py-1">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-white text-[11px] font-semibold leading-none">{work.gallery.length + 1}</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 bg-white/[0.03] border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-2 rounded-2xl">
                  <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white/20 text-xs font-medium">Foto pendiente</p>
                </div>
              )}
              {/* nombre + descripción sobre la foto: solo desktop */}
              <div className="hidden md:block absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h4 className="text-lg md:text-xl font-bold">{work.name}</h4>
                <p className="text-white/60 text-sm mt-1">{work.desc}</p>
              </div>
            </div>
            {/* nombre abajo (modo card): solo mobile */}
            <div className="md:hidden pt-2.5 px-0.5">
              <h4 className="text-sm font-bold leading-tight">{work.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const categories: { title: ReactNode; works: Work[] }[] = [
  {
    title: (
      <>
        Eventos creados y ejecutados por{" "}
        <span className="font-black tracking-tight text-white">NERO</span>
        <span className="hidden md:inline font-light tracking-wider text-white"> PRODUCCIONES</span>
      </>
    ),
    works: [
      { name: "Isidris Sunset", desc: "Experiencias de montaña entre vinos, fuegos y atardeceres.", image: "/images/isidris-works-2.jpg", gallery: ["/images/isidris-2.jpg", "/images/isidris-3.jpg"], large: true },
      { name: "Vino a la Nave", desc: "Vino, gastronomía y música en un entorno cultural único.", image: "/images/vino-a-la-nave-new.jpg", gallery: ["/images/vino-nave-2.jpg", "/images/vino-nave-3.jpg", "/images/vino-nave-4.jpg"] },
      { name: "La Sala", desc: "Un espacio para descubrir artistas y vivir la música de cerca.", image: "/images/la-sala-green.jpg", gallery: ["/images/la-sala-2.jpg", "/images/la-sala-3.jpg", "/images/la-sala-4.jpg"] },
      { name: "Vino al Roble", desc: "Encuentros en torno al vino, la gastronomía y la cultura.", image: "/images/vino-al-roble-new.png" },
      { name: "Club Edition", desc: "Eventos de música electrónica en espacios no convencionales.", image: "/images/club-edition-works.jpg", tall: true },
      { name: "Audioholics", desc: "Experiencias inmersivas para amantes de la música electrónica.", image: "/images/audioholics-new.jpg" },
      { name: "Finquita 1920", desc: "Experiencias boutique con identidad mendocina.", image: "/images/finquita-servicio.jpg", gallery: ["/images/finquita-2.webp", "/images/finquita-3.jpg"] },
    ],
  },
  {
    title: "Activaciones de marca",
    works: [
      { name: "Royal Enfield", desc: "Experiencias de marca que conectan producto y comunidad.", image: "/images/royal-enfield-real.jpg", order: "order-1 md:order-none" },
      { name: "Tecno", desc: "Lanzamientos y activaciones con foco en innovación y tecnología.", image: "/images/tecno-new.jpg", gallery: ["/images/tecno-2.jpg", "/images/tecno-3.jpg", "/images/tecno-4.jpg"], large: true, order: "order-3 md:order-none" },
      { name: "Tucci", desc: "Producción integral para inauguraciones y aperturas comerciales.", image: "/images/tucci.jpg", order: "order-4 md:order-none" },
      { name: "Zurich", desc: "Activaciones de seguros con experiencias y comunidad.", image: "/images/zurich.jpg", order: "order-5 md:order-none" },
      { name: "Stella Artois", desc: "Experiencias premium de cerveza artesanal y gastronomía.", image: "/images/stella-artois.jpg", position: "center", order: "order-2 md:order-none" },
    ],
  },
  {
    title: "Eventos masivos",
    works: [
      { name: "Peatonal del Vino", desc: "Una celebración urbana del vino en el corazón de Mendoza.", image: "/images/peatonal-vino-2025.jpg", gallery: ["/images/peatonal-2.webp", "/images/peatonal-3.jpg", "/images/peatonal-4.webp"] },
      { name: "Aniversario Arístides 2025", desc: "Producción de uno de los eventos públicos más convocantes de la ciudad.", image: "/images/aristides-2025.jpg" },
      { name: "Aniversario Arístides 2026", desc: "Producción de uno de los eventos públicos más convocantes de la ciudad.", image: "/images/aristides-2026-new.jpg" },
    ],
  },
];

export default function WorksCarousel() {
  const [lightbox, setLightbox] = useState<{ images: string[]; name: string } | null>(null);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const open = (work: { images: string[]; name: string }) => {
    setIndex(0);
    setLightbox(work);
  };
  const close = () => setLightbox(null);

  const total = lightbox?.images.length ?? 0;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    if (!lightbox) return;
    // precargar todas las fotos de la galería para que el cambio sea instantáneo
    lightbox.images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, total]);

  const onTouchStart = (e: ReactTouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: ReactTouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <div>
      {categories.map((cat, i) => (
        <WorksCategory key={i} title={cat.title} works={cat.works} onOpen={open} />
      ))}

      {lightbox && (
        <div
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out animate-[fadeIn_0.2s_ease-out]"
        >
          {/* Flecha para volver */}
          <button
            onClick={close}
            aria-label="Volver"
            className="absolute top-5 left-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Flechas de navegación (solo si hay más de una foto) */}
          {total > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Foto anterior"
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Foto siguiente"
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Imagen ampliada */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.images[index]}
            alt={`${lightbox.name} ${index + 1}`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="max-w-full max-h-[88vh] w-auto h-auto object-contain rounded-xl shadow-2xl select-none"
          />

          {/* Puntitos indicadores */}
          {total > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {lightbox.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                  aria-label={`Ir a la foto ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
