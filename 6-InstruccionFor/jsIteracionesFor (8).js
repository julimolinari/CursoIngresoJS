function mostrar()
{
    var num = parseInt(prompt("ingrese un numero: "));
    var cont = 0;


    for(var i = 2; i<num; i++){
    if(num % i ==0){
        cont++;
        break;
    }
}

if(cont==2){
    alert("Es primo");
}else{
    alert("No es primo");
}


}//FIN DE LA FUNCIÓN


