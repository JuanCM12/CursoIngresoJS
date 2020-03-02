function mostrar()
{
        var nota;
        var sexo;
        var contador=0;
        var notaMaxima;
        var notaMinima;
        var sexoMax;
        var sexoMin;
        var contadorVarones=0;
        var acumuladorNotas=0;
        var promedio;

        while (contador < 6) 
    {
            nota = parseInt(prompt("Ingrese una nota entre 0 y 10"));
            while(isNaN(nota) && nota < 0 || nota > 10){
                nota = parseInt(prompt("Ingrese una nota dentro del rango"));
            }   
                sexo = (prompt("Ingrese f para sexo femenino y m para sexo masculino")).toLowerCase();
                
                //error
                while (sexo != "f" || sexo != "m") {
                sexo = (prompt("Ingrese un sexo correcto")).toLowerCase();  
            }
               //error
                if (contador == 0)
            {
                notaMaxima= nota;
                sexoMax=sexo;
                notaMinima= nota;
                sexoMin= sexo;
            }
                if (contador != 0 && nota < notaMinima)
            {
                notaMinima= nota;
                sexoMin= sexo;
            }   if (contador != 0 && nota > notaMaxima)
            {
                notaMaxima = nota;
                sexoMax=sexo;
            }
                if (sexo == "m" && nota >= 6 )
            {
                contadorVarones++;
            }
                acumuladorNotas += nota;
                contador++;

    }
            promedio= acumuladorNotas/contador;
            document.write("El promedio de notas es de " + promedio + "<br>" +
                "La nota mas baja es " + notaMinima + " y le pertenece a " + sexoMin +
                "La cantidad de varones cuya nota son 6 o mas es " + contadorVarones );

}
