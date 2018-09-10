document.getElementById("botonEnviar").addEventListener("click", myFunction);

function myFunction(){
    
    var nombre = document.getElementById("Nombre").value;
    var nroCorte = document.getElementById("nroCorte").value;

    var fecha = new Date();
    
    var talle = [1,2,3,4,5,6];
	var taco = 2;
	var pares = 21.5;
	var prendas = taco*pares;

	if(document.getElementById("Rojo").checked){
		color = "Rojo";	
	}

	if(document.getElementById("Negro").checked){
		color = "Negro";	
	}

	if(document.getElementById("Blanco").checked){
		color = "Blanco";	
	}

	console.log(nombre);
	console.log(nroCorte);
	console.log(fecha);
	console.log(talle);
	console.log(taco);
	console.log(pares);
	console.log(color);
	console.log(prendas);
}
/*
var nombre;
var nroCorte;
var fecha = new Date();
var talle;
var taco;
var pares;
var color;


function enviar(){
nombre = document.getElementById("Nombre").value;
nroCorte = document.getElementById("nroCorte").value;


if(document.getElementById("Rojo").checked){
color = "Rojo";	
}

if(document.getElementById("Negro").checked){
color = "Negro";	
}

if(document.getElementById("Blanco").checked){
color = "Blanco";	
}



console.log(nombre);
console.log(nroCorte);
console.log(fecha);
console.log(talle.toString());
console.log(taco);
console.log(pares);
//console.log(color.toString());
console.log(prendas);
}

document.getElementById("botonEnviar").addEventListener("click", enviar);
*/