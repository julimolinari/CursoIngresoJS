function mostrar()
{

	var contador=0;
  var acumulador=0;

  while(contador<5){
    var numero = parseInt(prompt("Ingrese un número: "));
    //chequeo que el numero no sea NaN - validacion mediante funcion isNaN
    if(isNaN(numero)){
      continue
    }

    acumulador = numero + acumulador;// la suma mas el numero en el acumulador

    contador++;

  }



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;//sobre 5 o sobre acumulador

}//FIN DE LA FUNCIÓN
