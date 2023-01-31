function desencriptar(){
  document.getElementById("pass").innerHTML=" ";
  var mensajeCodigo = document.getElementById("msgCodigo").value;
  var contraseña=document.getElementById("pass").value;
  var name= localStorage.getItem("name");
  if(name==contraseña){
    var decrypted = atob(mensajeCodigo);
    document.getElementById("demo2").innerHTML = decrypted;
  }else{
    
    alert("error");
   document.getElementById("error").innerHTML = msgError;
  }
 
}
function mostrar(){
  document.getElementByClassName("desencriptar").hidden=false;
}