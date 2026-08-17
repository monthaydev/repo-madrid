/**
 * FUENTE ÚNICA DE VERDAD del negocio.
 *
 * Ningún componente escribe un teléfono, un horario, un servicio o una
 * pregunta frecuente por su cuenta. Todo sale de aquí. Cambiar el WhatsApp
 * o el horario es tocar UN archivo, no doce.
 *
 * Lo que está marcado PENDIENTE viene del briefing sin rellenar.
 */

import type { NombreFoto } from "./fotos";

export const EMPRESA = {
  nombre: "Guedes Mallas de Protección",
  nombreCorto: "Guedes",
  descripcion:
    "Instalación de redes y mallas de protección para balcones, ventanas, terrazas y escaleras en Alcalá de Henares y toda la Comunidad de Madrid.",
  anosExperiencia: 4,
  anosGarantia: 3,
  base: "Alcalá de Henares",
  region: "Comunidad de Madrid",
  /** PENDIENTE: dirección exacta. El cliente dijo que sí quiere mostrarla. */
  direccion: null as string | null,
  codigoPostal: "28801",
  horario: "Todos los días, de 9:00 a 20:00",
  horarioSchema: "Mo-Su 09:00-20:00",
  email: "guedesmallasdeproteccion@gmail.com",
  /** PENDIENTE: Instagram / Facebook, si los hay. */
  redes: [] as { nombre: string; url: string }[],
  /** PENDIENTE: dominio definitivo antes de publicar. */
  sitio: "https://guedesmallas.es",
} as const;

export const WHATSAPP = {
  /** Formato internacional sin signos, tal como lo pide wa.me */
  numero: "34602527710",
  /** Cómo se muestra en pantalla */
  visible: "+34 602 527 710",
  /** Enlace tel: para el clic desde móvil */
  tel: "+34602527710",
} as const;

/**
 * Construye el enlace de WhatsApp con el mensaje ya escrito.
 * El cliente no tiene que redactar nada: abre el chat y pulsa enviar.
 */
export function enlaceWhatsApp(mensaje?: string) {
  const texto =
    mensaje ??
    "Hola, he visto la web y quiero presupuesto para redes de protección.";
  return `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(texto)}`;
}

/** Mensaje por defecto de los CTA principales */
export const MENSAJE_GENERAL =
  "Hola, he visto la web y quiero pedir una visita técnica para poner redes de protección. ¿Cuándo podéis pasar?";

export type Servicio = {
  id: string;
  titulo: string;
  descripcion: string;
  /** Lo que se manda por WhatsApp si el cliente pide este servicio */
  mensaje: string;
  /** Clave del manifiesto de fotos, nunca una ruta suelta */
  foto: NombreFoto;
};

export const SERVICIOS: Servicio[] = [
  {
    id: "balcones",
    titulo: "Balcones",
    descripcion:
      "Malla tensada de la barandilla al techo. Sin obra, sin picar la fachada y sin tocar la barandilla original.",
    mensaje:
      "Hola, quiero presupuesto para poner red de protección en el balcón.",
    foto: "balcon",
  },
  {
    id: "ventanas",
    titulo: "Ventanas",
    descripcion:
      "Protección fija o abatible según la ventana. Se sigue abriendo entera y se sigue limpiando por fuera.",
    mensaje: "Hola, quiero presupuesto para proteger las ventanas de casa.",
    foto: "ventana",
  },
  {
    id: "terrazas",
    titulo: "Terrazas y áticos",
    descripcion:
      "Vanos grandes, donde la malla sola se vence. Aquí entra el bastidor metálico para tensar sin flecha.",
    mensaje: "Hola, quiero presupuesto para cerrar una terraza con malla.",
    foto: "terraza",
  },
  {
    id: "escaleras",
    titulo: "Escaleras y huecos",
    descripcion:
      "El hueco interior de la escalera y el pasamanos, ajustado al perfil para que no quede holgura.",
    mensaje:
      "Hola, quiero presupuesto para proteger el hueco de la escalera de casa.",
    foto: "escalera",
  },
  {
    id: "mascotas",
    titulo: "Gatos y mascotas",
    descripcion:
      "La misma malla y la misma resistencia. Un gato mide todos los huecos de la casa antes que tú.",
    mensaje:
      "Hola, tengo gato y quiero presupuesto para proteger balcón y ventanas.",
    foto: "gato",
  },
  {
    id: "estructura",
    titulo: "Estructura metálica",
    descripcion:
      "Herrería propia. Cuando no hay dónde anclar, fabricamos el bastidor de acero a medida en el taller.",
    mensaje:
      "Hola, en mi balcón no hay dónde anclar. ¿Podéis fabricar la estructura?",
    foto: "estructura",
  },
];

