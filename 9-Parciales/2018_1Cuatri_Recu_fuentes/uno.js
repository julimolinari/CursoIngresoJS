
function mostrar()
{

  var import1;
  var import2;
  var import3;
  var import4;
  var suma;



  import1= prompt("Ingrese primer valor: ");
  import1 = parseInt(import1);

  import2= prompt("Ingrede segundo valor: ");
  import2=parseInt(import2);

  import3=prompt("Ingrese tercer valor: ");
  import3=parseInt(import3);

  import4 = prompt("Ingrese cuarto valor: ");
  import4=parseInt(import4);


  if (import1>=import2 && import1 >= import3 && import1 >= import4){
    alert(import1 + " es el número mas grande (primer importe)");
  }else{
    if(import2>import3 && import2>import4){
      alert(import2 + " es el número mas grande (segundo importe)");
    }else{
      if(import3 >import4){
        alert(import3 + " es el número mas grande (tercero importe)");
      }else{
        alert(import4 + " es el número mas grande (cuarto importe)");
      }
    }
  }
     suma = import1 + import2 +  import3 + import4;

     if (suma > 100){
       descuento = suma - ((10*suma)/100)
       alert ("El precio " + suma + " supera los 100, se hace 10% de descuento y queda en " + descuento);
     }else{
      if (suma > 50){
        descuento = suma - ((5*suma)/100)
        alert ("El precio " + suma + " supera los 50, se hace 5% de descuento y queda en " + descuento);
      }

     }


}
/*

var mascota1 = prompt("Ingrese nombre mascota: ");
    var peso1 = parseInt(prompt("Ingrese su peso: "));

    var mascota2 = prompt("Ingrese nombre de la otra mascota: ");
    var peso2 = parseInt(prompt("Ingrese su peso: "));




     var pesoTotal = peso1 + peso2;

    alert("Tenes dos mascotas " + mascota1 + " y "+mascota2+ ", que pesan " + peso1 + " y "+ peso2 + " la suma de los kilos es "+ pesoTotal);


*/



7/*

otra forma de hacerlo

con variable mayor

var mayor= import1;

if(import2>mayor){
  mayor=import2;
}

if(import3>mayor){
  mayor=import3;
}

if(import4>mayor){
  mayor=import4;
}



*/
