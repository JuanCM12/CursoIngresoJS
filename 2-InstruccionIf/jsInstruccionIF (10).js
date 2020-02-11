function mostrar() {
  //Genero el número RANDOM entre 1 y 10
  var random;

  random = Math.floor(Math.random() * 11);

  if (random >= 9) {
    alert(random + " EXCELENTE");
  } else if (random >= 4) {
    alert(random + " APROBO");
  } else {
    alert(random + " Vamos, la proxima se `puede");
  }
} //FIN DE LA FUNCIÓN
