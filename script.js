document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el div con id "card-bo"
  const cardBO = document.getElementById("card-bo");

  // Agrega un evento de clic
  cardBO.addEventListener("click", () => {
    // Redirige al archivo HTML deseado
    window.location.href = "bo.html";
  });
});

