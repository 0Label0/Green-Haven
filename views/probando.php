<?php 

$arrayLenguajes = ['HTML', 'CSS', 'JavaScript', 'GDScript', 'Python','SQLite' ,'Java','Git', 'PHP'];
$newElement = 'TypeScript'; 
array_splice($arrayLenguajes, 7 , 0, $newElement);



function createJSON($nombre,$apellido,$edad,$clase) {
    $datos = array(
        'nombre' => $nombre,
        'apellido'=> $apellido,
        'edad' => $edad,
        'clase' => $clase,
    );
    return $datos;

}
   

$datos1 = createJSON('Hector','Ventura',19,'Programación');
$datos2 = createJSON('Adam', 'Jamal', 17, 'Ciencias');
$datos3 = createJSON('Jennifer', 'Ortegón', 18, 'Cine');


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Probando php</title>
    <style>
        html {
            background-color : #020202;
            color : #fff;
        }
        span {
            margin-left : 10px
        }
    </style>
</head>
<body>
    <ul>

        <?php foreach ($arrayLenguajes as $lenguale) : ?>     
        <li><?= $lenguale ?></li>
        <?php endforeach;?>
        
    </ul>

    <ul>

        <li><?= $datos1['nombre']?> <span><?=$datos1['apellido']?></span></li>
        <li><?= $datos2['nombre']?><span><?= $datos2['apellido'] ?></span></li>
        <li><?= $datos3['nombre']?><span><?= $datos3['apellido'] ?></span></li>

    </ul>
</body>
</html>