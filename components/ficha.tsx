import { Encabezado } from "@/components/encabezado";
import { DibujoTecnico } from "@/components/dibujo-tecnico";
import { FICHA_TECNICA } from "@/lib/datos";

export function Ficha() {
  return (
    <section id="ficha" className="seccion border-b border-[var(--linea)]">
      <div className="contenedor">
        <Encabezado
          etiqueta="La malla"
          titulo={<>Lo que se instala, con nombre y medida.</>}
          texto="Casi nadie publica esto. Nosotros sí, porque es la diferencia entre una red de protección y una malla de vivero."
          className="mb-12 md:mb-16"
        />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="entra md:col-span-5">
            <div className="border border-[var(--linea-fuerte)] bg-superficie p-6 md:p-8">
              <DibujoTecnico />
            </div>
            <p className="tecnica mt-3 text-tinta-3">
              Detalle de la retícula · escala libre
            </p>
          </div>

          <div className="md:col-span-7">
            <dl className="entra border-t border-[var(--linea-fuerte)]">
              {FICHA_TECNICA.map((f) => (
                <div
                  key={f.cota}
                  className="grid grid-cols-[8.5rem_1fr] items-baseline gap-4 border-b border-[var(--linea)] py-4 sm:grid-cols-[11rem_1fr]"
                >
                  <dt className="tecnica text-tinta-3">{f.cota}</dt>
                  <dd className="text-[1.0625rem] font-medium">{f.valor}</dd>
                </div>
              ))}
            </dl>

            <div className="entra mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-9 w-9 border border-[var(--linea-fuerte)] bg-white"
                />
                <span className="tecnica text-tinta-2">Blanca</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-9 w-9 border border-[var(--linea-fuerte)] bg-hierro"
                />
                <span className="tecnica text-tinta-2">Negra</span>
              </div>
              <p className="max-w-sm text-[0.9375rem] leading-snug text-tinta-2">
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
