function mostrar()
{
    var uno =parseInt(prompt("Ingrese número uno: "));
    var dos = parseInt(prompt("Ingrese número dos: "));

    if(uno == dos){
        alert(uno +""+ dos);
    }else{
        if(uno>dos){
            alert(uno-dos);
        }else{
            var suma= uno + dos;
            if(suma > 10){
                alert("La suma es " + suma + " y es mayor a 10");
            }else{
                alert(suma)
            }
        }
    }
}
