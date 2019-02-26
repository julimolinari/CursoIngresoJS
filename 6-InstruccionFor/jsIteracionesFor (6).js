function mostrar()
{
var numero = parseInt(prompt("Ingrese un numero: "));
var cont= 0;
for (i=1; i<= numero; i++ ){
    if(i%2 ==0) {
        alert(i);
        cont++;
    }
}
alert("Cantidad de numeros pares: " + cont);



}//FIN DE LA FUNCIÓN