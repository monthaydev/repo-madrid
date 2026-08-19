type Props = {
  /** El rótulo técnico de la sección. Corto: es una etiqueta, no una frase. */
  etiqueta: string;
  titulo: React.ReactNode;
  texto?: React.ReactNode;
  invertido?: boolean;
  /** "grande": el título vende (vanos). "pequeño": el título rotula un
   *  bloque de dato duro (anclajes) — no compite con la ficha o el proceso
   *  que vienen debajo. */
  tamano?: "grande" | "pequeno";
  className?: string;
};

/** Cabecera única para todas las secciones: rótulo, filete y título. */
export function Encabezado({
  etiqueta,
  titulo,
  texto,
  invertido = false,
  tamano = "grande",
  className = "",
}: Props) {
  const esPequeno = tamano === "pequeno";
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
      <h2
        className={`entra mt-5 max-w-4xl ${
          esPequeno
            ? "text-[clamp(1.5rem,3vw,2.1rem)]"
            : "text-[clamp(1.9rem,4.6vw,3.4rem)]"
        }`}
      >
        {titulo}
      </h2>
      {texto && (
        <div
          className={`entra mt-5 max-w-2xl leading-relaxed ${
            esPequeno ? "text-[0.9375rem]" : "text-[1.0625rem] md:text-lg"
          } ${invertido ? "text-cal/70" : "text-tinta-2"}`}
        >
          {texto}
        </div>
      )}
    </div>
  );
}
