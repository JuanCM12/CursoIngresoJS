/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit;
    var conversion;
    
    fahrenheit = parseInt(document.getElementById("Temperatura").value);
    conversion = parseFloat((fahrenheit - 32)/1.8);
	alert (fahrenheit + " Grados Fahrenheit son " + conversion + " Grados Centigrados" );
}

function CentigradosFahrenheit () 
{
    var centigrados;
    var conversion;

    centigrados = parseInt(document.getElementById("Temperatura").value);
    conversion = parseFloat((centigrados * 9 / 5) + 32);
    alert (centigrados + " Grados Centigrados son " + conversion + " Grados Fahrenheit");
	
}
