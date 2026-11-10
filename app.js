// ==================================
// 1. CARRUSEL EN LA PÁGINA DE INICIO
// ==================================
let homeSlideIndex = 0;

function showHomeSlide(index) {
  const slides = document.querySelectorAll('.home-carousel .carousel-slide');
  if (slides.length === 0) return;

  if (index >= slides.length) homeSlideIndex = 0;
  else if (index < 0) homeSlideIndex = slides.length - 1;
  else homeSlideIndex = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === homeSlideIndex);
  });
}

function moveHomeSlide(step) {
  showHomeSlide(homeSlideIndex + step);
}

// Cambio automático de imagen cada 4 segundos
setInterval(() => {
  moveHomeSlide(1);
}, 4000);


// ==================================
// 2. PEDIDOS DIRECTOS POR WHATSAPP
// ==================================
function pedirPorWhatsApp(nombreProducto, precio) {
  const telefono = "573214106340";
  const mensaje = encodeURIComponent(`¡Hola Dulce Miga! Quisiera hacer un pedido de: *${nombreProducto}* (${precio}). ¿Me confirman disponibilidad por favor?`);
  window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
}

// Generador de botones cortos con logo de WhatsApp integrado
function crearBotonWhatsApp(nombre, precio) {
  return `<button class="button button-small btn-whatsapp-icon" onclick="pedirPorWhatsApp('${nombre}', '${precio}')">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.006 3.674 3.749-1.005zm12.185-5.362c-.272-.136-1.611-.796-1.861-.887-.25-.091-.432-.136-.614.136-.182.273-.705.887-.864 1.069-.159.182-.318.205-.59.069-.273-.136-1.151-.424-2.193-1.353-.812-.724-1.36-1.619-1.52-1.892-.159-.273-.017-.42.119-.556.123-.122.273-.318.409-.477.136-.159.182-.273.273-.455.091-.182.045-.341-.023-.477-.068-.136-.614-1.477-.841-2.023-.222-.533-.448-.461-.614-.469-.159-.008-.341-.01-.523-.01s-.477.068-.727.341c-.25.273-.955.932-.955 2.273s.977 2.636 1.114 2.818c.136.182 1.923 2.936 4.659 4.116.651.281 1.159.45 1.556.576.654.208 1.25.179 1.72.109.524-.078 1.611-.659 1.838-1.296.227-.636.227-1.159.159-1.296-.068-.137-.25-.205-.523-.341z"/>
    </svg>
    Pedir
  </button>`;
}


// ==================================
// 3. FILTROS EN CATÁLOGO DE PRODUCTOS
// ==================================
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-button");
  const cards = document.querySelectorAll(".catalog-grid .product-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(item => item.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      cards.forEach(card => {
        card.hidden = filter !== "todos" && card.dataset.category !== filter;
      });
    });
  });
}


// ==================================
// 4. FORMULARIO DE CONTACTO A WHATSAPP
// ==================================
function setupContactForm() {
  const form = document.getElementById("whatsapp-order-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const product = document.getElementById("product").value.trim();
    const details = document.getElementById("details").value.trim();

    const telefono = "573214106340";
    let text = `¡Hola Dulce Miga! Mi nombre es *${name}*.\nMe gustaría pedir/consultar: *${product}*.`;
    if (details) {
      text += `\nDetalles adicionales: ${details}`;
    }

    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(text)}`, '_blank');
  });
}


// ==================================
// 5. INICIALIZACIÓN GLOBAL
// ==================================
document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico en el footer
  document.querySelectorAll(".year").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  // Menú hamburguesa responsivo para celulares
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
  }

  setupFilters();
  setupContactForm();
});

function moveHomeSlide(step) {
  const slides = document.querySelectorAll('.home-carousel .carousel-slide');
  if (!slides.length) return; // Evita errores si la slide no existe en otra página
  // ... resto del código
}