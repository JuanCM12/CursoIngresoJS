function mostrar()
{

    var numero1;
    var numero2;
    var suma;
    var resta;
    numero1 = parseInt(prompt("Ingrese un numero"));
    numero2 = parseInt(prompt("Ingrese otro numero"));
    if(numero1 == numero2){
        alert ("El resultado es " + numero1 + numero2);
    }else if (numero1 > numero2) {
       resta = (numero1 - numero2);
       alert ("El primer numero es mayor que el segundo por lo tanto la resta es de " + resta);
    }else if (numero1 < numero2) {
        suma = (numero1 + numero2);
        alert ("El primer numero es menor por lo tanto la suma da " + suma);
    }if (suma > 10){
        alert ("La suma es " + suma + " Y supero el 10");
    }
        
    }

