<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $name = trim($_POST['name']);
    $mail = trim($_POST['mail']);
    $tel = trim($_POST['tel']);
    $checkbox = trim($_POST['checkbox']) ? $_POST['checkbox'] : '';


    $errors = [];
    
    
    if (empty($name)) {
        $errors[] = 'El nombre está vacío';

    } else if(!preg_match("/[a-zA-ZáéíóúÁÉÍÓÚ\s]/", $name)){
        $errors[] = 'Debe escribir el nombre sólo con letras del alfabeto Español';

    } else if (empty($mail)) {
        $errors[] = 'El mail está vacío';

    } else if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Mail no válido';

    } else if (empty($tel)) {
        $errors[] = 'El teléfono está vacío';

    } else if (!preg_match("/[0-9]{4}-[0-9]{4}-[0-9]{5}/", $tel)) {
        $errors[] = 'El número de teléfono es inválido';
    }

    if (empty($errors)) {
        // Enviar los datos al server
        echo 'formulario enviado correctamente';
    }else {
        foreach ($error as $errors) {
            echo "<p>$error</p>";
        }
    }

}