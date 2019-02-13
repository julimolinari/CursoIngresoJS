function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("Tienen 30 días");
        break;

    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert("Tienen 31 días");
        break;

    case "Febrero":
        alert("Tiene 29 días");
        break;

    


}
	
	



}//FIN DE LA FUNCIÓN