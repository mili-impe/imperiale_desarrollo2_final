
const productos = [
  {
    id: 1,
    nombre: "Capuccino",
    descripcion: "Café 50% - Leche 50%",
    precio: 8500,
    imagen: "img/Rectangle7.jpg"
  },
  {
    id: 2,
    nombre: "Chai Latte",
    descripcion: "Té 30% - Leche 70%",
    precio: 8500,
    imagen: "img/Rectangle9.jpg"
  },
  {
    id: 3,
    nombre: "Macchiato",
    descripcion: "Café 80% - Leche 20%",
    precio: 8500,
    imagen: "img/Rectangle11.jpg"
  },
  {
    id: 4,
    nombre: "Espresso",
    descripcion: "Café 90% - Leche 10%",
    precio: 8500,
    imagen: "img/Rectangle13.jpg"
  },
  {
    id: 5,
    nombre: "Chocolatada",
    descripcion: "Caliente o fría",
    precio: 8500,
    imagen: "img/leche-chocolatada-caratula-0848.jpg"
  },
  {
    id: 6,
    nombre: "Matcha Latte",
    descripcion: "30% matcha - 10% café - 60% leche",
    precio: 8500,
    imagen: "img/iced-matcha-latte.jpg"
  },
  {
    id: 7,
    nombre: "Frutos rojos latte",
    descripcion: "30% matcha - 10% café - 60% leche",
    precio: 8500,
    imagen: "img/mousse-cafe-frutos-rojos-postre.jpg"
  },
  {
    id: 8,
    nombre: "Bubble Tea",
    descripcion: "con perlas de tapioca",
    precio: 8500,
    imagen: "img/bubbletea.jpg"
  },
  {
    id: 9,
    nombre: "Zumo + fruta",
    descripcion: "con perlas de tapioca",
    precio: 8500,
    imagen: "img/zumo-y-fruta.jpg"
  }
];

const contenedor = document.getElementById("lista-productos");

productos.forEach(prod => {
  contenedor.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card h-100 shadow-sm">
        <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
        <div class="card-body text-center">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="small">${prod.descripcion}</p>
          <p class="precio fw-bold">$${prod.precio}</p>
          <button class="btn btn-agregar w-100" onclick="agregarAlCarrito(${prod.id})">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  `;
});

let carrito = [];

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);

  const item = carrito.find(p => p.id === id);

  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();

  // 👉 REDIRECCIÓN AL CARRITO
  window.location.href = "Carrito/index.html";
}
