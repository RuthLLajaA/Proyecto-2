function Saludar() {
  var nombre = document.getElementById("nombre").value;
  var Saludo = `Hola ${nombre}! estamos para ayudarte`;
  alert(Saludo);
  console.log(nombre);
  localStorage.setItem("name",nombre);
  document.getElementById("siguiente").hidden=false;
  document.getElementById("ocultar").hidden=true;
}
function mostrar(){
  document.getElementByClassName("desencriptar").hidden=false;
}