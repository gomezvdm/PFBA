// Función que se ejecuta cuando se carga la página
function verificarEdad() {
    // Pide al usuario que ingrese su edad
    var edad = prompt("Por favor, ingresa tu edad:");

    // Verifica si la edad es mayor o igual a 18 años
    if (edad >= 18) {
      alert("Bienvenido/a a nuestra página de bebidas alcohólicas.");
    } else {
      alert("Lo siento, debes tener al menos 18 años para acceder a esta página.");
      // Redirecciona al usuario a otra página
      window.location.href = "https://www.example.com/otra-pagina.html";
    }}