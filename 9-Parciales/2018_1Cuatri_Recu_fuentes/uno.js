
function mostrar()
{
    var mascota1 = prompt("Ingrese nombre mascota: ");
    var peso1 = parseInt(prompt("Ingrese su peso: "));

    var mascota2 = prompt("Ingrese nombre de la otra mascota: ");
    var peso2 = parseInt(prompt("Ingrese su peso: "));


    

     var pesoTotal = peso1 + peso2;

    alert("Tenes dos mascotas " + mascota1 + " y "+mascota2+ ", que pesan " + peso1 + " y "+ peso2 + " la suma de los kilos es "+ pesoTotal);
}
