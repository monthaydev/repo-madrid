"use client";

import { useState } from "react";
import { IconoWhatsApp } from "@/components/boton-whatsapp";
import { enlaceWhatsApp } from "@/lib/datos";

const QUE = [
  "Un balcón",
  "Ventanas",
  "Una terraza o ático",
  "Escalera o hueco interior",
  "Protección para mi gato",
  "Todavía no lo sé",
];

const CUANDO = ["Esta semana", "La semana que viene", "Sin prisa, pido precio"];

/**
 * No hay servidor, no hay base de datos y no se guarda nada: el formulario
 * sólo redacta el mensaje de WhatsApp por el cliente.
 *
 * Es deliberado. Guedes contesta desde el móvil, y un lead que llega al
 * chat con la zona y el trabajo ya escritos se responde en un minuto.
 */
export function FormularioVisita() {
  const [zona, setZona] = useState("");
  const [que, setQue] = useState(QUE[0]);
  const [cuando, setCuando] = useState(CUANDO[0]);

  const mensaje = [
    "Hola, quiero pedir una visita técnica para poner redes de protección.",
    `Qué necesito: ${que.toLowerCase()}.`,
    zona.trim() ? `Zona: ${zona.trim()}.` : null,
    `Cuándo: ${cuando.toLowerCase()}.`,
  ]
    .filter(Boolean)
    .join("\n");

  const campo =
    "min-h-12 w-full rounded-[2px] border border-[var(--linea-fuerte)] bg-fondo px-3.5 py-2.5 text-[1rem] text-tinta transition-colors focus:border-minio";

  return (
    <form
      className="border border-[var(--linea-fuerte)] bg-superficie p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(enlaceWhatsApp(mensaje), "_blank", "noopener,noreferrer");
      }}
    >
      <p className="tecnica text-tinta-3">Escribe el mensaje por mí</p>

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor="que" className="mb-2 block text-[0.9375rem] font-semibold">
            ¿Qué hay que proteger?
          </label>
          <select
            id="que"
            value={que}
            onChange={(e) => setQue(e.target.value)}
            className={campo}
          >
            {QUE.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="zona" className="mb-2 block text-[0.9375rem] font-semibold">
            ¿En qué municipio o barrio?
          </label>
          <input
            id="zona"
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            placeholder="Alcalá de Henares, Torrejón, Madrid centro…"
            autoComplete="address-level2"
            className={campo}
          />
        </div>

        <div>
          <label htmlFor="cuando" className="mb-2 block text-[0.9375rem] font-semibold">
            ¿Para cuándo?
          </label>
          <select
            id="cuando"
            value={cuando}
            onChange={(e) => setCuando(e.target.value)}
            className={campo}
          >
            {CUANDO.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="boton boton-accion mt-7 w-full !px-3">
        <IconoWhatsApp className="h-[1.1em] w-[1.1em] shrink-0" />
        Enviar por WhatsApp
      </button>

      <p className="mt-4 text-[0.8125rem] leading-snug text-tinta-3">
        Se abre tu WhatsApp con el mensaje ya escrito. No se guarda ningún dato
        en esta web: sólo lo envías tú cuando pulsas enviar.
      </p>
    </form>
  );
}
