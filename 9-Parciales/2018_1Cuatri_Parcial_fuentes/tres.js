function mostrar()
{
 var precio;
 var descuento;
 var operacion1;
 var operacion2;

 precio = parseInt(prompt("Ingrese el precio que desee"));
 descuento = parseInt(prompt("Ingrese el descuento que desee"));
 operacion1 = (precio * descuento) / 100;
 operacion2 = precio - operacion1;
 document.getElementById("elPrecioFinal").value = operacion2;
 
}
