# Fotos de los trabajos

Aquí van las fotos reales de Guedes. **Nunca banco de imágenes.**

## Cómo añadir una foto

1. Guarda el archivo en esta carpeta, en `.webp` o `.jpg` comprimido
   (menos de ~300 kB; las fotos de móvil vienen a 4–6 MB).
2. Abre `lib/fotos.ts` y rellena la entrada correspondiente:
   - `archivo`: `"/fotos/nombre-del-archivo.webp"`
   - `ancho` y `alto`: las medidas reales en píxeles
   - `alt`: revisa que describa la escena de verdad
3. Ya está. El componente `<Foto>` cambia solo y el hueco de maqueta
   desaparece.

Mientras `archivo` sea `null`, la web enseña un hueco técnico con el
encargo escrito. Se puede enseñar así sin mentirle a nadie.

## Qué falta

La lista, con el encargo de cada una, está en `lib/fotos.ts`. La más
importante es `hero`: balcón terminado, de día, **tomada desde dentro de
casa mirando a la calle**, donde se vea la vista a través de la malla. Es
la foto que sostiene todo el argumento de la página.
