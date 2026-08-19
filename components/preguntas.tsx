import { Plus } from "lucide-react";
import { Encabezado } from "@/components/encabezado";
import { PREGUNTAS } from "@/lib/datos";

/**
 * Acordeón nativo (<details>): funciona sin JS, es accesible de serie y
 * Google lo lee entero. Las mismas preguntas van en el FAQPage del layout.
 */
/** Una columna de la mitad de las preguntas. Cada mitad lleva su propio
 *  filete superior: son dos listas, no una que se corta a la mitad. */
function Columna({ preguntas }: { preguntas: typeof PREGUNTAS }) {
  return (
    <div className="border-t border-[var(--linea-fuerte)]">
      {preguntas.map(({ p, r }) => (
        <details key={p} className="group border-b border-[var(--linea)]">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[1.0625rem] font-semibold leading-snug transition-colors hover:text-minio [&::-webkit-details-marker]:hidden">
            {p}
            <Plus
              aria-hidden="true"
              className="mt-1 h-4 w-4 shrink-0 text-tinta-3 transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="max-w-2xl pb-6 pr-6 text-[0.9375rem] leading-relaxed text-tinta-2">
            {r}
          </p>
        </details>
      ))}
    </div>
  );
}

export function Preguntas() {
  const mitad = Math.ceil(PREGUNTAS.length / 2);
  const primera = PREGUNTAS.slice(0, mitad);
  const segunda = PREGUNTAS.slice(mitad);

  return (
    <section id="preguntas" className="seccion border-b border-[var(--linea)]">
      <div className="contenedor">
        <Encabezado
          etiqueta="Preguntas"
          titulo={<>Lo que todo el mundo pregunta.</>}
          texto="Si falta la tuya, mándala por WhatsApp: se contesta el mismo día."
          className="mb-12 max-w-2xl md:mb-16"
        />

        <div className="entra grid gap-x-12 lg:grid-cols-2">
          <Columna preguntas={primera} />
          <Columna preguntas={segunda} />
        </div>
      </div>
    </section>
  );
}
