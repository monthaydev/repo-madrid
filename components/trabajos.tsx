import { Encabezado } from "@/components/encabezado";
import { Foto } from "@/components/foto";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { GALERIA, GALERIA_ANCHA, GATO_MOSAICO } from "@/lib/fotos";

/**
 * La prueba. No hay testimonios (briefing: "no"), así que lo que convence
 * son los trabajos: fotos reales, en pisos reales de Madrid, con la vista
 * detrás de la malla.
 *
 * Sin pies de foto a la vista: el `alt` ya cuenta la escena para Google y
 * para un lector de pantalla, y en pantalla los rótulos sólo hacían ruido
 * alrededor de lo único que importa aquí, que es la obra.
 *
 * En móvil es una tira que se arrastra —cabe más obra en menos pantalla y
 * es el gesto natural del pulgar—; en escritorio, una parrilla tranquila.
 */
export function Trabajos() {
  return (
    <section
      id="trabajos"
      className="seccion border-b border-[var(--linea)] bg-superficie"
    >
      <div className="contenedor">
        <Encabezado
          etiqueta="Trabajos"
          titulo={<>Obra hecha, no render.</>}
          texto="Todas las fotos de esta web son instalaciones nuestras. Fíjate en lo que se ve detrás de la malla: eso es lo que se sigue viendo desde el salón."
          className="mb-10 md:mb-14"
        />
      </div>

      {/* La tira se sale del contenedor a propósito: en móvil arranca
          pegada al borde y se entiende que hay más a la derecha. */}
      <div className="entra overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-visible">
        <ul className="flex w-max gap-2 px-5 md:grid md:w-full md:grid-cols-3 md:gap-3 md:px-10">
          {GALERIA.map((nombre) => (
            <li
              key={nombre}
              className="relative aspect-[3/4] w-[64vw] shrink-0 overflow-hidden bg-superficie-2 sm:w-[38vw] md:w-auto"
            >
              <Foto
                nombre={nombre}
                sizes="(min-width: 768px) 31vw, 64vw"
                className="h-full w-full"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="contenedor mt-2 md:mt-3">
        <div className="entra relative aspect-[16/9] overflow-hidden bg-superficie-2">
          <Foto
            nombre={GALERIA_ANCHA}
            sizes="(min-width: 1440px) 1360px, 100vw"
            className="h-full w-full"
          />
        </div>

        {/* El reportaje entero del gato, aparte del trabajo: son ángulos
            repetidos del mismo balcón, así que van pequeños y densos, tipo
            hoja de contacto, en vez de competir por espacio con la obra de
            arriba. */}
        <div className="entra mt-10">
          <p className="tecnica text-tinta-3">
            Y el gato, tranquilo — misma visita, once fotos
          </p>
          <ul className="mt-4 grid grid-cols-4 gap-1.5 sm:grid-cols-6 md:grid-cols-8">
            {GATO_MOSAICO.map((nombre) => (
              <li
                key={nombre}
                className="relative aspect-square overflow-hidden bg-superficie-2"
              >
                <Foto
                  nombre={nombre}
                  sizes="(min-width: 768px) 12vw, 25vw"
                  className="h-full w-full"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="entra mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <BotonWhatsApp
            variante="linea"
            mensaje="Hola, he visto los trabajos en la web y quiero presupuesto para mi casa."
          >
            Quiero uno así
          </BotonWhatsApp>
          <p className="tecnica text-tinta-3">
            Mándanos una foto de tu balcón y te decimos qué hace falta
          </p>
        </div>
      </div>
    </section>
  );
}
