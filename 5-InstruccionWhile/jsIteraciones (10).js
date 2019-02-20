function mostrar()
{

	var contador=0;
	//declarar contadores y variables

	var respuesta="si";
var acumulador=0;
var contador=0;
var sumaP=0;
var sumaN=0;
var cantP=0;
var cantN=0;
var cantCeros=0;
var promP;
var promN;
var diferencia;
var cantPares=0;



  while (respuesta == "si"){

  var numero = parseInt(prompt("Ingrese un numero: "))
  if(isNaN(numero)){
    continue
  }

  if(numero>=0){
    sumaP = numero + sumaP;
    cantP++;
  }else{
    sumaN= numero + sumaN;
    cantN++;
  }if(numero ==0){
    cantCeros++;
  }

  if(numero % 2 == 0){
    cantPares++;

  }

  promP = sumaP/cantP;
  promN = sumaN/cantN;
  diferencia = sumaP - sumaN;
  respuesta= prompt("desea seguir ingresando numeros? si/no");


  }


document.writeln("1.Suma Negativos: "+ sumaN + "   " );
document.writeln("2.Suma Positivos: "+ sumaP + "   ");
document.writeln("3.Cantidad Negativos: "+ cantN + "   ");
document.writeln("4.Cantidad Positivos: "+ cantP + "   ");
document.writeln("5.Cantidad Ceros: "+ cantCeros+ "   " );
document.writeln("6.Cantidad Pares: "+ cantPares+ "   " );
document.writeln("7.Promedio Positivo: "+ promP+ "   " );
document.writeln("8.Promedio Negativo: "+ promN + "   ");
document.writeln("9.Diferencia: "+ diferencia );




}//FIN DE LA FUNCIÓN
