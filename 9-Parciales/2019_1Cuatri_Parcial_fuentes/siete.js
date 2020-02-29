function mostrar()
{

    var altura;
    var sexo;
    var sexoMin;
    var acumulador=0;
    var promedio;
    var alturaMinima =0;
    var acumuladorMuj=0;
    var contador=0;
    
    while (contador < 6){
        altura = parseInt(prompt("Ingresar altura"));
        while(isNaN(altura)){
            altura = parseInt(prompt("ingrese una altura valido"));
        }
        sexo = (prompt("Ingrese sexo").toLowerCase());
        while(sexo != "m" && sexo != "f"){
            sexo = prompt("ingrese un sexo valido");
        }
        var flag=0;
        if (flag == 0 ){
            alturaMinima = altura;
            sexoMin = sexo ;
            flag =1;
        }
        if (altura < alturaMinima){
            alturaMinima = altura;
            sexoMin = sexo ;
        }
        
        if (sexo == "f" && altura > 190){
           acumuladorMuj++;            
        }

        acumulador += altura;
        contador++;
    }
    promedio = acumulador/contador;
    console.log("El promedio de las alturas es de " + promedio + "\n"  + 
                   "La altura minima es de " + alturaMinima + " y este es " + sexoMin + "\n" +
                   "Y la cantidad de mujeres que superen los 190 cm es de " + acumuladorMuj ); 
}
