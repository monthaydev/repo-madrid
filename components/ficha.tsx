import { Encabezado } from "@/components/encabezado";
import { DibujoTecnico } from "@/components/dibujo-tecnico";
import { FICHA_TECNICA } from "@/lib/datos";

/**
 * Segunda ancla oscura de la página (la primera es Herrería). Antes vivía
 * en el mismo fondo cal que casi todo el sitio — ficha técnica y prueba de
 * obra deberían leerse como dato duro, no como una sección más de venta.
 * `border-cal/…` hace de hairline aquí: `--linea`/`--linea-fuerte` están
 * teñidas de hierro y se vuelven invisibles sobre un fondo que ya es hierro.
 */
export function Ficha() {
  return (
    <section
      id="ficha"
      className="seccion-ancora malla malla-taller bg-fondo-taller text-tinta-taller"
    >
      <div className="contenedor">
        <Encabezado
          etiqueta="La malla"
          titulo={<>Lo que se instala, con nombre y medida.</>}
          texto="Casi nadie publica esto. Nosotros sí, porque es la diferencia entre una red de protección y una malla de vivero."
          invertido
          tamano="pequeno"
          className="mb-10 md:mb-12"
        />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="entra md:col-span-5">
            <div className="border border-cal/20 bg-hierro-2/20 p-6 md:p-8">
              <DibujoTecnico invertido />
            </div>
            <p className="tecnica mt-3 text-cal/50">
              Detalle de la retícula · escala libre
            </p>
          </div>

          <div className="md:col-span-7">
            <dl className="entra border-t border-cal/25">
              {FICHA_TECNICA.map((f) => (
                <div
                  key={f.cota}
                  className="grid grid-cols-[8.5rem_1fr] items-baseline gap-4 border-b border-cal/15 py-4 sm:grid-cols-[11rem_1fr]"
                >
                  <dt className="tecnica text-cal/50">{f.cota}</dt>
                  <dd className="text-[1.0625rem] font-medium text-cal">{f.valor}</dd>
                </div>
              ))}
            </dl>

            <div className="entra mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-9 w-9 border border-cal/25 bg-cal" />
                <span className="tecnica text-cal/70">Blanca</span>
              </div>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-9 w-9 border border-cal/40 bg-hierro" />
                <span className="tecnica text-cal/70">Negra</span>
              </div>
              <p className="max-w-sm text-[0.9375rem] leading-snug text-cal/70">
                La blanca desaparece contra el cielo. La negra desaparece
                contra la fachada y desde la calle. En la visita te decimos
                cuál va mejor con tu edificio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
