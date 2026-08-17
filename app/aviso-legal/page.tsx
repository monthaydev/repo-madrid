import type { Metadata } from "next";
import { PaginaLegal } from "@/components/pagina-legal";
import { EMPRESA, WHATSAPP } from "@/lib/datos";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false, follow: true },
};

/**
 * Obligatorio en España por la LSSI-CE (art. 10).
 * PENDIENTE de Guedes: nombre fiscal completo, NIF/NIE y domicilio.
 */
export default function AvisoLegal() {
  return (
    <PaginaLegal titulo="Aviso legal" actualizado="agosto de 2026">
      <h2>Titular del sitio web</h2>
      <ul>
        <li>
          <strong>Denominación:</strong> {EMPRESA.nombre}
        </li>
        <li>
          <strong>NIF / NIE:</strong> [pendiente de completar]
        </li>
        <li>
          <strong>Domicilio:</strong>{" "}
          {EMPRESA.direccion ?? "[pendiente de completar]"}, {EMPRESA.base},{" "}
          {EMPRESA.region}, España
        </li>
        <li>
          <strong>Correo electrónico:</strong>{" "}
          <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>
        </li>
        <li>
          <strong>Teléfono:</strong> {WHATSAPP.visible}
        </li>
        <li>
          <strong>Actividad:</strong> instalación de redes y mallas de
          protección y trabajos de herrería.
        </li>
      </ul>

      <h2>Objeto</h2>
      <p>
        Este sitio web tiene carácter informativo y comercial. Describe los
        servicios de {EMPRESA.nombre} y facilita el contacto con la empresa.
        No se realizan ventas ni contrataciones a través de la web.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        El acceso a este sitio es gratuito y no requiere registro. La persona
        usuaria se compromete a hacer un uso adecuado de los contenidos y a no
        emplearlos con fines ilícitos.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, fotografías, diseños y demás elementos de este sitio son
        titularidad de {EMPRESA.nombre} o se utilizan con autorización. Queda
        prohibida su reproducción sin consentimiento previo por escrito.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        La información técnica publicada (medidas, materiales y plazos) es
        orientativa. Las condiciones concretas de cada instalación se fijan en
        el presupuesto entregado tras la visita técnica.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier
        controversia serán competentes los juzgados y tribunales del domicilio
        de la persona consumidora.
      </p>
    </PaginaLegal>
  );
}
