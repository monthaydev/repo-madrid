import { Encabezado } from "@/components/encabezado";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { ZONAS } from "@/lib/datos";

/**
 * Media página de SEO local en una sola lista: cada municipio es una
 * búsqueda real de alguien que quiere esto instalado esta semana.
 */
export function Zonas() {
  return (
    <section id="zonas" className="seccion border-b border-[var(--linea)]">
      <div className="contenedor">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Encabezado
            etiqueta="Zonas"
            titulo={<>Instalamos en toda la Comunidad de Madrid.</>}
            texto="El taller está en el Corredor del Henares, pero se instala en toda la Comunidad de Madrid."
            className="max-w-2xl"
          />
          <div className="entra shrink-0">
            <BotonWhatsApp
              variante="linea"
              mensaje="Hola, ¿instaláis redes de protección en mi zona? Estoy en "
            >
              Preguntar por mi zona
            </BotonWhatsApp>
          </div>
        </div>

        <ul className="entra mt-10 flex flex-wrap gap-x-2 gap-y-3 md:mt-12">
          {ZONAS.map((z) => (
            <li
              key={z}
              className="border border-[var(--linea)] px-3 py-2 text-[0.9375rem] text-tinta-2"
            >
              {z}
            </li>
          ))}
        </ul>
        <p className="tecnica entra mt-6 text-tinta-3">
          ¿No ves tu municipio? Escríbenos igualmente
        </p>
      </div>
    </section>
  );
}
