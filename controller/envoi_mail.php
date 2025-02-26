<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Envoyer l'email
    mail("mazuriereve@gmail.com", "Message de $name", $message, "From: $email");
    
    echo "Message envoyé avec succès!";
}
?>
