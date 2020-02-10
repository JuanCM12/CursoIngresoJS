/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
 var importe1 = parseInt(document.getElementById("importe").value);
 var descuento = (importe1 * 0.25);
 var resultado = (importe1 - descuento);

 document.getElementById("resultado").value = resultado;
}
