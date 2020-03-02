function mostrar()
{
    var marca;
    var temperatura;
    var peso;
    var respuesta = "si";
    var temperaturaPar=0;
    var flag=0;
    var productoMasPesado;
    var marcaMasPesada;
    var acumuladorBajoCero=0;
    var acumuladorPeso=0;
    var promedio;
    var contadorPeso=0;

    while (respuesta == "si") 
    {
     marca = prompt("Ingrese marca");
     
    temperatura = parseInt(prompt("Ingrese temperatura entre 30 y -30 grados"));
    while (temperatura < -30 || temperatura > 30 ) 
    {
     temperatura = parseInt(prompt("Ingrese una temperatura dentro del rango"));   
    }

    peso = parseInt(prompt("Ingrese el peso entre 1 y 100"));
    while (peso > 100 || peso < 1)
    {
     peso = parseInt(prompt("Ingrese un peso dentro del rango"));   
    }

    if (temperatura % 2 == 0)
    {
       temperaturaPar++;
    }
    if (flag == 0)
    {
      productoMenosPesado= peso;
      productoMasPesado = peso;
      marcaMasPesada = marca;
      flag = 1;
    }
    if (peso > productoMasPesado) 
    {
     productoMasPesado= peso;
     marcaMasPesada= marca;   
    }
    if( temperatura < 0)
    {
        acumuladorBajoCero++;
    }
    if (peso < productoMenosPesado)
    {
      productoMenosPesado = peso;
    }
    contadorPeso++;
    acumuladorPeso += peso;
    respuesta = prompt("Si desea continuar presione \"si\" de lo contrario ingrese \"no\" ");
}
    promedio = acumuladorPeso/contadorPeso;
    document.write("La cantidad de temperaturas pares es " + temperaturaPar + "<br>" +
                    "La marca del producto mas pesado es " + marcaMasPesada + "<br>" +
                    "La cantidad de productos que se conservan a menos 0 grados es " + acumuladorBajoCero + "<br>" +
                    "El promedio de pesos es " + promedio + "<br>" +
                    "El peso maximo es " + productoMasPesado + "<br>" +
                    "El peso minimo es " + productoMenosPesado + "<br>");

}
