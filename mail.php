<?php
if(isset($_POST['submit'])){
$destino="monicadenegri.chugnas@gmail.com";
$nombre=$_POST["first_name"];
$correo=$_POST["email"];
$telf=$_POST["phone"];
$mesage=$_POST["message"];

if ($_POST['stopspam'] != ""){
 // Es un SPAMbot
 exit();
 
} else {
 // Es un usuario real, proceder a enviar el formulario.
 
}

$contenido="Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTel�fono: " . $telf . "\nMensaje: "  . $mesage;
mail($destino, "Contacto", $contenido);
 
header("Location:thanks.html");
}


?>