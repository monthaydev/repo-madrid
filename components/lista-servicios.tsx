"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, MQ_ESCRITORIO_MOVIMIENTO } from "@/lib/gsap";
import { enlaceWhatsApp, type Servicio } from "@/lib/datos";

type Props = {
  servicios: Servicio[];
  /** Las fotos ya renderizadas en el servidor, en el mismo orden.
   *  `null` = ese servicio todavía no tiene foto real. */
  previsualizaciones: (React.ReactNode | null)[];
};

/**
 * Lista tipográfica de servicios. En escritorio, la foto del trabajo sigue
 * al puntero mientras se recorre la lista.
 *
 * Reglas de la casa respetadas aquí:
 *  - el seguimiento del puntero escribe en el DOM por `ref` (quickTo),
 *    nunca `setState` a 60 fps;
 *  - todo va dentro de `matchMedia`, así que en móvil y con reduced-motion
 *    ni siquiera se registran los listeners;
 *  - no hay ningún bucle: sin puntero encima, nada se mueve.
 */
export function ListaServicios({ servicios, previsualizaciones }: Props) {
  const raiz = useRef<HTMLUListElement>(null);
  const visor = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MQ_ESCRITORIO_MOVIMIENTO, () => {
        const caja = visor.current;
        const filas = gsap.utils.toArray<HTMLElement>("[data-fila]");
        if (!caja || !filas.length) return;

        const laminas = gsap.utils.toArray<HTMLElement>("[data-lamina]", caja);
        const moverX = gsap.quickTo(caja, "x", { duration: 0.5, ease: "power3" });
        const moverY = gsap.quickTo(caja, "y", { duration: 0.5, ease: "power3" });

        const alPuntero = (e: PointerEvent) => {
          moverX(e.clientX + 28);
          moverY(e.clientY - 120);
        };

        const entrar = (indice: number) => {
          /* Escaleras y mascotas todavía no tienen foto real. Antes que
             enseñar un hueco de maqueta al pasar el ratón, no se enseña
             nada: el visor sólo aparece si hay obra que enseñar. */
          const hayLamina = laminas[indice]?.dataset.vacia !== "si";
          gsap.to(caja, { autoAlpha: hayLamina ? 1 : 0, duration: 0.25 });
          if (!hayLamina) return;

          laminas.forEach((l, i) =>
            gsap.to(l, { autoAlpha: i === indice ? 1 : 0, duration: 0.25 }),
          );
          window.addEventListener("pointermove", alPuntero);
        };

        const salir = () => {
          gsap.to(caja, { autoAlpha: 0, duration: 0.2 });
          window.removeEventListener("pointermove", alPuntero);
        };

        const limpiadores = filas.map((fila, i) => {
          const onEnter = () => entrar(i);
          fila.addEventListener("pointerenter", onEnter);
          fila.addEventListener("pointerleave", salir);
          return () => {
            fila.removeEventListener("pointerenter", onEnter);
            fila.removeEventListener("pointerleave", salir);
          };
        });

        gsap.set(caja, { autoAlpha: 0 });

        return () => {
          window.removeEventListener("pointermove", alPuntero);
          limpiadores.forEach((f) => f());
        };
      });

      return () => mm.revert();
    },
    { scope: raiz },
  );

  return (
    <>
      <ul ref={raiz} className="border-t border-[var(--linea-fuerte)]">
        {servicios.map((s, i) => (
          <li key={s.id} data-fila className="entra group border-b border-[var(--linea)]">
            <a
              href={enlaceWhatsApp(s.mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-1 items-baseline gap-x-8 gap-y-2 py-7 transition-colors md:grid-cols-12 md:py-9"
            >
              {/* En móvil no hay hover, así que la foto del visor nunca se
                  ve — y ahora hay obra real para 4 de los 6 servicios. La
                  miniatura reusa el mismo nodo del visor de escritorio, sin
                  pedir imagen nueva; `md:contents` la deja fuera del grid
                  de 12 columnas en escritorio sin tocar ese layout. */}
              <div className="flex items-center gap-4 md:contents">
                {previsualizaciones[i] && (
                  <div className="h-14 w-14 shrink-0 overflow-hidden bg-superficie-2 md:hidden">
                    {previsualizaciones[i]}
                  </div>
                )}
                <h3 className="ancho-chapa text-[clamp(1.6rem,3.4vw,2.6rem)] transition-colors group-hover:text-minio md:col-span-5">
                  {s.titulo}
                </h3>
              </div>
              <p className="max-w-xl text-tinta-2 md:col-span-6">
                {s.descripcion}
              </p>
              <span className="tecnica flex items-center gap-1 text-tinta-3 transition-colors group-hover:text-minio md:col-span-1 md:justify-end">
                Pedir
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Visor del puntero. Fuera del flujo, sólo escritorio. */}
      <div
        ref={visor}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-64 w-48 md:block"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        {previsualizaciones.map((p, i) => (
          <div
            key={i}
            data-lamina
            data-vacia={p ? undefined : "si"}
            className="absolute inset-0 overflow-hidden bg-superficie-2"
            style={{ opacity: 0 }}
          >
            {p}
          </div>
        ))}
      </div>
    </>
  );
}
