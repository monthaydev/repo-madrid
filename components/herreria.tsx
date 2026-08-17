import { Encabezado } from "@/components/encabezado";
import { Foto } from "@/components/foto";
import { BotonWhatsApp } from "@/components/boton-whatsapp";

/**
 * El único bloque invertido de la página.
 *
 * Es el diferencial real que dio el cliente en el briefing —"serralheria de
 * ferragem e estrutura"— y merece el cambio de luz: aquí se pasa del piso
 * al taller. Fondo hierro, malla en cal al 12%, y se vuelve.
 */
export function Herreria() {
  return (
    <section
      id="herreria"
      className="seccion malla malla-taller bg-fondo-taller text-tinta-taller"
    >
      <div className="contenedor grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <Encabezado
            invertido
            etiqueta="El diferencial"
            titulo={
              <>
                La diferencia está en lo que{" "}
                <span className="text-minio-claro">no es red</span>.
              </>
            }
            texto={
              <>
                <p>
                  Poner una malla es fácil cuando hay dónde agarrarla. El
                  problema aparece en el balcón sin marco, en el ático de vano
                  ancho o en la terraza donde el único apoyo es el suelo.
                </p>
                <p className="mt-4">
                  Ahí la mayoría improvisa con lo que encuentra en la ferretería.
                  Nosotros vamos al taller: bastidor de acero a medida,
                  soldadura, minio y anclajes fabricados para ese hueco. La red
                  aguanta lo que aguanta su estructura.
                </p>
              </>
            }
          />

          <div className="entra mt-9">
            <BotonWhatsApp
              variante="accion"
              mensaje="Hola, en mi balcón no hay dónde anclar la red. ¿Podéis fabricar la estructura metálica?"
            >
              Consultar mi caso
            </BotonWhatsApp>
          </div>
        </div>

        <div className="entra md:col-span-6">
          <div className="relative aspect-[7/5] overflow-hidden border border-[var(--color-hierro-borde)]">
            <Foto
              nombre="taller"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full"
            />
          </div>
          <p className="tecnica mt-3 text-cal/50">
            Taller propio · bastidor con minio antes de instalar
          </p>
        </div>
      </div>
    </section>
  );
}
