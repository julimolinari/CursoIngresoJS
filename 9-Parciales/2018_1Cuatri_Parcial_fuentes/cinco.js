function mostrar()
{
    var planeta = prompt("Ingrese un planeta");

    switch(planeta){

        case "tierra":
            alert("Acá vivimos.");
            break;

        case "mercurio":
        case "venus":
            alert("Están más cerca del sol.");
            break;

        case "urano":
        case "neptuno":
        case "jupiter":
        case "saturno":
        case "marte":
        case "pluton":
            alert("Acá hace más frío.");
            break;

        default:
            alert("Este planeta no existe");
    }

}
