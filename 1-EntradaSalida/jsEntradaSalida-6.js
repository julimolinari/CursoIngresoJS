/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var uno = parseInt(document.getElementById("numeroUno").value);
    var dos = parseInt(document.getElementById("numeroDos").value);

    var suma= uno + dos;


    alert("La suma es "+ suma);


}

