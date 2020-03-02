function mostrar()
{
 var precio;
 var porcentaje;
 var descuento;
 precio = parseInt(prompt("Ingrese el precio"));
 porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento"));
 descuento = precio - (precio * porcentaje / 100);
 document.getElementById("elPrecioFinal").value= descuento;
}
