/**
 * LA FIRMA DEL SITIO — foto real de un trabajo, anotada como un plano.
 *
 * Antes de tener fotos, aquí había una malla sintética dibujada encima de
 * un hueco, con un control para subirle la opacidad. Con las fotos reales
 * eso pasó a ser mentira: **la red ya está en la foto**. Dibujar una malla
 * falsa sobre una verdadera sólo podía quedar mal y desalineado.
 *
 * Lo que queda es más honesto y más nuestro: una llamada de plano —rombo,
 * línea de referencia y cota— señalando la malla que de verdad está ahí.
 * Es el mismo lenguaje del dibujo técnico de la ficha.
 *
 * Componente de servidor: cero JS en el elemento más pesado del hero.
 */

type Props = {
  children: React.ReactNode;
  /** Dónde cae la llamada, en % del encuadre. Se ajusta por foto. */
  marca?: { x: number; y: number };
  /** Hacia qué lado sale la línea de referencia */
  lado?: "izquierda" | "derecha";
  className?: string;
};

export function VistaAnotada({
  children,
  marca = { x: 62, y: 40 },
  lado = "derecha",
  className = "",
}: Props) {
  const haciaDerecha = lado === "derecha";
  const finX = haciaDerecha ? marca.x + 16 : marca.x - 16;
  const textoX = haciaDerecha ? finX + 1.5 : finX - 1.5;

  return (
    <figure className={`relative m-0 overflow-hidden bg-superficie-2 ${className}`}>
      {children}

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {/* el rombo de la llamada: un módulo de malla, a escala del plano */}
        <g
          stroke="#e4714f"
          strokeWidth={1}
          fill="none"
          vectorEffect="non-scaling-stroke"
        >
          <path
            d={`M${marca.x} ${marca.y - 4.2} L${marca.x + 4.2} ${marca.y} L${marca.x} ${marca.y + 4.2} L${marca.x - 4.2} ${marca.y} Z`}
          />
          <line
            x1={haciaDerecha ? marca.x + 4.2 : marca.x - 4.2}
            y1={marca.y}
            x2={finX}
            y2={marca.y}
          />
        </g>
      </svg>

      {/* La cota va en HTML, no en SVG: así no se deforma con el encuadre
          y se lee igual en móvil. */}
      <span
        aria-hidden="true"
        className="tecnica pointer-events-none absolute -translate-y-1/2 whitespace-nowrap rounded-[2px] bg-hierro/85 px-2 py-1 text-cal"
        /* El `min()` es lo que evita que la cota se salga por la derecha
           en móvil, donde el encuadre es mucho más estrecho. La reserva
           (13.5rem) se midió contra el ancho real de la etiqueta —no es
           un número redondo—: a 320px de viewport (iPhone SE) el hueco
           anterior de 11.5rem dejaba la "S" de "hilos" recortada 7,5px
           fuera del marco. */
        style={{
          left: haciaDerecha
            ? `min(${textoX}%, calc(100% - 13.5rem))`
            : undefined,
          right: haciaDerecha ? undefined : `${100 - textoX}%`,
          top: `${marca.y}%`,
        }}
      >
        5 × 5 cm · 28 hilos
      </span>
    </figure>
  );
}
