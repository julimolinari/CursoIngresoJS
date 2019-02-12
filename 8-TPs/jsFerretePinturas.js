/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF = parseInt(document.getElementById("Temperatura").value);
	
	var cent = Math.floor((temperaturaF - 32) * 5/9);
	
	alert("A " + temperaturaF + " grados fahrenheit son "+ cent + " grados centígrados");
	
	
}

function CentigradosFahrenheit () 
{
	var temperaturaC = parseInt(document.getElementById("Temperatura").value);
	
	var fahr = Math.floor((temperaturaC * 1.8) + 32);
	
	alert("A " + temperaturaC + " grados centígrados son "+ fahr + " grados fahrenheit");
	
	
}
