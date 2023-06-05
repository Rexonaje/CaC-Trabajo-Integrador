//const { Alert } = require("bootstrap");


let botonResumen=document.getElementById("Resumen");
botonResumen.addEventListener("click", (event)=>{
event.preventDefault();
    

let Nombre=document.getElementById("Nombre").value;
let Apellido=document.getElementById("Apellido").value;
let Correo=document.getElementById("Correo").value;
let Cantidad=document.getElementById("Cantidad").value;
let Categoria=document.getElementById("Categoria").value;
let precio=200;
//calcular precio =200 - porcentaje
//console.log(Categoria);
switch(Categoria){
    case "Estudiante":
        precio=(200*0.8);
        break;
    case "Trainee":
        precio=(200*0.5);
        break;
    case "Junior":
        precio=(200*0.15);
        break;
}
//console.log(precio);
if(Nombre!=""&&Apellido!=""&&Correo!=""&&Cantidad!=""&&Categoria!=""){
    let ParrafResumen=document.createElement("p");
    ParrafResumen.textContent= 
    "Nombre: " + Nombre + "\n" +
    "Apellido: " + Apellido + "\n" +
    "Correo: " + Correo + "\n" +
    "Cantidad: " + Cantidad + "\n" +
    "Categoría: " + Categoria;
 let DisplayResumen=document.querySelector(".DisplayResumen");
 DisplayResumen.innerHTML = "";
 DisplayResumen.appendChild(ParrafResumen);
let  totalPagar = document.querySelector("#TotalPagar");
 totalPagar.textContent =  precio;

 DisplayResumen.classList.add("container", "text-center", "bg-light", "text-dark", "p-3", "m-1", "fw-bold","border" ,"border-primary" );
}else{
    document.getElementById("Nombre").classList.add("border-danger");
    document.getElementById("Apellido").classList.add("border-danger");
    document.getElementById("Correo").classList.add("border-danger");
    document.getElementById("Cantidad").classList.add("border-danger");
    //document.getElementById("Categoria").classList.add("border-danger");
    
}
});
