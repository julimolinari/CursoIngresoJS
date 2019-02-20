function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta='si';


  while (respuesta == "si"){

  var numero = parseInt(prompt("Ingrese un numero: "))
  if(isNaN(numero)){
    continue
  }

  acumulador = numero + acumulador;
  contador++;

  respuesta= prompt("desea seguir ingresando numeros? si/no");


  }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
