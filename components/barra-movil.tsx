import { Phone } from "lucide-react";
import { BotonWhatsApp } from "@/components/boton-whatsapp";
import { MENSAJE_GENERAL, WHATSAPP } from "@/lib/datos";

/**
 * En móvil el CTA no puede depender de que el visitante vuelva arriba.
 * Barra fija abajo, dos acciones, alturas de toque de 48px.
 */
export function BarraMovil() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--linea-fuerte)] bg-fondo/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 md:hidden">
      <div className="flex gap-2">
        <BotonWhatsApp mensaje={MENSAJE_GENERAL} className="flex-1 !px-3">
          Pedir visita
        </BotonWhatsApp>
        <a
          href={`tel:${WHATSAPP.tel}`}
          className="boton boton-linea !px-4"
          aria-label={`Llamar al ${WHATSAPP.visible}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
