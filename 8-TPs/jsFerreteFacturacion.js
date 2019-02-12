/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var uno =parseInt(document.getElementById("PrecioUno").value);
    var dos =parseInt(document.getElementById("PrecioDos").value);
    var tres =parseInt(document.getElementById("PrecioTres").value);
    var suma = uno + dos + tres;

	alert("La suma es " + suma);
}
function Promedio () 
{   
    var uno =parseInt(document.getElementById("PrecioUno").value);
    var dos =parseInt(document.getElementById("PrecioDos").value);
    var tres =parseInt(document.getElementById("PrecioTres").value);
    var suma = uno + dos + tres;

	var promedio = suma/3;
    alert("El promedio es " + promedio);

}
function PrecioFinal () 
{
    var uno =parseInt(document.getElementById("PrecioUno").value);
    var dos =parseInt(document.getElementById("PrecioDos").value);
    var tres =parseInt(document.getElementById("PrecioTres").value);
    var suma = uno + dos + tres;
	var iva = suma + (suma*21)/100;
    alert("El precio final + IVA es " + iva);
}