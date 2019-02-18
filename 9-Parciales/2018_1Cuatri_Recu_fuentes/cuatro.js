function mostrar()
{
    var libro;
    var precio;
    var tarjeta;


    libro = prompt("Cuantos libros compró?");
    precio = prompt("Cual fue el precio?");
    tarjeta= prompt("compro con tarjeta? si/no");

    libro= parseInt(libro);
    precio=parseInt(precio);
    
    
    if ( libro >= 2 && precio >= 2000 ){
        precio = precio - (precio*25/100);
    }else{
        if(precio<=2000 && libro >= 2){
            precio = precio - (precio*10/100);
        }else{
            if(precio>=2000 && libro < 2){
                precio = precio - (precio*15/100);
            }
        }
    }

    if(tarjeta == "si"){
            precio = precio + (precio*10/100);
    }
    alert("Compró " + libro + " libros, por el precio de "+ precio + " y "+ tarjeta + " pagó con tarjeta")
}
