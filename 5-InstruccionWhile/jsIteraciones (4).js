function mostrar()
{

  var numero = prompt("ingrese un número entre 0 y 10.");

  while (numero > 10){

    alert("ingrese un numero mas bajo");
    numero = prompt("ingrese nuevo numero");

  }

  alert("numero: "+ numero);


}

//FIN DE LA FUNCIÓN
