import Image from "next/image";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import EventsCarousel from "@/components/EventsCarousel";
import ContactForm from "@/components/ContactForm";
import WorksCarousel from "@/components/WorksCarousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FloatingButtons />

      {/* HERO */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src="/images/fondo-nero.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_center,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0.2)_80%,rgba(0,0,0,0)_100%)]" />
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
      <section id="nosotros" className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-10 items-stretch">
            {/* Left — Text */}
            <div>
              <p className="text-white/40 font-semibold text-sm tracking-widest uppercase mb-4">Quiénes somos</p>
              <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                Producimos experiencias,<br />no solo eventos.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-12">
                Somos una productora integral de Mendoza. Diseñamos y producimos experiencias que conectan marcas, cultura y personas. <span className="text-white font-medium">Vos ponés la idea, nosotros la hacemos realidad.</span>
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ),
                    title: "Idea",
                    desc: "Desarrollamos conceptos creativos que conectan con las personas.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    ),
                    title: "Producción integral",
                    desc: "Nos encargamos de todo: logística, contenido, sonido, luces y más.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    title: "Ejecución",
                    desc: "Coordinamos equipos, proveedores, marcas e instituciones para que todo suceda.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                    title: "Resultados",
                    desc: "Transformamos ideas en experiencias memorables que generan impacto real.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-white/60">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Photo grid with stats */}
            <div className="grid grid-cols-3 grid-rows-[1fr_1fr] gap-3 min-h-[400px] lg:h-full">
              {/* Top row */}
              <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden">
                <Image src="/images/eventos-150.jpg" alt="Eventos realizados" fill sizes="(max-width: 768px) 66vw, 35vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-3xl md:text-4xl font-black">+150</p>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">Eventos realizados</p>
                </div>
              </div>
              <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden">
                <Image src="/images/asistentes-100k.jpg" alt="Asistentes" fill sizes="(max-width: 768px) 33vw, 18vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-2xl md:text-3xl font-black">+100K</p>
                  <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider leading-tight">Asistentes en nuestros eventos</p>
                </div>
              </div>

              {/* Bottom row */}
              <div className="row-span-1 relative rounded-2xl overflow-hidden">
                <Image src="/images/marcas-50-v2.jpg" alt="Marcas" fill sizes="(max-width: 768px) 33vw, 18vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-2xl md:text-3xl font-black">+50</p>
                  <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider leading-tight">Marcas acompañadas</p>
                </div>
              </div>
              <div className="row-span-1 relative rounded-2xl overflow-hidden">
                <Image src="/images/finquita-servicio.jpg" alt="Bodegas" fill sizes="(max-width: 768px) 33vw, 18vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-2xl md:text-3xl font-black">+20</p>
                  <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider leading-tight">Bodegas por edición en ciclos enogastronómicos</p>
                </div>
              </div>
              <div className="row-span-1 relative rounded-2xl overflow-hidden">
                <Image src="/images/anos-trayectoria.jpg" alt="Trayectoria" fill sizes="(max-width: 768px) 33vw, 18vw" className="object-cover" style={{objectPosition: 'center 30%'}} />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-2xl md:text-3xl font-black">+10</p>
                  <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wider leading-tight">Años de trayectoria en la industria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsors Banner */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <p className="text-white/30 font-semibold text-xs tracking-widest uppercase text-center mb-12">Confían en nosotros</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12">
              {[
                { name: 'Martin Co', logo: '/images/sponsors/martin-co.svg' },
                { name: 'Sancor Seguros', logo: '/images/sponsors/sancor-seguros.svg' },
                { name: 'Royal Enfield', logo: '/images/sponsors/royal-enfield.svg' },
                { name: 'Tecno', logo: '/images/sponsors/tecno.svg' },
                { name: 'Corona', logo: '/images/sponsors/corona.png' },
                { name: 'Andesmar', logo: '/images/sponsors/andesmar.png' },
                { name: 'Mendoza Shopping', logo: '/images/sponsors/mendoza-shopping.png' },
                { name: 'Municipalidad Mendoza', logo: '/images/sponsors/municipalidad-mendoza.png' },
                { name: 'Aperol', logo: '/images/sponsors/aperol.webp' },
                { name: 'Fernet', logo: '/images/sponsors/fernet.webp' },
                { name: 'Andes Origen', logo: '/images/sponsors/andes-origen.webp' },
                { name: 'Pepsi Music', logo: '/images/sponsors/pepsi-music.webp' },
              ].map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex items-center justify-center h-16 md:h-20"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className={`object-contain object-center ${sponsor.name === 'Pepsi Music' ? '' : 'brightness-0 invert'}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 text-center">
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto italic">
              &ldquo;Creemos en el poder de las experiencias para unir personas, potenciar marcas y dejar huella.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* TRABAJOS DESTACADOS */}
      <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden bg-black">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black">Portfolio</h2>
          </div>
          <WorksCarousel />
        </div>
      </section>

      {/* VENUES */}
      <section id="venues" className="py-24 md:py-32 bg-black">
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
                image: "/images/bodega-giol.jpg",
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
                image: "/images/bodega-dante.jpg",
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
                {venue.image ? (
                  <>
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-white/[0.03] border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-2 rounded-2xl">
                    <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/20 text-xs font-medium">Foto pendiente</p>
                  </div>
                )}
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
      <section id="eventos" className="relative py-24 md:py-32 overflow-hidden bg-black">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-white/40 font-semibold text-sm tracking-widest uppercase mb-4">Eventos</p>
            <h2 className="text-3xl md:text-5xl font-black">Agenda Nero</h2>
          </div>
          <EventsCarousel />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 md:py-32 bg-black">
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
      <footer className="border-t border-white/5 py-12 bg-black">
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
    </div>
  );
}
