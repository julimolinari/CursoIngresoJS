function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.floor(Math.random()*(11-1))+1;
	alert(aleatorio);
	
	if(aleatorio>=9){
		alert("EXCELENTE")
	}else{ 
		if (aleatorio>=4){	
			alert("APROBÓ")
		}else{
			alert("Vamos, la proxima se puede")
	    }   
     }

}//FIN DE LA FUNCIÓN