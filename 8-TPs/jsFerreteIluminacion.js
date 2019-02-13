/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
   
 	
}


/*
    var cantLamp = parseInt(document.getElementById("Cantidad").value);
    var precio = 35;
    var precios = precio * cantLamp;
    //var precioDesc = parseInt(document.getElementById("precioDescuento").value);
    var marca = document.getElementById("Marca").value;

    if(cantLamp >= 6){
        document.getElementById("precioDescuento").value = precios -(precios*50 / 100);
    }else{
        if(cantLamp == 5 && marca=="ArgentinaLuz"){
            document.getElementById("precioDescuento").value = precios - (precios*40 / 100);
        }else{
            if(cantLamp == 5 && marca !="ArgentinaLuz"){
                document.getElementById("precioDescuento").value = precios - (precios *30 / 100);
            }else{
                if(cantLamp==4 && (marca=="ArgentinaLuz" || marca=="FelipeLamparas")){
                    document.getElementById("precioDescuento").value = precios - (precios *25 / 100);
                }else{
                    if(cantLamp==4 && marca!="ArgentinaLuz" && marca!="FelipeLamparas"){
                        document.getElementById("precioDescuento").value = precios - (precios *20 / 100);
                    }else{
                        if(cantLamp == 3 && marca == "ArgentinaLuz"){
                            document.getElementById("precioDescuento").value = precios - (precios *15 / 100);
                        }else{
                            if(cantLamp == 3 && marca == "FelipeLamparas"){
                                document.getElementById("precioDescuento").value = precios - (precios * 10 / 100);
                            }else{
                                if(cantLamp==3 && marca!="ArgentinaLuz" && marca!="FelipeLamparas"){
                                    document.getElementById("precioDescuento").value = precios - (precios *5 / 100);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
if((document.getElementById("precioDescuento").value) > 120){
                document.getElementById("precioDescuento").value =parseInt(document.getElementById("precioDescuento").value) + parseInt((document.getElementById("precioDescuento").value)  * 10 /100);
                document.getElementById("precioDescuento").value=("Usted pagó " +(document.getElementById("precioDescuento").value  * 10 /100) + " de impuesto" );
}*/