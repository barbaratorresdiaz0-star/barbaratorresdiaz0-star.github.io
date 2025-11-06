console.log("Hola mundo")
//Codigo para mostrar...
const fecha=document.querySelector(".fecha");
fecha.textContent=new Date().toLocaleDateString("es-CL")

const boton=document.getElementById("btnEnviar");
const campo=document.getElementById("mensaje");
/*
boton.onclick=function(){
    alert("Bienvenido");
    campo.value="";
   
}
*/
 boton.addEventListener("click", function(){
    alert("Bienvenido");
    campo.value="";

 });

 document.getElementById("prueba").innerHTML="<h1>Inscribete Aquì</h1>"

 