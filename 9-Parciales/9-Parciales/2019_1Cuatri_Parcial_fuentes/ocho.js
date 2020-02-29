function mostrar()
{
var numero;
var letra;
var respuesta = "si";
var numerosPar=0;
var numeroImpar=0;
var ceros = 0;
var numerosPositivos=0;
var acumuladorPositivos=0;
var numerosNegativos=0;
var numeroMax=0;
var numeroMin=0;
var letraMax;
var letraMin;
var promedio = 0;
var flag=0;
while (respuesta == "si"){
    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero) || numero < -100 || numero > 100 ){
        numero = parseInt(prompt("Ingrese un numero valido"));
    }
    letra = prompt("Ingrese una letra");
    while (typeof letra != 'string'){
        letra = prompt("Ingrese una letra valida");
    }
    if (numero % 2 == 0){
        numerosPar++;
        
    }else {numeroImpar++;}
    if (numero == 0){
        ceros++;
    }
    if(flag ==0){
        numeroMin = numero;
        numeroMax = numero;
        letraMin = letra;
        letraMax = letra;
        flag=1;
    }
    if (numero < numeroMin){
        numeroMin = numero;
        letraMin = letra;
    }else if (numero > numeroMax){
        numeroMax = numero;
        letraMax = letra;
    }
    if (numero >= 0) {
        numerosPositivos++;
        acumuladorPositivos += numero;
    }else {numerosNegativos += numero;}
    respuesta = prompt("Si desea continuar ingrese \"si\" de lo contrario ingrese \"no\"");

}
promedio = acumuladorPositivos / numerosPositivos;
console.log("La cantidad de numeros pares es de " + numerosPar + "\n" +
            "La cantidad de numeros impares es de " + numeroImpar + "\n" + 
            "La cantidad de ceros es de " + ceros + "\n" + 
            "El promedio de positivos es de " + promedio + "\n" + 
            "La suma de negativos es de " + numerosNegativos + "\n" +
            "El numero maximo es " + numeroMax + " Y la letra es " + letraMax + "\n" +
            "El numero minimo es " + numeroMin + " Y la letra es " + letraMin); 
}