/** La ficha técnica es la prueba. Números concretos, nada de adjetivos. */
export const FICHA_TECNICA = [
  { cota: "Material", valor: "Poliuretano de alta resistencia" },
  { cota: "Tratamiento", valor: "Protección UV" },
  { cota: "Luz de malla", valor: "5 × 5 cm" },
  { cota: "Hilos", valor: "28" },
  { cota: "Colores", valor: "Blanco y negro" },
  { cota: "Anclajes", valor: "Acero, fabricados en taller propio" },
  { cota: "Garantía", valor: "3 años, red e instalación" },
];

export const PROCESO = [
  {
    paso: "01",
    titulo: "Escribes por WhatsApp",
    texto:
      "Mándanos una foto del balcón o la ventana y la medida aproximada. Te contestamos el mismo día.",
  },
  {
    paso: "02",
    titulo: "Visita técnica gratuita",
    texto:
      "Vamos a tu casa, medimos y miramos dónde se puede anclar. La visita no se cobra y no compromete a nada.",
  },
  {
    paso: "03",
    titulo: "Presupuesto cerrado",
    texto:
      "Precio final por escrito, con material, estructura e instalación dentro. Lo que se firma es lo que se paga.",
  },
  {
    paso: "04",
    titulo: "Instalación",
    texto:
      "Normalmente en el mismo día. Se recoge todo al terminar y se prueba la tensión de la malla delante de ti.",
  },
];

/**
 * Zonas: esto es SEO local puro. Cada municipio es una búsqueda real
 * ("redes de proteccion torrejon de ardoz"). Orden: del taller hacia fuera.
 */
export const ZONAS = [
  "Alcalá de Henares",
  "Torrejón de Ardoz",
  "San Fernando de Henares",
  "Coslada",
  "Meco",
  "Camarma de Esteruelas",
  "Villalbilla",
  "Loeches",
  "Rivas-Vaciamadrid",
  "Arganda del Rey",
  "Madrid capital",
  "Alcobendas",
  "San Sebastián de los Reyes",
  "Getafe",
  "Leganés",
  "Móstoles",
  "Alcorcón",
  "Las Rozas",
  "Pozuelo de Alarcón",
  "Tres Cantos",
];

export const PREGUNTAS = [
  {
    p: "¿Hay que hacer obra o picar la fachada?",
    r: "No. La malla se tensa sobre anclajes que se fijan al marco, a la barandilla o a un bastidor que fabricamos nosotros. No se pica la fachada y, si algún día se retira, no queda daño a la vista.",
  },
  {
    p: "¿Necesito permiso de la comunidad de vecinos?",
    r: "En la mayoría de las comunidades no hace falta, porque la red es transparente y no cambia el aspecto del edificio. Si tu comunidad es estricta, el color negro es el que menos se nota desde la calle. En la visita técnica te decimos cuál te conviene.",
  },
  {
    p: "¿Se ve mucho? ¿Me va a tapar la vista?",
    r: "Es lo primero que pregunta todo el mundo. El hilo tiene menos de dos milímetros y la luz de malla es de 5 × 5 cm: desde dentro de casa dejas de verla en dos días. Es una red de protección, no una reja.",
  },
  {
    p: "¿Cuánto tarda la instalación?",
    r: "Un balcón o unas ventanas normales se hacen en el mismo día. Si hay que fabricar estructura metálica a medida, se suma el tiempo de taller y te lo decimos en el presupuesto, antes de empezar.",
  },
  {
    p: "¿Cuánto cuesta?",
    r: "Depende de los metros y, sobre todo, de si hay dónde anclar. Por eso no damos precios por teléfono a ciegas: vamos, medimos gratis y te damos un presupuesto cerrado. Sin sorpresas al terminar.",
  },
  {
    p: "¿Aguanta a un gato?",
    r: "Sí. Es la misma malla de poliuretano de 28 hilos que ponemos para niños, y la luz de 5 × 5 cm no deja pasar la cabeza. Lo importante con gatos es que no quede holgura en las esquinas, y eso es cuestión de cómo se tensa.",
  },
  {
    p: "¿Qué cubre la garantía de 3 años?",
    r: "La instalación y la durabilidad de la red. Si la malla se destensa, un anclaje cede o el material se degrada antes de tiempo, volvemos y lo arreglamos sin coste.",
  },
  {
    p: "¿Trabajáis fuera de Alcalá de Henares?",
    r: "Sí. El taller está en Alcalá, pero instalamos en toda la Comunidad de Madrid. Escríbenos con tu municipio y te confirmamos el día.",
  },
];
