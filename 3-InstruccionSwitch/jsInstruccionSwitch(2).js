function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){

    case "Agosto":
    case "Julio":
        alert("Abrigate que hace frio");
        break;

    case "Junio":
    case "Mayo":
    case "Abril":
    case "Marzo":
    case "Febrero":
        alert("Falta poco para el invierno");
        break;

    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    
        alert("Ya pasó el invierno");
        break;
    
    

}




}//FIN DE LA FUNCIÓN