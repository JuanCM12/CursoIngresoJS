function mostrar()
{
    var nota;
    var sexo;
    var contador=0;
    var promedio=0;
    var acumuladorNota=0;
    var flag=0;
    var sexoMinimo;
    var notaMinima;
    var contadorVarones=0;

    while (contador < 6)
    {
        nota = parseInt(prompt("Ingrese una nota"));
        while (isNaN(nota) || nota < 0 || nota > 10) 
        {
        nota = parseInt(prompt("Ingrese una nota valida"));
        }

        sexo = (prompt("Ingrese un sexo, m para hombres y f para mujeres" )).toLowerCase();
        while (!(isNaN(sexo))) 
        {
        sexo = prompt("Ingrese un sexo correcto");
        }
        if (flag ==0)
        {
        notaMinima= nota;
        sexoMimimo= sexo;
        flag =1;
        }
        if (nota < notaMinima)
        {
        notaMinima = nota;
        sexoMimimo = sexo;
        }
        if (nota <= 6 && sexo == "m")
        {
        contadorVarones++;
        }
        acumuladorNota += nota;
        contador++;
    }
    promedio = acumuladorNota / contador;
    alert ("El promedio de las notas es " + promedio + " La nota mas baja es " + notaMinima + 
           " y esta persona es " + sexoMimimo + " La cantidad total de varones que sacaron 6 o mas es " + contadorVarones);

}