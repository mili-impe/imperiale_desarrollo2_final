const botones = document.querySelectorAll(".agregar-btn");
const lista = document.getElementById("lista-carrito");
const totalEl = document.getElementById("total");

let total = 0;

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    const nombre = btn.dataset.nombre;
    const precio = parseInt(btn.dataset.precio);

    const li = document.createElement("li");
    li.textContent = `${nombre} — $${precio.toLocaleString()}`;
    lista.appendChild(li);

    total += precio;
    totalEl.textContent = total.toLocaleString();
  });
});
