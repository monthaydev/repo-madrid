import type { Metadata, Viewport } from "next";
import { Archivo, Martian_Mono } from "next/font/google";
import { EMPRESA, WHATSAPP, ZONAS, PREGUNTAS } from "@/lib/datos";
import "./globals.css";

/**
 * Una sola familia para título y texto: Archivo variable.
 * El eje `wdth` es la voz del proyecto — ancho y pesado en los titulares
 * (chapa de acero), normal en el cuerpo. Sin serif: la serif de alto
 * contraste sobre crema es justo el look que hay que evitar.
 */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--fuente-archivo",
  display: "swap",
});

/** La capa técnica: cotas, medidas, numeración. La voz del taller. */
const mono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--fuente-mono",
  display: "swap",
});

const TITULO =
  "Redes de Protección en la Comunidad de Madrid | Guedes Mallas";
const DESCRIPCION =
  "Instalamos mallas de protección para balcones, ventanas, terrazas y escaleras en toda la Comunidad de Madrid. Estructura metálica propia, visita técnica gratuita y 3 años de garantía.";

export const metadata: Metadata = {
  metadataBase: new URL(EMPRESA.sitio),
  title: {
    default: TITULO,
    template: "%s | Guedes Mallas de Protección",
  },
  description: DESCRIPCION,
  applicationName: EMPRESA.nombre,
  authors: [{ name: EMPRESA.nombre }],
  keywords: [
    "redes de protección Madrid",
    "mallas de protección Alcalá de Henares",
    "redes para balcones",
    "redes de seguridad para niños",
    "redes para gatos Madrid",
    "protección de ventanas Madrid",
    "redes de protección Corredor del Henares",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: EMPRESA.sitio,
    siteName: EMPRESA.nombre,
    title: TITULO,
    description: DESCRIPCION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Servicios para el hogar",
};

export const viewport: Viewport = {
  themeColor: "#f5f2ec",
  colorScheme: "light",
};

/**
 * Schema.org. Esto es la mitad del "quiero salir bien en Google" del
 * briefing: le dice a Google que esto es un negocio local, dónde trabaja,
 * a qué hora abre y qué preguntas responde.
 */
function datosEstructurados() {
  const negocio = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${EMPRESA.sitio}/#negocio`,
    name: EMPRESA.nombre,
    description: EMPRESA.descripcion,
    url: EMPRESA.sitio,
    telephone: WHATSAPP.tel,
    email: EMPRESA.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      ...(EMPRESA.direccion ? { streetAddress: EMPRESA.direccion } : {}),
      addressLocality: EMPRESA.base,
      postalCode: EMPRESA.codigoPostal,
      addressRegion: "Madrid",
      addressCountry: "ES",
    },
    areaServed: ZONAS.map((zona) => ({ "@type": "City", name: zona })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    makesOffer: [
      "Redes de protección para balcones",
      "Redes de protección para ventanas",
      "Cerramiento de terrazas con malla",
      "Protección de escaleras y huecos",
      "Redes de seguridad para mascotas",
      "Estructuras metálicas a medida",
    ].map((nombre) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: nombre },
    })),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PREGUNTAS.map(({ p, r }) => ({
      "@type": "Question",
      name: p,
      acceptedAnswer: { "@type": "Answer", text: r },
    })),
  };

  return JSON.stringify([negocio, faq]);
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-ES"
      className={`${archivo.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: datosEstructurados() }}
        />
      </body>
    </html>
  );
}
