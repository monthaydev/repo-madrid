import Image from "next/image";
import { FOTOS, type NombreFoto } from "@/lib/fotos";

type Props = {
  nombre: NombreFoto;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Toda imagen del sitio pasa por aquí.
 *
 * Si el archivo todavía no existe, en vez de un roto o de una foto de
 * banco de imágenes, pinta el hueco con el encargo escrito: qué foto hay
 * que pedirle a Guedes. El sitio se puede enseñar así sin mentir.
 */
export function Foto({ nombre, className = "", sizes, priority }: Props) {
  const f = FOTOS[nombre];

  if (!f.archivo) {
    return (
      <div
        /* Sin retícula a propósito: la malla es del producto, no del hueco.
           Dibujarla aquí la duplicaba encima de <VistaConMalla>. */
        className={`relative flex items-end overflow-hidden bg-superficie-2 ${className}`}
        aria-hidden="true"
      >
        {/* pb generoso: en el hero, el control «ver la malla» se apoya en
            esta misma esquina y no puede pisar el texto del encargo */}
        <div className="relative w-full p-4 pb-16 sm:p-6 sm:pb-16">
          <p className="tecnica text-tinta-3">Foto pendiente</p>
          <p className="mt-2 max-w-sm text-[0.8125rem] leading-snug text-tinta-2">
            {f.encargo}
          </p>
        </div>
        <span className="absolute right-4 top-4 h-3 w-3 border-r border-t border-tinta-3" />
        <span className="absolute left-4 top-4 h-3 w-3 border-l border-t border-tinta-3" />
      </div>
    );
  }

  return (
    <Image
      src={f.archivo}
      alt={f.alt}
      width={f.ancho}
      height={f.alto}
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}

/** ¿Ya tenemos la foto? Lo usan los componentes que cambian de color
 *  de trazo según haya foto real debajo o el hueco claro. */
export function hayFoto(nombre: NombreFoto) {
  return FOTOS[nombre].archivo !== null;
}
