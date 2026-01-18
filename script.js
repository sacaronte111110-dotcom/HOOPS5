const boton = document.querySelector("button");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "Intento registrado 🏀";
});
