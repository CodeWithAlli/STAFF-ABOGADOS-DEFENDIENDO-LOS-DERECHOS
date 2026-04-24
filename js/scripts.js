// 📦 scripts.js | Staff Abogados

// Detectar si estamos dentro de /pages/
const enPages = window.location.pathname.includes('/pages/');

// Base dinámica
const base = enPages ? '../' : '';

// ─── Carga de componente ─────────────────────────────────────────────
async function cargarComponente(idContenedor, archivo) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  try {
    const res = await fetch(base + 'components/' + archivo);
    if (!res.ok) throw new Error('No se pudo cargar ' + archivo);

    let html = await res.text();

    // 🔥 Ajuste INTELIGENTE de rutas (menos parches raros)
    html = html.replaceAll('src="assets/', `src="${base}assets/`);
    html = html.replaceAll('href="assets/', `href="${base}assets/`);
    html = html.replaceAll('href="pages/', `href="${base}pages/`);
    html = html.replaceAll('href="index.html"', `href="${base}index.html"`);

    contenedor.innerHTML = html;

    // Scroll suave en hero
    if (idContenedor === 'hero-container') {
      const btn = contenedor.querySelector('.scroll-indicator');
      if (btn) {
        btn.addEventListener('click', () => {
          window.scrollBy({ top: 600, behavior: 'smooth' });
        });
      }
    }

  } catch (err) {
    console.error('❌ Error:', err);
  }
}

// ─── Inicializar ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  cargarComponente('navbar-container', 'navbar.html');
  cargarComponente('footer-container', 'footer.html');
  cargarComponente('hero-container', 'hero.html');
  cargarComponente('team-container', 'team-card.html');
  cargarComponente('objetivo-container', 'objetivo.html');

  // ─── Estado de atención ───────────────────────────────────────────
  const estado = document.getElementById('estado-atencion');

  if (estado) {
    const ahora = new Date();
    const dia = ahora.getDay();
    const hora = ahora.getHours() + ahora.getMinutes() / 60;

    const horarios = {
      1: [8.5, 16],
      2: [8.5, 16],
      3: [8.5, 16],
      4: [8.5, 16],
      5: [8.5, 16],
      6: [9, 13],
      0: null
    };

    const rango = horarios[dia];

    estado.classList.add('alert');

    if (!rango) {
      estado.textContent = 'Hoy no hay atención. Cerrado por descanso institucional.';
      estado.classList.add('alert-danger');
    } else if (hora >= rango[0] && hora <= rango[1]) {
      estado.textContent = 'Estamos atendiendo. Puedes contactarnos ahora.';
      estado.classList.add('alert-success');
    } else {
      estado.textContent = 'Fuera del horario de atención. Escríbenos y te responderemos pronto.';
      estado.classList.add('alert-warning');
    }
  }
});