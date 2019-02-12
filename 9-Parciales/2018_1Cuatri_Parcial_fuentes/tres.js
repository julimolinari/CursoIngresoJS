function mostrar()
{
    var precio = parseInt(prompt("Ingrese el precio: "));
    var porcentaje = parseInt(prompt("Ingrese e porcentaje descuento: ")); 
 
    var total = precio - [(precio*porcentaje)/100];

     document.getElementById("elPrecioFinal").value = total;


}
