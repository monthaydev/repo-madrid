import type { Metadata } from "next";
import { PaginaLegal } from "@/components/pagina-legal";
import { EMPRESA, WHATSAPP } from "@/lib/datos";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false, follow: true },
};

/**
 * La web no tiene servidor propio de formularios, ni cookies de terceros,
 * ni analítica. Todo el contacto ocurre en WhatsApp o por teléfono. Esta
 * política dice exactamente eso, que es lo que exige el RGPD: la verdad.
 */
export default function Privacidad() {
  return (
    <PaginaLegal titulo="Política de privacidad" actualizado="agosto de 2026">
      <h2>Quién trata tus datos</h2>
      <p>
        {EMPRESA.nombre}, con domicilio en{" "}
        {EMPRESA.direccion ?? "[pendiente de completar]"}, {EMPRESA.base} (
        {EMPRESA.region}), correo{" "}
        <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a> y teléfono{" "}
        {WHATSAPP.visible}.
      </p>

      <h2>Qué datos recogemos en esta web</h2>
      <p>
        <strong>Ninguno.</strong> Esta web no tiene formularios que envíen
        información a un servidor, no usa cookies de análisis ni de publicidad
        y no crea perfiles de navegación.
      </p>
      <p>
        El formulario de «visita técnica» funciona íntegramente en tu
        dispositivo: sólo redacta un mensaje y abre tu WhatsApp. Nada se envía
        hasta que pulsas enviar en tu propia aplicación.
      </p>

      <h2>Qué pasa cuando nos escribes</h2>
      <p>
        Cuando contactas por WhatsApp, teléfono o correo, tratamos los datos
        que nos facilitas (nombre, teléfono, dirección de la instalación y lo
        que nos cuentes del trabajo) para:
      </p>
      <ul>
        <li>responder a tu consulta y concertar la visita técnica;</li>
        <li>elaborar el presupuesto;</li>
        <li>ejecutar y facturar el trabajo, si lo contratas.</li>
      </ul>
      <p>
        <strong>Base legal:</strong> tu consentimiento al escribirnos y, si
        contratas, la ejecución del contrato y las obligaciones fiscales.
      </p>

      <h2>Cuánto tiempo los guardamos</h2>
      <p>
        Las consultas que no terminan en trabajo se conservan mientras haya
        interés comercial. Los datos de trabajos realizados se guardan durante
        los plazos legales de facturación y garantía.
      </p>

      <h2>Con quién se comparten</h2>
      <p>
        No vendemos ni cedemos datos. Las conversaciones por WhatsApp se
        producen en la plataforma de WhatsApp Ireland Ltd., sujeta a su propia
        política de privacidad.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedirnos acceso, rectificación, supresión, limitación,
        portabilidad u oposición escribiendo a{" "}
        <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>. También puedes
        reclamar ante la Agencia Española de Protección de Datos (
        <a
          href="https://www.aepd.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          aepd.es
        </a>
        ).
      </p>
    </PaginaLegal>
  );
}
