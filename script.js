// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Función para redirigir según la sección
  window.goTo = function(section) {
    switch(section) {
      case "BO":
        window.location.href = "bo.html";
        break;
      case "CS":
        window.location.href = "customer-support.html";
        break;
      case "ISM":
        window.location.href = "ism.html";
        break;
      case "TL":
        window.location.href = "tl.html";
        break;
      case "WIKI":
        window.location.href = "wiki.html";
        break;
      case "POSTULACION":
        window.location.href = "postulacion.html";
        break;
      case "SLACK":
        window.location.href = "slack.html";
        break;
      default:
        alert("Sección no encontrada: " + section);
    }
  };
});

