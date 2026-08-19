import { ArrowUpRight } from "lucide-react";
import { enlaceWhatsApp, type Servicio } from "@/lib/datos";

type Props = {
  servicios: Servicio[];
  /** Las fotos ya renderizadas en el servidor, en el mismo orden.
   *  `null` = ese servicio todavía no tiene foto real. */
  previsualizaciones: (React.ReactNode | null)[];
};

/**
 * Lista tipográfica de servicios, con miniatura real cuando hay obra.
 *
 * Antes había un visor que seguía el puntero en escritorio (heredado del
 * ZP Studio, donde tiene sentido porque la foto ES el producto). Aquí no:
 * quien busca esto tiene prisa, y el visor sólo aparecía si el ratón
 * acertaba la fila exacta — el escritorio veía MENOS obra que el móvil.
 * Además `position: fixed` + seguimiento por `pointermove` se quedaba
 * congelado en mitad de la pantalla si el visitante recorría la sección
 * con la rueda del ratón en vez de mover el cursor: la rueda no dispara
 * `pointermove` ni `pointerleave`, así que el visor nunca se enteraba de
 * que había salido de la fila. Mejor mostrar la miniatura siempre.
 */
export function ListaServicios({ servicios, previsualizaciones }: Props) {
  return (
    <ul className="border-t border-[var(--linea-fuerte)]">
      {servicios.map((s, i) => {
        const foto = previsualizaciones[i];
        return (
          <li key={s.id} data-fila className="entra group border-b border-[var(--linea)]">
            <a
              href={enlaceWhatsApp(s.mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-1 items-center gap-x-6 gap-y-3 py-7 transition-colors md:grid-cols-12 md:py-9"
            >
              {/* La miniatura reserva su propia columna en escritorio; sin
                  foto, el título simplemente ocupa ese ancho también, para
                  que la descripción y "Pedir" caigan siempre en la misma
                  columna, tenga foto la fila o no. */}
              <div className="flex items-center gap-4 md:contents">
                {foto && (
                  <div className="h-20 w-20 shrink-0 overflow-hidden bg-superficie-2 md:col-span-2 md:h-28 md:w-28">
                    {foto}
                  </div>
                )}
                <h3
                  className={`ancho-chapa text-[clamp(1.6rem,3.4vw,2.6rem)] transition-colors group-hover:text-minio ${
                    foto ? "md:col-span-3" : "md:col-span-5"
                  }`}
                >
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
        );
      })}
    </ul>
  );
}
