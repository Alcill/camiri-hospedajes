# Camiri Hospedajes

Directorio web de hoteles, hostales y alojamientos de Camiri, Santa Cruz, Bolivia. Cada hospedaje tiene fotos, tarifas por habitación, servicios, ubicación en Google Maps y contacto por WhatsApp.

**Sitio:** https://camiri-hospedajes.pages.dev

## Tecnologías

HTML, CSS y JavaScript sin frameworks ni base de datos. Publicado en Cloudflare Pages.

## Estructura

```
index.html   Página, estilos y lógica
datos.js     Categorías y hospedajes
img/         Fotos por hospedaje y de la ciudad
```

## Uso local

Abrir `index.html` en el navegador.

## Editar contenido

Todo el contenido está en `datos.js`. Un campo en `null` no se muestra en la ficha. Las fotos van en `img/<id-del-hospedaje>/`.

## Publicar

Cloudflare → Workers & Pages → `camiri-hospedajes` → Create deployment → subir la carpeta completa.

## Créditos

Fotos de Camiri: Ariela2020, Ruditaly e Isapirua vía Wikimedia Commons (CC BY-SA 4.0 / CC BY 4.0).

---

Versión 1.6 · Desarrollado por Alcides Aucatoma Ávila
