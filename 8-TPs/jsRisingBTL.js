/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	 var edad;
	 var sexo;
	 var estado;
	 var sueldo;
	 var legajo;
	 var nacionalidad;
	 
	
	edad = parseInt (prompt("Ingrese edad: "));
	
	
	
	while(edad < 18 || edad > 90 || isNaN(edad)){
		
		alert("Ingrese edad válida");
		edad = prompt("Ingrese edad: ");
				
	}document.getElementById("Edad").value = edad;	
	
	
	
	
	sexo = prompt("Ingrese su sexo (F ó M): ");

	while(sexo != "M" && sexo!="F"){
		alert("Sexo no valido");
		sexo= prompt("Ingrese un sexo válido(F ó M): ");
		}

		document.getElementById('Sexo').value=sexo;
		
		
	
	estado = parseInt(prompt("Ingrese estado cívil (1 -para soltero, 2 -para casados, 3 -para divorciados y 4 -para viudos): "));
	
	
	while(estado>4 || isNaN(estado)){
		alert("Estado cívil inválido.");
		estado = parseInt(prompt("Ingrese estado cívil válido (1 -para soltero, 2 -para casados, 3 -para divorciados y 4 -para viudos): "));
		
	}
	
	switch(estado){
		case 1:
		document.getElementById("EstadoCivil").value = "Soltero";
		break;
		
		case 2:
		document.getElementById("EstadoCivil").value = "Casado";
		break;
		
		case 3:
		document.getElementById("EstadoCivil").value = "Divorciado";
		break;
		
		case 4:
		document.getElementById("EstadoCivil").value = "Viudo";
		break;
		
	}
	
	sueldo =parseInt(prompt("Ingrese su sueldo bruto: "));
	
	while(sueldo<8000 || isNaN(sueldo)){
		alert("Sueldo inválido");
		sueldo =parseInt(prompt("Ingrese su sueldo bruto válido: "));
		
	}
	document.getElementById("Sueldo").value= sueldo;
}
