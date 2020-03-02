function mostrar()
{
    var numeroUno;
    var numeroDos;
    var division;
    var suma;
    numeroUno = parseInt(prompt("Ingrese otro numero"));
    numeroDos = parseInt(prompt("Ingrese un numero"));
    if(numeroDos == numeroUno){
        alert ("La respuesta es " +numeroUno + numeroDos);
    }if(numeroUno > numeroDos){
        division = numeroUno / numeroDos;
        alert ("La respuesta es " + division);
    }if (numeroUno < numeroDos) {
        
        suma = (numeroUno + numeroDos);
        if(suma < 50){
            alert ("El resultado es " + suma + " Y ES MENOR A 50");
        }else alert("El resultado es " + suma);
    }

}
