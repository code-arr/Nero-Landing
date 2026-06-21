import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.neroproducciones.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nero Producciones | Eventos y Experiencias en Mendoza",
    template: "%s | Nero Producciones",
  },
  description:
    "Productora de eventos en Mendoza. Eventos corporativos, catas de vino, activaciones de marca, música en vivo, fiestas y experiencias al aire libre. Producción integral a medida.",
  keywords: [
    "eventos en Mendoza",
    "mendoza eventos",
    "productora de eventos Mendoza",
    "eventos corporativos Mendoza",
    "catas de vino Mendoza",
    "activaciones de marca Mendoza",
    "música en vivo Mendoza",
    "fiestas Mendoza",
    "bodega eventos Mendoza",
    "team building Mendoza",
    "eventos empresariales Mendoza",
    "producción de eventos",
    "Nero Producciones",
    "vino a la nave",
    "vino a el roble",
    "la finquita 1920",
    "sunset Mendoza",
    "sunset eventos Mendoza",
  ],
  authors: [{ name: "Nero Producciones" }],
  creator: "Nero Producciones",
  openGraph: {
    title: "Nero Producciones | Eventos y Experiencias en Mendoza",
    description:
      "Producción integral de eventos en Mendoza. Catas de vino, música en vivo, activaciones de marca, fiestas y experiencias únicas.",
    url: siteUrl,
    siteName: "Nero Producciones",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/images/nave-crowd.jpg",
        width: 1200,
        height: 630,
        alt: "Nero Producciones - Eventos en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nero Producciones | Eventos en Mendoza",
    description:
      "Producción integral de eventos en Mendoza. Catas, música en vivo, activaciones y experiencias únicas.",
    images: ["/images/nave-crowd.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: "Nero Producciones",
  description:
    "Productora de eventos en Mendoza. Eventos corporativos, catas de vino, activaciones de marca, música en vivo y experiencias únicas.",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-bg.jpg`,
  image: `${siteUrl}/images/nave-crowd.jpg`,
  telephone: "+542615346116",
  email: "agostina@neroproducciones.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mendoza",
    addressRegion: "Mendoza",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -32.8895,
    longitude: -68.8458,
  },
  areaServed: {
    "@type": "City",
    name: "Mendoza",
  },
  sameAs: ["https://instagram.com/neroproducciones"],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
