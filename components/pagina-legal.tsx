import { Cabecera } from "@/components/cabecera";
import { Pie } from "@/components/pie";

/** Envoltorio de las páginas legales. Texto largo, columna estrecha. */
export function PaginaLegal({
  titulo,
  actualizado,
  children,
}: {
  titulo: string;
  actualizado: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Cabecera />
      <main className="flex-1">
        <article className="contenedor max-w-3xl py-14 md:py-20">
          <h1 className="text-[clamp(2rem,5vw,3rem)]">{titulo}</h1>
          <p className="tecnica mt-4 text-tinta-3">
            Última actualización: {actualizado}
          </p>
          <div className="mt-10 space-y-5 text-[1rem] leading-relaxed text-tinta-2 [&_a]:text-minio [&_a:hover]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-[1.25rem] [&_h2]:text-tinta [&_li]:mb-2 [&_strong]:text-tinta [&_ul]:list-disc [&_ul]:pl-5">
            {children}
          </div>
        </article>
      </main>
      <Pie />
    </>
  );
}
