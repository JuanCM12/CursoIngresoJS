function mostrar()
{

    var numero;
    var letra;
    var respuesta = "si";
    var contadorPares=0;
    var contadorImpares=0;
    var contadorCeros=0;
    var acumuladorNegativos=0;
    var acumuladorPositivos=0;
    var promedio;
    var flag=0;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaxima;
    var letraMinima;
    var contadorPositivos=0;
        while (respuesta == "si") 
    {
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while (isNaN(numero) || numero < -100 || numero > 100) 
        {
        numero = parseInt(prompt("Ingrese un numero correcto"));   
        }   
        letra = prompt("Ingrese una letra");
        while ( typeof (letra) != "string" ) 
        {
        letra = prompt("Ingrese una LETRA!!");
        }
        if (numero % 2 == 0)
        {
        contadorPares++;
        }
        if (numero % 2 != 0)
        {
        contadorImpares++;
        }
        if (numero == 0)
        {
        contadorCeros++;
        }
        if (numero < 0)
        {
        acumuladorNegativos += numero;
        }
        if (numero >= 0)
        {
        acumuladorPositivos += numero;
        contadorPositivos++;
        }
        if (flag == 0)
        {
        numeroMaximo = numero;
        numeroMinimo = numero;
        letraMaxima = letra;
        letraMinima = letra;
        flag =1;
        }
        if (numero > numeroMaximo)
        {
        numeroMaximo = numero;
        letraMaxima = letra;
        }
        if (numero < numeroMinimo)
        {
        numeroMinimo = numero;
        letraMinima = letra;
        }
        respuesta = prompt("Si desea continuar presione \"si\" de lo contrario presione cualquier letra o numero");

    }
        promedio = acumuladorPositivos / contadorPositivos;
        document.write( " La cantidad de numeros pares es " + contadorPares + "<br>" +
                    " La cantidad de numeros impares es " + contadorImpares + "<br>" +
                    " La cantidad de ceros es de " + contadorCeros + "<br>" +
                    " El promedio de positivos es de " + promedio + "<br>" +
                    " La suma de numeros negativos da " + acumuladorNegativos + "<br>" +
                    " El numero maximo es " + numeroMaximo + " Y su letra es " + letraMaxima + "<br>" +
                    " El numero minimo ingresado es " + numeroMinimo + " Y su letra es " + letraMinima + "<br>");
}
