import type { MetadataRoute } from "next";
import { EMPRESA } from "@/lib/datos";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${EMPRESA.sitio}/sitemap.xml`,
  };
}
