
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // evita envío real

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  const nombre = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const asunto = form.querySelectorAll('input[type="text"]')[1].value; 
  const mensaje = form.querySelector("textarea").value;

  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Asunto:", asunto);
  console.log("Mensaje:", mensaje);

  alert("¡Mensaje enviado correctamente!");

  form.reset();
  form.classList.remove("was-validated");
});
