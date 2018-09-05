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

talle = [1,2,3,4,5,6];
taco = 2;
pares = 21.5;
prendas = taco*pares;

console.log(nombre);
console.log(nroCorte);
console.log(fecha);
console.log(talle.toString());
console.log(taco);
console.log(pares);
console.log(color.toString());
console.log(prendas);
}