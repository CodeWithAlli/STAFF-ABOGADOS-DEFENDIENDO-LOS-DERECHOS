# Staff Abogados — Sitio Web Institucional

Sitio web estático para el estudio jurídico **Staff Abogados**, Lima, Perú.

## 🗂️ Estructura del proyecto

```
MAGISTER/
├── index.html              ← Página de inicio
├── pages/                  ← Páginas internas
│   ├── servicios.html
│   ├── nosotros.html
│   ├── contacto.html
│   ├── constitucional.html
│   ├── civil.html
│   ├── penal.html
│   ├── notarial.html
│   ├── laboral.html
│   └── corporativo.html
├── components/             ← Navbar, footer, hero (carga dinámica)
│   ├── navbar.html
│   ├── footer.html
│   ├── hero.html
│   ├── team-card.html
│   └── objetivo.html
├── css/                    ← Hojas de estilo
│   ├── styles.css
│   ├── ServiciosGenerales.css
│   ├── team-card.css
│   ├── contacto.css
│   ├── servicio.css
│   └── objetivo.css
├── js/
│   └── scripts.js          ← Carga de componentes y lógica
└── assets/
    ├── areas/              ← Imágenes por materia
    │   ├── civil/
    │   ├── constitucional/
    │   ├── corporativo/
    │   ├── laboral/
    │   ├── notarial/
    │   └── penal/
    ├── carrusel/           ← Fotos de abogados (abogado01-06.png)
    ├── trabajo/            ← Fotos institucionales
    └── fonts/              ← Fuentes Roboto locales
```

## 🚀 Cómo ejecutar localmente

Requiere un servidor local (los componentes se cargan con `fetch`).

**Opción 1 — VS Code Live Server:**
1. Instala la extensión "Live Server"
2. Clic derecho en `index.html` → "Open with Live Server"

**Opción 2 — Python:**
```bash
cd MAGISTER
python3 -m http.server 8080
# Abrir: http://localhost:8080
```

## 📞 Contacto institucional
- Av. Abancay 491, Of. 305 — Lima Centro
- consultas@staffabogados.pe
- +51 999 888 777
