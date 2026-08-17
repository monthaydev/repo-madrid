import { Cabecera } from "@/components/cabecera";
import { Hero } from "@/components/hero";
import { PorQue } from "@/components/por-que";
import { Servicios } from "@/components/servicios";
import { Trabajos } from "@/components/trabajos";
import { Ficha } from "@/components/ficha";
import { Herreria } from "@/components/herreria";
import { Proceso } from "@/components/proceso";
import { Zonas } from "@/components/zonas";
import { Preguntas } from "@/components/preguntas";
import { Contacto } from "@/components/contacto";
import { Pie } from "@/components/pie";
import { BarraMovil } from "@/components/barra-movil";
import { Revelados } from "@/components/revelados";

/**
 * Orden de la página = orden de la conversación con el cliente:
 * qué es → por qué → dónde se pone → obra hecha → qué es exactamente →
 * por qué nosotros → cómo va → dónde llegamos → dudas → pedir la visita.
 *
 * «Trabajos» va justo después de «Servicios»: la prueba pisando el talón
 * de la promesa. Es lo único que sustituye a los testimonios, que no hay.
 */
export default function Inicio() {
  return (
    <>
      <Cabecera />
      <main className="flex-1">
        <Hero />
        <PorQue />
        <Servicios />
        <Trabajos />
        <Ficha />
        <Herreria />
        <Proceso />
        <Zonas />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
      <BarraMovil />
      <Revelados />
    </>
  );
}
