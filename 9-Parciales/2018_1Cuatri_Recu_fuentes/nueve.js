function mostrar()
{
var animal;
var peso;
var temperatura;
var respuesta="si";
var acumuladorTemperaturasPar=0;
var flag=0;
var animalMasPesado;
var nombreAnimalMasPesado;
var temperaturaAnimalMasPesado;
var acumuladorTemperaturaMenosCero=0;
var acumuladorPeso=0;
var promedioPeso;
var pesoMaxBajoCero;
var pesoMinBajoCero;
var contador=0;
while (respuesta == "si") {
    animal = prompt("Ingrese un animal");
    while (!(isNaN(animal))) 
    {
        animal = prompt("Reeingrese el animal");
    }
    peso = parseInt(prompt("Ingrese el peso del animal"));
    while (isNaN(peso) || peso < 1 || peso > 1000 ) 
    {
    peso = parseInt(prompt("no ha ingresado un peso, ingrese el peso correcto"));
    }
    temperatura = parseInt(prompt("Ingrese la temperatura del habitat"));
    while (temperatura < -30 || temperatura > 30) 
    {
     temperatura = parseInt(prompt("Ingrese la temperatura dentro del rango"));
    }
    if (temperatura % 2 ==0)
    {
        acumuladorTemperaturasPar++;
    }
    if (flag == 0)
    {
        animalMasPesado = peso;
        nombreAnimalMasPesado = animal;
        temperaturaAnimalMasPesado = temperatura;
        flag =1;
    }
    if (peso > animalMasPesado)
    {
        temperaturaAnimalMasPesado = temperatura;
        nombreAnimalMasPesado = animal;
    }
    if (temperatura < 0)
    {
        acumuladorTemperaturaMenosCero++;
    }
    if (flag == 0 && temperatura < 0)
    {
        pesoMaxBajoCero= peso;
        pesoMinBajoCero =peso;
        flag =1;
    }
    if (temperatura < 0 && peso > pesoMaxBajoCero)
    {
        pesoMaxBajoCero = peso;
    }if (temperatura < 0 && peso < pesoMinBajoCero)
    {
        pesoMinBajoCero = peso;
    }

    acumuladorPeso += peso;
    contador++;
    respuesta = prompt("Si desea continuar ingrese \"si\" de lo contrario ingrese \"no\" ");
}
    promedioPeso = acumuladorPeso / contador;
    document.write("La cantidad de temperaturas par es " + acumuladorTemperaturasPar + "<br>" +
                    "El animal mas pesado es " + animalMasPesado + " Y su temperatura es " + temperaturaAnimalMasPesado + "<br>" +
                    "Los animales que viven a cero grados son " + acumuladorTemperaturaMenosCero + "<br>" +
                    "El promedio de peso de todos los animales es de " + promedioPeso + "<br>" +
                    "El peso maximo de animales que viven a menos cero grados es " + pesoMaxBajoCero + "<br>" +
                    "El peso minimo de animales que viven a menos cero grados es " + pesoMinBajoCero );

}
