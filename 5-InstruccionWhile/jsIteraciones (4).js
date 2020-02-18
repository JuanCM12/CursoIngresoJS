function mostrar()
{
    
	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
    while (numero < 0 || numero > 9 || isNaN) {
		numero = parseInst(prompt("Numero incorrecto por favor ingrese un nuevo numero")); 
	}
      document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN