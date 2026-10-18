
//mapas//

// Un mapa por página de expedición: id del div, centro, zoom y marcador
const mapas = [
  { id: "mapaSocotra", centro: [12.4634, 53.8236], zoom: 9, marcador: [12.4634, 53.8236], popup: "Isla de Socotra" },
  { id: "mapaMalvinas", centro: [-51.7, -59.0], zoom: 8, marcador: [-51.6935, -57.8516], popup: "<strong>Puerto Argentino</strong><br>Capital de las Islas Malvinas." },
  { id: "mapaPapua", centro: [-1.5, 133.0], zoom: 6, marcador: [-0.8667, 134.0833], popup: "<strong>Manokwari</strong><br>Capital de la provincia de Papúa Occidental." },
  { id: "mapaMachuPicchu", centro: [-13.1631, -72.5450], zoom: 15, marcador: [-13.1631, -72.5450], popup: "<strong>Machu Picchu</strong><br>Antigua ciudad inca en Perú." },
  { id: "mapaLofoten", centro: [68.2275, 13.9726], zoom: 9, marcador: [68.2275, 13.9726], popup: "<strong>Islas Lofoten</strong><br>Archipiélago noruego conocido por sus paisajes árticos." },
  { id: "mapaTibet", centro: [29.65, 91.10], zoom: 7, marcador: [29.65, 91.10], popup: "<strong>Lhasa</strong><br>Capital espiritual del Tíbet." },
  { id: "mapaSiberia", centro: [53.5587, 108.1650], zoom: 6, marcador: [53.5587, 108.1650], popup: "<strong>Lago Baikal</strong><br>El lago más profundo del mundo." },
  { id: "mapaRapaNui", centro: [-27.1127, -109.3497], zoom: 12, marcador: [-27.1127, -109.3497], popup: "<strong>Rapa Nui</strong><br>También conocida como Isla de Pascua." },
  { id: "mapaAtenas", centro: [37.9838, 23.7275], zoom: 13, marcador: [37.9838, 23.7275], popup: "<strong>Atenas</strong><br>Capital histórica de Grecia." }
];

document.addEventListener("DOMContentLoaded", function () {
  if (typeof L === "undefined") return;

  mapas.forEach((config) => {
    if (!document.getElementById(config.id)) return;

    const mapa = L.map(config.id, { scrollWheelZoom: false }).setView(config.centro, config.zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(mapa);

    L.marker(config.marcador)
      .addTo(mapa)
      .bindPopup(config.popup)
      .openPopup();
  });
});


//animación de entrada

// localStorage puede no estar disponible (modo privado, cookies bloqueadas)
function leerAnimacionVista() {
  try {
    return localStorage.getItem("animacionVista");
  } catch (e) {
    return null;
  }
}

function guardarAnimacionVista() {
  try {
    localStorage.setItem("animacionVista", "true");
  } catch (e) {}
}

window.addEventListener("load", function () {
  const overlay = document.getElementById("blur-overlay");
  const logo = document.getElementById("logo-blur");

  if (!overlay || !logo) return;

  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (leerAnimacionVista() || reducirMovimiento) {
    overlay.remove();
    return;
  }

  setTimeout(() => {
    logo.style.opacity = "0";
    logo.style.transform = "scale(1.4)";
  }, 800);

  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.remove();
      guardarAnimacionVista();
    }, 500);
  }, 1600);
});

//Expedición recomendada

