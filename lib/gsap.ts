/**
 * ÚNICO punto de entrada de GSAP. Nunca importes de "gsap" directamente:
 * aquí es donde los plugins se registran una sola vez y donde viven los
 * eases y las media queries de la casa.
 */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * ScrollTrigger NO se importa aquí a propósito.
 *
 * Hoy la página no tiene ningún momento de scrub ni de pin: los reveals los
 * hace un IntersectionObserver (ver <Revelados>) y el plano técnico se traza
 * con CSS. Cargar el plugin para todo el mundo serían ~30 kB de JS que nadie
 * usa, en una página cuyo objetivo declarado es posicionar en Google.
 *
 * Cuando aparezca el primer momento de scroll de verdad, se importa aquí y
 * se registra abajo — no en el componente.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);

  /**
   * Eases del proyecto. Esto es hierro y obra: nada rebota.
   * - `asienta`: la pieza baja y se queda. Reveals y entradas.
   * - `tensa`:   arranca despacio y termina firme. La malla al tensarse.
   */
  gsap.registerEase("asienta", (p) => 1 - Math.pow(1 - p, 3));
  gsap.registerEase("tensa", (p) =>
    p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2,
  );

  gsap.defaults({ ease: "asienta", duration: 0.7 });
}

/** Todo lo caro pasa por aquí. Nombres, no strings sueltos. */
export const MQ_MOVIMIENTO = "(prefers-reduced-motion: no-preference)";
export const MQ_ESCRITORIO = "(min-width: 768px)";
export const MQ_ESCRITORIO_MOVIMIENTO =
  "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

export { gsap, useGSAP };
