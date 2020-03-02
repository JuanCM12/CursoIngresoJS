function mostrar()
{
var letra;
var numero;
var respuesta="si";
var acumuladorPares=0;
var acumuladorImpares=0;
var acumuladorCeros=0;
var sumaPositivos=0;
var sumaNegativos=0;
var promedioPositivos;
var numeroMax;
var numeroMin;
var letraMax;
var letraMin;
var flag=0;
var acumuladorPositivos=0;

    while (respuesta == "si") 
{
    letra = (prompt("Ingrese una letra")).toLowerCase();
  while (!(isNaN(letra))) 
  {
    letra = (prompt("Ingrese un caracter valido")).toLowerCase();
  }   
   numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
   while (isNaN(numero) || numero < -100 || numero > 100) 
   {
    numero = parseInt(prompt("Ingrese un numero dentro del rango"));
   }
   if (numero % 2 == 0)
   {
    acumuladorPares++;
   }else if (numero % 2 != 0) 
   {
    acumuladorImpares++;    
   }
    if (numero == 0)
    {
        acumuladorCeros++;
    }else if (numero > 0) 
    {
     sumaPositivos += numero;  
     acumuladorPositivos++;  
    }else if (numero < 0)
    {
        sumaNegativos += numero;
    }
     if (flag ==0) 
     {
      numeroMax=numero;
      numeroMin=numero;
      letraMax=letra;
      letraMin=letra;
      flag=1;   
     }
     if (numero > numeroMax) 
     {
        numeroMax = numero;
        letraMax =letra;
     }
    if (numero < numeroMin) 
     {
        numeroMin= numero;
        letraMin= letra;   
     }
     respuesta= prompt("si desea continuar ingrese \"si\"  de lo contrario \"no\" ");
}
    promedioPositivos= sumaPositivos/ acumuladorPositivos;
    document.write("La cantidad de numeros pares es " + acumuladorPares + "<br>" +
                    "La cantidad de numeros impares es " + acumuladorImpares + "<br>" +
                    "La cantidad de ceros es " + acumuladorCeros + "<br>" +
                    "El promedio de positivos es " + promedioPositivos + "<br>" +
                    "La suma de negativos es " + sumaNegativos + "<br>" +
                    "El numero maximo es " + numeroMax + " Y su letra es " + letraMax + "<br>" +
                    "El numero minimo es " + numeroMin + " Y su letra es " + letraMin);
}
