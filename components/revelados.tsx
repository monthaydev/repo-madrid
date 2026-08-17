"use client";

import { useEffect } from "react";

/**
 * Una sola isla de cliente para todos los reveals de la página.
 *
 * Deliberadamente NO usa GSAP ni ScrollTrigger: aquí no hay scrub, ni pin,
 * ni timeline — sólo "aparece cuando llegas". Un IntersectionObserver hace
 * eso de forma más barata y, sobre todo, más previsible: dispara igual para
 * lo que ya está en pantalla al cargar, cosa que en un `batch` depende del
 * refresh y ya nos dejó media página invisible.
 *
 * Tres seguros, porque texto invisible es peor que texto sin animar:
 *  1. el estado oculto sólo existe si esta clase llega al <html>;
 *  2. con `prefers-reduced-motion` no se esconde nada;
 *  3. si algo falla, a los 3 s se revela todo igualmente.
 */
export function Revelados() {
  useEffect(() => {
    const raiz = document.documentElement;

    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducido) return;

    const objetivos = Array.from(document.querySelectorAll<HTMLElement>(".entra"));
    if (!objetivos.length) return;

    raiz.classList.add("js-reveal");

    const revelar = (el: HTMLElement, retraso = 0) => {
      el.style.transitionDelay = retraso ? `${retraso}ms` : "";
      el.classList.add("visible");
    };

    const observador = new IntersectionObserver(
      (entradas, obs) => {
        entradas
          .filter((e) => e.isIntersecting)
          .forEach((e, i) => {
            revelar(e.target as HTMLElement, i * 70);
            obs.unobserve(e.target);
          });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    objetivos.forEach((el) => observador.observe(el));

    /* Seguro: lo que a los 3 s siga oculto estando ya en pantalla, se
       revela a mano. Lo que aún está más abajo sigue esperando su turno. */
    const seguro = window.setTimeout(() => {
      objetivos
        .filter((el) => !el.classList.contains("visible"))
        .filter((el) => el.getBoundingClientRect().top < window.innerHeight)
        .forEach((el) => {
          revelar(el);
          observador.unobserve(el);
        });
    }, 3000);

    return () => {
      window.clearTimeout(seguro);
      observador.disconnect();
      raiz.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
