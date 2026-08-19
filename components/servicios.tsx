import { Encabezado } from "@/components/encabezado";
import { Foto, hayFoto } from "@/components/foto";
import { ListaServicios } from "@/components/lista-servicios";
import { SERVICIOS } from "@/lib/datos";

export function Servicios() {
  return (
    <section id="servicios" className="seccion border-b border-[var(--linea)]">
      <div className="contenedor">
        <Encabezado
          etiqueta="Servicios"
          titulo={<>Dónde se pone una red.</>}
          texto="Todo lo de abajo se instala con el mismo material y la misma garantía. Lo que cambia es el anclaje: eso es lo que se mira en la visita."
          className="mb-12 md:mb-16"
        />
        <ListaServicios
          servicios={SERVICIOS}
          previsualizaciones={SERVICIOS.map((s) =>
            hayFoto(s.foto) ? (
              <Foto
                key={s.id}
                nombre={s.foto}
                sizes="(min-width: 768px) 112px, 80px"
                className="h-full w-full"
              />
            ) : null,
          )}
        />
      </div>
    </section>
  );
}
