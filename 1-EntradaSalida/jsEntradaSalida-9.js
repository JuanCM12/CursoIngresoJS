/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 var sueldo1 = parseInt(document.getElementById("sueldo").value);
 var resultado = (sueldo1 * 0.10);

 document.getElementById("resultado").value = resultado;

 
	
}
