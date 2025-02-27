<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collecte des données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Destinataire de l'email
    $to = "votre-email@domaine.com"; // Remplacez par votre adresse e-mail
    
    // Sujet de l'email
    $subject = "Nouveau message de $name";
    
    // Corps de l'email
    $body = "Vous avez reçu un message de votre formulaire de contact.\n\n".
            "Nom: $name\n".
            "Email: $email\n\n".
            "Message:\n$message";
    
    // En-têtes de l'email
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Envoi de l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.";
    } else {
        echo "Désolé, une erreur est survenue. Veuillez réessayer plus tard.";
    }
}
?>
