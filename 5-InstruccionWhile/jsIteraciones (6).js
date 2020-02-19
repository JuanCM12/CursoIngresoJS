function mostrar() {
  var numeroingresado;
  var contador = 0;
  var acumulador = 0;
  var promedio;

  do{
    numeroingresado = prompt("Ingrese numero");
    numeroingresado = parseInt(numeroingresado);


  while (isNaN(numeroingresado)) {
    numeroingresado = prompt("Lo que ingreso no es un numero, reingrese");
  }
  contador++;
  acumulador = acumulador + numeroingresado;

}while (contador < 5 );

  document.getElementById("suma").value = acumulador;
  promedio = acumulador / 5
  document.getElementById("promedio").value = promedio;

}
//FIN DE LA FUNCIÓN
