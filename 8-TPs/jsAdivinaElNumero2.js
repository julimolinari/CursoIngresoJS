/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = Math.floor(Math.random()*(101-1))+1;
   console.log(numeroSecreto);
   
		//alert(numeroSecreto );
	

}

function verificar()
{
  document.getElementById("intentos").value = contadorIntentos+=1; 
var ingresado = parseInt(document.getElementById("numero").value);

	 if(numeroSecreto == ingresado){
     alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
   }else{
     if(ingresado>numeroSecreto){
       alert("Te pasaste");
     }else{
       if(ingresado<numeroSecreto){
         alert("Te falta");
       }
     }
   }

	if(ingresado == numeroSecreto){
	
	switch(contadorIntentos){
		case 1:
			alert("Usted es un Psíquico");
			break;
		
		case 2:
			alert("excelente percepción");
			break;
			
		case 3: 
			alert( "Esto es suerte");
			break;
		
		case 4:
			alert("Excelente técnica");
			break;
			
		case 5:
			alert("usted está en la media");
			break;
		
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alert("falta técnica");
			break;
			
		default:
			alert("afortunado en el amor!!");
		
	}
	}
}