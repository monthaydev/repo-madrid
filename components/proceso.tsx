import { Encabezado } from "@/components/encabezado";
import { PROCESO } from "@/lib/datos";

/**
 * Aquí la numeración sí significa algo: es el orden real en que pasan las
 * cosas, y el cliente necesita saber en qué paso se mete cuando escribe.
 * (Por eso los servicios NO van numerados: no son una secuencia.)
 */
export function Proceso() {
  return (
    <section id="proceso" className="seccion border-b border-[var(--linea)] bg-superficie">
      <div className="contenedor">
        <Encabezado
          etiqueta="Cómo trabajamos"
          titulo={<>De tu mensaje a la red puesta.</>}
          texto="Cuatro pasos y ninguna sorpresa. Lo más habitual es que todo pase en la misma semana."
          className="mb-12 md:mb-16"
        />

        <ol className="grid gap-px border-t border-[var(--linea-fuerte)] md:grid-cols-4">
          {PROCESO.map((p) => (
            <li
              key={p.paso}
              className="entra border-b border-[var(--linea)] py-7 md:border-b-0 md:border-r md:pr-6 md:last:border-r-0"
            >
              <p className="tecnica text-minio">{p.paso}</p>
              <h3 className="ancho-normal mt-4 text-[1.125rem] font-bold tracking-normal">
                {p.titulo}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-tinta-2">
                {p.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
