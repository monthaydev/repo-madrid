"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Marca } from "@/components/marca";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { WHATSAPP } from "@/lib/datos";

const ENLACES = [
  { href: "#servicios", texto: "Servicios" },
  { href: "#ficha", texto: "La malla" },
  { href: "#proceso", texto: "Cómo trabajamos" },
  { href: "#zonas", texto: "Zonas" },
  { href: "#preguntas", texto: "Preguntas" },
];

export function Cabecera() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--linea)] bg-fondo">
      <div className="contenedor flex h-18 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="py-2"
          aria-label="Guedes Mallas de Protección, ir al inicio"
        >
          <Marca />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {ENLACES.map((e) => (
              <li key={e.href}>
                <a
                  href={e.href}
                  className="text-[0.9375rem] font-medium text-tinta-2 transition-colors hover:text-tinta"
                >
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${WHATSAPP.tel}`}
            className="tecnica hidden items-center gap-2 text-tinta transition-colors hover:text-minio sm:flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {WHATSAPP.visible}
          </a>
          <BotonWhatsApp
            variante="hierro"
            className="hidden !min-h-11 !px-4 !text-[0.8125rem] md:inline-flex"
          >
            Pedir visita
          </BotonWhatsApp>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="-mr-2 grid h-11 w-11 place-items-center lg:hidden"
          >
            {abierto ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {abierto && (
        <nav
          id="menu-movil"
          aria-label="Menú"
          className="border-t border-[var(--linea)] bg-fondo lg:hidden"
        >
          <ul className="contenedor py-2">
            {ENLACES.map((e) => (
              <li key={e.href} className="border-b border-[var(--linea)] last:border-0">
                <a
                  href={e.href}
                  onClick={() => setAbierto(false)}
                  className="flex min-h-14 items-center text-[1.0625rem] font-medium"
                >
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
