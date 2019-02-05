/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	 var uno = parseInt(document.getElementById("numeroUno").value);
    var dos = parseInt(document.getElementById("numeroDos").value);

    var suma= uno + dos;


    alert("La suma es "+ suma);
}

function restar()
{
	 var uno = parseInt(document.getElementById("numeroUno").value);
    var dos = parseInt(document.getElementById("numeroDos").value);

    var suma= uno - dos;


    alert("La resta es "+ suma);
}

function multiplicar()
{ 
	 var uno = parseInt(document.getElementById("numeroUno").value);
    var dos = parseInt(document.getElementById("numeroDos").value);

    var suma= uno * dos;


    alert("La multiplicación es "+ suma);
}

function dividir()
{
	 var uno = parseInt(document.getElementById("numeroUno").value);
    var dos = parseInt(document.getElementById("numeroDos").value);

    var suma= uno / dos;


    alert("La división es "+ suma);
}

