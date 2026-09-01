"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/lib/gtag";

interface Event {
  id: string | number;
  name: string;
  image: string;
  date: string;
  url: string;
  position: string | null;
}

const HARDCODED_EVENTS: Event[] = [
  {
    id: "silvestre-naranja",
    name: "Vino a la Nave - Silvestre y la Naranja",
    image: "/images/silvestre-naranja.jpg",
    date: "Sáb 5 Sep",
    url: "https://venti.com.ar/evento/vino-a-la-nave-silvestre-y-la-naranja-sabado-5-de-septiembre-mendoza",
    position: null,
  },
];

export default function EventsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        if (!response.ok) throw new Error("Failed to fetch events");
        const data = await response.json();

        const formattedEvents = data.data?.map((event: any) => {
          const isIsidris = event.organizer_display_name?.toLowerCase().includes("isidris");
          const baseUrl = isIsidris ? "https://isidriseventos.com" : "https://bullaccess.com.ar";
          const eventUrl = event.slug
            ? `${baseUrl}/events/${event.slug}`
            : `${baseUrl}/events/${event.id}`;

          return {
            id: event.id,
            name: event.name,
            image: event.featured_image_url || "/images/default-event.jpg",
            date: new Date(event.event_date).toLocaleDateString("es-AR", {
              weekday: "short",
              month: "short",
              day: "numeric",
            }),
            url: eventUrl,
            position: null,
          };
        }) || [];

        setEvents([...HARDCODED_EVENTS, ...formattedEvents]);
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents(HARDCODED_EVENTS);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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
            onClick={() => trackEvent("click_comprar_entradas", { evento: event.name })}
            className="snap-start shrink-0 w-[280px] md:w-[300px] group block rounded-2xl overflow-hidden bg-[#1a1a1a]"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={event.image}
                alt={event.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={event.position ? { objectPosition: event.position } : undefined}
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
