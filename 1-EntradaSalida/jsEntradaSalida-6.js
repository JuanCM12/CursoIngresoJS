/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var a;

  var b;

  var resultado;

  a = parseInt(document.getElementById("numeroUno").value);
  b = parseInt(document.getElementById("numeroDos").value);
  resultado = (a + b);
  alert ("el resultado es " + resultado );

}

