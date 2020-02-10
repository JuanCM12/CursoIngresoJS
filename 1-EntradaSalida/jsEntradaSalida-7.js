/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numerouno = parseInt(document.getElementById("numeroUno").value);  
    var numerodos = parseInt(document.getElementById("numeroDos").value);
    var resultado;

    resultado = (numerouno + numerodos);

    alert ("La Suma es " + resultado);
	
}

function restar()
{
    var numerouno = parseInt(document.getElementById("numeroUno").value);
    var numerodos = parseInt(document.getElementById("numeroDos").value);
    var resultado;

    resultado = (numerouno - numerodos);

    alert ("La Resta es " + resultado);
}

function multiplicar()
{ 
   var numerouno = parseInt(document.getElementById("numeroUno").value);
   var numerodos = parseInt(document.getElementById("numeroDos").value);
   var resultado;

   resultado = (numerouno * numerodos);
    
   alert ("La Multiplicacion es " + resultado);
}

function dividir()
{
  var numerouno = parseInt(document.getElementById("numeroUno").value);
  var numerodos = parseInt(document.getElementById("numeroDos").value);
  var resultado = (numerouno / numerodos);

  alert ("La Division es " + resultado);
	
}

