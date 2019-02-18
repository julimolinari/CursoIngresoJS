function mostrar()
{
  var compra = prompt("De cuanto es la compra?");

  parseInt(compra);

  var descuento = compra - (compra*10/100);

  var iva = descuento + (descuento*21/100);

  alert("Tu compra es de " + compra + " tenes un descuento del 10% queda en " + descuento +  " mas el iva es "+iva);

}
