function mostrar()
{

	var contador=0;
	// declarar variables
  var min;
  var max;
	var respuesta='si';
  var primera = true; //una bandera

  while (respuesta == "si"){

    var numero = parseInt(prompt("Ingrese un numero: "))
    if(isNaN(numero)){
      continue
    }

    if (primera){
      max= numero;
      min=numero;
      primera= false;
    }else{
      if(numero>max){
        max=numero;
      }else{
        if(numero<min){
          min=numero;
        }
      }
    }
    contador++;

    respuesta= prompt("desea seguir ingresando numeros? si/no");


    }


    document.getElementById("maximo").value= max;
    document.getElementById("minimo").value= min;

}//FIN DE LA FUNCIÓN
