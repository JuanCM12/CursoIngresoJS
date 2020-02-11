/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{
  var precio1;
  var precio2;
  var precio3;
  var resultado;
  precio1 = parseInt(document.getElementById("PrecioUno").value);
  precio2 = parseInt(document.getElementById("PrecioDos").value);
  precio3 = parseInt(document.getElementById("PrecioTres").value);
  resultado = (precio1 + precio2 + precio3);
  alert ("La suma total da " + resultado);


}
function Promedio ()
{
  var precio1;
  var precio2;
  var precio3;
  var resultado;
  var promedio;
  precio1 = parseInt(document.getElementById("PrecioUno").value);
  precio2 = parseInt(document.getElementById("PrecioDos").value);
  precio3 = parseInt(document.getElementById("PrecioTres").value);
  resultado = (precio1 + precio2 + precio3);
  promedio = (resultado /3);
  alert ("El promedio es " + promedio);




}
function PrecioFinal ()
{
  var precio1;
  var precio2;
  var precio3;
  var resultado;
  var iva;
  var preciofinal;
  precio1 = parseInt(document.getElementById("PrecioUno").value);
  precio2 = parseInt(document.getElementById("PrecioDos").value);
  precio3 = parseInt(document.getElementById("PrecioTres").value);
  resultado = (precio1 + precio2 + precio3);
  iva = (resultado * 0.21);
  preciofinal = (resultado + iva);
  alert ("El valor con iva es " + preciofinal);



}
