// ===============================
// 1) Leer carrito desde localStorage
// ===============================
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ===============================
// ELEMENTOS DEL DOM
// ===============================
const lista = document.getElementById("productList");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");

// ===============================
// 2) RENDER DEL CARRITO
// ===============================
function renderCarrito() {
  lista.innerHTML = "";

  let subtotal = 0;

  carrito.forEach((prod, i) => {
    subtotal += prod.precio;

    lista.innerHTML += `
      <div class="item">
        <div class="item-left">
          <div class="item-thumb"><img src="../${prod.imagen}" alt=""></div>
          <div class="item-meta">
            <h4 class="item-name">${prod.nombre}</h4>
            <p class="item-desc">${prod.descripcion}</p>
          </div>
        </div>

        <div class="item-right d-flex align-items-center gap-2">
          <span class="item-price">$${prod.precio}</span>
          <button class="btn btn-danger btn-sm" onclick="eliminar(${i})">
            Quitar
          </button>
        </div>
      </div>
    `;
  });

  subtotalEl.innerText = "$" + subtotal;
  totalEl.innerText = "$" + subtotal; // envío gratis
}

// ===============================
// 3) ELIMINAR PRODUCTO
// ===============================
function eliminar(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
}

// ===============================
// 4) Ejecutar al cargar página
// ===============================
renderCarrito();
