function mostrar()
{
  //SWITCH

  var precio;
  var pago;
  var paquete;

  precio = prompt("Precio habitación: ");
  precio = parseInt(precio);

  pago = prompt("Ingrese metodo de pago: Visa - Paypal - MercadoPago - Efectivo - Otro");


  switch (pago){
    case "Visa":
    case "MercadoPago":
    precio = precio - (precio*10/100);
    alert("El precio con 10% menos es " + precio);
    break;

    case "PayPal":
    precio = precio - (precio*15/100);

    paquete= prompt("Ingrese paquete: A-todoIncluido/B-soloDesayunos/C-Ninguno");
    switch(paquete){
      case "A":
      precio = precio - (precio*15/100);
      break;

    }
    alert("El precio con descuentoes " + precio);
    break;

    case "Efectivo":
    precio = precio - (precio*20/100);
    paquete= prompt("Ingrese paquete: A-todoIncluido/B-soloDesayunos/C-Ninguno");

    switch(paquete){
      case "B":
      precio = precio - (precio*10/100);
      break;

      case "A":
      precio = precio - (precio*15/100);
      break;

    }

    alert("El precio con descuentoes " + precio);
    break;

    case "Otro":
    precio = precio - (precio*5/100);
    alert("El precio con 5% menos es " + precio);
    break;



  }


}
