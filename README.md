# CASA MARIO · Sitio web

Sitio estático (HTML, CSS y JavaScript) de CASA MARIO, café de especialidad de la Finca Las Mercedes, Pitalito, Huila. Bilingüe ES/EN, con tienda y carrito listos para configurar.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub (por ejemplo `casamario-web`) y sube todo el contenido de esta carpeta a la rama `main`.
2. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guarda.
3. En uno o dos minutos el sitio queda en `https://TU-USUARIO.github.io/casamario-web/`.
4. Dominio propio (opcional): en la misma pantalla escribe tu dominio y crea el registro DNS que GitHub indica.

## Qué editar
- **Productos, precios, inventario, correo y pagos:** bloque `CASA_MARIO_CONFIG` al inicio de `app.js`. Lo que está en `null` se muestra como "por definir".
- **Textos en español e inglés:** el español está en `index.html` (atributos `data-t`); el inglés, en el objeto `EN` de `app.js`. Los textos entre corchetes son espacios para completar con información real.
- **Fotografías:** reemplaza los archivos de los archivos `.webp` (los cuadros "Espacio para fotografía real" en `index.html` se cambian por una etiqueta `<img>`). La foto `hero.webp` y la bolsa son provisionales.
- **Colores y tipografías:** variables al inicio de `style.css`.

## Pendiente para vender en línea
- El formulario de contacto no envía mensajes: conéctalo a un servicio de formularios (Formspree, Netlify Forms u otro).
- No hay pasarela de pago: integra Wompi, Mercado Pago, PayU o ePayco. GitHub Pages solo aloja archivos estáticos, así que los pagos y el inventario real requieren un servicio externo o un backend.
- Añade metadatos SEO por página y un `sitemap.xml` cuando tengas el dominio final.
