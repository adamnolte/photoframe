<?php
    $dir = "../photos";
    $files = array_slice(scandir($dir),2);
    
    echo json_encode($files);
?>