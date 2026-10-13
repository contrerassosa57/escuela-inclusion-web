
// CAMBIA este número por el WhatsApp de tu escuela.
// Usa el código del país y el número, sin +, espacios ni guiones.
const telefonoEscuela = "521234567890";

document.getElementById("anio").textContent =
  new Date().getFullYear();

document.getElementById("formulario").addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const texto =
    "Hola, me comunico desde la página web de la escuela.\n\n" +
    "Nombre: " + nombre + "\n" +
    "Correo: " + (correo || "No proporcionado") + "\n" +
    "Consulta: " + mensaje;

  const enlace =
    "https://wa.me/" + telefonoEscuela +
    "?text=" + encodeURIComponent(texto);

  window.open(enlace, "_blank");
});
