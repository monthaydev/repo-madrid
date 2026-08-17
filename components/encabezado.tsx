type Props = {
  /** El rótulo técnico de la sección. Corto: es una etiqueta, no una frase. */
  etiqueta: string;
  titulo: React.ReactNode;
  texto?: React.ReactNode;
  invertido?: boolean;
  className?: string;
};

/** Cabecera única para todas las secciones: rótulo, filete y título. */
export function Encabezado({
  etiqueta,
  titulo,
  texto,
  invertido = false,
  className = "",
}: Props) {
  return (
    <div className={className}>
      <p
        className={`tecnica entra flex items-center gap-3 ${
          invertido ? "text-cal/50" : "text-tinta-3"
        }`}
      >
        <span
          aria-hidden="true"
          className={`h-px w-8 ${invertido ? "bg-cal/30" : "bg-[var(--linea-fuerte)]"}`}
        />
        {etiqueta}
      </p>
      <h2 className="entra mt-5 max-w-4xl text-[clamp(1.9rem,4.6vw,3.4rem)]">
        {titulo}
      </h2>
      {texto && (
        <div
          className={`entra mt-5 max-w-2xl text-[1.0625rem] leading-relaxed md:text-lg ${
            invertido ? "text-cal/70" : "text-tinta-2"
          }`}
        >
          {texto}
        </div>
      )}
    </div>
  );
}
