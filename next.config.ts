import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // URLs viejas del WordPress -> home nueva (301 permanente)
      { source: "/vinoalanave", destination: "/", permanent: true },
      { source: "/vinoalanave/", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contacto", permanent: true },
      { source: "/contact/", destination: "/#contacto", permanent: true },
      { source: "/que-hacemos", destination: "/#nosotros", permanent: true },
      { source: "/que-hacemos/", destination: "/#nosotros", permanent: true },
      // Categorías del WordPress viejo
      { source: "/category/:slug*", destination: "/", permanent: true },
      // Posts fechados del WordPress viejo (ej: /2024/01/22/...)
      { source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*", destination: "/", permanent: true },
      // Plantillas internas del WordPress (?wpr_templates=...)
      {
        source: "/:path*",
        has: [{ type: "query", key: "wpr_templates" }],
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
