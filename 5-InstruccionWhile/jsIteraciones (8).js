function mostrar()
{

	var contador=0;
	var acumulador=0;
	var positivo=0;
	var negativo=1;

  var respuesta='si';

  while (respuesta == "si"){

    var numero = parseInt(prompt("Ingrese un numero: "))
    if(isNaN(numero)){
      continue
    }




    respuesta= prompt("desea seguir ingresando numeros? si/no");

    if(numero >= 0){
      positivo = numero + positivo;
    }else{
      negativo = numero * negativo;
    }


    contador++;
    }

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
