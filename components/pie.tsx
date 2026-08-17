import { Marca } from "@/components/marca";
import { EMPRESA, WHATSAPP, ZONAS } from "@/lib/datos";

export function Pie() {
  return (
    <footer className="malla malla-taller bg-fondo-taller pb-24 pt-14 text-tinta-taller md:pb-14">
      <div className="contenedor">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Marca invertida />
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-cal/60">
              Redes y mallas de protección para balcones, ventanas, terrazas y
              escaleras. {EMPRESA.anosExperiencia} años instalando, ahora en{" "}
              {EMPRESA.region}.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="tecnica text-cal/40">Contacto</p>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              <li>
                <a
                  href={`tel:${WHATSAPP.tel}`}
                  className="inline-block -my-2 py-2 transition-colors hover:text-minio-claro"
                >
                  {WHATSAPP.visible}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMPRESA.email}`}
                  className="inline-block -my-2 break-all py-2 transition-colors hover:text-minio-claro"
                >
                  {EMPRESA.email}
                </a>
              </li>
              <li className="text-cal/60">{EMPRESA.horario}</li>
              <li className="text-cal/60">
                {EMPRESA.direccion ?? EMPRESA.base}, {EMPRESA.region}
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="tecnica text-cal/40">Dónde instalamos</p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-cal/60">
              {ZONAS.slice(0, 10).join(" · ")} y toda la {EMPRESA.region}.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-hierro-borde)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="tecnica text-cal/40">
            © {new Date().getFullYear()} {EMPRESA.nombre}
          </p>
          <ul className="-my-2 flex gap-6">
            <li>
              <a
                href="/aviso-legal"
                className="tecnica inline-block py-2 text-cal/40 transition-colors hover:text-cal"
              >
                Aviso legal
              </a>
            </li>
            <li>
              <a
                href="/privacidad"
                className="tecnica inline-block py-2 text-cal/40 transition-colors hover:text-cal"
              >
                Privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
