import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * El favicon es un módulo de la malla: un rombo, que es como se ve la red
 * montada. A 32 px una retícula entera no se lee; un rombo sí.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1a1816",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            border: "3px solid #f3eee4",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    size,
  );
}
