import { Encabezado } from "@/components/encabezado";

/** Lo que cambia el día después. En presente y en primera persona: no son
 *  "beneficios", son escenas de la casa. */
const CAMBIOS = [
  "Abres la ventana entera sin pensarlo dos veces.",
  "El gato sale al balcón y no pasa nada.",
  "Los niños juegan fuera y tú estás dentro.",
  "Dejas a los abuelos con los peques sin dar instrucciones.",
];

export function PorQue() {
  return (
    <section className="seccion malla border-b border-[var(--linea)] bg-superficie">
      <div className="contenedor grid gap-12 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-6">
          <Encabezado
            etiqueta="Por qué"
            titulo={<>Nadie pone la red después.</>}
            texto={
              <>
                <p>
                  En Madrid los balcones son bajos, los barrotes van separados
                  y las ventanas se abren enteras. Un niño que acaba de
                  empezar a andar y un gato que salta miden ese hueco mucho
                  antes que tú.
                </p>
                <p className="mt-4">
                  La red se pone una vez, deja de notarse en dos días y ya
                  está. No hay que acordarse de ella, no hay que cerrar nada y
                  no hay que vigilar la ventana desde la cocina.
                </p>
              </>
            }
          />
        </div>

        <div className="md:col-span-5 md:col-start-8 md:pt-16">
          <ul className="entra border-t border-[var(--linea-fuerte)]">
            {CAMBIOS.map((c) => (
              <li
                key={c}
                className="border-b border-[var(--linea)] py-4 text-[1.0625rem] leading-snug"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="tecnica entra mt-5 text-tinta-3">
            Eso es lo que se compra
          </p>
        </div>
      </div>
    </section>
  );
}
