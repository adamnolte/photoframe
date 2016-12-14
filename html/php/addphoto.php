<?php

    $base64img = file_get_contents('php://input');

    //Delete our first part since not valid code
    //Used from http://stackoverflow.com/questions/11511511/how-to-save-a-png-image-server-side-from-a-base64-data-string
    $base64img = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64img));
    
    //Use date for identifier
    $date = date("Y-m-d-h:i:s");
    
    file_put_contents("../photos/". $date . "-img.png", $base64img);
    
    echo $date . "-img.png";
    
?>