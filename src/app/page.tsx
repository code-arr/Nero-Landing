import Image from "next/image";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import EventsCarousel from "@/components/EventsCarousel";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingButtons />

      {/* HERO */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="hero-text-pattern absolute inset-0 select-none" aria-hidden="true" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-none mb-2">
            NERO
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.3em] uppercase mb-10">
            Producciones
          </p>
          <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase text-white/50 max-w-xl mx-auto leading-relaxed">
            Producción de experiencias memorables
            <br />
            para marcas, empresas e instituciones
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="nosotros" className="section-surface py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-white/40 font-semibold text-sm tracking-widest uppercase mb-4">Quiénes somos</p>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              Producimos experiencias, no solo eventos
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Somos una productora integral de Mendoza. Nos encargamos de todo: concepto, logística, ambientación, sonido, luces, contenido audiovisual y gastronomía. <span className="text-white font-medium">Vos ponés la idea, nosotros la hacemos realidad.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { image: "/images/nave-crowd.jpg", label: "Eventos masivos", className: "col-span-2 row-span-2 aspect-square md:aspect-auto" },
              { image: "/images/musica-vivo.jpg", label: "Música en vivo", className: "aspect-square" },
              { image: "/images/copa-vino.jpg", label: "Catas y degustaciones", className: "aspect-square" },
              { image: "/images/royal-enfield.jpg", label: "Activaciones de marca", className: "aspect-square" },
              { image: "/images/finquita-servicio.jpg", label: "Gastronomía y catering", className: "aspect-square" },
              { image: "/images/jagger-confetti.jpg", label: "Fiestas y nocturnos", className: "col-span-2 aspect-[2/1]" },
              { image: "/images/outdoor.jpg", label: "Experiencias al aire libre", className: "col-span-2 aspect-[2/1]" },
            ].map((item) => (
              <div
                key={item.label}
                className={`group relative rounded-2xl overflow-hidden ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-sm md:text-base font-bold tracking-wide">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRABAJOS DESTACADOS */}
      <section id="trabajos" className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="hero-text-pattern absolute inset-0 select-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-white/40 font-semibold text-sm tracking-widest uppercase mb-4">Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-black">Casos destacados</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Vino a la Nave",
                desc: "Ciclo cultural donde se unen la música, el vino, el arte y la comunidad. Más de 10.000 personas vivieron esta experiencia.",
                image: "/images/nave-crowd.jpg",
                tag: "Ciclo cultural",
              },
              {
                title: "Royal Enfield",
                desc: "Activación para el lanzamiento de producto, integrando estética de marca y experiencia en movimiento en los paisajes de Mendoza.",
                image: "/images/royal-enfield.jpg",
                tag: "Activación de marca",
              },
              {
                title: "Vino a El Roble",
                desc: "Encuentros al aire libre con música, gastronomía y atardeceres inolvidables en un entorno natural único.",
                image: "/images/roble-dj.jpg",
                tag: "Evento al aire libre",
              },
              {
                title: "La Finquita 1920",
                desc: "Evento privado y exclusivo con curaduría de vinos y música en vivo en un espacio moderno y sofisticado.",
                image: "/images/finquita-servicio.jpg",
                tag: "Evento privado",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-white/10">
                    {project.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black mb-2">{project.title}</h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUES */}
      <section id="venues" className="section-surface py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-white/40 font-semibold text-sm tracking-widest uppercase mb-4">Venues</p>
            <h2 className="text-3xl md:text-5xl font-black mb-4">Espacios únicos</h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Contamos con una red de espacios para eventos privados,
              institucionales y corporativos en Mendoza.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Bodega Giol",
                desc: "Salón cerrado y espacio Jagger. Versátil, con historia vitivinícola.",
                image: "/images/vino-nave-live.jpg",
              },
              {
                name: "Nave Cultural",
                desc: "Ícono urbano con valor patrimonial. Ideal para eventos masivos.",
                image: "/images/nave-exterior.jpg",
              },
              {
                name: "Bodega Tierras Altas",
                desc: "Espacios verdes e íntimos rodeados de viñedos.",
                image: "/images/venues.jpg",
              },
              {
                name: "La Finquita 1920",
                desc: "Bodega boutique. Entorno natural y relajado, perfecto para team buildings.",
                image: "/images/finquita-copa.jpg",
              },
              {
                name: "Bodega Dante Robino",
                desc: "Ideal para cenas privadas y eventos nocturnos con producción escénica.",
                image: "/images/eventos-nocturnos.jpg",
              },
              {
                name: "Puesto del Indio",
                desc: "Experiencia de montaña rodeada de paisajes únicos en Las Heras.",
                image: "/images/puesto-del-indio.png",
              },
            ].map((venue) => (
              <div
                key={venue.name}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-1">{venue.name}</h3>
                  <p className="text-white/50 text-sm">{venue.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTOS ACTIVOS */}
      <section id="eventos" className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="hero-text-pattern absolute inset-0 select-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-white/40 font-semibold text-sm tracking-widest uppercase mb-4">Eventos</p>
            <h2 className="text-3xl md:text-5xl font-black">Agenda Nero</h2>
          </div>
          <EventsCarousel />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section-surface py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-white/40 font-semibold text-sm tracking-widest uppercase mb-4">Contacto</p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                ¿Querés crear un evento memorable?
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-10">
                Contanos tu idea y la hacemos realidad. Te respondemos en menos de 24 horas.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/30">Email</p>
                    <p className="font-medium">agostina@neroproducciones.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/30">WhatsApp</p>
                    <p className="font-medium">261 534 6116</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/30">Instagram</p>
                    <p className="font-medium">@neroproducciones</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/30">Web</p>
                    <p className="font-medium">www.neroproducciones.com</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-surface border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-xl font-black tracking-tight">
                NERO<span className="font-light ml-1 text-sm align-middle tracking-wider">PRODUCCIONES</span>
              </p>
              <p className="text-white/30 text-sm mt-1">
                Producción de experiencias memorables en Mendoza
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/neroproducciones"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/542615346116"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 text-center">
            <p className="text-white/20 text-sm">
              © {new Date().getFullYear()} Nero Producciones. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
