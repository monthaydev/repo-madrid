import { Encabezado } from "@/components/encabezado";
import { PROCESO } from "@/lib/datos";

/**
 * Aquí la numeración sí significa algo: es el orden real en que pasan las
 * cosas, y el cliente necesita saber en qué paso se mete cuando escribe.
 * (Por eso los servicios NO van numerados: no son una secuencia.)
 */
export function Proceso() {
  return (
    <section
      id="proceso"
      className="seccion-ancora malla malla-taller bg-fondo-taller text-tinta-taller"
    >
      <div className="contenedor">
        <Encabezado
          etiqueta="Cómo trabajamos"
          titulo={<>De tu mensaje a la red puesta.</>}
          texto="Cuatro pasos y ninguna sorpresa. Lo más habitual es que todo pase en la misma semana."
          invertido
          tamano="pequeno"
          className="mb-10 md:mb-12"
        />

        <ol className="grid gap-px border-t border-cal/25 md:grid-cols-4">
          {PROCESO.map((p) => (
            <li
              key={p.paso}
              className="entra border-b border-cal/15 py-7 md:border-b-0 md:border-r md:border-cal/15 md:pr-6 md:last:border-r-0"
            >
              <p className="tecnica text-minio-claro">{p.paso}</p>
              <h3 className="ancho-normal mt-4 text-[1.125rem] font-bold tracking-normal text-cal">
                {p.titulo}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-cal/70">
                {p.texto}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
