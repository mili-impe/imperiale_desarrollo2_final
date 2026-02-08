$(document).ready(function () {

  /* PRODUCTOS */
  $('.productos-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });
 /* GALERÍA / BANNERS */
  $('.galeria-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 800,
    navText: [
      '<span class="galeria-prev">‹</span>',
      '<span class="galeria-next">›</span>'
    ]
  });

});

  /* =====================
     WHATSAPP plugin
     ===================== */
$(function () {
  $('#whatsapp-button').floatingWhatsApp({
    phone: '5491151367018', // SIN + ni espacios
    popupMessage: 'Hola 👋 ¿en qué podemos ayudarte?',
    message: 'Hola, quiero hacer una consulta ☕',
    showPopup: true,
    showOnIE: false,
    headerTitle: 'Café Martínez',
    headerColor: '#25D366',
    backgroundColor: '#25D366',
    position: 'right'
  });
});

