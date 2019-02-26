function mostrar()
{
    var numero = parseInt(prompt("Ingrese un numero: "));
    var cont=0;

 while(isNaN(numero)){
        numero = parseInt(prompt("ingrese un numero vàlido: "));
    }

    for (i=0; i<= numero; i++ ){
       if(numero % i ==0){
           alert(i)
           cont++;
       }
    }
    alert("Cantidad de divisores: "+cont);


}//FIN DE LA FUNCIÓN