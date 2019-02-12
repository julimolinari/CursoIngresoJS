/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);

    var cantidad = [2*(largo + ancho)]*3;

    alert("La cantidad de alambre a comprar es: " + cantidad);
}
function Circulo () 
{
    var radio = parseInt(document.getElementById("Radio").value);

    var cantidad = Math.floor((2* Math.PI*radio) * 3);

    alert("La cantidad de alambre a comprar es: " + cantidad);
	
}
function Materiales () 
{
	var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var area = largo * ancho ;

    var cemento = area * 2;
    var cal = area * 3;

    alert("Bolsas de cemento: " + cemento + " y Bolsas de cal: " + cal);


}