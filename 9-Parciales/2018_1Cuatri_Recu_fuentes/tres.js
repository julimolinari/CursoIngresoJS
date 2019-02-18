function mostrar()
{
    var totalCuenta =parseInt(prompt("Ingrese el total de la cuenta a pagar: "));
    var amigos = parseInt(prompt ("Ingrese la cantidad de amigos que pagaran:"));

   

    var total = totalCuenta+ (totalCuenta*10/100)+ (totalCuenta*21/100);

    var pagar=total/amigos;

    alert("La cuenta es de " + totalCuenta + " el total más propina e IVA es de "+ total + " cada amigo debera pagar: "+ pagar );
}
