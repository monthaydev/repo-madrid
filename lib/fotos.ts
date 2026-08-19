/**
 * MANIFIESTO ÚNICO DE FOTOS — misma ley que en ZP Studio.
 *
 * Ningún componente declara una imagen por su cuenta. Todos leen de aquí.
 * Todas las fotos son **trabajos reales de Guedes**, entregadas por el
 * cliente. Nunca banco de imágenes.
 *
 * Para añadir una foto:
 *   1. se guarda en `public/fotos/` con nombre descriptivo en español
 *   2. se rellena `archivo`, `ancho` y `alto` reales aquí
 *   3. el sitio entero cambia sin tocar un solo componente
 *
 * Mientras `archivo` sea null, <Foto> pinta un hueco técnico con el encargo
 * escrito, y las secciones que dependen de esa foto se adaptan solas.
 */

export type Foto = {
  /** ruta dentro de /public, o null si todavía no la tenemos */
  archivo: string | null;
  /** alt real: describe la escena, es SEO y es accesibilidad */
  alt: string;
  /** qué foto hay que pedirle al cliente, si falta */
  encargo: string;
  ancho: number;
  alto: number;
};

const CATALOGO = {
  hero: {
    archivo: "/fotos/atico-malla-blanca-alcala.jpg",
    alt: "Terraza de un ático en Alcalá de Henares con malla de protección blanca tensada del suelo al techo, con vista a los tejados y al cielo",
    encargo: "—",
    ancho: 899,
    alto: 1599,
  },
  balcon: {
    archivo: "/fotos/balcon-malla-blanca.jpg",
    alt: "Balcón de una vivienda con red de protección blanca instalada de la barandilla al techo",
    encargo: "—",
    ancho: 387,
    alto: 815,
  },
  ventana: {
    archivo: "/fotos/ventana-habitacion-infantil.jpg",
    alt: "Ventana de una habitación infantil con red de protección instalada, con la hoja abierta",
    encargo: "—",
    ancho: 1080,
    alto: 1920,
  },
  terraza: {
    archivo: "/fotos/terraza-vista-arboles.jpg",
    alt: "Terraza larga cerrada con malla de protección tensada en bastidor metálico, con árboles y la calle al fondo",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
  escalera: {
    archivo: null,
    alt: "Hueco de escalera interior protegido con malla ajustada al pasamanos",
    encargo:
      "Escalera interior con la malla puesta en el hueco. Es el único servicio sin foto.",
    ancho: 1200,
    alto: 1500,
  },
  gato: {
    archivo: null,
    alt: "Gato asomado a una ventana protegida con red de seguridad",
    encargo:
      "Un gato o un perro junto a la red instalada. Es la que más se comparte y no tenemos ninguna.",
    ancho: 1200,
    alto: 1500,
  },
  estructura: {
    archivo: "/fotos/cubierta-malla-estructura.jpg",
    alt: "Estructura metálica con postes de acero sosteniendo la malla de protección sobre una cubierta",
    encargo: "—",
    ancho: 1599,
    alto: 899,
  },
  taller: {
    archivo: "/fotos/terraza-bastidor-angulo.jpg",
    alt: "Esquina de un bastidor de acero a medida, con la malla tensada contra el cielo",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },

  /* --- galería de trabajos --- */
  obraCiudad: {
    archivo: "/fotos/balcon-vista-ciudad.jpg",
    alt: "Balcón con celosía y malla de protección, con vista a los bloques del barrio",
    encargo: "—",
    ancho: 899,
    alto: 1599,
  },
  obraCalle: {
    archivo: "/fotos/balcon-vista-calle.jpg",
    alt: "Vista desde dentro de un balcón protegido con malla, mirando a la calle y a los coches aparcados",
    encargo: "—",
    ancho: 466,
    alto: 796,
  },
  obraCelosia: {
    archivo: "/fotos/balcon-celosia-cielo.jpg",
    alt: "Balcón con celosía de hormigón y malla de protección blanca contra el cielo",
    encargo: "—",
    ancho: 899,
    alto: 1599,
  },
  obraInterior: {
    archivo: "/fotos/balcon-estrecho-interior.jpg",
    alt: "Balcón estrecho con plantas protegido con malla, visto desde dentro de la vivienda",
    encargo: "—",
    ancho: 899,
    alto: 1599,
  },
  obraBloque: {
    archivo: "/fotos/balcon-vista-bloque.jpg",
    alt: "Malla de protección en un balcón, con el bloque de enfrente al fondo",
    encargo: "—",
    ancho: 899,
    alto: 1599,
  },
  obraToldo: {
    archivo: "/fotos/terraza-toldo-malla.jpg",
    alt: "Terraza con toldo y malla de protección instalada en el perímetro",
    encargo: "—",
    ancho: 899,
    alto: 1599,
  },
  obraPared: {
    archivo: "/fotos/cerramiento-malla-pared.jpg",
    alt: "Cerramiento completo de un paño de pared exterior con malla de protección",
    encargo: "—",
    ancho: 1599,
    alto: 899,
  },
} satisfies Record<string, Foto>;

export type NombreFoto = keyof typeof CATALOGO;

/** Se ensancha a `Foto` a propósito: el día que llegue un archivo nuevo,
 *  ningún componente tiene que cambiar de tipo. */
export const FOTOS: Record<NombreFoto, Foto> = CATALOGO;

export function foto(nombre: NombreFoto): Foto {
  return FOTOS[nombre];
}

/** Los trabajos de la parrilla, en el orden que se ven. Seis verticales:
 *  es el formato en el que Guedes hace las fotos con el móvil. */
export const GALERIA: NombreFoto[] = [
  "obraCalle",
  "obraCiudad",
  "obraCelosia",
  "obraInterior",
  "obraBloque",
  "obraToldo",
];

/** La única apaisada del lote: cierra la sección a todo el ancho. */
export const GALERIA_ANCHA: NombreFoto = "obraPared";
