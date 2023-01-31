function encriptar(){
      msgError = "Error,vuelve a intentarlo";
      var mensaje = document.getElementById("msg").value;
      var password = document.getElementById("pass").value;
      localStorage.setItem("name",password);
      //alert(Mensaje+"+"+password);
        document.getElementById("error").innerHTML = "";
        var encryted = btoa(mensaje);
        document.getElementById("pass").innerHTML="";
        document.getElementById("demo1").innerHTML = encryted;
   
      
   }
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
 function inicio(){
    passSistema = "13062013"
    msgError = "Error en la contraseña, vuelve a intentar "
    var mensaje = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if(passSistema == password){
      console.log(password)
       alert("Puedes encriptar tu mensaje");
       document.getElementById("button").href="encriptar.html";
    }else{
      console.log(password)
      alert(msgError);
      document.getElementById("button").href="#"
    } 
  } 
  document.getElementById("button").addEventListener("click", guardarNombre)
}
