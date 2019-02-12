function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.floor(Math.random()*(11-1))+1; //math.random devuelve [0,1) - para que sea apartir de uno le + 1- 
	alert(aleatorio);

}//FIN DE LA FUNCIÓN

// FORMULA PARA NUMEROS RANDOM ENTRE CIERTO RANGO
// Math.floor(math.random()*(max-min))+min;