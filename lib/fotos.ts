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
    archivo: "/fotos/gato-taburete-colores.jpg",
    alt: "Gato blanco subido a un taburete en un balcón con red de protección, rodeado de plantas y muebles de colores",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
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

  /* --- el gato, la prueba de que aguanta --- */
  gatoTejado: {
    archivo: "/fotos/gato-silla-roja-tejado.jpg",
    alt: "Gato blanco sentado junto a una silla en un balcón con red de protección, con tejados de zinc rojo al fondo",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
  gatoEquilibrio: {
    archivo: "/fotos/gato-taburetes-equilibrio.jpg",
    alt: "Gato saltando entre dos taburetes en un balcón protegido con red, con la malla tensada al fondo",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
  gatoCarrito: {
    archivo: "/fotos/gato-carrito-lampara.jpg",
    alt: "Gato tumbado junto a un carrito de plantas, visto desde dentro de casa a través de la puerta corredera con red de protección",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
  gatoPerfilTejados1: {
    archivo: "/fotos/gato-perfil-tejados-1.jpg",
    alt: "Gato de espaldas mirando hacia los edificios de enfrente a través de la red de protección del balcón",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
  gatoPerfilTejados2: {
    archivo: "/fotos/gato-perfil-tejados-2.jpg",
    alt: "Gato de espaldas junto a una silla, mirando hacia los edificios de enfrente a través de la red de protección",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
  gatoTumbadoPuerta: {
    archivo: "/fotos/gato-tumbado-puerta.jpg",
    alt: "Gato tumbado en el balcón, visto desde el salón a través de la puerta corredera con red de protección",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
  gatoMirandoArriba: {
    archivo: "/fotos/gato-mirando-arriba.jpg",
    alt: "Gato de perfil mirando hacia arriba, con los edificios y la red de protección al fondo",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
  gatoTumbadoPuerta2: {
    archivo: "/fotos/gato-tumbado-puerta-2.jpg",
    alt: "Gato tumbado en el balcón, visto desde dentro de casa junto a un carrito de plantas de colores",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
  gatoPrimerPlano: {
    archivo: "/fotos/gato-primer-plano-cara.jpg",
    alt: "Primer plano de la cara de un gato blanco mirando a cámara en un balcón con red de protección",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
  gatoEspaldaTejados: {
    archivo: "/fotos/gato-espalda-tejados.jpg",
    alt: "Gato de espaldas mirando hacia los tejados a través de la red de protección del balcón",
    encargo: "—",
    ancho: 1200,
    alto: 1600,
  },
} satisfies Record<string, Foto>;

export type NombreFoto = keyof typeof CATALOGO;

/** Se ensancha a `Foto` a propósito: el día que llegue un archivo nuevo,
 *  ningún componente tiene que cambiar de tipo. */
export const FOTOS: Record<NombreFoto, Foto> = CATALOGO;

export function foto(nombre: NombreFoto): Foto {
  return FOTOS[nombre];
}

/** Los trabajos de la parrilla, en el orden que se ven. Verticales:
 *  es el formato en el que Guedes hace las fotos con el móvil. Las dos del
 *  gato están intercaladas a propósito, no al final: rompen el ritmo
 *  estático de las fotos de obra sin agruparse en un bloque aparte. */
export const GALERIA: NombreFoto[] = [
  "obraCalle",
  "obraCiudad",
  "gatoTejado",
  "obraCelosia",
  "obraInterior",
  "gatoEquilibrio",
  "obraBloque",
  "obraToldo",
];

/** La única apaisada del lote: cierra la sección a todo el ancho. */
export const GALERIA_ANCHA: NombreFoto = "obraPared";

/**
 * El resto del reportaje del gato: mismo balcón, mismo bicho, ángulos
 * repetidos entre sí — por eso no compiten con `GALERIA` (que es un
 * trabajo por composición) y van en una tira aparte, más pequeña y más
 * densa, tipo hoja de contacto. Ver `<Trabajos>`.
 */
export const GATO_MOSAICO: NombreFoto[] = [
  "gatoCarrito",
  "gatoPerfilTejados1",
  "gatoPerfilTejados2",
  "gatoTumbadoPuerta",
  "gatoMirandoArriba",
  "gatoTumbadoPuerta2",
  "gatoPrimerPlano",
  "gatoEspaldaTejados",
];
