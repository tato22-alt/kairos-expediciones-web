# Kairos Expediciones

Sitio web estático para **Kairos Expediciones**, una agencia de viajes de aventura ficticia. Fue desarrollado como proyecto académico de la materia Diseño y Desarrollo Web (UADE, 2025) y hoy forma parte de mi portfolio.

**Demo:** https://tato22-alt.github.io/kairos-expediciones-web/

## Descripción

El sitio presenta la marca, su catálogo de expediciones (Atenas, Auroras boreales, Machu Picchu, Malvinas, Isla de Pascua, Papúa, Siberia, Socotra y Tíbet), una galería de imágenes y un formulario de contacto. El foco del proyecto estuvo en la estructura semántica, la maquetación responsive y la navegación entre páginas.

## Funcionalidades

- Página de inicio con la presentación de la marca.
- Catálogo de expediciones con una página de detalle por destino.
- Secciones institucionales ("Nosotros" y "Tribu").
- Galería con animaciones de aparición al hacer scroll.
- Formulario de contacto con validación y envío a través de EmailJS.
- Diseño responsive basado en Bootstrap.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- [Bootstrap 5](https://getbootstrap.com/)
- [EmailJS](https://www.emailjs.com/)

## Estructura

```
├── index.html           # Inicio
├── expediciones.html    # Catálogo de expediciones
├── <destino>.html       # Páginas de detalle (atenas, tibet, socotra, ...)
├── galeria.html         # Galería de imágenes
├── nosotros.html        # Sobre la marca
├── tribu.html           # Comunidad
├── form.html            # Formulario de contacto
├── css/stilos.css       # Estilos propios
├── javascript/eventos.js
└── img/                 # Imágenes e íconos
```

## Ejecución local

No requiere instalación ni build. Basta con abrir `index.html` en el navegador o servir la carpeta con cualquier servidor estático (por ejemplo, la extensión Live Server de VS Code).

## Configuración del formulario

El formulario de contacto usa EmailJS. El repositorio no incluye credenciales; para que el envío funcione, reemplazá los placeholders en `javascript/eventos.js` con los datos de tu cuenta:

| Placeholder                | Dónde se obtiene en EmailJS     |
| -------------------------- | ------------------------------- |
| `YOUR_EMAILJS_PUBLIC_KEY`  | Account → General → Public Key  |
| `YOUR_EMAILJS_TEMPLATE_ID` | Email Templates                 |
| `default_service`          | Email Services (Service ID)     |

Los enlaces de redes sociales y WhatsApp del pie de página son genéricos y no apuntan a cuentas ni teléfonos reales.

## Mejoras recientes

- **Responsive:** el pie de página deja de ser fijo en celulares para no tapar contenido; mapas, galería y portadas ajustan su alto según la pantalla; se corrigió el `viewport` de la página de inicio.
- **Accesibilidad:** etiquetas del formulario legibles, botón del menú y controles de los carruseles con texto para lectores de pantalla, tarjetas de la galería navegables con teclado, foco visible y soporte para `prefers-reduced-motion`.
- **Performance:** se eliminaron imágenes sin uso y se redimensionaron las fotos y los íconos animados (de ~50 MB a ~12 MB en total).
- **Código:** una sola versión de Bootstrap y Leaflet en todo el sitio, colores centralizados en variables CSS, estilos en línea movidos a la hoja de estilos y los mapas generados desde una única configuración en JavaScript.
- **Funcionalidad:** el recomendador de "Tribu Kairos" ahora vincula los principios elegidos con una expedición y enlaza a su página; el formulario valida los campos antes de enviar; la animación de entrada dura menos de 2 segundos.

## Autor

Luciano Domínguez — proyecto académico, UADE.
