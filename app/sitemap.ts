import type { MetadataRoute } from "next";
import { EMPRESA } from "@/lib/datos";

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date();
  return [
    { url: EMPRESA.sitio, lastModified: ahora, changeFrequency: "monthly", priority: 1 },
    { url: `${EMPRESA.sitio}/aviso-legal`, lastModified: ahora, priority: 0.2 },
    { url: `${EMPRESA.sitio}/privacidad`, lastModified: ahora, priority: 0.2 },
  ];
}
