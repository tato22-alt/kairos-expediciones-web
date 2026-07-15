
//mapas// 

document.addEventListener("DOMContentLoaded", function () {
  
  const mapaSocotraDiv = document.getElementById("mapaSocotra");
  if (mapaSocotraDiv) {
    const mapaSocotra = L.map('mapaSocotra').setView([12.4634, 53.8236], 9);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapaSocotra);

    L.marker([12.4634, 53.8236])
      .addTo(mapaSocotra)
      .bindPopup('Isla de Socotra')
      .openPopup();
  }

  
  const mapaMalvinasDiv = document.getElementById("mapaMalvinas");
  if (mapaMalvinasDiv) {
    const mapaMalvinas = L.map('mapaMalvinas').setView([-51.7, -59.0], 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapaMalvinas);

    L.marker([-51.6935, -57.8516])
      .addTo(mapaMalvinas)
      .bindPopup('<strong>Puerto Argentino</strong><br>Capital de las Islas Malvinas.')
      .openPopup();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const divPapua = document.getElementById("mapaPapua");
  if (divPapua) {
    const mapaPapua = L.map("mapaPapua").setView([-1.5, 133.0], 6); 

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapaPapua);

    
    L.marker([-0.8667, 134.0833])
      .addTo(mapaPapua)
      .bindPopup("<strong>Manokwari</strong><br>Capital de la provincia de Papúa Occidental.")
      .openPopup();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const divMachu = document.getElementById("mapaMachuPicchu");
  if (divMachu) {
    const mapaMachuPicchu = L.map("mapaMachuPicchu").setView([-13.1631, -72.5450], 15); 

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapaMachuPicchu);

    L.marker([-13.1631, -72.5450])
      .addTo(mapaMachuPicchu)
      .bindPopup("<strong>Machu Picchu</strong><br>Antigua ciudad inca en Perú.")
      .openPopup();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const divLofoten = document.getElementById("mapaLofoten");
  if (divLofoten) {
    const mapaLofoten = L.map("mapaLofoten").setView([68.2275, 13.9726], 9);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapaLofoten);

    L.marker([68.2275, 13.9726])
      .addTo(mapaLofoten)
      .bindPopup("<strong>Islas Lofoten</strong><br>Archipiélago noruego conocido por sus paisajes árticos.")
      .openPopup();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const divTibet = document.getElementById("mapaTibet");
  if (divTibet) {
    const mapaTibet = L.map("mapaTibet").setView([29.65, 91.10], 7); 

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapaTibet);

    L.marker([29.65, 91.10])
      .addTo(mapaTibet)
      .bindPopup("<strong>Lhasa</strong><br>Capital espiritual del Tíbet.")
      .openPopup();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const divSiberia = document.getElementById("mapaSiberia");
  if (divSiberia) {
    const mapaSiberia = L.map("mapaSiberia").setView([53.5587, 108.1650], 6); 

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(mapaSiberia);

    L.marker([53.5587, 108.1650])
      .addTo(mapaSiberia)
      .bindPopup("<strong>Lago Baikal</strong><br>El lago más profundo del mundo.")
      .openPopup();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const divRapaNui = document.getElementById("mapaRapaNui");
  if (divRapaNui) {
    const mapaRapaNui = L.map("mapaRapaNui").setView([-27.1127, -109.3497], 12); 

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapaRapaNui);

    L.marker([-27.1127, -109.3497])
      .addTo(mapaRapaNui)
      .bindPopup("<strong>Rapa Nui</strong><br>También conocida como Isla de Pascua.")
      .openPopup();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const divAtenas = document.getElementById("mapaAtenas");
  if (divAtenas) {
    const mapaAtenas = L.map("mapaAtenas").setView([37.9838, 23.7275], 13); 

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapaAtenas);

    L.marker([37.9838, 23.7275])
      .addTo(mapaAtenas)
      .bindPopup("<strong>Atenas</strong><br>Capital histórica de Grecia.")
      .openPopup();
  }
});


//animación de entrada

window.addEventListener("load", function () {
  const overlay = document.getElementById("blur-overlay");
  const logo = document.getElementById("logo-blur");
  const animacionVista = localStorage.getItem("animacionVista");

  if (!overlay || !logo) return;

  if (!animacionVista) {
    setTimeout(() => {
      logo.style.opacity = "0";
      logo.style.transform = "scale(1.4)";
    }, 400); 

    setTimeout(() => {
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.remove();
        localStorage.setItem("animacionVista", "true");
      }, 5500); 
    }, 9000);
  } else {
    overlay.remove();
  }
});

//Expedición recomendada

const expediciones = [
    {
      nombre: "Socotra",
      principios: [
        "Asombro por la biodiversidad",
        "aislamiento natural",
        "descubrimiento de lo desconocido"
      ],
      descripcion: "Conexión con lo inusual y lo primitivo."
    },
    {
      nombre: "Malvinas",
      principios: [
        "Historia y reflexión",
        "contacto con la naturaleza cruda",
        "respeto por las huellas del pasado"
      ],
      descripcion: "Memoria y contemplación."
    },
    {
      nombre: "Papúa Occidental (Tribu)",
      principios: [
        "Respeto por culturas aisladas",
        "comprensión de modos de vida originarios",
        "humildad ante otras formas de civilización"
      ],
      descripcion: "Encuentro con lo ancestral."
    },
    {
      nombre: "Machu Picchu",
      principios: [
        "Misticismo",
        "grandeza de antiguas civilizaciones",
        "introspección en paisajes imponentes"
      ],
      descripcion: "Conexión espiritual y legado."
    },
    {
      nombre: "El Tíbet",
      principios: [
        "Silencio",
        "contemplación",
        "espiritualidad profunda",
        "resistencia cultural"
      ],
      descripcion: "Búsqueda interior."
    },
    {
      nombre: "Isla de Pascua",
      principios: [
        "Preguntas sin respuestas",
        "contacto con lo enigmático",
        "permanencia de lo humano en el tiempo"
      ],
      descripcion: "Misterio y permanencia."
    },
    {
      nombre: "Islas Lofoten",
      principios: [
        "Estética del paisaje extremo",
        "vida simple",
        "aislamiento voluntario",
        "conexión con lo esencial"
      ],
      descripcion: "Belleza solitaria."
    },
    {
      nombre: "Siberia",
      principios: [
        "Supervivencia en el frío",
        "introspección profunda",
        "confrontación con los límites físicos y mentales"
      ],
      descripcion: "Fortaleza y despojo."
    },
    {
      nombre: "Atenas",
      principios: [
        "Cuna de pensamiento",
        "equilibrio entre arte y razón",
        "historia como base de la evolución personal"
      ],
      descripcion: "Sabiduría y origen."
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
          <strong>Te recomendamos la expedición a <em>${recomendacion.nombre}</em></strong><br>
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
      btn.innerText = 'Enviando...';

      const serviceID = 'default_service';
      const templateID = 'template_z10utip';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.innerText = 'Enviar';
          mensaje.classList.remove('d-none');
          form.reset();

          setTimeout(() => {
            mensaje.classList.add('d-none');
          }, 4000);
        })
        .catch((err) => {
          btn.innerText = 'Enviar';
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
