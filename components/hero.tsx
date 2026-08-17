import { ArrowDown } from "lucide-react";
import { Foto } from "@/components/foto";
import { VistaAnotada } from "@/components/vista-anotada";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { EMPRESA, MENSAJE_GENERAL } from "@/lib/datos";

/** Los cuatro datos que deciden la llamada. Nada de "calidad" ni "confianza". */
const DATOS = [
  { dato: "4 años", pie: "instalando redes" },
  { dato: "3 años", pie: "de garantía" },
  { dato: "Taller propio", pie: "de herrería" },
  { dato: "9 – 20 h", pie: "todos los días" },
];

export function Hero() {
  return (
    <section id="inicio" className="border-b border-[var(--linea)]">
      <div className="contenedor pt-10 pb-14 md:pt-16 md:pb-20">
        <p className="tecnica flex flex-wrap items-center gap-x-3 gap-y-1 text-tinta-3">
          <span className="text-minio">Redes de protección</span>
          <span aria-hidden="true">/</span>
          <span>{EMPRESA.base}</span>
          <span aria-hidden="true">/</span>
          <span>Toda la Comunidad de Madrid</span>
        </p>

        {/* Quiebres a mano: el titular tiene que caer siempre en tres
            líneas, en móvil y en escritorio. Nada de reflow al azar. */}
        <h1 className="ancho-chapa mt-6 text-[clamp(2.5rem,7.6vw,6.25rem)]">
          No te tapa
          <br />
          la vista.
          <br />
          <span className="text-minio">No le quita ojo.</span>
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="max-w-md text-[1.0625rem] leading-relaxed text-tinta-2 md:text-lg">
              Malla de poliuretano de 5 × 5 cm para balcones, ventanas,
              terrazas y escaleras. Se instala en el día, sin picar la fachada,
              y lleva {EMPRESA.anosGarantia} años de garantía.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <BotonWhatsApp mensaje={MENSAJE_GENERAL}>
                Pedir visita técnica
              </BotonWhatsApp>
              <a href="#ficha" className="boton boton-linea">
                Ver la malla
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <p className="tecnica mt-4 text-tinta-3">
              Gratuita y sin compromiso
            </p>
          </div>

          <div className="md:col-span-7">
            <VistaAnotada
              className="aspect-[4/3]"
              marca={{ x: 44, y: 46 }}
            >
              <Foto
                nombre="hero"
                priority
                sizes="(min-width: 768px) 58vw, 100vw"
                className="h-full w-full"
              />
            </VistaAnotada>
            <p className="tecnica mt-3 text-tinta-3">
              Trabajo terminado · ático en {EMPRESA.base} · malla blanca
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--linea)] bg-superficie">
        <dl className="contenedor grid grid-cols-2 md:grid-cols-4">
          {DATOS.map((d, i) => (
            <div
              key={d.dato}
              className={[
                "py-6 md:py-7 md:border-t-0",
                i % 2 === 1 && "border-l border-[var(--linea)] pl-5",
                i >= 2 && "border-t border-[var(--linea)]",
                i > 0 && "md:border-l md:border-[var(--linea)] md:pl-7",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <dt className="ancho-chapa text-[1.375rem] font-extrabold uppercase leading-none md:text-[1.75rem]">
                {d.dato}
              </dt>
              <dd className="tecnica mt-2 text-tinta-3">{d.pie}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
