/**
 * Guedes no tiene logo (briefing: "no"). Esto es un logotipo tipográfico
 * que puede usar ya: la marca es la propia malla —un retal de red, en
 * rombo, como se ve montada— y el nombre en Archivo ancho. Sirve igual en
 * la furgoneta que en la web.
 */
export function Marca({
  className = "",
  invertida = false,
}: {
  className?: string;
  invertida?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinejoin="round"
      >
        <rect x="1" y="1" width="22" height="22" />
        {/* el retal de malla: rombos, no cuadrícula */}
        <path d="M12 1 23 12 12 23 1 12Z" />
        <path d="M6.5 1 1 6.5M17.5 1 23 6.5M6.5 23 1 17.5M17.5 23 23 17.5" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="ancho-chapa text-[1.0625rem] font-extrabold uppercase tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-titulo)" }}
        >
          Guedes
        </span>
        <span
          className={`tecnica mt-1 text-[0.5rem] ${
            invertida ? "text-cal/60" : "text-tinta-3"
          }`}
        >
          Mallas de protección
        </span>
      </span>
    </span>
  );
}
