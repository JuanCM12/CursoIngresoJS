function mostrar() {
    var nombreAnimal;
    var peso = 0;
    var temperatura = 0;
    var respuesta = "si";
    var contador = 0;
    var animalMasPesado = 0;
    var temperataraDelAnimalMasPesado = 0;
    var animalesQueVivenAceroGrados = 0;
    var acumuladorPeso = 0;
    var animalesIngresados;
    var promedioPeso;
    var contador;
    var pesoMaxBajoCeros;
    var pesominBajoCeros;
    var nombreAnimalMasPesado;
    var contadorTemperaturaPar;

    while (respuesta == "si") {
        nombreAnimal = prompt("Ingrese un nombre de animal");
        while (typeof nombreAnimal != 'string') {
            nombreAnimal = prompt("Ingrese un nombre de animal");
        }
        peso = parseInt(prompt("Ingrese el peso del animal"));
        while ((isNaN(peso) || peso < 1 || peso > 1000)) {
            peso = parseInt(prompt("Ingrese el peso del animal"));
        }
        temperatura = parseInt(prompt("Ingrese la temperatara"));
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Ingrese la temperatara"));
        }
        if (temperatura % 2 == 0) {
            contadorTemperaturaPar++;
        }
        if (contador == 0) {
            temperataraDelAnimalMasPesado = temperatura;
            animalMasPesado = peso;
            nombreAnimalMasPesado = nombreAnimal;
            contador == 1;
        }
        if (peso > animalMasPesado) {
            temperataraDelAnimalMasPesado = temperatura;
            animalMasPesado = peso;
            nombreAnimalMasPesado = nombreAnimal;
        }
        if (temperatura < 0) {
            animalesQueVivenAceroGrados++;
        }
        if (contador == 0 && temperatura < 0) {
            pesoMaxBajoCeros = peso;
            pesominBajoCeros = peso;
            contador == 1;
        } else if (peso < pesominBajoCeros) {
            pesoMinBajoCeros = peso;
        } else if (peso > pesoMaxBajoCeros) {
            pesoMaxBajoCeros = peso;
        }

        acumuladorPeso += peso;
        contador++;
        respuesta = prompt("Si desea continuar ingrese si");
    }
    promedioPeso = acumuladorPeso / contador;
    document.write("La cantidad de temperaturas pares es de " + contadorTemperaturaPar + "<br>" +
        "El animal mas pesado es " + nombreAnimalMasPesado + " y su temperatura es de " + temperataraDelAnimalMasPesado + "<br>" +
        "La cantidad de animales que viven a 0 grados es de " + animalesQueVivenAceroGrados + "<br>" +
        "El promedio de peso de todos los animales es de " + promedioPeso + "<br>" +
        "El peso maximo de los animales que viven bajo cero grados es de " + pesoMaxBajoCeros + "<br>" +
        "El peso minimo de los animales que viven bajo cero grados es de " + pesominBajoCeros);


}
