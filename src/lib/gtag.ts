type GtagWindow = Window & {
  gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
};

/**
 * Envía un evento a Google Analytics (GA4).
 * Si gtag todavía no cargó, simplemente no hace nada (no rompe).
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params ?? {});
  }
}