// Los principios coinciden con los valores de los checkboxes de tribu.html
const expediciones = [
    {
      nombre: "Socotra",
      principios: [
        "Interconexión",
        "Cuidado del entorno",
        "Respeto profundo"
      ],
      descripcion: "Conexión con lo inusual y lo primitivo.",
      pagina: "socotra.html"
    },
    {
      nombre: "Malvinas",
      principios: [
        "Introspección activa",
        "Respeto profundo",
        "Presencia consciente"
      ],
      descripcion: "Memoria y contemplación.",
      pagina: "malvinas.html"
    },
    {
      nombre: "Papúa Occidental (Tribu)",
      principios: [
        "Respeto profundo",
        "Valor por lo simple",
        "Interconexión"
      ],
      descripcion: "Encuentro con lo ancestral.",
      pagina: "papua.html"
    },
    {
      nombre: "Machu Picchu",
      principios: [
        "Presencia consciente",
        "Introspección activa",
        "Interconexión"
      ],
      descripcion: "Conexión espiritual y legado.",
      pagina: "macchupicchu.html"
    },
    {
      nombre: "El Tíbet",
      principios: [
        "Presencia consciente",
        "Introspección activa",
        "Simplicidad",
        "Ritmo natural"
      ],
      descripcion: "Búsqueda interior.",
      pagina: "tibet.html"
    },
    {
      nombre: "Isla de Pascua",
      principios: [
        "Introspección activa",
        "Respeto profundo"
      ],
      descripcion: "Misterio y permanencia.",
      pagina: "moai.html"
    },
    {
      nombre: "Islas Lofoten",
      principios: [
        "Simplicidad",
        "Ritmo natural",
        "Valor por lo simple",
        "Cuidado del entorno"
      ],
      descripcion: "Belleza solitaria.",
      pagina: "auroras.html"
    },
    {
      nombre: "Siberia",
      principios: [
        "Simplicidad",
        "Introspección activa",
        "Ritmo natural"
      ],
      descripcion: "Fortaleza y despojo.",
      pagina: "siberia.html"
    },
    {
      nombre: "Atenas",
      principios: [
        "Interconexión",
        "Presencia consciente"
      ],
      descripcion: "Sabiduría y origen.",
      pagina: "atenas.html"
    }
  ];

document.addEventListener('DOMContentLoaded', () => {
  const btnConfirmar = document.getElementById('btnConfirmar');

  if (btnConfirmar) {
    btnConfirmar.addEventListener('click', () => {
      const seleccionados = Array.from(document.querySelectorAll('input[name="principios"]:checked'))
        .map(el => el.value);

      const mensaje = document.getElementById('mensajeFinal');

      if (!mensaje) return;

      if (seleccionados.length === 0) {
        mensaje.textContent = "Te invitamos a explorar los principios que guían este camino.";
        return;
      }

      let maxCoincidencias = 0;
      let recomendacion = null;

      expediciones.forEach(expedicion => {
        const coincidencias = expedicion.principios.filter(p => seleccionados.includes(p)).length;

        if (coincidencias > maxCoincidencias) {
          maxCoincidencias = coincidencias;
          recomendacion = expedicion;
        }
      });

      if (!recomendacion || maxCoincidencias === 0) {
        mensaje.textContent = "No encontramos una expedición que coincida con tus principios. Pero la aventura te espera.";
      } else {
        mensaje.innerHTML = `
          <strong>Te recomendamos la expedición a <a href="${recomendacion.pagina}" class="link-dark"><em>${recomendacion.nombre}</em></a></strong><br>
          <small>${recomendacion.descripcion}</small><br>
          <br>
          Basada en tus principios seleccionados.
        `;
      }
    });
  }

  //formulario//

  const form = document.getElementById('form');
  const btn = document.getElementById('button');
  const mensaje = document.getElementById('mensajeEnviado');

  if (form && btn && mensaje) {
    emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Validación con los estilos de Bootstrap antes de enviar
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        form.querySelector(':invalid').focus();
        return;
      }

      btn.innerText = 'Enviando...';
      btn.disabled = true;

      const serviceID = 'default_service';
      const templateID = 'YOUR_EMAILJS_TEMPLATE_ID';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.innerText = 'Enviar';
          btn.disabled = false;
          mensaje.classList.remove('d-none');
          form.reset();
          form.classList.remove('was-validated');

          setTimeout(() => {
            mensaje.classList.add('d-none');
          }, 4000);
        })
        .catch((err) => {
          btn.innerText = 'Enviar';
          btn.disabled = false;
          alert('Ocurrió un error al enviar el mensaje. Por favor, intentá de nuevo.');
          console.error('Error EmailJS:', err);
        });
    });
  }
});

//galeria de imagenes//

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.animada').forEach((element) => observer.observe(element));
