/**
 * La malla dibujada como plano de taller.
 *
 * **Es un rombo, no un cuadrado recto.** Las fotos de los trabajos reales
 * enseñan la retícula montada a 45°: sigue siendo un cuadrado de 5 cm de
 * lado, pero se ve en rombo. El plano dibuja lo que el cliente va a ver en
 * su balcón, no lo que dice el catálogo del fabricante.
 *
 * Composición de plano: el paño a la izquierda y, a la derecha, el
 * DETALLE de un módulo con sus dos cotas. Meter las cotas dentro del paño
 * las escondía entre los hilos.
 *
 * Sin JS ni animación: componente de servidor. El trazado es CSS puro,
 * disparado por la clase `.visible` que pone el observador de <Revelados>.
 * Así el plano NUNCA depende de que una animación llegue a ejecutarse.
 *
 * `invertido`: para cuando el plano vive sobre fondo hierro (anclaje
 * oscuro). Nunca usa `text-minio`/`fill-minio` en ese caso — es el mismo
 * motivo por el que `herreria.tsx` usa `minio-claro`: el minio pleno pierde
 * contraste AA sobre hierro. Ver la tabla de contraste en CLAUDE.md.
 */

/* --- el paño --- */
const CENTRO = { x: 100, y: 140 };
const LADO = 38;
const RADIO = 4;
const P = LADO * Math.SQRT1_2;

const nodo = (i: number, j: number) => ({
  x: CENTRO.x + (i + j) * P,
  y: CENTRO.y + (i - j) * P,
});

/* --- el detalle: un módulo, al doble de escala --- */
const D = { x: 288, y: 138 };
const SEMI = 52;
const N = { x: D.x, y: D.y - SEMI };
const E = { x: D.x + SEMI, y: D.y };
const S = { x: D.x, y: D.y + SEMI };
const O = { x: D.x - SEMI, y: D.y };

const r = (n: number) => Math.round(n * 100) / 100;
const punto = (p: { x: number; y: number }) => `${r(p.x)} ${r(p.y)}`;

/** desplaza un punto en diagonal (para sacar la cota fuera del rombo) */
const fuera = (p: { x: number; y: number }, d: number) => ({
  x: p.x - d * Math.SQRT1_2,
  y: p.y - d * Math.SQRT1_2,
});

type Props = {
  invertido?: boolean;
};

export function DibujoTecnico({ invertido = false }: Props) {
  const base = invertido ? "text-cal" : "text-hierro";
  const suave = invertido ? "text-cal/60" : "text-tinta-3";
  const acento = invertido ? "text-minio-claro" : "text-minio";
  const acentoFill = invertido ? "fill-minio-claro" : "fill-minio";
  const baseFill = invertido ? "fill-cal" : "fill-hierro";

  const hilos: { d: string; i: number }[] = [];
  let orden = 0;
  for (let k = -RADIO; k <= RADIO; k++) {
    const a = nodo(-RADIO, k);
    const b = nodo(RADIO, k);
    hilos.push({ d: `M${punto(a)} L${punto(b)}`, i: orden++ });
  }
  for (let k = -RADIO; k <= RADIO; k++) {
    const a = nodo(k, -RADIO);
    const b = nodo(k, RADIO);
    hilos.push({ d: `M${punto(a)} L${punto(b)}`, i: orden++ });
  }

  /* cota del lado, sobre la arista Oeste–Norte del detalle */
  const c1 = fuera(O, 13);
  const c2 = fuera(N, 13);
  const medio = fuera({ x: (O.x + N.x) / 2, y: (O.y + N.y) / 2 }, 13);
  const t = 4.6; // medio tope, en diagonal

  return (
    <svg
      viewBox="0 0 380 280"
      className={`dibujo entra w-full ${base}`}
      role="img"
      aria-label="Plano de la malla: rombos de 5 centímetros de lado, tejidos con 28 hilos"
    >
      <defs>
        <clipPath id="recorte-pano">
          <rect x="14" y="42" width="172" height="196" />
        </clipPath>
      </defs>

      {/* el paño */}
      <g
        clipPath="url(#recorte-pano)"
        stroke="currentColor"
        strokeWidth={1.1}
        fill="none"
      >
        {hilos.map((h) => (
          <path
            key={h.i}
            className="trazo"
            style={{ "--i": h.i } as React.CSSProperties}
            pathLength={1}
            d={h.d}
          />
        ))}
      </g>
      <rect
        x="14"
        y="42"
        width="172"
        height="196"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        className={suave}
        strokeDasharray="3 3"
      />
      <text
        x="14"
        y="256"
        className={`fill-current ${suave}`}
        style={{ font: "500 10px var(--font-tecnica)", letterSpacing: "1.1px" }}
      >
        PAÑO
      </text>

      {/* el detalle: un módulo al doble */}
      <path
        d={`M${punto(N)} L${punto(E)} L${punto(S)} L${punto(O)} Z`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      />
      <text
        x={r(O.x)}
        y="256"
        className={`fill-current ${suave}`}
        style={{ font: "500 10px var(--font-tecnica)", letterSpacing: "1.1px" }}
      >
        DETALLE 2:1
      </text>

      {/* cota: 5 cm de lado */}
      <g stroke="currentColor" strokeWidth={1} fill="none" className={acento}>
        <line x1={r(c1.x)} y1={r(c1.y)} x2={r(c2.x)} y2={r(c2.y)} />
        <line x1={r(c1.x - t)} y1={r(c1.y - t)} x2={r(c1.x + t)} y2={r(c1.y + t)} />
        <line x1={r(c2.x - t)} y1={r(c2.y - t)} x2={r(c2.x + t)} y2={r(c2.y + t)} />
      </g>
      <text
        x={r(medio.x - 6)}
        y={r(medio.y - 6)}
        textAnchor="end"
        className={acentoFill}
        style={{ font: "600 11px var(--font-tecnica)", letterSpacing: "1.2px" }}
      >
        5 CM
      </text>

      {/* llamada: el hilo */}
      <g>
        <circle
          cx={r((E.x + S.x) / 2)}
          cy={r((E.y + S.y) / 2)}
          r={3}
          className={acentoFill}
        />
        <path
          d={`M${r((E.x + S.x) / 2)} ${r((E.y + S.y) / 2)} L${r(E.x + 6)} ${r(S.y + 18)} L366 ${r(S.y + 18)}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          className={suave}
        />
        <text
          x="366"
          y={r(S.y + 12)}
          textAnchor="end"
          className={baseFill}
          style={{ font: "600 11px var(--font-tecnica)", letterSpacing: "1.2px" }}
        >
          28 HILOS
        </text>
      </g>
    </svg>
  );
}
