# Estructura del Proyecto: Staff Abogados

## Objetivo del Proyecto
Diseñar una página web visual, clara y profesional para un estudio legal. El enfoque está en la modularidad, la trazabilidad y la facilidad de mantenimiento, sin backend, utilizando HTML, CSS y Bootstrap.

---

## Convenciones de Nombres

- **Clases CSS**: prefijo por componente o sección (`.navbar-link`, `.hero-title`, `.footer-info`)
- **IDs**: descriptivos y únicos (`#hero`, `#contact-form`)
- **Carpetas**: en minúsculas, sin espacios, con nombres funcionales (`components/`, `assets/`, `pages/`)

---
##  Conexión entre páginas

- `index.html`: Página principal del sitio.
- `pages/nosotros.html`: Página informativa sobre el equipo legal. Reutiliza `navbar` y `footer` desde `components/`. Usa los mismos estilos base definidos en `css/styles.css`.

 Todas las páginas deben mantener coherencia visual y estructural.

##  Estructura de Carpetas

| Carpeta         | Descripción                                                                 |
|-----------------|------------------------------------------------------------------------------|
| `index.html`    | Página principal del sitio                                                  |
| `pages/`        | Páginas adicionales como `nosotros.html`, `servicios.html`                  |
| `components/`   | Fragmentos reutilizables como `navbar.html`, `footer.html`                  |
| `css/`          | Estilos personalizados (`styles.css`, `hero.css`, etc.)                     |
| `js/`           | Scripts opcionales (`main.js`, `form-validation.js`)                        |
| `assets/img/`   | Imágenes del sitio (logos, banners, etc.)                                   |
| `assets/fonts/` | Tipografías locales si no se usan desde CDN        
| `docs/`         | Documentación técnica, trazabilidad y notas del proyecto                    |

---
##  Notas para Colaboradores

- Mantener la estructura de carpetas y convenciones de nombres.
- Comentar el código HTML y CSS para facilitar la trazabilidad.
- Documentar cualquier cambio importante en este archivo.
- Si se agregan nuevos componentes, incluir una breve descripción aquí.

---

##  Última actualización
07 de Marzo 2026 — por Allison Milagros More Rivas