function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "m" && sexo!="f"){
  alert("Sexo no valido");
  sexo= prompt("Ingrese un sexo valido: ");

}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
