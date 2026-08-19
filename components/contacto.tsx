import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Encabezado } from "@/components/encabezado";
import { FormularioVisita } from "@/components/formulario-visita";
import { EMPRESA, WHATSAPP } from "@/lib/datos";

export function Contacto() {
  const datos = [
    {
      icono: Phone,
      etiqueta: "WhatsApp",
      valor: WHATSAPP.visible,
      href: `tel:${WHATSAPP.tel}`,
    },
    {
      icono: Mail,
      etiqueta: "Correo",
      valor: EMPRESA.email,
      href: `mailto:${EMPRESA.email}`,
    },
    { icono: Clock, etiqueta: "Horario", valor: EMPRESA.horario },
    {
      icono: MapPin,
      etiqueta: "Zona",
      valor: EMPRESA.direccion ?? EMPRESA.region,
    },
  ];

  return (
    <section id="contacto" className="seccion border-b border-[var(--linea)]">
      <div className="contenedor grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="min-w-0 md:col-span-6">
          <Encabezado
            etiqueta="Visita técnica"
            titulo={
              <>
                Vamos, medimos
                <br />y te decimos el precio.
              </>
            }
            texto="La visita es gratuita y no compromete a nada. Vamos con la furgoneta, miramos dónde se puede anclar y te damos el presupuesto cerrado por escrito."
          />

          <dl className="entra mt-10 border-t border-[var(--linea-fuerte)]">
            {datos.map(({ icono: Icono, etiqueta, valor, href }) => (
              <div
                key={etiqueta}
                className="flex min-w-0 items-center gap-3 border-b border-[var(--linea)] py-4 sm:gap-4"
              >
                <Icono
                  className="h-4 w-4 shrink-0 text-tinta-3"
                  aria-hidden="true"
                />
                <dt className="tecnica w-24 shrink-0 text-tinta-3 sm:w-36">
                  {etiqueta}
                </dt>
                <dd className="min-w-0 break-words text-[0.9375rem] font-medium sm:text-[1.0625rem]">
                  {href ? (
                    <a
                      href={href}
                      /* `break-all` va en el propio <a>, no sólo en el <dd>
                         padre: un correo sin espacios dentro de un
                         `inline-block` ignora `overflow-wrap` heredado al
                         calcular su ancho mínimo (así lo pide la spec de
                         CSS Text) y empuja la página entera de lado. */
                      className="inline-block max-w-full -my-2 break-all py-2 transition-colors hover:text-minio"
                    >
                      {valor}
                    </a>
                  ) : (
                    valor
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="entra min-w-0 md:col-span-6">
          <FormularioVisita />
        </div>
      </div>
    </section>
  );
}
